'use client';

import { personal } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/5 py-8 px-6 text-center">
      <p className="text-sm text-neutral-500">
        {t('footer.credit')}{' '}
        <span className="text-neutral-300">{personal.name}</span> · {new Date().getFullYear()}
      </p>
    </footer>
  );
}
