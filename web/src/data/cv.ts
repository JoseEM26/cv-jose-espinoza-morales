export const profile = {
  name: "Jose Angel Espinoza Morales",
  roles: ["Azure Cloud Developer", "Backend .NET & Java", "DevOps Engineer"],
  location: "Lima, San Juan de Lurigancho, Perú",
  phone: "+51 975 026 835",
  email: "joseangelespinozamorales@gmail.com",
  github: "https://github.com/JoseEM26",
  githubLabel: "github.com/JoseEM26",
  linkedin: "https://www.linkedin.com/in/espinoza-morales-jos%C3%A9-angel-b94296329",
  linkedinLabel: "linkedin.com/in/espinoza-morales",
  summary:
    "Desarrollador de software con 2 años de experiencia en desarrollo backend, arquitectura de microservicios y operaciones cloud. He trabajado con Java, .NET, Python y Node.js construyendo APIs REST escalables y soluciones orientadas a eventos. Manejo Docker, CI/CD con GitHub Actions, monitoreo con Prometheus y Grafana, y cuento con conocimientos de los servicios core de Microsoft Azure. Actualmente profundizando en el ecosistema completo de Azure orientado a la certificación AZ-204. Me adapto rápido a nuevos stacks — la transición de Java a C#/.NET es natural dado que comparten los mismos patrones de arquitectura e inyección de dependencias.",
  cvFile: "/cv",
};

export interface Job {
  title: string;
  company: string;
  period: string;
  points: string[];
  tags: string[];
  /** Si está presente, la tarjeta enlaza a una página de caso de estudio detallada en /case/:slug */
  caseStudySlug?: string;
}

