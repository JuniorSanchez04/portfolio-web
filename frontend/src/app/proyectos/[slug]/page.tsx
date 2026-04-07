import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import { projects, getProjectBySlug } from '@/data/portfolio';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BackButton from '@/components/ui/BackButton';
import TagList from '@/components/ui/TagList';
import ProjectGallery from '@/components/ui/ProjectGallery';
import ProjectDetailContent from '@/components/ui/ProjectDetailContent';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: 'Proyecto no encontrado' };

  return {
    title: `${project.title.es} — Junior Sanchez`,
    description: project.description.es,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <BackButton />
          </div>

          {/* Tags — static, no translation needed */}
          <div className="mb-6">
            <TagList tags={project.tags} />
          </div>

          {/* Cover image */}
          {project.imageUrl && (
            <div className="relative aspect-video rounded-xl overflow-hidden bg-neutral-800 mb-12">
              <Image
                src={project.imageUrl}
                alt={project.title.es}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}

          {/* Bilingual content: title, links, all detail sections */}
          <ProjectDetailContent project={project} />

          {/* Gallery — static, no translation needed */}
          {project.details?.gallery && project.details.gallery.length > 0 && (
            <section className="mt-10">
              <ProjectGallery images={project.details.gallery} />
            </section>
          )}

          <div className="mt-12 pt-8 border-t border-white/5">
            <BackButton />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
