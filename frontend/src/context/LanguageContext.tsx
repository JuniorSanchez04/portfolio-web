'use client';

import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import { es } from '@/messages/es';
import { en } from '@/messages/en';
import type { Lang, Bilingual } from '@/types';

const messages = { es, en };

// Dot-notation accessor: t('nav.about') → messages[lang].nav.about
function resolve(obj: Record<string, unknown>, path: string): string {
  const result = path.split('.').reduce<unknown>((acc, key) => {
    if (acc && typeof acc === 'object') return (acc as Record<string, unknown>)[key];
    return undefined;
  }, obj);
  return typeof result === 'string' ? result : path;
}

interface LanguageContextType {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (key: string) => string;
  pick: <T>(bilingual: { es: T; en: T }) => T;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // Start with 'es' — matches server render, avoids hydration mismatch
  const [lang, setLangState] = useState<Lang>('es');

  useEffect(() => {
    const stored = localStorage.getItem('lang') as Lang | null;
    if (stored === 'es' || stored === 'en') {
      setLangState(stored);
    }
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem('lang', l);
  }

  function t(key: string): string {
    const current = resolve(messages[lang] as Record<string, unknown>, key);
    if (current !== key) return current;
    // Fallback to Spanish
    return resolve(messages.es as Record<string, unknown>, key);
  }

  function pick<T>(bilingual: { es: T; en: T }): T {
    return bilingual[lang] ?? bilingual.es;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error('useLanguage must be used inside LanguageProvider');
  return ctx;
}