export const experience: Job[] = [
  {
    title: "Full Stack Developer — Freelance",
    company: "Proyecto: El Papucón",
    period: "Mayo 2026 – Junio 2026",
    points: [
      "Desarrollé una plataforma de pedidos y delivery para un negocio de comida con React, desplegada en Vercel para mantener el costo casi nulo acorde a su volumen real de tráfico.",
      "Diseñé el modelo de datos en Supabase (PostgreSQL) y conecté el dominio propio del cliente, sin necesidad de CDN al ser una operación 100% local.",
      "Desarrollé una aplicación Android que recibe pedidos vía API y los envía por Bluetooth a la impresora de tickets de cocina, evitando comprar una tablet o pantalla adicional.",
      "Implementé flujos de pedido por delivery, recojo y consumo en el local, con pagos por Yape, transferencia o tarjeta, y almacenamiento de imágenes con Cloudinary.",
      "Migré la información del negocio, capacité al personal y di soporte directo durante el primer mes de operación.",
    ],
    tags: ["React", "Vercel", "Supabase", "PostgreSQL", "Android", "Bluetooth", "Cloudinary"],
    caseStudySlug: "papucon-delivery",
  },
  {
    title: "Analista Programador Java Junior",
    company: "Comfutura · Lima, Perú",
    period: "Enero 2026 – Abril 2026",
    points: [
      "Continué un monolito modular (Spring Boot + Angular) ya en marcha y participé en el diseño de su migración a microservicios con el patrón Strangler Fig.",
      "Migré módulo por módulo dominios de negocio como OT, cotizaciones, órdenes de compra, finanzas, RRHH y costo directo, sin detener la operación en producción.",
      "Implementé observabilidad con Spring Boot Actuator, Prometheus y Grafana, y desplegué los servicios en Docker y Kubernetes con RabbitMQ para comunicación asíncrona.",
      "Migré la infraestructura de Railway a una VPS propia, pasando de un costo variable según consumo a un costo fijo mensual.",
      "Cerré endpoints sin protección implementando control de acceso por rol con JSON Web Tokens (JWT).",
      "Colaboré en sprints con metodología Scrum, participando en code reviews, dailies y retrospectivas.",
    ],
    tags: [
      "Java 21",
      "Spring Boot",
      "Spring Cloud",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "RabbitMQ",
      "JWT",
      "GitHub Actions",
      "CI/CD",
      "Angular 20",
      "Git",
    ],
    caseStudySlug: "comfutura-microservicios",
  },
  {
    title: "DevOps & Cloud Engineer — Freelance",
    company: "Proyecto: Hosting Empresarial Pirkha",
    period: "2026",
    points: [
      "Migré el hosting disperso de varios clientes (Namecheap, GoDaddy) a una VPS propia en Hetzner Cloud con panel multi-cliente HestiaCP sobre Docker.",
      "Implementé seguridad perimetral (CrowdSec), certificados SSL/TLS y limpieza de archivos infectados detectados durante la migración.",
      "Diseñé un esquema de monitoreo (Uptime Kuma, Netdata) y backups en tres capas (VPS, Hetzner, AWS) con alertas automáticas por correo.",
      "Desarrollé un portal de autoservicio para que nuevos clientes contraten, paguen (Culqi) y aprovisionen su propio hosting sin intervención manual.",
    ],
    tags: ["Hetzner Cloud", "Linux", "Docker", "HestiaCP", "Nginx", "GitHub Actions", "CrowdSec", "MariaDB", "SSH"],
    caseStudySlug: "pirkha-hosting-migration",
  },
  {
    title: "Full Stack Developer & DevOps — Freelance",
    company: "Proyecto: Soluciones Satelitales",
    period: "2026",
    points: [
      "Diseñé e implementé arquitectura moderna basada en monorepos (TurboRepo) con NestJS y Next.js para automatización comercial.",
      "Desarrollé servicios backend con comunicación asíncrona e integraciones con APIs externas (Meta Graph API, WhatsApp).",
      "Implementé arquitectura orientada a eventos para clasificación y derivación de prospectos con comunicación asíncrona entre servicios.",
      "Desplegué en VPS con Docker y pipelines automatizados con GitHub Actions.",
    ],
    tags: ["NestJS", "Next.js", "TypeScript", "PostgreSQL", "Docker", "GitHub Actions"],
    caseStudySlug: "soluciones-satelitales-automation",
  },
  {
    title: "Full Stack Developer .NET — Freelance",
    company: "Digital Solution 360 · Cliente en España",
    period: "Agosto 2025 – Noviembre 2025",
    points: [
      "Mantuve y mejoré PlusATS, una plataforma tipo ATS que usa web scraping (LinkedIn, Indeed) para que empresas reclutadoras filtren candidatos calificados automáticamente.",
      "Sumé funcionalidades y mejoras de rendimiento sobre ASP.NET Core sin reemplazar la integración SOA/SOAP heredada del sistema, en un entorno de producción activa.",
      "Integré soluciones de Inteligencia Artificial aplicada al negocio, controlando de cerca su costo, para automatizar reglas de validación y procesamiento de datos.",
      "Diseñé y optimicé consultas sobre SQL Server y MySQL mejorando tiempos de respuesta en operaciones críticas.",
      "Gestioné envío automatizado de notificaciones por correo mediante SMTP integrado en flujos de negocio.",
    ],
    tags: ["C#", "ASP.NET Core", "SQL Server", "MySQL", "SOAP", "REST API", "SMTP", "Git"],
    caseStudySlug: "plusats-digital-solution-360",
  },
  {
    title: "Full Stack Developer Java",
    company: "Mobilenet · Lima, Perú",
    period: "Mayo 2025 – Agosto 2025",
    points: [
      "Lideré la migración del proceso de ventas RUC10 — gestionado manualmente en Google Sheets — hacia una plataforma web estructurada con roles, seguridad y trazabilidad.",
      "Diseñé un modelo de roles jerárquico (Administrador, Auditor, Supervisor, Consultor) con aislamiento de datos por equipo usando Spring Security y JWT.",
      "Trabajé de la mano con los usuarios finales (consultores y supervisores) para definir el flujo y el diseño UX/UI del sistema.",
      "Desplegué en Railway con contenedores Docker, Nginx y pipelines de CI/CD con pruebas unitarias JUnit.",
    ],
    tags: ["Java", "Spring Boot", "Spring Security", "JWT", "Angular 20", "TypeScript", "MySQL", "Docker", "Nginx", "Railway", "REST API"],
    caseStudySlug: "mobilenet-ruc10",
  },
];

