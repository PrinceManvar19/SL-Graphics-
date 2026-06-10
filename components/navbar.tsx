'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const navItems = ['Work', 'Services', 'Process', 'Contact']

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 50)

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })

    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 border-b transition-all duration-500 bg-gradient-to-r from-black/90 via-black/85 to-black/90 ${
        isScrolled
          ? 'backdrop-blur-2xl border-red-500/30 shadow-[0_8px_40px_rgba(204,0,0,0.12)]'
          : 'backdrop-blur-xl border-red-900/20'
      }`}
      initial={false}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-red-600/50 to-transparent" />
      <div className="container-x flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <motion.div
            whileHover={{ scale: 1.08 }}
            className="rounded-lg bg-white/10 p-1"
          >
            <Image
              src="/sl-logo.png"
              alt="SL Graphics"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
            />
          </motion.div>
          <span className="flex flex-col md:flex-row md:items-end md:gap-1 leading-none group-hover:text-primary-light transition-colors">
            <span className="font-display text-xl uppercase">SL</span>
            <span className="font-tech text-xs text-white/50 tracking-[0.3em] uppercase md:mb-1">
              Graphics
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-wider font-tech text-white/80 hover:text-primary-light transition-colors relative group pb-2"
              whileHover="hover"
            >
              {item}
              <motion.span
                className="absolute bottom-0 left-0 h-0.5 bg-primary-light"
                style={{ boxShadow: '0 2px 8px rgba(255,34,0,0.8)' }}
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
          className="relative hidden sm:block px-6 py-2 bg-gradient-to-r from-primary to-primary-light text-black font-display text-xs uppercase tracking-wider rounded-sm glow before:absolute before:inset-0 before:rounded-sm before:border before:border-red-500/50 before:animate-ping"
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
            className="relative px-4 py-2 bg-gradient-to-r from-primary to-primary-light text-black font-display text-xs uppercase tracking-wider rounded-sm glow mt-4 before:absolute before:inset-0 before:rounded-sm before:border before:border-red-500/50 before:animate-ping"
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
