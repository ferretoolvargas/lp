# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Biolink landing page for Ferretool Vargas (hardware store, La Paz, Bolivia). README and UI copy are in Spanish. Live at https://ferretoolvargas.github.io/lp/.

- `react/` — active app (React 18 + TypeScript + Vite 5, GSAP animations, Tailwind CSS 4 via PostCSS, Bootstrap Icons).
- `angular/` — old reference version. Do not modify unless asked.

## Commands

Run from `react/` (no lint or test setup exists):

```bash
npm run dev        # Vite dev server
npm run typecheck  # tsc --noEmit
npm run build      # output in react/dist/
npm run preview    # serve the build
```

## Architecture

- Vite `base` is `/lp/` (`react/vite.config.ts`). Asset and route paths must respect it.
- `react/src/data/content.ts` is the single source of truth for links (WhatsApp, website, social) and the WhatsApp prefilled message. The `Link` type is in `src/types/index.ts`. Edit contact data there, not in components.
- `App.tsx` renders the theme toggle and `components/LinkBio`. Other components: `ButtonLink`, `Stats`. Hooks: `useTheme`, `useInView`, `useCountUp`.
- Theme: `useTheme` defaults to dark, persists to `localStorage` key `ftv-theme`, and sets both the `dark` class and `data-theme` on `<html>`. Styles can key off either.
- Animations use GSAP; the UI must have an equivalent static experience under `prefers-reduced-motion`.

## Deployment

`.github/workflows/deploy-pages.yml` deploys to GitHub Pages on push to `main` touching `react/**` (Node 24, `npm ci` in `react/`, so keep `package-lock.json` committed). The README still says publishing is manual, which is outdated. Pushing to `main` publishes.

Before changing layout, check widths 320, 390, 768, 1024 and 1440 px.
