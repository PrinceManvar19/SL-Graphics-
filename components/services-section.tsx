import { CharReveal } from './char-reveal'
import { ScrollReveal } from './scroll-reveal'

const services = [
  { title: 'Logo Design', description: 'Distinct marks built for recall, trust, and daily use.', tag: 'Identity', delivery: '3–5 days' },
  { title: 'Brand Identity', description: 'Color, type, rules, and systems that keep every touchpoint consistent.', tag: 'System', delivery: '7–10 days' },
  { title: 'Poster Design', description: 'Event and campaign posters made to stop the scroll.', tag: 'Print', delivery: '24–48 hrs' },
  { title: 'Banner Design', description: 'Digital and outdoor banners that turn attention into action.', tag: 'Campaign', delivery: '24–48 hrs' },
  { title: 'Reel Editing', description: 'Short-form edits tuned for rhythm, retention, captions, and shareability.', tag: 'Video', delivery: '48–72 hrs' },
  { title: 'Video Production', description: 'YouTube edits, wedding films, and brand stories shaped with polish.', tag: 'Film', delivery: '5–7 days' },
]

export function ServicesSection() {
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
                <span className="text-[13px] text-[#CCCCCC] transition-colors duration-200 group-hover:text-[var(--brand)]">
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
                <span className="text-2xl text-[#111111] transition-transform duration-300 group-hover:-rotate-45 group-hover:text-[var(--brand)]">
                  →
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
