"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

import { LanguageSwitcher } from "@/components/language-switcher"
import { ThemeToggle } from "@/components/theme-toggle"
import { LandingPage } from "@/components/landing-page"
import LightRays from "@/components/LightRays"
import PrismaticBurst from "@/components/PrismaticBurst"
import { LoadingScreen } from "@/components/loading-screen"
import { ProcessingStatus } from "@/components/processing-status"
import { ChapterCard } from "@/components/chapter-card"
import { PodcastFlow } from "@/components/podcast-flow"
import { Loader2, Link as LinkIcon, Sparkles, ArrowRight, Globe, Mic, Zap } from "lucide-react"
import { toast } from "sonner"
import {
  getCachedChapters,
  setCachedChapters,
  getCachedTranslation,
  setCachedTranslation,
  getCachedAudio,
  setCachedAudio,
  getAllCachedTranslations,
  getAllCachedAudios,
  saveCurrentSession,
  getCurrentSession,
  clearCurrentSession,
} from "@/lib/cache"

type StepStatus = "pending" | "processing" | "completed" | "error"

interface ProcessingStep {
  id: string
  label: string
  status: StepStatus
}

interface Chapter {
  id: string
  title: string
  content: string
  textContent: string
  wordCount: number
}

interface ChapterTranslation {
  title: string
  textContent: string
}

