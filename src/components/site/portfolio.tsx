import { useState } from 'react'
import { ArrowUpRight, Wrench, X } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'
import { PROJECTS, type PortfolioProject } from '@/lib/site-data'

export function Portfolio() {
  const [active, setActive] = useState<PortfolioProject | null>(null)

  return (
    <section id="portfolio" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Portfolio
        </span>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Recent work across calendars, inboxes, and operations
        </h2>
        <p className="mt-4 leading-relaxed text-muted-foreground">
          A sample of representative projects. Client names have been withheld
          for confidentiality.
        </p>
      </Reveal>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, i) => (
          <Reveal
            key={project.title}
            delay={(i % 3) * 90}
            className="flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex h-36 items-center justify-center bg-gradient-to-br from-primary to-primary/70 text-primary-foreground">
              <project.icon size={36} strokeWidth={1.5} />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-display text-lg font-semibold text-foreground">
                {project.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.overview}
              </p>
              <button
                type="button"
                onClick={() => setActive(project)}
                className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                View Details
                <ArrowUpRight size={15} />
              </button>
            </div>
          </Reveal>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="project-modal-title"
          onClick={() => setActive(null)}
        >
          <div
            className="max-h-[85vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-card p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                <active.icon size={20} />
              </span>
              <button
                type="button"
                onClick={() => setActive(null)}
                aria-label="Close project details"
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground hover:bg-muted"
              >
                <X size={18} />
              </button>
            </div>

            <h3 id="project-modal-title" className="font-display mt-5 text-2xl font-bold text-foreground">
              {active.title}
            </h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{active.overview}</p>

            <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
              Responsibilities
            </h4>
            <ul className="mt-2 space-y-1.5">
              {active.responsibilities.map((r) => (
                <li key={r} className="text-sm text-foreground">
                  — {r}
                </li>
              ))}
            </ul>

            <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
              Tools Used
            </h4>
            <div className="mt-2 flex flex-wrap gap-2">
              {active.tools.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1 rounded-full bg-muted px-3 py-1 text-xs font-medium text-foreground"
                >
                  <Wrench size={12} />
                  {t}
                </span>
              ))}
            </div>

            <h4 className="mt-6 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
              Results Achieved
            </h4>
            <p className="mt-2 rounded-xl bg-primary/8 p-4 text-sm font-medium text-primary">
              {active.results}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
