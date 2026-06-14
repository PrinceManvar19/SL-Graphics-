'use client'

import { useEffect, useRef } from 'react'

type GridDot = {
  x: number
  y: number
  ox: number
  oy: number
  vx: number
  vy: number
  radius: number
  color: string
  accent: boolean
}

type Planet = {
  orbit: number
  radius: number
  speed: number
  angle: number
  color: string
  atmosphere?: string
  trail: Array<{ x: number; y: number }>
}

const GRID_SIZE = 20
const GRAVITY_RADIUS = 90
const POINTER_RADIUS = 130
const ACCENT_COLOR = '#E53935'

export function InkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const context = canvas.getContext('2d')
    if (!context) return

    let width = 0
    let height = 0
    let dots: GridDot[] = []
    let planets: Planet[] = []
    let frame = 0
    let previousTime = performance.now()
    let isPointerInside = false
    const pointer = { x: 0, y: 0 }

    const buildScene = () => {
      const padding = Math.max(22, Math.min(width, height) * 0.07)
      const stepX = (width - padding * 2) / (GRID_SIZE - 1)
      const stepY = (height - padding * 2) / (GRID_SIZE - 1)
      const accentIndexes = new Set([17, 42, 68, 93, 126, 159, 188, 231, 274, 307, 348, 386])
      const grayTones = ['#ccc', '#aaa', '#777']

      dots = []
      for (let row = 0; row < GRID_SIZE; row += 1) {
        for (let column = 0; column < GRID_SIZE; column += 1) {
          const index = row * GRID_SIZE + column
          const x = padding + column * stepX
          const y = padding + row * stepY
          const accent = accentIndexes.has(index)
          dots.push({
            x,
            y,
            ox: x,
            oy: y,
            vx: 0,
            vy: 0,
            radius: accent ? 4 : 2.5,
            color: accent ? ACCENT_COLOR : grayTones[(row + column * 2) % grayTones.length],
            accent,
          })
        }
      }

      const orbitScale = Math.min(1, (Math.min(width, height) - 48) / 370)
      planets = [
        { orbit: 52 * orbitScale, radius: 2.4, speed: 1.18, angle: 0.4, color: '#9b8f83', trail: [] },
        { orbit: 82 * orbitScale, radius: 3.5, speed: 0.82, angle: 2.1, color: '#d2a66f', trail: [] },
        { orbit: 115 * orbitScale, radius: 4.2, speed: 0.62, angle: 4.2, color: '#4d86bd', atmosphere: 'rgba(77,134,189,0.24)', trail: [] },
        { orbit: 148 * orbitScale, radius: 3.2, speed: 0.49, angle: 1.3, color: '#b85f45', trail: [] },
        { orbit: 185 * orbitScale, radius: 7, speed: 0.34, angle: 3.25, color: '#d29a55', trail: [] },
      ]
    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      buildScene()
    }

    const render = (now: number) => {
      const delta = Math.min((now - previousTime) / 16.667, 2)
      previousTime = now
      const centerX = width / 2
      const centerY = height / 2
      context.clearRect(0, 0, width, height)

      planets.forEach((planet) => {
        planet.angle += planet.speed * 0.008 * delta
        const x = centerX + Math.cos(planet.angle) * planet.orbit
        const y = centerY + Math.sin(planet.angle) * planet.orbit
        planet.trail.push({ x, y })
        if (planet.trail.length > 38) planet.trail.shift()
      })

      dots.forEach((dot) => {
        planets.forEach((planet) => {
          const position = planet.trail[planet.trail.length - 1]
          if (!position) return
          const dx = position.x - dot.x
          const dy = position.y - dot.y
          const distance = Math.hypot(dx, dy)
          if (distance > 0 && distance < GRAVITY_RADIUS) {
            const force = (1 - distance / GRAVITY_RADIUS) * 0.28 * planet.radius * 0.9
            dot.vx += (dx / distance) * force * delta
            dot.vy += (dy / distance) * force * delta
          }
        })

        if (isPointerInside) {
          const dx = dot.x - pointer.x
          const dy = dot.y - pointer.y
          const distance = Math.hypot(dx, dy)
          const influenceRadius = dot.accent ? POINTER_RADIUS * 1.35 : POINTER_RADIUS

          if (distance > 0 && distance < influenceRadius) {
            const force = (1 - distance / influenceRadius) * (dot.accent ? 2.2 : 1.5)
            dot.vx += (dx / distance) * force * delta
            dot.vy += (dy / distance) * force * delta
          }
        }

        dot.vx += (dot.ox - dot.x) * 0.09 * delta
        dot.vy += (dot.oy - dot.y) * 0.09 * delta
        dot.vx *= Math.pow(0.72, delta)
        dot.vy *= Math.pow(0.72, delta)
        dot.x += dot.vx * delta
        dot.y += dot.vy * delta

        const displacement = Math.min(Math.hypot(dot.x - dot.ox, dot.y - dot.oy) / 24, 1)
        context.beginPath()
        context.globalAlpha = dot.accent ? 0.72 + displacement * 0.28 : 0.55
        context.fillStyle = dot.color
        context.arc(dot.x, dot.y, dot.radius * (1 + displacement * 0.5), 0, Math.PI * 2)
        context.fill()
      })

      planets.forEach((planet) => {
        context.beginPath()
        context.globalAlpha = 0.06
        context.strokeStyle = '#111111'
        context.lineWidth = 0.5
        context.arc(centerX, centerY, planet.orbit, 0, Math.PI * 2)
        context.stroke()

        planet.trail.forEach((point, index) => {
          const progress = index / Math.max(planet.trail.length - 1, 1)
          context.beginPath()
          context.globalAlpha = progress * 0.35
          context.fillStyle = planet.color
          context.arc(point.x, point.y, Math.max(0.5, planet.radius * 0.5 * progress), 0, Math.PI * 2)
          context.fill()
        })

        const position = planet.trail[planet.trail.length - 1]
        if (!position) return
        if (planet.atmosphere) {
          context.beginPath()
          context.globalAlpha = 1
          context.strokeStyle = planet.atmosphere
          context.lineWidth = 2
          context.arc(position.x, position.y, planet.radius + 3, 0, Math.PI * 2)
          context.stroke()
        }
        context.beginPath()
        context.globalAlpha = 1
        context.fillStyle = planet.color
        context.arc(position.x, position.y, planet.radius, 0, Math.PI * 2)
        context.fill()
      })

      const pulse = 0.15 + (Math.sin(now * 0.003) + 1) * 0.1
      context.beginPath()
      context.globalAlpha = pulse
      context.strokeStyle = ACCENT_COLOR
      context.lineWidth = 4
      context.arc(centerX, centerY, 12, 0, Math.PI * 2)
      context.stroke()
      context.beginPath()
      context.globalAlpha = 1
      context.fillStyle = ACCENT_COLOR
      context.arc(centerX, centerY, 7, 0, Math.PI * 2)
      context.fill()

      context.globalAlpha = 1
      frame = window.requestAnimationFrame(render)
    }

    const updatePointer = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect()
      pointer.x = event.clientX - bounds.left
      pointer.y = event.clientY - bounds.top
    }

    const handlePointerEnter = (event: PointerEvent) => {
      updatePointer(event)
      isPointerInside = true
    }

    const handlePointerMove = (event: PointerEvent) => {
      updatePointer(event)
    }

    const handlePointerLeave = () => {
      isPointerInside = false
    }

    const observer = new ResizeObserver(resize)
    observer.observe(canvas)
    canvas.addEventListener('pointerenter', handlePointerEnter)
    canvas.addEventListener('pointermove', handlePointerMove)
    canvas.addEventListener('pointerleave', handlePointerLeave)
    resize()
    frame = window.requestAnimationFrame(render)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(frame)
      canvas.removeEventListener('pointerenter', handlePointerEnter)
      canvas.removeEventListener('pointermove', handlePointerMove)
      canvas.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return (
    <div className="hero-logo-wrap particle-grid-visual solar-grid-panel" aria-label="Animated solar system bending a dot grid">
      <canvas ref={canvasRef} className="particle-grid-canvas" />
      <span className="particle-grid-label">ORBIT / MOTION / IMPACT</span>
      <span className="particle-grid-corner" aria-hidden="true" />
    </div>
  )
}
