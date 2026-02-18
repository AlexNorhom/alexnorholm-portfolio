"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Lang } from "@/data/lang";
import { isLang, DEFAULT_LANG } from "@/data/lang";

type LangContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  toggleLang: () => void;
};

const LangContext = createContext<LangContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  // Charger depuis localStorage
  useEffect(() => {
    try {
      const saved = window.localStorage.getItem("lang");
      if (isLang(saved)) {
        setLangState(saved);
      }
    } catch {}
  }, []);

  // Synchroniser <html lang="">
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);

    try {
      window.localStorage.setItem("lang", next);
    } catch {}
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === "fr" ? "en" : "fr";

      try {
        window.localStorage.setItem("lang", next);
      } catch {}

      return next;
    });
  }, []);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggleLang,
    }),
    [lang, setLang, toggleLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang() {
  const ctx = useContext(LangContext);

  if (!ctx) {
    throw new Error("useLang must be used within LanguageProvider");
  }

  return ctx;
}
