"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { TranslationKeys, Language } from "@/translations/types";
import {
  loadTranslations,
  getDefaultLanguage,
  getStoredLanguage,
} from "@/translations/loader";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  translations: TranslationKeys | null;
  isLoading: boolean;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");
  const [translations, setTranslations] = useState<TranslationKeys | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  // Load translations when language changes
  useEffect(() => {
    const loadLanguageTranslations = async () => {
      setIsLoading(true);
      try {
        const newTranslations = await loadTranslations(language);
        setTranslations(newTranslations);
      } catch (error) {
        console.error("Failed to load translations:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadLanguageTranslations();
  }, [language]);

  // Initialize with default language on mount
  useEffect(() => {
    const initializeLanguage = () => {
      // Check if there's a stored language preference
      const storedLanguage = getStoredLanguage();

      if (storedLanguage) {
        // Use stored language preference
        setLanguage(storedLanguage);
      } else {
        // First visit - detect OS language
        const detectedLanguage = getDefaultLanguage();
        setLanguage(detectedLanguage);
        // Store the detected language as preference
        localStorage.setItem("preferred-language", detectedLanguage);
      }
    };

    if (typeof window !== "undefined") {
      initializeLanguage();
    }
  }, []);

  // Translation function with nested key support
  const t = (key: string): string => {
    if (!translations) {
      return key; // Return key if translations not loaded yet
    }

    // Support nested keys like 'nav.product' or 'buttons.free_trial'
    const keys = key.split(".");
    let value: unknown = translations;

    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = (value as Record<string, unknown>)[k];
      } else {
        return key; // Return key if path doesn't exist
      }
    }

    return typeof value === "string" ? value : key;
  };

  // Enhanced setLanguage with RTL handling and localStorage
  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);

    // Store user's language preference
    if (typeof window !== "undefined") {
      localStorage.setItem("preferred-language", newLanguage);

      // Update document direction for RTL support
      document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr";
      document.documentElement.lang = newLanguage;
    }
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: changeLanguage,
        translations,
        isLoading,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}

// Hook for easy access to translation function
export function useTranslation() {
  const { t, isLoading } = useLanguage();
  return { t, isLoading };
}

// Hook for language switching
export function useLanguageSwitch() {
  const { language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "ar" : "en");
  };

  const switchToEnglish = () => setLanguage("en");
  const switchToArabic = () => setLanguage("ar");

  return {
    language,
    setLanguage,
    toggleLanguage,
    switchToEnglish,
    switchToArabic,
    isEnglish: language === "en",
    isArabic: language === "ar",
  };
}
