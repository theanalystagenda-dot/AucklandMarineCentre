'use client'

import { useState } from 'react'
import FilterBar from '@/components/FilterBar'
import SectionHeader from '@/components/SectionHeader'
import usedOutboardsData from '@/data/used-outboards.json'
import type { UsedOutboard } from '@/types'

const usedOutboards: UsedOutboard[] = usedOutboardsData

const hpFilters = ['All', 'Under 30hp', '30–100hp', '100–200hp', '200hp+']
const allBrands = ['All Brands', ...Array.from(new Set(usedOutboards.map((o) => o.brand)))]

function hpInRange(hp: number, filter: string): boolean {
  if (filter === 'All') return true
  if (filter === 'Under 30hp') return hp < 30
  if (filter === '30–100hp') return hp >= 30 && hp < 100
  if (filter === '100–200hp') return hp >= 100 && hp < 200
  if (filter === '200hp+') return hp >= 200
  return true
}

export default function UsedOutboardsPage() {
  const [hpFilter, setHpFilter] = useState('All')
  const [brandFilter, setBrandFilter] = useState('All Brands')
  const [sort, setSort] = useState('Newest')

  const filtered = usedOutboards
    .filter((o) => hpInRange(o.hp, hpFilter))
    .filter((o) => brandFilter === 'All Brands' || o.brand === brandFilter)
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
          title="Used Outboards"
          subtitle="Pre-owned Mercury and Suzuki outboards. All inspected by our certified technicians."
        />

        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <FilterBar filters={hpFilters} activeFilter={hpFilter} onChange={setHpFilter} />
          <div className="flex gap-3 ml-auto">
            <select value={brandFilter} onChange={(e) => setBrandFilter(e.target.value)} className="border border-silver-mid rounded-md px-3 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-ocean">
              {allBrands.map((b) => <option key={b}>{b}</option>)}
            </select>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="border border-silver-mid rounded-md px-3 py-2 text-sm text-charcoal focus:outline-none focus:ring-2 focus:ring-ocean">
              <option>Newest</option>
              <option>Price ↑</option>
              <option>Price ↓</option>
            </select>
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-16 text-silver-dark">No outboards match your filters.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((outboard) => (
              <div key={outboard.id} className="bg-white rounded-xl border border-silver-mid shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
                <div className="aspect-[4/3] bg-silver relative flex items-center justify-center">
                  {outboard.badge && (
                    <span className="absolute top-3 right-3 bg-ocean text-white text-xs font-semibold px-2.5 py-1 rounded-md">{outboard.badge}</span>
                  )}
                  <svg className="w-16 h-16 text-silver-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-charcoal mb-1">{outboard.title}</h3>
                  <p className="text-sm text-silver-dark mb-1">{outboard.year} · {outboard.hp}hp</p>
                  <p className="text-ocean font-bold text-lg mb-3">${outboard.price.toLocaleString()}</p>
                  <a href={`/contact?enquiry=${encodeURIComponent(`Enquiry about ${outboard.title}`)}`} className="block text-center bg-navy text-white text-sm font-medium py-2 rounded-md hover:bg-navy-light transition-colors">
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
