"use client"

import { Loader2, CheckCircle2, Circle, XCircle, AudioLines, Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

type StepStatus = "pending" | "processing" | "completed" | "error"

interface LoadingStep {
  id: string
  label: string
  status: StepStatus
}

interface LoadingScreenProps {
  steps: LoadingStep[]
  url?: string
}

export function LoadingScreen({ steps, url }: LoadingScreenProps) {
  return (
    <div className="relative z-10 w-full max-w-lg mx-auto px-4 sm:px-0 mt-8">
      {/* Decorative top icon */}
      <div className="flex justify-center mb-8">
        <div className="relative">
          <div className="absolute inset-0 bg-primary blur-2xl opacity-20 animate-pulse rounded-full" />
          <div className="w-20 h-20 bg-card rounded-none flex items-center justify-center border border-primary shadow-[0_0_20px_rgba(204,255,0,0.15)] relative overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(204,255,0,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-pulse" />
            <AudioLines className="w-10 h-10 text-primary relative z-10" />
          </div>
          <div className="absolute -top-2 -right-2 w-8 h-8 bg-background backdrop-blur-md rounded-none flex items-center justify-center border border-border shadow-[0_0_10px_rgba(204,255,0,0.1)]">
            <Sparkles className="w-4 h-4 text-primary" />
          </div>
        </div>
      </div>

      <div className="space-y-8 relative z-20">
        <div className="text-center space-y-3">
          <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tighter text-foreground">
            Synthesizing Podcast
          </h2>
          <div className="flex flex-col items-center justify-center space-y-1">
            <p className="text-sm sm:text-base text-muted-foreground font-medium uppercase tracking-widest">
              Processing data stream...
            </p>
            {url && (
              <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-border mt-4 bg-card max-w-[90%] overflow-hidden">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 bg-primary"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground truncate">
                  Target:{" "}
                  <span className="text-primary font-mono">
                    {url.replace(/^https?:\/\//, "")}
                  </span>
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="relative pt-4">
          <div className="absolute left-[27px] top-10 bottom-10 w-px bg-border hidden sm:block" />

          <div className="space-y-4">
            {steps.map((step) => (
              <div
                key={step.id}
                className={cn(
                  "relative flex items-center gap-4 p-4 sm:p-5 border transition-all duration-500 bg-card rounded-none",
                  step.status === "processing"
                    ? "border-primary shadow-[4px_4px_0px_rgba(204,255,0,0.1)] scale-[1.02] z-10"
                    : step.status === "completed"
                      ? "border-border/50 opacity-80"
                      : "border-border/30 opacity-50"
                )}
              >
                <div className="flex-shrink-0 relative z-10 w-6 h-6 flex items-center justify-center bg-background border border-border">
                  {step.status === "completed" ? (
                    <div className="w-full h-full bg-primary text-primary-foreground flex items-center justify-center">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                  ) : step.status === "processing" ? (
                    <div className="relative flex items-center justify-center w-full h-full">
                      <div className="absolute inset-0 border border-primary animate-ping opacity-20" />
                      <Loader2 className="h-4 w-4 text-primary animate-spin" />
                    </div>
                  ) : step.status === "error" ? (
                    <XCircle className="h-4 w-4 text-destructive" />
                  ) : (
                    <Circle className="h-4 w-4 text-muted-foreground" />
                  )}
                </div>

                <div className="flex-1 min-w-0 py-1">
                  <p
                    className={cn(
                      "text-sm sm:text-base font-bold uppercase tracking-wider transition-colors",
                      step.status === "completed"
                        ? "text-foreground"
                        : step.status === "processing"
                          ? "text-primary"
                          : step.status === "error"
                            ? "text-destructive"
                            : "text-muted-foreground"
                    )}
                  >
                    {step.label}
                  </p>

                  {step.status === "processing" && (
                    <div className="mt-3 relative w-full h-1 bg-border overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-2/3 bg-primary animate-pulse" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
