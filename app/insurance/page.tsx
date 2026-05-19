import Link from 'next/link'
import SectionHeader from '@/components/SectionHeader'

const covered = [
  'Hull and motor damage (accidental and weather)',
  'Theft of the vessel and equipment',
  'Third-party liability on the water',
  'Trailer cover (on-road and on-site)',
  'Personal effects and fishing gear',
  'Emergency towing and salvage',
]

export default function InsurancePage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Marine Insurance" />
        <p className="text-charcoal text-[15px] leading-relaxed mb-6">
          Auckland Marine Centre can connect you with marine insurance to protect your boat, motor, and trailer. We work with leading New Zealand marine insurance providers to offer cover suited to how you use your vessel - whether that&apos;s fishing the harbour, coastal cruising, or blue-water passages.
        </p>

        <h2 className="font-display text-3xl font-bold text-charcoal mt-10 mb-5 tracking-tight">What&apos;s Typically Covered</h2>
        <ul className="flex flex-col gap-3 mb-12">
          {covered.map((item) => (
            <li key={item} className="flex items-start gap-3 text-charcoal text-[15px]">
              <svg className="w-5 h-5 text-success mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              {item}
            </li>
          ))}
        </ul>

        <div className="bg-silver border border-silver-mid p-8">
          <h3 className="font-display text-2xl font-bold text-charcoal mb-2 tracking-tight">Talk to Our Sales Team</h3>
          <p className="text-silver-dark mb-6 text-sm leading-relaxed">
            Ask about insurance when you&apos;re buying your next boat or outboard - we can help arrange cover before you leave the yard.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a
              href="tel:0927111575"
              className="inline-flex items-center justify-center gap-2 bg-navy text-white text-xs font-bold px-6 py-3.5 tracking-wider uppercase hover:bg-navy-light active:scale-95 transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2 tabular-nums"
            >
              Call 09 271 1575
            </a>
            <Link
              href="/contact?enquiry=Insurance+enquiry"
              className="inline-flex items-center justify-center gap-2 border border-navy text-navy text-xs font-bold px-6 py-3.5 tracking-wider uppercase hover:bg-navy hover:text-white transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
            >
              Send an Enquiry
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
