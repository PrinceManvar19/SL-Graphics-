import { ScrollReveal } from './scroll-reveal'

export function CTABannerSection() {
  return (
    <section id="cta-section" className="snap-section flex min-h-[80vh] items-center bg-[var(--brand)] py-24 text-white">
      <div className="container-x text-center">
        <ScrollReveal>
          <h2 className="font-display text-[80px] uppercase leading-[0.78] md:text-[220px]">
            READY?
          </h2>
          <p className="mt-8 text-xl text-white/80">Let&apos;s make something people remember.</p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              data-cursor="hover"
              className="border-[1.5px] border-[#111111] bg-[#111111] px-7 py-4 font-display text-lg uppercase text-white transition-all duration-300 hover:bg-transparent hover:text-[#111111]"
            >
              Start Project
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="border-[1.5px] border-[#111111] bg-transparent px-7 py-4 font-display text-lg uppercase text-[#111111] transition-all duration-300 hover:bg-[#111111] hover:text-white"
            >
              WhatsApp Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
