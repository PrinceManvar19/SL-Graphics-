import { ScrollReveal } from './scroll-reveal'

export function CTABannerSection() {
  return (
    <section className="bg-[#E8FF00] py-24 text-[#0A0A0A] md:py-32">
      <div className="container-x text-center">
        <ScrollReveal>
          <h2 className="font-display text-[96px] leading-[0.8] tracking-[-0.08em] md:text-[200px]">
            READY?
          </h2>
          <p className="mt-8 text-lg md:text-xl">Let&apos;s make something people remember.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="border border-[#0A0A0A] bg-[#0A0A0A] px-7 py-4 text-xs font-medium uppercase tracking-[0.15em] text-[#F0EDE8] transition-colors duration-500 hover:bg-transparent hover:text-[#0A0A0A]"
            >
              Start a Project
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="border border-[#0A0A0A] px-7 py-4 text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-500 hover:bg-[#0A0A0A] hover:text-[#F0EDE8]"
            >
              WhatsApp Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
