/**
 * Descripciones cortas de cada tecnología / concepto para el modal informativo
 * que se abre al hacer click sobre un badge o ícono en el sitio.
 */
export const TECH_INFO: Record<string, string> = {
  // Microsoft Azure
  "App Service": "Servicio de Azure para desplegar y escalar aplicaciones web y APIs sin administrar servidores directamente.",
  "Azure Functions": "Plataforma serverless de Azure para ejecutar código en respuesta a eventos, pagando solo por el tiempo de ejecución.",
  "Service Bus": "Servicio de mensajería de Azure para comunicar aplicaciones y microservicios de forma asíncrona y confiable.",
  "Event Grid": "Servicio de Azure para enrutar eventos entre servicios en tiempo real, base de arquitecturas orientadas a eventos.",
  "API Management": "Servicio de Azure para publicar, proteger, versionar y monitorear APIs desde una sola puerta de entrada.",
  "Key Vault": "Servicio de Azure para guardar de forma segura secretos, contraseñas, certificados y llaves de cifrado.",
  "Azure SQL Database": "Base de datos relacional administrada de Azure, compatible con SQL Server, sin gestionar infraestructura.",
  "Storage Accounts": "Servicio de almacenamiento de Azure para blobs, archivos, colas y tablas a escala.",
  "Azure Container Registry": "Registro privado de Azure para almacenar y distribuir imágenes de contenedores Docker.",
  "Azure DevOps": "Suite de Microsoft para gestionar repositorios, pipelines CI/CD, tableros y pruebas de un proyecto.",
  "Application Insights": "Herramienta de Azure para monitorear el rendimiento y los errores de aplicaciones en producción.",
  "Azure Monitor": "Servicio de Azure para recolectar métricas y logs de toda la infraestructura y generar alertas.",
  "Managed Identity": "Mecanismo de Azure que da identidad automática a un recurso para autenticarse sin manejar credenciales manualmente.",
  "Azure AD / OAuth 2.0": "Azure Active Directory junto al protocolo OAuth 2.0, usados para autenticar usuarios y proteger APIs con tokens.",

  // Cloud & DevOps
  Docker: "Plataforma para empaquetar una aplicación junto a todas sus dependencias en contenedores portables y reproducibles.",
  "Docker Compose": "Herramienta para definir y levantar aplicaciones con varios contenedores Docker mediante un solo archivo de configuración.",
  "Kubernetes básico (K8s/AKS)": "Orquestador de contenedores para desplegar, escalar y gestionar aplicaciones en clúster; AKS es su versión administrada en Azure.",
  Kubernetes: "Orquestador de contenedores para desplegar, escalar y mantener disponibles aplicaciones distribuidas en producción.",
  "CI/CD": "Integración y despliegue continuo: automatizar el build, las pruebas y el despliegue de código cada vez que cambia.",
  "GitHub Actions": "Sistema de automatización de GitHub para correr pipelines de CI/CD directamente desde el repositorio.",
  "Azure DevOps Pipelines": "Motor de CI/CD de Azure DevOps para automatizar build, pruebas y despliegue de aplicaciones.",
  Linux: "Sistema operativo de código abierto sobre el que corre la gran mayoría de servidores y contenedores en producción.",
  SSH: "Protocolo para conectarse y administrar servidores remotos de forma segura y cifrada por consola.",
  Nginx: "Servidor web y reverse proxy de alto rendimiento, usado para enrutar tráfico, balancear carga y servir HTTPS.",
  "Hetzner Cloud": "Proveedor de infraestructura cloud (VPS) europeo, conocido por su buena relación precio-rendimiento.",
  "VPS Administration": "Administración de servidores privados virtuales: configuración, seguridad, actualizaciones y monitoreo del sistema.",

  // Backend
  "Java 21": "Versión moderna (LTS) del lenguaje Java, con mejoras de rendimiento y sintaxis usada en el desarrollo backend empresarial.",
  Java: "Lenguaje de programación orientado a objetos, muy usado en backend empresarial por su solidez y su ecosistema (Spring, etc.).",
  "Spring Boot": "Framework de Java que simplifica la creación de aplicaciones y APIs REST listas para producción con mínima configuración.",
  "Spring Security": "Módulo de Spring para manejar autenticación, autorización y protección de endpoints en aplicaciones Java.",
  "Spring Cloud (Eureka, Config Server, Gateway)": "Conjunto de herramientas de Spring para microservicios: descubrimiento de servicios (Eureka), configuración centralizada y puerta de entrada (Gateway).",
  "Spring Cloud": "Conjunto de herramientas de Spring para construir arquitecturas de microservicios (descubrimiento de servicios, configuración centralizada, gateway).",
  "Spring Data JPA": "Módulo de Spring que simplifica el acceso a bases de datos relacionales usando el estándar JPA.",
  "Spring Boot Actuator": "Módulo de Spring Boot que expone métricas, salud y estado interno de una aplicación en producción.",
  "C# / ASP.NET Core": "C# es el lenguaje de Microsoft para .NET, y ASP.NET Core su framework para construir APIs y aplicaciones web modernas.",
  "C#": "Lenguaje de programación de Microsoft, base del ecosistema .NET para construir aplicaciones backend y de escritorio.",
  "ASP.NET Core": "Framework de Microsoft para construir APIs y aplicaciones web modernas, multiplataforma y de alto rendimiento.",
  NestJS: "Framework de Node.js con TypeScript para construir APIs backend estructuradas, inspirado en patrones de Angular.",
  Python: "Lenguaje de programación versátil, muy usado en automatización, scraping, IA y backend por su simplicidad.",
  "REST API": "Estilo de arquitectura para exponer servicios web a través de HTTP usando recursos, verbos y JSON.",
  SOAP: "Protocolo de comunicación basado en XML para servicios web, común en sistemas empresariales y legados.",
  JWT: "JSON Web Token: un token firmado que permite autenticar usuarios y transportar permisos de forma segura entre servicios.",
  "OAuth 2.0": "Protocolo estándar de autorización que permite dar acceso seguro a recursos sin compartir contraseñas.",
  "Bearer Token": "Forma de autenticación donde el cliente envía un token en cada solicitud para demostrar que tiene acceso autorizado.",
  RabbitMQ: "Sistema de colas de mensajes para comunicar servicios de forma asíncrona y desacoplada.",

  // Bases de datos
  PostgreSQL: "Sistema de base de datos relacional de código abierto, robusto y muy usado en aplicaciones backend modernas.",
  MySQL: "Sistema de gestión de bases de datos relacionales de código abierto, muy extendido en aplicaciones web.",
  MariaDB: "Sistema de base de datos relacional, bifurcación de MySQL, compatible con él y con desarrollo abierto.",
  "SQL Server": "Sistema de gestión de bases de datos relacionales de Microsoft, muy usado en entornos empresariales .NET.",
  "Cosmos DB (conceptual)": "Base de datos NoSQL de Azure, distribuida globalmente y con múltiples modelos de datos (documentos, grafos, etc.).",

  // Arquitectura de software
  Microservicios: "Estilo de arquitectura donde una aplicación se divide en servicios pequeños e independientes que se comunican entre sí.",
  "Arquitectura Hexagonal": "Patrón (Ports & Adapters) que aísla la lógica de negocio de la infraestructura (DB, APIs, UI) para hacerla más testeable y flexible.",
  "Clean Architecture": "Enfoque de diseño que organiza el código en capas, manteniendo la lógica de negocio independiente de frameworks y detalles técnicos.",
  DDD: "Domain-Driven Design: enfoque de diseño de software centrado en modelar el dominio real del negocio en el código.",
  "API Gateway": "Punto de entrada único que enruta, autentica y protege las solicitudes hacia los distintos microservicios.",
  BFF: "Backend For Frontend: una capa backend hecha a medida para las necesidades específicas de un frontend en particular.",
  "Event-Driven Architecture": "Arquitectura donde los servicios se comunican reaccionando a eventos en lugar de llamarse directamente entre sí.",
  MVC: "Modelo-Vista-Controlador: patrón que separa los datos, la lógica de presentación y el control de flujo de una aplicación.",
  "Strangler Fig Pattern": "Estrategia para migrar un sistema legado hacia una nueva arquitectura de forma gradual, reemplazando piezas poco a poco sin un corte total.",

  // Observabilidad
  Prometheus: "Sistema de monitoreo y alertas que recolecta métricas de aplicaciones y servicios en series de tiempo.",
  Grafana: "Herramienta para visualizar métricas y logs en dashboards, comúnmente usada junto a Prometheus.",
  "Centralised logging": "Práctica de reunir los logs de todos los servicios en un solo lugar para facilitar el diagnóstico de problemas.",
  "Uptime Kuma": "Herramienta de monitoreo autoalojada que verifica la disponibilidad de sitios y servicios y avisa cuando algo cae.",
  Netdata: "Herramienta de monitoreo en tiempo real del rendimiento de servidores: CPU, RAM, disco y red, con muy bajo overhead.",

  // Herramientas
  "VS Code": "Editor de código de Microsoft, ligero y extensible, muy usado en desarrollo web y backend moderno.",
  "IntelliJ IDEA": "Entorno de desarrollo (IDE) especializado en Java, con herramientas avanzadas de refactorización y depuración.",
  Postman: "Herramienta para probar, documentar y automatizar pruebas de APIs REST de forma visual.",
  "Swagger / OpenAPI": "Estándar y herramientas para documentar APIs REST de forma interactiva y generar clientes automáticamente.",
  Git: "Sistema de control de versiones distribuido, base para colaborar en código y llevar un historial de cambios.",
  Maven: "Herramienta de build y gestión de dependencias para proyectos Java.",
  "Docker Desktop": "Aplicación de escritorio para ejecutar y administrar contenedores Docker en el entorno local de desarrollo.",
  Portainer: "Panel visual para administrar contenedores, imágenes y volúmenes de Docker sin usar la línea de comandos.",
  Coolify: "Plataforma autoalojada tipo PaaS para desplegar y administrar aplicaciones y contenedores con SSL automático.",

  // Metodologías
  Scrum: "Marco de trabajo ágil que organiza el desarrollo en sprints cortos con roles, ceremonias y entregas incrementales.",
  Kanban: "Método ágil visual que organiza el trabajo en un tablero de columnas para limitar el trabajo en curso y mejorar el flujo.",
  Sprints: "Ciclos de trabajo cortos y de duración fija (normalmente 1-4 semanas) usados en Scrum para entregar valor de forma incremental.",
  Dailies: "Reunión diaria breve del equipo para sincronizar avances, bloqueos y próximos pasos.",
  Planning: "Reunión al inicio de un sprint donde el equipo define qué trabajo se compromete a entregar.",
  Retrospectiva: "Reunión al cierre de un sprint para reflexionar qué funcionó, qué no, y cómo mejorar el proceso del equipo.",
  "Code Reviews": "Práctica de revisar el código de un compañero antes de integrarlo, para detectar errores y mejorar su calidad.",

  // Frontend / otros lenguajes
  "Next.js": "Framework de React para construir aplicaciones web con renderizado híbrido (servidor y cliente), rutas y APIs integradas.",
  TypeScript: "Superset de JavaScript que añade tipado estático, ayudando a detectar errores antes de ejecutar el código.",
  JavaScript: "Lenguaje de programación principal de la web, usado tanto en el navegador como en el backend (Node.js).",
  Angular: "Framework de Google para construir aplicaciones web de una sola página (SPA), con TypeScript como base.",
  "Angular 20": "Versión moderna del framework Angular de Google, para construir aplicaciones web de una sola página con TypeScript.",
  React: "Librería de JavaScript para construir interfaces de usuario basadas en componentes reutilizables.",

  // Infraestructura / nube adicional
  "Microsoft Azure": "Plataforma de nube de Microsoft, con servicios para hosting, bases de datos, IA, redes y seguridad.",
  Railway: "Plataforma de despliegue (PaaS) que simplifica levantar aplicaciones y bases de datos en la nube sin configurar servidores.",
  Vercel: "Plataforma de despliegue especializada en frontend (React, Next.js), con capa gratuita y despliegue automático desde Git.",
  Supabase: "Alternativa open source a Firebase, basada en PostgreSQL, que da base de datos, autenticación y APIs listas para usar.",
  AWS: "Amazon Web Services, la plataforma de nube de Amazon, con cientos de servicios de cómputo, almacenamiento y datos.",
  Kafka: "Plataforma distribuida de streaming de eventos, usada para comunicar servicios a gran escala de forma asíncrona.",
  CrowdSec: "Sistema de seguridad colaborativo que detecta y bloquea IPs maliciosas usando inteligencia compartida entre servidores.",
  DNS: "Sistema que traduce nombres de dominio (como un sitio web) a direcciones IP para que los navegadores puedan encontrarlo.",
  CDN: "Red de servidores distribuidos geográficamente que entrega contenido web más rápido según la ubicación del visitante.",
  HestiaCP: "Panel de control de hosting open source para administrar dominios, correos, bases de datos y sitios web desde una interfaz web.",
  SMTP: "Protocolo estándar para el envío de correos electrónicos entre servidores.",
  Culqi: "Pasarela de pagos peruana que permite cobrar con tarjeta, Yape y otros medios desde una aplicación web.",
  Yape: "Aplicación de pagos móviles peruana, muy usada para transferencias y pagos instantáneos entre personas y negocios.",
  Cloudinary: "Servicio en la nube para almacenar, optimizar y transformar imágenes y videos.",
  Android: "Sistema operativo móvil de Google, base de la app desarrollada para recibir e imprimir pedidos vía Bluetooth.",
  Bluetooth: "Protocolo de comunicación inalámbrica de corto alcance, usado aquí para conectar un celular con una impresora de tickets.",
  "WhatsApp API": "API oficial de Meta para enviar y recibir mensajes de WhatsApp de forma automatizada desde una aplicación.",
  "Meta Graph API": "API de Meta (Facebook/Instagram/WhatsApp) para integrar y automatizar funcionalidades de sus plataformas.",
  Resend: "Servicio para enviar correos transaccionales desde una aplicación de forma sencilla y confiable.",
  TurboRepo: "Herramienta para gestionar monorepos de JavaScript/TypeScript, acelerando builds y compartiendo código entre proyectos.",
  WordPress: "Sistema de gestión de contenido (CMS) usado para construir y administrar sitios web sin programar desde cero.",
  HTML: "Lenguaje de marcado estándar para estructurar el contenido de las páginas web.",

  // Conocimientos exploratorios (proyectos personales, sin experiencia laboral)
  Jenkins: "Servidor de automatización open source para construir pipelines de CI/CD, alternativa a GitHub Actions.",
  SonarQube: "Herramienta de análisis estático de código que detecta bugs, vulnerabilidades y mala calidad antes de llegar a producción.",
  Terraform: "Herramienta de Infraestructura como Código (IaC) para definir y aprovisionar infraestructura cloud de forma declarativa.",
  Elasticsearch: "Motor de búsqueda y análisis distribuido, usado para hacer consultas y búsquedas muy rápidas sobre grandes volúmenes de datos.",
  Redis: "Base de datos en memoria usada como caché o almacén clave-valor para acelerar lecturas frecuentes.",
  Quarkus: "Framework de Java (alternativa a Spring) optimizado para arranque rápido y bajo consumo, pensado para contenedores y serverless.",
  Go: "Lenguaje de programación de Google, compilado y muy eficiente, popular para servicios backend y herramientas de infraestructura.",
  Vue: "Framework de JavaScript para construir interfaces de usuario, con una curva de aprendizaje suave frente a React o Angular.",
  Swift: "Lenguaje de programación de Apple para construir aplicaciones nativas de iOS, macOS y el resto de su ecosistema.",
  Hibernate: "Framework de mapeo objeto-relacional (ORM) para Java, usado por Spring Data JPA para hablar con la base de datos.",
  Bootstrap: "Framework de CSS con componentes y grillas listas para usar, para construir interfaces responsivas rápidamente.",
};

export function getTechInfo(name: string): string | undefined {
  return TECH_INFO[name];
}
