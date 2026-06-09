'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'

export function CTABannerSection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-black to-primary/10" />
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container-x text-center">
        <ScrollReveal>
          <h2 className="text-4xl md:text-6xl font-display mb-6 text-balance">
            Ready to Transform Your Brand?
          </h2>
          <p className="text-lg md:text-xl text-white/70 font-tech mb-10 max-w-2xl mx-auto">
            Let&apos;s create something extraordinary together. Get in touch with our team to discuss your next project.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.a
              href="#contact"
              className="px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-black font-display uppercase tracking-wider rounded-sm glow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(204, 0, 0, 0.6)' }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Project
            </motion.a>
            <motion.a
              href="mailto:hello@slgraphic.com"
              className="px-8 py-4 border-2 border-primary-light text-primary-light font-display uppercase tracking-wider rounded-sm hover:bg-primary-light/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Email Us
            </motion.a>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  )
}
