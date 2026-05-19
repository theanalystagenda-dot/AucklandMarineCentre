'use client'

import { useState } from 'react'
import SectionHeader from '@/components/SectionHeader'
import specialsData from '@/data/specials.json'
import type { Special } from '@/types'

const specials: Special[] = specialsData as Special[]
const tabs = ['All Deals', 'Boat Specials', 'Outboard Specials', 'Boat Show Deals']

const tabToCategory: Record<string, string | null> = {
  'All Deals': null,
  'Boat Specials': 'boat',
  'Outboard Specials': 'outboard',
  'Boat Show Deals': 'boat-show',
}

export default function SpecialsPage() {
  const [activeTab, setActiveTab] = useState('All Deals')

  const filtered = tabToCategory[activeTab]
    ? specials.filter((s) => s.category === tabToCategory[activeTab])
    : specials

  return (
    <div>
      <div className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-4">Current Specials</h1>
          <p className="text-silver-mid text-lg max-w-2xl">Deals on boats, outboards, and packages. Updated regularly - check back often.</p>
        </div>
      </div>

      <div className="border-b border-silver-mid bg-white sticky top-[60px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-0 -mb-px" role="tablist" aria-label="Specials categories">
            {tabs.map((tab) => (
              <button
                key={tab}
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-1 ${
                  activeTab === tab
                    ? 'border-ocean text-ocean'
                    : 'border-transparent text-silver-dark hover:text-charcoal'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 lg:py-16 bg-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-silver-dark text-center py-16">No deals in this category right now. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((deal) => (
                <div key={deal.id} className="bg-white border border-silver-mid shadow-sm hover:shadow-md hover:border-ocean/30 transition-all duration-200 overflow-hidden flex flex-col group hover:-translate-y-0.5">
                  <div className="h-0.5 bg-ocean/0 group-hover:bg-ocean transition-all duration-300" />
                  <div className="aspect-[4/3] bg-charcoal relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-navy opacity-90" />
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: 'radial-gradient(circle, var(--color-silver-mid) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    />
                    {deal.badge && (
                      <span className="absolute top-0 right-0 bg-ocean text-white text-[10px] font-bold px-3 py-1.5 tracking-wider uppercase">
                        {deal.badge}
                      </span>
                    )}
                    {deal.expires && (
                      <span className="absolute bottom-3 left-3 bg-warning text-white text-[10px] font-bold px-2.5 py-1 tracking-wider uppercase">
                        Expires {new Date(deal.expires).toLocaleDateString('en-NZ', { day: 'numeric', month: 'short' })}
                      </span>
                    )}
                    <svg className="relative z-10 w-12 h-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                    <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-5 flex flex-col flex-1 gap-2">
                    <h3 className="font-semibold text-charcoal leading-snug text-[15px]">{deal.title}</h3>
                    <p className="text-xs text-silver-dark leading-relaxed line-clamp-3 flex-1">{deal.description}</p>
                    {deal.price && (
                      <p className="font-display text-2xl font-bold text-navy leading-none mt-1">{deal.price}</p>
                    )}
                    <div className="mt-auto pt-4">
                      <a
                        href="/contact?enquiry=Special+offer+enquiry"
                        className="flex items-center justify-between bg-white border border-charcoal/20 text-charcoal text-xs font-bold px-4 py-2.5 tracking-wide hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
                      >
                        Enquire About This Deal
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
