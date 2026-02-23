"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
    Globe,
    Zap,
    Sparkles,
    Mic,
    Languages,
    Download,
    ArrowRight,
    CheckCircle2
} from "lucide-react"

interface LandingPageProps {
    onGetStarted: () => void
}

export function LandingPage({ onGetStarted }: LandingPageProps) {

    const features = [
        {
            icon: Globe,
            title: "18+ Languages",
            description: "Transform your content into podcasts in any of 18+ supported languages",
            gradient: "from-sky-500 to-blue-600"
        },
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Generate high-quality podcast episodes in seconds with AI-powered processing",
            gradient: "from-indigo-500 to-blue-600"
        },
        {
            icon: Sparkles,
            title: "AI-Powered",
            description: "Advanced AI automatically structures your content into engaging chapters",
            gradient: "from-blue-500 to-indigo-600"
        },
        {
            icon: Mic,
            title: "Studio Quality",
            description: "Natural-sounding voices with professional audio quality",
            gradient: "from-teal-500 to-cyan-600"
        },
        {
            icon: Languages,
            title: "Smart Translation",
            description: "Powered by Lingo.dev for accurate, context-aware translations",
            gradient: "from-blue-600 to-violet-600"
        },
        {
            icon: Download,
            title: "Easy Export",
            description: "Download individual chapters or merge them into complete episodes",
            gradient: "from-slate-500 to-blue-600"
        }
    ]

    const steps = [
        {
            number: "01",
            title: "Paste URL",
            description: "Simply paste any blog post URL you want to convert"
        },
        {
            number: "02",
            title: "AI Processing",
            description: "Our AI analyzes and structures content into chapters"
        },
        {
            number: "03",
            title: "Select Languages",
            description: "Choose from 18+ languages for your podcast"
        },
        {
            number: "04",
            title: "Download",
            description: "Get your multilingual podcast ready to share"
        }
    ]

    return (
        <div className="relative min-h-screen overflow-hidden">
            {/* Refined gradient background */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/30 dark:from-gray-950 dark:via-slate-950 dark:to-gray-950" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.06),rgba(0,0,0,0))]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.06),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.04),rgba(0,0,0,0))]" />

                {/* Subtle animated blobs — muted blue/indigo tones */}
                <div className="absolute top-0 -left-4 w-96 h-96 bg-blue-200/40 dark:bg-blue-900/20 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob" />
                <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-200/30 dark:bg-indigo-900/15 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-96 h-96 bg-sky-200/30 dark:bg-sky-900/15 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
                {/* Hero Section */}
                <div className="relative text-center space-y-8 mb-20">
                    {/* Logo/Brand */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-500/5 border border-blue-200/60 dark:border-blue-500/20 backdrop-blur-sm">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                            <Mic className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                            LingoCast
                        </span>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-4 max-w-4xl mx-auto">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                            <span className="text-gray-900 dark:text-white">
                                Turn Blogs into
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                                Multilingual Podcasts
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-500 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                            Transform any blog post into professional podcast episodes in 18+ languages.
                            Powered by AI and advanced translation technology.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button
                            size="lg"
                            onClick={onGetStarted}
                            className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get Started Free
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-800/50 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                        >
                            Watch Demo
                        </Button>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>18+ languages</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                            <span>Instant processing</span>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            Powerful Features
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            Everything you need to create professional multilingual podcasts
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="group relative overflow-hidden border border-gray-200/80 dark:border-gray-800 bg-white/60 dark:bg-gray-900/40 backdrop-blur-sm hover:border-blue-200 dark:hover:border-blue-800/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/5 hover:-translate-y-1"
                            >
                                <CardContent className="p-6 space-y-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300`}>
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-sm">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* How it works */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
                            How It Works
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                            Create your multilingual podcast in four simple steps
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="text-center space-y-4">
                                    <div className="relative mx-auto w-20 h-20">
                                        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl rotate-6 opacity-15" />
                                        <div className="relative bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center w-full h-full shadow-lg shadow-blue-500/15">
                                            <span className="text-2xl font-bold text-white">{step.number}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-blue-200 to-indigo-200 dark:from-blue-800/50 dark:to-indigo-800/50" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="relative">
                    <Card className="border border-blue-100 dark:border-blue-900/30 bg-gradient-to-br from-blue-50/80 to-indigo-50/50 dark:from-blue-950/20 dark:to-indigo-950/10 overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-indigo-400/10 rounded-full blur-3xl" />
                        <CardContent className="relative p-12 text-center space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white">
                                Ready to get started?
                            </h2>
                            <p className="text-lg text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                                Join thousands of content creators who are already using LingoCast to reach global audiences
                            </p>
                            <Button
                                size="lg"
                                onClick={onGetStarted}
                                className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 hover:scale-105"
                            >
                                <span className="relative z-10 flex items-center gap-2">
                                    Start Creating Now
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            <style jsx global>{`
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }
        .animate-blob {
          animation: blob 10s infinite ease-in-out;
        }
        .animation-delay-2000 {
          animation-delay: 2.5s;
        }
        .animation-delay-4000 {
          animation-delay: 5s;
        }
      `}</style>
        </div>
    )
}
