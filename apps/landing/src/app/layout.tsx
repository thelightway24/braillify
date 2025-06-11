import './globals.css'

import { ThemeScript } from '@devup-ui/react'
import type { Metadata } from 'next'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Braillify',
  description: 'Braillify',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <ThemeScript auto />
        <link href="/favicon.svg" rel="shortcut icon" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
