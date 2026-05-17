'use client'

import { useState, useEffect, useCallback } from 'react'
import Link from 'next/link'

const slides = [
  {
    headline: 'This Season\'s Best Deals',
    subline: 'Boats, outboards, and packages priced to move. Finance from 0%.',
    cta: { label: 'View Specials', href: '/specials' },
    bg: 'from-navy to-navy-light',
  },
  {
    headline: 'New Boats In Stock',
    subline: '75+ models from 12 leading brands. Walk-in and take your pick.',
    cta: { label: 'Browse New Boats', href: '/boats/new' },
    bg: 'from-navy to-ocean',
  },
  {
    headline: 'Mercury & Suzuki Service',
    subline: 'Auckland\'s certified service centre. Book your next service online.',
    cta: { label: 'Book a Service', href: '/service' },
    bg: 'from-charcoal to-navy',
  },
  {
    headline: 'Mercury Outboards',
    subline: 'Verado, FourStroke, Sea Pro, Avator Electric — full range in stock.',
    cta: { label: 'Shop Mercury', href: '/outboards/mercury' },
    bg: 'from-navy to-ocean-muted',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5000)
    return () => clearInterval(id)
  }, [paused, next])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  return (
    <div
      className="relative overflow-hidden h-[520px] sm:h-[600px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 bg-gradient-to-br ${slide.bg} transition-opacity duration-700 flex items-center ${
            i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="max-w-2xl">
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                {slide.headline}
              </h1>
              <p className="text-silver-mid text-lg sm:text-xl mb-8 max-w-lg">{slide.subline}</p>
              <Link
                href={slide.cta.href}
                className="inline-block bg-ocean text-white font-semibold px-8 py-3 rounded-md hover:bg-ocean-light transition-colors duration-200"
              >
                {slide.cta.label}
              </Link>
            </div>
          </div>
        </div>
      ))}

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-sm transition-all duration-200 ${
              i === current ? 'bg-white scale-125' : 'bg-white/40 hover:bg-white/60'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
