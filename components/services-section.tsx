import { ScrollReveal } from './scroll-reveal'

const services = [
  {
    title: 'Logo Design',
    description: 'Distinct marks built for recall, trust, and daily use.',
    tag: 'Identity',
  },
  {
    title: 'Brand Identity',
    description: 'Color, type, rules, and systems that keep every touchpoint consistent.',
    tag: 'Identity',
  },
  {
    title: 'Poster Design',
    description: 'Event and campaign posters made to stop the scroll.',
    tag: 'Print',
  },
  {
    title: 'Banner Design',
    description: 'Digital and outdoor banners that turn attention into action.',
    tag: 'Print',
  },
  {
    title: 'Short-Form Video',
    description: 'Reels, Shorts, and social edits tuned for retention.',
    tag: 'Video',
  },
  {
    title: 'Long-Form Video',
    description: 'YouTube, brand films, and stories shaped with rhythm and polish.',
    tag: 'Video',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-28 md:py-40">
      <div className="container-x">
        <ScrollReveal className="mb-20 grid gap-8 md:grid-cols-[0.35fr_1fr]">
          <p className="label">/ What We Do</p>
          <h2 className="font-display max-w-4xl text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Six Ways We Make You Unforgettable.
          </h2>
        </ScrollReveal>

        <div className="border-t border-[#1E1E1E]">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.04}>
              <a
                href="#contact"
                className="group grid min-h-28 items-center gap-5 border-b border-[#1E1E1E] py-8 transition-colors duration-500 hover:bg-[#111111] md:grid-cols-[80px_1fr_220px]"
              >
                <span className="text-sm text-[#555555] transition-colors duration-500 group-hover:text-[#E8FF00]">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="overflow-hidden">
                  <span className="block font-display text-4xl leading-none tracking-[-0.04em] transition-transform duration-500 group-hover:-translate-y-2 md:text-[40px]">
                    {service.title}
                  </span>
                  <span className="mt-3 block translate-x-6 text-sm text-[#555555] opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100">
                    {service.description}
                  </span>
                </span>
                <span className="flex items-center justify-between gap-4 text-xs font-medium uppercase tracking-[0.15em] text-[#555555]">
                  {service.tag}
                  <span className="text-[#E8FF00]">→</span>
                </span>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
