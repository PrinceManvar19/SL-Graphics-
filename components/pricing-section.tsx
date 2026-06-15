import { CharReveal } from './char-reveal'
import { ScrollReveal } from './scroll-reveal'

const pricing = [
  { service: 'Logo Design', price: '₹2,999', delivery: '3–5 days' },
  { service: 'Brand Identity', price: '₹7,999', delivery: '7–10 days' },
  { service: 'Poster / Banner', price: '₹999', delivery: '24–48 hrs' },
  { service: 'Reel / Video Edit', price: '₹1,499', delivery: '48–72 hrs' },
]

export function PricingSection() {
  return (
    <section id="pricing" className="snap-section bg-[var(--surface-alt)] py-24">
      <div className="container-x">
        <ScrollReveal className="mb-14 grid gap-6 md:grid-cols-[0.32fr_1fr]">
          <p className="label">/ PRICING</p>
          <h2 className="font-display max-w-4xl text-6xl uppercase leading-[0.92] md:text-7xl">
            <CharReveal text="SIMPLE PRICING." as="span" className="block text-[var(--text)]" />
            <CharReveal text="NO SURPRISES." as="span" className="block text-[var(--brand)]" delay={0.12} />
          </h2>
        </ScrollReveal>

        <div className="grid gap-5 md:grid-cols-2">
          {pricing.map((item, index) => (
            <ScrollReveal key={item.service} delay={index * 0.06}>
              <article className="flex min-h-[280px] h-full flex-col border border-[#333333] bg-[#111111] p-7 text-white">
                <p className="text-xs uppercase tracking-[0.16em] text-white/40">{String(index + 1).padStart(2, '0')}</p>
                <h3 className="mt-8 font-display text-4xl uppercase leading-none text-white">{item.service}</h3>
                <p className="mt-8 text-xs uppercase tracking-[0.16em] text-white/50">Starting from</p>
                <p className="mt-2 font-display text-4xl text-[var(--brand)]">{item.price}</p>
                <p className="mt-3 w-fit rounded-full bg-[rgba(224,32,32,0.16)] px-3 py-1 text-[10px] font-medium uppercase tracking-[0.14em] text-[var(--brand)]">Delivery: {item.delivery}</p>
                <a
                  href="#contact"
                  data-cursor="hover"
                  className="mt-auto pt-8 text-sm font-medium uppercase tracking-[0.12em] text-white transition-colors hover:text-[var(--brand)]"
                >
                  Get Quote →
                </a>
              </article>
            </ScrollReveal>
          ))}
        </div>
        <p className="mt-5 text-sm text-[var(--secondary)]">*Prices vary based on scope. Final quote shared after a brief call.</p>
      </div>
    </section>
  )
}
