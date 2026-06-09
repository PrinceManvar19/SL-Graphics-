'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = ['Work', 'Services', 'Process', 'Contact']

  return (
    <motion.header 
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-900/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-x flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="w-10 h-10"
          >
            <Image
              src="/sl-logo.svg"
              alt="SL Graphic"
              width={40}
              height={40}
              className="w-full h-full"
            />
          </motion.div>
          <span className="font-display text-lg uppercase tracking-widest hidden sm:inline group-hover:text-primary-light transition-colors">
            SL
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-wider font-tech text-white/80 hover:text-primary-light transition-colors relative group"
              whileHover="hover"
            >
              {item}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-primary-light"
                initial={{ width: 0 }}
                variants={{
                  hover: { width: '100%' },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </nav>

        {/* CTA Button */}
        <motion.a
          href="#contact"
          className="hidden sm:block px-6 py-2 bg-gradient-to-r from-primary to-primary-light text-black font-display text-xs uppercase tracking-wider rounded-sm glow"
          whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(204, 0, 0, 0.6)' }}
          whileTap={{ scale: 0.98 }}
        >
          Get Started
        </motion.a>

        {/* Mobile Menu Button */}
        <motion.button
          onClick={toggleMenu}
          className="md:hidden flex flex-col gap-1.5 w-6 h-6"
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            className="w-full h-0.5 bg-primary-light"
            animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-full h-0.5 bg-primary-light"
            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-full h-0.5 bg-primary-light"
            animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <motion.nav
        className="md:hidden overflow-hidden bg-black/90 backdrop-blur-md border-t border-red-900/20"
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container-x py-4 flex flex-col gap-4">
          {navItems.map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-wider font-tech text-white/80 hover:text-primary-light transition-colors py-2"
              initial={{ opacity: 0, x: -20 }}
              animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setIsOpen(false)}
            >
              {item}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="px-4 py-2 bg-gradient-to-r from-primary to-primary-light text-black font-display text-xs uppercase tracking-wider rounded-sm glow mt-4"
            initial={{ opacity: 0, x: -20 }}
            animate={isOpen ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ delay: navItems.length * 0.1 }}
            onClick={() => setIsOpen(false)}
          >
            Get Started
          </motion.a>
        </div>
      </motion.nav>
    </motion.header>
  )
}
