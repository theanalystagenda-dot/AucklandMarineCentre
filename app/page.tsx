import Link from 'next/link'
import Image from 'next/image'
import HeroSlider from '@/components/HeroSlider'
import TrustBar from '@/components/TrustBar'
import SectionHeader from '@/components/SectionHeader'
import ProductCard from '@/components/ProductCard'
import specials from '@/data/specials.json'
import manifest from '@/data/image-manifest.json'

const categories = [
  { label: 'New Boats', desc: '75+ models across 11 leading brands', href: '/boats/new', image: '/images/hero/hero-boats.jpg' },
  { label: 'Outboards', desc: 'Mercury & Suzuki — full range in stock', href: '/outboards/mercury', image: '/images/hero/hero-mercury-get-more.jpg' },
  { label: 'Service', desc: 'Mercury & Suzuki certified centre', href: '/service', image: '/images/service/workshop-directions.png' },
  { label: 'Specials', desc: 'Current deals and package offers', href: '/specials', image: '/images/hero/hero-2stroke-runout.jpg' },
]

const brandLogos = [
  { name: 'KiwiKraft', href: '/boats/new/kiwikraft', logo: (manifest.boats.kiwikraft ?? [])[0] ?? null },
  { name: 'FlyFin', href: '/boats/new/flyfin', logo: null },
  { name: 'Fi-Glass', href: '/boats/new/fi-glass', logo: (manifest.boats.figlass ?? [])[0] ?? null },
  { name: 'Senator', href: '/boats/new/senator', logo: manifest.senatorLogo || null },
  { name: 'AMC Boats', href: '/boats/new/amc-boats', logo: null },
  { name: 'Challenger', href: '/boats/new/challenger', logo: null },
  { name: 'Campion', href: '/boats/new/campion', logo: null },
  { name: 'Reflex', href: '/boats/new/reflex', logo: null },
  { name: 'Fyran', href: '/boats/new/fyran', logo: null },
  { name: 'Legacy SLR', href: '/boats/new/legacy-slr', logo: null },
  { name: 'Mercury', href: '/outboards/mercury', logo: manifest.mercuryLogo || null },
  { name: 'Suzuki', href: '/outboards/suzuki', logo: null },
]

const serviceItems = [
  {
    num: '01',
    title: '50-Point Inspection',
    desc: 'Every major system checked, documented, and explained in plain English.',
  },
  {
    num: '02',
    title: 'Parts & Accessories',
    desc: 'Mercury genuine parts on-site. Bait tanks, electronics, canopies, and more.',
  },
  {
    num: '03',
    title: 'Electronics & Fitout',
    desc: 'Simrad, Lowrance, Humminbird, Furuno. Full installation and calibration.',
  },
]

