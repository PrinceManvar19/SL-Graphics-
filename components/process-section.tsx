import { CharReveal } from './char-reveal'
import { ScrollReveal } from './scroll-reveal'

const steps = [
  {
    number: '01',
    title: 'Brief & Discovery',
    description: 'You share the vision, references, and goals. We map the audience before we touch the canvas.',
  },
  {
    number: '02',
    title: 'Concept & Strategy',
    description: 'We study the market, sharpen the direction, and decide what should be loud and what should be quiet.',
  },
  {
    number: '03',
    title: 'Design & Creation',
    description: 'Logos, posters, banners, edits, and films are built with intent, contrast, rhythm, and restraint.',
  },
  {
    number: '04',
    title: 'Review & Revisions',
    description: 'You review the work. We refine the details until the piece feels exact, useful, and memorable.',
  },
  {
    number: '05',
    title: 'Final Delivery',
    description: 'You get clean files for print, web, social, and handoff, ready to use across every channel.',
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="snap-section relative min-h-screen bg-[var(--surface)] py-24">
      <div className="container-x">
        <ScrollReveal className="mb-14 grid gap-6 md:grid-cols-[0.32fr_1fr]">
          <p className="label">/ PROCESS</p>
          <h2 className="font-display max-w-5xl text-6xl uppercase leading-[0.92] md:text-7xl">
            <CharReveal text="FIVE STEPS." as="span" className="block text-[var(--text)]" />
            <CharReveal text="ZERO CONFUSION." as="span" className="block text-[var(--brand)]" delay={0.1} />
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="process-line absolute left-1/2 top-0 hidden h-full w-px bg-[var(--border)] md:block" />
          <div className="space-y-10 md:space-y-4">
            {steps.map((step, index) => {
              const reverse = index % 2 === 1

              return (
                <ScrollReveal key={step.number} delay={index * 0.05}>
                  <div className="grid min-h-[128px] items-center gap-6 md:grid-cols-2 md:gap-20">
                    <div className={reverse ? 'md:order-2 md:text-left' : 'md:text-right'}>
                      <div className="font-display text-[120px] leading-none text-[rgba(232,36,26,0.08)] md:text-[160px]">
                        {step.number}
                      </div>
                    </div>
                    <div className={reverse ? 'md:order-1 md:text-right' : ''}>
                      <p className="text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--brand)]">{step.number}</p>
                      <h3 className="mt-2 font-display text-[28px] uppercase leading-none text-[var(--text)]">{step.title}</h3>
                      <p className="mt-4 max-w-xl text-[15px] leading-[1.7] text-[var(--muted)] md:ml-0 md:max-w-lg">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
