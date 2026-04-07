'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';
import { personal } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function Hero() {
  const { t, pick } = useLanguage();

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center px-6 pt-16 relative"
    >
      {/* Gradient background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0}
          className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-4"
        >
          {personal.location}
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.1}
          className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight"
        >
          {t('hero.greeting')}{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
            {personal.name}
          </span>
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.2}
          className="text-xl md:text-2xl text-neutral-400 mb-6 font-light"
        >
          {pick(personal.title)}
        </motion.p>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.3}
          className="text-neutral-500 max-w-xl mx-auto leading-relaxed mb-10"
        >
          {pick(personal.description)}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.4}
          className="flex flex-wrap items-center justify-center gap-3 mb-12"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg transition-colors"
          >
            {t('hero.cta.projects')}
          </a>
          <a
            href={personal.cvUrl}
            download
            className="px-6 py-3 border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
          >
            <Download size={15} />
            {t('hero.cta.cv')}
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          custom={0.5}
          className="flex items-center justify-center gap-5"
        >
          <a
            href={personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href={personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-neutral-500 hover:text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="hidden lg:block absolute bottom-8 left-1/2 -translate-x-1/2 text-neutral-600 animate-bounce"
      >
        <ArrowDown size={18} />
      </motion.div>
    </section>
  );
}
