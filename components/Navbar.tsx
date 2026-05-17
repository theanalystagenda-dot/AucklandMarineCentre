'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

const boatsLinks = [
  { label: 'New Boats', href: '/boats/new' },
  { label: 'Used Boats', href: '/boats/used' },
  { label: 'Inflatables', href: '/boats/inflatables' },
  { label: 'Trailers', href: '/trailers' },
]

const outboardLinks = [
  { label: 'Mercury', href: '/outboards/mercury' },
  { label: 'Suzuki', href: '/outboards/suzuki' },
  { label: 'Used Outboards', href: '/outboards/used' },
]

const mainLinks = [
  { label: 'Jet Skis', href: '/jet-skis' },
  { label: 'Service', href: '/service' },
  { label: 'Finance', href: '/finance' },
  { label: 'Specials', href: '/specials' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileBoatsOpen, setMobileBoatsOpen] = useState(false)
  const [mobileOutboardsOpen, setMobileOutboardsOpen] = useState(false)

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 10) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <nav className={`sticky top-0 z-50 bg-white transition-shadow duration-200 ${scrolled ? 'shadow-sm' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="font-display text-xl font-bold text-navy tracking-wide shrink-0">
              Auckland Marine Centre
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              <div className="relative group">
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-charcoal hover:text-ocean transition-colors duration-200">
                  Boats
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 w-44 bg-white border border-silver-mid rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {boatsLinks.map((l) => (
                    <Link key={l.href} href={l.href} className="block px-4 py-2 text-sm text-charcoal hover:bg-silver hover:text-ocean transition-colors duration-150">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="relative group">
                <button className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-charcoal hover:text-ocean transition-colors duration-200">
                  Outboards
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 w-44 bg-white border border-silver-mid rounded-xl shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                  {outboardLinks.map((l) => (
                    <Link key={l.href} href={l.href} className="block px-4 py-2 text-sm text-charcoal hover:bg-silver hover:text-ocean transition-colors duration-150">
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              {mainLinks.map((l) => (
                <Link key={l.href} href={l.href} className="px-3 py-2 text-sm font-medium text-charcoal hover:text-ocean transition-colors duration-200">
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a href="tel:0927111575" className="text-sm font-semibold text-charcoal hover:text-ocean transition-colors duration-200">
                09 271 1575
              </a>
              <Link
                href="/service"
                className="bg-ocean text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-ocean-light transition-colors duration-200"
              >
                Book Service
              </Link>
            </div>

            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-charcoal hover:text-ocean transition-colors"
              aria-label="Open menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-[60] bg-white flex flex-col">
          <div className="flex items-center justify-between px-4 h-16 border-b border-silver-mid">
            <Link href="/" onClick={() => setMobileOpen(false)} className="font-display text-xl font-bold text-navy">
              Auckland Marine Centre
            </Link>
            <button onClick={() => setMobileOpen(false)} className="p-2 text-charcoal" aria-label="Close menu">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto px-4 py-4 flex flex-col gap-1">
            <button
              onClick={() => setMobileBoatsOpen(!mobileBoatsOpen)}
              className="flex items-center justify-between w-full py-3 text-left font-medium text-charcoal border-b border-silver"
            >
              Boats
              <svg className={`w-4 h-4 transition-transform ${mobileBoatsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileBoatsOpen && boatsLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="pl-4 py-2 text-sm text-ocean border-b border-silver">
                {l.label}
              </Link>
            ))}

            <button
              onClick={() => setMobileOutboardsOpen(!mobileOutboardsOpen)}
              className="flex items-center justify-between w-full py-3 text-left font-medium text-charcoal border-b border-silver"
            >
              Outboards
              <svg className={`w-4 h-4 transition-transform ${mobileOutboardsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileOutboardsOpen && outboardLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="pl-4 py-2 text-sm text-ocean border-b border-silver">
                {l.label}
              </Link>
            ))}

            {mainLinks.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)} className="py-3 font-medium text-charcoal border-b border-silver">
                {l.label}
              </Link>
            ))}

            <div className="mt-4 flex flex-col gap-3 pt-4">
              <a href="tel:0927111575" className="text-center font-semibold text-ocean py-3 border border-ocean rounded-md">
                09 271 1575
              </a>
              <Link href="/service" onClick={() => setMobileOpen(false)} className="text-center bg-ocean text-white font-medium py-3 rounded-md">
                Book a Service
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  )
}
