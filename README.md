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

Project groups, descriptions and links live in `src/content/site.json`. The
production build renders the homepage and its JSON-LD catalog from that same
data. Project links are available in the HTML before React loads.

The UI uses plain CSS, light and dark themes, and the Papone moustache easter
egg. See [DESIGN.md](DESIGN.md) for the visual system.

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
