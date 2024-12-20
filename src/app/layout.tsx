import type { Metadata } from 'next'
import { Montserrat, Roboto } from 'next/font/google'
import React from 'react'

import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LenisScroll from '@/components/LenisScroll'
import AnimatedCursor from '@/components/AnimatedCursor'
import BackToTop from '@/components/BackToTop'
import { Toaster } from '@/components/ui/toaster'
import RestrictedPage from '@/components/RestrictedPage'
import { cn } from '@/lib/utils'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-montserrat',
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: 'Boost Your Contracting Business: More Customers, More Revenue | Mason Boost',
  description:
    'Discover how Mason Boost helps your contracting business attract more opportunities, gain new customers, and increase revenue. Get a free marketing strategy tailored to your needs. Start growing your business today without the hassle of marketing.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const dueDate = new Date('2026-03-15')
  const isPastDueDate = new Date() > dueDate

  return (
    <html lang="en">
      <body className={cn('antialiased', montserrat.variable, roboto.variable)}>
        {isPastDueDate ? (
          <RestrictedPage />
        ) : (
          <React.Fragment>
            <div className="page-container font-montserrat">
              <Header />
              {children}
              <Footer />
            </div>
            <LenisScroll />
            <AnimatedCursor
              color="255, 255, 255"
              innerSize={8}
              outerSize={35}
              innerScale={1}
              outerScale={2}
              outerAlpha={0}
              clickables={[
                'a',
                'input[type="text"]',
                'input[type="email"]',
                'input[type="number"]',
                'input[type="submit"]',
                'input[type="image"]',
                'label[for]',
                'select',
                'textarea',
                'button',
                '.link',
                '.back-to-top',
              ]}
              innerStyle={{
                border: '1px solid rgba(0, 0, 0)',
              }}
              outerStyle={{
                border: '3px solid rgba(255, 255, 255)',
                outline: '1px solid rgba(0, 0, 0)',
              }}
            />
            <BackToTop />
            <Toaster />
          </React.Fragment>
        )}
      </body>
    </html>
  )
}
