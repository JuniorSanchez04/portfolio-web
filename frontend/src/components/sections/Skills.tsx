'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import type { Skill } from '@/types';

const grouped = skills.reduce<Record<Skill['category'], Skill[]>>(
  (acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  },
  {} as Record<Skill['category'], Skill[]>,
);

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-24 px-6 bg-neutral-900/30">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
            {t('skills.label')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            {t('skills.heading')}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {(Object.keys(grouped) as Skill['category'][]).map((category, i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-neutral-900 border border-white/5 rounded-xl p-5"
            >
              <p className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-4">
                {t(`skills.categories.${category}`)}
              </p>
              <div className="flex flex-wrap gap-2">
                {grouped[category].map((skill) => (
                  <span
                    key={skill.name}
                    className="px-3 py-1 bg-neutral-800 text-neutral-300 text-sm rounded-md border border-white/5"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