export interface Project {
  title: string;
  description?: string;
  points?: string[];
  tags: string[];
  repoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "GeoCheck AI — Sistema de Asistencia Híbrida (Web + iOS)",
    description:
      "Plataforma de control de asistencia laboral para modalidades presencial, remota, híbrida y de campo, con geofencing y marcación por QR o GPS.",
    points: [
      "Backend Spring Boot con arquitectura RESTful y control de acceso por roles (Admin, Jefe de Terreno, Trabajador de Terreno, Trabajador).",
      "App móvil nativa en Swift con escaneo de QR de tokens rotativos, marcación por GPS y mapa interactivo para definir puntos de control.",
      "Panel web en Angular con autenticación de dos factores (2FA) y geofencing configurable por oficina.",
    ],
    tags: ["Java", "Spring Boot", "Angular", "Swift", "MySQL"],
    repoUrl: "https://github.com/JoseEM26/mobil-ios-asynchronous",
  },
  {
    title: "SaaS Multi-Tienda — Store Collection",
    description:
      "SaaS que permite crear múltiples tiendas online independientes, cada una con su propio catálogo, precios e información, sobre un mismo backend compartido.",
    tags: ["Java", "Spring Boot", "Angular", "Swagger / OpenAPI"],
    repoUrl: "https://github.com/JoseEM26/saas-store-collection",
  },
  {
    title: "App Android tipo Blackboard para Instituto",
    description:
      "Aplicación móvil Android para gestión académica al estilo Blackboard, con backend en Spring Boot y panel web en Angular.",
    tags: ["Java", "Spring Boot", "Angular", "Android"],
    repoUrl: "https://github.com/JoseEM26/mobil-android-ciberproto",
  },
  {
    title: "Migración de Spring Boot a Quarkus con Arquitectura Hexagonal",
    description:
      "API REST en Quarkus 3 bajo arquitectura hexagonal (Ports & Adapters), con autenticación JWT RSA, control de acceso por roles y frontend en Angular Material.",
    points: [
      "Apliqué el patrón de Casos de Uso sobre arquitectura hexagonal, separando dominio, aplicación e infraestructura.",
      "Implementé autenticación JWT con claves RSA (MicroProfile JWT) y control de acceso por roles entre USER y ADMIN.",
      "Documenté la API completa con Swagger/OpenAPI y desplegué todo el stack (API, frontend, PostgreSQL) con Docker Compose.",
    ],
    tags: ["Quarkus", "Java 21", "JWT", "PostgreSQL", "Angular", "Docker"],
    repoUrl: "https://github.com/JoseEM26/web-quarkus-admin",
  },
  {
    title: "Plataforma SaaS — Gestión de Restaurantes",
    description:
      "Sistema SaaS multiempresa con gestión de usuarios, roles, pedidos y reportes. Desplegado con Docker + CI/CD automatizado.",
    tags: ["Java", "Spring Boot", "Angular", "PostgreSQL", "Docker"],
  },
  {
    title: "Plataforma SaaS — Gestión de Canchas Deportivas",
    description:
      "Sistema multitenant para reservas, control de pagos y horarios dinámicos con prevención de colisiones.",
    tags: ["Java", "Spring Boot", "PostgreSQL", "Docker", "JWT"],
  },
  {
    title: "Arquitectura BFF + Integración SOAP/REST",
    description:
      "Implementación del patrón Backend For Frontend con capa de transformación XML→JSON para interoperabilidad entre sistemas legados SOAP y servicios REST modernos.",
    tags: ["Java", "Spring Boot", "SOAP", "REST API"],
  },
];

export interface SkillCategory {
  label: string;
  items: string[];
  /** Aclaración opcional mostrada bajo el label, p.ej. para distinguir conocimiento de experiencia laboral. */
  note?: string;
}

