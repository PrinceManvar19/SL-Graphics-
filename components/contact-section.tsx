'use client'

import { FormEvent, useEffect, useRef, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { CONTACT } from '@/lib/contact'
import { CharReveal } from './char-reveal'
import { ScrollReveal } from './scroll-reveal'

const details = [
  { label: 'Email', value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: 'Phone', value: CONTACT.phoneDisplay, href: CONTACT.phoneHref },
  { label: 'Availability', value: 'Working worldwide' },
  { label: 'WhatsApp', value: 'Chat on WhatsApp', href: CONTACT.whatsapp },
]

type FormStatus = 'idle' | 'sending' | 'sent' | 'error'

type FieldErrors = Partial<Record<'name' | 'email' | 'service' | 'message', string>>

interface ContactSectionProps {
  services: string[]
}

function validate(values: Record<string, string>) {
  const errors: FieldErrors = {}

  if (values.name.trim().length < 2) errors.name = 'Enter your name.'
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) errors.email = 'Enter a valid email.'
  if (!values.service) errors.service = 'Choose a service.'
  if (values.message.trim().length < 10) errors.message = 'Tell us a little more about the project.'

  return errors
}

export function ContactSection({ services }: ContactSectionProps) {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errors, setErrors] = useState<FieldErrors>({})
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
    const values = {
      name: String(formData.get('name') || ''),
      email: String(formData.get('email') || ''),
      service: String(formData.get('service') || ''),
      message: String(formData.get('message') || ''),
    }
    const nextErrors = validate(values)

    setErrors(nextErrors)
    setFormError('')
    if (Object.keys(nextErrors).length > 0) return

    setStatus('sending')
    window.dispatchEvent(new Event('sl-loading-start'))

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      })
      const result = (await response.json()) as { error?: string }

      if (!response.ok) throw new Error(result.error || 'Unable to send message')

      setStatus('sent')
      form.reset()
      resetFeedbackAfter(6000)
    } catch (error) {
      setStatus('error')
      setFormError(error instanceof Error ? error.message : 'Something went wrong.')
      resetFeedbackAfter(5000)
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

          <p className="mt-8 max-w-md text-[var(--secondary)]">
            Have a project in mind? Tell us what you are building. We will bring the visual firepower.
          </p>

          <div className="mt-12 space-y-5">
            {details.map((detail) => (
              <p key={detail.label} className="flex items-center gap-3 text-sm text-[var(--secondary)]">
                <span className="text-[var(--brand)]" aria-hidden="true">+</span>
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
            className="mt-10 inline-flex items-center gap-2 border-[1.5px] border-[var(--brand)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--brand)] transition-colors duration-300 hover:bg-[var(--brand)] hover:text-white"
          >
            <MessageCircle size={18} aria-hidden="true" />
            Chat on WhatsApp
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-7 rounded-xl border border-[var(--border)] bg-white p-8" noValidate>
            <div className="field">
              <input
                id="name"
                name="name"
                autoComplete="name"
                placeholder=" "
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? 'name-error' : undefined}
                data-cursor="hover"
                onChange={() => setErrors((current) => ({ ...current, name: undefined }))}
              />
              <label htmlFor="name">Your Name</label>
              {errors.name && <p id="name-error" className="field-error">{errors.name}</p>}
            </div>

            <div className="field">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder=" "
                aria-invalid={Boolean(errors.email)}
                aria-describedby={errors.email ? 'email-error' : undefined}
                data-cursor="hover"
                onChange={() => setErrors((current) => ({ ...current, email: undefined }))}
              />
              <label htmlFor="email">Email</label>
              {errors.email && <p id="email-error" className="field-error">{errors.email}</p>}
            </div>

            <div className="field">
              <select
                id="service"
                name="service"
                defaultValue=""
                aria-invalid={Boolean(errors.service)}
                aria-describedby={errors.service ? 'service-error' : undefined}
                data-cursor="hover"
                onChange={() => setErrors((current) => ({ ...current, service: undefined }))}
              >
                <option value="" disabled>
                  Select a service
                </option>
                {services.map((service) => (
                  <option key={service}>{service}</option>
                ))}
              </select>
              <label htmlFor="service">Service Type</label>
              {errors.service && <p id="service-error" className="field-error">{errors.service}</p>}
            </div>

            <div className="field">
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder=" "
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? 'message-error' : undefined}
                data-cursor="hover"
                onChange={() => setErrors((current) => ({ ...current, message: undefined }))}
              />
              <label htmlFor="message">Message</label>
              {errors.message && <p id="message-error" className="field-error">{errors.message}</p>}
            </div>

            <button
              type="submit"
              data-cursor="hover"
              className={`inline-flex items-center gap-3 bg-[var(--brand)] px-8 py-[14px] font-display text-lg uppercase text-white transition duration-300 hover:bg-[var(--brand-hover)] active:scale-[0.97] disabled:cursor-not-allowed disabled:opacity-70 ${
                status === 'sent' ? 'bg-[#16803a] hover:bg-[#16803a]' : ''
              }`}
              disabled={status === 'sending'}
            >
              {status === 'sending' && <span className="submit-spinner" aria-hidden="true" />}
              {(status === 'idle' || status === 'error') && 'SEND IT ->'}
              {status === 'sending' && 'Sending...'}
              {status === 'sent' && 'Sent'}
            </button>
            {status === 'sent' && (
              <p className="text-sm font-medium text-[#16803a]" role="status">
                Message sent. We will get back to you within 24 hours.
              </p>
            )}
            {formError && (
              <p className="text-sm text-[var(--brand)]" role="alert">
                {formError}{' '}
                <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="font-medium underline">
                  WhatsApp us directly -&gt;
                </a>
              </p>
            )}
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
