'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

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
  const pathname = usePathname()

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 24) }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const isBoatsActive = pathname.startsWith('/boats') || pathname.startsWith('/trailers')
  const isOutboardsActive = pathname.startsWith('/outboards')

  return (
    <>
      <nav
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-md border-b border-silver-mid/60 shadow-sm'
            : 'bg-white border-b border-silver-mid/40'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-[60px]">

            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 shrink-0 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
            >
              <Image
                src="/images/brand/logo.png"
                alt="Auckland Marine Centre"
                width={180}
                height={48}
                priority
                className="h-10 w-auto object-contain"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-0.5">
              {/* Boats dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-1 ${
                    isBoatsActive ? 'text-ocean' : 'text-charcoal hover:text-navy'
                  }`}
                >
                  Boats
                  {isBoatsActive && <span className="sr-only">(current section)</span>}
                  <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 w-44 bg-white border border-silver-mid shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                  {boatsLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`flex items-center gap-2 px-4 py-2.5 text-sm transition-colors duration-100 focus-visible:outline-none focus-visible:bg-silver focus-visible:text-navy ${
                        pathname === l.href
                          ? 'text-ocean font-semibold bg-silver/60'
                          : 'text-charcoal hover:bg-silver hover:text-navy'
                      }`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Outboards dropdown */}
              <div className="relative group">
                <button
                  className={`flex items-center gap-1 px-3 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-1 ${
                    isOutboardsActive ? 'text-ocean' : 'text-charcoal hover:text-navy'
                  }`}
                >
                  Outboards
                  {isOutboardsActive && <span className="sr-only">(current section)</span>}
                  <svg className="w-3.5 h-3.5 opacity-50 group-hover:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div className="absolute top-full left-0 w-44 bg-white border border-silver-mid shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                  {outboardLinks.map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`block px-4 py-2.5 text-sm transition-colors duration-100 focus-visible:outline-none focus-visible:bg-silver focus-visible:text-navy ${
                        pathname === l.href
                          ? 'text-ocean font-semibold bg-silver/60'
                          : 'text-charcoal hover:bg-silver hover:text-navy'
                      }`}
                    >
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>

              {mainLinks.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  aria-current={pathname === l.href ? 'page' : undefined}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-1 ${
                    pathname === l.href
                      ? 'text-ocean after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-ocean'
                      : 'text-charcoal hover:text-navy'
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Right actions */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:0927111575"
                className="text-xs font-bold text-charcoal tracking-wide hover:text-ocean transition-colors duration-200 tabular-nums focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
              >
                09 271 1575
              </a>
              <div className="w-px h-4 bg-silver-mid" />
              <Link
                href="/service"
                className="bg-navy text-white text-xs font-bold px-5 py-2.5 tracking-wide hover:bg-navy-light active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
              >
                Book Service
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 text-charcoal hover:text-navy transition-colors focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-1"
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile drawer backdrop */}
      {mobileOpen && (
        <div
          className="fixed inset-0 z-[59] bg-black/40 backdrop-blur-sm"
          aria-hidden="true"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[60] w-full max-w-sm bg-white flex flex-col transition-transform duration-300 ${
          mobileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        aria-label="Navigation menu"
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-center justify-between px-4 h-[60px] border-b border-silver-mid">
          <Link href="/" onClick={() => setMobileOpen(false)}>
            <Image
              src="/images/brand/logo.png"
              alt="Auckland Marine Centre"
              width={160}
              height={42}
              className="h-9 w-auto object-contain"
            />
          </Link>
          <button
            onClick={() => setMobileOpen(false)}
            className="p-2 text-charcoal hover:text-navy transition-colors focus-visible:outline-2 focus-visible:outline-ocean"
            aria-label="Close menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto" aria-label="Mobile navigation">
          <div className="px-4 py-2">
            <button
              onClick={() => setMobileBoatsOpen(!mobileBoatsOpen)}
              aria-expanded={mobileBoatsOpen}
              className="flex items-center justify-between w-full py-3.5 text-left text-sm font-semibold text-charcoal border-b border-silver tracking-wide focus-visible:outline-2 focus-visible:outline-ocean"
            >
              Boats
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobileBoatsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileBoatsOpen && (
              <div className="border-b border-silver bg-silver/50">
                {boatsLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={pathname === l.href ? 'page' : undefined}
                    className={`block pl-6 py-3 text-sm focus-visible:outline-2 focus-visible:outline-ocean ${
                      pathname === l.href ? 'text-ocean font-semibold' : 'text-charcoal hover:text-ocean'
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            <button
              onClick={() => setMobileOutboardsOpen(!mobileOutboardsOpen)}
              aria-expanded={mobileOutboardsOpen}
              className="flex items-center justify-between w-full py-3.5 text-left text-sm font-semibold text-charcoal border-b border-silver tracking-wide focus-visible:outline-2 focus-visible:outline-ocean"
            >
              Outboards
              <svg className={`w-4 h-4 transition-transform duration-200 ${mobileOutboardsOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileOutboardsOpen && (
              <div className="border-b border-silver bg-silver/50">
                {outboardLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={pathname === l.href ? 'page' : undefined}
                    className={`block pl-6 py-3 text-sm focus-visible:outline-2 focus-visible:outline-ocean ${
                      pathname === l.href ? 'text-ocean font-semibold' : 'text-charcoal hover:text-ocean'
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            )}

            {mainLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMobileOpen(false)}
                aria-current={pathname === l.href ? 'page' : undefined}
                className={`block py-3.5 text-sm font-semibold border-b border-silver tracking-wide focus-visible:outline-2 focus-visible:outline-ocean ${
                  pathname === l.href ? 'text-ocean' : 'text-charcoal hover:text-navy'
                }`}
              >
                {l.label}
              </Link>
            ))}
          </div>

          <div className="px-4 mt-6 flex flex-col gap-3 pb-8">
            <a
              href="tel:0927111575"
              className="text-center text-sm font-bold text-ocean py-3.5 border border-ocean tracking-wide hover:bg-ocean hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-ocean"
            >
              09 271 1575
            </a>
            <Link
              href="/service"
              onClick={() => setMobileOpen(false)}
              className="text-center bg-navy text-white text-sm font-bold py-3.5 tracking-wide hover:bg-navy-light active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white"
            >
              Book a Service
            </Link>
          </div>
        </nav>
      </div>
    </>
  )
}
