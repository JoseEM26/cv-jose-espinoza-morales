export interface RoleDefinition {
  name: string;
  description: string;
}

export interface CaseStudy {
  slug: string;
  title: string;
  company: string;
  period: string;
  repoUrl?: string;
  /** Enlaces a demos en vivo (panel, monitoreo, etc.), distintos del repositorio de código. */
  links?: { label: string; url: string }[];
  /** Resumen de una línea para la tarjeta / hero de la página de detalle. */
  tagline: string;
  context: string[];
  solution: string[];
  roles?: RoleDefinition[];
  stack: { label: string; items: string[] }[];
  /** Resultados de negocio en lenguaje cualitativo — sin cifras inventadas que no se puedan sustentar. */
  impact: string[];
  directBenefits: string[];
  indirectBenefits: string[];
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "mobilenet-ruc10",
    title: "Migración del proceso RUC10 a una plataforma web con roles y seguridad",
    company: "Mobilenet · Lima, Perú",
    period: "Mayo 2025 – Agosto 2025",
    repoUrl: "https://github.com/JoseEM26/web-ruc-10",
    tagline: "De un formulario de Google Sheets a una plataforma web con roles jerárquicos, seguridad y trazabilidad.",
    context: [
      "Mobilenet es una empresa de telecomunicaciones aliada de Entel, dedicada a la venta de servicios de internet para empresas. Internamente, sus procesos comerciales se identificaban con nomenclaturas propias como RUC10, RUC20 y telefonía, según el tipo de servicio vendido.",
      "El proceso RUC10 se gestionaba íntegramente en un formulario de Google Sheets: cada consultor registraba sus ventas ahí mismo, sin control de acceso, sin roles y sin una fuente de verdad confiable. Esto generaba duplicidad de registros, errores humanos frecuentes y nula visibilidad estructurada para los supervisores y jefes de equipo — un proceso que no escalaba y que ponía en riesgo la trazabilidad comercial de la empresa.",
      "Este fue mi primer trabajo como programador. Entré como desarrollador Java y, al conocer de cerca el problema operativo del equipo comercial, propuse migrar el proceso a un software propio.",
    ],
    solution: [
      "Diseñé y desarrollé una aplicación web monolítica con Spring Boot en el backend y Angular 20 en el frontend, pensada para reemplazar por completo el flujo manual en Google Sheets.",
      "Trabajé en contacto directo con los propios consultores y supervisores para entender su flujo de trabajo real y definir un diseño UX/UI que se sintiera natural para ellos, iterando el diseño con su feedback.",
      "Implementé un modelo de roles jerárquico con Spring Security y JSON Web Tokens (JWT): cada supervisor solo podía ver la información de su propio equipo de consultores, aislando los datos entre los distintos grupos de venta sin perder una vista global para administración y auditoría.",
      "Configuré el despliegue completo en Railway (PaaS) usando contenedores Docker con un Dockerfile propio, Nginx como servidor web, y un pipeline de CI/CD que ejecutaba pruebas unitarias con JUnit antes de cada despliegue — probando siempre primero en entorno local.",
    ],
    roles: [
      { name: "Administrador", description: "Configura el sistema y tiene visibilidad total sobre todos los equipos y procesos." },
      { name: "Programador / Auditor", description: "Visualiza métricas y auditoría completa del sistema para control interno." },
      { name: "Jefe / Supervisor", description: "Ve únicamente los datos de su propio equipo de consultores — cada supervisor gestiona su grupo de forma aislada." },
      { name: "Consultor", description: "Registra sus propias ventas dentro del proceso RUC10, reemplazando el registro manual en Google Sheets." },
    ],
    stack: [
      { label: "Backend", items: ["Java", "Spring Boot", "Spring Security", "JWT", "JUnit"] },
      { label: "Frontend", items: ["Angular 20", "TypeScript"] },
      { label: "Base de datos", items: ["MySQL"] },
      { label: "Infraestructura", items: ["Docker", "Nginx", "Railway", "GitHub Actions", "CI/CD"] },
    ],
    impact: [
      "El equipo comercial dejó atrás el formulario compartido de Google Sheets y pasó a operar sobre una única fuente de verdad, con historial y trazabilidad reales de cada venta.",
      "Cada supervisor ganó visibilidad clara y aislada de su propio equipo de consultores, algo que antes era imposible de tener de forma ordenada.",
      "El modelo de roles con Spring Security y JWT eliminó el acceso indiscriminado a información comercial que antes tenía cualquiera con el enlace del formulario.",
      "Fue mi primer proyecto liderado de punta a punta: del diagnóstico del problema de negocio al despliegue en producción con Docker y CI/CD.",
    ],
    directBenefits: [
      "Eliminación del formulario manual en Google Sheets como fuente de verdad de las ventas RUC10.",
      "Control de acceso por rol: cada supervisor y consultor ve únicamente la información que le corresponde.",
      "Trazabilidad y auditoría completa de los registros de venta, antes inexistente.",
      "Despliegue reproducible y automatizado (Docker + CI/CD) frente a un proceso 100% manual.",
    ],
    indirectBenefits: [
      "Mayor confianza del equipo comercial en los datos reportados a sus jefes.",
      "Base técnica reutilizable para digitalizar otros procesos internos similares (RUC20, telefonía).",
      "Primera experiencia liderando un proyecto de principio a fin: desde el diagnóstico del problema de negocio hasta el despliegue en producción.",
    ],
  },
  {
    slug: "plusats-digital-solution-360",
    title: "Modernización de un ATS de reclutamiento en producción sin romper su integración SOA heredada",
    company: "Digital Solution 360 · Cliente en España (Freelance)",
    period: "Agosto 2025 – Noviembre 2025",
    tagline:
      "Nuevas funcionalidades y mejoras de rendimiento sobre PlusATS, una plataforma de reclutamiento en producción activa, preservando su integración SOA heredada.",
    context: [
      "PlusATS es una plataforma tipo ATS (Applicant Tracking System) para una empresa española: permite que otras empresas recluten personal sin perder tiempo revisando candidato por candidato. El sistema hacía web scraping sobre portales como LinkedIn e Indeed y solo mostraba a los reclutadores los perfiles que realmente calificaban para la vacante.",
      "Al entrar como freelance, la plataforma ya llevaba tiempo en producción con clientes reales, sobre una arquitectura de comunicación tipo SOA entre el backend en ASP.NET Core y varios servicios internos (correo vía SMTP/IMAP, procesamiento de candidatos, etc.). El encargo explícito no era reescribir esa comunicación, sino sumar funcionalidades nuevas y mejorar el rendimiento sin arriesgar la integración ya construida.",
      "Era, en esencia, un proyecto de mantenimiento evolutivo de alto cuidado: cualquier cambio corría sobre una base de código viva, con clientes de pago usándola a diario.",
    ],
    solution: [
      "Extendí funcionalidades sobre el backend ASP.NET Core existente, respetando y reforzando la capa de interoperabilidad SOAP/REST que conectaba el ATS con los servicios legados, con manejo robusto de errores y transformación de contratos entre ambos protocolos.",
      "Optimicé consultas sobre SQL Server y MySQL en los flujos críticos de filtrado y matching de candidatos, donde el rendimiento afectaba directamente la experiencia de los reclutadores.",
      "Integré y ajusté reglas de negocio apoyadas en Inteligencia Artificial para la validación y el procesamiento automático de datos de candidatos, cuidando de cerca el consumo de las llamadas a los servicios de IA para que la automatización fuera sostenible en costo.",
      "Mantuve y mejoré los flujos de notificación automática por correo (SMTP) usados para comunicar a reclutadores y candidatos dentro del proceso de selección.",
    ],
    stack: [
      { label: "Backend", items: ["C#", "ASP.NET Core", "SOAP", "REST API"] },
      { label: "Datos", items: ["SQL Server", "MySQL"] },
      { label: "Comunicación", items: ["SMTP"] },
      { label: "Otros", items: ["Git"] },
    ],
    impact: [
      "Sumé funcionalidades nuevas a un producto en producción activa sin interrumpir el servicio a los clientes que ya lo usaban a diario.",
      "La capa de interoperabilidad SOAP/REST quedó más robusta y tolerante a fallos, reduciendo el riesgo de errores silenciosos entre el ATS y sus servicios legados.",
      "Las consultas optimizadas sobre SQL Server y MySQL agilizaron los flujos de filtrado de candidatos, el corazón del valor que el producto le da a sus clientes reclutadores.",
      "El uso de IA quedó acotado y controlado en costo, evitando que la automatización se convirtiera en un gasto descontrolado para el negocio.",
    ],
    directBenefits: [
      "Nuevas funcionalidades entregadas sin downtime ni regresiones sobre clientes activos.",
      "Mejor tiempo de respuesta en los procesos de filtrado y matching de candidatos.",
      "Comunicación SOAP/REST más resiliente ante errores de contrato entre servicios.",
      "Control de costos en las llamadas a los servicios de IA integrados al flujo de negocio.",
    ],
    indirectBenefits: [
      "Confianza reforzada del cliente español en el equipo freelance para seguir evolucionando su producto.",
      "Experiencia directa manteniendo software legado crítico sin margen de error, una habilidad distinta a construir desde cero.",
      "Mayor criterio para decidir cuándo modernizar y cuándo preservar una integración que ya funciona bien.",
    ],
  },
  {
    slug: "soluciones-satelitales-automation",
    title: "Automatización comercial con IA para venta de cable e internet, de la conversación al cierre",
    company: "Proyecto: Soluciones Satelitales (Freelance)",
    period: "2026",
    tagline:
      "Arquitectura monorepo con NestJS, Next.js y Python para automatizar la atención comercial por WhatsApp con un agente de IA, de punta a punta.",
    context: [
      "Soluciones Satelitales vende servicios de cable/TV e internet. Su venta y atención al cliente era manual, y el dueño del negocio buscaba acelerar el ciclo comercial completo: atención inicial, calificación de prospectos y cierre de venta.",
      "El objetivo era automatizar la conversación comercial por WhatsApp (usando la API oficial de WhatsApp) con un agente de IA que aprendiera de las conversaciones reales del dueño del negocio con sus clientes, y que derivara automáticamente a una persona humana en el momento justo antes del cierre de venta.",
    ],
    solution: [
      "Diseñé una arquitectura basada en monorepo (TurboRepo) con NestJS en el backend y Next.js en el frontend, además de servicios en Python para tareas de scraping y bots ejecutados sobre una VPS.",
      "Integré la API oficial de WhatsApp y la Meta Graph API para automatizar la conversación comercial, con un agente de IA entrenado a partir de conversaciones reales del dueño del negocio con sus clientes.",
      "Implementé una arquitectura orientada a eventos para clasificar y derivar prospectos: la IA conversaba con el cliente y, apenas detectaba intención real de compra, derivaba automáticamente la conversación a una persona del equipo comercial.",
      "Configuré el canal de correo del flujo comercial con IMAP y Resend, y desplegué todo en una VPS con Docker administrado con Coolify, incluyendo automatización de certificados SSL/TLS.",
      "Acompañé personalmente los primeros 15 días de operación, revisando en tiempo real las conversaciones del agente de IA con los clientes para afinar sus respuestas antes de dejarlo operar de forma autónoma.",
    ],
    stack: [
      { label: "Backend", items: ["NestJS", "Python", "TypeScript"] },
      { label: "Frontend", items: ["Next.js"] },
      { label: "Arquitectura", items: ["TurboRepo", "Event-Driven Architecture"] },
      { label: "Integraciones", items: ["Meta Graph API", "WhatsApp API", "Resend"] },
      { label: "Infraestructura", items: ["Docker", "Coolify", "GitHub Actions", "CI/CD"] },
    ],
    impact: [
      "El dueño del negocio pasó de atender cada conversación manualmente a tener un agente de IA que filtraba y calificaba prospectos por él, sin depender de estar siempre disponible.",
      "El equipo comercial solo entraba a la conversación en el momento en que un prospecto ya estaba listo para comprar, sin invertir tiempo en conversaciones que no iban a cerrar.",
      "El acompañamiento cercano durante las primeras semanas, entrenando al agente con conversaciones reales, aceleró la curva de aprendizaje de la IA hasta el punto en que el cliente confió en dejarla operar sola.",
      "La arquitectura monorepo con NestJS y Next.js permitió mover funcionalidades de negocio y de bots rápidamente sin duplicar código entre frontend y backend.",
    ],
    directBenefits: [
      "Atención comercial disponible fuera del horario humano, sin costo adicional de personal.",
      "Prospectos no calificados filtrados automáticamente antes de llegar a un vendedor humano.",
      "Despliegue reproducible en VPS con Docker, con certificados SSL/TLS gestionados de forma automática.",
      "Canal de correo (IMAP + Resend) integrado al mismo flujo comercial que WhatsApp.",
    ],
    indirectBenefits: [
      "El dueño del negocio ganó tiempo para enfocarse en cerrar ventas en vez de filtrar conversaciones.",
      "Base técnica reutilizable para automatizar otros canales de atención al cliente además de WhatsApp.",
      "Primera experiencia diseñando un agente de IA conversacional conectado a un flujo de negocio real, más allá de un backend tradicional.",
    ],
  },
  {
    slug: "pirkha-hosting-migration",
    title: "De hostings dispersos a una plataforma propia de hosting multi-cliente, con portal de autoservicio",
    company: "Proyecto: Hosting Empresarial Pirkha (Freelance)",
    period: "2026",
    links: [
      { label: "Panel de monitoreo", url: "https://monitor.pirkha.com" },
      { label: "Portal de clientes", url: "https://panel.pirkha.com" },
    ],
    tagline:
      "Migración completa a una VPS propia con HestiaCP, seguridad, monitoreo, backups en tres capas y un portal donde nuevos clientes contratan y activan su propio hosting sin intervención manual.",
    context: [
      "Pirkha no es una sola empresa: presta servicios de hosting a varias empresas clientes, cada una con su propio dominio, correo, sitio web (WordPress o HTML estático) y base de datos, repartidos entre distintos proveedores externos como Namecheap y GoDaddy.",
      "Depender de varios proveedores externos significaba no tener control real sobre el rendimiento, la seguridad ni los costos a largo plazo. El cliente quería dejar de depender de esos hostings externos y tener su propia infraestructura, administrada por ellos mismos.",
      "Fue uno de los proyectos que más me retó: aprendí sobre la marcha piezas que no dominaba al inicio — paneles de hosting multi-cliente, DNS, CDN, backups en capas — y la confianza generada hizo que el mismo cliente me contratara tres proyectos más sobre la misma infraestructura.",
    ],
    solution: [
      "Migración e infraestructura base: migré todo a una VPS en Hetzner Cloud levantada con Docker, con un panel HestiaCP que le da a cada cliente de Pirkha su propio espacio para administrar su base de datos, sus archivos web y su correo. Diseñé tres planes de servicio (Básico, Intermedio y Avanzado) con recursos diferenciados sobre la misma infraestructura, configuré el DNS de cada dominio migrado y un CDN para que los sitios respondieran rápido sin importar desde qué parte del mundo se conectaran. Migré las bases de datos a MariaDB (el estándar del cliente), los sitios WordPress y HTML estático, y las cuentas de correo, todo en ventanas horarias fuera del uso de los clientes finales.",
      "Seguridad: antes de completar la migración encontré y limpié archivos infectados con malware que arrastraban algunos de los hostings de origen. Implementé una capa de seguridad perimetral con CrowdSec para filtrar IPs maliciosas, y certificados SSL/TLS para que todos los sitios corrieran bajo HTTPS.",
      "Monitoreo (monitor.pirkha.com): implementé Uptime Kuma y Netdata para vigilar el rendimiento de la VPS (CPU, RAM, almacenamiento) y la disponibilidad de los servicios, con notificaciones automáticas por correo apenas algo se salía de rango, antes de que se convirtiera en una caída real.",
      "Backups en tres capas: configuré un respaldo local dentro de la misma VPS, un segundo respaldo en el propio Hetzner Cloud, y un tercer respaldo externo en AWS, completamente independiente del proveedor principal, para blindar la información de todos los clientes ante cualquier escenario de fallo.",
      "Portal de autoservicio para clientes nuevos (panel.pirkha.com): diseñé y desarrollé una web donde nuevos clientes de Pirkha conocen los planes de hosting, pagan con Culqi y adquieren su propio espacio en la VPS sin intervención manual de mi parte. Al crear una cuenta en el portal, el sistema crea automáticamente el usuario correspondiente en HestiaCP para aprovisionar su hosting — el cliente final nunca necesita entrar directamente a HestiaCP, algo que Pirkha pidió explícitamente para no exponerle esa complejidad. Aseguré la comunicación entre el portal y HestiaCP con autenticación Bearer Token y JWT.",
    ],
    stack: [
      { label: "Infraestructura", items: ["Hetzner Cloud", "Docker", "Nginx", "HestiaCP"] },
      { label: "Redes", items: ["DNS", "CDN"] },
      { label: "Seguridad", items: ["CrowdSec", "Bearer Token", "JWT"] },
      { label: "Monitoreo", items: ["Uptime Kuma", "Netdata"] },
      { label: "Backups", items: ["Hetzner Cloud", "AWS"] },
      { label: "Base de datos", items: ["MariaDB"] },
      { label: "Sitios migrados", items: ["WordPress", "HTML"] },
      { label: "Portal de clientes", items: ["Culqi", "REST API"] },
    ],
    impact: [
      "El cliente dejó de depender de proveedores externos como Namecheap y GoDaddy, pasando a tener el control completo de su propia infraestructura de hosting.",
      "La migración de cada cliente final se ejecutó en ventanas de bajo uso, sin que notaran el corte de servicio.",
      "La confianza generada en la migración inicial abrió la puerta a tres proyectos más con el mismo cliente: seguridad, monitoreo y el portal de autoservicio.",
      "El esquema de tres respaldos independientes (VPS, Hetzner, AWS) dejó a Pirkha protegido incluso ante un fallo del proveedor principal de nube.",
      "El portal de autoservicio le permite a Pirkha vender y aprovisionar hosting a nuevos clientes de forma automática, sin que su equipo tenga que tocar HestiaCP manualmente.",
    ],
    directBenefits: [
      "Independencia total de hostings de terceros (Namecheap, GoDaddy) y de sus costos recurrentes por cliente.",
      "Panel propio (HestiaCP) donde cada cliente de Pirkha administra su base de datos, su web y su correo sin soporte técnico externo.",
      "Alta de nuevos clientes automatizada de punta a punta: se registran, pagan con Culqi y su hosting queda aprovisionado solo.",
      "Alertas tempranas de rendimiento y seguridad vía correo, antes de que un problema se convirtiera en una caída.",
      "Tres capas de respaldo independientes para la información de todos los clientes de Pirkha.",
    ],
    indirectBenefits: [
      "Relación de confianza que derivó en tres proyectos adicionales con el mismo cliente.",
      "Aprendizaje autodidacta de herramientas que no dominaba al inicio (HestiaCP, CDN, backups en capas, pasarelas de pago), ampliando mi perfil como DevOps/Cloud Engineer.",
      "Base de infraestructura reutilizable para que Pirkha siga incorporando nuevos clientes de hosting sin depender de terceros.",
    ],
  },
  {
    slug: "comfutura-microservicios",
    title: "Migración de un monolito modular a microservicios en una empresa de telecomunicaciones",
    company: "Comfutura · Lima, Perú",
    period: "Enero 2026 – Abril 2026",
    links: [{ label: "Ver plataforma", url: "https://extcomfutura.com" }],
    tagline:
      "De un monolito modular que ya no escalaba a microservicios con Strangler Fig, Kubernetes y observabilidad completa — reduciendo costos de infraestructura y cerrando huecos de seguridad.",
    context: [
      "Al entrar a Comfutura ya existía un proyecto en marcha desarrollado por otros colegas: un monolito construido con Spring Boot y Angular, pero no era un MVC tradicional, sino un monolito modular — organizado por módulos de negocio, ya que la lógica de esta empresa de telecomunicaciones era muy grande.",
      "La empresa manejaba múltiples dominios de negocio dentro del mismo proyecto: generación de OT (órdenes de trabajo), cotización directa, órdenes de compra, finanzas, recursos humanos (con muchos trabajadores y muchos roles distintos) y costo directo — este último, el módulo con mayor concentración de lógica de negocio. Seguir escalando todo dentro del mismo monolito ya no era sostenible.",
      "Al revisar la base existente, además, encontré APIs sin ningún control de acceso por rol: cualquier endpoint era alcanzable por cualquiera sin pasar por JSON Web Tokens — una 'torre libre' en términos de seguridad.",
      "La infraestructura estaba desplegada en Railway, con un costo mensual irregular que subía según el consumo, en vez de un costo fijo y predecible.",
    ],
    solution: [
      "Participé en el diseño del plan de migración del monolito modular hacia microservicios usando el patrón Strangler Fig, migrando módulo por módulo (OT, cotizaciones, órdenes de compra, finanzas, RRHH, costo directo) sin detener la operación del sistema en producción.",
      "Implementé observabilidad completa con Spring Boot Actuator, Prometheus y Grafana para monitorear cada microservicio de forma independiente a medida que se iban separando del monolito.",
      "Desplegué los microservicios sobre Docker y Kubernetes, usando RabbitMQ para la comunicación asíncrona entre los servicios que lo requerían.",
      "Migré la infraestructura de Railway a una VPS propia, pasando de un costo variable según consumo a un costo fijo mensual.",
      "Cerré el hueco de seguridad de las APIs sin proteger, implementando control de acceso basado en roles con JSON Web Tokens (JWT) en los endpoints que antes eran de acceso libre.",
    ],
    stack: [
      { label: "Backend", items: ["Java 21", "Spring Boot", "Spring Cloud", "Spring Security", "JWT"] },
      { label: "Mensajería", items: ["RabbitMQ"] },
      { label: "Observabilidad", items: ["Prometheus", "Grafana"] },
      { label: "Infraestructura", items: ["Docker", "Kubernetes", "Railway", "GitHub Actions", "CI/CD"] },
      { label: "Base de datos", items: ["PostgreSQL"] },
      { label: "Frontend", items: ["Angular 20"] },
    ],
    impact: [
      "El sistema dejó de depender de un único monolito modular que ya no podía seguir creciendo, migrando módulo por módulo hacia microservicios sin frenar la operación diaria de la empresa.",
      "El paso de Railway a una VPS propia cambió un costo de infraestructura variable e impredecible por uno fijo, mejorando el control del gasto en la nube.",
      "Las APIs que antes eran de libre acceso quedaron protegidas por roles con JWT, cerrando una brecha de seguridad real sobre información sensible de la empresa (finanzas, RRHH, costos).",
      "La observabilidad con Prometheus y Grafana le dio al equipo visibilidad que antes no existía sobre el comportamiento de cada módulo migrado, mejorando también los tiempos de atención al cliente.",
    ],
    directBenefits: [
      "Costo de infraestructura fijo y predecible tras la migración de Railway a una VPS propia.",
      "Control de acceso por rol con JWT en endpoints que antes eran públicos y sin ninguna protección.",
      "Mejor tiempo de atención al cliente gracias a servicios desacoplados y escalables de forma independiente.",
      "Observabilidad en tiempo real por microservicio con Spring Boot Actuator, Prometheus y Grafana.",
    ],
    indirectBenefits: [
      "Reducción del riesgo de incidentes de seguridad al eliminar endpoints sin protección.",
      "Base de arquitectura reutilizable para seguir migrando los módulos de negocio restantes.",
      "Experiencia directa participando en la migración de un sistema real y grande de telecomunicaciones, no un proyecto de práctica.",
    ],
  },
  {
    slug: "papucon-delivery",
    title: "Plataforma de pedidos y delivery con impresión automática en cocina vía Bluetooth",
    company: "Proyecto: El Papucón (Freelance)",
    period: "Mayo 2026 – Junio 2026",
    links: [{ label: "Ver plataforma", url: "https://web-el-papucon.vercel.app" }],
    tagline:
      "Una plataforma de pedidos a la medida de un negocio pequeño: costo de infraestructura casi nulo y una app Android que convierte cualquier celular viejo en una impresora de tickets de cocina.",
    context: [
      "El Papucón es un negocio de comida (shawarmas, alitas, cevichadas) que buscaba una forma propia de recibir pedidos — delivery, recojo y consumo en el local — sin depender de aplicaciones de terceros ni pagar de más por infraestructura que no iba a usar.",
      "Era una operación pequeña y local: en la práctica, no más de 10 usuarios concurrentes y entre 100 y 200 interacciones diarias. Esa escala real definió cada decisión técnica, priorizando costo casi nulo por encima de arquitecturas más sofisticadas que no le hacían falta al negocio.",
      "En cocina no querían una tablet ni una pantalla para que el cocinero revisara los pedidos entrantes — necesitaban que los pedidos salieran impresos en su misma etiquetera de siempre, como ya estaban acostumbrados a trabajar.",
      "Para los pagos por Yape, el cliente prefirió no integrar una pasarela de pago formal, para mantener el proyecto simple y sin costos de transacción adicionales.",
    ],
    solution: [
      "Desarrollé el frontend en React y lo desplegué en Vercel, aprovechando su capa gratuita — perfecta para el volumen real de tráfico del negocio, sin pagar por infraestructura de sobra.",
      "Modelé los datos en Supabase sobre PostgreSQL, y conecté el dominio propio que el cliente me confió, sin necesidad de CDN al ser una operación 100% local, en Lima.",
      "Diseñé el flujo de pedidos con tres modalidades — delivery, recojo y consumo en el local — con pagos por Yape, transferencia bancaria o tarjeta. Para Yape, al no integrar una pasarela de pago, el cliente envía el comprobante de pago para su validación manual.",
      "Construí una aplicación Android cuya única función es recibir los pedidos vía API y enviarlos por Bluetooth a la impresora de tickets de cocina — así cualquier celular viejo se convierte en el puente entre la plataforma y la impresora, sin que el cocinero tenga que mirar ninguna pantalla.",
      "Usé Cloudinary para el almacenamiento de imágenes (fotos de productos) y documentos del negocio.",
      "Migré la información existente del negocio, capacité al personal en el uso de la plataforma y les di soporte directo durante el primer mes de operación.",
    ],
    stack: [
      { label: "Frontend", items: ["React"] },
      { label: "Backend / Datos", items: ["Supabase", "PostgreSQL"] },
      { label: "Infraestructura", items: ["Vercel"] },
      { label: "Móvil", items: ["Android", "Bluetooth"] },
      { label: "Almacenamiento", items: ["Cloudinary"] },
      { label: "Pagos", items: ["Yape"] },
    ],
    impact: [
      "El negocio ahora recibe pedidos de delivery, recojo y consumo en el local desde una sola plataforma propia, sin depender de aplicaciones de terceros.",
      "La cocina imprime cada pedido automáticamente en su etiquetera de siempre, sin necesitar una tablet ni que el cocinero revise una pantalla.",
      "Toda la infraestructura (Vercel + Supabase) se mantiene a un costo casi nulo, acorde al volumen real del negocio — decenas de usuarios, no miles.",
      "El personal quedó capacitado y con soporte directo durante el primer mes de operación de la plataforma.",
    ],
    directBenefits: [
      "Plataforma propia de pedidos (delivery, recojo, en local) reemplazando la dependencia de canales de terceros.",
      "Impresión automática de pedidos en cocina vía Bluetooth, sin comprar hardware adicional (tablet, impresora especializada).",
      "Costo de infraestructura casi nulo (Vercel + Supabase) ajustado al tamaño real del negocio.",
      "Múltiples medios de pago (Yape, transferencia, tarjeta) sin el costo ni la complejidad de integrar una pasarela de pago.",
    ],
    indirectBenefits: [
      "Solución a medida para un negocio pequeño, mostrando que puedo adaptar la arquitectura al presupuesto y la escala real del cliente, no solo a proyectos grandes.",
      "Experiencia de punta a punta: desde el desarrollo web hasta una aplicación Android para un caso de uso muy específico (impresión vía Bluetooth).",
      "Relación de confianza suficiente para que el cliente me entregara su dominio y la migración completa de la información de su negocio.",
    ],
  },
];

export function getCaseStudy(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}
