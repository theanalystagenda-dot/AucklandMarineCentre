import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'

const models = [
  { name: 'RIB 270', desc: '2.7m rigid inflatable. Ideal for tenders and calm water use.' },
  { name: 'RIB 310', desc: '3.1m heavy-duty hypalon inflatable with aluminium floor.' },
  { name: 'RIB 380', desc: '3.8m sport RIB with fibreglass hull and 20hp capability.' },
  { name: 'RIB 430 Pro', desc: '4.3m commercial-spec rigid inflatable. Safety vessel-ready.' },
]

export default function InflatablesPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Inflatable Boats"
          subtitle="Durable rigid inflatable boats (RIBs) for tenders, rescue, and recreational use. All models in stock."
        />
        <p className="text-charcoal max-w-2xl mb-12 leading-relaxed">
          Our inflatable range includes everything from compact 2.7m tenders to full-spec 4.3m RIBs. Built with hypalon or PVC tubes and aluminium or fibreglass floors, these vessels are tough, lightweight, and easy to stow.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {models.map((m) => (
            <div key={m.name} className="bg-silver rounded-xl p-6 border border-silver-mid hover:shadow-sm transition-all duration-200">
              <div className="aspect-[4/3] bg-silver-mid rounded-lg flex items-center justify-center mb-4">
                <svg className="w-12 h-12 text-silver-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="font-semibold text-charcoal mb-1">{m.name}</h3>
              <p className="text-sm text-silver-dark">{m.desc}</p>
            </div>
          ))}
        </div>
        <div className="bg-navy rounded-xl p-8 text-center">
          <h2 className="font-display text-3xl font-bold text-white mb-3">Need More Information?</h2>
          <p className="text-silver-mid mb-6">Our team can help you choose the right inflatable for your application. Call us or send an enquiry.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="tel:0927111575" className="bg-white text-navy font-semibold px-6 py-3 rounded-md hover:bg-silver transition-colors">
              Call 09 271 1575
            </a>
            <Link href="/contact" className="bg-ocean text-white font-semibold px-6 py-3 rounded-md hover:bg-ocean-light transition-colors">
              Send Enquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
