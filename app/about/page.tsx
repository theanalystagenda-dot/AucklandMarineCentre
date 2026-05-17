import SectionHeader from '@/components/SectionHeader'

const team = [
  { name: 'Brian Thompson', role: 'General Manager' },
  { name: 'Andrew Hilliar', role: 'Service Manager' },
  { name: 'Mike Davidson', role: 'Sales Manager' },
  { name: 'Sarah Collins', role: 'Finance & Admin' },
  { name: 'Jake Renata', role: 'Senior Technician' },
  { name: 'Tom Whitfield', role: 'Parts & Accessories' },
]

const values = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Expertise',
    desc: 'Over 35 years of specialist marine knowledge. Our team has seen - and fixed - everything.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
    title: 'Certified Service',
    desc: 'Mercury and Suzuki factory-certified. Your engine gets the same treatment as a brand-new warranty job.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: 'Range',
    desc: '75+ models from 11 leading brands - all in stock. We&apos;re not a catalogue, we&apos;re a showroom.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
      </svg>
    ),
    title: 'After-Sales',
    desc: 'The relationship doesn&apos;t end at the sale. Parts, service, upgrades - we&apos;re here for the life of your boat.',
  },
]

export default function AboutPage() {
  return (
    <div>
      <div className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-4">About Auckland Marine Centre</h1>
          <p className="text-silver-mid text-lg max-w-2xl">Serving New Zealand boaties since 1989 - from our Burswood showroom on Ti Rakau Drive.</p>
        </div>
      </div>

      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
            <div>
              <SectionHeader title="New Zealand's Largest Marine Dealer" />
              <div className="flex flex-col gap-4 text-charcoal leading-relaxed max-w-prose">
                <p>
                  Auckland Marine Centre was founded in 1989 with a simple aim: be the best marine dealer in New Zealand. More than 35 years later, we&apos;re still at the same Burswood address on Ti Rakau Drive - and still the largest marine dealership in the country.
                </p>
                <p>
                  We stock 75+ boat models across 11 leading brands, from alloy fishing boats to fibreglass family cruisers. Our outboard range spans Mercury and Suzuki from 2.5hp portables to 350hp offshore engines. And our service workshop is factory-certified by both Mercury and Suzuki - the only dual-certified centre in Auckland.
                </p>
                <p>
                  Whether you&apos;re buying your first boat or upgrading to your fifth, our team has the knowledge to help. We also buy used boats - contact our sales team if you&apos;re looking to sell or trade.
                </p>
              </div>
            </div>
            <div className="bg-silver-mid rounded-xl aspect-[4/3] flex items-center justify-center">
              <div className="text-center text-silver-dark">
                <svg className="w-16 h-16 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <span className="text-sm">AMC Burswood Showroom</span>
              </div>
            </div>
          </div>

          <div className="mb-20">
            <SectionHeader title="Our Team" subtitle="The people behind Auckland Marine Centre." />
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {team.map((member) => (
                <div key={member.name} className="flex flex-col items-center text-center p-4 bg-silver rounded-xl">
                  <div className="w-16 h-16 bg-silver-mid rounded-xl flex items-center justify-center mb-3">
                    <svg className="w-8 h-8 text-silver-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-semibold text-charcoal text-sm">{member.name}</h3>
                  <p className="text-xs text-silver-dark mt-0.5">{member.role}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <SectionHeader title="Why Choose Us" align="center" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((v) => (
                <div key={v.title} className="flex flex-col items-center text-center p-6 bg-silver rounded-xl">
                  <div className="w-12 h-12 bg-white flex items-center justify-center mb-4 text-ocean">
                    {v.icon}
                  </div>
                  <h3 className="font-display text-xl font-bold text-charcoal mb-2">{v.title}</h3>
                  <p className="text-sm text-silver-dark">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
