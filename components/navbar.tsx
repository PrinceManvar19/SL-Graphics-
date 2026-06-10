'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

const navItems = ['Work', 'Services', 'Process', 'Contact']

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 40)

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })

    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 transition-all duration-500 ${
        isScrolled ? 'border-b border-[#1E1E1E] bg-[#0A0A0A]/80 backdrop-blur-md' : 'border-b border-transparent'
      }`}
    >
      <div className="container-x flex h-20 items-center justify-between">
        <Link
          href="/"
          className="font-display text-2xl tracking-[-0.08em]"
          style={{ color: '#E8FF00' }}
          aria-label="SL Graphics home"
        >
          SL
        </Link>

        <nav className="hidden items-center gap-10 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="label text-[#F0EDE8]/70 transition-colors duration-500 hover:text-[#E8FF00]"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="border border-[#E8FF00] px-5 py-2 text-xs font-medium uppercase tracking-[0.15em] text-[#E8FF00] transition-colors duration-500 hover:bg-[#E8FF00] hover:text-[#0A0A0A]"
          >
            Start Project →
          </a>
        </nav>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center md:hidden"
          onClick={() => setIsOpen((current) => !current)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
        >
          <span className="relative block h-3 w-6">
            <span className={`absolute left-0 top-0 h-px w-6 bg-[#F0EDE8] transition-transform duration-500 ${isOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`absolute bottom-0 left-0 h-px w-6 bg-[#F0EDE8] transition-transform duration-500 ${isOpen ? '-translate-y-[5px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[-1] bg-[#0A0A0A] transition-all duration-500 md:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav className="container-x flex min-h-screen flex-col justify-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-display text-6xl uppercase leading-none tracking-[-0.05em] transition-colors duration-500 hover:text-[#E8FF00]"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 w-fit border border-[#E8FF00] px-5 py-3 text-sm font-medium uppercase tracking-[0.15em] text-[#E8FF00]"
            onClick={() => setIsOpen(false)}
          >
            Start Project →
          </a>
        </nav>
      </div>
    </header>
  )
}
