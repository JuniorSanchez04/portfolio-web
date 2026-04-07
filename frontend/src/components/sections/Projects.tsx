'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio';
import { useLanguage } from '@/context/LanguageContext';
import ProjectCard from '@/components/ui/ProjectCard';

export default function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-indigo-400 text-sm font-medium tracking-widest uppercase mb-2">
            {t('projects.label')}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            {t('projects.heading')}
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
