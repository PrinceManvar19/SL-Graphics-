'use client'

import { MessageCircle } from 'lucide-react'
import { useEffect, useState } from 'react'
import { CharReveal } from './char-reveal'
import { InkCanvas } from './ink-canvas'
import { MarqueeSection } from './marquee-section'

const stats = [
  { value: 200, suffix: '+', label: 'Projects', duration: 1500 },
  { value: 50, suffix: '+', label: 'Brands', duration: 1200 },
  { value: 5, suffix: '★', label: 'Rating', duration: 1000 },
]

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3)
}

export function HeroSection() {
  const [values, setValues] = useState(stats.map(() => 0))

  useEffect(() => {
    let frame = 0
    const start = window.performance.now() + 1200

    const tick = (now: number) => {
      const next = stats.map((stat) => {
        const elapsed = Math.max(0, now - start)
        const progress = Math.min(elapsed / stat.duration, 1)
        return Math.round(easeOutCubic(progress) * stat.value)
      })

      setValues(next)

      if (next.some((value, index) => value < stats[index].value)) {
        frame = window.requestAnimationFrame(tick)
      }
    }

    frame = window.requestAnimationFrame(tick)

    return () => window.cancelAnimationFrame(frame)
  }, [])

  return (
    <section id="hero" className="hero-light snap-section relative flex min-h-screen flex-col overflow-hidden pt-16">
      <div className="container-x grid flex-1 items-center gap-12 py-12 lg:grid-cols-[58%_42%] lg:py-10">
        <div className="relative z-10">
          <p className="hero-eyebrow label mb-7">CREATIVE STUDIO / UP, INDIA</p>

          <h1 className="font-display uppercase leading-[0.84]">
            <CharReveal text="VISUALS" as="span" className="hero-line block text-[56px] text-[var(--text)] md:text-[110px] xl:text-[140px]" />
            <CharReveal text="THAT SELL." as="span" className="hero-line is-red block text-[56px] text-[var(--brand)] md:text-[110px] xl:text-[140px]" delay={0.24} />
            <CharReveal text="LOGOS · BRANDS · REELS" as="span" className="hero-subline mt-6 block text-[18px] leading-none md:text-[22px]" delay={0.58} />
          </h1>

          <div className="hero-stats mt-10 flex max-w-xl divide-x divide-[var(--border)]">
            {stats.map((stat, index) => (
              <div key={stat.label} className="hero-stat pr-8 pl-8 first:pl-0">
                <div className="font-display text-4xl leading-none text-[var(--brand)]">
                  {values[index]}
                  {stat.suffix}
                </div>
                <div className="mt-2 text-xs font-medium uppercase tracking-[0.16em] text-[var(--secondary)]">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#work"
              data-cursor="hover"
              className="hero-cta inline-flex h-12 items-center bg-[var(--brand)] px-7 text-sm font-medium text-white transition duration-300 hover:scale-[1.02] hover:bg-[var(--brand-hover)]"
            >
              View Our Work <span aria-hidden="true" className="ml-2">&rarr;</span>
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              data-cursor="hover"
              className="hero-cta inline-flex h-12 items-center gap-2 border border-[var(--border)] px-6 text-sm font-medium text-[#111111] transition-colors duration-300 hover:border-[#111111]"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="relative flex min-h-[260px] items-center justify-center lg:min-h-[520px]">
          <InkCanvas />
        </div>
      </div>
      <MarqueeSection />
    </section>
  )
}
