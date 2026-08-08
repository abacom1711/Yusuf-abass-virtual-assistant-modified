import { ArrowUp, Linkedin, Mail, MessageCircle } from 'lucide-react'
import { NAV_LINKS, SERVICES } from '@/lib/site-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div>
          <p className="font-display text-lg font-bold">
            Yusuf<span className="text-accent">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-primary-foreground/65">
            Administrative &amp; Executive Virtual Assistant helping busy leaders
            stay organized and focused on growth.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="https://bit.ly/4xaTvyi"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin size={16} />
            </a>
            <a
              href="mailto:abacom171@gmail.com"
              aria-label="Email"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={16} />
            </a>
            <a
              href="https://wa.me/2349041239803"
              aria-label="WhatsApp"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-accent hover:text-accent"
            >
              <MessageCircle size={16} />
            </a>
          </div>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
            Quick Links
          </p>
          <ul className="mt-4 space-y-2.5">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
            Services
          </p>
          <ul className="mt-4 space-y-2.5">
            {SERVICES.map((service) => (
              <li key={service.title}>
                <a
                  href="#services"
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
                >
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.1em] text-accent">
            Legal
          </p>
          <ul className="mt-4 space-y-2.5">
            <li>
              <a href="#privacy" className="text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-5 py-6 text-xs text-primary-foreground/55 sm:flex-row sm:px-8">
          <p>© {new Date().getFullYear()} Yusuf Abass Onimisi. All rights reserved.</p>
          <a
            href="#home"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/15 px-4 py-2 transition-colors hover:border-accent hover:text-accent"
          >
            Back to top
            <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  )
}