export default function Home() {
  const [url, setUrl] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [chapters, setChapters] = useState<Chapter[]>([])
  const [translations, setTranslations] = useState<Record<string, Record<string, ChapterTranslation>>>({})
  const [audioUrlsState, setAudioUrlsState] = useState<Record<string, Record<string, string>>>({})
  const [chapterCount, setChapterCount] = useState("3")
  const [sessionId] = useState(() => `session-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`)
  const [steps, setSteps] = useState<ProcessingStep[]>([
    { id: "scrape", label: "Scraping blog content", status: "pending" },
    { id: "chapters", label: "Generating chapters", status: "pending" },
    { id: "summarize", label: "Summarizing to 3 chapters", status: "pending" },
  ])
  const [mounted, setMounted] = useState(false)
  const [showLanding, setShowLanding] = useState(true)

  // Mark as mounted after hydration to prevent hydration mismatch
  useEffect(() => {
    setMounted(true)

    // Restore session only after hydration
    const session = getCurrentSession()
    if (session) {
      console.log("[Session] Restoring previous session:", session.url)
      setUrl(session.url)
      setChapters(session.chapters)
      setTranslations(session.translations)
      setAudioUrlsState(session.audioUrls)
      toast.success("Restored previous session")

      if (window.location.pathname !== '/podcast') {
        window.history.replaceState(null, '', '/podcast')
      }
      setShowLanding(false)
    } else {
      if (window.location.pathname !== '/') {
        window.history.replaceState(null, '', '/')
      }
    }
  }, [])

  // Save session whenever chapters/translations/audio changes
  useEffect(() => {
    if (chapters.length > 0) {
      saveCurrentSession(url, chapters, translations, audioUrlsState)
    }
  }, [chapters, translations, audioUrlsState, url])

  const updateStep = (stepId: string, status: StepStatus) => {
    setSteps((prev) =>
      prev.map((step) => (step.id === stepId ? { ...step, status } : step))
    )
  }

  const handleStartNew = () => {
    clearCurrentSession()
    setUrl("")
    setChapters([])
    setTranslations({})
    setAudioUrlsState({})
    setError(null)
    setChapterCount("3")
    setSteps([
      { id: "scrape", label: "Extracting content from the blog", status: "pending" },
      { id: "chapters", label: "Generating chapters", status: "pending" },
      { id: "summarize", label: "Summarizing to 3 chapters", status: "pending" },
    ])
    window.history.replaceState(null, '', '/')
    toast.success("Started new session")
  }

  const handleTranslateChapter = async (chapterId: string, language: string) => {
    const chapter = chapters.find((ch) => ch.id === chapterId)
    if (!chapter) return

    if (translations[chapterId]?.[language]) {
      return
    }

    const cachedTranslation = getCachedTranslation(chapterId, language)
    if (cachedTranslation) {
      console.log(`[Cache] Using cached translation for chapter ${chapterId} in ${language}`)
      setTranslations((prev) => ({
        ...prev,
        [chapterId]: {
          ...prev[chapterId],
          [language]: cachedTranslation,
        },
      }))
      return
    }

    try {
      const response = await fetch("/api/translate-chapter", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chapter,
          targetLocale: language,
          sourceLocale: "en",
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Translation failed")
      }

      const data = await response.json()
      const translation = data.translations[language]

      if (translation) {
        setCachedTranslation(chapterId, language, translation)
        setTranslations((prev) => ({
          ...prev,
          [chapterId]: {
            ...prev[chapterId],
            [language]: translation,
          },
        }))
      }
    } catch (error) {
      console.error("Translation error:", error)
      throw error
    }
  }

  const handleGenerateAudio = async (chapterId: string, language: string, text: string): Promise<string> => {
    const cachedAudio = getCachedAudio(chapterId, language)
    if (cachedAudio) {
      console.log(`[Cache] Using cached audio for chapter ${chapterId} in ${language}`)
      setAudioUrlsState((prev) => ({
        ...prev,
        [chapterId]: {
          ...prev[chapterId],
          [language]: cachedAudio,
        },
      }))
      return cachedAudio
    }

    try {
      // Trigger background job via Inngest
      const response = await fetch("/api/tts-async", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          language,
          chapterId,
          sessionId,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || "Audio generation failed")
      }

      const data = await response.json()

      // If cached, return immediately
      if (data.cached && data.audioUrl) {
        setCachedAudio(chapterId, language, data.audioUrl)
        setAudioUrlsState((prev) => ({
          ...prev,
          [chapterId]: {
            ...prev[chapterId],
            [language]: data.audioUrl,
          },
        }))
        return data.audioUrl
      }

      // Background job triggered - poll for completion
      const jobId = data.jobId
      console.log(`[Background] Audio generation job started: ${jobId}`)
      toast.info(`Audio generation started in background for ${language}`)

      // Poll for job completion
      const pollInterval = 2000 // 2 seconds
      const maxAttempts = 60 // Max 2 minutes
      let attempts = 0

      const pollJob = async (): Promise<string> => {
        if (attempts >= maxAttempts) {
          throw new Error("Audio generation timeout")
        }

        attempts++
        const jobResponse = await fetch(`/api/jobs?jobId=${jobId}`)

        if (!jobResponse.ok) {
          throw new Error("Failed to fetch job status")
        }

        const jobData = await jobResponse.json()
        const job = jobData.job

        if (job.status === "completed" && job.audioUrl) {
          console.log(`[Background] Audio generation completed: ${job.audioUrl}`)
          setCachedAudio(chapterId, language, job.audioUrl)
          setAudioUrlsState((prev) => ({
            ...prev,
            [chapterId]: {
              ...prev[chapterId],
              [language]: job.audioUrl,
            },
          }))
          toast.success(`Audio ready for ${language}`)
          return job.audioUrl
        } else if (job.status === "failed") {
          throw new Error(job.error || "Audio generation failed")
        } else {
          // Still processing, poll again
          await new Promise((resolve) => setTimeout(resolve, pollInterval))
          return pollJob()
        }
      }

      return await pollJob()
    } catch (error) {
      console.error("Audio generation error:", error)
      toast.error(`Failed to generate audio: ${error instanceof Error ? error.message : 'Unknown error'}`)
      throw error
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!url.trim()) {
      setError("Please enter a valid URL")
      return
    }

    const normalizedUrl = url.trim().toLowerCase()
    const numChapters = parseInt(chapterCount) || 3
    const cachedChapters = getCachedChapters(normalizedUrl, numChapters)

    if (cachedChapters && cachedChapters.length > 0) {
      console.log(`[Cache] Using cached chapters for ${normalizedUrl} with ${numChapters} chapters`)
      setChapters(cachedChapters)
      const chapterIds = cachedChapters.map((ch: Chapter) => ch.id)
      setTranslations(getAllCachedTranslations(chapterIds))
      setAudioUrlsState(getAllCachedAudios(chapterIds))
      toast.success("Loaded from cache")
      return
    }

    setIsLoading(true)
    setError(null)
    window.history.pushState(null, '', '/processing')
    setSteps([
      { id: "scrape", label: `Extracting content from the blog`, status: "pending" },
      { id: "chapters", label: "Generating chapters", status: "pending" },
      { id: "summarize", label: `Summarizing to ${numChapters} chapters`, status: "pending" },
    ])

    try {
      const urlPattern = /^https?:\/\/.+\..+/
      if (!urlPattern.test(normalizedUrl)) {
        throw new Error("Invalid URL format")
      }

      console.log("[Step 1/3] Starting scrape...")
      updateStep("scrape", "processing")
      const response = await fetch("/api/scrape", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ url: normalizedUrl }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        updateStep("scrape", "error")
        toast.error(errorData.error || "Failed to scrape blog", { id: "scrape" })
        throw new Error(errorData.error || "An error occurred")
      }

      const scrapedData = await response.json()
      console.log("[Step 1/3] Scrape completed:", scrapedData)
      updateStep("scrape", "completed")

      console.log("[Step 2/3] Starting chapter generation...")
      updateStep("chapters", "processing")
      const chaptersResponse = await fetch("/api/chapters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: scrapedData.content,
          textContent: scrapedData.textContent,
        }),
      })

      if (!chaptersResponse.ok) {
        const errorData = await chaptersResponse.json()
        updateStep("chapters", "error")
        toast.error(errorData.error || "Failed to generate chapters", { id: "chapters" })
        throw new Error(errorData.error || "Failed to generate chapters")
      }

      const chaptersData = await chaptersResponse.json()
      console.log("[Step 2/3] Chapters generated:", chaptersData)
      console.log(`[Step 2/3] Total chapters: ${chaptersData.totalChapters}, Total words: ${chaptersData.totalWords}`)
      updateStep("chapters", "completed")

      console.log("[Step 3/3] Starting summarization...")
      updateStep("summarize", "processing")

      const summarizeResponse = await fetch("/api/summarize-chapters", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chapters: chaptersData.chapters,
          targetChapters: parseInt(chapterCount) || 3,
        }),
      })

      if (!summarizeResponse.ok) {
        const errorData = await summarizeResponse.json()
        updateStep("summarize", "error")
        console.error("[Step 3/3] Summarization failed:", errorData)
        toast.error(errorData.error || "Failed to summarize chapters", { id: "summarize" })
        throw new Error(errorData.error || "Failed to summarize chapters")
      }

      const summarizedData = await summarizeResponse.json()
      console.log("[Step 3/3] Summarization completed:", summarizedData)
      console.log(`[Step 3/3] Reduced from ${summarizedData.originalChapters} to ${summarizedData.totalChapters} chapters`)
      console.log(`[Step 3/3] Word count: ${summarizedData.originalWords} → ${summarizedData.totalWords}`)
      updateStep("summarize", "completed")

      setCachedChapters(normalizedUrl, numChapters, summarizedData.chapters)
      setChapters(summarizedData.chapters)

      const chapterIds = summarizedData.chapters.map((ch: Chapter) => ch.id)
      setTranslations(getAllCachedTranslations(chapterIds))
      setAudioUrlsState(getAllCachedAudios(chapterIds))

      window.history.pushState(null, '', '/podcast')

      setTimeout(() => {
        setSteps([])
      }, 500)
    } catch (err) {
      console.error("Error in processing:", err)
      setError(err instanceof Error ? err.message : "An error occurred")
      window.history.pushState(null, '', '/')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <>
      <div className="absolute top-2 right-2 sm:top-4 sm:right-4 z-50 flex items-center gap-1.5 sm:gap-2">
        <ThemeToggle />
        <LanguageSwitcher />
      </div>
      {showLanding ? (
        <LandingPage onGetStarted={() => setShowLanding(false)} />
      ) : isLoading && chapters.length === 0 ? (
        <div className="relative flex min-h-screen items-center justify-center px-4 py-12 overflow-hidden">
          <div className="fixed inset-0 z-0 w-full h-full">
            <PrismaticBurst />
          </div>
          <LoadingScreen steps={steps} url={url} />
        </div>
      ) : !isLoading && chapters.length === 0 ? (
        <div className="relative flex min-h-screen items-center justify-center px-4 py-12 overflow-hidden">
          {/* Refined ambient background */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 dark:from-gray-950 dark:via-slate-950 dark:to-gray-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.08),transparent)] dark:bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(59,130,246,0.12),transparent)]" />
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(99,102,241,0.04),transparent)] dark:bg-[radial-gradient(ellipse_80%_50%_at_50%_100%,rgba(99,102,241,0.06),transparent)]" />
          </div>

          <div className="relative z-10 w-full max-w-xl mx-auto px-4 sm:px-6">
            {/* Branding */}
            <div className="flex flex-col items-center mb-8">
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-blue-500/5 border border-blue-200/50 dark:border-blue-500/15 backdrop-blur-sm mb-6">
                <div className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Mic className="w-3.5 h-3.5 text-white" />
                </div>
                <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">LingoCast</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-center mb-3">
                <span className="text-gray-900 dark:text-white">Paste a blog URL</span>
              </h1>
              <p className="text-base text-gray-500 dark:text-gray-400 text-center max-w-md">
                We'll extract the content, break it into chapters, and generate a podcast you can translate into 18+ languages.
              </p>
            </div>

            {/* Form Card */}
            <div className="rounded-2xl border border-gray-200/80 dark:border-gray-800 bg-white/70 dark:bg-gray-900/50 backdrop-blur-xl shadow-xl shadow-blue-500/5 p-6 sm:p-8">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* URL Input */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Blog URL</label>
                  <div className="relative">
                    <LinkIcon className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    <Input
                      type="url"
                      placeholder="https://example.com/blog-post"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      disabled={isLoading}
                      className="h-13 pl-11 text-base rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-400 transition-all"
                    />
                  </div>
                </div>

                {/* Chapter Count + Submit */}
                <div className="flex items-end gap-3">
                  <div className="space-y-2 flex-shrink-0">
                    <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Chapters</label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          <Select value={chapterCount} onValueChange={setChapterCount} disabled={isLoading}>
                            <SelectTrigger className="h-13 w-24 px-3 rounded-xl border-gray-200 dark:border-gray-700 bg-gray-50/50 dark:bg-gray-800/50 [&[data-size=default]]:!h-13">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <SelectItem key={num} value={num.toString()}>
                                  {num} {num === 1 ? "chapter" : "chapters"}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Number of podcast chapters to generate</p>
                      </TooltipContent>
                    </Tooltip>
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading || !url.trim()}
                    className="flex-1 h-13 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 text-base gap-2"
                  >
                    {isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin" />
                    ) : (
                      <>
                        Generate Podcast
                        <ArrowRight className="h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>

              {error && (
                <div className="mt-4 rounded-xl border border-red-200 dark:border-red-800/50 bg-red-50/80 dark:bg-red-950/20 px-4 py-3">
                  <p className="text-sm font-medium text-red-600 dark:text-red-400">{error}</p>
                </div>
              )}
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
              {[
                { icon: Globe, label: "18+ Languages" },
                { icon: Mic, label: "Studio Audio" },
                { icon: Zap, label: "AI-Powered" },
              ].map((item, i) => (
                <div key={i} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gray-100/80 dark:bg-gray-800/50 text-xs font-medium text-gray-500 dark:text-gray-400">
                  <item.icon className="h-3 w-3" />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Back to landing link */}
            <div className="text-center mt-6">
              <button
                type="button"
                onClick={() => setShowLanding(true)}
                className="text-sm text-gray-400 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
              >
                ← Back to home
              </button>
            </div>
          </div>
        </div>
      ) : (
        <>
          <div className="fixed inset-0 w-screen h-screen">
            <PodcastFlow
              steps={steps}
              chapters={chapters}
              translations={translations}
              audioUrls={audioUrlsState}
              onTranslate={handleTranslateChapter}
              onGenerateAudio={handleGenerateAudio}
              isLoading={isLoading}
              onStartNew={handleStartNew}
            />
          </div>
        </>
      )}
    </>
  )
}
