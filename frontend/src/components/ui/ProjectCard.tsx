'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Github, ExternalLink, ArrowRight } from 'lucide-react';
import TagList from './TagList';
import { useLanguage } from '@/context/LanguageContext';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const { t, pick } = useLanguage();

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-neutral-900 border border-white/5 rounded-xl overflow-hidden flex flex-col group"
    >
      {/* Image */}
      <div className="aspect-video bg-neutral-800 relative overflow-hidden">
        {project.imageUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={project.imageUrl}
            alt={pick(project.title)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-neutral-600 text-sm">Sin imagen</span>
          </div>
        )}
        {project.featured && (
          <span className="absolute top-3 left-3 text-xs bg-indigo-600/90 text-white px-2 py-0.5 rounded-full font-medium">
            {t('projects.featured')}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-white font-semibold text-lg mb-2">{pick(project.title)}</h3>
        <p className="text-neutral-400 text-sm leading-relaxed mb-4 flex-1">
          {pick(project.description)}
        </p>

        {/* Tags */}
        <div className="mb-4">
          <TagList tags={project.tags} />
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-3 border-t border-white/5">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-white transition-colors"
            >
              <Github size={15} />
              {t('projects.code')}
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-neutral-500 hover:text-white transition-colors"
            >
              <ExternalLink size={15} />
              {t('projects.demo')}
            </a>
          )}
          {project.details && (
            <Link
              href={`/proyectos/${project.slug}`}
              className="flex items-center gap-1.5 text-sm text-indigo-400 hover:text-indigo-300 transition-colors ml-auto"
            >
              {t('projects.viewDetails')}
              <ArrowRight size={15} />
            </Link>
          )}
        </div>
      </div>
    </motion.article>
  );
}
