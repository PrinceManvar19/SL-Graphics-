import { Analytics } from '@vercel/analytics/next'
import type { Metadata } from 'next'
import { Bebas_Neue, Inter } from 'next/font/google'
import { ClientCursor } from '@/components/client-cursor'
import { IntroLoader } from '@/components/intro-loader'
import { PageTransition } from '@/components/page-transition'
import './globals.css'

const bebasNeue = Bebas_Neue({
  variable: '--font-display',
  subsets: ['latin'],
  weight: '400',
})

const inter = Inter({
  variable: '--font-body',
  subsets: ['latin'],
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'SL Graphics - Creative Studio',
  description: 'Logo design, branding, posters, banners, and video editing from UP, India.',
  generator: 'v0.app',
  icons: {
    icon: '/sl-logo.png',
    apple: '/sl-logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${inter.variable}`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: "try{if(sessionStorage.getItem('introSeen'))document.documentElement.classList.add('intro-seen','site-loaded','loader-done')}catch(e){}",
          }}
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        />
      </head>
      <body>
        <ClientCursor />
        <IntroLoader />
        <PageTransition />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
