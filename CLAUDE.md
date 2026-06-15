# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # dev server at http://localhost:3000
npm run build    # static export (runs at deploy time on Vercel)
npm run start    # serve the built output locally
```

> Always run these from `C:\TravelPartiu\System\blog`. Never run from `H:\` (Google Drive — will break).

No test suite or lint script exists.

## Architecture

**Next.js App Router, fully statically generated** — no server runtime, no database. All content lives in `.md` files.

### Data layer — `lib/posts.js`

All post data flows through here. Key functions:
- `getAllPosts()` — reads every `.md` in `posts/`, parses frontmatter via `gray-matter`, sorts by `data` desc
- `getPostsDestaque(limit)` — filters `destaque: true` posts for the home highlight carousel
- `getPostBySlug(slug)` — async; reads full content, converts Markdown → HTML via `remark`, injects heading `id`s for TOC anchors, and inserts an ad placeholder `<div id="ad-in-content">` after the first `</h2>`
- `getRelatedPosts(slug, categoria)` — same category, excludes current post

### Post frontmatter schema

```yaml
titulo: "..."
slug: "url-slug"
descricao: "Meta description (max 160 chars)"
categoria: "Roteiros" | "Dicas de viagem" | "Destinos" | "Planejamento" | "Viagem econômica"
destino: "Cidade, UF"
data: "2026-06-04"        # YYYY-MM-DD, used for chronological sort
imagem_capa: "https://..."  # or /images/filename.jpg in public/
tempo_leitura: "8 min"
autor: "Equipe TravelPartiu"
destaque: true             # optional — omit or false to exclude from highlight carousel
```

### Affiliate links — `lib/afiliados.js`

Cards are keyed by `categoria`. Each category maps to 2 affiliate cards. Links are currently placeholders (`#AFILIADO-BOOKING`, etc.) — replace with real URLs when affiliate programs are approved. `getAfiliadosPorCategoria(categoria)` falls back to `"Roteiros"` for unknown categories.

### Styling

Tailwind CSS v4 with `@import "tailwindcss"` + a `@theme {}` block in `app/globals.css` that defines all design tokens as CSS custom properties (`--color-primary`, `--color-bg`, `--color-text`, etc.). Use these token names in Tailwind classes (`text-primary`, `bg-bg-accent`, etc.) rather than hardcoded colors.

Semantic CSS classes (`.post-card`, `.prose`, `.hero-home`, `.btn-primary`, `.section-accent`, etc.) are defined in `globals.css` — prefer them over long Tailwind chains for these recurring patterns.

### Path alias

`@/` resolves to the project root (configured in `jsconfig.json`).

### Post page layout (`app/blog/[slug]/page.js`)

Hero image → Breadcrumb → post header (category badge, title, meta) → mobile TOC → two-column layout (prose content + desktop sidebar TOC) → affiliate cards → NewsletterInline → AdSlot → TemplatesCTA → BioTravelPartiu → ShareButtons → RelatedPosts.

### Monetization hooks (not yet active)

- **AdSense:** `<script>` block is commented out in `app/layout.js`; `AdSlot` component has `SHOW_ADS = false`
- **Affiliate cards:** placeholder links in `lib/afiliados.js` — appear automatically on post pages based on category
- **Ad in content:** injected automatically by `getPostBySlug()` after the first `</h2>`

### Routes

| Path | File | Notes |
|------|------|-------|
| `/` | `app/page.js` | Home: highlight carousel + recent posts grid |
| `/blog` | `app/blog/page.js` | All posts listing |
| `/blog/[slug]` | `app/blog/[slug]/page.js` | Individual post |
| `/categoria/[cat]` | `app/categoria/[cat]/page.js` | Posts filtered by category |
| `/templates` | `app/templates/page.js` | Templates CTA page |
| `/sitemap.xml` | `app/sitemap.js` | Auto-generated sitemap |
| `/robots.txt` | `app/robots.js` | Auto-generated robots |
