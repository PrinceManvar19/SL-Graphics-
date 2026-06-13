'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export function IntroLoader() {
  const [visible, setVisible] = useState(true)
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    if (window.sessionStorage.getItem('introSeen')) {
      setVisible(false)
      document.documentElement.classList.add('site-loaded', 'loader-done')
      return
    }

    window.sessionStorage.setItem('introSeen', 'true')
    const exitTimer = window.setTimeout(() => setExiting(true), 1700)
    const doneTimer = window.setTimeout(() => {
      setVisible(false)
      document.documentElement.classList.add('site-loaded', 'loader-done')
    }, 2200)

    return () => {
      window.clearTimeout(exitTimer)
      window.clearTimeout(doneTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div className={`intro-loader ${exiting ? 'is-exiting' : ''}`} aria-hidden="true">
      <div className="intro-loader-content">
        <span className="intro-loader-line" />
        <span className="intro-loader-logo-wrap">
          <Image src="/sl-logo-cutout.png" alt="" width={90} height={90} priority className="intro-loader-logo" />
        </span>
        <p className="intro-loader-name">SL GRAPHICS</p>
        <span className="intro-loader-dot" />
      </div>
    </div>
  )
}
