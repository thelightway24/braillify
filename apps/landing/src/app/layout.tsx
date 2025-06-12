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
        <script
          dangerouslySetInnerHTML={{
            __html: `
(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KHQZ6Z4V')`,
          }}
        />
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
              textDecoration: 'none',
            },
            '& *::placeholder': {
              fontFamily: 'Spoqa Han Sans Neo, Arial, Helvetica, sans-serif',
            },
          },
        })}
      >
        <noscript>
          <iframe
            height="0"
            src="https://www.googletagmanager.com/ns.html?id=GTM-KHQZ6Z4V"
            style={{ display: 'none', visibility: 'hidden' }}
            width="0"
          />
        </noscript>
        <Box bg="$background">
          <Header />
          {children}
        </Box>
        <Footer />
      </body>
    </html>
  )
}
