import { M_PLUS_Rounded_1c } from 'next/font/google'
import React from 'react'
import 'styles/globals.css'

const mPlusRounded1c = M_PLUS_Rounded_1c({
  display: 'swap',
  weight: ['400'],
  subsets: ['latin'],
  adjustFontFallback: false
})

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
        <script
          defer
          src="https://static.cloudflareinsights.com/beacon.min.js"
          data-cf-beacon='{"token": "7e995a4912664d1f96fba895f160587c"}'
        ></script>
      </head>
      <body className={mPlusRounded1c.className}>{children}</body>
    </html>
  )
}
