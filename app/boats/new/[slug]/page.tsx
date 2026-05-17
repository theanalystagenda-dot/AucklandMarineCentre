import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import SectionHeader from '@/components/SectionHeader'
import ContactForm from '@/components/ContactForm'
import brands from '@/data/brands.json'
import manifest from '@/data/image-manifest.json'
import type { Brand } from '@/types'

export async function generateStaticParams() {
  return brands.map((b) => ({ slug: b.slug }))
}

const placeholderModels = (brandName: string) => [
  { name: `${brandName} 490`, specs: 'Alloy · Single console · 14ft', price: 'From $22,990' },
  { name: `${brandName} 550`, specs: 'Alloy · Hard top · 18ft', price: 'From $38,990' },
  { name: `${brandName} 620`, specs: 'Alloy · Walk-around · 20ft', price: 'From $54,990' },
]

export default async function BrandPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const brand: Brand | undefined = brands.find((b) => b.slug === slug)
  if (!brand) notFound()

  const models = placeholderModels(brand.name)

  // Resolve brand images from manifest - normalise slug to manifest key
  const manifestKey = slug.replace(/-/g, '').replace('boats', '').replace('legacy', 'slr').replace('slr', 'slr')
  const brandImages: string[] = (manifest.boats as Record<string, string[]>)[slug]
    ?? (manifest.boats as Record<string, string[]>)[manifestKey]
    ?? []
  const heroImage = brandImages[0] ?? manifest.hero[2] ?? ''

  return (
    <div>
      {/* Hero - real image if available, navy fallback */}
      <div className="relative h-72 lg:h-96 overflow-hidden">
        {heroImage ? (
          <Image src={heroImage} alt={brand.name} fill className="object-cover object-center" priority />
        ) : (
          <div className="absolute inset-0 bg-navy" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-navy/80 via-navy/40 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/60 to-transparent" />
        <div className="relative h-full flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <Link href="/boats/new" className="text-silver-dark text-sm hover:text-silver-mid transition-colors mb-4 inline-block">
            ← New Boats
          </Link>
          <h1 className="font-display text-5xl lg:text-7xl font-bold text-white leading-tight">{brand.name}</h1>
        </div>
      </div>

      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="text-charcoal leading-relaxed">{brand.description}</p>
            {brand.externalUrl && (
              <a href={brand.externalUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-ocean hover:underline text-sm font-medium">
                Visit {brand.name} website ↗
              </a>
            )}
          </div>

          <SectionHeader title="Available Models" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {models.map((model, idx) => {
              const img = brandImages[idx + 1] ?? brandImages[0] ?? ''
              return (
                <div key={model.name} className="bg-white border border-silver-mid hover:shadow-md transition-all duration-200 overflow-hidden group">
                  <div className="aspect-[4/3] bg-charcoal relative overflow-hidden flex items-center justify-center">
                    {img ? (
                      <Image src={img} alt={model.name} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-br from-charcoal to-navy" />
                        <svg className="relative w-12 h-12 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={0.75}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                      </>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold text-charcoal mb-1">{model.name}</h3>
                    <p className="text-sm text-silver-dark mb-2">{model.specs}</p>
                    <p className="font-display text-xl font-bold text-navy mb-4">{model.price}</p>
                    <Link
                      href={`/contact?enquiry=${encodeURIComponent(`Enquiry about ${model.name}`)}`}
                      className="flex items-center justify-between border border-charcoal/20 text-charcoal text-xs font-bold px-4 py-2.5 hover:bg-navy hover:text-white hover:border-navy transition-all duration-200"
                    >
                      Enquire
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="border-t border-silver-mid pt-16">
            <div className="max-w-xl">
              <SectionHeader title={`Request a ${brand.name} Quote`} subtitle="Tell us what you need and we'll get back to you within one business day." />
              <ContactForm enquiryType="Sales" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
