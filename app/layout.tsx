import type { Metadata } from 'next'
import { DM_Sans, Space_Grotesk } from 'next/font/google'
import './globals.css'

const display = Space_Grotesk({ variable: '--font-display', subsets: ['latin'], weight: ['600', '700'] })
const body = DM_Sans({ variable: '--font-body', subsets: ['latin'], weight: ['400', '500'] })

export const metadata: Metadata = { title: 'SL Graphics — Visuals That Sell', description: 'Logo design, brand identity, posters, reels and cinematic video production.', icons: { icon: '/SL-logo-new.png' } }

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={`${display.variable} ${body.variable}`}><body>{children}</body></html>
}
