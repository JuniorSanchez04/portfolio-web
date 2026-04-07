import type { Messages } from './es';

export const en: Messages = {
  nav: {
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
  },
  hero: {
    greeting: "Hi, I'm",
    cta: {
      projects: 'View projects',
      cv: 'Download CV',
    },
  },
  about: {
    label: 'About me',
    heading: 'A bit about who I am',
    body: {
      p1: 'I\'m <name/>, a full stack developer focused on building modern, functional systems oriented towards solving real-world problems.',
      p2: 'I work primarily with JavaScript and TypeScript, using React and Next.js on the frontend, and Node.js or NestJS on the backend.',
      p3: 'I also have experience developing inventory systems, sales solutions, and business tools — always aiming for a balance between good architecture, performance, and user experience.',
      p4: 'I\'m currently strengthening my skills, building solid projects, and preparing to work on real solutions that deliver value.',
    },
    cta: "Let's talk →",
  },
  skills: {
    label: 'Technologies',
    heading: 'What I work with',
    categories: {
      language: 'Languages',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Databases',
      devops: 'DevOps & Tools',
      other: 'Other',
    },
  },
  projects: {
    label: 'Projects',
    heading: "What I've built",
    featured: 'Featured',
    viewDetails: 'View details',
    code: 'Code',
    demo: 'Demo',
  },
  contact: {
    label: 'Contact',
    heading: 'Have a project in mind?',
    body: "I'm available for freelance projects, collaborations, or just to chat about technology. Feel free to reach out.",
    cta: 'Send me a message',
    links: {
      github: 'View my code',
      linkedin: 'Connect professionally',
    },
  },
  footer: {
    credit: 'Designed and built by',
  },
  projectDetail: {
    back: 'Back to projects',
    sourceCode: 'Source code',
    viewDemo: 'View demo',
    sections: {
      summary: 'Summary',
      problem: 'The problem',
      role: 'My role',
      features: 'Main features',
      challenges: 'Technical challenges',
      gallery: 'Gallery',
    },
  },
};
