import { CheckCircle2 } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'
import { ABOUT_TRAITS, SERVICES } from '@/lib/site-data'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            About Me
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The calm, organized presence behind a well-run business
          </h2>
          <p className="mt-5 leading-relaxed text-muted-foreground">
            I am Yusuf Abass Onimisi, a highly organized Administrative &amp;
            Executive Virtual Assistant who helps founders and leadership teams
            operate efficiently. I take on the recurring, detail-heavy work —
            calendars, inboxes, documentation, coordination — so the people I
            support can spend their time on decisions only they can make.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Every client relationship runs on clear communication, careful
            attention to detail, and proactive follow-through — you should never
            have to ask twice, and you should always know exactly where things
            stand.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {ABOUT_TRAITS.map((trait) => (
              <li
                key={trait.label}
                className="flex flex-col items-start gap-3 rounded-2xl border border-border bg-card p-5 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <trait.icon size={18} />
                </span>
                <span className="text-sm font-semibold text-foreground">
                  {trait.label}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}

export function Services() {
  return (
    <section id="services" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Services
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Support built around how your business actually runs
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Four core areas, each fully customizable to what your week actually
            requires.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 90}
              className="group rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground transition-transform group-hover:scale-105">
                <service.icon size={20} />
              </span>
              <h3 className="font-display mt-5 text-xl font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
              <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
                {service.items.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 size={15} className="shrink-0 text-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
