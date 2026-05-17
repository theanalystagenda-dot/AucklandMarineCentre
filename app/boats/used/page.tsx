'use client'

import { useState } from 'react'
import FilterBar from '@/components/FilterBar'
import SectionHeader from '@/components/SectionHeader'
import usedBoatsData from '@/data/used-boats.json'
import type { UsedBoat } from '@/types'

const usedBoats: UsedBoat[] = usedBoatsData

const priceFilters = ['All', 'Under $10k', '$10k–$30k', '$30k–$60k', '$60k+']
const allBrands = ['All Brands', ...Array.from(new Set(usedBoats.map((b) => b.brand)))]

function priceInRange(price: number, filter: string): boolean {
  if (filter === 'All') return true
  if (filter === 'Under $10k') return price < 10000
  if (filter === '$10k–$30k') return price >= 10000 && price < 30000
  if (filter === '$30k–$60k') return price >= 30000 && price < 60000
  if (filter === '$60k+') return price >= 60000
  return true
}

export default function UsedBoatsPage() {
  const [priceFilter, setPriceFilter] = useState('All')
  const [brandFilter, setBrandFilter] = useState('All Brands')
  const [sort, setSort] = useState('Newest')

  const filtered = usedBoats
    .filter((b) => priceInRange(b.price, priceFilter))
    .filter((b) => brandFilter === 'All Brands' || b.brand === brandFilter)
    .sort((a, b) => {
      if (sort === 'Newest') return b.year - a.year
      if (sort === 'Price ↑') return a.price - b.price
      if (sort === 'Price ↓') return b.price - a.price
      return 0
    })

  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Used Boats"
          subtitle="Pre-owned boats inspected and ready to go. All come with our workshop check."
        />

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <FilterBar filters={priceFilters} activeFilter={priceFilter} onChange={setPriceFilter} />
          <div className="flex gap-3 ml-auto">
            <select
              value={brandFilter}
              onChange={(e) => setBrandFilter(e.target.value)}
              className="border border-silver-mid rounded-md px-3 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-ocean"
            >
              {allBrands.map((b) => <option key={b}>{b}</option>)}
            </select>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-silver-mid rounded-md px-3 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-ocean"
            >
              <option>Newest</option>
              <option>Price ↑</option>
              <option>Price ↓</option>
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-silver-dark">
            <p>No boats match your filters. Try adjusting your selection.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((boat) => (
              <div key={boat.id} className="bg-white rounded-xl border border-silver-mid shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
                <div className="aspect-[4/3] bg-silver relative flex items-center justify-center">
                  {boat.badge && (
                    <span className="absolute top-3 right-3 bg-ocean text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                      {boat.badge}
                    </span>
                  )}
                  <svg className="w-16 h-16 text-silver-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-charcoal mb-1">{boat.title}</h3>
                  <p className="text-sm text-silver-dark mb-1">{boat.year} · {boat.engine}</p>
                  <p className="text-ocean font-bold text-lg mb-3">${boat.price.toLocaleString()}</p>
                  <a
                    href={`/contact?enquiry=${encodeURIComponent(`Enquiry about ${boat.title}`)}`}
                    className="block text-center bg-navy text-white text-sm font-medium py-2 rounded-md hover:bg-navy-light transition-colors"
                  >
                    Enquire
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