export const skillCategories: SkillCategory[] = [
  {
    label: "Microsoft Azure",
    items: [
      "App Service",
      "Azure Functions",
      "Service Bus",
      "Event Grid",
      "API Management",
      "Key Vault",
      "Azure SQL Database",
      "Storage Accounts",
      "Azure Container Registry",
      "Azure DevOps",
      "Application Insights",
      "Azure Monitor",
      "Managed Identity",
      "Azure AD / OAuth 2.0",
    ],
  },
  {
    label: "Cloud & DevOps",
    items: [
      "Docker",
      "Docker Compose",
      "Kubernetes básico (K8s/AKS)",
      "CI/CD",
      "GitHub Actions",
      "Azure DevOps Pipelines",
      "Linux",
      "SSH",
      "Nginx",
      "Hetzner Cloud",
      "VPS Administration",
    ],
  },
  {
    label: "Backend",
    items: [
      "Java 21",
      "Spring Boot",
      "Spring Security",
      "Spring Cloud (Eureka, Config Server, Gateway)",
      "C# / ASP.NET Core",
      "NestJS",
      "Python",
      "REST API",
      "SOAP",
      "JWT",
      "OAuth 2.0",
    ],
  },
  {
    label: "Bases de Datos",
    items: ["PostgreSQL", "MySQL", "MariaDB", "SQL Server", "Cosmos DB (conceptual)"],
  },
  {
    label: "Arquitectura de Software",
    items: [
      "Microservicios",
      "Arquitectura Hexagonal",
      "Clean Architecture",
      "DDD",
      "API Gateway",
      "BFF",
      "Event-Driven Architecture",
      "MVC",
      "Strangler Fig Pattern",
    ],
  },
  {
    label: "Observabilidad & Monitoreo",
    items: ["Prometheus", "Grafana", "Spring Boot Actuator", "Application Insights", "Centralised logging"],
  },
  {
    label: "Herramientas",
    items: ["VS Code", "IntelliJ IDEA", "Postman", "Swagger / OpenAPI", "Git", "Maven", "Docker Desktop", "Portainer", "Coolify"],
  },
  {
    label: "Metodologías",
    items: ["Scrum", "Kanban", "Sprints", "Dailies", "Planning", "Retrospectiva", "Code Reviews"],
  },
  {
    label: "Explorando por cuenta propia",
    note: "Conocimiento de proyectos personales pequeños — sin experiencia laboral remunerada con estas tecnologías.",
    items: ["Jenkins", "Kafka", "SonarQube", "Terraform", "Elasticsearch", "Redis", "Quarkus", "Go", "Vue"],
  },
];

/** Tecnologías destacadas para la nube de íconos animada del hero / sección Skills. */
export const featuredTech = [
  "Java 21",
  "Spring Boot",
  "C#",
  "ASP.NET Core",
  "NestJS",
  "Next.js",
  "TypeScript",
  "Angular",
  "Python",
  "PostgreSQL",
  "MySQL",
  "Docker",
  "Kubernetes",
  "GitHub Actions",
  "Microsoft Azure",
  "Nginx",
  "Linux",
  "Git",
  "Prometheus",
  "Grafana",
  "Kafka",
  "Postman",
];

export interface EducationItem {
  title: string;
  institution: string;
  period: string;
}

export const education: EducationItem[] = [
  {
    title: "Ingeniería de Software (en curso, por convalidación)",
    institution: "UPN — Universidad Privada del Norte",
    period: "2026 – 2028 (aprox.)",
  },
  { title: "Técnico en Computación e Informática", institution: "CIBERTEC", period: "2026" },
  { title: "Inglés — Programa de Idiomas", institution: "ICPNA", period: "2025" },
  { title: "Inglés Conversacional", institution: "WeTalk", period: "2026" },
];

export interface LanguageItem {
  language: string;
  level: string;
}

export const languages: LanguageItem[] = [
  { language: "Español", level: "Nativo" },
  { language: "Inglés", level: "Intermedio técnico" },
];
