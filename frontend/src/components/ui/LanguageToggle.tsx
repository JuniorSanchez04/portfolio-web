'use client';

import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
      className="text-sm font-medium text-neutral-400 hover:text-white transition-colors tracking-wide"
      aria-label="Cambiar idioma"
    >
      <span className={lang === 'es' ? 'text-white' : 'text-neutral-500'}>ES</span>
      <span className="text-neutral-600 mx-1">/</span>
      <span className={lang === 'en' ? 'text-white' : 'text-neutral-500'}>EN</span>
    </button>
  );
}
