'use client'

import { useState } from 'react'
import { ScrollReveal } from './scroll-reveal'

const projects = [
  { title: 'Radhe Traders', type: 'Wholesale Brand', category: 'Logo', icon: 'SL', height: 'md:row-span-2', gradient: 'from-[#E8FF00] via-[#5b6400] to-[#111111]' },
  { title: 'Viral Reels Pack', type: 'Creator Studio', category: 'Video', icon: '▶', height: '', gradient: 'from-[#7B2CBF] via-[#2a123d] to-[#111111]' },
  { title: 'Diwali Campaign', type: 'Retail Campaign', category: 'Print', icon: '✦', height: '', gradient: 'from-[#E8FF00] via-[#7a4d00] to-[#111111]' },
  { title: 'CloudFit Brand', type: 'Fitness Startup', category: 'Brand', icon: 'CF', height: 'md:row-span-2', gradient: 'from-[#F0EDE8] via-[#334155] to-[#111111]' },
  { title: 'Highway Billboard', type: 'Real Estate', category: 'Print', icon: '◉', height: '', gradient: 'from-[#0EA5E9] via-[#064e3b] to-[#111111]' },
  { title: 'Wedding Film Edit', type: 'Film Production', category: 'Video', icon: '◼', height: '', gradient: 'from-[#EC4899] via-[#4c1d3f] to-[#111111]' },
]

const filters = ['All', 'Logo', 'Video', 'Print', 'Brand']

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredProjects = projects.filter((project) => activeFilter === 'All' || project.category === activeFilter)

  return (
    <section id="work" className="py-28 md:py-40">
      <div className="container-x">
        <ScrollReveal className="mb-12 grid gap-8 md:grid-cols-[0.35fr_1fr]">
          <p className="label">/ Selected Work</p>
          <div>
            <h2 className="font-display max-w-4xl text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
              Work That Moves People.
            </h2>
            <div className="mt-10 flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`border px-4 py-2 text-xs font-medium uppercase tracking-[0.15em] transition-colors duration-500 ${
                    activeFilter === filter
                      ? 'border-[#E8FF00] bg-[#E8FF00] text-[#0A0A0A]'
                      : 'border-[#1E1E1E] text-[#555555] hover:border-[#E8FF00] hover:text-[#E8FF00]'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid auto-rows-[260px] grid-cols-1 gap-5 md:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <ScrollReveal key={project.title} delay={index * 0.04} className={project.height}>
              <article className="group flex h-full flex-col border border-[#1E1E1E] bg-[#111111] transition-transform duration-500 hover:scale-[1.02] hover:border-[#E8FF00]">
                <div className={`relative min-h-0 flex-1 bg-gradient-to-br ${project.gradient}`}>
                  <div className="absolute inset-0 grid place-items-center font-display text-7xl text-[#F0EDE8]/80">
                    {project.icon}
                  </div>
                  <div className="absolute inset-0 flex items-end justify-start bg-[#0A0A0A]/70 p-6 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <span className="text-sm font-medium uppercase tracking-[0.15em] text-[#E8FF00]">
                      View Project →
                    </span>
                  </div>
                </div>
                <div className="border-t border-[#1E1E1E] p-5">
                  <h3 className="text-lg font-bold">{project.title}</h3>
                  <p className="mt-1 text-xs uppercase tracking-[0.15em] text-[#555555]">{project.type}</p>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
