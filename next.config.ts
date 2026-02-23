import type { NextConfig } from "next";
import { withLingo } from "@lingo.dev/compiler/next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  serverExternalPackages: ["jsdom", "lingo.dev"],
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        'jsdom': 'commonjs jsdom'
      });
    }
    return config;
  },
  turbopack: {},
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb",
    },
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default async function (): Promise<NextConfig> {
  return await withLingo(nextConfig, {
    sourceRoot: "./app",
    sourceLocale: "en",
    targetLocales: ["es", "fr", "de", "it", "pt", "nl", "pl", "ru", "ja", "ko", "zh", "ar", "hi", "tr", "sv", "no", "da", "fi"],
    models: "lingo.dev",
    prompt: "Translate from {SOURCE_LOCALE} to {TARGET_LOCALE}. This is a podcast generation app called LingoCast. Use a professional and friendly tone. Preserve all technical terms and brand names like 'LingoCast'.",
    buildMode: "translate",
    dev: {
      usePseudotranslator: true,
    },
    localePersistence: {
      type: "cookie",
      config: {
        name: "lingocast-locale",
        maxAge: 31536000,
      },
    },
  });
}
