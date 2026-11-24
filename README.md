# Ferretool Vargas — Biolink

[![CI](https://github.com/ferretoolvargas/lp/actions/workflows/ci.yml/badge.svg)](https://github.com/ferretoolvargas/lp/actions/workflows/ci.yml)
[![Deploy](https://github.com/ferretoolvargas/lp/actions/workflows/deploy-pages.yml/badge.svg)](https://github.com/ferretoolvargas/lp/actions/workflows/deploy-pages.yml)

Página biolink de **Ferretool Vargas**, ferretería ubicada en La Paz, Bolivia. Reúne en una sola pantalla el contacto por WhatsApp, el sitio web y las redes sociales.

**Sitio publicado:** https://ferretoolvargas.github.io/lp/

## Contenido

- [Características](#características)
- [Tecnologías](#tecnologías)
- [Primeros pasos](#primeros-pasos)
- [Editar contenido](#editar-contenido)
- [Estructura](#estructura)
- [CI y despliegue](#ci-y-despliegue)
- [Diseño y accesibilidad](#diseño-y-accesibilidad)

## Características

- Diseño responsive, mobile-first.
- Tema claro y oscuro (oscuro por defecto), guardado en `localStorage` con la clave `ftv-theme`.
- Contacto directo por WhatsApp con mensaje inicial prellenado.
- Enlaces a sitio web, Facebook, Instagram y TikTok.
- Animaciones de entrada con GSAP. Con `prefers-reduced-motion` la página se muestra estática.
- Metadatos SEO y Open Graph.

## Tecnologías

React 18 · TypeScript · Vite 5 · GSAP (`@gsap/react`) · Tailwind CSS 4 · Bootstrap Icons

## Primeros pasos

Requisitos: Node.js 18+ (CI usa Node 24) y npm 9+.

```bash
cd react
npm install
npm run dev
```

| Comando             | Acción                                  |
| ------------------- | --------------------------------------- |
| `npm run dev`       | Servidor de desarrollo                  |
| `npm run typecheck` | Comprobación de TypeScript              |
| `npm run build`     | Compilación de producción en `dist/`    |
| `npm run preview`   | Vista previa de la compilación          |

La ruta base de Vite es `/lp/` (`react/vite.config.ts`). El proyecto no tiene linter ni pruebas automatizadas; la validación se hace con `typecheck` y `build`.

## Editar contenido

Enlaces, números y mensaje de WhatsApp están en un solo archivo:

```text
react/src/data/content.ts
```

El tipo `Link` está en `react/src/types/index.ts`. Los logotipos y la foto de marca están en `react/public/` y `react/src/assets/`.

## Estructura

```text
.
├── react/                    # aplicación activa
│   ├── public/               # logotipos, favicon, foto de marca
│   ├── src/
│   │   ├── components/       # LinkBio, ButtonLink, Stats
│   │   ├── data/content.ts   # enlaces y mensaje de WhatsApp
│   │   ├── hooks/            # useTheme, useInView, useCountUp
│   │   ├── App.tsx
│   │   └── main.tsx
│   └── vite.config.ts
├── angular/                  # versión anterior, solo referencia
└── .github/workflows/        # ci.yml y deploy-pages.yml
```

## CI y despliegue

| Workflow          | Cuándo corre                                              | Qué hace                                  |
| ----------------- | --------------------------------------------------------- | ----------------------------------------- |
| `ci.yml`          | Pull requests y ramas distintas de `main` que toquen `react/**` | `npm ci`, `typecheck`, `build`      |
| `deploy-pages.yml`| Push a `main` que toque `react/**`, o manualmente         | `npm ci`, `typecheck`, `build`, publica en GitHub Pages |

**Cada push a `main` publica el sitio automáticamente.** Para cambios con riesgo visual, trabaja en una rama, abre un pull request y revisa con `npm run preview` antes de fusionar.

Requisito único en GitHub: en *Settings → Pages*, la fuente debe ser **GitHub Actions**.

## Diseño y accesibilidad

Paleta naranja, amarilla y acero de la marca. Foco visible en controles, nombres accesibles en enlaces externos y animaciones desactivadas con movimiento reducido.

Antes de publicar cambios de diseño, revisa estos anchos: 320, 390, 768, 1024 y 1440 px.
