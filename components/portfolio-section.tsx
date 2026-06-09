'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'

const portfolioItems = [
  {
    title: 'TechVision Brand',
    category: 'Visual Identity',
    description: 'Complete brand overhaul for a cutting-edge SaaS platform.',
  },
  {
    title: 'Motion Masterclass',
    category: 'Motion Graphics',
    description: 'Cinematic intro sequences and animated explainer videos.',
  },
  {
    title: 'Digital Ecosystem',
    category: 'Digital Design',
    description: 'Full-scale website redesign with interactive components.',
  },
  {
    title: 'Gaming Aesthetic',
    category: 'Campaign Design',
    description: 'High-impact campaign for gaming industry client.',
  },
  {
    title: 'Luxury Packaging',
    category: 'Packaging Design',
    description: 'Premium product packaging that elevated shelf appeal.',
  },
  {
    title: 'Film Festival Identity',
    category: 'Art Direction',
    description: 'Complete creative direction for international film festival.',
  },
]

export function PortfolioSection() {
  return (
    <section id="work" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-x">
        {/* Section Header */}
        <ScrollReveal className="mb-16">
          <div className="max-w-2xl">
            <motion.span className="text-primary-light uppercase tracking-widest text-sm font-tech">
              Our Portfolio
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-display mt-4 mb-6 text-balance">
              Work That Speaks
            </h2>
            <p className="text-lg text-white/60 font-tech">
              Explore our collection of projects that showcase bold creativity and strategic thinking.
            </p>
          </div>
        </ScrollReveal>

        {/* Portfolio Grid - Masonry Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          {portfolioItems.map((item, index) => (
            <ScrollReveal key={item.title} delay={index * 0.05}>
              <motion.div
                className={`group relative overflow-hidden rounded-sm border border-primary-dark/30 glass cursor-pointer h-full ${
                  index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                whileHover={{
                  borderColor: 'rgba(255, 34, 0, 0.5)',
                  boxShadow: '0 0 30px rgba(204, 0, 0, 0.2)',
                }}
              >
                {/* Gradient Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20 group-hover:from-primary/40 group-hover:to-primary-dark/40 transition-all duration-300" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8 z-10">
                  <div>
                    <motion.span
                      className="inline-block text-xs uppercase tracking-widest text-primary-light font-tech mb-3"
                      initial={{ opacity: 0.6 }}
                      whileHover={{ opacity: 1 }}
                    >
                      {item.category}
                    </motion.span>
                  </div>

                  <div>
                    <h3 className="text-2xl md:text-3xl font-display mb-2 text-balance group-hover:text-primary-light transition-colors">
                      {item.title}
                    </h3>
                    <motion.p
                      className="text-white/60 font-tech text-sm"
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    >
                      {item.description}
                    </motion.p>
                  </div>

                  <motion.div
                    className="flex items-center gap-2 text-primary-light opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ x: -10 }}
                    whileHover={{ x: 0 }}
                  >
                    <span className="text-sm font-tech uppercase tracking-wider">View Project</span>
                    <span className="text-lg">→</span>
                  </motion.div>
                </div>

                {/* Hover Overlay */}
                <motion.div
                  className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5"
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
