'use client'

interface FilterBarProps {
  filters: string[]
  activeFilter: string
  onChange: (filter: string) => void
}

export default function FilterBar({ filters, activeFilter, onChange }: FilterBarProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => (
        <button
          key={filter}
          onClick={() => onChange(filter)}
          className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
            activeFilter === filter
              ? 'bg-ocean text-white'
              : 'bg-silver text-charcoal hover:bg-silver-mid'
          }`}
        >
          {filter}
        </button>
      ))}
    </div>
  )
}
