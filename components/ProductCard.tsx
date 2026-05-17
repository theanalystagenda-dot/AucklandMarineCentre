import Link from 'next/link'

interface ProductCardProps {
  title: string
  subtitle?: string
  price?: string | null
  badge?: string | null
  href: string
  ctaLabel?: string
}

export default function ProductCard({ title, subtitle, price, badge, href, ctaLabel = 'Enquire' }: ProductCardProps) {
  return (
    <div className="bg-white border border-silver-mid hover:border-ocean/30 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group hover:-translate-y-0.5">
      {/* Top accent stripe */}
      <div className="h-0.5 bg-ocean/0 group-hover:bg-ocean transition-all duration-300" />

      {/* Image area */}
      <div className="aspect-[4/3] bg-charcoal relative overflow-hidden flex items-center justify-center">
        {/* Dark textured background */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-navy opacity-90" />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'radial-gradient(circle, var(--color-silver-mid) 1px, transparent 1px)',
            backgroundSize: '20px 20px',
          }}
        />

        {/* Badge */}
        {badge && (
          <span className="absolute top-0 right-0 bg-ocean text-white text-[10px] font-bold px-3 py-1.5 tracking-wider uppercase">
            {badge}
          </span>
        )}

        {/* Placeholder icon */}
        <svg className="relative z-10 w-12 h-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>

        {/* Bottom gradient overlay */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-charcoal leading-snug text-[15px]">{title}</h3>
        {subtitle && <p className="text-xs text-silver-dark leading-relaxed line-clamp-2">{subtitle}</p>}
        {price && (
          <p className="font-display text-2xl font-bold text-navy leading-none mt-1">{price}</p>
        )}
        <div className="mt-auto pt-4">
          <Link
            href={href}
            className="flex items-center justify-between bg-white border border-charcoal/20 text-charcoal text-xs font-bold px-4 py-2.5 tracking-wide hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
          >
            {ctaLabel}
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  )
}
