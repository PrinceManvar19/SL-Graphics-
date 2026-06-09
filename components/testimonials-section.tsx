'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'

const testimonials = [
  {
    name: 'Alexandra Chen',
    company: 'TechVision Inc.',
    quote: 'SL Graphic transformed our brand identity. The results exceeded our expectations.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    company: 'FilmWorks Studio',
    quote: 'Their creative direction elevated our entire production. Truly exceptional work.',
    rating: 5,
  },
  {
    name: 'Sofia Rodriguez',
    company: 'Luxury Brands Co.',
    quote: 'The attention to detail and bold creative vision sets them apart from others.',
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-x">
        {/* Section Header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-primary-light uppercase tracking-widest text-sm font-tech">
            Client Feedback
          </span>
          <h2 className="text-4xl md:text-6xl font-display mt-4 mb-6 text-balance">
            What Clients Say
          </h2>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={testimonial.name} delay={index * 0.1}>
              <motion.div
                className="relative p-6 md:p-8 border border-primary-dark/30 glass rounded-sm group"
                whileHover={{
                  borderColor: 'rgba(255, 34, 0, 0.5)',
                  boxShadow: '0 0 30px rgba(204, 0, 0, 0.15)',
                }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-sm" />

                <div className="relative z-10">
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i} className="text-primary-light text-lg">
                        ★
                      </span>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/80 font-tech text-lg italic mb-6 leading-relaxed">
                    "{testimonial.quote}"
                  </p>

                  {/* Author */}
                  <div className="border-t border-primary-dark/20 pt-4">
                    <p className="font-display text-white uppercase tracking-wider">
                      {testimonial.name}
                    </p>
                    <p className="text-white/50 font-tech text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
