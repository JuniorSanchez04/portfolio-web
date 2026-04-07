export type Lang = 'es' | 'en';

export interface Bilingual {
  es: string;
  en: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectDetails {
  summary: Bilingual;
  problem: Bilingual;
  role: Bilingual;
  features: { es: string[]; en: string[] };
  challenges: { es: string[]; en: string[] };
  gallery: GalleryImage[];
}

export interface Project {
  id: number;
  slug: string;
  title: Bilingual;
  description: Bilingual;
  tags: string[];
  imageUrl: string | null;
  repoUrl: string | null;
  liveUrl: string | null;
  featured: boolean;
  details?: ProjectDetails;
}

export interface Skill {
  name: string;
  category: 'language' | 'frontend' | 'backend' | 'database' | 'devops' | 'other';
}

export interface Personal {
  name: string;
  title: Bilingual;
  description: Bilingual;
  email: string;
  github: string;
  linkedin: string;
  cvUrl: string;
  location: string;
}
