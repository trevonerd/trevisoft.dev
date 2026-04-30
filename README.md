# Trevisoft.dev

Trevisoft.dev is the home for Marco Trevisani's side projects: apps,
experiments, game tools, creative generators, browser extensions, and whatever
ships next.

The site is a fast static React app. Project data lives in local typed content,
so the homepage can stay simple, predictable, and cheap to deploy.

## Stack

- React 19
- TypeScript
- Vite
- Bun
- Biome
- Vitest + Testing Library
- Netlify

## Content

Project cards, profile links, contact placeholders, footer labels, and brand
copy are defined in `src/content/site.json` and normalized through
`src/content/site.ts`.

Current featured projects:

- VinylPNG
- PixBatch
- DropHunter
- ARC Raiders Build Planner

## Design

The UI uses plain CSS with shared design tokens, reusable React components, a
dark/light theme, accessible placeholder link handling, and a small Papone
moustache easter egg.

## Requirements

- Bun 1.3+
- Node.js 22.12+

## Commands

```bash
bun install
bun run dev
bun run test
bun run lint
bun run build
```

## Analytics

VisitorTracking is installed in `index.html` with the Trevisoft website ID.

## Deploy

Netlify uses `bun run build` and publishes `dist`.
