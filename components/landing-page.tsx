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
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Generate high-quality podcast episodes in seconds with AI-powered processing",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: Sparkles,
            title: "AI-Powered",
            description: "Advanced AI automatically structures your content into engaging chapters",
            gradient: "from-orange-500 to-red-500"
        },
        {
            icon: Mic,
            title: "Studio Quality",
            description: "Natural-sounding voices with professional audio quality",
            gradient: "from-green-500 to-emerald-500"
        },
        {
            icon: Languages,
            title: "Smart Translation",
            description: "Powered by Lingo.dev for accurate, context-aware translations",
            gradient: "from-violet-500 to-purple-500"
        },
        {
            icon: Download,
            title: "Easy Export",
            description: "Download individual chapters or merge them into complete episodes",
            gradient: "from-pink-500 to-rose-500"
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
            {/* Animated gradient background */}
            <div className="fixed inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50 dark:from-gray-950 dark:via-purple-950/20 dark:to-blue-950/20" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.1),rgba(0,0,0,0))]" />

                {/* Animated blobs */}
                <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob" />
                <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 dark:bg-yellow-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000" />
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 dark:bg-pink-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000" />
            </div>

            <div className="container mx-auto px-4 py-12 sm:py-16 lg:py-20">
                {/* Hero Section */}
                <div className="relative text-center space-y-8 mb-20">
                    {/* Logo/Brand */}
                    <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-200/50 dark:border-purple-500/30 backdrop-blur-sm">
                        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <Mic className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-semibold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                            Lingocast
                        </span>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-4 max-w-4xl mx-auto">
                        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
                            <span className="bg-gradient-to-r from-gray-900 via-purple-800 to-pink-800 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent">
                                Turn Blogs into
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                Multilingual Podcasts
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Transform any blog post into professional podcast episodes in 18+ languages.
                            Powered by AI and advanced translation technology.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button
                            size="lg"
                            onClick={onGetStarted}
                            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Get Started Free
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity blur" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-2 border-purple-200 dark:border-purple-700 hover:bg-purple-50 dark:hover:bg-purple-950/50 px-8 py-6 text-lg font-semibold rounded-xl transition-all duration-300"
                        >
                            Watch Demo
                        </Button>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap items-center justify-center gap-6 pt-8 text-sm text-gray-500 dark:text-gray-400">
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span>No credit card required</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span>18+ languages</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            <span>Instant processing</span>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mb-20">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                            Powerful Features
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Everything you need to create professional multilingual podcasts
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="group relative overflow-hidden border-2 border-gray-100 dark:border-gray-800 hover:border-transparent dark:hover:border-transparent transition-all duration-300 hover:shadow-2xl hover:scale-105"
                            >
                                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                                <CardContent className="p-6 space-y-4">
                                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                                        <feature.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
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
                        <h2 className="text-3xl sm:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent">
                            How It Works
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                            Create your multilingual podcast in four simple steps
                        </p>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {steps.map((step, index) => (
                            <div key={index} className="relative">
                                <div className="text-center space-y-4">
                                    <div className="relative mx-auto w-20 h-20">
                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl rotate-6 opacity-20" />
                                        <div className="relative bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center w-full h-full shadow-lg">
                                            <span className="text-2xl font-bold text-white">{step.number}</span>
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                        {step.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-purple-300 to-pink-300 dark:from-purple-700 dark:to-pink-700" />
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="relative">
                    <Card className="border-2 border-purple-200 dark:border-purple-800 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/30 overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20" />
                        <CardContent className="relative p-12 text-center space-y-6">
                            <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
                                Ready to get started?
                            </h2>
                            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                                Join thousands of content creators who are already using Lingocast to reach global audiences
                            </p>
                            <Button
                                size="lg"
                                onClick={onGetStarted}
                                className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
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
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
        </div>
    )
}
