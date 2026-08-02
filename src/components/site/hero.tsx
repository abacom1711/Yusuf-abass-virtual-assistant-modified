import { ArrowRight, Briefcase } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'

export function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div className="bg-noise pointer-events-none absolute inset-0" />
      <div
        className="pointer-events-none absolute -right-40 -top-40 h-[36rem] w-[36rem] rounded-full opacity-20 blur-3xl"
        style={{ background: 'radial-gradient(circle, var(--accent) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute -bottom-56 -left-32 h-[30rem] w-[30rem] rounded-full opacity-10 blur-3xl"
        style={{ background: 'radial-gradient(circle, white 0%, transparent 70%)' }}
      />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-5 py-24 sm:px-8 sm:py-28 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:py-32">
        <Reveal>
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            <Briefcase size={14} />
            Administrative &amp; Executive Virtual Assistant
          </p>
          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl">
            Reliable Executive &amp; Administrative Virtual Assistant
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-primary-foreground/75 sm:text-lg">
            I help executives, entrepreneurs, startups, and growing businesses save
            time by managing operations, organizing workflows, coordinating
            schedules, handling communications, and providing dependable
            administrative support.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg shadow-black/10 transition-transform hover:-translate-y-0.5"
            >
              Hire Me
              <ArrowRight size={16} />
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
            >
              View Portfolio
            </a>
          </div>

          <dl className="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-white/10 pt-8">
            <div>
              <dt className="sr-only">Years of experience</dt>
              <dd className="font-display text-2xl font-bold">6+</dd>
              <p className="mt-1 text-xs text-primary-foreground/60">Years experience</p>
            </div>
            <div>
              <dt className="sr-only">Clients served</dt>
              <dd className="font-display text-2xl font-bold">34+</dd>
              <p className="mt-1 text-xs text-primary-foreground/60">Clients served</p>
            </div>
            <div>
              <dt className="sr-only">Average response time</dt>
              <dd className="font-display text-2xl font-bold">4hrs</dd>
              <p className="mt-1 text-xs text-primary-foreground/60">Avg. response</p>
            </div>
          </dl>
        </Reveal>

        <Reveal delay={150} className="relative">
          <WorkspaceIllustration />
        </Reveal>
      </div>
    </section>
  )
}

function WorkspaceIllustration() {
  return (
    <svg
      viewBox="0 0 480 420"
      className="w-full drop-shadow-2xl"
      role="img"
      aria-labelledby="hero-illustration-title"
    >
      <title id="hero-illustration-title">
        Illustration of an organized desk with a laptop, calendar, and task list
      </title>
      <defs>
        <linearGradient id="deskGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="oklch(0.32 0.06 258)" />
          <stop offset="100%" stopColor="oklch(0.22 0.05 258)" />
        </linearGradient>
      </defs>

      <rect x="18" y="250" width="444" height="18" rx="9" fill="url(#deskGrad)" />
      <rect x="40" y="268" width="24" height="90" rx="4" fill="oklch(0.26 0.05 258)" />
      <rect x="416" y="268" width="24" height="90" rx="4" fill="oklch(0.26 0.05 258)" />

      <g>
        <rect x="130" y="120" width="220" height="140" rx="14" fill="oklch(0.98 0 0)" opacity="0.96" />
        <rect x="130" y="120" width="220" height="30" rx="14" fill="oklch(0.9 0.01 258)" />
        <circle cx="146" cy="135" r="4" fill="oklch(0.7 0.18 25)" />
        <circle cx="160" cy="135" r="4" fill="oklch(0.78 0.14 85)" />
        <circle cx="174" cy="135" r="4" fill="oklch(0.65 0.15 150)" />
        <rect x="150" y="168" width="130" height="10" rx="5" fill="oklch(0.85 0.01 258)" />
        <rect x="150" y="188" width="170" height="8" rx="4" fill="oklch(0.9 0.01 258)" />
        <rect x="150" y="204" width="150" height="8" rx="4" fill="oklch(0.9 0.01 258)" />
        <rect x="150" y="220" width="100" height="8" rx="4" fill="oklch(0.9 0.01 258)" />
        <rect x="230" y="184" width="70" height="52" rx="8" fill="oklch(0.78 0.12 85)" opacity="0.85" />
      </g>

      <rect x="118" y="258" width="244" height="14" rx="6" fill="oklch(0.2 0.04 258)" />

      <g transform="translate(60 60) rotate(-6)">
        <rect width="120" height="140" rx="12" fill="oklch(0.98 0 0)" />
        <rect width="120" height="34" rx="12" fill="var(--accent)" />
        <text x="60" y="23" textAnchor="middle" fontSize="13" fontWeight="700" fill="oklch(0.2 0.03 258)">
          MAY
        </text>
        {Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={i}
            x={12 + (i % 4) * 26}
            y={50 + Math.floor(i / 4) * 26}
            width="18"
            height="18"
            rx="4"
            fill={i === 5 ? 'var(--accent)' : 'oklch(0.93 0.005 258)'}
          />
        ))}
      </g>

      <g transform="translate(300 40) rotate(5)">
        <rect width="140" height="110" rx="12" fill="oklch(0.98 0 0)" />
        <circle cx="22" cy="24" r="8" fill="oklch(0.65 0.15 150)" />
        <rect x="38" y="19" width="86" height="10" rx="5" fill="oklch(0.88 0.01 258)" />
        <circle cx="22" cy="52" r="8" fill="var(--accent)" />
        <rect x="38" y="47" width="70" height="10" rx="5" fill="oklch(0.88 0.01 258)" />
        <circle cx="22" cy="80" r="8" fill="oklch(0.9 0.01 258)" />
        <rect x="38" y="75" width="94" height="10" rx="5" fill="oklch(0.88 0.01 258)" />
      </g>
    </svg>
  )
}
