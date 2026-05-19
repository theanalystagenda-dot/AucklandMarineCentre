const stats = [
  {
    number: '35+',
    label: 'Years in Business',
    sub: 'Est. 1989',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '75+',
    label: 'Models In Stock',
    sub: '12 brands',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
      </svg>
    ),
  },
  {
    number: '2',
    label: 'Factory Certified',
    sub: 'Mercury & Suzuki',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    number: '#1',
    label: "Auckland's Largest",
    sub: 'Marine dealership',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 3l14 9-14 9V3z" />
      </svg>
    ),
  },
  {
    number: '0%',
    label: 'Finance Available',
    sub: 'Subject to approval',
    icon: (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

export default function TrustBar() {
  return (
    <div className="bg-navy border-b border-navy-light" aria-label="Key facts">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-stretch overflow-x-auto scrollbar-none">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-stretch">
              {i > 0 && (
                <div className="w-px bg-white/10 my-4 shrink-0" aria-hidden="true" />
              )}
              <div className="flex flex-col justify-center px-6 py-5 min-w-[140px] sm:min-w-0 sm:flex-1 text-center group">
                <div className="flex items-center justify-center gap-1.5 mb-1">
                  <span className="text-ocean-light/70 group-hover:text-ocean-light transition-colors duration-200">
                    {stat.icon}
                  </span>
                  <span className="font-display text-3xl font-bold text-white leading-none tracking-tight">
                    {stat.number}
                  </span>
                </div>
                <span className="text-silver-mid text-xs font-semibold leading-tight">{stat.label}</span>
                <span className="text-white/30 text-[10px] mt-0.5 leading-tight">{stat.sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
