'use client'

import Image from 'next/image'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { useState } from 'react'
import { CharReveal } from './char-reveal'
import { ScrollReveal } from './scroll-reveal'

type Category = 'logo' | 'video' | 'poster' | 'brand'

export type Project = {
  title: string
  type: string
  category: Category
  image: string
  alt: string
}

interface PortfolioSectionProps {
  projects: Project[]
}

const filters = ['all', 'logo', 'video', 'poster', 'brand'] as const

export function PortfolioSection({ projects }: PortfolioSectionProps) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('all')
  const reduceMotion = useReducedMotion()
  const filteredProjects = projects.filter((project) => activeFilter === 'all' || project.category === activeFilter)

  return (
    <section id="work" className="snap-section min-h-screen bg-[var(--surface-alt)] py-24">
      <div className="container-x">
        <ScrollReveal className="animate-children mb-10 grid gap-6 md:grid-cols-[0.32fr_1fr]">
          <p className="label">/ SELECTED WORK</p>
          <div>
            <h2 className="font-display max-w-4xl text-6xl uppercase leading-[0.92] md:text-7xl">
              <CharReveal text="WORK THAT" as="span" className="block text-[var(--text)]" />
              <CharReveal text="SPEAKS." as="span" className="block text-[var(--brand)]" delay={0.1} />
            </h2>
            <div className="mt-8 flex flex-wrap gap-2" aria-label="Filter portfolio projects">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  data-cursor="hover"
                  aria-pressed={activeFilter === filter}
                  className={`rounded-[4px] border px-4 py-2 text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                    activeFilter === filter
                      ? 'border-[var(--brand)] bg-[var(--brand)] text-white'
                      : 'border-[var(--border)] bg-white text-[var(--secondary)] hover:border-[var(--brand)] hover:text-[var(--text)]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <motion.div layout={!reduceMotion} className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.article
                layout={!reduceMotion}
                key={project.title}
                initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={reduceMotion ? undefined : { opacity: 0, y: 20, scale: 0.96 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.35, delay: index * 0.03, ease: [0.22, 1, 0.36, 1] }}
                data-category={project.category}
                className="portfolio-card group overflow-hidden border border-[var(--border)] bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.alt}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="card-overlay">
                    <span className="text-sm font-medium text-white">Project preview</span>
                  </div>
                </div>
                <div className="border-t border-[var(--border)] p-5">
                  <p className="text-xs uppercase tracking-[0.15em] text-[var(--brand)]">{project.type}</p>
                  <h3 className="mt-1 text-[15px] font-medium text-[var(--text)]">{project.title}</h3>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
