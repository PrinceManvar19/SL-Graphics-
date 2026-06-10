'use client'

import { motion } from 'framer-motion'

const marqueeItems = [
  'LOGO DESIGN', '✦', 'BRAND IDENTITY', '◈', 'POSTER DESIGN', '◉',
  'BANNER DESIGN', '▶', 'REEL EDITING', '◼', 'VIDEO PRODUCTION', '✦',
  'SOCIAL MEDIA GRAPHICS', '◈', 'WEDDING FILMS', '◉', 'YOUTUBE EDITING', '▶',
  'BUSINESS BRANDING', '◼', 'EVENT POSTERS', '✦', 'THUMBNAIL DESIGN', '◈',
]

export function MarqueeSection() {
  return (
    <section className="relative py-8 bg-gradient-to-r from-primary/10 via-black to-primary/10 border-y border-primary-dark/30 overflow-hidden">
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
      >
        {[...marqueeItems, ...marqueeItems].map((item, index) => {
          const isSeparator = ['✦', '◈', '◉', '▶', '◼'].includes(item)

          return (
            <span
              key={`${item}-${index}`}
              className={`text-2xl md:text-4xl font-display uppercase tracking-wider px-5 ${
                isSeparator ? 'text-primary-light pulse-glow' : 'text-primary-light'
              }`}
            >
              {item}
            </span>
          )
        })}
      </motion.div>
    </section>
  )
}
