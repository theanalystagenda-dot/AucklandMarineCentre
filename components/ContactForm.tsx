'use client'

import { useState, FormEvent } from 'react'

interface ContactFormProps {
  enquiryType?: string
  formId?: string
  showBoatField?: boolean
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  message?: string
}

export default function ContactForm({ enquiryType = '', formId = 'PLACEHOLDER_ID', showBoatField = false }: ContactFormProps) {
  const [values, setValues] = useState({
    name: '',
    phone: '',
    email: '',
    enquiryType: enquiryType || 'Sales',
    boat: '',
    preferredDate: '',
    message: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function validate(): boolean {
    const next: FormErrors = {}
    if (!values.name.trim()) next.name = 'Name is required'
    if (!values.phone.trim()) next.phone = 'Phone number is required'
    if (!values.email.trim()) next.email = 'Email is required'
    else if (!/\S+@\S+\.\S+/.test(values.email)) next.email = 'Enter a valid email address'
    if (!values.message.trim()) next.message = 'Message is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      setSubmitted(true)
    } catch {
      setErrors({ message: 'Something went wrong. Please try calling us on 09 271 1575.' })
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="bg-success/10 border border-success rounded-xl p-8 text-center">
        <svg className="w-12 h-12 text-success mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-display text-2xl font-bold text-charcoal mb-2">Message Received</h3>
        <p className="text-silver-dark">Thanks for getting in touch. We&apos;ll be in contact within one business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1" htmlFor="cf-name">Full Name</label>
        <input
          id="cf-name"
          type="text"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          className={`w-full border rounded-md px-3 py-2 text-charcoal placeholder-silver-dark focus:outline-none focus:ring-2 focus:ring-ocean ${errors.name ? 'border-red-500' : 'border-silver-mid'}`}
          placeholder="Your full name"
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1" htmlFor="cf-phone">Phone</label>
          <input
            id="cf-phone"
            type="tel"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            className={`w-full border rounded-md px-3 py-2 text-charcoal placeholder-silver-dark focus:outline-none focus:ring-2 focus:ring-ocean ${errors.phone ? 'border-red-500' : 'border-silver-mid'}`}
            placeholder="09 XXX XXXX"
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1" htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            type="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className={`w-full border rounded-md px-3 py-2 text-charcoal placeholder-silver-dark focus:outline-none focus:ring-2 focus:ring-ocean ${errors.email ? 'border-red-500' : 'border-silver-mid'}`}
            placeholder="you@email.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1" htmlFor="cf-type">Enquiry Type</label>
        <select
          id="cf-type"
          value={values.enquiryType}
          onChange={(e) => setValues({ ...values, enquiryType: e.target.value })}
          className="w-full border border-silver-mid rounded-md px-3 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-ocean"
        >
          <option>Sales</option>
          <option>Service</option>
          <option>Finance</option>
          <option>General</option>
        </select>
      </div>

      {showBoatField && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1" htmlFor="cf-boat">Boat / Engine Details</label>
            <input
              id="cf-boat"
              type="text"
              value={values.boat}
              onChange={(e) => setValues({ ...values, boat: e.target.value })}
              className="w-full border border-silver-mid rounded-md px-3 py-2 text-charcoal placeholder-silver-dark focus:outline-none focus:ring-2 focus:ring-ocean"
              placeholder="e.g. 2019 KiwiKraft 550 / Mercury 115"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1" htmlFor="cf-date">Preferred Date</label>
            <input
              id="cf-date"
              type="date"
              value={values.preferredDate}
              onChange={(e) => setValues({ ...values, preferredDate: e.target.value })}
              className="w-full border border-silver-mid rounded-md px-3 py-2 text-charcoal focus:outline-none focus:ring-2 focus:ring-ocean"
            />
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1" htmlFor="cf-msg">Message</label>
        <textarea
          id="cf-msg"
          rows={4}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          className={`w-full border rounded-md px-3 py-2 text-charcoal placeholder-silver-dark focus:outline-none focus:ring-2 focus:ring-ocean resize-none ${errors.message ? 'border-red-500' : 'border-silver-mid'}`}
          placeholder="How can we help you?"
        />
        {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="bg-navy text-white font-medium py-3 px-6 rounded-md hover:bg-navy-light transition-colors duration-200 disabled:opacity-60"
      >
        {submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
