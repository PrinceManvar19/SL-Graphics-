import { ArrowUpRight } from 'lucide-react'
import { CharReveal } from './char-reveal'
import { ScrollReveal } from './scroll-reveal'

export type Service = {
  title: string
  description: string
  delivery: string
  tag: string
}

interface ServicesSectionProps {
  services: Service[]
}

export function ServicesSection({ services }: ServicesSectionProps) {
  return (
    <section id="services" className="snap-section flex min-h-screen items-center bg-[var(--bg)] py-24">
      <div className="container-x">
        <ScrollReveal className="animate-children mb-14 grid gap-6 md:grid-cols-[0.32fr_1fr]">
          <p className="label">/ WHAT WE DO</p>
          <h2 className="font-display max-w-4xl text-6xl uppercase leading-[0.92] md:text-7xl">
            <CharReveal text="SIX WAYS WE MAKE" as="span" className="block text-[var(--text)]" />
            <CharReveal text="YOU UNFORGETTABLE." as="span" className="block text-[var(--brand)]" delay={0.12} />
          </h2>
        </ScrollReveal>

        <div className="border-t border-[var(--border)]">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.04}>
              <a
                href="#contact"
                data-cursor="hover"
                className="service-row group grid min-h-[84px] items-center gap-4 border-b border-[var(--border)] bg-white px-5 py-4 md:grid-cols-[70px_1fr_150px_44px]"
              >
                <span className="text-[13px] text-[var(--muted)] transition-colors duration-200 group-hover:text-[var(--brand)]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0">
                  <span className="block font-display text-4xl uppercase leading-none text-[var(--text)] md:text-[36px]">
                    {service.title}
                  </span>
                  <span className="service-description mt-2 block text-sm text-[var(--secondary)]">
                    {service.description}
                  </span>
                  <span className="mt-3 inline-flex rounded-full bg-[rgba(224,32,32,0.1)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--brand)]">
                    Delivery: {service.delivery}
                  </span>
                </span>
                <span className="w-fit rounded-[4px] border border-[var(--border)] px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-[var(--muted)]">
                  {service.tag}
                </span>
                <span className="grid h-10 w-10 place-items-center text-[var(--text)] transition-transform duration-300 group-hover:-rotate-45 group-hover:text-[var(--brand)]" aria-hidden="true">
                  <ArrowUpRight size={22} />
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