export default function HomePage() {
  const featuredDeals = specials.slice(0, 3)

  return (
    <>
      <HeroSlider />
      <TrustBar />

      {/* ── Featured Categories ─────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What Are You Looking For?" align="center" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group relative overflow-hidden aspect-[3/4] sm:aspect-[4/3]"
              >
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/30 to-transparent" />
                <div className="absolute inset-0 p-5 flex flex-col justify-end">
                  <h3 className="font-display text-2xl font-bold text-white leading-tight">{cat.label}</h3>
                  <p className="text-silver-mid text-xs mt-1 leading-relaxed hidden sm:block">{cat.desc}</p>
                  <span className="flex items-center gap-1.5 text-white/70 text-xs font-bold tracking-wider uppercase mt-3 group-hover:text-white transition-colors">
                    Explore
                    <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Current Deals ───────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <SectionHeader title="This Week's Deals" subtitle="Current offers on boats, outboards, and packages." />
            <Link
              href="/specials"
              className="hidden sm:flex items-center gap-2 text-xs font-bold text-charcoal tracking-wider uppercase hover:text-ocean transition-colors shrink-0 mb-10"
            >
              All Deals
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredDeals.map((deal) => (
              <ProductCard
                key={deal.id}
                title={deal.title}
                subtitle={deal.description}
                price={deal.price}
                badge={deal.badge ?? undefined}
                href="/specials"
                ctaLabel="View Deal"
              />
            ))}
          </div>
          <div className="mt-8 sm:hidden">
            <Link href="/specials" className="flex items-center gap-2 text-xs font-bold text-ocean tracking-wider uppercase">
              View All Deals
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Brand Logos ─────────────────────────────────────── */}
      <section className="py-12 bg-white border-y border-silver-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] font-bold uppercase tracking-[0.25em] text-silver-dark mb-8">
            Brands We Stock
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6">
            {brandLogos.map((b) => (
              <Link
                key={b.name}
                href={b.href}
                className="flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-200"
              >
                {b.logo ? (
                  <Image
                    src={b.logo}
                    alt={b.name}
                    width={100}
                    height={36}
                    className="object-contain h-8 w-auto"
                  />
                ) : (
                  <span className="font-display font-bold text-lg text-charcoal tracking-wide">{b.name}</span>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── About Strip ─────────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionHeader title="Auckland's Marine Specialists Since 1989" />
              <p className="text-charcoal leading-relaxed max-w-prose mb-8 text-[15px]">
                Auckland Marine Centre has been serving New Zealand boaties from our Burswood showroom for over 35 years. As the country&apos;s largest marine dealer, we stock 75+ boat models across 12 brands — from entry-level tinnies to serious offshore rigs. We&apos;re a Mercury and Suzuki certified service centre, meaning your engine gets factory-trained care every time.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2.5 text-xs font-bold text-navy tracking-wider uppercase border-b border-navy pb-px hover:text-ocean hover:border-ocean transition-colors duration-200"
              >
                Learn More About Us
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-charcoal aspect-[4/3] relative overflow-hidden flex items-center justify-center">
              <div
                className="absolute inset-0 opacity-[0.05]"
                style={{
                  backgroundImage: 'radial-gradient(circle, var(--color-silver-mid) 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div className="relative text-center text-white/20">
                <svg className="w-16 h-16 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-xs tracking-widest uppercase">Showroom & Yard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Service Highlight ────────────────────────────────── */}
      <section className="py-20 lg:py-28 bg-navy relative overflow-hidden">
        {/* Background detail */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(var(--color-silver-mid) 1px, transparent 1px), linear-gradient(90deg, var(--color-silver-mid) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-xl mb-14">
            <div className="amc-rule" style={{ '--tw-bg-opacity': '1' } as React.CSSProperties} />
            <div className="amc-rule" />
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
              Auckland&apos;s #1 Mercury &amp; Suzuki Service Centre
            </h2>
            <p className="text-silver-dark text-[15px] leading-relaxed">
              Factory-trained technicians, genuine parts, and a full workshop — all under one roof at Burswood.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10 mb-12">
            {serviceItems.map((item) => (
              <div key={item.num} className="bg-navy p-8 hover:bg-navy-light transition-colors duration-200">
                <span className="font-mono text-[10px] text-ocean-light tracking-widest mb-4 block">{item.num}</span>
                <h3 className="font-display text-xl font-bold text-white mb-2 leading-tight">{item.title}</h3>
                <p className="text-silver-dark text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          <Link
            href="/service"
            className="inline-flex items-center gap-3 bg-white text-navy text-xs font-bold px-7 py-3.5 tracking-wider uppercase hover:bg-silver transition-colors duration-200"
          >
            Book a Service
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ── Contact Bar ─────────────────────────────────────── */}
      <div className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-stretch divide-y sm:divide-y-0 sm:divide-x divide-white/10">
            <div className="flex items-center gap-3 py-5 sm:pr-8">
              <svg className="w-4 h-4 text-ocean-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="text-silver-mid text-xs">321 Ti Rakau Drive, Burswood, Auckland</span>
            </div>
            <div className="flex items-center gap-3 py-5 sm:px-8">
              <svg className="w-4 h-4 text-ocean-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:0927111575" className="text-white text-xs font-bold hover:text-ocean-light transition-colors tabular-nums">
                09 271 1575
              </a>
            </div>
            <div className="flex items-center gap-3 py-5 sm:px-8">
              <svg className="w-4 h-4 text-ocean-light shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-silver-mid text-xs">Mon–Fri 8–5:30 · Sat 8–4 · Sun 10–3</span>
            </div>
            <div className="sm:ml-auto flex items-center py-5 sm:pl-8">
              <a
                href="https://maps.google.com/?q=321+Ti+Rakau+Drive+Burswood+Auckland"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-ocean text-white text-xs font-bold px-5 py-2.5 tracking-wide hover:bg-ocean-light transition-colors duration-200"
              >
                Get Directions
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
