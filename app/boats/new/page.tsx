import SectionHeader from '@/components/SectionHeader'
import BrandCard from '@/components/BrandCard'
import brands from '@/data/brands.json'

export default function NewBoatsPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="New Boats"
          subtitle="New Zealand's largest range — 75+ models across 11 leading brands, all in stock at our Burswood showroom."
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {brands.map((brand) => (
            <BrandCard
              key={brand.slug}
              brand={brand}
              href={`/boats/new/${brand.slug}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
