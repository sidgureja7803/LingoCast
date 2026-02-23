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
        },
        {
            icon: Zap,
            title: "Lightning Fast",
            description: "Generate high-quality podcast episodes in seconds with AI-powered processing",
        },
        {
            icon: Sparkles,
            title: "AI-Powered",
            description: "Advanced AI automatically structures your content into engaging chapters",
        },
        {
            icon: Mic,
            title: "Studio Quality",
            description: "Natural-sounding voices with professional audio quality",
        },
        {
            icon: Languages,
            title: "Smart Translation",
            description: "Powered by Lingo.dev for accurate, context-aware translations",
        },
        {
            icon: Download,
            title: "Easy Export",
            description: "Download individual chapters or merge them into complete episodes",
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
        <div className="relative min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary selection:text-primary-foreground">
            {/* Dark abstract neon background */}
            <div className="fixed inset-0 -z-10 bg-[#050505]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(204,255,0,0.03),transparent_40%)]" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(204,255,0,0.02),transparent_40%)]" />
                <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
                <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-primary/10 to-transparent" />
            </div>

            <div className="container mx-auto px-4 py-12 sm:py-24 relative z-10">
                {/* Hero Section */}
                <div className="relative text-center space-y-10 mb-32">
                    {/* Logo/Brand */}
                    <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-card border border-border shadow-[0_0_15px_rgba(204,255,0,0.05)]">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shadow-[0_0_10px_rgba(204,255,0,0.3)]">
                            <Mic className="w-4 h-4 text-primary-foreground" />
                        </div>
                        <span className="text-sm font-semibold tracking-wider uppercase text-primary">
                            LingoCast
                        </span>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-6 max-w-4xl mx-auto">
                        <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.9]">
                            Turn Blogs Into <br />
                            <span className="text-primary [-webkit-text-stroke:1px_rgba(204,255,0,0.2)] drop-shadow-[0_0_20px_rgba(204,255,0,0.3)]">
                                Podcasts
                            </span>
                        </h1>
                        <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
                            Transform any blog post into professional, multilingual podcast episodes in 18+ languages. Powered by advanced AI.
                        </p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-6">
                        <Button
                            size="lg"
                            onClick={onGetStarted}
                            className="group relative bg-primary text-primary-foreground hover:bg-primary/90 rounded-none border border-primary px-10 py-7 text-lg font-bold uppercase tracking-wider transition-all duration-300 shadow-[4px_4px_0px_rgba(204,255,0,0.3)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
                        >
                            <span className="flex items-center gap-3">
                                Get Started Free
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="rounded-none border-border hover:bg-accent px-10 py-7 text-lg font-bold uppercase tracking-wider transition-colors"
                        >
                            Watch Demo
                        </Button>
                    </div>

                    {/* Trust badges */}
                    <div className="flex flex-wrap items-center justify-center gap-8 pt-10 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span>No Credit Card</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span>18+ Languages</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                            <span>Instant Generation</span>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter mb-4 text-foreground">
                            Powerful Features
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 opacity-90">
                        {features.map((feature, index) => (
                            <Card
                                key={index}
                                className="group bg-card border-border hover:border-primary/50 transition-colors duration-300 rounded-none"
                            >
                                <CardContent className="p-8 space-y-6">
                                    <div className="w-14 h-14 bg-background border border-border flex items-center justify-center group-hover:border-primary transition-colors">
                                        <feature.icon className="w-6 h-6 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold uppercase tracking-wide mb-3">
                                            {feature.title}
                                        </h3>
                                        <p className="text-muted-foreground text-sm font-medium">
                                            {feature.description}
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* How it works */}
                <div className="mb-32">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tighter mb-4 text-foreground">
                            The Process
                        </h2>
                        <div className="w-20 h-1 bg-primary mx-auto"></div>
                    </div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative p-6 border border-border bg-card">
                                <div className="space-y-6">
                                    <div className="text-4xl font-black text-primary/20 group-hover:text-primary transition-colors">
                                        {step.number}
                                    </div>
                                    <h3 className="text-xl font-bold uppercase tracking-widest text-foreground">
                                        {step.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm font-medium">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="relative">
                    <div className="border border-primary/20 bg-card p-12 sm:p-20 text-center space-y-8 relative overflow-hidden group hover:border-primary transition-colors duration-500">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(204,255,0,0.1),transparent_50%)]" />
                        <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tighter relative z-10">
                            Ready to Innovate?
                        </h2>
                        <p className="text-lg text-muted-foreground max-w-2xl mx-auto relative z-10 font-medium">
                            Step into the future of content distribution. Turn text into global voices in seconds.
                        </p>
                        <div className="pt-6 relative z-10">
                            <Button
                                size="lg"
                                onClick={onGetStarted}
                                className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-none px-12 py-8 text-xl font-bold uppercase tracking-widest transition-transform hover:scale-105"
                            >
                                Start Creating
                                <ArrowRight className="w-6 h-6 ml-3" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
