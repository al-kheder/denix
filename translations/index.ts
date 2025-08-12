/**
 * Translation System Export Index
 * 
 * This file exports all translation-related functionality for easy importing
 * throughout the application.
 */

// Types
export type { TranslationKeys, Language } from './types'

// Loader functions
export {
  loadTranslations,
  getAvailableLanguages,
  isLanguageSupported,
  getDefaultLanguage,
  preloadAllTranslations
} from './loader'

// Validation and management utilities
export {
  validateTranslations,
  generateTranslationTemplate,
  getTranslationStats
} from './utils'

export type {
  ValidationResult,
  UsageStats
} from './utils'

// Re-export for convenience
import {
  loadTranslations,
  getAvailableLanguages,
  isLanguageSupported,
  getDefaultLanguage
} from './loader'

// Default export for commonly used functions
const translationUtils = {
  loadTranslations,
  getAvailableLanguages,
  isLanguageSupported,
  getDefaultLanguage
}

export default translationUtils
