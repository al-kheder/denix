import { TranslationKeys, Language } from './types'

const cachedTranslations: Partial<Record<Language, TranslationKeys>> = {}

/**
 * Load translations for a specific language
 * @param language - The language code ('en' | 'ar')
 * @returns Promise<TranslationKeys> - The loaded translations
 */
export async function loadTranslations(language: Language): Promise<TranslationKeys> {
  // Return cached translations if already loaded
  if (cachedTranslations[language]) {
    return cachedTranslations[language]!
  }

  try {
    // Dynamically import the translation file
    const translations = await import(`./${language}.json`)
    
    // Cache the translations
    cachedTranslations[language] = translations.default || translations
    
    return cachedTranslations[language]!
  } catch (error) {
    console.error(`Failed to load translations for language: ${language}`, error)
    
    // Fallback to English if the requested language fails to load
    if (language !== 'en') {
      console.warn(`Falling back to English translations`)
      return loadTranslations('en')
    }
    
    // If English also fails, return empty object with proper structure
    return getEmptyTranslations()
  }
}

/**
 * Get all available languages
 * @returns Language[] - Array of supported language codes
 */
export function getAvailableLanguages(): Language[] {
  return ['en', 'ar']
}

/**
 * Check if a language is supported
 * @param language - The language code to check
 * @returns boolean - Whether the language is supported
 */
export function isLanguageSupported(language: string): language is Language {
  return getAvailableLanguages().includes(language as Language)
}

/**
 * Get the browser's preferred language, fallback to English
 * Detects OS language on first visit
 * @returns Language - The detected or default language
 */
export function getDefaultLanguage(): Language {
  if (typeof window === 'undefined') {
    return 'en' // Server-side default
  }

  // Try multiple methods to detect language
  const detectedLanguages = [
    navigator.language,           // Primary language (e.g., 'en-US', 'ar-SA')
    navigator.languages?.[0],     // First in language preference list
    ...navigator.languages || [], // All preferred languages
  ].filter(Boolean)

  // Check each detected language
  for (const lang of detectedLanguages) {
    const languageCode = lang.split('-')[0].toLowerCase() // Get language without region
    
    if (isLanguageSupported(languageCode)) {
      return languageCode
    }
  }
  
  return 'en' // Default fallback
}

/**
 * Get stored language preference from localStorage
 * @returns Language | null - The stored language or null if not found
 */
export function getStoredLanguage(): Language | null {
  if (typeof window === 'undefined') {
    return null
  }
  
  const stored = localStorage.getItem('preferred-language')
  return stored && isLanguageSupported(stored) ? stored as Language : null
}

/**
 * Clear stored language preference
 * Useful for testing or resetting to OS detection
 */
export function clearStoredLanguage(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('preferred-language')
  }
}

/**
 * Preload all translations (useful for performance)
 * @returns Promise<Partial<Record<Language, TranslationKeys>>> - All loaded translations
 */
export async function preloadAllTranslations(): Promise<Partial<Record<Language, TranslationKeys>>> {
  const languages = getAvailableLanguages()
  
  const translationsPromises = languages.map(async (lang) => {
    const translations = await loadTranslations(lang)
    return { [lang]: translations }
  })
  
  const translationsArray = await Promise.all(translationsPromises)
  
  return translationsArray.reduce((acc, curr) => ({ ...acc, ...curr }), {})
}

/**
 * Get empty translations structure for fallback
 * @returns TranslationKeys - Empty translation object with proper structure
 */
function getEmptyTranslations(): TranslationKeys {
  return {
    nav: {
      product: '',
      solutions: '',
      pricing: '',
      customers: '',
      partners: '',
      community: ''
    },
    buttons: {
      free_trial: '',
      book_appointment: '',
      search: '',
      get_started: '',
      learn_more: '',
      contact_us: ''
    },
    product: {
      business_software: '',
      usability: '',
      usability_desc: '',
      modern_work: '',
      modern_work_desc: '',
      productive_everywhere: '',
      productive_everywhere_desc: '',
      ecosystem: '',
      ecosystem_desc: '',
      ai_support: '',
      ai_support_desc: ''
    },
    company: {
      your_company: '',
      efficiency: '',
      efficiency_desc: '',
      growth: '',
      growth_desc: '',
      customer_focus: '',
      customer_focus_desc: '',
      employee_satisfaction: '',
      employee_satisfaction_desc: '',
      cost_optimization: '',
      cost_optimization_desc: '',
      data_analysis: '',
      data_analysis_desc: ''
    },
    start: {
      your_start: '',
      easy_intro: '',
      easy_intro_desc: '',
      switch_to_denix: '',
      switch_to_denix_desc: '',
      video_courses: '',
      video_courses_desc: '',
      maintenance: '',
      maintenance_desc: '',
      scaling: '',
      scaling_desc: ''
    },
    solutions: {
      by_use_case: '',
      office_software: '',
      office_software_desc: '',
      erp_for_midsize: '',
      erp_for_midsize_desc: '',
      wms_logistics: '',
      wms_logistics_desc: '',
      kanban_management: '',
      kanban_management_desc: '',
      amazon_fba: '',
      amazon_fba_desc: '',
      retail_online: '',
      retail_online_desc: ''
    },
    common: {
      loading: '',
      error: '',
      success: '',
      cancel: '',
      save: '',
      edit: '',
      delete: '',
      close: '',
      open: ''
    },
    footer: {
      company: '',
      about_us: '',
      careers: '',
      press: '',
      contact: '',
      support: '',
      help_center: '',
      documentation: '',
      status: '',
      legal: '',
      privacy: '',
      terms: '',
      cookies: ''
    }
  }
}
