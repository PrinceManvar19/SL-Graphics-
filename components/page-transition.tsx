'use client'

import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

type Phase = 'idle' | 'entering' | 'holding' | 'leaving'

export function PageTransition() {
  const router = useRouter()
  const pathname = usePathname()
  const [phase, setPhase] = useState<Phase>('idle')
  const [loading, setLoading] = useState(false)
  const pendingPath = useRef<string | null>(null)

  useEffect(() => {
    if (pendingPath.current !== pathname) return
    pendingPath.current = null
    setPhase('leaving')
    const timer = window.setTimeout(() => {
      setPhase('idle')
      setLoading(false)
    }, 350)
    return () => window.clearTimeout(timer)
  }, [pathname])

  useEffect(() => {
    const timers = new Set<number>()
    const later = (callback: () => void, delay: number) => {
      const timer = window.setTimeout(callback, delay)
      timers.add(timer)
    }

    const navigate = (url: URL) => {
      setLoading(true)
      setPhase('entering')
      later(() => {
        setPhase('holding')
        later(() => {
          if (url.pathname === window.location.pathname) {
            window.history.pushState(null, '', `${url.pathname}${url.search}${url.hash}`)
            if (url.hash) document.querySelector(url.hash)?.scrollIntoView({ block: 'start' })
            setPhase('leaving')
            later(() => {
              setPhase('idle')
              setLoading(false)
            }, 350)
          } else {
            pendingPath.current = url.pathname
            router.push(`${url.pathname}${url.search}${url.hash}`)
          }
        }, 150)
      }, 350)
    }

    const handleClick = (event: MouseEvent) => {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
      const anchor = (event.target as Element | null)?.closest('a[href]') as HTMLAnchorElement | null
      if (!anchor || anchor.target === '_blank' || anchor.hasAttribute('download')) return
      const url = new URL(anchor.href, window.location.href)
      if (url.origin !== window.location.origin || (url.pathname === window.location.pathname && !url.hash)) return
      event.preventDefault()
      navigate(url)
    }

    const startLoading = () => setLoading(true)
    const stopLoading = () => setLoading(false)
    document.addEventListener('click', handleClick)
    window.addEventListener('sl-loading-start', startLoading)
    window.addEventListener('sl-loading-end', stopLoading)

    return () => {
      timers.forEach(window.clearTimeout)
      document.removeEventListener('click', handleClick)
      window.removeEventListener('sl-loading-start', startLoading)
      window.removeEventListener('sl-loading-end', stopLoading)
    }
  }, [router])

  return (
    <>
      <div className={`navigation-progress ${loading ? 'is-loading' : ''}`} aria-hidden="true" />
      <div className={`transition-panel phase-${phase}`} aria-hidden="true">
        <div className="transition-mark">
          <span className="transition-mark-line" />
          <Image src="/sl-logo-cutout.png" alt="" width={50} height={50} className="transition-logo" />
        </div>
      </div>
    </>
  )
}
