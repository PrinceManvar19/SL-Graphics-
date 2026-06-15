'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import { CONTACT } from '@/lib/contact'
import { CharReveal } from './char-reveal'
import { ScrollReveal } from './scroll-reveal'

const details = [
  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: 'Phone', value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
  { label: 'Availability', value: 'Working worldwide' },
  { label: 'WhatsApp', value: 'Chat on WhatsApp', href: CONTACT.whatsapp },
]

export function ContactSection() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')
  const [serviceError, setServiceError] = useState(false)
  const [formError, setFormError] = useState('')
  const feedbackTimer = useRef<number | null>(null)

  useEffect(() => {
    return () => {
      if (feedbackTimer.current) window.clearTimeout(feedbackTimer.current)
    }
  }, [])

  const resetFeedbackAfter = (delay: number) => {
    if (feedbackTimer.current) window.clearTimeout(feedbackTimer.current)
    feedbackTimer.current = window.setTimeout(() => {
      setStatus('idle')
      setFormError('')
    }, delay)
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const formData = new FormData(form)

    if (!formData.get('service')) {
      setServiceError(true)
      return
    }

    const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT
    if (!endpoint) {
      setStatus('error')
      setFormError('Something went wrong.')
      resetFeedbackAfter(3000)
      return
    }

    setServiceError(false)
    setFormError('')
    setStatus('sending')
    window.dispatchEvent(new Event('sl-loading-start'))

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })
      if (!response.ok) throw new Error('Unable to send message')
      setStatus('sent')
      form.reset()
      resetFeedbackAfter(6000)
    } catch {
      setStatus('error')
      setFormError('Something went wrong.')
      resetFeedbackAfter(3000)
    } finally {
      window.dispatchEvent(new Event('sl-loading-end'))
    }
  }

  return (
    <section id="contact" className="snap-section flex min-h-[80vh] items-center bg-[var(--surface-alt)] py-24">
      <div className="container-x grid gap-16 lg:grid-cols-[0.9fr_1fr]">
        <ScrollReveal>
          <p className="label mb-8">/ CONTACT</p>
          <h2 className="font-display max-w-xl text-6xl uppercase leading-[0.92] md:text-[56px]">
            <CharReveal text="LET'S CREATE" as="span" className="block text-[var(--text)]" />
            <CharReveal text="TOGETHER." as="span" className="block text-[var(--brand)]" delay={0.1} />
          </h2>

          <div className="mt-12 space-y-5">
            {details.map((detail) => (
              <p key={detail.label} className="flex items-center gap-3 text-sm text-[var(--secondary)]">
                <span className="text-[var(--brand)]">◆</span>
                <span className="min-w-20 text-[11px] uppercase tracking-[0.18em]">{detail.label}</span>
                {detail.href ? (
                  <a
                    href={detail.href}
                    target={detail.href.startsWith('https') ? '_blank' : undefined}
                    rel={detail.href.startsWith('https') ? 'noreferrer' : undefined}
                    data-cursor="hover"
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
            href={CONTACT.whatsapp}
            target="_blank"
            rel="noreferrer"
            data-cursor="hover"
            className="mt-10 inline-flex border-[1.5px] border-[var(--brand)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--brand)] transition-colors duration-300 hover:bg-[var(--brand)] hover:text-white"
          >
            WhatsApp CTA
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-7 rounded-xl border border-[var(--border)] bg-white p-8">
            <div className="field">
              <input id="name" name="name" required placeholder=" " data-cursor="hover" />
              <label htmlFor="name">Your Name</label>
            </div>

            <div className="field">
              <input id="email" name="email" type="email" required placeholder=" " data-cursor="hover" />
              <label htmlFor="email">Email</label>
            </div>

            <div className="field">
              <select
                id="service"
                name="service"
                defaultValue=""
                required
                aria-invalid={serviceError}
                aria-describedby={serviceError ? 'service-error' : undefined}
                onChange={() => setServiceError(false)}
                onInvalid={(event) => {
                  event.preventDefault()
                  setServiceError(true)
                }}
                data-cursor="hover"
              >
                <option value="" disabled>
                  Select a service
                </option>
                <option>Logo Design</option>
                <option>Brand Identity</option>
                <option>Poster / Banner</option>
                <option>Video Editing</option>
                <option>Full Campaign</option>
              </select>
              <label htmlFor="service">Service Type</label>
              {serviceError && <p id="service-error" className="field-error">Please select a service</p>}
            </div>

            <div className="field">
              <textarea id="message" name="message" rows={5} required placeholder=" " data-cursor="hover" />
              <label htmlFor="message">Message</label>
            </div>

            <button
              type="submit"
              data-cursor="hover"
              className={`inline-flex items-center gap-3 bg-[var(--brand)] px-8 py-[14px] font-display text-lg uppercase text-white transition duration-300 hover:bg-[var(--brand-hover)] active:scale-[0.97] ${
                status === 'sent' ? 'bg-[#22C55E] hover:bg-[#22C55E]' : ''
              }`}
              disabled={status === 'sending'}
            >
              {status === 'sending' && <span className="submit-spinner" />}
              {(status === 'idle' || status === 'error') && 'SEND IT →'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && '✓ SENT!'}
            </button>
            {status === 'sent' && (
              <p className="text-sm font-medium text-[#16803A]" role="status">
                ✓ Message sent! We&apos;ll get back to you within 24 hours.
              </p>
            )}
            {formError && (
              <p className="text-sm text-[var(--brand)]" role="alert">
                {formError}{' '}
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="font-medium underline">
                  WhatsApp us directly &rarr;
                </a>
              </p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
