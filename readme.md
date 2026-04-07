# Portafolio Web — Junior David Sanchez Britez

Portafolio web profesional desarrollado con **Next.js 15**, **TypeScript** y **Tailwind CSS**. Presenta información personal, habilidades técnicas y proyectos reales con páginas de detalle individuales. Incluye soporte bilingüe español/inglés con preferencia guardada en `localStorage`.

---

## Objetivo

Servir como carta de presentación digital para reclutadores y clientes, mostrando proyectos, stack técnico y canales de contacto de forma clara, rápida y accesible desde cualquier dispositivo.

---

## Características principales

- **Landing de una sola página** con secciones: Hero, Sobre mí, Skills, Proyectos y Contacto
- **Páginas de detalle por proyecto** en rutas `/proyectos/[slug]` generadas estáticamente con `generateStaticParams`
- **Soporte bilingüe ES / EN** con toggle en el navbar, contexto global y fallback automático a español
- **Preferencia de idioma persistente** guardada en `localStorage`
- **Galería de imágenes** por proyecto con caption opcional
- **SEO por página** con `generateMetadata` dinámico en cada ruta de proyecto
- **Animaciones** con Framer Motion en todas las secciones
- **Diseño responsive** mobile-first con Tailwind CSS
- **Navbar fijo** con efecto blur al hacer scroll
- Descarga de CV desde `/public/cv.pdf`

---

## Tecnologías

| Categoría   | Tecnología              |
| ----------- | ----------------------- |
| Framework   | Next.js 15 (App Router) |
| Lenguaje    | TypeScript 5            |
| Estilos     | Tailwind CSS 4          |
| Animaciones | Framer Motion 11        |
| Iconos      | Lucide React            |
| Runtime     | React 19                |

---

## Estructura de carpetas

```
frontend/
├── public/
│   ├── cv.pdf                          # CV descargable
│   ├── me.png                          # Foto de perfil (sección About)
│   └── projects/
│       └── {slug}/
│           ├── cover.png               # Imagen principal del proyecto
│           └── gallery/
│               └── 01-nombre.png       # Imágenes adicionales de la galería
├── src/
│   ├── app/
│   │   ├── layout.tsx                  # Layout raíz con LanguageProvider
│   │   ├── page.tsx                    # Landing (home)
│   │   └── proyectos/
│   │       └── [slug]/
│   │           └── page.tsx            # Página de detalle de cada proyecto
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   └── Footer.tsx
│   │   ├── sections/
│   │   │   ├── Hero.tsx
│   │   │   ├── About.tsx
│   │   │   ├── Skills.tsx
│   │   │   ├── Projects.tsx
│   │   │   └── Contact.tsx
│   │   └── ui/
│   │       ├── ProjectCard.tsx
│   │       ├── ProjectDetailContent.tsx
│   │       ├── ProjectGallery.tsx
│   │       ├── TagList.tsx
│   │       ├── BackButton.tsx
│   │       └── LanguageToggle.tsx
│   ├── context/
│   │   └── LanguageContext.tsx         # Contexto de idioma con t() y pick()
│   ├── data/
│   │   └── portfolio.ts                # Fuente de verdad: datos personales, skills y proyectos
│   ├── messages/
│   │   ├── es.ts                       # Strings UI en español
│   │   └── en.ts                       # Strings UI en inglés
│   └── types/
│       └── index.ts                    # Tipos TypeScript: Project, Bilingual, GalleryImage, etc.
```

---

## Instalación

**Requisitos:** Node.js 18+ y pnpm.

```bash
# Clonar el repositorio
git clone https://github.com/JuniorSanchez04/portafolio-web.git
cd portafolio-web/frontend

# Instalar dependencias
pnpm install
```

---

## Ejecución local

```bash
# Modo desarrollo
pnpm dev
```

