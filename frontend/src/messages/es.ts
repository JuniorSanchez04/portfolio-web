export const es = {
  nav: {
    about: 'Sobre mí',
    skills: 'Skills',
    projects: 'Proyectos',
    contact: 'Contacto',
  },
  hero: {
    greeting: 'Hola, soy',
    cta: {
      projects: 'Ver proyectos',
      cv: 'Descargar CV',
    },
  },
  about: {
    label: 'Sobre mí',
    heading: 'Un poco sobre quién soy',
    body: {
      p1: 'Soy <name/>, desarrollador full stack enfocado en la creación de sistemas modernos, funcionales y orientados a resolver problemas reales.',
      p2: 'Trabajo principalmente con JavaScript y TypeScript, utilizando React y Next.js en el frontend, y Node.js o NestJS en el backend.',
      p3: 'También tengo experiencia desarrollando sistemas de inventario, ventas y soluciones para negocios, buscando siempre una combinación entre buena arquitectura, rendimiento y experiencia de usuario.',
      p4: 'Actualmente sigo fortaleciendo mis habilidades, construyendo proyectos sólidos y preparándome para trabajar en soluciones reales que aporten valor.',
    },
    cta: 'Hablemos →',
  },
  skills: {
    label: 'Tecnologías',
    heading: 'Con qué trabajo',
    categories: {
      language: 'Lenguajes',
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Bases de datos',
      devops: 'DevOps & Tools',
      other: 'Otros',
    },
  },
  projects: {
    label: 'Proyectos',
    heading: 'Lo que he construido',
    featured: 'Destacado',
    viewDetails: 'Ver detalles',
    code: 'Código',
    demo: 'Demo',
  },
  contact: {
    label: 'Contacto',
    heading: '¿Tienes un proyecto en mente?',
    body: 'Estoy disponible para proyectos freelance, colaboraciones o simplemente para charlar sobre tecnología. No dudes en escribirme.',
    cta: 'Enviarme un mensaje',
    links: {
      github: 'Ver mi código',
      linkedin: 'Conectar profesionalmente',
    },
  },
  footer: {
    credit: 'Diseñado y construido por',
  },
  projectDetail: {
    back: 'Volver a proyectos',
    sourceCode: 'Código fuente',
    viewDemo: 'Ver demo',
    sections: {
      summary: 'Resumen',
      problem: 'El problema',
      role: 'Mi rol',
      features: 'Funcionalidades principales',
      challenges: 'Desafíos técnicos',
      gallery: 'Galería',
    },
  },
};

export type Messages = typeof es;
