import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { MarqueeSection } from '@/components/marquee-section'
import { ServicesSection } from '@/components/services-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { ProcessSection } from '@/components/process-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTABannerSection } from '@/components/cta-banner-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'
import { SiteEffects } from '@/components/site-effects'

export default function Home() {
  return (
    <main id="top" className="bg-[#0A0A0A] text-[#F0EDE8] overflow-x-hidden">
      <SiteEffects />
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTABannerSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
