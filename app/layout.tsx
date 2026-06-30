import type { Metadata, Viewport } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

const display = Space_Grotesk({ variable: '--font-display', subsets: ['latin'], weight: ['600', '700'] })
const body = DM_Sans({ variable: '--font-body', subsets: ['latin'], weight: ['400', '500'] })
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://slgraphics.in'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'SL Graphics | Visuals That Sell',
  description: 'Logo design, brand identity, posters, reels and cinematic video production.',
  icons: { icon: '/SL-logo-new.png' },
  openGraph: {
    type: 'website',
    url: '/',
    siteName: 'SL Graphics',
    title: 'SL Graphics | Visuals That Sell',
    description: 'Logo design, brand identity, posters, reels and cinematic video production.',
    images: [{ url: '/opengraph-image', width: 1200, height: 630, alt: 'SL Graphics - Visuals That Sell' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SL Graphics | Visuals That Sell',
    description: 'Logo design, brand identity, posters, reels and cinematic video production.',
    images: ['/opengraph-image'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fbfaf6',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>{children}</body>
    </html>
  )
}
