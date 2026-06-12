'use client'

import { useEffect, useRef } from 'react'

type Dot = {
  originX: number
  originY: number
  currentX: number
  currentY: number
  radius: number
  opacity: number
  color: string
  isAccent: boolean
}

const GRID_GAP = 28
const DOT_COLOR = '#000000'
const ACCENT_COLOR = '#e8192c'

export function InkCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let width = 0
    let height = 0
    let dots: Dot[] = []
    let animationFrame = 0
    let previousTime = window.performance.now()
    let lastPointerMove = previousTime
    let isPointerInside = false

    const pointer = { x: 0, y: 0 }
    const cursor = { x: 0, y: 0, opacity: 0 }

    const createGrid = () => {
      const columns = Math.max(1, Math.floor(width / GRID_GAP))
      const rows = Math.max(1, Math.floor(height / GRID_GAP))
      const offsetX = (width - (columns - 1) * GRID_GAP) / 2
      const offsetY = (height - (rows - 1) * GRID_GAP) / 2
      const nextDots: Dot[] = []

      for (let row = 0; row < rows; row += 1) {
        for (let column = 0; column < columns; column += 1) {
          const isRhythmDot = column % 7 === 0 && row % 7 === 0
          const originX = offsetX + column * GRID_GAP
          const originY = offsetY + row * GRID_GAP
          nextDots.push({
            originX,
            originY,
            currentX: originX,
            currentY: originY,
            radius: isRhythmDot ? 3.5 : 2,
            opacity: isRhythmDot ? 0.35 : 0.18,
            color: DOT_COLOR,
            isAccent: false,
          })
        }
      }

      const accentCount = Math.min(4, nextDots.length)
      const availableIndexes = nextDots.map((_, index) => index)
      for (let index = 0; index < accentCount; index += 1) {
        const choice = Math.floor(Math.random() * availableIndexes.length)
        const dot = nextDots[availableIndexes.splice(choice, 1)[0]]
        dot.radius = 3
        dot.opacity = 0.7
        dot.color = ACCENT_COLOR
        dot.isAccent = true
      }

      dots = nextDots
    }

    const resize = () => {
      const bounds = canvas.getBoundingClientRect()
      width = bounds.width
      height = bounds.height
      const dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      context.setTransform(dpr, 0, 0, dpr, 0, 0)
      createGrid()

      pointer.x = width / 2
      pointer.y = height / 2
      cursor.x = pointer.x
      cursor.y = pointer.y

      if (reducedMotion) drawStaticGrid()
    }

    const drawDot = (dot: Dot, opacity = dot.opacity) => {
      context.beginPath()
      context.globalAlpha = opacity
      context.fillStyle = dot.color
      context.arc(dot.currentX, dot.currentY, dot.radius, 0, Math.PI * 2)
      context.fill()
    }

    function drawStaticGrid() {
      context.clearRect(0, 0, width, height)
      dots.forEach((dot) => drawDot(dot))
      context.globalAlpha = 1
    }

    const render = (now: number) => {
      const delta = Math.min(40, now - previousTime)
      previousTime = now
      const isIdle = !isPointerInside || now - lastPointerMove >= 3000
      const waveAge = (now % 5000) / 1000
      const waveRadius = waveAge * 120

      context.clearRect(0, 0, width, height)

      dots.forEach((dot) => {
        let targetX = dot.originX
        let targetY = dot.originY
        let opacity = dot.opacity

        if (!isIdle) {
          const dx = dot.originX - pointer.x
          const dy = dot.originY - pointer.y
          const distance = Math.hypot(dx, dy)
          const influenceRadius = dot.isAccent ? 240 : 120
          const maxPush = dot.isAccent ? 50 : 30

          if (distance < influenceRadius) {
            const push = (1 - distance / influenceRadius) * maxPush
            const safeDistance = Math.max(distance, 0.001)
            targetX += (dx / safeDistance) * push
            targetY += (dy / safeDistance) * push
          }
        } else {
          const centerDistance = Math.hypot(dot.originX - width / 2, dot.originY - height / 2)
          const distanceFromWave = centerDistance - waveRadius
          if (Math.abs(distanceFromWave) < 42) {
            const waveProgress = (distanceFromWave + 42) / 84
            const wave = Math.sin(waveProgress * Math.PI)
            targetY -= wave * 8
            if (dot.isAccent) opacity = 0.7 + wave * 0.3
          }
        }

        dot.currentX += (targetX - dot.currentX) * 0.12
        dot.currentY += (targetY - dot.currentY) * 0.12
        drawDot(dot, opacity)
      })

      const cursorEase = 1 - Math.exp(-delta / 80)
      cursor.x += (pointer.x - cursor.x) * cursorEase
      cursor.y += (pointer.y - cursor.y) * cursorEase
      cursor.opacity += ((isPointerInside ? 0.6 : 0) - cursor.opacity) * 0.14

      if (cursor.opacity > 0.01) {
        context.beginPath()
        context.globalAlpha = cursor.opacity
        context.strokeStyle = ACCENT_COLOR
        context.lineWidth = 1.5
        context.arc(cursor.x, cursor.y, 6, 0, Math.PI * 2)
        context.stroke()
      }

      context.globalAlpha = 1
      animationFrame = window.requestAnimationFrame(render)
    }

    const handlePointerEnter = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect()
      pointer.x = event.clientX - bounds.left
      pointer.y = event.clientY - bounds.top
      cursor.x = pointer.x
      cursor.y = pointer.y
      isPointerInside = true
      lastPointerMove = window.performance.now()
    }

    const handlePointerMove = (event: PointerEvent) => {
      const bounds = canvas.getBoundingClientRect()
      pointer.x = event.clientX - bounds.left
      pointer.y = event.clientY - bounds.top
      lastPointerMove = window.performance.now()
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

    if (!reducedMotion) animationFrame = window.requestAnimationFrame(render)

    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(animationFrame)
      canvas.removeEventListener('pointerenter', handlePointerEnter)
      canvas.removeEventListener('pointermove', handlePointerMove)
      canvas.removeEventListener('pointerleave', handlePointerLeave)
    }
  }, [])

  return (
    <div className="hero-logo-wrap particle-grid-visual" aria-label="Interactive SL Graphics particle grid">
      <canvas ref={canvasRef} className="particle-grid-canvas" />
      <span className="particle-grid-label">FORM / MOTION / IMPACT</span>
      <span className="particle-grid-corner" aria-hidden="true" />
    </div>
  )
}
