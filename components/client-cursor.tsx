'use client'

import { useEffect } from 'react'

export function ClientCursor() {
  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    const dot = document.createElement('div')
    const ring = document.createElement('div')
    dot.className = 'custom-cursor-dot'
    ring.className = 'custom-cursor-ring'
    document.body.append(dot, ring)

    let mouseX = -100
    let mouseY = -100
    let ringX = -100
    let ringY = -100
    let frame = 0

    const updateMode = (target: EventTarget | null) => {
      const element = target instanceof Element ? target : null
      const clickable = element?.closest('a, button, .cursor-hover, [data-cursor="hover"], [role="button"]')
      const textField = element?.closest('input, textarea, [contenteditable="true"]')
      const textNode = !clickable && !textField && element && element.textContent?.trim() && !element.closest('canvas, svg')

      document.documentElement.classList.toggle('cursor-is-hovering', Boolean(clickable))
      document.documentElement.classList.toggle('cursor-is-text', Boolean(textField || textNode))
    }

    const handleMove = (event: MouseEvent) => {
      mouseX = event.clientX
      mouseY = event.clientY
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`
      document.documentElement.classList.add('cursor-is-visible')
      updateMode(event.target)
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.1
      ringY += (mouseY - ringY) * 0.1
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`
      frame = window.requestAnimationFrame(animate)
    }

    const hide = () => document.documentElement.classList.remove('cursor-is-visible')
    const show = () => document.documentElement.classList.add('cursor-is-visible')

    window.addEventListener('mousemove', handleMove, { passive: true })
    document.addEventListener('mouseleave', hide)
    document.addEventListener('mouseenter', show)
    frame = window.requestAnimationFrame(animate)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('mousemove', handleMove)
      document.removeEventListener('mouseleave', hide)
      document.removeEventListener('mouseenter', show)
      document.documentElement.classList.remove('cursor-is-visible', 'cursor-is-hovering', 'cursor-is-text')
      dot.remove()
      ring.remove()
    }
  }, [])

  return null
}
