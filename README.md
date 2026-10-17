# Ferretool Vargas — Biolink

Página biolink de Ferretool Vargas, una ferretería ubicada en La Paz, Bolivia. La versión activa del proyecto está construida con React, TypeScript y Vite.

**Sitio publicado:** [https://ferretoolvargas.github.io/lp/](https://ferretoolvargas.github.io/lp/)

## Estado del proyecto

- Aplicación principal: `react/`
- Versión anterior de referencia: `angular/`
- Publicación: manual. Este repositorio no publica automáticamente los cambios.

## Características

- Biolink compacta con diseño responsive y enfoque mobile-first.
- Tema claro y oscuro persistido en `localStorage`.
- Contacto directo por WhatsApp y acceso al sitio web principal.
- Enlaces a Facebook, Instagram y TikTok.
- Microanimaciones de entrada con GSAP.
- Experiencia estática equivalente cuando el usuario activa `prefers-reduced-motion`.
- Metadatos básicos para SEO y redes sociales.

## Tecnologías

- React 18
- TypeScript
- Vite 5
- GSAP y `@gsap/react`
- Tailwind CSS 4 como parte del pipeline de estilos
- Bootstrap Icons

## Requisitos

- Node.js 18 o superior
- npm 9 o superior

## Instalación y desarrollo

```bash
cd react
npm install
npm run dev
```

Vite mostrará la URL local disponible. La ruta base configurada para el proyecto es `/lp/`.

## Comandos disponibles

```bash
npm run dev       # servidor de desarrollo
npm run typecheck # comprobación de TypeScript
npm run build     # compilación de producción
npm run preview   # vista previa de la compilación
```

## Contenido y enlaces

Los destinos de WhatsApp, sitio web y redes sociales se mantienen en:

```text
react/src/data/content.ts
```

El mensaje inicial de WhatsApp también se puede editar en ese archivo.

## Estructura principal

```text
react/
├── public/                  # logotipos, favicon y fotografía de marca
├── src/
│   ├── components/         # interfaz y tarjetas de enlace
│   ├── data/content.ts     # datos de contacto y redes
│   ├── hooks/useTheme.ts   # estado del tema
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── index.html
└── package.json
```

## Diseño y accesibilidad

La interfaz conserva la paleta naranja, amarilla y acero de Ferretool Vargas. Los controles tienen estados de foco visibles, los enlaces externos incluyen nombres accesibles y las animaciones se desactivan para quienes prefieren movimiento reducido.

Antes de publicar, conviene revisar al menos estos anchos de pantalla:

- 320 px: móvil compacto
- 390 px: móvil habitual
- 768 px: tablet
- 1024 px: portátil
- 1440 px: escritorio

## Publicación

El comando `npm run build` genera los archivos estáticos en `react/dist/`. Publicar esa carpeta depende del proveedor de hosting elegido. No se debe ejecutar un despliegue sin una revisión visual final y autorización explícita.
