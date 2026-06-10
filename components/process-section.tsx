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
    <section id="process" className="relative py-28 md:py-40">
      <div className="container-x">
        <ScrollReveal className="mb-20 grid gap-8 md:grid-cols-[0.35fr_1fr]">
          <p className="label">/ How We Work</p>
          <h2 className="font-display max-w-4xl text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Five Steps. Zero Confusion.
          </h2>
        </ScrollReveal>

        <div className="relative">
          <div className="process-line absolute left-1/2 top-0 hidden h-full w-px bg-[#1E1E1E] md:block" />
          <div className="space-y-20">
            {steps.map((step, index) => {
              const reverse = index % 2 === 1

              return (
                <ScrollReveal key={step.number} delay={index * 0.05}>
                  <div className="grid items-center gap-8 md:grid-cols-2 md:gap-20">
                    <div className={reverse ? 'md:order-2 md:text-right' : ''}>
                      <div className="font-display text-[96px] leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:1px_#555555] md:text-[120px]">
                        {step.number}
                      </div>
                    </div>
                    <div className={reverse ? 'md:order-1' : ''}>
                      <h3 className="font-display text-4xl leading-none tracking-[-0.04em] md:text-5xl">
                        {step.title}
                      </h3>
                      <p className="mt-5 max-w-xl text-[#555555]">{step.description}</p>
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
