'use client'

import { FormEvent, useState } from 'react'
import { ScrollReveal } from './scroll-reveal'

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setSubmitted(true)
    event.currentTarget.reset()
    window.setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="py-28 md:py-40">
      <div className="container-x grid gap-16 lg:grid-cols-[0.9fr_1fr]">
        <ScrollReveal>
          <p className="label mb-8">/ Get In Touch</p>
          <h2 className="font-display max-w-xl text-5xl leading-[0.95] tracking-[-0.05em] md:text-7xl">
            Let&apos;s Create Together.
          </h2>

          <div className="mt-12 space-y-5 text-[#555555]">
            <p>
              <span className="mr-3 text-[#E8FF00]">01</span>
              <a href="mailto:hello@slgraphics.in" className="transition-colors duration-500 hover:text-[#E8FF00]">
                hello@slgraphics.in
              </a>
            </p>
            <p>
              <span className="mr-3 text-[#E8FF00]">02</span>
              <a href="tel:+9198XXXXXXXX" className="transition-colors duration-500 hover:text-[#E8FF00]">
                +91 98XXX XXXXX
              </a>
            </p>
            <p>
              <span className="mr-3 text-[#E8FF00]">03</span>
              Uttar Pradesh, India
            </p>
          </div>

          <a
            href="https://wa.me/91XXXXXXXXXX"
            target="_blank"
            rel="noreferrer"
            className="mt-10 inline-flex border border-[#E8FF00] px-6 py-3 text-xs font-medium uppercase tracking-[0.15em] text-[#E8FF00] transition-colors duration-500 hover:bg-[#E8FF00] hover:text-[#0A0A0A]"
          >
            WhatsApp Us →
          </a>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <label className="label mb-3 block" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full border-0 border-b border-[#1E1E1E] bg-transparent px-0 py-4 text-[#F0EDE8] outline-none transition-colors duration-500 placeholder:text-[#555555] focus:border-[#E8FF00]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="label mb-3 block" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full border-0 border-b border-[#1E1E1E] bg-transparent px-0 py-4 text-[#F0EDE8] outline-none transition-colors duration-500 placeholder:text-[#555555] focus:border-[#E8FF00]"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label className="label mb-3 block" htmlFor="projectType">
                Project Type
              </label>
              <select
                id="projectType"
                name="projectType"
                defaultValue=""
                required
                className="w-full border-0 border-b border-[#1E1E1E] bg-[#0A0A0A] px-0 py-4 text-[#F0EDE8] outline-none transition-colors duration-500 focus:border-[#E8FF00]"
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
              <label className="label mb-3 block" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                className="w-full resize-none border-0 border-b border-[#1E1E1E] bg-transparent px-0 py-4 text-[#F0EDE8] outline-none transition-colors duration-500 placeholder:text-[#555555] focus:border-[#E8FF00]"
                placeholder="Tell us what you need."
              />
            </div>

            <button
              type="submit"
              className="border border-[#E8FF00] bg-[#E8FF00] px-8 py-4 text-xs font-medium uppercase tracking-[0.15em] text-[#0A0A0A] transition-colors duration-500 hover:bg-transparent hover:text-[#E8FF00]"
            >
              {submitted ? 'Sent' : 'Send It →'}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  )
}
