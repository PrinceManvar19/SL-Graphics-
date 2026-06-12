import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { ServicesSection } from '@/components/services-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { ProcessSection } from '@/components/process-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { TrustedBySection } from '@/components/trusted-by-section'
import { CTABannerSection } from '@/components/cta-banner-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { SiteEffects } from '@/components/site-effects'

export default function Home() {
  return (
    <main id="top" className="overflow-x-hidden bg-[var(--bg)] text-[var(--text)]">
      <SiteEffects />
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <TrustedBySection />
      <CTABannerSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
