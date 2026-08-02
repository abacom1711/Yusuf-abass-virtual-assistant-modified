import { useState } from 'react'
import { Send } from 'lucide-react'
import { Reveal } from '@/components/site/reveal'
import { CONTACT_LINKS, SERVICE_OPTIONS } from '@/lib/site-data'

function encode(data: Record<string, string>) {
  return Object.entries(data)
    .map(([key, val]) => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`)
    .join('&')
}

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)
    setError(false)
    const formData = new FormData(e.currentTarget)
    const data: Record<string, string> = { 'form-name': 'contact' }
    formData.forEach((value, key) => {
      data[key] = String(value)
    })

    try {
      const response = await fetch('/contact.html', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(data),
      })
      if (!response.ok) throw new Error('Submission failed')
      setSubmitted(true)
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="bg-muted/40 py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Contact
          </span>
          <h2 className="font-display mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Let&rsquo;s talk about what&rsquo;s eating up your week
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Tell me a bit about your business and what you need support with —
            expect a reply within one business day.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center py-10 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/8 text-primary">
                  <Send size={26} />
                </div>
                <h3 className="font-display mt-5 text-xl font-semibold text-foreground">
                  Message sent
                </h3>
                <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                  Thanks for reaching out — expect a reply within one business
                  day.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-6 rounded-full border border-border px-5 py-2.5 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                <input type="hidden" name="form-name" value="contact" />
                <p hidden>
                  <label>
                    Don&rsquo;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Name" name="name" type="text" required placeholder="Jordan Ellery" />
                  <Field label="Email" name="email" type="email" required placeholder="jordan@company.com" />
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <Field label="Company" name="company" type="text" placeholder="Company name" />
                  <div>
                    <label htmlFor="service" className="mb-1.5 block text-sm font-medium text-foreground">
                      Service Needed
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      defaultValue=""
                      className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
                    >
                      <option value="" disabled>
                        Select a service
                      </option>
                      {SERVICE_OPTIONS.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-foreground">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    placeholder="What would you like help with?"
                    className="w-full resize-none rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
                  />
                </div>

                {error && (
                  <p className="text-sm font-medium text-destructive" role="alert">
                    Something went wrong sending your message. Please try again
                    or email hello@yusufva.com directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={submitting}
                  className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                >
                  <Send size={16} />
                  {submitting ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            )}
          </Reveal>

          <Reveal delay={120} className="flex flex-col gap-4">
            {CONTACT_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="flex items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:border-accent hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/8 text-primary">
                  <link.icon size={18} />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.08em] text-muted-foreground">
                    {link.label}
                  </span>
                  <span className="block text-sm font-medium text-foreground">{link.value}</span>
                </span>
              </a>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string
  name: string
  type: string
  required?: boolean
  placeholder: string
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-input bg-background px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  )
}
