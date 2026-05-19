import Link from 'next/link'

interface AllDealsButtonProps {
  label?: string
  className?: string
}

function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
  )
}

export default function AllDealsButton({ label = 'All Deals', className = '' }: AllDealsButtonProps) {
  return (
    <Link
      href="/specials"
      className={[
        'group relative inline-flex w-full shrink-0 sm:w-auto',
        className,
      ].join(' ')}
    >
      {/* Pulsing “hot deals” ring */}
      <span
        className="absolute -inset-1 rounded-full bg-ocean/40 animate-ping opacity-70 motion-reduce:animate-none"
        aria-hidden
      />
      <span
        className={[
          'relative z-10 inline-flex w-full min-h-11 items-center justify-center gap-2',
          'rounded-full bg-ocean px-6 py-3',
          'text-xs font-bold uppercase tracking-wider text-white',
          'shadow-md shadow-ocean/25',
          'transition-all duration-200 ease-out',
          'group-hover:scale-105 group-hover:bg-ocean-light',
        ].join(' ')}
      >
        <span className="text-base leading-none" aria-hidden>
          🔥
        </span>
        {label}
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-1" />
      </span>
    </Link>
  )
}
