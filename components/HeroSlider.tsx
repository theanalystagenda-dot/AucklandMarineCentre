'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import manifest from '@/data/image-manifest.json'

const slideCopy = [
  {
    eyebrow: 'Mercury Outboards',
    headline: 'Get More on the Water',
    subline: 'Mercury outboard packages - sharp deals, limited stock.',
    cta: { label: 'View Mercury Range', href: '/outboards/mercury' },
  },
  {
    eyebrow: 'Run-Out Deals',
    headline: '2-Stroke Run-Out Deals',
    subline: 'Major savings on remaining two-stroke stock. Don\'t miss out.',
    cta: { label: 'Shop Specials', href: '/specials' },
  },
  {
    eyebrow: 'Certified Service',
    headline: "Auckland's #1 Service Centre",
    subline: 'Mercury & Suzuki certified. 50-point inspection included.',
    cta: { label: 'Book a Service', href: '/service' },
  },
  {
    eyebrow: 'New & Used Stock',
    headline: 'New & Used Boats',
    subline: '75+ models on the yard. New boat? Trade-in? We can help.',
    cta: { label: 'Browse Boats', href: '/boats/new' },
  },
  {
    eyebrow: 'Easy Finance',
    headline: 'Finance from 0%',
    subline: 'Flexible packages to suit any budget. Quick decision.',
    cta: { label: 'Apply for Finance', href: '/finance' },
  },
]

const heroImages = manifest.hero
const slides = slideCopy.map((copy, i) => ({
  ...copy,
  image: heroImages[i % heroImages.length] ?? '',
}))

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  const [key, setKey] = useState(0)
  const prefersReducedMotion = useRef(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    prefersReducedMotion.current = mq.matches
    const handler = (e: MediaQueryListEvent) => { prefersReducedMotion.current = e.matches }
    mq.addEventListener('change', handler)
    return () => mq.removeEventListener('change', handler)
  }, [])

  const goTo = useCallback((idx: number) => {
    setCurrent(idx)
    setKey((k) => k + 1)
  }, [])

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo])
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo])

  useEffect(() => {
    if (paused || prefersReducedMotion.current) return
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

  const slide = slides[current]

  return (
    <section
      className="relative overflow-hidden h-[580px] sm:h-[640px]"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-label="Featured promotions"
      aria-roledescription="carousel"
    >
      {/* Slides */}
      {slides.map((s, i) => (
        <div
          key={i}
          role="group"
          aria-roledescription="slide"
          aria-label={`${i + 1} of ${slides.length}: ${s.headline}`}
          aria-hidden={i !== current}
          className={`absolute inset-0 transition-opacity duration-700 ${i === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {s.image ? (
            <Image
              src={s.image}
              alt=""
              fill
              className="object-cover object-center"
              priority={i === 0}
            />
          ) : (
            <div className="absolute inset-0 bg-navy" />
          )}
          <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/50 to-navy/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
        </div>
      ))}

      {/* Grain texture */}
      <div
        className="absolute inset-0 z-20 pointer-events-none opacity-30"
        aria-hidden="true"
        style={{
          backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='0.035'/%3E%3C/svg%3E\")",
          backgroundSize: '300px 300px',
        }}
      />

      {/* Content */}
      <div className="relative z-30 h-full flex items-center">
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
                className="inline-flex items-center gap-2 bg-white text-navy text-sm font-bold px-7 py-3.5 hover:bg-silver active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                {slide.cta.label}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <a
                href="tel:0927111575"
                className="text-silver-mid text-sm hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                or call 09 271 1575
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="absolute bottom-0 left-0 right-0 z-40">
        <div className="h-px bg-white/10" aria-hidden="true">
          {!paused && !prefersReducedMotion.current && (
            <div key={key} className="amc-slide-progress h-full bg-white/60" />
          )}
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex items-center justify-between">
          <div className="flex gap-2" role="tablist" aria-label="Slide navigation">
            {slides.map((s, i) => (
              <button
                key={i}
                role="tab"
                aria-selected={i === current}
                aria-label={`Go to slide ${i + 1}: ${s.headline}`}
                onClick={() => goTo(i)}
                className={`h-0.5 transition-all duration-300 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-4 ${
                  i === current ? 'w-8 bg-white' : 'w-4 bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="text-white/50 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 p-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <span className="text-white/40 text-xs font-mono tracking-widest" aria-live="polite" aria-atomic="true">
              {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
            </span>
            <button
              onClick={next}
              aria-label="Next slide"
              className="text-white/50 hover:text-white transition-colors focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 p-1"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
