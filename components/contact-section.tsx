'use client'

import { FormEvent, useState } from 'react'
import { CharReveal } from './char-reveal'
import { ScrollReveal } from './scroll-reveal'

const details = [
  { label: 'Email', value: 'hello@slgraphics.in', href: 'mailto:hello@slgraphics.in' },
  { label: 'Phone', value: '+91 98XXX XXXXX', href: 'tel:+9198XXXXXXXX' },
  { label: 'Location', value: 'Uttar Pradesh, India' },
  { label: 'WhatsApp', value: 'Chat on WhatsApp', href: 'https://wa.me/91XXXXXXXXXX' },
]

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
    window.setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="snap-section flex min-h-[80vh] items-center bg-[var(--surface)] py-24">
      <div className="container-x grid gap-16 lg:grid-cols-[0.9fr_1fr]">
        <ScrollReveal>
          <p className="label mb-8">/ CONTACT</p>
          <h2 className="font-display max-w-xl text-6xl uppercase leading-[0.92] md:text-[56px]">
            <CharReveal text="LET'S CREATE" as="span" className="block text-[var(--text)]" />
            <CharReveal text="TOGETHER." as="span" className="block text-[var(--brand)]" delay={0.1} />
          </h2>

          <div className="mt-12 space-y-5">
            {details.map((detail) => (
              <p key={detail.label} className="flex items-center gap-3 text-sm text-[var(--muted)]">
                <span className="text-[var(--brand)]">◆</span>
                <span className="min-w-20 text-[11px] uppercase tracking-[0.18em]">{detail.label}</span>
                {detail.href ? (
                  <a
                    href={detail.href}
                    target={detail.href.startsWith('https') ? '_blank' : undefined}
                    rel={detail.href.startsWith('https') ? 'noreferrer' : undefined}
                    className="transition-colors duration-300 hover:text-[var(--text)]"
                  >
                    {detail.value}
                  </a>
                ) : (
                  <span>{detail.value}</span>
                )}
              </p>
            ))}
          </div>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex rounded-[4px] bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-transform duration-300 hover:scale-[1.02]"
          >
            WhatsApp CTA
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-7">
            <div>
              <label className="label mb-2 block" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full border-0 border-b border-[var(--border)] bg-transparent px-0 py-4 text-[var(--text)] outline-none transition-colors duration-300 placeholder:text-[var(--muted)] focus:border-[var(--brand)]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="label mb-2 block" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border-0 border-b border-[var(--border)] bg-transparent px-0 py-4 text-[var(--text)] outline-none transition-colors duration-300 placeholder:text-[var(--muted)] focus:border-[var(--brand)]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="label mb-2 block" htmlFor="serviceType">
                Service Type
              </label>
              <select
                id="serviceType"
                name="serviceType"
                defaultValue=""
                required
                className="w-full border-0 border-b border-[var(--border)] bg-[var(--surface)] px-0 py-4 text-[var(--text)] outline-none transition-colors duration-300 focus:border-[var(--brand)]"
              >
                <option value="" disabled>
                  Select one
                </option>
                <option>Logo Design</option>
                <option>Brand Identity</option>
                <option>Poster / Banner</option>
                <option>Video Editing</option>
                <option>Full Campaign</option>
              </select>
            </div>

            <div>
              <label className="label mb-2 block" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none border-0 border-b border-[var(--border)] bg-transparent px-0 py-4 text-[var(--text)] outline-none transition-colors duration-300 placeholder:text-[var(--muted)] focus:border-[var(--brand)]"
                placeholder="Tell us what you need."
              />
            </div>

            <button
              type="submit"
              className="rounded-[4px] bg-[var(--brand)] px-8 py-4 font-display text-lg uppercase text-white transition-colors duration-300 hover:bg-[var(--brand-bright)]"
            >
              {submitted ? 'SENT' : 'SEND IT →'}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
