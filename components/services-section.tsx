'use client'

import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'

const services = [
  {
    title: 'Logo Design',
    description: 'Distinctive, memorable logos that capture your brand identity — from minimalist marks to bold illustrative emblems.',
    icon: '✦',
    tag: 'Identity',
  },
  {
    title: 'Brand Identity',
    description: 'Complete branding systems — color palettes, typography, brand guidelines, and visual language that stays consistent across every touchpoint.',
    icon: '◈',
    tag: 'Branding',
  },
  {
    title: 'Poster Design',
    description: 'High-impact posters for events, promotions, and campaigns — designed to stop the scroll and demand attention.',
    icon: '▣',
    tag: 'Print & Digital',
  },
  {
    title: 'Banner Design',
    description: 'Eye-catching banners for social media, websites, hoardings, and outdoor advertising that convert visibility into engagement.',
    icon: '◉',
    tag: 'Advertising',
  },
  {
    title: 'Short-Form Video Editing',
    description: 'Reels, Shorts, and TikToks edited for maximum retention — snappy cuts, motion text, sound design, and trending aesthetics.',
    icon: '▶',
    tag: 'Video',
  },
  {
    title: 'Long-Form Video Editing',
    description: 'YouTube videos, brand films, and documentary-style content edited with cinematic precision — colour grading, music sync, and storytelling.',
    icon: '◼',
    tag: 'Video',
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-x">
        <ScrollReveal className="mb-16">
          <div className="max-w-2xl">
            <motion.span className="text-primary-light uppercase tracking-widest text-sm font-tech">
              What We Do
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-display mt-4 mb-6 text-balance">
              What We Create
            </h2>
            <p className="text-lg text-white/60 font-tech">
              From a logo that turns heads to a reel that goes viral — we do it all.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ScrollReveal key={service.title} delay={index * 0.1}>
              <motion.div
                className="group relative overflow-hidden p-6 md:p-8 rounded-sm bg-gradient-to-br from-white/[0.03] to-transparent border border-white/[0.06] hover:border-red-500/40 transition-all duration-300 after:absolute after:inset-0 after:bg-gradient-to-br after:from-white/5 after:via-transparent after:to-transparent after:translate-x-[-100%] group-hover:after:translate-x-[100%] after:transition-transform after:duration-700"
                whileHover={{ y: -5, boxShadow: '0 0 30px rgba(204, 0, 0, 0.2)' }}
              >
                <span className="absolute top-4 right-4 text-[10px] font-tech uppercase tracking-widest text-red-400/70 border border-red-900/30 px-2 py-0.5 rounded-full">
                  {service.tag}
                </span>
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative z-10">
                  <motion.div
                    className="text-4xl mb-4 text-primary-light"
                    animate={{ rotate: [0, 5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {service.icon}
                  </motion.div>

                  <h3 className="text-xl font-display mb-3 uppercase tracking-wider text-balance pr-20">
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
