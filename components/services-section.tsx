'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'

const services = [
  {
    title: 'Visual Identity',
    description: 'Logos, branding systems, and visual languages that command attention and define market position.',
    icon: '◆',
  },
  {
    title: 'Digital Design',
    description: 'Web design, UI/UX, and interactive experiences that convert vision into digital reality.',
    icon: '■',
  },
  {
    title: 'Motion Graphics',
    description: 'Cinematic animations and motion design that bring concepts to life with stunning impact.',
    icon: '▲',
  },
  {
    title: 'Campaign Design',
    description: 'Strategic creative campaigns that dominate across all channels and touchpoints.',
    icon: '✦',
  },
  {
    title: 'Packaging Design',
    description: 'Product packaging that stands out on shelves and creates memorable brand experiences.',
    icon: '●',
  },
  {
    title: 'Art Direction',
    description: 'Creative direction and visual storytelling for brands ready to make their mark.',
    icon: '★',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-x">
        {/* Section Header */}
        <ScrollReveal className="mb-16">
          <div className="max-w-2xl">
            <motion.span className="text-primary-light uppercase tracking-widest text-sm font-tech">
              What We Do
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-display mt-4 mb-6 text-balance">
              Services That Deliver
            </h2>
            <p className="text-lg text-white/60 font-tech">
              From concept to execution, we provide comprehensive creative services designed to elevate your brand.
            </p>
          </div>
        </ScrollReveal>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <motion.div
                className="group relative p-6 md:p-8 border border-primary-dark/30 rounded-sm glass hover:border-primary-light/50 transition-all duration-300"
                whileHover={{ y: -5, boxShadow: '0 0 30px rgba(204, 0, 0, 0.2)' }}
              >
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <motion.div
                    className="text-4xl mb-4 text-primary-light"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-xl font-display mb-3 uppercase tracking-wider text-balance">
                    {service.title}
                  </h3>

                  <p className="text-white/70 font-tech text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <motion.div
                    className="h-0.5 bg-primary-light mt-4"
                    initial={{ width: 0 }}
                    whileHover={{ width: '100%' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
