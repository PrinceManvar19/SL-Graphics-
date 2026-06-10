'use client'

import { useState } from 'react'
import { CharReveal } from './char-reveal'
import { ScrollReveal } from './scroll-reveal'

const projects = [
  { title: 'Radhe Traders', type: 'Wholesale Brand', category: 'Logo', gradient: 'linear-gradient(135deg, #1A0A09, #3D0D0A)' },
  { title: 'Viral Reels Pack', type: 'Creator Studio', category: 'Video', gradient: 'linear-gradient(135deg, #0A0D1A, #0D1A3D)' },
  { title: 'Diwali Campaign', type: 'Retail Poster', category: 'Poster', gradient: 'linear-gradient(135deg, #0D1A0A, #1A3D0D)' },
  { title: 'CloudFit Identity', type: 'Fitness Startup', category: 'Brand', gradient: 'linear-gradient(135deg, #1A0A18, #2D0A3D)' },
  { title: 'Highway Banner', type: 'Real Estate', category: 'Poster', gradient: 'linear-gradient(135deg, #1A0A09, #3D0D0A)' },
  { title: 'Wedding Film Edit', type: 'Film Production', category: 'Video', gradient: 'linear-gradient(135deg, #0A0D1A, #0D1A3D)' },
]

const filters = ['All', 'Logo', 'Video', 'Poster', 'Brand']

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All')
  const filteredProjects = projects.filter((project) => activeFilter === 'All' || project.category === activeFilter)

  return (
    <section id="work" className="snap-section min-h-screen bg-[var(--bg)] py-24">
      <div className="container-x">
        <ScrollReveal className="mb-10 grid gap-6 md:grid-cols-[0.32fr_1fr]">
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
              <article className="group overflow-hidden rounded-[8px] border border-[var(--border)] bg-[var(--surface)] transition duration-300 hover:border-[var(--brand)] hover:shadow-[0_0_24px_rgba(232,36,26,0.2)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-300 group-hover:scale-[1.04]" style={{ background: project.gradient }}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,240,236,0.1),transparent_55%)]" />
                  </div>
                  <div className="absolute inset-0 grid translate-y-full place-items-center bg-[rgba(232,36,26,0.85)] text-sm font-medium text-white transition-transform duration-300 group-hover:translate-y-0">
                    View Project →
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
