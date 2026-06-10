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
    <section className="bg-[#111111] py-28 md:py-40">
      <div className="container-x">
        <ScrollReveal className="mb-20 text-center">
          <h2 className="font-display text-6xl leading-none tracking-[-0.06em] text-[#E8FF00] md:text-8xl">
            Clients Don&apos;t Lie.
          </h2>
        </ScrollReveal>

        <div className="grid gap-10 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.06}>
              <figure className="border-t border-[#1E1E1E] pt-8">
                <div className="mb-6 text-[#E8FF00]" aria-label="5 star rating">
                  ★★★★★
                </div>
                <blockquote className="text-xl leading-relaxed text-[#F0EDE8]">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-8 text-sm uppercase tracking-[0.15em] text-[#555555]">
                  {testimonial.name} · {testimonial.company}
                </figcaption>
              </figure>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
