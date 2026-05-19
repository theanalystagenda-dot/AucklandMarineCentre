'use client'

import { useState } from 'react'
import Link from 'next/link'
import outboardData from '@/data/outboard-ranges.json'
import type { OutboardModel } from '@/types'

const allModels: OutboardModel[] = outboardData.mercury as OutboardModel[]
const categories = ['All Mercury', 'Verado', 'FourStroke', 'TwoStroke', 'Sea Pro', 'Avator Electric', 'MerCruiser']

export default function MercuryPage() {
  const [activeTab, setActiveTab] = useState('All Mercury')

  const filtered = activeTab === 'All Mercury'
    ? allModels
    : allModels.filter((m) => m.category === activeTab)

  return (
    <div>
      <div className="bg-navy py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-3 h-10 bg-mercury-red" aria-hidden="true" />
            <h1 className="font-display text-5xl lg:text-6xl font-bold text-white tracking-tight">Mercury Outboards</h1>
          </div>
          <p className="text-silver-mid text-lg max-w-2xl">
            Full Mercury range in stock - from 2.5hp portables to 350hp Verados. Auckland&apos;s authorised Mercury dealer and certified service centre.
          </p>
        </div>
      </div>

      <div className="border-b border-silver-mid bg-white sticky top-[60px] z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto gap-0 -mb-px">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-150 ${
                  activeTab === cat
                    ? 'border-mercury-red text-mercury-red'
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
          {activeTab === 'MerCruiser' ? (
            <div className="mb-6 bg-white border border-silver-mid p-6">
              <p className="text-charcoal text-sm leading-relaxed mb-4">MerCruiser sterndrive and inboard engines. For full MerCruiser range including Sterndrives, Inboards, and Towsport engines:</p>
              <Link
                href="/outboards/mercury/mercruiser"
                className="inline-flex items-center gap-2 bg-navy text-white text-xs font-bold px-5 py-3 tracking-wider uppercase hover:bg-navy-light active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
              >
                View Full MerCruiser Range
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          ) : null}

          {filtered.length === 0 ? (
            <p className="text-silver-dark text-center py-16">No models in this category yet. Contact us for availability.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((model) => (
                <div key={model.name} className="bg-white border border-silver-mid hover:border-mercury-red/30 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 overflow-hidden flex flex-col group">
                  <div className="h-0.5 bg-mercury-red/0 group-hover:bg-mercury-red transition-all duration-300" />
                  <div className="aspect-[4/3] bg-charcoal relative overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-navy opacity-90" />
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage: 'radial-gradient(circle, var(--color-silver-mid) 1px, transparent 1px)',
                        backgroundSize: '20px 20px',
                      }}
                    />
                    <svg className="relative z-10 w-14 h-14 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div className="p-5 flex flex-col gap-2 flex-1">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="font-semibold text-charcoal text-[15px]">{model.name}</h3>
                      <span className="text-mercury-red font-bold text-sm tabular-nums shrink-0">{model.hpRange}</span>
                    </div>
                    <p className="text-xs text-silver-dark leading-relaxed">{model.keyFeature}</p>
                    <div className="mt-auto pt-4">
                      <Link
                        href="/contact?enquiry=Mercury+outboard+enquiry"
                        className="flex items-center justify-between bg-white border border-charcoal/20 text-charcoal text-xs font-bold px-4 py-2.5 tracking-wide hover:bg-navy hover:text-white hover:border-navy transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
                      >
                        Enquire
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
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
