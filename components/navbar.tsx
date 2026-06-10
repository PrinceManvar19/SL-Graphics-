'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navItems = ['Work', 'Services', 'Process', 'Contact']

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const updateScroll = () => setIsScrolled(window.scrollY > 24)

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })

    return () => window.removeEventListener('scroll', updateScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-40 border-b border-[var(--border)] backdrop-blur-2xl transition-colors duration-300 ${
        isScrolled ? 'bg-[rgba(13,13,13,0.94)]' : 'bg-[rgba(13,13,13,0.9)]'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="/" aria-label="SL Graphics home" className="flex items-center">
          <Image src="/sl-logo.png" alt="SL Graphics" width={120} height={40} className="h-10 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link relative text-[11px] font-medium uppercase tracking-[0.2em] text-[var(--muted)] transition-colors duration-300 hover:text-[var(--text)]"
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="rounded-[4px] border-[1.5px] border-[var(--brand)] px-5 py-2 text-[11px] font-medium uppercase tracking-[0.18em] text-[var(--brand)] transition-colors duration-300 hover:bg-[var(--brand)] hover:text-white"
          >
            Start Project
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
            <span className={`absolute left-0 top-0 h-px w-6 bg-[var(--text)] transition-transform duration-300 ${isOpen ? 'translate-y-[6px] rotate-45' : ''}`} />
            <span className={`absolute bottom-0 left-0 h-px w-6 bg-[var(--text)] transition-transform duration-300 ${isOpen ? '-translate-y-[5px] -rotate-45' : ''}`} />
          </span>
        </button>
      </div>

      <div
        className={`fixed inset-0 z-[-1] bg-[var(--bg)] transition-all duration-300 md:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      >
        <nav className="container-x flex min-h-screen flex-col justify-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="font-display text-6xl uppercase leading-none text-[var(--text)] transition-colors duration-300 hover:text-[var(--brand)]"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-4 w-fit rounded-[4px] border border-[var(--brand)] px-5 py-3 text-sm font-medium uppercase tracking-[0.15em] text-[var(--brand)]"
            onClick={() => setIsOpen(false)}
          >
            Start Project
          </a>
        </nav>
      </div>
    </header>
  )
}
