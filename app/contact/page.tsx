import SectionHeader from '@/components/SectionHeader'
import ContactForm from '@/components/ContactForm'

export default function ContactPage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Get in Touch" subtitle="Our team is here Mon–Fri 8am–5:30pm, Sat 8am–4pm, Sun 10am–3pm." />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="rounded-xl overflow-hidden mb-6 border border-silver-mid">
              <iframe
                src="https://maps.google.com/maps?q=321+Ti+Rakau+Drive+Burswood+Auckland&output=embed"
                width="100%"
                height="300"
                loading="lazy"
                title="Auckland Marine Centre location"
                className="block"
              />
            </div>

            <div className="bg-silver rounded-xl p-6 flex flex-col gap-4">
              <div>
                <h3 className="font-semibold text-charcoal mb-1 text-sm uppercase tracking-wider text-silver-dark">Address</h3>
                <p className="text-charcoal">321 Ti Rakau Drive<br />Burswood, Auckland 2013</p>
              </div>
              <div>
                <h3 className="font-semibold text-charcoal mb-1 text-sm uppercase tracking-wider text-silver-dark">Phone</h3>
                <a href="tel:0927111575" className="text-ocean hover:underline font-medium">09 271 1575</a>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-silver-dark font-semibold mb-1">Email</h3>
                <div className="flex flex-col gap-1">
                  <a href="mailto:sales@aucklandmarine.co.nz" className="text-ocean hover:underline text-sm">Sales: sales@aucklandmarine.co.nz</a>
                  <a href="mailto:service@aucklandmarine.co.nz" className="text-ocean hover:underline text-sm">Service: service@aucklandmarine.co.nz</a>
                </div>
              </div>
              <div>
                <h3 className="text-sm uppercase tracking-wider text-silver-dark font-semibold mb-1">Hours</h3>
                <div className="text-charcoal text-sm flex flex-col gap-1">
                  <div className="flex justify-between"><span>Monday – Friday</span><span>8:00am – 5:30pm</span></div>
                  <div className="flex justify-between"><span>Saturday</span><span>8:00am – 4:00pm</span></div>
                  <div className="flex justify-between"><span>Sunday</span><span>10:00am – 3:00pm</span></div>
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
