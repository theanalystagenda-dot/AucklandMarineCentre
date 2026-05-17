'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'

const slides = [
  {
    eyebrow: 'Current Offers',
    headline: "This Season's Best Deals",
    subline: 'Boats, outboards, and packages priced to move. Finance from 0%.',
    cta: { label: 'View Specials', href: '/specials' },
    accent: '#0E4D8F',
  },
  {
    eyebrow: 'New Stock',
    headline: 'New Boats In Stock Now',
    subline: '75+ models from 12 leading brands. Walk-in and take your pick.',
    cta: { label: 'Browse New Boats', href: '/boats/new' },
    accent: '#1A6BC4',
  },
  {
    eyebrow: 'Certified Service',
    headline: 'Mercury & Suzuki Service',
    subline: "Auckland's only dual-certified service centre. Book online today.",
    cta: { label: 'Book a Service', href: '/service' },
    accent: '#2D6DA8',
  },
  {
    eyebrow: 'Full Range In Stock',
    headline: 'Mercury Outboards',
    subline: 'Verado, FourStroke, Sea Pro, Avator Electric — every line available.',
    cta: { label: 'Shop Mercury', href: '/outboards/mercury' },
    accent: '#0E4D8F',
  },
]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [key, setKey] = useState(0)
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const goTo = useCallback((idx: number) => {
    setCurrent(idx)
    setKey((k) => k + 1)
  }, [])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(next, 5000)
    return () => { if (timerRef.current) clearInterval(timerRef.current) }
  }, [paused, next])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev])

  const slide = slides[current]

  return (
    <div
      className="relative overflow-hidden h-[580px] sm:h-[640px] amc-hero-grain"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Deep navy base */}
      <div className="absolute inset-0 bg-navy" />

      {/* Drifting colour orb */}
      <div
        key={current}
        className="amc-drift absolute w-[700px] h-[700px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{
          background: `radial-gradient(circle, ${slide.accent} 0%, transparent 70%)`,
          top: '-15%',
          right: '-10%',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'linear-gradient(var(--color-silver-mid) 1px, transparent 1px), linear-gradient(90deg, var(--color-silver-mid) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-navy/40 via-transparent to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p key={`eyebrow-${key}`} className="amc-enter-1 text-ocean-light text-xs font-semibold tracking-[0.2em] uppercase mb-4">
              {slide.eyebrow}
            </p>
            <h1
              key={`headline-${key}`}
              className="amc-enter-2 font-display text-6xl sm:text-7xl lg:text-8xl font-bold text-white leading-[0.92] tracking-tight mb-5"
            >
              {slide.headline}
            </h1>
            <p key={`sub-${key}`} className="amc-enter-3 text-silver-mid text-base sm:text-lg mb-8 max-w-md leading-relaxed">
              {slide.subline}
            </p>
            <div key={`cta-${key}`} className="amc-enter-fade flex items-center gap-4">
              <Link
                href={slide.cta.href}
                className="inline-flex items-center gap-2 bg-white text-navy text-sm font-bold px-7 py-3.5 hover:bg-silver transition-colors duration-200"
              >
                {slide.cta.label}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a href="tel:0927111575" className="text-silver-mid text-sm hover:text-white transition-colors">
                or call 09 271 1575
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom controls row */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        {/* Progress bar */}
        <div className="h-px bg-white/10">
          {!paused && (
            <div
              key={key}
              className="amc-slide-progress h-full bg-white/60"
            />
          )}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          {/* Slide dots */}
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-0.5 transition-all duration-300 ${
                  i === current ? 'w-8 bg-white' : 'w-4 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          {/* Slide counter */}
          <span className="text-white/40 text-xs font-mono tracking-widest">
            {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
          </span>
        </div>
      </div>
    </div>
  )
}
