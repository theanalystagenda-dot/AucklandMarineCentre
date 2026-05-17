const stats = [
  { number: '35+', label: 'Years in Business', sub: 'Est. 1989' },
  { number: '75+', label: 'Models In Stock', sub: '12 brands' },
  { number: '2', label: 'Certified by', sub: 'Mercury & Suzuki' },
  { number: '1', label: "Auckland's Largest", sub: 'Marine dealership' },
  { number: '0%', label: 'Finance Available', sub: 'Subject to approval' },
]

export default function TrustBar() {
  return (
    <div className="bg-navy border-b border-navy-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-stretch overflow-x-auto">
          {stats.map((stat, i) => (
            <div key={stat.label} className="flex items-stretch">
              {i > 0 && (
                <div className="w-px bg-white/10 my-4 shrink-0" />
              )}
              <div className="flex flex-col justify-center px-6 py-5 min-w-[140px] sm:min-w-0 sm:flex-1 text-center">
                <span className="font-display text-3xl font-bold text-white leading-none tracking-tight mb-1">
                  {stat.number}
                </span>
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
