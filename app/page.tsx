import { Navbar } from '@/components/navbar'
import { HeroSection } from '@/components/hero-section'
import { MarqueeSection } from '@/components/marquee-section'
import { ServicesSection } from '@/components/services-section'
import { PortfolioSection } from '@/components/portfolio-section'
import { ClientsSection } from '@/components/clients-section'
import { ProcessSection } from '@/components/process-section'
import { TestimonialsSection } from '@/components/testimonials-section'
import { CTABannerSection } from '@/components/cta-banner-section'
import { ContactSection } from '@/components/contact-section'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="bg-black text-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <MarqueeSection />
      <ServicesSection />
      <PortfolioSection />
      <ClientsSection />
      <ProcessSection />
      <TestimonialsSection />
      <CTABannerSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
