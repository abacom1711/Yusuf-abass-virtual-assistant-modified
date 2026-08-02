import { Star } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'
import { TESTIMONIALS, WHY_WORK_WITH_ME } from '@/lib/site-data'

function initials(name: string) {
  return name
    .split(' ')
    .map((n) => n[0])
    .join('')
}

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Testimonials
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What clients say after working together
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map((t, i) => (
            <Reveal
              key={t.name}
              delay={i * 90}
              className="rounded-3xl border border-border bg-card p-8 shadow-sm"
            >
              <div className="flex gap-0.5 text-accent" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star key={idx} size={16} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-foreground">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary font-display text-sm font-bold text-primary-foreground">
                  {initials(t.name)}
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.company}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function WhyWorkWithMe() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          Why Work With Me
        </span>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          What you can count on, every single project
        </h2>
      </Reveal>

      <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {WHY_WORK_WITH_ME.map((item, i) => (
          <Reveal
            key={item.label}
            delay={(i % 5) * 70}
            className="flex flex-col items-center gap-3 rounded-2xl border border-border bg-card px-4 py-7 text-center shadow-sm transition-all hover:-translate-y-1 hover:border-accent hover:shadow-md"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/8 text-primary">
              <item.icon size={19} />
            </span>
            <span className="text-sm font-semibold text-foreground">{item.label}</span>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
