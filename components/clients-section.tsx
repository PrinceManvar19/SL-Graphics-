'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'

const clients = [
  'TechVision', 'FilmWorks', 'LuxuryMark', 'GameStudios',
  'DigitalDrive', 'CinemaHub', 'BrandForce', 'CreativeFlow'
]

export function ClientsSection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden border-y border-primary-dark/30">
      <div className="container-x">
        <ScrollReveal className="text-center mb-16">
          <span className="text-primary-light uppercase tracking-widest text-sm font-tech">
            Trusted By
          </span>
          <h2 className="text-3xl md:text-5xl font-display mt-4 mb-2 text-balance">
            Industry Leaders
          </h2>
        </ScrollReveal>

        {/* Clients Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {clients.map((client, index) => (
            <ScrollReveal key={client} delay={index * 0.05}>
              <motion.div
                className="p-6 border border-primary-dark/30 glass rounded-sm flex items-center justify-center group cursor-pointer"
                whileHover={{
                  borderColor: 'rgba(255, 34, 0, 0.5)',
                  boxShadow: '0 0 20px rgba(204, 0, 0, 0.15)',
                }}
              >
                <p className="font-display text-xl md:text-2xl text-white/70 group-hover:text-primary-light transition-colors uppercase tracking-wider text-center">
                  {client}
                </p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
