'use client'

import { useEffect, useRef, useState } from 'react'

export function SiteEffects() {
  const progressRef = useRef<HTMLDivElement>(null)
  const [showTop, setShowTop] = useState(false)
  const [whatsAppVisible, setWhatsAppVisible] = useState(false)

  useEffect(() => {
    let lastScroll = window.scrollY
    const timers = [window.setTimeout(() => setWhatsAppVisible(true), 800)]

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

    return () => {
      timers.forEach(window.clearTimeout)
      window.removeEventListener('scroll', updateScroll)
      scrollObserver.disconnect()
      navObserver.disconnect()
    }
  }, [])

  return (
    <>
      <div ref={progressRef} className="scroll-progress" />
      <a
        href="https://wa.me/91XXXXXXXXXX"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
        className={`floating-whatsapp ${whatsAppVisible ? 'is-visible' : ''}`}
      >
        <span className="wa-tooltip">Chat with us!</span>
        <i className="fa-brands fa-whatsapp text-[26px]" style={{ color: 'rgb(255, 255, 255)' }} aria-hidden="true" />
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
