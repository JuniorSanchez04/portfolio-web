'use client';

import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function BackButton() {
  const { t } = useLanguage();

  return (
    <Link
      href="/#projects"
      className="inline-flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
    >
      <ArrowLeft size={16} />
      {t('projectDetail.back')}
    </Link>
  );
}
