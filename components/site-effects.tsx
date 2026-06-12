'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[26px] w-[26px]" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M5.2 19.2 6.3 15A7.7 7.7 0 1 1 9 17.7l-3.8 1.5Z" />
      <path d="M9.4 8.6c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.3.1.5-.1.7l-.4.5c-.1.2-.1.3 0 .5.4.8 1.2 1.6 2.1 2.1.2.1.4.1.5-.1l.6-.7c.2-.2.4-.2.7-.1l1.5.8c.3.1.4.3.4.6 0 .7-.5 1.4-1.1 1.6-.6.3-2.7.2-4.9-1.7-2.2-1.9-3-4.2-2.8-4.9.1-.3.3-.7.6-.9Z" />
    </svg>
  )
}

export function SiteEffects() {
  const transitionRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const overlayTopRef = useRef<HTMLDivElement>(null)
  const overlayBottomRef = useRef<HTMLDivElement>(null)
  const [showTop, setShowTop] = useState(false)
  const [whatsAppVisible, setWhatsAppVisible] = useState(false)

  useEffect(() => {
    let lastScroll = window.scrollY
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    window.setTimeout(() => {
      overlayTopRef.current?.classList.add('open')
      overlayBottomRef.current?.classList.add('open')
      document.documentElement.classList.add('site-loaded')
    }, prefersReducedMotion ? 0 : 900)
    window.setTimeout(() => document.documentElement.classList.add('loader-done'), prefersReducedMotion ? 0 : 1550)
    window.setTimeout(() => setWhatsAppVisible(true), prefersReducedMotion ? 0 : 3000)

    const updateScroll = () => {
      const current = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? (current / max) * 100 : 0
      const nav = document.querySelector<HTMLElement>('[data-site-nav]')

      progressRef.current?.style.setProperty('--progress', `${progress}%`)
      setShowTop(current > 500)

      if (nav) {
        nav.style.transform = current > lastScroll && current > 100 ? 'translateY(-100%)' : 'translateY(0)'
      }

      lastScroll = current
    }

    const handleInternalNav = (event: MouseEvent) => {
      const link = (event.target as HTMLElement | null)?.closest('a[href^="#"]') as HTMLAnchorElement | null
      if (!link) return

      const id = link.getAttribute('href')
      if (!id || id === '#') return

      const destination = document.querySelector(id)
      if (!destination) return

      event.preventDefault()
      const overlay = transitionRef.current

      if (!overlay || prefersReducedMotion) {
        destination.scrollIntoView({ behavior: 'smooth' })
        return
      }

      overlay.classList.remove('is-leaving')
      overlay.classList.add('is-entering')

      window.setTimeout(() => {
        destination.scrollIntoView({ behavior: 'instant', block: 'start' })
        overlay.classList.remove('is-entering')
        overlay.classList.add('is-leaving')
      }, 400)

      window.setTimeout(() => overlay.classList.remove('is-leaving'), 820)
    }

    const scrollObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view')
        })
      },
      { threshold: 0.15 },
    )

    document.querySelectorAll<HTMLElement>('.scroll-animate, .animate-children, .process-step, .process-line').forEach((node) => {
      scrollObserver.observe(node)
    })

    const navObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = entry.target.id
          document.querySelectorAll('[data-nav-link]').forEach((link) => link.classList.remove('is-active'))
          document.querySelector(`[data-nav-link="${id}"]`)?.classList.add('is-active')
        })
      },
      { threshold: 0.5 },
    )

    document.querySelectorAll<HTMLElement>('section[id]').forEach((section) => navObserver.observe(section))

    updateScroll()
    window.addEventListener('scroll', updateScroll, { passive: true })
    document.addEventListener('click', handleInternalNav)

    return () => {
      window.removeEventListener('scroll', updateScroll)
      document.removeEventListener('click', handleInternalNav)
      scrollObserver.disconnect()
      navObserver.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={progressRef} className="scroll-progress" />
      <div ref={transitionRef} className="page-transition" />
      <div className="page-overlay" aria-hidden="true">
        <div ref={overlayTopRef} className="overlay-top" />
        <div className="loader-logo">
          <div className="loader-glow" />
          <div className="loader-ring" />
          <Image src="/sl-logo.png" alt="" width={160} height={160} priority />
          <p className="loader-name">SL GRAPHICS</p>
        </div>
        <div ref={overlayBottomRef} className="overlay-bottom" />
      </div>
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className={`floating-whatsapp ${whatsAppVisible ? 'is-visible' : ''}`}
      >
        <span className="wa-tooltip">Chat with us!</span>
        <WhatsAppIcon />
      </a>
      <a
        href="#top"
        aria-label="Back to top"
        className={`fixed bottom-6 right-24 z-50 grid h-10 w-10 place-items-center bg-[var(--brand)] text-xl leading-none text-white transition-all duration-500 hover:bg-[var(--brand-hover)] ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        &uarr;
      </a>
    </>
  )
}
