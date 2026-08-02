import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'
import { Counter } from '@/components/site/counter'
import { FAQS, STATS } from '@/lib/site-data'

export function Stats() {
  return (
    <section className="bg-primary py-20 text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-5 sm:px-8 md:grid-cols-5">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80} className="text-center">
            <p className="font-display text-3xl font-bold sm:text-4xl">
              <Counter target={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-xs text-primary-foreground/65 sm:text-sm">
              {stat.label}
            </p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="mx-auto max-w-4xl px-5 py-24 sm:px-8">
      <Reveal className="mx-auto max-w-2xl text-center">
        <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
          FAQs
        </span>
        <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Frequently Asked Questions
        </h2>
      </Reveal>

      <div className="mt-12 space-y-3">
        {FAQS.map((faq, i) => {
          const isOpen = openIndex === i
          return (
            <Reveal key={faq.question} delay={i * 60} className="overflow-hidden rounded-2xl border border-border bg-card">
              <h3>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left text-sm font-semibold text-foreground sm:text-base"
                >
                  {faq.question}
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-accent transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
              </h3>
              {isOpen && (
                <p className="px-6 pb-5 text-sm leading-relaxed text-muted-foreground">
                  {faq.answer}
                </p>
              )}
            </Reveal>
          )
        })}
      </div>
    </section>
  )
}
