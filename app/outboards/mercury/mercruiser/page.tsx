'use client'

import { useState } from 'react'
import Link from 'next/link'
import outboardData from '@/data/outboard-ranges.json'
import type { OutboardModel } from '@/types'

const mercruiserModels: OutboardModel[] = (outboardData.mercury as OutboardModel[]).filter(m => m.category === 'MerCruiser')
const tabs = ['Sterndrives', 'Inboards', 'Towsport']

const subModels: Record<string, { name: string; hp: string; desc: string }[]> = {
  Sterndrives: [
    { name: 'MerCruiser 4.5L MPI', hp: '200hp', desc: 'Reliable 4-cylinder sterndrive for 18–22ft vessels.' },
    { name: 'MerCruiser 6.2L V8 MPI', hp: '300hp', desc: 'High-output V8 sterndrive with excellent torque delivery.' },
  ],
  Inboards: [
    { name: 'MerCruiser 6.2L MPI', hp: '350hp', desc: 'Straight-shaft inboard for displacement and semi-planing hulls.' },
    { name: 'MerCruiser 8.2L MAG', hp: '380hp', desc: 'Big block V8 for large cruisers and commercial applications.' },
  ],
  Towsport: [
    { name: 'TowSport 6.2L V8', hp: '330hp', desc: 'Purpose-built towsport engine with PCM calibration for wakeboarding and skiing.' },
  ],
}

export default function MerCruiserPage() {
  const [activeTab, setActiveTab] = useState('Sterndrives')

  return (
    <div>
      <div className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/outboards/mercury" className="text-silver-dark text-sm hover:text-silver-mid transition-colors">← Mercury Outboards</Link>
          </div>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-3 h-10 bg-mercury-red" aria-hidden="true" />
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white tracking-tight">MerCruiser</h1>
          </div>
          <p className="text-silver-mid text-lg max-w-2xl">
            MerCruiser sterndrives and inboard engines - serviced and supported by AMC&apos;s certified technicians.
          </p>
        </div>
      </div>

      <div className="border-b border-silver-mid bg-white sticky top-[60px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-0 -mb-px">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-4 text-sm font-medium border-b-2 transition-colors duration-150 ${
                  activeTab === tab
                    ? 'border-mercury-red text-mercury-red'
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {(subModels[activeTab] ?? []).map((model) => (
              <div key={model.name} className="bg-white border border-silver-mid hover:border-mercury-red/30 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 p-6 flex flex-col group">
                <div className="flex items-center justify-between gap-2 mb-3">
                  <h3 className="font-semibold text-charcoal text-[15px]">{model.name}</h3>
                  <span className="text-mercury-red font-bold text-sm tabular-nums shrink-0">{model.hp}</span>
                </div>
                <p className="text-xs text-silver-dark leading-relaxed mb-5 flex-1">{model.desc}</p>
                <Link
                  href="/contact?enquiry=MerCruiser+enquiry"
                  className="flex items-center justify-between bg-white border border-charcoal/20 text-charcoal text-xs font-bold px-4 py-2.5 tracking-wide hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
                >
                  Enquire
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          {(subModels[activeTab] ?? []).length === 0 && (
            <p className="text-silver-dark text-center py-16">Contact us for current availability in this category.</p>
          )}
        </div>
      </div>
    </div>
  )
}
