import {
  getDefaultLanguage,
  getStoredLanguage,
  clearStoredLanguage,
} from "@/translations/loader";

/**
 * Language detection utilities for debugging and testing
 */
export const useLanguageDebug = () => {
  const getDetectedLanguage = () => {
    if (typeof window === "undefined") return "Server-side";

    return {
      osLanguage: navigator.language,
      allLanguages: navigator.languages,
      detectedLanguage: getDefaultLanguage(),
      storedLanguage: getStoredLanguage(),
    };
  };

  const resetLanguagePreference = () => {
    clearStoredLanguage();
    window.location.reload(); // Reload to re-detect OS language
  };

  return {
    getDetectedLanguage,
    resetLanguagePreference,
  };
};
