import Link from 'next/link'

interface DealCardProps {
  title: string
  subtitle?: string
  price?: string | null
  /** e.g. "Package Deal", "Save $600" — styled by urgency vs informational */
  badge?: string | null
  href: string
  ctaLabel?: string
  /** Optional was-price for strikethrough; add to specials.json when available */
  wasPrice?: string | null
}

function isUrgencyBadge(badge: string) {
  return /save|clearance|off|%\s*off|limited|hurry/i.test(badge)
}

function BadgePill({ badge }: { badge: string }) {
  const urgent = isUrgencyBadge(badge)
  return (
    <span
      className={[
        'absolute top-3 left-3 z-10 rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wide shadow-sm',
        urgent
          ? 'bg-amber-500 text-white'
          : 'bg-navy text-white',
      ].join(' ')}
    >
      {badge}
    </span>
  )
}

export default function DealCard({
  title,
  subtitle,
  price,
  badge,
  href,
  ctaLabel = 'View Deal',
  wasPrice,
}: DealCardProps) {
  return (
    <Link
      href={href}
      className={[
        'group relative flex h-full cursor-pointer flex-col overflow-hidden',
        'border border-silver-mid bg-white shadow-sm',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-1.5 hover:border-ocean/40 hover:shadow-xl hover:shadow-navy/10',
      ].join(' ')}
    >
      {/* Top accent stripe */}
      <div className="h-0.5 bg-ocean/0 transition-colors duration-300 group-hover:bg-ocean" />

      {/* Image area */}
      <div className="relative aspect-[4/3] overflow-hidden bg-charcoal">
        <div
          className={[
            'absolute inset-0 flex items-center justify-center',
            'transition-transform duration-300 ease-out group-hover:scale-[1.04]',
          ].join(' ')}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-navy opacity-90" />
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'radial-gradient(circle, var(--color-silver-mid) 1px, transparent 1px)',
              backgroundSize: '20px 20px',
            }}
          />
          <svg
            className="relative z-10 h-12 w-12 text-white/20"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={0.75}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/40 to-transparent" />
        </div>

        {badge && <BadgePill badge={badge} />}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2 p-5">
        <h3 className="font-semibold text-[15px] leading-snug text-charcoal transition-colors duration-300 group-hover:text-navy">
          {title}
        </h3>
        {subtitle && (
          <p className="line-clamp-2 text-xs leading-relaxed text-silver-dark">{subtitle}</p>
        )}

        {price && (
          <div className="mt-1">
            {wasPrice && (
              <p className="mb-0.5 text-sm text-silver-dark line-through">{wasPrice}</p>
            )}
            {/* wasPrice: pass deal.wasPrice when added to specials.json */}
            <p className="font-display text-3xl font-extrabold leading-none tracking-tight text-navy">
              {price}
            </p>
          </div>
        )}

        <div className="mt-auto pt-4">
          <span
            aria-hidden
            className={[
              'flex w-full items-center justify-between',
              'bg-ocean px-4 py-2.5 text-xs font-bold tracking-wide text-white',
              'transition-colors duration-300 group-hover:bg-ocean-light',
            ].join(' ')}
          >
            {ctaLabel}
            <span className="inline-flex items-center gap-1 transition-transform duration-300 ease-out group-hover:translate-x-1">
              <span aria-hidden>→</span>
            </span>
          </span>
        </div>
      </div>

      {/* Hover footer — reinforces clickability */}
      <div
        className={[
          'border-t border-silver-mid px-5 py-2.5',
          'opacity-0 transition-opacity duration-300 ease-out group-hover:opacity-100',
        ].join(' ')}
      >
        <span className="text-[11px] font-bold uppercase tracking-wider text-ocean">
          {ctaLabel} →
        </span>
      </div>
    </Link>
  )
}
