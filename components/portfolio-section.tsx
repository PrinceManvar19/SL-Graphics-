'use client'

import { useState } from 'react'
import { CharReveal } from './char-reveal'
import { ScrollReveal } from './scroll-reveal'

type Category = 'logo' | 'video' | 'poster' | 'brand'

type Project = {
  title: string
  type: string
  category: Category
}

const projects: Project[] = [
  { title: 'Radhe Traders', type: 'Wholesale Brand', category: 'logo' },
  { title: 'Viral Reels Pack', type: 'Creator Studio', category: 'video' },
  { title: 'Diwali Campaign', type: 'Retail Poster', category: 'poster' },
  { title: 'CloudFit Identity', type: 'Fitness Startup', category: 'brand' },
  { title: 'Highway Banner', type: 'Real Estate', category: 'poster' },
  { title: 'Wedding Film Edit', type: 'Film Production', category: 'video' },
]

const filters = ['all', 'logo', 'video', 'poster', 'brand'] as const

function ProjectVisual({ title }: { title: string }) {
  if (title === 'Radhe Traders') {
    return (
      <div className="absolute inset-0 grid place-items-center bg-[#1a0a0a] bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:10px_10px]">
        <div className="relative h-28 w-36" aria-label="RT monogram">
          <span className="absolute left-2 top-2 h-24 w-20 border-[10px] border-[#f5f0e8]" />
          <span className="absolute right-2 top-2 h-10 w-24 bg-[#f5f0e8]" />
          <span className="absolute bottom-2 right-9 h-24 w-10 bg-[#f5f0e8]" />
          <span className="absolute inset-0 grid place-items-center font-display text-6xl font-bold tracking-[-0.08em] text-[#1a0a0a]">RT</span>
        </div>
      </div>
    )
  }

  if (title === 'Viral Reels Pack') {
    return (
      <div className="absolute inset-0 grid place-items-center bg-[#050d1a]">
        <div className="relative grid h-28 w-28 place-items-center">
          {[0, 1, 2].map((index) => (
            <span key={index} className={`video-pulse video-pulse-${index} absolute h-20 w-20 rounded-full border border-[#3b8bd4]`} />
          ))}
          <svg viewBox="0 0 64 64" className="relative z-10 h-16 w-16" aria-label="Play">
            <path d="M23 16 49 32 23 48Z" fill="#3b8bd4" />
          </svg>
        </div>
      </div>
    )
  }

  if (title === 'Diwali Campaign') {
    return (
      <div className="absolute inset-0 grid place-items-center bg-[#071a0f]">
        <div className="grid h-[75%] w-[70%] place-items-center border border-[#d4af37]">
          <div className="grid grid-cols-2 gap-7">
            {[0, 1, 2, 3].map((index) => (
              <span key={index} className={`h-10 w-10 rotate-45 border border-[#d4af37] ${index % 2 === 0 ? 'bg-[#d4af37]' : ''}`} />
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (title === 'CloudFit Identity') {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 bg-[#0d0a1a]">
        <div className="relative h-20 w-20 rotate-45 border-2 border-[#7f77dd]">
          <span className="absolute left-1/2 top-1/2 h-px w-28 -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-[#7f77dd]" />
        </div>
        <div className="flex gap-3">
          <span className="h-4 w-4 rounded-full bg-[#5d55b8]" />
          <span className="h-4 w-4 rounded-full bg-[#7f77dd]" />
          <span className="h-4 w-4 rounded-full bg-[#aaa4f0]" />
        </div>
        <span className="text-[10px] uppercase tracking-[0.28em] text-[#c8c6d3]">GT Walsheim</span>
      </div>
    )
  }

  if (title === 'Highway Banner') {
    return (
      <div className="absolute inset-0 grid place-items-center bg-[#120d04]">
        <div className="flex h-[40%] w-[85%] flex-col justify-center gap-4 border border-[#c97d2e] px-8">
          <span className="h-3 w-[70%] bg-[#c97d2e]/60" />
          <span className="h-3 w-[50%] bg-[#c97d2e]/60" />
          <span className="h-3 w-[30%] bg-[#c97d2e]/60" />
        </div>
      </div>
    )
  }

  return (
    <div className="absolute inset-0 grid place-items-center bg-[#04081a]">
      <div className="flex w-[86%] border-y border-[#e8d5b0] py-4">
        {[0, 1, 2, 3, 4].map((index) => (
          <span key={index} className={`film-frame film-frame-${index} aspect-[4/3] flex-1 border border-[#e8d5b0] bg-[#e8d5b0]/10`} />
        ))}
      </div>
    </div>
  )
}

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>('all')
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
            <div className="mt-8 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  data-cursor="hover"
                  className={`rounded-[4px] border px-4 py-2 text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                    activeFilter === filter
                      ? 'border-[var(--brand)] bg-[var(--brand)] text-white'
                      : 'border-[var(--border)] text-[var(--muted)] hover:border-[var(--brand)] hover:text-[var(--text)]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.04}>
              <article data-category={project.category} className="portfolio-card group overflow-hidden border border-[var(--border)] bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="card-visual absolute inset-0">
                    <ProjectVisual title={project.title} />
                  </div>
                  <div className="card-overlay">
                    <span className="text-sm font-medium text-white">View Project &rarr;</span>
                  </div>
                </div>
                <div className="border-t border-[var(--border)] p-5">
                  <h3 className="text-[15px] font-medium text-[var(--text)]">{project.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[var(--muted)]">{project.type}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
