import { createFileRoute } from '@tanstack/react-router'
import { SiteNav, SkipLink } from '@/components/site/nav'
import { Hero } from '@/components/site/hero'
import { About, Services } from '@/components/site/about-services'
import { Skills, Tools } from '@/components/site/skills-tools'
import { Portfolio } from '@/components/site/portfolio'
import { Testimonials, WhyWorkWithMe } from '@/components/site/testimonials-why'
import { Stats, FAQ } from '@/components/site/stats-faq'
import { ContactSection } from '@/components/site/contact-section'
import { SiteFooter } from '@/components/site/footer'
import { FloatingActions } from '@/components/site/floating'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SkipLink />
      <SiteNav />
      <main id="main-content">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Skills />
        <Tools />
        <Testimonials />
        <WhyWorkWithMe />
        <Stats />
        <FAQ />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingActions />
    </div>
  )
}
