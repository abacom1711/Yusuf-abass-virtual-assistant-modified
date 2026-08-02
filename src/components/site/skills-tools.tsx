import { Reveal } from '@/components/site/reveal'
import { SKILLS, TOOLS } from '@/lib/site-data'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Skills
        </span>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          A well-rounded toolkit for running a business day-to-day
        </h2>
      </Reveal>

      <div className="mt-12 flex flex-wrap justify-center gap-3">
        {SKILLS.map((skill, i) => (
          <Reveal
            key={skill}
            delay={(i % 6) * 60}
            className="rounded-full border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:text-primary hover:shadow-md"
          >
            {skill}
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function Tools() {
  return (
    <section id="tools" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Tools &amp; Software
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Fluent in the platforms your team already uses
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
          {TOOLS.map((tool, i) => (
            <Reveal
              key={tool}
              delay={(i % 6) * 60}
              className="group flex flex-col items-center justify-center gap-3 rounded-2xl border border-border bg-card px-4 py-6 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 font-display text-sm font-bold text-primary transition-transform group-hover:scale-110">
                {tool
                  .split(' ')
                  .map((w) => w[0])
                  .slice(0, 2)
                  .join('')}
              </span>
              <span className="text-xs font-medium text-muted-foreground">{tool}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
