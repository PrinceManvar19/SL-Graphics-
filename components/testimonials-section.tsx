import { ScrollReveal } from './scroll-reveal'

const testimonials = [
  {
    name: 'Amit Verma',
    company: 'Local Retail Brand',
    quote: 'The poster campaign looked premium and brought real walk-ins. Clean work, fast delivery, no confusion.',
  },
  {
    name: 'Priya Singh',
    company: 'Creator Channel',
    quote: 'Our reels finally felt sharp. Captions, cuts, sound, everything worked better for Indian audiences.',
  },
  {
    name: 'Rahul Mishra',
    company: 'Startup Founder',
    quote: 'SL Graphics gave us a logo and visual system that made the brand feel serious from day one.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="snap-section flex min-h-[80vh] items-center bg-[var(--bg)] py-24">
      <div className="container-x">
        <ScrollReveal className="mb-16 text-center">
          <h2 className="font-display text-7xl uppercase leading-none text-[var(--text)] md:text-[80px]">
            CLIENTS DON&apos;T LIE.
          </h2>
          <div className="mt-4 text-xl text-[var(--gold)]" aria-label="5 star rating">
            ★★★★★
          </div>
        </ScrollReveal>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.06}>
              <figure className="border-t border-[var(--border)] pt-8">
                <div className="mb-6 text-[var(--gold)]" aria-label="5 star rating">
                  ★★★★★
                </div>
                <blockquote className="text-[17px] italic leading-relaxed text-[rgba(242,240,236,0.65)]">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-8">
                  <div className="font-display text-sm uppercase text-[var(--text)]">{testimonial.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--muted)]">{testimonial.company}</div>
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
