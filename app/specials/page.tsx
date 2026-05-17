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
          <p className="text-silver-mid text-lg max-w-2xl">Deals on boats, outboards, and packages. Updated regularly — check back often.</p>
        </div>
      </div>

      <div className="border-b border-silver-mid bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-0 -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-150 ${
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

      <div className="py-12 bg-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filtered.length === 0 ? (
            <p className="text-silver-dark text-center py-16">No deals in this category right now. Check back soon.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((deal) => (
                <div key={deal.id} className="bg-white rounded-xl border border-silver-mid shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col">
                  <div className="aspect-[4/3] bg-silver-mid relative flex items-center justify-center">
                    {deal.badge && (
                      <span className="absolute top-3 right-3 bg-ocean text-white text-xs font-semibold px-2.5 py-1 rounded-md">
                        {deal.badge}
                      </span>
                    )}
                    {deal.expires && (
                      <span className="absolute bottom-3 left-3 bg-warning text-white text-xs font-medium px-2 py-0.5 rounded">
                        Expires {new Date(deal.expires).toLocaleDateString('en-NZ', { day: 'numeric', month: 'short' })}
                      </span>
                    )}
                    <svg className="w-16 h-16 text-silver-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                    </svg>
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="font-semibold text-charcoal mb-2">{deal.title}</h3>
                    <p className="text-sm text-silver-dark mb-3 flex-1">{deal.description}</p>
                    {deal.price && <p className="text-ocean font-bold text-xl mb-4">{deal.price}</p>}
                    <a href="/contact?enquiry=Special+offer+enquiry" className="block text-center bg-navy text-white text-sm font-medium py-2 rounded-md hover:bg-navy-light transition-colors">
                      Enquire About This Deal
                    </a>
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
