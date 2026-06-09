'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedGlowButtonProps {
  children: ReactNode
  onClick?: () => void
  className?: string
  href?: string
  external?: boolean
}

export function AnimatedGlowButton({
  children,
  onClick,
  className = '',
  href,
  external = false,
}: AnimatedGlowButtonProps) {
  const baseClasses = `
    relative px-6 py-3 font-display text-sm uppercase tracking-wider
    transition-all duration-300 btn-glow
    ${className}
  `

  const content = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 bg-gradient-to-r from-[#CC0000] to-[#FF2200] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </motion.button>
  )

  if (href) {
    return (
      <a 
        href={href} 
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    )
  }

  return content
}
