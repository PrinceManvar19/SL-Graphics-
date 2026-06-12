'use client'

import { useState } from 'react'
import { CharReveal } from './char-reveal'
import { ScrollReveal } from './scroll-reveal'

type Project = {
  title: string
  type: string
  category: 'Logo' | 'Video' | 'Poster' | 'Brand'
  gradient: string
  initials?: string
}

const projects: Project[] = [
  { title: 'Radhe Traders', type: 'Wholesale Brand', category: 'Logo', initials: 'RT', gradient: 'linear-gradient(135deg, #1A0505, #3D0A0A)' },
  { title: 'Viral Reels Pack', type: 'Creator Studio', category: 'Video', gradient: 'linear-gradient(135deg, #050A1A, #0A1A3D)' },
  { title: 'Diwali Campaign', type: 'Retail Poster', category: 'Poster', gradient: 'linear-gradient(135deg, #051A05, #0A3D0A)' },
  { title: 'CloudFit Identity', type: 'Fitness Startup', category: 'Brand', gradient: 'linear-gradient(135deg, #0F051A, #1A0A3D)' },
  { title: 'Highway Banner', type: 'Real Estate', category: 'Poster', gradient: 'linear-gradient(135deg, #1A100A, #3D2010)' },
  { title: 'Wedding Film Edit', type: 'Film Production', category: 'Video', gradient: 'linear-gradient(135deg, #050F1A, #0A2040)' },
]

const filters = ['All', 'Logo', 'Video', 'Poster', 'Brand']

function ProjectForeground({ project }: { project: Project }) {
  if (project.category === 'Logo') {
    return <div className="font-display text-[88px] leading-none text-white/82 md:text-[104px]">{project.initials}</div>
  }

  if (project.category === 'Video') {
    return (
      <div className="grid h-20 w-20 place-items-center rounded-full border border-white/30 bg-white/10 text-[34px] text-white backdrop-blur-sm">
        <span className="translate-x-1">▶</span>
      </div>
    )
  }

  if (project.category === 'Poster') {
    return (
      <div className="absolute inset-8 border border-white/45">
        <div className="absolute left-4 top-4 h-10 w-16 border-t border-l border-white/35" />
        <div className="absolute bottom-4 right-4 h-10 w-16 border-r border-b border-white/35" />
      </div>
    )
  }

  return (
    <div className="relative h-24 w-24">
      <div className="absolute inset-0 rotate-45 border border-white/35 bg-white/10" />
      <div className="absolute left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--brand)]" />
      <div className="absolute left-1/2 top-1/2 h-4 w-16 -translate-x-1/2 -translate-y-1/2 bg-white/80" />
    </div>
  )
}

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filteredProjects = projects.filter((project) => activeFilter === 'All' || project.category === activeFilter)

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
              <article className="portfolio-card group overflow-hidden border border-[var(--border)] bg-white">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="card-visual absolute inset-0" style={{ background: project.gradient }}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,240,236,0.14),transparent_58%)]" />
                    <div className="absolute inset-0 grid place-items-center">
                      <ProjectForeground project={project} />
                    </div>
                  </div>
                  <div className="card-overlay">
                    <span className="text-sm font-medium text-white">View Project →</span>
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
