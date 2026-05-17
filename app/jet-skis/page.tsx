import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'

const models = [
  { name: 'Jet Ski STX 160', hp: '160hp', desc: 'The ultimate touring and recreational Jet Ski. Exceptionally comfortable for long-distance runs with large 354L storage.', price: 'From $16,999' },
  { name: 'Jet Ski Ultra 160X', hp: '160hp', desc: 'Top-of-the-range performance. Supercharged power, electronic throttle control, and race-inspired handling.', price: 'From $22,999' },
  { name: 'Jet Ski SX-R 160', hp: '160hp', desc: 'A pure stand-up performance craft. Reborn for competitive riders and thrill-seekers.', price: 'From $14,999' },
  { name: 'Jet Ski Ultra LX', hp: '130hp', desc: 'The family-friendly choice. Spacious three-seater with smooth power delivery and exceptional value.', price: 'From $13,999' },
]

export default function JetSkisPage() {
  return (
    <div>
      <div className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-silver-dark text-sm mb-2 font-medium uppercase tracking-wider">Kawasaki</p>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-4">Kawasaki Jet Skis</h1>
          <p className="text-silver-mid text-lg max-w-2xl">
            Auckland Marine Centre is your authorised Kawasaki Jet Ski dealer. Full range in stock — buy, service, and accessorise all in one place.
          </p>
        </div>
      </div>

      <div className="py-16 lg:py-24 bg-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Current Range" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            {models.map((model) => (
              <div key={model.name} className="bg-white rounded-xl border border-silver-mid shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col">
                <div className="aspect-[16/9] bg-silver-mid flex items-center justify-center">
                  <svg className="w-16 h-16 text-silver-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="font-display text-2xl font-bold text-charcoal">{model.name}</h3>
                    <span className="text-ocean font-semibold text-sm shrink-0 ml-2">{model.hp}</span>
                  </div>
                  <p className="text-silver-dark text-sm mb-4 flex-1">{model.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-ocean font-bold text-lg">{model.price}</span>
                    <Link href="/contact?enquiry=Kawasaki+Jet+Ski+enquiry" className="bg-navy text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-navy-light transition-colors">
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-navy rounded-xl p-8 text-center">
            <h2 className="font-display text-3xl font-bold text-white mb-3">Test Ride Available</h2>
            <p className="text-silver-mid mb-6">Experience the Kawasaki range first-hand. Call us to arrange a demonstration or talk to our Jet Ski specialists.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="tel:0927111575" className="bg-white text-navy font-semibold px-6 py-3 rounded-md hover:bg-silver transition-colors">
                Call 09 271 1575
              </a>
              <Link href="/contact?enquiry=Jet+Ski+test+ride" className="bg-ocean text-white font-semibold px-6 py-3 rounded-md hover:bg-ocean-light transition-colors">
                Book a Demo
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
