import { notFound } from 'next/navigation'
import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'
import ContactForm from '@/components/ContactForm'
import brands from '@/data/brands.json'
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

  return (
    <div>
      <div className="bg-navy py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4">
            <Link href="/boats/new" className="text-silver-dark text-sm hover:text-silver-mid transition-colors">
              ← New Boats
            </Link>
          </div>
          <h1 className="font-display text-5xl lg:text-6xl font-bold text-white mb-4">{brand.name}</h1>
          <p className="text-silver-mid text-lg max-w-2xl">{brand.description}</p>
          {brand.externalUrl && (
            <a href={brand.externalUrl} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-2 text-ocean-light hover:underline text-sm">
              Visit {brand.name} website ↗
            </a>
          )}
        </div>
      </div>

      <div className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Available Models" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {models.map((model) => (
              <div key={model.name} className="bg-silver rounded-xl overflow-hidden border border-silver-mid hover:shadow-md transition-all duration-200">
                <div className="aspect-[4/3] bg-silver-mid flex items-center justify-center">
                  <svg className="w-16 h-16 text-silver-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-charcoal mb-1">{model.name}</h3>
                  <p className="text-sm text-silver-dark mb-2">{model.specs}</p>
                  <p className="text-ocean font-bold mb-4">{model.price}</p>
                  <Link
                    href={`/contact?enquiry=${encodeURIComponent(`Enquiry about ${model.name}`)}`}
                    className="block text-center bg-navy text-white text-sm font-medium py-2 rounded-md hover:bg-navy-light transition-colors"
                  >
                    Enquire
                  </Link>
                </div>
              </div>
            ))}
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
