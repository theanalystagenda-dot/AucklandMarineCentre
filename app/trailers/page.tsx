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
          subtitle="SBS alloy trailers to suit every vessel — single-axle tinnies through to 22ft offshore rigs."
        />
        <p className="text-charcoal max-w-2xl mb-12 leading-relaxed">
          We stock a full range of SBS alloy trailers to match every boat we sell. All trailers are pre-wired with LED lights, feature galvanised hubs, and can be configured with rollers or bunks. Custom trailer fitout available — ask our team.
        </p>

        <div className="overflow-x-auto mb-16">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-navy text-white">
                <th className="text-left px-4 py-3 text-sm font-semibold rounded-tl-lg">Model</th>
                <th className="text-left px-4 py-3 text-sm font-semibold">Capacity</th>
                <th className="text-left px-4 py-3 text-sm font-semibold">Key Features</th>
                <th className="text-left px-4 py-3 text-sm font-semibold rounded-tr-lg">From</th>
              </tr>
            </thead>
            <tbody>
              {trailerRange.map((t, i) => (
                <tr key={t.model} className={i % 2 === 0 ? 'bg-white' : 'bg-silver'}>
                  <td className="px-4 py-3 text-sm font-medium text-charcoal">{t.model}</td>
                  <td className="px-4 py-3 text-sm text-charcoal">{t.capacity}</td>
                  <td className="px-4 py-3 text-sm text-silver-dark">{t.features}</td>
                  <td className="px-4 py-3 text-sm font-semibold text-ocean">{t.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="bg-silver rounded-xl p-8">
          <h2 className="font-display text-3xl font-bold text-charcoal mb-3">Enquire About Trailers</h2>
          <p className="text-silver-dark mb-6">Tell us your boat length and weight and we&apos;ll recommend the right trailer. Repairs and upgrades also available.</p>
          <Link href="/contact?enquiry=Trailer+enquiry" className="inline-block bg-navy text-white font-semibold px-6 py-3 rounded-md hover:bg-navy-light transition-colors">
            Send Enquiry
          </Link>
        </div>
      </div>
    </div>
  )
}
