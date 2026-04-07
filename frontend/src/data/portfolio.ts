import type { Personal, Skill, Project } from "@/types";

// ── DATOS PERSONALES ──────────────────────────────────

export const personal: Personal = {
  name: "Junior Sanchez",
  title: {
    es: "Desarrollador Full Stack",
    en: "Full Stack Developer",
  },
  description: {
    es: "Desarrollo sistemas modernos y funcionales enfocados en resolver problemas reales de negocios, con buen rendimiento y experiencia de usuario.",
    en: "I build modern, functional systems focused on solving real business problems, with good performance and user experience.",
  },
  email: "juniorbritez3213@gmail.com",
  github: "https://github.com/JuniorSanchez04",
  linkedin: "https://www.linkedin.com/in/junior-sanchez-03702829a/",
  cvUrl: "/cv.pdf",
  location: "Asunción, Paraguay",
};

// ── SKILLS ──────────────────────────────────

export const skills: Skill[] = [
  // Lenguajes
  { name: "JavaScript", category: "language" },
  { name: "TypeScript", category: "language" },

  // Frontend
  { name: "HTML", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },

  // Backend
  { name: "Node.js", category: "backend" },
  { name: "NestJS", category: "backend" },
  { name: "PHP", category: "backend" },

  // Base de datos
  { name: "MySQL", category: "database" },
  { name: "MariaDB", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "Prisma", category: "database" },

  // Tools
  { name: "Git", category: "devops" },
  { name: "GitHub", category: "devops" },
  { name: "VS Code", category: "devops" },
  { name: "Visual Studio 2022", category: "devops" },
  { name: "XAMPP", category: "devops" },
];

// ── PROYECTOS ──────────────────────────────────

