import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: "Auckland Marine Centre · New Zealand's Largest Marine Dealer",
  description: "Auckland Marine Centre at 321 Ti Rakau Drive, Burswood. Mercury & Suzuki certified service. 75+ boat models from 12 brands. Est. 1989.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <Navbar />
        <main id="main-content" className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
