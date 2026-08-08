import { useEffect, useState } from 'react'
import { ArrowUp, Briefcase, MessageCircle } from 'lucide-react'

export function FloatingActions() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 600)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="fixed bottom-6 right-5 z-40 flex flex-col items-end gap-3 sm:right-8">
      {showBackToTop && (
        <a
          href="#home"
          aria-label="Back to top"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-lg transition-transform hover:-translate-y-1"
        >
          <ArrowUp size={18} />
        </a>
      )}
      <a
        href="https://wa.me/2349041239803"
        aria-label="Message on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:-translate-y-1"
      >
        <MessageCircle size={20} />
      </a>
      <a
        href="#contact"
        className="flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground shadow-lg transition-transform hover:-translate-y-1"
      >
        <Briefcase size={16} />
        Hire Me
      </a>
    </div>
  )
}
