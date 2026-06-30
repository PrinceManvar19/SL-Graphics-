'use client'

import { ContactSection } from '@/components/contact-section'
import { ClientCursor } from '@/components/client-cursor'
import { CTABannerSection } from '@/components/cta-banner-section'
import { Footer } from '@/components/footer'
import { HeroSection } from '@/components/hero-section'
import { IntroLoader } from '@/components/intro-loader'
import { Navbar } from '@/components/navbar'
import { PageTransition } from '@/components/page-transition'
import { PortfolioSection } from '@/components/portfolio-section'
import { ProcessSection } from '@/components/process-section'
import { ServicesSection } from '@/components/services-section'
import { SiteEffects } from '@/components/site-effects'
import { TestimonialsSection } from '@/components/testimonials-section'
import { TrustedBySection } from '@/components/trusted-by-section'

const services = [
  { title: 'Logo Design', description: 'Distinct marks built for recall, trust, and daily use.', delivery: '3-5 days', tag: 'Identity' },
  { title: 'Brand Identity', description: 'A complete visual system that keeps every touchpoint unmistakably yours.', delivery: '7-10 days', tag: 'System' },
  { title: 'Poster Design', description: 'Campaign visuals designed to stop thumbs and start conversations.', delivery: '1-2 days', tag: 'Campaign' },
  { title: 'Banner Design', description: 'Sharp digital and outdoor creative that turns attention into action.', delivery: '1-2 days', tag: 'Outdoor' },
  { title: 'Reel Editing', description: 'Fast, rhythmic edits tuned for retention, captions, and sharing.', delivery: '2-3 days', tag: 'Video' },
  { title: 'Video Production', description: 'Brand stories, wedding films, and content shaped with cinematic polish.', delivery: '5-7 days', tag: 'Film' },
]

const projects = [
  { title: 'Radhe Traders', type: 'logo', category: 'logo' as const, image: '/project-placeholders/radhe-traders.svg', alt: 'Abstract logo presentation mockup for Radhe Traders' },
  { title: 'Viral Reels Pack', type: 'video', category: 'video' as const, image: '/project-placeholders/viral-reels-pack.svg', alt: 'Vertical video editing storyboard placeholder for Viral Reels Pack' },
  { title: 'Diwali Campaign', type: 'poster', category: 'poster' as const, image: '/project-placeholders/diwali-campaign.svg', alt: 'Festive poster layout placeholder for Diwali Campaign' },
  { title: 'CloudFit Identity', type: 'brand', category: 'brand' as const, image: '/project-placeholders/cloudfit-identity.svg', alt: 'Brand identity system placeholder for CloudFit Identity' },
  { title: 'Highway Launch', type: 'poster', category: 'poster' as const, image: '/project-placeholders/highway-launch.svg', alt: 'Outdoor campaign billboard placeholder for Highway Launch' },
  { title: 'Wedding Film', type: 'video', category: 'video' as const, image: '/project-placeholders/wedding-film.svg', alt: 'Cinematic wedding film frame placeholder' },
]

const steps = [
  { number: '01', title: 'Discover', description: 'We listen, question, and find the real objective.' },
  { number: '02', title: 'Define', description: 'A clear direction, scope, and timeline.' },
  { number: '03', title: 'Create', description: 'Ideas become strong, considered visual options.' },
  { number: '04', title: 'Refine', description: 'Your feedback sharpens the chosen direction.' },
  { number: '05', title: 'Deliver', description: 'Final files arrive organized and ready to work.' },
]

const testimonials = [
  { name: 'Amit Patel', company: 'Radhe Traders, Ahmedabad', quote: 'Quick concepts, no back-and-forth. Our brand finally looks as premium as the work we do.' },
  { name: 'Priya Singh', company: 'Creator, Delhi', quote: 'The reels feel sharper, faster, and more intentional. Our views doubled within two weeks.' },
  { name: 'Rahul Mishra', company: 'CloudFit, Pune', quote: 'A complete brand kit that felt like working with a proper agency - clear, thoughtful, and polished.' },
]

export default function Home() {
  return (
    <>
      <IntroLoader />
      <PageTransition />
      <ClientCursor />
      <Navbar />
      <main id="top">
        <HeroSection />
        <TrustedBySection />
        <ServicesSection services={services} />
        <PortfolioSection projects={projects} />
        <ProcessSection steps={steps} />
        <TestimonialsSection testimonials={testimonials} />
        <CTABannerSection />
        <ContactSection services={services.map((service) => service.title)} />
      </main>
      <Footer />
      <SiteEffects />
    </>
  )
}
