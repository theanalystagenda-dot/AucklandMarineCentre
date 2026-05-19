'use client'

import Link from 'next/link'

const quickLinks = [
  { label: 'New Boats', href: '/boats/new' },
  { label: 'Used Boats', href: '/boats/used' },
  { label: 'Mercury Outboards', href: '/outboards/mercury' },
  { label: 'Suzuki Outboards', href: '/outboards/suzuki' },
  { label: 'Service', href: '/service' },
  { label: 'Finance', href: '/finance' },
  { label: 'Specials', href: '/specials' },
]

const brands = [
  { name: 'KiwiKraft', href: '/boats/new' },
  { name: 'Challenger', href: '/boats/new' },
  { name: 'FlyFin', href: '/boats/new' },
  { name: 'Fi-Glass', href: '/boats/new' },
  { name: 'AMC Boats', href: '/boats/new' },
  { name: 'Campion', href: '/boats/new' },
  { name: 'Reflex', href: '/boats/new' },
  { name: 'Senator', href: '/boats/new' },
  { name: 'Fyran', href: '/boats/new' },
  { name: 'Legacy SLR', href: '/boats/new' },
  { name: 'Mercury', href: '/outboards/mercury' },
  { name: 'Suzuki', href: '/outboards/suzuki' },
]

function ScrollToTop() {
  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="p-2 text-silver-dark hover:text-white transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
      aria-label="Scroll to top"
    >
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
      </svg>
    </button>
  )
}

export default function Footer() {
  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="font-display text-xl font-bold mb-3">Auckland Marine Centre</div>
            <p className="text-silver-dark text-sm leading-relaxed mb-4">
              New Zealand&apos;s largest marine dealership. Mercury &amp; Suzuki certified service. Est. 1989.
            </p>
            <p className="text-silver-dark text-xs">Used boats wanted - buying now. Contact our sales team.</p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-silver-dark mb-4">Quick Links</h3>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((l) => (
                <li key={l.href + l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-silver-mid hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-1"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-silver-dark mb-4">Brands</h3>
            <ul className="flex flex-col gap-2">
              {brands.map((b) => (
                <li key={b.name}>
                  <Link
                    href={b.href}
                    className="text-sm text-silver-mid hover:text-white transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-1"
                  >
                    {b.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-silver-dark mb-4">Contact</h3>
            <address className="not-italic flex flex-col gap-2 text-sm text-silver-mid">
              <span>321 Ti Rakau Drive, Burswood, Auckland</span>
              <a href="tel:0927111575" className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-ocean">09 271 1575</a>
              <a href="mailto:sales@aucklandmarine.co.nz" className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-ocean">sales@aucklandmarine.co.nz</a>
              <a href="mailto:service@aucklandmarine.co.nz" className="hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-ocean">service@aucklandmarine.co.nz</a>
            </address>
            <div className="mt-4">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-silver-dark mb-2">Hours</h4>
              <div className="text-sm text-silver-mid flex flex-col gap-1">
                <span>Mon–Fri: 8am – 5:30pm</span>
                <span>Saturday: 8am – 4pm</span>
                <span>Sunday: 10am – 3pm</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-navy-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <p className="text-silver-dark text-xs">© 2026 Auckland Marine Centre. All rights reserved.</p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-silver-dark hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
              aria-label="Auckland Marine Centre on Facebook"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <div className="w-px h-4 bg-white/10" aria-hidden="true" />
            <ScrollToTop />
          </div>
        </div>
      </div>
    </footer>
  )
}
