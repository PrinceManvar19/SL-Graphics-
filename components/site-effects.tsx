'use client'

import { useEffect, useRef, useState } from 'react'

export function SiteEffects() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const transitionRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)
  const target = useRef({ x: -100, y: -100 })
  const current = useRef({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    let frame = 0

    const animateCursor = () => {
      current.current.x += (target.current.x - current.current.x) * 0.18
      current.current.y += (target.current.y - current.current.y) * 0.18

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`
      }

      frame = window.requestAnimationFrame(animateCursor)
    }

    const updateCursor = (event: MouseEvent) => {
      const node = event.target as HTMLElement | null
      const interactive = Boolean(node?.closest('a, button, input, textarea, select'))

      if (current.current.x < -50) current.current.x = event.clientX
      if (current.current.y < -50) current.current.y = event.clientY

      target.current.x = event.clientX
      target.current.y = event.clientY
      setHovering(interactive)
    }

    const updateScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight
      const progress = max > 0 ? (window.scrollY / max) * 100 : 0
      progressRef.current?.style.setProperty('--progress', `${progress}%`)
      setShowTop(window.scrollY > 500)
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

      if (!overlay || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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

    animateCursor()
    updateScroll()

    window.addEventListener('mousemove', updateCursor)
    window.addEventListener('scroll', updateScroll, { passive: true })
    document.addEventListener('click', handleInternalNav)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', updateCursor)
      window.removeEventListener('scroll', updateScroll)
      document.removeEventListener('click', handleInternalNav)
    }
  }, [])

  return (
    <>
      <div ref={progressRef} className="scroll-progress" />
      <div ref={transitionRef} className="page-transition" />
      <div ref={cursorRef} className={`cursor-dot ${hovering ? 'is-hovering' : ''}`} />
      <a
        href="#top"
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 grid h-10 w-10 place-items-center rounded-[4px] bg-[var(--brand)] text-xl leading-none text-white transition-all duration-500 hover:bg-[var(--brand-bright)] ${
          showTop ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        ↑
      </a>
    </>
  )
}
