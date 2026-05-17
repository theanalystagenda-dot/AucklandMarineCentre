'use client'

import { useState } from 'react'
import Link from 'next/link'
import outboardData from '@/data/outboard-ranges.json'
import type { OutboardModel } from '@/types'

const allModels: OutboardModel[] = outboardData.suzuki as OutboardModel[]
const allCategories = Array.from(new Set(allModels.map((m) => m.category)))
const tabs = ['All Suzuki', ...allCategories]

export default function SuzukiPage() {
  const [activeTab, setActiveTab] = useState('All Suzuki')

  const filtered = activeTab === 'All Suzuki'
    ? allModels
    : allModels.filter((m) => m.category === activeTab)

  return (
    <div>
      <div className="bg-suzuki-blue py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-4">Suzuki Outboards</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Full Suzuki range from 2.5hp to 350hp. Authorised Suzuki dealer and certified service centre at Auckland Marine Centre.
          </p>
        </div>
      </div>

      <div className="border-b border-silver-mid bg-white sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-0 -mb-px">
            {tabs.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-150 ${
                  activeTab === cat
                    ? 'border-suzuki-blue text-suzuki-blue'
                    : 'border-transparent text-silver-dark hover:text-charcoal'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="py-12 bg-silver">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((model) => (
              <div key={model.name} className="bg-white rounded-xl border border-silver-mid shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
                <div className="aspect-[4/3] bg-silver flex items-center justify-center">
                  <svg className="w-16 h-16 text-silver-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="p-5">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-charcoal">{model.name}</h3>
                    <span className="text-suzuki-blue font-bold text-sm">{model.hpRange}</span>
                  </div>
                  <p className="text-sm text-silver-dark mb-4">{model.keyFeature}</p>
                  <Link href="/contact?enquiry=Suzuki+outboard+enquiry" className="block text-center bg-suzuki-blue text-white text-sm font-medium py-2 rounded-md hover:opacity-90 transition-opacity">
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
