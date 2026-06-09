'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: ['Visual Identity', 'Digital Design', 'Motion Graphics', 'Campaign Design'],
    Company: ['About Us', 'Our Team', 'Blog', 'Careers'],
    Legal: ['Privacy Policy', 'Terms of Service', 'Cookie Policy'],
  }

  return (
    <footer className="relative bg-black border-t border-primary-dark/30">
      <div className="container-x py-16 md:py-20">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 pb-12 border-b border-primary-dark/30">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="flex items-center gap-3 mb-4 group">
              <Image
                src="/sl-logo.svg"
                alt="SL Graphic"
                width={32}
                height={32}
                className="w-8 h-8 group-hover:scale-110 transition-transform"
              />
              <span className="font-display text-lg uppercase tracking-widest group-hover:text-primary-light transition-colors">
                SL
              </span>
            </Link>
            <p className="text-white/60 font-tech text-sm leading-relaxed">
              Bold. Angular. Cinematic. We craft creative solutions that dominate.
            </p>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map((column, idx) => (
            <motion.div
              key={column[0]}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
            >
              <h4 className="font-display text-sm uppercase tracking-wider mb-4">
                {column[0]}
              </h4>
              <ul className="space-y-2">
                {(column[1] as string[]).map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-primary-light transition-colors font-tech text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.p
            className="text-white/50 font-tech text-sm text-center md:text-left"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            © {currentYear} SL Graphic. All rights reserved.
          </motion.p>

          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {['Instagram', 'Twitter', 'LinkedIn', 'Dribbble'].map((social) => (
              <a
                key={social}
                href="#"
                className="text-white/60 hover:text-primary-light transition-colors font-tech text-xs uppercase tracking-wider"
              >
                {social}
              </a>
            ))}
          </motion.div>

          <motion.a
            href="#"
            className="text-primary-light hover:text-primary transition-colors font-tech text-sm uppercase tracking-wider"
            whileHover={{ y: -3 }}
          >
            ↑ Back to top
          </motion.a>
        </div>
      </div>
    </footer>
  )
}
