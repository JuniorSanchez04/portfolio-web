"use client";

import {
  createContext,
  useContext,
  useSyncExternalStore,
  useCallback,
  type ReactNode,
} from "react";
import { es } from "@/messages/es";
import { en } from "@/messages/en";
import type { Lang } from "@/types";

const messages = { es, en };
const STORAGE_KEY = "lang";
const DEFAULT_LANG: Lang = "es";

// Dot-notation accessor: t('nav.about') → messages[lang].nav.about
function resolve(obj: Record<string, unknown>, path: string): string {
  const result = path.split(".").reduce<unknown>((acc, key) => {
    if (acc && typeof acc === "object")
      return (acc as Record<string, unknown>)[key];
    return undefined;
  }, obj);
  return typeof result === "string" ? result : path;
}

function isLang(value: string | null): value is Lang {
  return value === "es" || value === "en";
}

// --- External store for localStorage-backed language ---
let listeners: Array<() => void> = [];

function subscribe(callback: () => void) {
  listeners.push(callback);
  return () => {
    listeners = listeners.filter((l) => l !== callback);
  };
}

function getSnapshot(): Lang {
  const stored = localStorage.getItem(STORAGE_KEY);
  return isLang(stored) ? stored : DEFAULT_LANG;
}

function getServerSnapshot(): Lang {
  return DEFAULT_LANG;
}

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  pick: <T>(bilingual: { es: T; en: T }) => T;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const setLang = useCallback((l: Lang) => {
    localStorage.setItem(STORAGE_KEY, l);
    listeners.forEach((cb) => cb());
  }, []);

  const t = useCallback(
    (key: string): string => {
      const current = resolve(messages[lang] as Record<string, unknown>, key);
      if (current !== key) return current;
      return resolve(messages.es as Record<string, unknown>, key);
    },
    [lang],
  );

  const pick = useCallback(
    <T,>(bilingual: { es: T; en: T }): T => {
      return bilingual[lang] ?? bilingual.es;
    },
    [lang],
  );

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
