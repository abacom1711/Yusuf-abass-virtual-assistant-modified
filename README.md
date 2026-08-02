# Yusuf — Administrative & Executive Virtual Assistant

A premium, single-page portfolio site for an Administrative & Executive
Virtual Assistant. It presents services, skills, tools, sample projects,
testimonials, and a contact form aimed at international executive and
entrepreneur clients.

## Key technologies

- [TanStack Start](https://tanstack.com/start) (React 19) for routing and SSR
- Tailwind CSS v4 for styling, with a custom navy / dark-gray / gold theme
- [Lucide](https://lucide.dev) icons
- Netlify Forms for the contact form (no backend code required)
- Deployed on Netlify

## Project structure

- `src/routes/index.tsx` — assembles the whole one-page site from section
  components
- `src/components/site/` — one component per section (hero, about, services,
  skills, tools, portfolio, testimonials, stats, FAQ, contact, footer, nav,
  floating buttons)
- `src/lib/site-data.ts` — all editable copy: services, skills, tools,
  projects, testimonials, FAQs, contact links
- `public/contact.html` — a hidden static form used only so Netlify detects
  and registers the contact form at build time

## Running locally

```bash
pnpm install
pnpm dev
```

The dev server runs at `http://localhost:3000`. Netlify Forms submissions
only work on a deployed site (Netlify Dev/production), not in local `pnpm dev`.

## Customizing

- Swap the "[Your Full Name]" placeholder in `src/components/site/about-services.tsx`
  and the SEO title in `src/routes/__root.tsx` with the real full name.
- Update contact details (email, WhatsApp, LinkedIn, Upwork, Fiverr, Calendly)
  in `CONTACT_LINKS` inside `src/lib/site-data.ts`.
- Update services, skills, tools, portfolio projects, testimonials, stats, and
  FAQs in the same `site-data.ts` file — all copy lives there.
