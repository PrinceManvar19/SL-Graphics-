import Image from 'next/image'
import { MessageCircle } from 'lucide-react'
import { CharReveal } from './char-reveal'

const stats = [
  { value: '200+', label: 'Projects' },
  { value: '50+', label: 'Brands' },
  { value: '5★', label: 'Rating' },
]

export function HeroSection() {
  return (
    <section className="snap-section relative flex min-h-screen items-center overflow-hidden bg-[var(--bg)] pt-28">
      <div className="container-x grid min-h-[calc(100vh-7rem)] items-center gap-12 py-14 lg:grid-cols-[58%_42%]">
        <div className="relative z-10">
          <p className="label mb-7">CREATIVE STUDIO · UP, INDIA</p>

          <h1 className="font-display uppercase leading-[0.84]">
            <CharReveal text="VISUALS" as="span" className="block text-[56px] text-[var(--text)] md:text-[110px] xl:text-[140px]" />
            <CharReveal text="THAT SELL." as="span" className="block text-[56px] text-[var(--brand)] md:text-[110px] xl:text-[140px]" delay={0.08} />
            <CharReveal text="LOGOS · BRANDS · REELS" as="span" className="mt-5 block text-[28px] leading-none text-[var(--muted)]" delay={0.16} />
          </h1>

          <div className="mt-10 flex max-w-xl divide-x divide-[var(--border)]">
            {stats.map((stat) => (
              <div key={stat.label} className="pr-8 pl-8 first:pl-0">
                <div className="font-display text-4xl leading-none text-[var(--brand-bright)]">{stat.value}</div>
                <div className="mt-1 text-sm text-[var(--muted)]">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a
              href="#work"
              className="inline-flex h-12 items-center rounded-[4px] bg-[var(--brand)] px-7 text-sm font-medium text-white transition duration-300 hover:scale-[1.02] hover:bg-[var(--brand-bright)]"
            >
              View Our Work →
            </a>
            <a
              href="https://wa.me/91XXXXXXXXXX"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center gap-2 text-sm font-medium text-[var(--muted)] transition-colors duration-300 hover:text-[var(--text)]"
            >
              <MessageCircle size={18} />
              WhatsApp Us
            </a>
          </div>
        </div>

        <div className="carbon-lines relative hidden h-full min-h-[520px] items-center justify-center lg:flex">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(232,36,26,0.18)_0%,transparent_65%)]" />
          <Image
            src="/sl-logo.png"
            alt="SL Graphics logo"
            width={320}
            height={320}
            priority
            className="logo-float relative z-10 w-[320px] object-contain"
          />
        </div>
      </div>
    </section>
  )
}
