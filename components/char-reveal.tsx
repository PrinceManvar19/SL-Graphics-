'use client'

import { useEffect, useMemo, useRef } from 'react'

interface CharRevealProps {
  text: string
  as?: 'h1' | 'h2' | 'p' | 'span'
  className?: string
  delay?: number
}

export function CharReveal({ text, as: Tag = 'span', className = '', delay = 0 }: CharRevealProps) {
  const ref = useRef<HTMLElement>(null)
  const chars = useMemo(() => Array.from(text), [text])

  useEffect(() => {
    const node = ref.current
    if (!node) return

    node.classList.add('is-ready')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      node.classList.add('is-visible')
      return
    }

    const rect = node.getBoundingClientRect()
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      window.requestAnimationFrame(() => node.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          node.classList.add('is-visible')
          observer.disconnect()
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -80px 0px' },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <Tag ref={ref} className={`char-reveal ${className}`}>
      {chars.map((char, index) => (
        <span
          key={`${char}-${index}`}
          className="char"
          style={{ transitionDelay: `${delay + index * 0.02}s` }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </Tag>
  )
}
