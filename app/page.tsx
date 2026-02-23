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
        <div className="relative flex min-h-screen items-center justify-center px-4 py-12 overflow-hidden bg-[#050505]">
          {/* Refined ambient background */}
          <div className="fixed inset-0 -z-10 bg-[#050505]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(204,255,0,0.03),transparent_40%)]" />
            <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
          </div>

          <div className="relative z-10 w-full max-w-xl mx-auto px-4 sm:px-6">
            {/* Branding */}
            <div className="flex flex-col items-center mb-10">
              <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full border border-border shadow-[0_0_15px_rgba(204,255,0,0.05)] bg-card mb-6 group cursor-default">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_10px_rgba(204,255,0,0.3)]">
                  <Mic className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-sm font-semibold tracking-wider uppercase text-primary">LingoCast</span>
              </div>

              <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-center mb-4 text-foreground">
                Paste a Blog URL
              </h1>
              <p className="text-base text-muted-foreground font-medium text-center max-w-md">
                We'll extract the content, break it into chapters, and generate a podcast you can translate into 18+ languages.
              </p>
            </div>

            {/* Form Card */}
            <div className="rounded-none border-2 border-border bg-card shadow-[4px_4px_0px_rgba(204,255,0,0.1)] hover:border-primary/50 transition-colors p-6 sm:p-10">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* URL Input */}
                <div className="space-y-3">
                  <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Blog URL</label>
                  <div className="relative">
                    <LinkIcon className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-primary" />
                    <Input
                      type="url"
                      placeholder="https://example.com/blog-post"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      disabled={isLoading}
                      className="h-14 pl-12 text-base rounded-none border-border bg-background focus:ring-0 focus:border-primary transition-all font-mono"
                    />
                  </div>
                </div>

                {/* Chapter Count + Submit */}
                <div className="flex flex-col sm:flex-row items-end gap-4 mt-6">
                  <div className="space-y-3 w-full sm:w-auto flex-shrink-0">
                    <label className="text-sm font-bold uppercase tracking-widest text-muted-foreground">Chapters</label>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <div>
                          <Select value={chapterCount} onValueChange={setChapterCount} disabled={isLoading}>
                            <SelectTrigger className="h-14 w-full sm:w-32 px-4 rounded-none border-border bg-background hover:bg-muted transition-colors font-mono">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent className="rounded-none border-border">
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                                <SelectItem key={num} value={num.toString()} className="font-mono">
                                  {num} {num === 1 ? "CH" : "CHs"}
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
                    className="flex-1 w-full h-14 rounded-none bg-primary hover:bg-primary/90 text-primary-foreground font-bold uppercase tracking-widest transition-transform hover:-translate-y-0.5 shadow-[4px_4px_0px_rgba(204,255,0,0.2)] hover:shadow-none translate-x-0 text-base"
                  >
                    {isLoading ? (
                      <Loader2 className="h-5 w-5 animate-spin mx-auto" />
                    ) : (
                      <span className="flex items-center justify-center gap-3">
                        Synthesize
                        <ArrowRight className="h-5 w-5" />
                      </span>
                    )}
                  </Button>
                </div>
              </form>

              {error && (
                <div className="mt-6 border border-destructive/50 bg-destructive/10 px-5 py-4">
                  <p className="text-sm font-bold uppercase tracking-widest text-destructive">{error}</p>
                </div>
              )}
            </div>

            {/* Feature pills */}
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              {[
                { icon: Globe, label: "18+ Languages" },
                { icon: Mic, label: "Studio Audio" },
                { icon: Zap, label: "AI-Powered" },
              ].map((item, i) => (
                <div key={i} className="inline-flex items-center gap-2 px-4 py-2 border border-border bg-card text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors">
                  <item.icon className="h-3 w-3" />
                  {item.label}
                </div>
              ))}
            </div>

            {/* Back to landing link */}
            <div className="text-center mt-8">
              <button
                type="button"
                onClick={() => setShowLanding(true)}
                className="text-sm font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
              >
                ← Back
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
