import Link from 'next/link'
import type { Brand } from '@/types'

interface BrandCardProps {
  brand: Brand
  href: string
}

export default function BrandCard({ brand, href }: BrandCardProps) {
  return (
    <Link
      href={href}
      className="flex flex-col items-center text-center p-6 border border-transparent hover:border-silver-mid bg-white hover:shadow-sm transition-all duration-200 group focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
    >
      <div className="w-20 h-20 bg-silver flex items-center justify-center mb-4">
        <span className="font-display font-bold text-2xl text-charcoal">{brand.name.charAt(0)}</span>
      </div>
      <h3 className="font-semibold text-charcoal mb-1">{brand.name}</h3>
      <p className="text-sm text-silver-dark line-clamp-2 mb-3">{(brand.description ?? '').split('.')[0]}.</p>
      <span className="text-ocean text-sm font-medium group-hover:underline flex items-center gap-1">
        View Range
        <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </span>
    </Link>
  )
}
