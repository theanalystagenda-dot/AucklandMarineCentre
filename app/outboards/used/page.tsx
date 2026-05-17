'use client'

import { useState } from 'react'
import Image from 'next/image'
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
              <div key={outboard.id} className="bg-white border border-silver-mid shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden group">
                <div className="aspect-[4/3] bg-charcoal relative overflow-hidden">
                  {outboard.image ? (
                    <Image src={outboard.image} alt={outboard.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-navy" />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  {outboard.badge && (
                    <span className="absolute top-0 right-0 bg-ocean text-white text-[10px] font-bold px-3 py-1.5 tracking-wider uppercase">{outboard.badge}</span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-charcoal mb-1">{outboard.title}</h3>
                  <p className="text-sm text-silver-dark mb-1">{outboard.year} · {outboard.hp}hp</p>
                  <p className="font-display text-xl font-bold text-navy mb-3">${outboard.price.toLocaleString()}</p>
                  <a href={`/contact?enquiry=${encodeURIComponent(`Enquiry about ${outboard.title}`)}`} className="flex items-center justify-between border border-charcoal/20 text-charcoal text-xs font-bold px-4 py-2.5 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200">
                    Enquire
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
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
