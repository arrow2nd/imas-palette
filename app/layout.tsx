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
      <body className={mPlusRounded1c.className}>{children}</body>
    </html>
  )
}
