import Image from 'next/image'
import SectionHeader from '@/components/SectionHeader'
import ContactForm from '@/components/ContactForm'

const checklistItems = [
  'Engine oil & filter change', 'Gear oil service', 'Fuel filter replacement', 'Thermostat check',
  'Cooling system flush', 'Spark plug inspection', 'Belt & impeller check', 'Trim tab inspection',
  'Battery test & terminals', 'Bilge pump function', 'Steering system check', 'Throttle & shift cables',
  'Hull inspection below waterline', 'Navigation lights', 'Fire extinguisher check', 'Safety equipment audit',
  'Prop condition & clearances', 'Zinc anode inspection', 'Fuel line & tank inspection', 'General corrosion check',
]

const services = [
  { title: 'Engine Servicing', desc: 'All major brands - Mercury, Suzuki, Yamaha, Honda, and Evinrude. Factory-trained technicians only.' },
  { title: 'Electronics Installation', desc: 'Simrad, Lowrance, Humminbird, Furuno. Full fitout including chartplotters, sonar, VHF, and AIS.' },
  { title: 'Live Bait & Sportsfishing Fitout', desc: 'Custom live bait tank installation, rod holders, tackle storage, and outrigger rigging.' },
  { title: 'VHF Radios & Stereos', desc: 'Standard Horizon, Uniden, Fusion, JL Audio - installation, wiring, and testing.' },
  { title: 'Bilge Pumps & Plumbing', desc: 'Rule, Jabsco, and Whale bilge pump installation. Livewell and washdown plumbing.' },
  { title: 'Trailer Repairs & Replacement', desc: 'SBS trailer repairs, bearing replacement, brake servicing, and full trailer replacement.' },
  { title: 'Minn-Kota Electric Trolling Motors', desc: 'Authorised Minn-Kota Pro-Store. Humminbird MEGA sonar integration and full installation.' },
  { title: 'Canvas & Canopy Repairs', desc: 'Hard top, Bimini, and custom canvas - repairs and replacements by our fitout team.' },
  { title: 'Pre-Purchase Inspection', desc: 'Buying a second-hand boat? Our 50-point inspection gives you peace of mind before you commit.' },
  { title: 'Mercury Genuine Parts', desc: 'Genuine Mercury parts and accessories in stock. If we don\'t have it, we can order it next-day.' },
]

export default function ServicePage() {
  return (
    <div>
      <div className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex gap-2" aria-hidden="true">
              <div className="w-3 h-8 bg-mercury-red" />
              <div className="w-3 h-8 bg-suzuki-blue" />
            </div>
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white">Service & Parts</h1>
          </div>
          <p className="text-silver-mid text-lg max-w-2xl">
            Auckland&apos;s only Mercury and Suzuki dual-certified service centre. Factory-trained technicians, genuine parts, and a full-spec workshop at Burswood.
          </p>
        </div>
      </div>

      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Workshop directions image */}
          <div className="relative w-full h-56 overflow-hidden mb-12">
            <Image
              src="/images/service/workshop-directions.png"
              alt="Workshop location - 321 Ti Rakau Drive, Burswood"
              fill
              className="object-cover object-center"
            />
          </div>

          {/* 50-Point Checklist */}
          <div className="mb-16">
            <SectionHeader title="50-Point Service Inspection" subtitle="Every service includes a comprehensive check of your vessel - documented and explained in plain English." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-3">
              {checklistItems.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-charcoal">
                  <svg className="w-4 h-4 text-success shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Services grid */}
          <div className="mb-16">
            <SectionHeader title="Our Services" />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((s) => (
                <div key={s.title} className="flex gap-4 p-5 bg-silver border border-silver-mid">
                  <div className="w-10 h-10 bg-ocean flex items-center justify-center shrink-0">
                    <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-charcoal mb-1">{s.title}</h3>
                    <p className="text-sm text-silver-dark leading-relaxed">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Contact + form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionHeader title="Contact Our Service Team" />
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-24 h-16 shrink-0">
                  <Image
                    src="/images/service/certified-service-centre.jpg"
                    alt="Mercury & Suzuki Certified Service Centre badge"
                    fill
                    className="object-contain"
                  />
                </div>
                <p className="text-sm text-silver-dark leading-relaxed">Authorised Mercury &amp; Suzuki certified service centre - factory-trained technicians only.</p>
              </div>
              <div className="bg-silver border border-silver-mid p-6 mb-8">
                <h3 className="font-semibold text-charcoal mb-3">Andrew Hilliar - Service Manager</h3>
                <div className="flex flex-col gap-2.5">
                  <a
                    href="tel:0927111575"
                    className="flex items-center gap-2 text-sm text-ocean hover:text-navy transition-colors focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-1"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    09 271 1575 ext 4
                  </a>
                  <a
                    href="mailto:service@aucklandmarine.co.nz"
                    className="flex items-center gap-2 text-sm text-ocean hover:text-navy transition-colors focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-1"
                  >
                    <svg className="w-4 h-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    service@aucklandmarine.co.nz
                  </a>
                </div>
              </div>
            </div>

            <div>
              <SectionHeader title="Book a Service" />
              <ContactForm enquiryType="Service" showBoatField />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
