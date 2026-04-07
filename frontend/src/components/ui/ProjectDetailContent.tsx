'use client';

import { Github, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import type { Project } from '@/types';

interface Props {
  project: Project;
}

export default function ProjectDetailContent({ project }: Props) {
  const { t, pick } = useLanguage();
  const details = project.details;

  return (
    <div>
      {/* Title + links — language-aware */}
      <div className="mb-8 -mt-8">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {pick(project.title)}
        </h1>
        <div className="flex items-center gap-4">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <Github size={16} />
              {t('projectDetail.sourceCode')}
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <ExternalLink size={16} />
              {t('projectDetail.viewDemo')}
            </a>
          )}
        </div>
      </div>

      {/* Detail sections */}
      {details ? (
        <div className="space-y-10">
          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              {t('projectDetail.sections.summary')}
            </h2>
            <p className="text-neutral-300 leading-relaxed">{pick(details.summary)}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              {t('projectDetail.sections.problem')}
            </h2>
            <p className="text-neutral-300 leading-relaxed">{pick(details.problem)}</p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-white mb-3">
              {t('projectDetail.sections.role')}
            </h2>
            <p className="text-neutral-300 leading-relaxed">{pick(details.role)}</p>
          </section>

          {pick(details.features).length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                {t('projectDetail.sections.features')}
              </h2>
              <ul className="space-y-2">
                {pick(details.features).map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-neutral-300">
                    <span className="text-indigo-400 mt-1.5 shrink-0">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {pick(details.challenges).length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-white mb-3">
                {t('projectDetail.sections.challenges')}
              </h2>
              <ul className="space-y-2">
                {pick(details.challenges).map((challenge) => (
                  <li key={challenge} className="flex items-start gap-2 text-neutral-300">
                    <span className="text-indigo-400 mt-1.5 shrink-0">•</span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {details.gallery.length > 0 && (
            <section>
              <h2 className="text-lg font-semibold text-white mb-4">
                {t('projectDetail.sections.gallery')}
              </h2>
            </section>
          )}
        </div>
      ) : (
        <p className="text-neutral-400">{pick(project.description)}</p>
      )}
    </div>
  );
}
