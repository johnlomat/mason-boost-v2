import type { Metadata } from 'next'
import { Montserrat, Roboto } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LenisScroll from '@/components/LenisScroll'
import AnimatedCursor from '@/components/AnimatedCursor'

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
  variable: '--font-montserrat',
})
const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400', '700'],
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
  return (
    <html lang="en">
      <body className={cn('antialiased', montserrat.variable, roboto.variable)}>
        <LenisScroll />
        <AnimatedCursor
          color="255, 255, 255"
          innerSize={8}
          outerSize={8}
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
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
          ]}
          outerStyle={{
            mixBlendMode: 'exclusion',
          }}
        />
        <div className="page-container font-montserrat">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  )
}
