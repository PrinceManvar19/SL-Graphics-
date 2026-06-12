'use client'

import { useEffect, useState } from 'react'
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
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused) return

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length)
    }, 4000)

    return () => window.clearInterval(interval)
  }, [paused])

  return (
    <section className="snap-section flex min-h-[80vh] items-center bg-[var(--surface-alt)] py-24">
      <div className="container-x">
        <ScrollReveal className="mb-16 text-center">
          <h2 className="font-display text-7xl uppercase leading-none text-[var(--text)] md:text-[80px]">
            CLIENTS DON&apos;T LIE.
          </h2>
          <div className="mt-4 text-xl text-[var(--brand)]" aria-label="5 star rating">
            ★★★★★
          </div>
        </ScrollReveal>

        <div className="hidden gap-8 md:grid md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.15}>
              <figure className="h-full rounded-xl border border-[var(--border)] bg-white p-8">
                <div className="mb-6 text-[var(--brand)]" aria-label="5 star rating">
                  ★★★★★
                </div>
                <blockquote className="text-[17px] italic leading-relaxed text-[var(--secondary)]">
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

        <div
          className="md:hidden"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onTouchStart={() => setPaused(true)}
          onTouchEnd={() => setPaused(false)}
        >
          <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-[var(--border)] bg-white p-8">
            {testimonials.map((testimonial, index) => (
              <figure
                key={testimonial.name}
                className={`testimonial-slide absolute inset-x-8 top-8 ${
                  active === index ? 'translate-x-0 opacity-100' : 'translate-x-5 opacity-0 pointer-events-none'
                }`}
              >
                <div className="mb-6 text-[var(--brand)]" aria-label="5 star rating">
                  ★★★★★
                </div>
                <blockquote className="text-[17px] italic leading-relaxed text-[var(--secondary)]">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-8">
                  <div className="font-display text-sm uppercase text-[var(--text)]">{testimonial.name}</div>
                  <div className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--muted)]">{testimonial.company}</div>
                </figcaption>
              </figure>
            ))}
          </div>
          <div className="mt-6 flex justify-center gap-3">
            {testimonials.map((testimonial, index) => (
              <button
                key={testimonial.name}
                type="button"
                data-cursor="hover"
                className={`text-lg ${active === index ? 'text-[var(--brand)]' : 'text-[var(--muted)]'}`}
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
              >
                {active === index ? '◆' : '◇'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
