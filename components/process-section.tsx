'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'

const steps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Deep dive into your brand, goals, and target audience to understand the vision.',
  },
  {
    number: '02',
    title: 'Strategy',
    description: 'Develop a comprehensive creative strategy that aligns with your objectives.',
  },
  {
    number: '03',
    title: 'Creation',
    description: 'Craft stunning visuals and experiences that bring the strategy to life.',
  },
  {
    number: '04',
    title: 'Refinement',
    description: 'Iterate and perfect based on feedback to ensure excellence.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-x">
        {/* Section Header */}
        <ScrollReveal className="mb-20">
          <div className="max-w-2xl">
            <motion.span className="text-primary-light uppercase tracking-widest text-sm font-tech">
              Our Approach
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-display mt-4 mb-6 text-balance">
              Process Built for Excellence
            </h2>
          </div>
        </ScrollReveal>

        {/* Process Steps */}
        <div className="space-y-12 md:space-y-16">
          {steps.map((step, index) => (
            <ScrollReveal key={step.number} delay={index * 0.1}>
              <motion.div
                className="relative grid grid-cols-1 md:grid-cols-4 gap-8 items-start"
                whileHover={{ x: 10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Step Number */}
                <motion.div
                  className="md:col-span-1"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="text-6xl md:text-7xl font-display font-bold text-primary-dark/40 mb-4">
                    {step.number}
                  </div>
                </motion.div>

                {/* Content */}
                <div className="md:col-span-3 border-l-2 border-primary-dark/30 pl-6 md:pl-8 group">
                  <h3 className="text-2xl md:text-3xl font-display mb-3 uppercase tracking-wider group-hover:text-primary-light transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-white/60 font-tech text-lg leading-relaxed">
                    {step.description}
                  </p>

                  <motion.div
                    className="h-0.5 bg-gradient-to-r from-primary to-primary-light mt-4 w-0"
                    whileHover={{ width: '60px' }}
                    transition={{ duration: 0.3 }}
                  />
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <motion.div
                    className="hidden md:block absolute left-20 top-24 w-0.5 h-24 bg-gradient-to-b from-primary to-transparent"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: index * 0.2 }}
                  />
                )}
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
