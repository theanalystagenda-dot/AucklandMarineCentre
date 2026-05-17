import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'
import TrustBar from '@/components/TrustBar'
import SectionHeader from '@/components/SectionHeader'
import ProductCard from '@/components/ProductCard'
import specials from '@/data/specials.json'

const categories = [
  {
    label: 'New Boats',
    desc: '75+ models across 11 leading brands',
    href: '/boats/new',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
  },
  {
    label: 'Outboards',
    desc: 'Mercury & Suzuki — full range in stock',
    href: '/outboards/mercury',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: 'Service',
    desc: 'Mercury & Suzuki certified centre',
    href: '/service',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    label: 'Specials',
    desc: 'Current deals and package offers',
    href: '/specials',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      </svg>
    ),
  },
]

const allBrands = [
  'KiwiKraft', 'FlyFin', 'Fi-Glass', 'Senator', 'AMC',
  'Challenger', 'Campion', 'Reflex', 'Fyran', 'Legacy SLR', 'Mercury', 'Suzuki', 'Kawasaki',
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
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-silver-mid border border-silver-mid overflow-hidden">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group bg-white p-7 flex flex-col gap-4 hover:bg-silver transition-colors duration-200 relative"
              >
                <div className="w-10 h-10 bg-silver flex items-center justify-center text-ocean group-hover:bg-ocean group-hover:text-white transition-all duration-200">
                  {cat.icon}
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-charcoal group-hover:text-ocean transition-colors leading-tight">
                    {cat.label}
                  </h3>
                  <p className="text-xs text-silver-dark mt-1.5 leading-relaxed">{cat.desc}</p>
                </div>
                <span className="flex items-center gap-1.5 text-ocean text-xs font-bold tracking-wider uppercase mt-auto">
                  Explore
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
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
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {allBrands.map((brand, i) => (
              <span key={brand} className="flex items-center gap-8">
                <span className="text-silver-dark font-display font-bold text-lg hover:text-charcoal transition-colors duration-200 cursor-default">
                  {brand}
                </span>
                {i < allBrands.length - 1 && (
                  <span className="text-silver-mid text-xs hidden lg:inline">·</span>
                )}
              </span>
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
