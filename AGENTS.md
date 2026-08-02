# AGENTS.md

This document describes the project for AI agents working on this codebase.

## Project Overview

A single-page portfolio site for an Administrative & Executive Virtual
Assistant. Built with TanStack Start (React 19) and deployed on Netlify. There
is no blog, no CMS, no database — every visible section lives on one page,
and all editable copy is centralized in one data file.

### Tech stack

| Layer | Technology |
|-------|------------|
| Framework | TanStack Start |
| Frontend | React 19, TanStack Router v1 |
| Build | Vite 7 |
| Styling | Tailwind CSS 4 |
| Icons | lucide-react |
| Forms | Netlify Forms |
| Language | TypeScript 5.9 (strict mode) |
| Deployment | Netlify |

## Architecture

`src/routes/index.tsx` is the entire site: it renders `SiteNav`, then every
section component in order, then `SiteFooter` and `FloatingActions`. Nav links
are in-page anchors (`#about`, `#services`, ...), not separate routes — this
is intentionally a one-pager, not a multi-page app. `/contact` exists only as
a redirect to `/#contact` for backwards-compatible links.

## Directory structure

```
public/
  contact.html        # Hidden static form so Netlify's build bot registers the contact form
  og-image.svg         # Open Graph share image
src/
  components/
    site/               # One component per page section
      nav.tsx           # Sticky nav, mobile menu, dark mode toggle, scroll-progress bar
      hero.tsx          # Hero section + inline SVG workspace illustration
      about-services.tsx
      skills-tools.tsx
      portfolio.tsx     # Includes the "View Details" modal
      testimonials-why.tsx
      stats-faq.tsx     # Animated counters + accordion FAQ
      contact-section.tsx
      footer.tsx
      floating.tsx      # Floating Hire Me / WhatsApp / back-to-top buttons
      reveal.tsx         # Scroll-reveal wrapper used by every section
      counter.tsx         # Animated number counter for the stats section
    ui/                  # Unused shadcn-style primitives left over from the starting template
  hooks/
    use-reveal.ts        # IntersectionObserver-based scroll reveal
    use-theme.ts          # Dark mode toggle, persisted to localStorage
    use-scroll-progress.ts
  lib/
    site-data.ts          # All editable copy: services, skills, tools, projects, testimonials, stats, FAQs, contact links
    utils.ts               # cn() class-merge helper
  routes/
    __root.tsx              # HTML shell, Google Fonts, SEO/OG metadata
    index.tsx                # Assembles the whole page
    contact.tsx               # Redirects to /#contact
  styles.css                  # Tailwind import + navy/dark-gray/gold theme tokens
```

## Conventions

- Each section component owns its own `<section id="...">`; the id matches
  the corresponding entry in `NAV_LINKS` in `site-data.ts`.
- Scroll-reveal animation goes through the shared `<Reveal>` wrapper, not
  ad hoc per-section CSS.
- Theme colors (navy primary, dark gray text, gold accent) are CSS custom
  properties in `styles.css`, consumed via Tailwind's `bg-primary`,
  `text-accent`, etc. — don't hardcode hex values in components.
- Headings use `font-display` (Poppins); body copy uses the default sans
  (Inter). Both load via Google Fonts `<link>` tags in `__root.tsx`.
- Prefer editing `src/lib/site-data.ts` over touching component JSX when the
  task is a copy change (new testimonial, new FAQ, different stat, etc.).

## Non-obvious decisions

- **Netlify Forms needs a static HTML skeleton.** TanStack Start renders the
  contact form client-side, so Netlify's build-time form scanner can't see
  it. `public/contact.html` is a hidden duplicate of the form's fields that
  exists solely so Netlify registers the `contact` form at deploy time. If a
  field is added/removed in `contact-section.tsx`, update `public/contact.html`
  to match or submissions will be rejected.
- **The original starter's blog/resume/content-collections scaffolding was
  removed.** This site has no blog and needs no dynamic content pipeline —
  a static data file is simpler to maintain for a one-page site.
- **Netlify Forms is already activated** (the skill's `enable.cjs` was run
  during setup); no further action is needed before deploy.

## Placeholders to replace before launch

- "Yusuf Abass Onimisi" in `src/components/site/about-services.tsx` and the SEO
  title in `src/routes/__root.tsx`
- Email, WhatsApp, LinkedIn, Upwork, Fiverr, and Calendly links in
  `CONTACT_LINKS` (`src/lib/site-data.ts`)
- The client testimonials, which are illustrative placeholders

## Development commands

```bash
pnpm dev      # Start dev server (port 3000)
pnpm build    # Production build
```
