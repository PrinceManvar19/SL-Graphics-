'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'

const portfolioItems = [
  { title: 'Radhe Traders', category: 'Logo Design', description: 'Bold typographic emblem for a wholesale trading firm in UP.', color: 'from-orange-900/40 to-red-900/40' },
  { title: 'Viral Reels Pack', category: 'Short Video Editing', description: '30-reel editing series with motion captions and beat-sync cuts.', color: 'from-purple-900/40 to-red-900/40' },
  { title: 'Diwali Campaign', category: 'Poster Design', description: 'Festival campaign — 12 posters across print and social formats.', color: 'from-yellow-900/40 to-red-900/40' },
  { title: 'CloudFit Brand', category: 'Brand Identity', description: 'Logo + brand kit for a new fitness coaching startup.', color: 'from-blue-900/40 to-red-900/40' },
  { title: 'Highway Billboard', category: 'Banner Design', description: 'Large-format outdoor banner for a highway-facing real estate project.', color: 'from-green-900/40 to-red-900/40' },
  { title: 'Wedding Film Edit', category: 'Long Video Editing', description: 'Cinematic 8-minute wedding highlight with color grading and music.', color: 'from-pink-900/40 to-red-900/40' },
]

const filters = ['All', 'Logo Design', 'Video Editing', 'Poster Design', 'Brand Identity', 'Banner Design']

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredItems = portfolioItems.filter((item) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Video Editing') return item.category.includes('Video Editing')
    return item.category === activeFilter
  })

  return (
    <section id="work" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-x">
        <ScrollReveal className="mb-10">
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

        <ScrollReveal className="mb-10">
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                className={
                  activeFilter === filter
                    ? 'filter-active bg-red-600 text-white rounded-sm px-4 py-1.5 text-xs font-tech uppercase'
                    : 'text-white/50 hover:text-white px-4 py-1.5 text-xs font-tech uppercase border border-transparent hover:border-white/10 rounded-sm transition-colors'
                }
              >
                {filter}
              </button>
            ))}
          </div>
        </ScrollReveal>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                layout
                key={item.title}
                className={`group relative overflow-hidden rounded-sm border border-primary-dark/30 cursor-pointer h-full ${
                  activeFilter === 'All' && index % 5 === 0 ? 'md:col-span-2 md:row-span-2' : ''
                }`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                whileHover={{
                  borderColor: 'rgba(255, 34, 0, 0.5)',
                  boxShadow: '0 0 30px rgba(204, 0, 0, 0.2)',
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-all duration-300`} />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.12),transparent_35%)] opacity-70" />

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

                <motion.div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-5" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
