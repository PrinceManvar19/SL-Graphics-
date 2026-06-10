'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Particle = {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  opacity: number
  large?: boolean
}

function CountUpStat({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const [count, setCount] = useState(value)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (prefersReducedMotion) {
      setCount(value)
      return
    }

    let frame = 0
    const totalFrames = 60
    let animationFrame = 0
    setCount(0)

    const tick = () => {
      frame += 1
      const progress = Math.min(frame / totalFrames, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))

      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick)
      }
    }

    animationFrame = requestAnimationFrame(tick)

    return () => cancelAnimationFrame(animationFrame)
  }, [value])

  return (
    <div className="bg-white/5 border border-red-900/20 rounded-sm px-6 py-5 backdrop-blur-sm">
      <div className="font-display text-5xl text-red-400 leading-none">
        {count}
        {suffix}
      </div>
      <div className="font-tech text-xs text-white/50 uppercase tracking-widest mt-2">{label}</div>
    </div>
  )
}

export function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosRef = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    let animationFrame = 0
    const particles: Particle[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticles = () => {
      particles.length = 0

      for (let i = 0; i < 120; i++) {
        const large = i < 3

        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * (prefersReducedMotion ? 0.15 : 0.7),
          vy: (Math.random() - 0.5) * (prefersReducedMotion ? 0.15 : 0.7),
          radius: large ? Math.random() * 2 + 3 : Math.random() * 1.4 + 0.4,
          opacity: large ? 0.6 : Math.random() * 0.35 + 0.15,
          large,
        })
      }
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = 'rgba(0, 0, 0, 1)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        const dx = particle.x - mousePosRef.current.x
        const dy = particle.y - mousePosRef.current.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (!prefersReducedMotion && distance > 0 && distance < 200) {
          const force = (1 - distance / 200) * 0.8
          particle.vx += (dx / distance) * force * 0.08
          particle.vy += (dy / distance) * force * 0.08
        }

        particle.vx *= 0.985
        particle.vy *= 0.985
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        const gradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.radius * (particle.large ? 6 : 2),
        )
        gradient.addColorStop(0, `rgba(255, 68, 0, ${particle.opacity})`)
        gradient.addColorStop(1, 'rgba(204, 0, 0, 0)')

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.radius * (particle.large ? 5 : 1), 0, Math.PI * 2)
        ctx.fill()
      })

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 100) {
            const opacity = 1 - distance / 100
            const gradient = ctx.createLinearGradient(particles[i].x, particles[i].y, particles[j].x, particles[j].y)
            gradient.addColorStop(0, `rgba(204, 0, 0, ${0.15 * opacity})`)
            gradient.addColorStop(1, `rgba(255, 100, 0, ${0.05 * opacity})`)
            ctx.strokeStyle = gradient
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      animationFrame = requestAnimationFrame(draw)
    }

    const handleMouseMove = (event: MouseEvent) => {
      mousePosRef.current = { x: event.clientX, y: event.clientY }
    }

    const handleMouseLeave = () => {
      mousePosRef.current = { x: -9999, y: -9999 }
    }

    resizeCanvas()
    createParticles()
    window.addEventListener('resize', resizeCanvas)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    draw()

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const taglineItems = ['Logo Design', 'Branding', 'Video Editing', 'Posters', 'Banners']

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />

      <div className="absolute inset-0 z-0 opacity-80">
        <div className="absolute inset-[-30%] bg-[conic-gradient(from_0deg,transparent,rgba(204,0,0,0.03),transparent)] animate-spin-slow" />
      </div>

      <div className="relative z-10 container-x text-center max-w-6xl mx-auto">
        <motion.div initial={{ y: 30 }} animate={{ y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            className="mb-8 flex justify-center"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <Image
              src="/sl-logo.png"
              alt="SL Graphics"
              width={128}
              height={128}
              priority
              unoptimized
              className="w-32 h-32 object-contain rounded-xl drop-shadow-[0_0_30px_rgba(204,0,0,0.6)]"
            />
          </motion.div>

          <h1 className="font-display text-6xl md:text-8xl lg:text-9xl mb-10 text-balance leading-[0.92]">
            <motion.span
              className="block text-white"
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
            >
              WHERE VISUALS
            </motion.span>
            <motion.span
              className="block text-shimmer"
              initial={{ y: 40 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              SPEAK LOUDER
            </motion.span>
          </h1>

          <motion.div
            className="mb-10 flex flex-wrap items-center justify-center gap-3 font-tech text-xs md:text-sm uppercase tracking-[0.25em] text-white/50"
            initial={{ y: 12 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
          >
            {taglineItems.map((item, index) => (
              <span key={item} className="flex items-center gap-3">
                {index > 0 && <span className="h-1 w-1 rounded-full bg-red-500/60" />}
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            className="mb-20 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            <CountUpStat value={200} suffix="+" label="Projects" />
            <CountUpStat value={50} suffix="+" label="Brands" />
            <CountUpStat value={5} suffix="★" label="Rating" />
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-6"
            initial={{ y: 16 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.a
              href="#work"
              className="group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary-light text-black font-display uppercase tracking-wider rounded-sm glow-lg"
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(204, 0, 0, 0.6)' }}
              whileTap={{ scale: 0.98 }}
            >
              View Our Work
              <svg
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </motion.a>
            <motion.a
              href="#contact"
              className="px-8 py-4 border border-red-500/50 text-primary-light font-display uppercase tracking-wider rounded-sm backdrop-blur-sm hover:bg-red-500/10 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
            >
              Start a Project →
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          className="mt-16 flex justify-center text-red-500"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2.5, repeat: Infinity }}
        >
          <svg
            className="h-14 w-8 animate-bounce"
            viewBox="0 0 32 56"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M16 4v38" />
            <path d="m7 33 9 9 9-9" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}
