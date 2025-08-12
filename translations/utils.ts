/**
 * Translation Management Utility
 * 
 * This file provides utilities for managing translations across the application.
 * It includes functions for adding new translations, checking for missing keys,
 * and maintaining consistency between language files.
 */

import { TranslationKeys, Language } from './types'
import { loadTranslations, getAvailableLanguages } from './loader'

/**
 * Validate that all translation files have the same structure
 * @returns Promise<ValidationResult> - Validation results
 */
export interface ValidationResult {
  isValid: boolean
  missingKeys: Record<Language, string[]>
  extraKeys: Record<Language, string[]>
  errors: string[]
}

export async function validateTranslations(): Promise<ValidationResult> {
  const languages = getAvailableLanguages()
  const allTranslations: Record<Language, TranslationKeys> = {} as Record<Language, TranslationKeys>
  
  // Load all translations
  for (const lang of languages) {
    try {
      allTranslations[lang] = await loadTranslations(lang)
    } catch (error) {
      return {
        isValid: false,
        missingKeys: {} as Record<Language, string[]>,
        extraKeys: {} as Record<Language, string[]>,
        errors: [`Failed to load translations for ${lang}: ${error}`]
      }
    }
  }

  // Use English as reference
  const referenceKeys = getAllKeys(allTranslations.en)
  const missingKeys: Record<Language, string[]> = {} as Record<Language, string[]>
  const extraKeys: Record<Language, string[]> = {} as Record<Language, string[]>

  // Check each language against reference
  for (const lang of languages) {
    const langKeys = getAllKeys(allTranslations[lang])
    missingKeys[lang] = referenceKeys.filter(key => !langKeys.includes(key))
    extraKeys[lang] = langKeys.filter(key => !referenceKeys.includes(key))
  }

  const isValid = Object.values(missingKeys).every(keys => keys.length === 0) &&
                  Object.values(extraKeys).every(keys => keys.length === 0)

  return {
    isValid,
    missingKeys,
    extraKeys,
    errors: []
  }
}

/**
 * Get all flattened keys from a translation object
 * @param obj - Translation object
 * @param prefix - Key prefix for nesting
 * @returns string[] - Array of flattened keys
 */
function getAllKeys(obj: TranslationKeys | Record<string, unknown>, prefix: string = ''): string[] {
  let keys: string[] = []
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = prefix ? `${prefix}.${key}` : key
      const value = (obj as Record<string, unknown>)[key]
      
      if (typeof value === 'object' && value !== null) {
        keys = keys.concat(getAllKeys(value as Record<string, unknown>, fullKey))
      } else {
        keys.push(fullKey)
      }
    }
  }
  
  return keys
}

/**
 * Generate a template for a new language file
 * @param referenceLanguage - Language to use as reference (default: 'en')
 * @returns Promise<Partial<TranslationKeys>> - Template object with empty values
 */
export async function generateTranslationTemplate(referenceLanguage: Language = 'en'): Promise<Partial<TranslationKeys>> {
  const reference = await loadTranslations(referenceLanguage)
  return createTemplate(reference as unknown as Record<string, unknown>) as Partial<TranslationKeys>
}

/**
 * Create a template object with empty values
 * @param obj - Reference object
 * @returns Record<string, unknown> - Template object
 */
function createTemplate(obj: Record<string, unknown>): Record<string, unknown> {
  const template: Record<string, unknown> = {}
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        template[key] = createTemplate(obj[key] as Record<string, unknown>)
      } else {
        template[key] = '' // Empty string for translation
      }
    }
  }
  
  return template
}

/**
 * Get usage statistics for translations
 * @returns Promise<UsageStats> - Usage statistics
 */
export interface UsageStats {
  totalKeys: number
  translatedKeys: Record<Language, number>
  completionPercentage: Record<Language, number>
  emptyTranslations: Record<Language, string[]>
}

export async function getTranslationStats(): Promise<UsageStats> {
  const languages = getAvailableLanguages()
  const allTranslations: Partial<Record<Language, TranslationKeys>> = {}
  
  // Load all translations
  for (const lang of languages) {
    try {
      allTranslations[lang] = await loadTranslations(lang)
    } catch (error) {
      console.error(`Failed to load ${lang} translations for stats:`, error)
    }
  }

  const referenceKeys = allTranslations.en ? getAllKeys(allTranslations.en) : []
  const totalKeys = referenceKeys.length

  const translatedKeys: Record<Language, number> = {} as Record<Language, number>
  const completionPercentage: Record<Language, number> = {} as Record<Language, number>
  const emptyTranslations: Record<Language, string[]> = {} as Record<Language, string[]>

  for (const lang of languages) {
    if (allTranslations[lang]) {
      const langKeys = getAllKeys(allTranslations[lang])
      const emptyKeys = getEmptyKeys(allTranslations[lang]! as unknown as Record<string, unknown>)
      
      translatedKeys[lang] = langKeys.length - emptyKeys.length
      completionPercentage[lang] = totalKeys > 0 ? (translatedKeys[lang] / totalKeys) * 100 : 0
      emptyTranslations[lang] = emptyKeys
    } else {
      translatedKeys[lang] = 0
      completionPercentage[lang] = 0
      emptyTranslations[lang] = referenceKeys
    }
  }

  return {
    totalKeys,
    translatedKeys,
    completionPercentage,
    emptyTranslations
  }
}

/**
 * Get keys with empty values
 * @param obj - Translation object
 * @param prefix - Key prefix
 * @returns string[] - Array of empty keys
 */
function getEmptyKeys(obj: Record<string, unknown>, prefix: string = ''): string[] {
  let emptyKeys: string[] = []
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const fullKey = prefix ? `${prefix}.${key}` : key
      
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        emptyKeys = emptyKeys.concat(getEmptyKeys(obj[key] as Record<string, unknown>, fullKey))
      } else if (!obj[key] || (typeof obj[key] === 'string' && obj[key].toString().trim() === '')) {
        emptyKeys.push(fullKey)
      }
    }
  }
  
  return emptyKeys
}
