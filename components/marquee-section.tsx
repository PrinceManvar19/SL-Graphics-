'use client'

import { motion } from 'framer-motion'

export function MarqueeSection() {
  const text = 'CREATING IMPACT • PUSHING BOUNDARIES • DESIGN THAT DOMINATES •'

  return (
    <section className="relative py-8 bg-gradient-to-r from-primary/10 via-black to-primary/10 border-y border-primary-dark/30 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: [-1000, -2000] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="text-2xl md:text-4xl font-display text-primary-light uppercase tracking-wider px-8"
          >
            {text}
          </span>
        ))}
      </motion.div>
    </section>
  )
}
