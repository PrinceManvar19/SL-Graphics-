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
        {/* Section Header */}
        <ScrollReveal className="mb-16">
          <div className="max-w-2xl">
            <span className="text-primary-light uppercase tracking-widest text-sm font-tech">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-6xl font-display mt-4 mb-6 text-balance">
              Let&apos;s Create Together
            </h2>
            <p className="text-lg text-white/60 font-tech">
              Have a project in mind? We&apos;d love to hear about it. Reach out and let&apos;s start a conversation.
            </p>
          </div>
        </ScrollReveal>

        {/* Contact Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
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
                {submitted ? 'Message Sent! 🎉' : 'Send Message'}
              </motion.button>
            </form>
          </ScrollReveal>

          {/* Contact Info */}
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
                  href="mailto:hello@slgraphic.com"
                  className="text-white/70 hover:text-primary-light transition-colors font-tech"
                >
                  hello@slgraphic.com
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
                  href="tel:+1234567890"
                  className="text-white/70 hover:text-primary-light transition-colors font-tech"
                >
                  +1 (234) 567-890
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
                  New York City, USA
                </p>
              </motion.div>

              <div className="border-t border-primary-dark/30 pt-8 space-y-4">
                <p className="text-white/60 font-tech text-sm">
                  Follow us on social media for the latest creative inspiration.
                </p>
                <div className="flex gap-4">
                  {['Instagram', 'Twitter', 'LinkedIn'].map((social) => (
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
