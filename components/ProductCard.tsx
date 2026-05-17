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
    <div className="bg-white rounded-xl border border-silver-mid shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col hover:-translate-y-0.5">
      <div className="aspect-[4/3] bg-silver relative flex items-center justify-center">
        {badge && (
          <span className="absolute top-3 right-3 bg-ocean text-white text-xs font-semibold px-2.5 py-1 rounded-md">
            {badge}
          </span>
        )}
        <svg className="w-16 h-16 text-silver-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-semibold text-charcoal leading-snug">{title}</h3>
        {subtitle && <p className="text-sm text-silver-dark">{subtitle}</p>}
        {price && <p className="text-ocean font-bold text-lg">{price}</p>}
        <div className="mt-auto pt-3">
          <Link
            href={href}
            className="block text-center bg-navy text-white text-sm font-medium py-2 px-4 rounded-md hover:bg-navy-light transition-colors duration-200"
          >
            {ctaLabel}
          </Link>
        </div>
      </div>
    </div>
  )
}
