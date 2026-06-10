'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ScrollReveal } from './scroll-reveal'

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '' })
    }, 3000)
  }

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden">
      <div className="container-x">
        <ScrollReveal className="mb-16">
          <div className="max-w-2xl">
            <span className="text-primary-light uppercase tracking-widest text-sm font-tech">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-display mt-4 mb-6 text-balance">
              Let&apos;s Create Together
            </h2>
            <p className="text-lg text-white/60 font-tech">
              Got a project? Drop a message or WhatsApp us directly — we respond fast.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ScrollReveal>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 bg-white/5 border border-primary-dark/30 rounded-sm text-white placeholder-white/40 font-tech focus:outline-none focus:border-primary-light focus:bg-white/10 transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-6 py-3 bg-white/5 border border-primary-dark/30 rounded-sm text-white placeholder-white/40 font-tech focus:outline-none focus:border-primary-light focus:bg-white/10 transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <input
                  type="text"
                  name="company"
                  placeholder="Company (Optional)"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-6 py-3 bg-white/5 border border-primary-dark/30 rounded-sm text-white placeholder-white/40 font-tech focus:outline-none focus:border-primary-light focus:bg-white/10 transition-all duration-300"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-6 py-3 bg-white/5 border border-primary-dark/30 rounded-sm text-white placeholder-white/40 font-tech focus:outline-none focus:border-primary-light focus:bg-white/10 transition-all duration-300 resize-none"
                />
              </motion.div>

              <motion.button
                type="submit"
                className="w-full px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-black font-display uppercase tracking-wider rounded-sm glow-lg"
                whileHover={{ scale: 1.02, boxShadow: '0 0 50px rgba(204, 0, 0, 0.6)' }}
                whileTap={{ scale: 0.98 }}
              >
                {submitted ? 'Message Sent!' : 'Send Message'}
              </motion.button>
            </form>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="space-y-8">
              <motion.div
                className="p-6 border border-primary-dark/30 glass rounded-sm group"
                whileHover={{ borderColor: 'rgba(255, 34, 0, 0.5)' }}
              >
                <h3 className="font-display text-lg uppercase tracking-wider mb-2 group-hover:text-primary-light transition-colors">
                  Email
                </h3>
                <a
                  href="mailto:hello@slgraphics.in"
                  className="text-white/70 hover:text-primary-light transition-colors font-tech"
                >
                  hello@slgraphics.in
                </a>
              </motion.div>

              <motion.div
                className="p-6 border border-primary-dark/30 glass rounded-sm group"
                whileHover={{ borderColor: 'rgba(255, 34, 0, 0.5)' }}
              >
                <h3 className="font-display text-lg uppercase tracking-wider mb-2 group-hover:text-primary-light transition-colors">
                  Phone
                </h3>
                <a
                  href="tel:+9198XXXXXXXX"
                  className="text-white/70 hover:text-primary-light transition-colors font-tech"
                >
                  +91 98XXX XXXXX
                </a>
              </motion.div>

              <motion.div
                className="p-6 border border-primary-dark/30 glass rounded-sm group"
                whileHover={{ borderColor: 'rgba(255, 34, 0, 0.5)' }}
              >
                <h3 className="font-display text-lg uppercase tracking-wider mb-2 group-hover:text-primary-light transition-colors">
                  Location
                </h3>
                <p className="text-white/70 font-tech">
                  Uttar Pradesh, India
                </p>
              </motion.div>

              <motion.a
                href="https://wa.me/91XXXXXXXXXX"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 w-full px-6 py-4 border border-green-600/40 bg-green-950/20 text-green-400 font-tech text-sm uppercase tracking-wider rounded-sm hover:bg-green-950/40 hover:border-green-500/60 transition-all"
                whileHover={{ scale: 1.01 }}
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.28-1.39a9.85 9.85 0 0 0 4.76 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.51 2 12.04 2Zm5.78 14.17c-.24.68-1.39 1.3-1.95 1.38-.5.08-1.14.12-1.84-.12-.42-.13-.97-.31-1.66-.61-2.92-1.26-4.82-4.2-4.97-4.39-.14-.2-1.19-1.59-1.19-3.03s.75-2.15 1.02-2.44c.27-.29.59-.36.78-.36h.56c.18.01.42-.07.66.5.24.58.84 2.01.91 2.16.07.14.12.31.02.5-.1.2-.14.31-.29.48-.14.17-.31.38-.44.51-.14.14-.3.29-.13.58.17.29.76 1.25 1.63 2.02 1.12.99 2.06 1.3 2.35 1.44.29.15.46.13.63-.07.19-.22.73-.85.92-1.14.2-.29.39-.24.66-.15.27.1 1.73.82 2.03.97.29.14.49.22.56.34.07.12.07.7-.17 1.38Z" />
                </svg>
                Chat on WhatsApp
              </motion.a>

              <div className="border-t border-primary-dark/30 pt-8 space-y-4">
                <p className="text-white/60 font-tech text-sm">
                  Follow us on social media for the latest creative inspiration.
                </p>
                <div className="flex gap-4">
                  {['Instagram', 'YouTube', 'WhatsApp'].map((social) => (
                    <motion.a
                      key={social}
                      href="#"
                      className="text-primary-light hover:text-primary transition-colors font-tech text-sm uppercase tracking-wider"
                      whileHover={{ scale: 1.1 }}
                    >
                      {social}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
