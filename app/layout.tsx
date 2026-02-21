import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import "./external-styles.css";
import { LingoProvider } from "@/lib/lingo";
import { TranslationLoader } from "@/components/translation-loader";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "LingoCast - Multilingual Podcast Generator",
  description: "Transform any blog post into a multilingual podcast in seconds. Generate high-quality audio files in 18+ languages with AI-powered translation and text-to-speech.",
  keywords: ["podcast", "multilingual", "audio", "translation", "text-to-speech", "blog to podcast", "AI podcast", "lingocast", "lingo.dev"],
  authors: [{ name: "LingoCast" }],
  creator: "LingoCast",
  publisher: "LingoCast",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://lingocast.vercel.app"),
  openGraph: {
    title: "LingoCast - Multilingual Podcast Generator",
    description: "Transform any blog post into a multilingual podcast in seconds",
    url: process.env.NEXT_PUBLIC_APP_URL || "https://lingocast.vercel.app",
    siteName: "LingoCast",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/pg-image.png",
        width: 1200,
        height: 630,
        alt: "LingoCast - Multilingual Podcast Generator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LingoCast - Multilingual Podcast Generator",
    description: "Transform any blog post into a multilingual podcast in seconds",
    creator: "@lingocast",
    images: ["/pg-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.className} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LingoProvider>
            {children}
            <TranslationLoader />
            <Toaster />
          </LingoProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
