'use client'

import { useEffect, useState } from 'react'
import { ScrollReveal } from './scroll-reveal'

export type Testimonial = {
  name: string
  company: string
  quote: string
}

interface TestimonialsSectionProps {
  testimonials: Testimonial[]
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || testimonials.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const interval = window.setInterval(() => {
      setActive((current) => (current + 1) % testimonials.length)
    }, 4000)

    return () => window.clearInterval(interval)
  }, [paused, testimonials.length])

  return (
    <section className="snap-section flex min-h-[80vh] items-center bg-[var(--surface-alt)] py-24">
      <div className="container-x">
        <ScrollReveal className="mb-16 text-center">
          <p className="label mb-5">/ KIND WORDS</p>
          <h2 className="font-display text-7xl uppercase leading-none text-[var(--text)] md:text-[80px]">
            CLIENTS DON&apos;T LIE.
          </h2>
          <div className="mt-4 text-xl text-[var(--brand)]" aria-label="5 star rating">
            <span aria-hidden="true">*****</span>
          </div>
        </ScrollReveal>

        <div className="hidden gap-8 md:grid md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.15}>
              <figure className="h-full rounded-xl border border-[var(--border)] bg-white p-8">
                <div className="mb-6 text-[var(--brand)]" aria-label="5 star rating">
                  <span aria-hidden="true">*****</span>
                </div>
                <blockquote className="text-[17px] italic leading-relaxed text-[var(--secondary)]">
                  &quot;{testimonial.quote}&quot;
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
                  active === index ? 'translate-x-0 opacity-100' : 'pointer-events-none translate-x-5 opacity-0'
                }`}
              >
                <div className="mb-6 text-[var(--brand)]" aria-label="5 star rating">
                  <span aria-hidden="true">*****</span>
                </div>
                <blockquote className="text-[17px] italic leading-relaxed text-[var(--secondary)]">
                  &quot;{testimonial.quote}&quot;
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
                className={`grid h-8 w-8 place-items-center text-lg ${active === index ? 'text-[var(--brand)]' : 'text-[var(--muted)]'}`}
                onClick={() => setActive(index)}
                aria-label={`Show testimonial ${index + 1}`}
              >
                <span className={`testimonial-dot ${active === index ? 'is-active' : ''}`} aria-hidden="true" />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
