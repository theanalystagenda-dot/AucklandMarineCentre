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
        <p className="text-charcoal max-w-2xl mb-12 leading-relaxed text-[15px]">
          Our inflatable range includes everything from compact 2.7m tenders to full-spec 4.3m RIBs. Built with hypalon or PVC tubes and aluminium or fibreglass floors, these vessels are tough, lightweight, and easy to stow.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {models.map((m) => (
            <div key={m.name} className="bg-white border border-silver-mid hover:border-ocean/30 hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group hover:-translate-y-0.5">
              <div className="h-0.5 bg-ocean/0 group-hover:bg-ocean transition-all duration-300" />
              <div className="aspect-[4/3] bg-charcoal relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-navy opacity-90" />
                <div
                  className="absolute inset-0 opacity-[0.04]"
                  style={{
                    backgroundImage: 'radial-gradient(circle, var(--color-silver-mid) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }}
                />
                <svg className="relative z-10 w-12 h-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="p-5 flex-1">
                <h3 className="font-semibold text-charcoal mb-1.5 text-[15px]">{m.name}</h3>
                <p className="text-xs text-silver-dark leading-relaxed">{m.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-navy p-8 sm:p-10 relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-[0.04]"
            aria-hidden="true"
            style={{
              backgroundImage: 'linear-gradient(var(--color-silver-mid) 1px, transparent 1px), linear-gradient(90deg, var(--color-silver-mid) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
          <div className="relative text-center">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-white mb-3 tracking-tight">Need More Information?</h2>
            <p className="text-silver-mid mb-6 text-sm leading-relaxed max-w-xl mx-auto">
              Our team can help you choose the right inflatable for your application. Call us or send an enquiry.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="tel:0927111575"
                className="inline-flex items-center justify-center gap-2 bg-white text-navy text-xs font-bold px-6 py-3.5 tracking-wider uppercase hover:bg-silver active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2 tabular-nums"
              >
                Call 09 271 1575
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-ocean text-white text-xs font-bold px-6 py-3.5 tracking-wider uppercase hover:bg-ocean-light active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-white focus-visible:outline-offset-2"
              >
                Send Enquiry
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
