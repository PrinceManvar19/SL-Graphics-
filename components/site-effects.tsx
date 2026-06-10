'use client'

import { useEffect, useState } from 'react'

export function SiteEffects() {
  const [cursor, setCursor] = useState({ x: -100, y: -100, hovering: false })
  const [showTop, setShowTop] = useState(false)

  useEffect(() => {
    const updateCursor = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null
      const hovering = Boolean(target?.closest('a, button, input, textarea, select'))

      setCursor({ x: event.clientX, y: event.clientY, hovering })
    }

    const updateScroll = () => setShowTop(window.scrollY > 500)

    window.addEventListener('mousemove', updateCursor)
    window.addEventListener('scroll', updateScroll, { passive: true })
    updateScroll()

    return () => {
      window.removeEventListener('mousemove', updateCursor)
      window.removeEventListener('scroll', updateScroll)
    }
  }, [])

  return (
    <>
      <div
        className={`cursor-dot ${cursor.hovering ? 'is-hovering' : ''}`}
        style={{ transform: `translate3d(${cursor.x}px, ${cursor.y}px, 0) translate(-50%, -50%)` }}
      />
      <a
        href="#top"
        aria-label="Back to top"
        className={`fixed bottom-6 right-6 z-50 grid h-10 w-10 place-items-center border border-[#E8FF00] text-[#E8FF00] transition-all duration-500 hover:bg-[#E8FF00] hover:text-[#0A0A0A] ${
          showTop ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        ↑
      </a>
    </>
  )
}
