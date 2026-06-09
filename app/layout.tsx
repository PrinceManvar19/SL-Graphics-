import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Bebas_Neue, Rajdhani, DM_Sans, Space_Mono } from 'next/font/google'
import './globals.css'

const bebasNeue = Bebas_Neue({ 
  variable: '--font-bebas', 
  subsets: ['latin'],
  weight: '400'
})
const rajdhani = Rajdhani({ 
  variable: '--font-rajdhani', 
  subsets: ['latin'],
  weight: ['400', '500', '600']
})
const dmSans = DM_Sans({ 
  variable: '--font-dm-sans', 
  subsets: ['latin'],
  weight: ['400', '500', '600']
})
const spaceMono = Space_Mono({ 
  variable: '--font-space-mono', 
  subsets: ['latin'],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'SL Graphic - Creative Studio',
  description: 'Bold. Angular. Cinematic. Premium graphic design and creative solutions.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html 
      lang="en" 
      className={`${bebasNeue.variable} ${rajdhani.variable} ${dmSans.variable} ${spaceMono.variable} bg-black`}
    >
      <body className="bg-black text-white antialiased font-sans">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
