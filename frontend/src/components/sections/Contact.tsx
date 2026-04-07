'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';
import { personal } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  const links = [
    {
      label: 'GitHub',
      href: personal.github,
      icon: Github,
      description: t('contact.links.github'),
    },
    {
      label: 'LinkedIn',
      href: personal.linkedin,
      icon: Linkedin,
      description: t('contact.links.linkedin'),
    },
    {
      label: 'Email',
      href: `mailto:${personal.email}`,
      icon: Mail,
      description: personal.email,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-neutral-900/30">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
            {t('contact.label')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t('contact.heading')}
          </h2>
          <p className="text-neutral-400 leading-relaxed mb-12">
            {t('contact.body')}
          </p>
        </motion.div>

        <motion.a
          href={`mailto:${personal.email}`}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-medium rounded-xl transition-colors mb-14 text-lg"
        >
          {t('contact.cta')}
        </motion.a>

        {/* Social links */}
        <div className="flex justify-center gap-4 flex-wrap">
          {links.map((link, i) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.07 }}
                className="flex items-center gap-2.5 px-4 py-3 bg-neutral-900 border border-white/5 rounded-lg text-sm text-neutral-400 hover:text-white hover:border-white/10 transition-all"
              >
                <Icon size={16} />
                <span>{link.description}</span>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
