import Link from 'next/link'
import HeroSlider from '@/components/HeroSlider'
import TrustBar from '@/components/TrustBar'
import SectionHeader from '@/components/SectionHeader'
import ProductCard from '@/components/ProductCard'
import specials from '@/data/specials.json'

const categories = [
  { label: 'New Boats', desc: 'Browse 75+ models from 12 leading brands', href: '/boats/new', icon: '⚓' },
  { label: 'Outboards', desc: 'Mercury & Suzuki — full range in stock', href: '/outboards/mercury', icon: '⚙️' },
  { label: 'Service', desc: 'Mercury & Suzuki certified service centre', href: '/service', icon: '🔧' },
  { label: 'Specials', desc: 'Current deals and package offers', href: '/specials', icon: '★' },
]

const allBrands = [
  'KiwiKraft', 'FlyFin', 'Fi-Glass', 'Senator', 'AMC',
  'Challenger', 'Campion', 'Reflex', 'Fyran', 'Legacy SLR', 'Mercury', 'Suzuki', 'Kawasaki',
]

export default function HomePage() {
  const featuredDeals = specials.slice(0, 3)

  return (
    <>
      <HeroSlider />
      <TrustBar />

      {/* Featured Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="What Are You Looking For?" align="center" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {categories.map((cat) => (
              <Link
                key={cat.href}
                href={cat.href}
                className="group bg-silver rounded-xl p-6 flex flex-col items-start gap-3 hover:bg-silver-mid transition-colors duration-200 hover:shadow-sm"
              >
                <span className="text-3xl" aria-hidden="true">{cat.icon}</span>
                <div>
                  <h3 className="font-display text-xl font-bold text-charcoal group-hover:text-ocean transition-colors">{cat.label}</h3>
                  <p className="text-sm text-silver-dark mt-1">{cat.desc}</p>
                </div>
                <span className="mt-auto text-ocean text-sm font-medium flex items-center gap-1">
                  Explore
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Current Deals */}
      <section className="py-16 lg:py-24 bg-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="This Week's Deals" subtitle="Current offers on boats, outboards, and packages." />
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
          <div className="mt-8 text-center">
            <Link href="/specials" className="inline-flex items-center gap-2 text-ocean font-medium hover:underline">
              View All Deals
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Logos */}
      <section className="py-12 bg-white border-y border-silver-mid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-semibold uppercase tracking-widest text-silver-dark mb-8">Brands We Stock</p>
          <div className="flex flex-wrap items-center justify-center gap-6 lg:gap-10">
            {allBrands.map((brand) => (
              <span
                key={brand}
                className="text-silver-dark font-display font-bold text-lg hover:text-charcoal transition-colors duration-200 cursor-default"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* About Strip */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeader title="Auckland's Marine Specialists Since 1989" />
              <p className="text-charcoal leading-relaxed max-w-prose mb-6">
                Auckland Marine Centre has been serving New Zealand boaties from our Burswood showroom for over 35 years. As the country&apos;s largest marine dealer, we stock 75+ boat models across 12 brands — from entry-level tinnies to serious offshore rigs. We&apos;re a Mercury and Suzuki certified service centre, meaning your engine gets factory-trained care every time.
              </p>
              <Link href="/about" className="inline-flex items-center gap-2 text-ocean font-medium hover:underline">
                Learn More About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="bg-silver-mid rounded-xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-silver-dark">
                <svg className="w-16 h-16 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">Showroom &amp; Yard</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Highlight */}
      <section className="py-16 lg:py-24 bg-navy">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-white mb-4">
              Auckland&apos;s #1 Mercury &amp; Suzuki Service Centre
            </h2>
            <p className="text-silver-mid text-lg max-w-2xl mx-auto">
              Factory-trained technicians, genuine parts, and a full workshop — all in one place.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            {[
              { title: '50-Point Inspection', desc: 'A comprehensive check of every major system on your vessel, documented and explained.' },
              { title: 'Parts & Accessories', desc: 'Mercury genuine parts on-site. Accessory fitout including electronics, bait tanks, and canopies.' },
              { title: 'Electronics & Fitout', desc: 'Simrad, Lowrance, Humminbird, Furuno. Full installation, calibration, and integration.' },
            ].map((item) => (
              <div key={item.title} className="bg-navy-light rounded-xl p-6">
                <h3 className="font-display text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-silver-dark text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/service" className="inline-block bg-ocean text-white font-semibold px-8 py-3 rounded-md hover:bg-ocean-light transition-colors duration-200">
              Book a Service
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Bar */}
      <div className="bg-silver py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-charcoal">
            <span>📍 321 Ti Rakau Drive, Burswood, Auckland</span>
            <a href="tel:0927111575" className="font-semibold text-ocean hover:underline">📞 09 271 1575</a>
            <a href="mailto:sales@aucklandmarine.co.nz" className="hover:underline">✉️ sales@aucklandmarine.co.nz</a>
            <span>Mon–Fri 8am–5:30pm | Sat 8am–4pm | Sun 10am–3pm</span>
            <a
              href="https://maps.google.com/?q=321+Ti+Rakau+Drive+Burswood+Auckland"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-navy text-white px-4 py-2 rounded-md hover:bg-navy-light transition-colors duration-200 shrink-0"
            >
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
