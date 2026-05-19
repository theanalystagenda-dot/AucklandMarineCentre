'use client'

import { useState, useRef, FormEvent } from 'react'

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

const inputBase = 'w-full border px-3 py-2.5 text-charcoal placeholder-silver-dark text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:border-ocean transition-colors duration-150'
const inputDefault = `${inputBase} border-silver-mid`
const inputError = `${inputBase} border-red-500`

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
  const firstErrorRef = useRef<HTMLInputElement | null>(null)

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
    if (!validate()) {
      setTimeout(() => firstErrorRef.current?.focus(), 50)
      return
    }
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
      <div className="bg-success/10 border border-success p-8 text-center" role="alert" aria-live="polite">
        <svg className="w-12 h-12 text-success mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <h3 className="font-display text-2xl font-bold text-charcoal mb-2">Message Received</h3>
        <p className="text-silver-dark">Thanks for getting in touch. We&apos;ll be in contact within one business day.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1.5" htmlFor="cf-name">
          Full Name <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="cf-name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          ref={errors.name ? (el) => { firstErrorRef.current = el } : undefined}
          className={errors.name ? inputError : inputDefault}
          placeholder="Your full name"
          aria-required="true"
          aria-describedby={errors.name ? 'cf-name-error' : undefined}
          aria-invalid={!!errors.name}
        />
        {errors.name && <p id="cf-name-error" className="text-red-500 text-xs mt-1" role="alert">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5" htmlFor="cf-phone">
            Phone <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            className={errors.phone ? inputError : inputDefault}
            placeholder="09 XXX XXXX"
            aria-required="true"
            aria-describedby={errors.phone ? 'cf-phone-error' : undefined}
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p id="cf-phone-error" className="text-red-500 text-xs mt-1" role="alert">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1.5" htmlFor="cf-email">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="cf-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className={errors.email ? inputError : inputDefault}
            placeholder="you@email.com"
            aria-required="true"
            aria-describedby={errors.email ? 'cf-email-error' : undefined}
            aria-invalid={!!errors.email}
          />
          {errors.email && <p id="cf-email-error" className="text-red-500 text-xs mt-1" role="alert">{errors.email}</p>}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1.5" htmlFor="cf-type">Enquiry Type</label>
        <select
          id="cf-type"
          value={values.enquiryType}
          onChange={(e) => setValues({ ...values, enquiryType: e.target.value })}
          className="w-full border border-silver-mid px-3 py-2.5 text-charcoal text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:border-ocean transition-colors duration-150"
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
            <label className="block text-sm font-medium text-charcoal mb-1.5" htmlFor="cf-boat">Boat / Engine Details</label>
            <input
              id="cf-boat"
              type="text"
              value={values.boat}
              onChange={(e) => setValues({ ...values, boat: e.target.value })}
              className={inputDefault}
              placeholder="e.g. 2019 KiwiKraft 550 / Mercury 115"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-charcoal mb-1.5" htmlFor="cf-date">Preferred Date</label>
            <input
              id="cf-date"
              type="date"
              value={values.preferredDate}
              onChange={(e) => setValues({ ...values, preferredDate: e.target.value })}
              className={inputDefault}
            />
          </div>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-charcoal mb-1.5" htmlFor="cf-msg">
          Message <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <textarea
          id="cf-msg"
          rows={4}
          value={values.message}
          onChange={(e) => setValues({ ...values, message: e.target.value })}
          className={`${errors.message ? inputError : inputDefault} resize-none`}
          placeholder="How can we help you?"
          aria-required="true"
          aria-describedby={errors.message ? 'cf-msg-error' : undefined}
          aria-invalid={!!errors.message}
        />
        {errors.message && <p id="cf-msg-error" className="text-red-500 text-xs mt-1" role="alert">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="bg-navy text-white text-sm font-bold py-3 px-6 tracking-wide hover:bg-navy-light active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
      >
        {submitting ? (
          <span className="flex items-center justify-center gap-2">
            <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : 'Send Message'}
      </button>

      <p className="text-[11px] text-silver-dark">
        <span className="text-red-500">*</span> Required fields
      </p>
    </form>
  )
}
