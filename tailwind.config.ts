import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
        display: ['var(--font-bebas)', 'sans-serif'],
        tech: ['var(--font-rajdhani)', 'sans-serif'],
        mono: ['var(--font-space-mono)', 'monospace'],
      },
      colors: {
        primary: '#CC0000',
        'primary-light': '#FF2200',
        'primary-dark': '#8B0000',
        secondary: '#1a1a1a',
        accent: '#CC0000',
        'accent-glow': 'rgba(204, 0, 0, 0.4)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'scroll-reveal': 'scroll-reveal 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'marquee': 'marquee 20s linear infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': {
            opacity: '1',
            boxShadow: '0 0 20px rgba(204, 0, 0, 0.4)',
          },
          '50%': {
            opacity: '0.8',
            boxShadow: '0 0 40px rgba(204, 0, 0, 0.6)',
          },
        },
        'scroll-reveal': {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'marquee': {
          '0%': {
            transform: 'translateX(100%)',
          },
          '100%': {
            transform: 'translateX(-100%)',
          },
        },
        'float': {
          '0%, 100%': {
            transform: 'translateY(0)',
          },
          '50%': {
            transform: 'translateY(-10px)',
          },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        glow: '0 0 30px rgba(204, 0, 0, 0.3)',
        'glow-lg': '0 0 60px rgba(204, 0, 0, 0.4)',
        'glow-xl': '0 0 100px rgba(204, 0, 0, 0.5)',
      },
    },
  },
  plugins: [],
}

export default config
