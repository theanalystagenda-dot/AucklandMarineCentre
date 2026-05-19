import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'

const trailerRange = [
  { model: 'SBS Alloy 10–14ft', capacity: 'Up to 600kg', features: 'Galvanised hubs, adjustable bunks, safety chains', price: 'From $1,490' },
  { model: 'SBS Alloy 14–18ft', capacity: 'Up to 1,200kg', features: 'Roller system, swing-away jockey wheel, LED lights', price: 'From $2,290' },
  { model: 'SBS Alloy 18–22ft', capacity: 'Up to 2,000kg', features: 'Dual-axle, disc brakes, load-sharing suspension', price: 'From $3,990' },
  { model: 'Heavy-Duty Tandem', capacity: 'Up to 3,500kg', features: 'Electric brakes, alloy frame, custom bunk configuration', price: 'From $5,490' },
]

export default function TrailersPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Boat Trailers"
          subtitle="SBS alloy trailers to suit every vessel - single-axle tinnies through to 22ft offshore rigs."
        />
        <p className="text-charcoal max-w-2xl mb-12 leading-relaxed text-[15px]">
          We stock a full range of SBS alloy trailers to match every boat we sell. All trailers are pre-wired with LED lights, feature galvanised hubs, and can be configured with rollers or bunks. Custom trailer fitout available - ask our team.
        </p>

        <div className="overflow-x-auto mb-16 border border-silver-mid">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider">Model</th>
                <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider">Capacity</th>
                <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider">Key Features</th>
                <th className="text-left px-4 py-3 text-xs font-bold uppercase tracking-wider">From</th>
              </tr>
            </thead>
            <tbody>
              {trailerRange.map((t, i) => (
                <tr key={t.model} className={i % 2 === 0 ? 'bg-white' : 'bg-silver'}>
                  <td className="px-4 py-4 text-sm font-semibold text-charcoal">{t.model}</td>
                  <td className="px-4 py-4 text-sm text-charcoal tabular-nums">{t.capacity}</td>
                  <td className="px-4 py-4 text-sm text-silver-dark">{t.features}</td>
                  <td className="px-4 py-4 text-sm font-bold text-ocean tabular-nums">{t.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-silver border border-silver-mid p-8">
          <h2 className="font-display text-3xl font-bold text-charcoal mb-2 tracking-tight">Enquire About Trailers</h2>
          <p className="text-silver-dark mb-6 text-sm leading-relaxed max-w-2xl">
            Tell us your boat length and weight and we&apos;ll recommend the right trailer. Repairs and upgrades also available.
          </p>
          <Link
            href="/contact?enquiry=Trailer+enquiry"
            className="inline-flex items-center gap-2 bg-navy text-white text-xs font-bold px-6 py-3.5 tracking-wider uppercase hover:bg-navy-light active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
          >
            Send Enquiry
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
