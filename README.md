# nirvik-site

Personal portfolio built with [Astro](https://astro.build). Static output, minimal client-side JavaScript (theme toggle, scroll reveal). Design borrows IBM Carbon's tokens (IBM Plex, 8px grid, sharp corners) with a neon-green accent and Apple-style typography and whitespace.

## Run

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve dist/ locally
```

Deploy `dist/` anywhere static (GitHub Pages, Netlify, Vercel, Cloudflare Pages). Set `site` in `astro.config.mjs` to your domain.

## Docker

```bash
docker compose up -d --build   # http://localhost:8080
# or without compose:
docker build -t nirvik-site .
docker run -d -p 8080:80 --name nirvik-site nirvik-site
```

The image builds the site with Node and serves `dist/` with nginx (`nginx.conf`). On a server, put a reverse proxy (Caddy, Traefik, nginx) in front for HTTPS, or change the port mapping in `docker-compose.yml`.

## Customise

| What | Where |
|---|---|
| Name, summary, experience, education, skills, links | `src/data/profile.ts` |
| Navigation links | `nav` array in `src/data/profile.ts` |
| Colours, fonts, spacing, corner radius | `src/styles/global.css` (tokens at the top) |
| Photo / CV PDF | replace `public/pic.png` and `public/Nirvik_CV.pdf` |

## Add a project

Create `src/content/projects/<slug>.md`:

```md
---
title: My new project
summary: One sentence shown on the card.
period: "2026"
context: Company or "Personal"
tags: [Python, ROS]
links: [{ label: GitHub, href: https://github.com/... }]
order: 5
---

Markdown body shown at /projects/<slug>/
```

It appears on the home page automatically and gets its own page.

## Add a new page or section

- **New page**: add `src/pages/<name>.astro`, wrap content in `<Base title="...">`, then add a link to the `nav` array.
- **New home-page section**: add a `<Section id="..." index="07" label="...">` block in `src/pages/index.astro`.
- **New content type** (e.g. blog, talks): copy the `projects` collection pattern in `src/content.config.ts` and add a matching `src/pages/<type>/[slug].astro`.
