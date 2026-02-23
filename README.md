# 🎙️ LingoCast — Multilingual Podcast Generator

> **Transform any blog post into a multilingual podcast in seconds.**  
> Powered by [Lingo.dev](https://lingo.dev) Compiler + SDK for seamless internationalization.

---

## 🌍 Lingo.dev Integration

LingoCast deeply integrates **three layers** of the Lingo.dev ecosystem:

| Layer | Package | Purpose |
|-------|---------|---------|
| **🔧 Compiler** | `@lingo.dev/compiler` | Build-time JSX text translation — zero runtime overhead, automatic text extraction |
| **📡 SDK** | `lingo.dev` | Runtime translation of dynamic content (blog chapters, user-generated text) |
| **🔑 API** | `LINGODOTDEV_API_KEY` | Powers both Compiler and SDK with lingo.dev's translation models |

### How the Compiler Works

The **Lingo.dev Compiler** (`@lingo.dev/compiler/next`) wraps the Next.js config and automatically:

1. **Extracts** all translatable JSX text at build time (found **69 entries** automatically)
2. **Translates** them into 18 target locales using lingo.dev's AI models
3. **Injects** a `LingoProvider` + `useTranslation()` hooks — no manual `t()` calls needed
4. **Persists** locale preference via cookies (`lingocast-locale`)
5. Uses **pseudotranslations** in development for instant feedback without API costs

```typescript
// next.config.ts — the entire i18n setup
import { withLingo } from "@lingo.dev/compiler/next";

export default async function (): Promise<NextConfig> {
  return await withLingo(nextConfig, {
    sourceLocale: "en",
    targetLocales: ["es", "fr", "de", "it", "pt", "nl", "pl", "ru", "ja", "ko", "zh", "ar", "hi", "tr", "sv", "no", "da", "fi"],
    models: "lingo.dev",
    buildMode: "translate",
    dev: { usePseudotranslator: true },
    localePersistence: { type: "cookie", config: { name: "lingocast-locale", maxAge: 31536000 } },
  });
};
```

### SDK for Dynamic Content

For content that can't be translated at build time (scraped blog chapters), LingoCast uses the **Lingo.dev SDK** via an API route:

```typescript
// app/api/translate/route.ts
import Lingo from "lingo.dev";
const lingo = new Lingo({ apiKey: process.env.LINGO_API_KEY });

const result = await lingo.localizeText(text, { sourceLocale: "en", targetLocale: "es" });
```

---

## ✨ Features

### Core Workflow
- **URL → Podcast** — Paste any blog URL, get a multilingual podcast
- **AI Chapter Generation** — Automatically structures content into 1–10 chapters
- **Text-to-Speech** — Google Gemini-powered studio-quality voice synthesis
- **18+ Languages** — English, Spanish, French, German, Italian, Portuguese, Dutch, Polish, Russian, Japanese, Korean, Chinese, Arabic, Hindi, Turkish, Swedish, Norwegian, Danish, Finnish

### Interactive Canvas
- **React Flow** node-based workflow visualization
- **Chapter Nodes** — view, translate, and generate audio per chapter
- **Audio Nodes** — play, download, and merge audio files
- **Merge Groups** — combine multiple chapter audios into full episodes
- **Multi-select** — batch download or merge audio files

### UI/UX
- **Dark/Light Theme** — smooth transitions with `next-themes`
- **Language Switcher** — powered by Lingo.dev Compiler's `useLingoContext`
- **Responsive Design** — works on desktop and mobile
- **Session Persistence** — auto-saves progress across reloads
- **Toast Notifications** — real-time feedback via Sonner

### Smart Caching
- **Chapter Cache** — URL + chapter count aware
- **Translation Cache** — avoids re-translating identical content
- **Audio Cache** — persists generated audio URLs
- **Session Management** — full state restoration on reload

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|-----------|
| Framework | Next.js 16 (App Router, Turbopack) |
| Language | TypeScript, React 19 |
| Styling | Tailwind CSS 4, Shadcn UI |
| i18n (UI) | **Lingo.dev Compiler** (`@lingo.dev/compiler`) |
| i18n (Content) | **Lingo.dev SDK** (`lingo.dev`) |
| Canvas | React Flow |
| Audio | Google Gemini TTS API |
| AI | OpenRouter (summarization) |
| Jobs | Inngest (background audio generation) |
| Scraping | Mozilla Readability + JSDOM |

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm (or yarn/pnpm)

### 1. Clone & Install

```bash
git clone <repository-url>
cd lingocast
npm install
```

### 2. Environment Variables

Copy `.env.example` and fill in your keys:

```bash
cp .env.example .env
```

```env
# Required
LINGODOTDEV_API_KEY=your_lingodotdev_api_key   # Lingo.dev Compiler + SDK
LINGO_API_KEY=your_lingo_api_key               # Lingo.dev SDK (chapter translations)
OPENROUTER_API_KEY=your_openrouter_api_key     # AI summarization
GEMINI_API_KEY=your_gemini_api_key             # Text-to-Speech

# Optional
NEXT_PUBLIC_APP_URL=https://lingocast.vercel.app
```

### 3. Run Development Server

```bash
npm run dev
```

The Lingo.dev Compiler will start automatically with pseudotranslations enabled:
```
[Lingo.dev] 📝 Using pseudotranslator (dev.usePseudotranslator enabled)
[Lingo.dev] Translation server started successfully on port: 60000
```

### 4. (Optional) Start Inngest Dev Server

For background audio generation:

```bash
npx inngest-cli@latest dev
```

### 5. Open Browser

Navigate to `http://localhost:3000`

---

## 📁 Project Structure

```
lingocast/
├── app/
│   ├── api/
│   │   ├── chapters/              # Chapter generation
│   │   ├── scrape/                # Blog content scraping
│   │   ├── summarize-chapters/    # AI summarization
│   │   ├── translate/             # Lingo.dev SDK translation
│   │   ├── translate-chapter/     # Chapter translation
│   │   ├── tts/                   # Text-to-Speech (sync)
│   │   ├── tts-async/             # Text-to-Speech (async)
│   │   ├── merge-audio/           # Audio merging
│   │   ├── zip-audio/             # Zip packaging
│   │   ├── jobs/                  # Job status tracking
│   │   └── inngest/               # Inngest webhook
│   ├── lingo/                     # Compiler-generated translation metadata
│   ├── globals.css
│   ├── layout.tsx                 # Root layout with LingoProvider
│   └── page.tsx                   # Main page
├── components/
│   ├── podcast-flow.tsx           # React Flow canvas
│   ├── chapter-card.tsx           # Chapter display
│   ├── landing-page.tsx           # Landing page hero
│   ├── language-switcher.tsx      # Lingo.dev Compiler locale switcher
│   ├── loading-screen.tsx         # Loading states
│   ├── theme-toggle.tsx           # Dark/light toggle
│   ├── LightRays.tsx             # Background animation
│   ├── PrismaticBurst.tsx        # Background animation
│   └── ui/                       # Shadcn components
├── lib/
│   ├── lingo.tsx                  # Lingo.dev Compiler wrapper
│   ├── cache.ts                   # LocalStorage caching
│   ├── inngest/                   # Background job config
│   └── utils.ts
├── config/
│   └── translation-config.ts     # Translation system config
├── next.config.ts                 # withLingo() Compiler integration
├── .env.example
└── package.json
```

---

## 🏗️ Build & Deploy

### Production Build

```bash
npm run build    # Compiler generates translations for all 18 locales
npm start
```

### Deploy to Vercel

1. Install the **Inngest** Vercel integration
2. Add environment variables in Vercel dashboard
3. Push to Git — Vercel deploys automatically

| Variable | Required | Description |
|----------|----------|-------------|
| `LINGODOTDEV_API_KEY` | Yes | Lingo.dev Compiler + API |
| `LINGO_API_KEY` | Yes | Lingo.dev SDK |
| `OPENROUTER_API_KEY` | Yes | AI summarization |
| `GEMINI_API_KEY` | Yes | Google Gemini TTS |
| `NEXT_PUBLIC_APP_URL` | Yes | Production URL |

---

## 📄 License

MIT

---

<p align="center">
  Built with ❤️ using <a href="https://lingo.dev">Lingo.dev</a>
</p>
