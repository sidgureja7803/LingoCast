"use client"

/**
 * Lingo.dev Compiler Integration
 * 
 * The compiler handles all JSX text translations at build time automatically.
 * This module provides locale state management via the compiler's context.
 * 
 * For content translations (chapters, etc.), use the SDK via /api/translate.
 */

import { LingoProvider as CompilerLingoProvider, useLingoContext } from "@lingo.dev/compiler/react"

// Re-export the compiler's provider
export const LingoProvider = CompilerLingoProvider

export function useLingo() {
  const context = useLingoContext()
  return {
    locale: context.locale,
    setLocale: context.setLocale,
    isLoading: false,
    cacheHit: false,
    clearCache: () => { },
  }
}
