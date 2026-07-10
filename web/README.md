# CV Web — Jose Angel Espinoza Morales

Sitio personal / CV interactivo, construido con React, TypeScript, Vite, Tailwind CSS y Framer Motion. Presenta la experiencia, proyectos y stack técnico como una web animada, con casos de estudio detallados por cada trabajo y una versión imprimible del CV que se genera a partir de los mismos datos.

## Stack

- **React 19 + TypeScript + Vite** — base de la aplicación
- **Tailwind CSS v4** — estilos y theming (claro/oscuro)
- **Framer Motion** — animaciones (scroll reveals, transiciones de página, tilt de tarjetas, contadores)
- **React Router** — navegación entre el sitio, los casos de estudio (`/case/:slug`) y el CV imprimible (`/cv`)
- **react-icons** — íconos de tecnologías (Simple Icons, Tabler, Lucide)

## Estructura

```
src/
  data/           # Fuente única de verdad: perfil, experiencia, proyectos, skills, casos de estudio
    cv.ts
    caseStudies.ts
    techIcons.ts    # íconos por tecnología
    techInfo.ts     # descripciones para el modal de "qué es esto"
  components/     # Piezas de UI reutilizables (Nav, Hero, Experience, Projects, Skills, etc.)
  pages/          # Home, CaseStudyPage (detalle por caso), PrintableCV (versión imprimible del CV)
  context/        # TechInfoContext — modal global de tecnologías clickeables
  hooks/          # useTheme (modo claro/oscuro)
```

**Todo el contenido vive en `src/data/`.** Para agregar un nuevo empleo, proyecto o caso de estudio no se toca ningún componente — solo se edita `cv.ts` (y `caseStudies.ts` si tiene página de detalle). La página `/cv` y el resto del sitio leen de ahí, así que siempre quedan sincronizados.

## Desarrollo

```bash
npm install
npm run dev       # servidor de desarrollo (http://localhost:5173 por defecto)
npm run build     # typecheck + build de producción a dist/
npm run preview   # sirve el build de producción localmente
npm run lint      # oxlint
```

## Rutas

- `/` — sitio principal (hero, experiencia, proyectos, skills, formación, contacto)
- `/case/:slug` — caso de estudio detallado de un trabajo/proyecto puntual
- `/cv` — versión imprimible del CV (botón "Imprimir / Guardar como PDF"), generada desde los mismos datos del sitio

## Despliegue

Pensado para desplegarse en **Vercel** o **Netlify** sin configuración adicional:

- `vercel.json` — rewrite de todas las rutas a `index.html` (necesario por ser una SPA con React Router)
- `public/_redirects` — el equivalente para Netlify

Si se despliega en otro hosting, hay que replicar esa regla de rewrite (toda ruta → `index.html`) para que `/case/:slug` y `/cv` funcionen al entrar directamente por URL.
