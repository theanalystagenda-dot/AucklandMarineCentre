'use client'

import { useState } from 'react'
import Image from 'next/image'
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
              className="border border-silver-mid bg-white px-3 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-ocean focus:border-ocean"
            >
              {allBrands.map((b) => <option key={b}>{b}</option>)}
            </select>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-silver-mid bg-white px-3 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-ocean focus:border-ocean"
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
              <div key={boat.id} className="bg-white border border-silver-mid shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">
                <div className="aspect-[4/3] bg-charcoal relative overflow-hidden">
                  {boat.image ? (
                    <Image src={boat.image} alt={boat.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-navy" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {boat.badge && (
                    <span className="absolute top-0 right-0 bg-ocean text-white text-[10px] font-bold px-3 py-1.5 tracking-wider uppercase">{boat.badge}</span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-charcoal mb-1">{boat.title}</h3>
                  <p className="text-sm text-silver-dark mb-1">{boat.year} · {boat.engine}</p>
                  <p className="font-display text-xl font-bold text-navy mb-3">${boat.price.toLocaleString()}</p>
                  <a
                    href={`/contact?enquiry=${encodeURIComponent(`Enquiry about ${boat.title}`)}`}
                    className="flex items-center justify-between border border-charcoal/20 text-charcoal text-xs font-bold px-4 py-2.5 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
                  >
                    Enquire
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
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
