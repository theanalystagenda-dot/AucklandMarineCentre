'use client'

interface FilterBarProps {
  filters: string[]
  activeFilter: string
  onChange: (filter: string) => void
}

export default function FilterBar({ filters, activeFilter, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2" role="group" aria-label="Filter options">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          aria-pressed={activeFilter === filter}
          className={`px-4 py-2 text-sm font-medium transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2 ${
            activeFilter === filter
              ? 'bg-navy text-white'
              : 'bg-silver text-charcoal hover:bg-silver-mid active:scale-95'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