Abrir [http://localhost:3000](http://localhost:3000) en el navegador.

---

## Scripts disponibles

| Script       | Descripción                                    |
| ------------ | ---------------------------------------------- |
| `pnpm dev`   | Servidor de desarrollo con hot reload          |
| `pnpm build` | Build de producción con generación estática    |
| `pnpm start` | Servidor de producción (requiere build previo) |
| `pnpm lint`  | Análisis estático con ESLint                   |

---

## Personalización del contenido

Todo el contenido del portafolio vive en un único archivo: **`src/data/portfolio.ts`**.

### Datos personales

```ts
export const personal: Personal = {
  name: "Tu Nombre",
  title: { es: "Desarrollador Full Stack", en: "Full Stack Developer" },
  description: { es: "...", en: "..." },
  email: "tu@email.com",
  github: "https://github.com/tu-usuario",
  linkedin: "https://linkedin.com/in/tu-perfil",
  cvUrl: "/cv.pdf", // coloca tu CV en public/cv.pdf
  location: "Tu Ciudad, País",
};
```

### Habilidades

Agregar o quitar skills del array `skills[]`. Cada skill tiene `name` y `category` (`language`, `frontend`, `backend`, `database`, `devops`, `other`).

---

## Cómo agregar un nuevo proyecto

**1. Agregar los datos en `src/data/portfolio.ts`:**

```ts
{
  id: 6,
  slug: "nombre-del-proyecto",           // define la URL: /proyectos/nombre-del-proyecto
  title: { es: "Título ES", en: "Title EN" },
  description: { es: "...", en: "..." },
  tags: ["React", "Node.js"],
  imageUrl: "/projects/nombre-del-proyecto/cover.png",
  repoUrl: "https://github.com/...",      // o null
  liveUrl: "https://demo.com",            // o null
  featured: false,
  details: {
    summary: { es: "...", en: "..." },
    problem: { es: "...", en: "..." },
    role: { es: "...", en: "..." },
    features: { es: ["Feature 1", ...], en: ["Feature 1", ...] },
    challenges: { es: ["Desafío 1", ...], en: ["Challenge 1", ...] },
    gallery: [
      {
        src: "/projects/nombre-del-proyecto/gallery/01-pantalla.png",
        alt: "Descripción de la imagen",
        caption: "Texto opcional bajo la imagen",  // opcional
      },
    ],
  },
},
```

**2. Agregar las imágenes en `public/projects/`:**

```
public/projects/
└── nombre-del-proyecto/
    ├── cover.png          ← imagen principal (tarjeta y cabecera de detalle)
    └── gallery/
        ├── 01-pantalla.png
        └── 02-otra.png
```

La ruta `/proyectos/nombre-del-proyecto` se genera automáticamente en el próximo build gracias a `generateStaticParams`.

> Si el proyecto no tiene `details`, la página de detalle muestra solo la descripción básica. Si no tiene imágenes de galería, esa sección simplemente no aparece.

---

## Internacionalización (ES / EN)

El sitio soporta dos idiomas sin cambio de URL. El toggle `ES / EN` aparece en el navbar (desktop y mobile).

**Cómo funciona:**

- `LanguageContext` provee las funciones `t(key)` y `pick(bilingualObj)` a todos los componentes
- `t('nav.about')` resuelve strings de UI desde `src/messages/es.ts` o `src/messages/en.ts`
- `pick(project.title)` extrae el string del idioma activo de un objeto `{ es, en }`
- La preferencia se guarda en `localStorage` y se restaura en la siguiente visita
- Si falta una traducción en inglés, hace fallback automático al español

**Para agregar o modificar textos de UI**, editar `src/messages/es.ts` y `src/messages/en.ts`. TypeScript exige que ambos archivos tengan las mismas keys.

---

## Animaciones y UI

- **Framer Motion** en todas las secciones con animaciones `fade-up` al entrar en el viewport (`whileInView`)
- **Hover en tarjetas de proyecto**: elevación suave (`y: -4`) y zoom en la imagen de portada
- **Navbar**: transición a fondo con blur al superar 20px de scroll
- **Hero**: animaciones escalonadas con delays para cada elemento

---

## Capturas del proyecto

> Reemplazar con capturas reales del portafolio desplegado.

| Landing             | Detalle de proyecto    |
| ------------------- | ---------------------- |
| _(screenshot home)_ | _(screenshot detalle)_ |

---

## Mejoras futuras

- Modo claro / oscuro
- Filtro de proyectos por tecnología en la sección Projects
- Formulario de contacto funcional con envío de email
- Animación de transición entre páginas

---

## Autor

**Junior David Sanchez Britez**
Desarrollador Full Stack — Asunción, Paraguay

| Canal    | Enlace                                                                                            |
| -------- | ------------------------------------------------------------------------------------------------- |
| GitHub   | [github.com/JuniorSanchez04](https://github.com/JuniorSanchez04)                                  |
| LinkedIn | [linkedin.com/in/junior-sanchez-03702829a](https://www.linkedin.com/in/junior-sanchez-03702829a/) |
| Email    | juniorbritez3213@gmail.com                                                                        |

---

<p align="center">Diseñado y construido por Junior Sanchez · 2025</p>