export const projects: Project[] = [
  {
    id: 1,
    slug: "sistema-web-pedidos",
    title: {
      es: "Sistema Web de Pedidos",
      en: "Web Order System",
    },
    description: {
      es: "Aplicación full stack para gestión de pedidos en negocios. Incluye catálogo de productos, autenticación de usuarios, manejo de órdenes y control de stock.",
      en: "Full stack application for business order management. Includes product catalog, user authentication, order handling, and stock control.",
    },
    tags: ["Next.js", "NestJS", "PostgreSQL", "Prisma"],
    imageUrl: "/projects/sistema-web-pedidos/cover.png",
    repoUrl: "https://github.com/JuniorSanchez04",
    liveUrl: null,
    featured: true,
    details: {
      summary: {
        es: "Plataforma web completa que permite a negocios locales publicar su menú o catálogo de productos, recibir pedidos online y gestionarlos desde un panel administrativo. El cliente puede navegar el catálogo, agregar productos al carrito y realizar pedidos sin necesidad de registrarse.",
        en: "A complete web platform that allows local businesses to publish their menu or product catalog, receive online orders, and manage them from an admin panel. Customers can browse the catalog, add products to the cart, and place orders without needing to register.",
      },
      problem: {
        es: "Los negocios locales pequeños dependen de WhatsApp o llamadas para recibir pedidos, lo que genera errores, pérdida de ventas y falta de control sobre el historial de órdenes.",
        en: "Small local businesses rely on WhatsApp or phone calls to receive orders, leading to errors, lost sales, and no control over order history.",
      },
      role: {
        es: "Desarrollador full stack. Diseñé la arquitectura, implementé el backend con NestJS y Prisma, y construí el frontend con Next.js y Tailwind CSS.",
        en: "Full stack developer. I designed the architecture, implemented the backend with NestJS and Prisma, and built the frontend with Next.js and Tailwind CSS.",
      },
      features: {
        es: [
          "Catálogo de productos con categorías y búsqueda",
          "Carrito de compras persistente",
          "Creación de pedidos sin registro obligatorio",
          "Panel admin con autenticación JWT",
          "CRUD completo de productos",
          "Gestión de pedidos con estados (pendiente, preparando, listo, entregado)",
          "Dashboard con resumen de ventas",
        ],
        en: [
          "Product catalog with categories and search",
          "Persistent shopping cart",
          "Order creation without mandatory registration",
          "Admin panel with JWT authentication",
          "Full product CRUD",
          "Order management with statuses (pending, preparing, ready, delivered)",
          "Dashboard with sales summary",
        ],
      },
      challenges: {
        es: [
          "Diseñar una arquitectura modular que separe bien frontend y backend sin sobrecomplicar el MVP",
          "Implementar autenticación JWT segura con refresh tokens y protección de rutas",
          "Manejar el estado del carrito de forma eficiente en el cliente sin depender del backend",
        ],
        en: [
          "Designing a modular architecture that clearly separates frontend and backend without over-engineering the MVP",
          "Implementing secure JWT authentication with refresh tokens and route protection",
          "Managing cart state efficiently on the client without depending on the backend",
        ],
      },
      gallery: [
        {
          src: "/projects/sistema-web-pedidos/gallery/admin_1.png",
          alt: "Pantalla de administración para agregar productos en el sistema web de pedidos",
          caption:
            "Vista inicial del panel administrador donde se cargan nuevos productos con sus datos principales",
        },
        {
          src: "/projects/sistema-web-pedidos/gallery/admin_2.png",
          alt: "Lista de productos registrados en el panel administrador del sistema web de pedidos",
          caption:
            "Listado de productos ya agregados por el administrador para su gestión y actualización",
        },
        {
          src: "/projects/sistema-web-pedidos/gallery/carrito.png",
          alt: "Carrito de compras del cliente en el sistema web de pedidos",
          caption:
            "Sección del cliente donde se visualizan los productos seleccionados antes de confirmar el pedido",
        },
        {
          src: "/projects/sistema-web-pedidos/gallery/categorias.png",
          alt: "Gestión de categorías de productos en el sistema web de pedidos",
          caption:
            "Pantalla de administración de categorías para organizar productos como refrescos, postres y otros tipos",
        },
        {
          src: "/projects/sistema-web-pedidos/gallery/configuracion_admin.png",
          alt: "Configuración del negocio en el panel administrador del sistema web de pedidos",
          caption:
            "Módulo de configuración donde se personalizan los datos del negocio, como logo, teléfono y otra información general",
        },
        {
          src: "/projects/sistema-web-pedidos/gallery/mis_pedidos.png",
          alt: "Historial de pedidos del cliente en el sistema web de pedidos",
          caption:
            "Vista del cliente con el historial de sus pedidos realizados dentro de la plataforma",
        },
        {
          src: "/projects/sistema-web-pedidos/gallery/pedidos.png",
          alt: "Listado de pedidos recibidos por el administrador en el sistema web de pedidos",
          caption:
            "Pantalla donde el administrador visualiza y gestiona los pedidos realizados por los clientes",
        },
      ],
    },
  },
  {
    id: 2,
    slug: "sistema-inventario-ventas",
    title: {
      es: "Sistema de Inventario y Ventas (Desktop)",
      en: "Inventory & Sales System (Desktop)",
    },
    description: {
      es: "Sistema de escritorio desarrollado en C# para gestión de inventario, ventas y facturación, con control de stock, alertas y manejo de usuarios.",
      en: "Desktop application developed in C# for inventory management, sales, and billing, with stock control, alerts, and user management.",
    },
    tags: ["C#", ".NET", "SQL"],
    imageUrl: "/projects/sistema-inventario-ventas/cover.png",
    repoUrl: null,
    liveUrl: null,
    featured: true,
    details: {
      summary: {
        es: "Aplicación de escritorio para la gestión integral de un negocio: control de inventario, registro de ventas, facturación y administración de usuarios con roles diferenciados.",
        en: "Desktop application for comprehensive business management: inventory control, sales registration, billing, and user administration with differentiated roles.",
      },
      problem: {
        es: "El negocio llevaba el control de stock y ventas en planillas manuales, lo que generaba inconsistencias en el inventario y dificultad para generar reportes.",
        en: "The business tracked stock and sales in manual spreadsheets, causing inventory inconsistencies and difficulty generating reports.",
      },
      role: {
        es: "Desarrollador principal. Diseñé la base de datos, implementé la lógica de negocio y construí la interfaz de usuario en Windows Forms.",
        en: "Lead developer. I designed the database, implemented the business logic, and built the user interface in Windows Forms.",
      },
      features: {
        es: [
          "Gestión de productos con categorías y stock mínimo",
          "Registro de ventas con generación de facturas",
          "Alertas automáticas de stock bajo",
          "Manejo de usuarios con roles (admin, vendedor)",
          "Reportes de ventas por periodo",
          "Búsqueda y filtrado de productos",
        ],
        en: [
          "Product management with categories and minimum stock",
          "Sales registration with invoice generation",
          "Automatic low-stock alerts",
          "User management with roles (admin, seller)",
          "Sales reports by period",
          "Product search and filtering",
        ],
      },
      challenges: {
        es: [
          "Diseñar un modelo de datos que soporte facturación con múltiples ítems y cálculos de totales correctos",
          "Implementar control de stock en tiempo real que se actualice al registrar ventas",
          "Crear una interfaz intuitiva para usuarios no técnicos",
        ],
        en: [
          "Designing a data model that supports billing with multiple items and correct total calculations",
          "Implementing real-time stock control that updates when sales are registered",
          "Creating an intuitive interface for non-technical users",
        ],
      },
      gallery: [
        {
          src: "/projects/sistema-inventario-ventas/gallery/login.png",
          alt: "Pantalla de inicio de sesión del sistema de inventario y ventas",
          caption:
            "Acceso seguro al sistema mediante inicio de sesión para administradores o usuarios autorizados",
        },
        {
          src: "/projects/sistema-inventario-ventas/gallery/producto.png",
          alt: "Gestión de productos del sistema de inventario y ventas",
          caption:
            "Módulo de productos para registrar, editar y organizar los artículos disponibles en el inventario",
        },
        {
          src: "/projects/sistema-inventario-ventas/gallery/categorias.png",
          alt: "Gestión de categorías del sistema de inventario y ventas",
          caption:
            "Sección para administrar categorías y mejorar la organización de los productos dentro del sistema",
        },
        {
          src: "/projects/sistema-inventario-ventas/gallery/venta.png",
          alt: "Pantalla de ventas del sistema de inventario y ventas",
          caption:
            "Interfaz de registro de ventas que permite procesar compras y actualizar el inventario en tiempo real",
        },
        {
          src: "/projects/sistema-inventario-ventas/gallery/reporte.png",
          alt: "Reporte del sistema de inventario y ventas",
          caption:
            "Vista de reportes con información útil sobre movimientos, ventas y control general del negocio",
        },
        {
          src: "/projects/sistema-inventario-ventas/gallery/factura.png",
          alt: "Factura generada por el sistema de inventario y ventas",
          caption:
            "Comprobante o factura emitida automáticamente como respaldo de la operación realizada",
        },
      ],
    },
  },
  {
    id: 3,
    slug: "portafolio-web",
    title: {
      es: "Portafolio Web Profesional",
      en: "Professional Web Portfolio",
    },
    description: {
      es: "Sitio web personal desarrollado con Next.js y Tailwind CSS para mostrar proyectos, habilidades y experiencia como desarrollador.",
      en: "Personal website developed with Next.js and Tailwind CSS to showcase projects, skills, and experience as a developer.",
    },
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
    imageUrl: "/projects/portafolio-web/cover.png",
    repoUrl: "https://github.com/JuniorSanchez04",
    liveUrl: null,
    featured: false,
    details: {
      summary: {
        es: "Portafolio profesional diseñado para presentar proyectos, habilidades técnicas e información de contacto de forma clara y moderna. Construido con Next.js App Router, TypeScript y Tailwind CSS.",
        en: "Professional portfolio designed to present projects, technical skills, and contact information in a clear, modern way. Built with Next.js App Router, TypeScript, and Tailwind CSS.",
      },
      problem: {
        es: "Necesitaba un sitio profesional que sirviera como carta de presentación para reclutadores y clientes, mostrando mis proyectos y habilidades de forma organizada.",
        en: "I needed a professional site to serve as a presentation for recruiters and clients, showcasing my projects and skills in an organized way.",
      },
      role: {
        es: "Diseñador y desarrollador. Definí la estructura, el diseño visual y la implementación completa del sitio.",
        en: "Designer and developer. I defined the structure, visual design, and complete implementation of the site.",
      },
      features: {
        es: [
          "Diseño responsive con Tailwind CSS",
          "Animaciones suaves con Framer Motion",
          "Secciones: Hero, About, Skills, Projects, Contact",
          "Páginas individuales por proyecto con contenido detallado",
          "SEO optimizado con metadata dinámica",
          "Generación estática para carga instantánea",
        ],
        en: [
          "Responsive design with Tailwind CSS",
          "Smooth animations with Framer Motion",
          "Sections: Hero, About, Skills, Projects, Contact",
          "Individual project pages with detailed content",
          "SEO optimized with dynamic metadata",
          "Static generation for instant load times",
        ],
      },
      challenges: {
        es: [
          "Lograr un diseño limpio y profesional sin usar templates o librerías de UI pesadas",
          "Organizar los datos del portafolio de forma escalable sin necesidad de un backend o CMS",
        ],
        en: [
          "Achieving a clean, professional design without using templates or heavy UI libraries",
          "Organizing portfolio data in a scalable way without needing a backend or CMS",
        ],
      },
      gallery: [],
    },
  },
  {
    id: 4,
    slug: "gestion-junta-saneamiento",
    title: {
      es: "Sistema de Gestión de Junta de Saneamiento",
      en: "Sanitation Board Management System",
    },
    description: {
      es: "Sistema web desarrollado para la administración de una junta de saneamiento, incluyendo gestión de usuarios, registros y control de datos.",
      en: "Web system developed for the administration of a sanitation board, including user management, records, and data control.",
    },
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    imageUrl: "/projects/gestion-junta-saneamiento/cover.png",
    repoUrl:
      "https://github.com/JuniorSanchez04/Proyecto-control-junta-saneamiento.git",
    liveUrl: null,
    featured: true,
    details: {
      summary: {
        es: "Sistema web para la administración de una junta de saneamiento local. Permite gestionar usuarios, registrar datos de servicio y mantener un control organizado de la información administrativa.",
        en: "Web system for the administration of a local sanitation board. Allows managing users, registering service data, and maintaining organized control of administrative information.",
      },
      problem: {
        es: "La junta de saneamiento manejaba toda su información en papel y planillas, lo que dificultaba el seguimiento de usuarios y la generación de reportes.",
        en: "The sanitation board managed all its information on paper and spreadsheets, making it difficult to track users and generate reports.",
      },
      role: {
        es: "Desarrollador principal. Diseñé la base de datos, implementé el backend en PHP y construí las vistas con HTML, CSS y JavaScript.",
        en: "Lead developer. I designed the database, implemented the backend in PHP, and built the views with HTML, CSS, and JavaScript.",
      },
      features: {
        es: [
          "Registro y gestión de usuarios del servicio",
          "Control de datos administrativos",
          "Panel de administración con autenticación",
          "Búsqueda y filtrado de registros",
          "Interfaz responsive para acceso desde cualquier dispositivo",
        ],
        en: [
          "Service user registration and management",
          "Administrative data control",
          "Admin panel with authentication",
          "Record search and filtering",
          "Responsive interface for access from any device",
        ],
      },
      challenges: {
        es: [
          "Trabajar con PHP puro sin framework, manteniendo el código organizado y seguro",
          "Diseñar una base de datos que refleje correctamente las relaciones entre usuarios, servicios y pagos",
        ],
        en: [
          "Working with pure PHP without a framework while keeping the code organized and secure",
          "Designing a database that correctly reflects the relationships between users, services, and payments",
        ],
      },
      gallery: [
        {
          src: "/projects/gestion-junta-saneamiento/gallery/registrar.png",
          alt: "Registrar Usuarios",
          caption: "Formulario para registrar usuarios",
        },
        {
          src: "/projects/gestion-junta-saneamiento/gallery/buscar.png",
          alt: "Buscar usuarios",
          caption: "Modulo para buscar y registrar el consumo de un usuario",
        },
        {
          src: "/projects/gestion-junta-saneamiento/gallery/lista_usuario.png",
          alt: "Lista de usuarios",
          caption: "Lista de los usuarios activos y no activos",
        },
        {
          src: "/projects/gestion-junta-saneamiento/gallery/Corporativo.png",
          alt: "Informe Corporativo",
          caption:
            "Informe detallado sobre consumo, facturación, ganancia, etc",
        },
      ],
    },
  },
  {
    id: 5,
    slug: "sistema-venta-calzados",
    title: {
      es: "Sistema de Venta de Calzados",
      en: "Footwear Sales System",
    },
    description: {
      es: "Sistema web para la gestión de ventas, productos e inventario en un negocio de calzados.",
      en: "Web system for managing sales, products, and inventory in a footwear business.",
    },
    tags: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    imageUrl: "/projects/sistema-venta-calzados/cover.png",
    repoUrl: null,
    liveUrl: null,
    featured: false,
    details: {
      summary: {
        es: "Sistema web para un negocio de calzados que permite gestionar el catálogo de productos, registrar ventas y controlar el inventario de forma centralizada.",
        en: "Web system for a footwear business that allows managing the product catalog, registering sales, and controlling inventory in a centralized way.",
      },
      problem: {
        es: "El negocio no tenía un sistema digital para llevar el control de sus productos y ventas, lo que generaba desorganización en el inventario.",
        en: "The business had no digital system to track its products and sales, causing inventory disorganization.",
      },
      role: {
        es: "Desarrollador principal. Implementé el sistema completo desde la base de datos hasta la interfaz de usuario.",
        en: "Lead developer. I implemented the complete system from the database to the user interface.",
      },
      features: {
        es: [
          "CRUD de productos con tallas y categorías",
          "Registro de ventas",
          "Control de inventario",
          "Panel de administración",
          "Búsqueda de productos por nombre o categoría",
        ],
        en: [
          "Product CRUD with sizes and categories",
          "Sales registration",
          "Inventory control",
          "Administration panel",
          "Product search by name or category",
        ],
      },
      challenges: {
        es: [
          "Modelar productos con múltiples variantes (tallas, colores) en una base de datos relacional",
          "Mantener la consistencia del stock al registrar ventas concurrentes",
        ],
        en: [
          "Modeling products with multiple variants (sizes, colors) in a relational database",
          "Maintaining stock consistency when registering concurrent sales",
        ],
      },
      gallery: [
        {
          src: "/projects/sistema-venta-calzados/gallery/admin.png",
          alt: "Panel de administración del sistema de venta de calzados",
          caption:
            "Vista del panel de administración para gestionar productos, ventas y control general del sistema",
        },
        {
          src: "/projects/sistema-venta-calzados/gallery/carrito.png",
          alt: "Carrito de compras del sistema de venta de calzados",
          caption:
            "Pantalla del carrito de compras donde se visualizan los productos seleccionados antes de finalizar la compra",
        },
        {
          src: "/projects/sistema-venta-calzados/gallery/pago.png",
          alt: "Pantalla de pago del sistema de venta de calzados",
          caption:
            "Sección de pago del sistema donde se completa el proceso de compra de los productos",
        },
        {
          src: "/projects/sistema-venta-calzados/gallery/producto.png",
          alt: "Vista de productos del sistema de venta de calzados",
          caption:
            "Listado o detalle de productos disponibles con información clave para la venta",
        },
      ],
    },
  },
];

// ── HELPERS ──────────────────────────────────

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
