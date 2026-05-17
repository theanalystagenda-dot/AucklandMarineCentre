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
          <div className="flex items-center gap-3 mb-4">
            <div className="w-3 h-8 bg-mercury-red rounded-sm" />
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white">MerCruiser</h1>
          </div>
          <p className="text-silver-mid text-lg max-w-2xl">
            MerCruiser sterndrives and inboard engines — serviced and supported by AMC&apos;s certified technicians.
          </p>
        </div>
      </div>

      <div className="border-b border-silver-mid bg-white">
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
              <div key={model.name} className="bg-white rounded-xl border border-silver-mid shadow-sm hover:shadow-md transition-all duration-200 p-6">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-charcoal">{model.name}</h3>
                  <span className="text-mercury-red font-bold text-sm">{model.hp}</span>
                </div>
                <p className="text-sm text-silver-dark mb-4">{model.desc}</p>
                <Link href="/contact?enquiry=MerCruiser+enquiry" className="block text-center bg-navy text-white text-sm font-medium py-2 rounded-md hover:bg-navy-light transition-colors">
                  Enquire
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
