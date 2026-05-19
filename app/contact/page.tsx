import SectionHeader from '@/components/SectionHeader'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Get in Touch" subtitle="Our team is here Mon–Fri 8am–5:30pm, Sat 8am–4pm, Sun 10am–3pm." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="overflow-hidden mb-6 border border-silver-mid">
              <iframe
                src="https://maps.google.com/maps?q=321+Ti+Rakau+Drive+Burswood+Auckland&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                title="Auckland Marine Centre location"
                className="block"
              />
            </div>

            <div className="bg-silver border border-silver-mid p-6 flex flex-col gap-5">
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver-dark mb-2">Address</h3>
                <p className="text-charcoal text-sm leading-relaxed">321 Ti Rakau Drive<br />Burswood, Auckland 2013</p>
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver-dark mb-2">Phone</h3>
                <a href="tel:0927111575" className="text-ocean hover:text-navy transition-colors font-semibold tabular-nums">09 271 1575</a>
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver-dark mb-2">Email</h3>
                <div className="flex flex-col gap-1">
                  <a href="mailto:sales@aucklandmarine.co.nz" className="text-ocean hover:text-navy transition-colors text-sm">Sales: sales@aucklandmarine.co.nz</a>
                  <a href="mailto:service@aucklandmarine.co.nz" className="text-ocean hover:text-navy transition-colors text-sm">Service: service@aucklandmarine.co.nz</a>
                </div>
              </div>
              <div>
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-silver-dark mb-2">Hours</h3>
                <div className="text-charcoal text-sm flex flex-col gap-1">
                  <div className="flex justify-between"><span>Monday – Friday</span><span className="tabular-nums">8:00am – 5:30pm</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span className="tabular-nums">8:00am – 4:00pm</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span className="tabular-nums">10:00am – 3:00pm</span></div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <SectionHeader title="Send an Enquiry" />
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  )
}
