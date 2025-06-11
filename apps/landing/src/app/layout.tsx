import './globals.css'

import { Box, css, ThemeScript } from '@devup-ui/react'
import type { Metadata } from 'next'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'Braillify',
  description: '크로스플랫폼 한국어 점역 라이브러리',
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
        <meta content="Braillify" property="og:title" />
        <meta content="Braillify" property="og:description" />
        <meta content="https://braillify.kr/og.png" property="og:image" />
      </head>
      <body
        className={css({
          background: '#373634',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          fontFamily: 'Spoqa Han Sans Neo, Arial, Helvetica, sans-serif',
          selectors: {
            '& a': {
              color: '$link',
              textDecoration: 'none',
            },
            '& *::placeholder': {
              fontFamily: 'Spoqa Han Sans Neo, Arial, Helvetica, sans-serif',
            },
          },
        })}
      >
        <Box bg="$background">
          <Header />
          {children}
        </Box>
        <Footer />
      </body>
    </html>
  )
}
