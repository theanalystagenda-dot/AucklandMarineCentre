'use client'

import { useState, FormEvent } from 'react'
import SectionHeader from '@/components/SectionHeader'

const FORMSPREE_ID = 'PLACEHOLDER_ID'

const inputBase = 'w-full border px-3 py-2.5 text-charcoal placeholder-silver-dark text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ocean focus-visible:border-ocean transition-colors duration-150'
const inputDefault = `${inputBase} border-silver-mid`
const inputError = `${inputBase} border-red-500`

interface QuickFormState {
  name: string; phone: string; email: string; amount: string; term: string; deposit: string
}
interface QuickFormErrors {
  name?: string; phone?: string; email?: string; amount?: string
}

function QuickFinanceForm() {
  const [values, setValues] = useState<QuickFormState>({ name: '', phone: '', email: '', amount: '', term: '36', deposit: '' })
  const [errors, setErrors] = useState<QuickFormErrors>({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function validate() {
    const next: QuickFormErrors = {}
    if (!values.name.trim()) next.name = 'Required'
    if (!values.phone.trim()) next.phone = 'Required'
    if (!values.email.trim()) next.email = 'Required'
    else if (!/\S+@\S+\.\S+/.test(values.email)) next.email = 'Enter a valid email'
    if (!values.amount.trim()) next.amount = 'Required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, type: 'Quick Finance Application' }),
      })
      setSubmitted(true)
    } catch {
      // fall through; user can call instead
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) return (
    <div className="bg-success/10 border border-success p-8 text-center" role="alert" aria-live="polite">
      <svg className="w-12 h-12 text-success mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className="font-display text-2xl font-bold text-charcoal mb-2 tracking-tight">Application Received</h3>
      <p className="text-silver-dark text-sm">We&apos;ll be in touch within one business day with a quick decision.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div>
        <label htmlFor="qf-name" className="block text-sm font-medium text-charcoal mb-1.5">
          Full Name <span className="text-red-500" aria-hidden="true">*</span>
        </label>
        <input
          id="qf-name"
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => setValues({ ...values, name: e.target.value })}
          className={errors.name ? inputError : inputDefault}
          placeholder="Your name"
          aria-invalid={!!errors.name}
        />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="qf-phone" className="block text-sm font-medium text-charcoal mb-1.5">
            Phone <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="qf-phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={(e) => setValues({ ...values, phone: e.target.value })}
            className={errors.phone ? inputError : inputDefault}
            placeholder="09 XXX XXXX"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="qf-email" className="block text-sm font-medium text-charcoal mb-1.5">
            Email <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="qf-email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
            className={errors.email ? inputError : inputDefault}
            placeholder="you@email.com"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <label htmlFor="qf-amount" className="block text-sm font-medium text-charcoal mb-1.5">
            Loan Amount <span className="text-red-500" aria-hidden="true">*</span>
          </label>
          <input
            id="qf-amount"
            type="text"
            value={values.amount}
            onChange={(e) => setValues({ ...values, amount: e.target.value })}
            className={errors.amount ? inputError : inputDefault}
            placeholder="e.g. $35,000"
            aria-invalid={!!errors.amount}
          />
          {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount}</p>}
        </div>
        <div>
          <label htmlFor="qf-term" className="block text-sm font-medium text-charcoal mb-1.5">Term</label>
          <select
            id="qf-term"
            value={values.term}
            onChange={(e) => setValues({ ...values, term: e.target.value })}
            className={inputDefault}
          >
            <option value="24">24</option>
            <option value="36">36</option>
            <option value="48">48</option>
            <option value="60">60</option>
          </select>
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="bg-ocean text-white text-sm font-bold py-3 px-6 tracking-wide hover:bg-ocean-light active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
      >
        {submitting ? 'Sending...' : 'Get a Quick Decision'}
      </button>
    </form>
  )
}

type Step = 1 | 2 | 3

function FullFinanceForm() {
  const [step, setStep] = useState<Step>(1)
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [values, setValues] = useState({
    name: '', dob: '', address: '', phone: '', email: '',
    employer: '', jobTitle: '', income: '', employedSince: '',
    amount: '', deposit: '', term: '36', purpose: 'Boat purchase',
  })

  function update(field: string, val: string) { setValues((v) => ({ ...v, [field]: val })) }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setSubmitting(true)
    try {
      await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...values, type: 'Full Finance Application' }),
      })
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) return (
    <div className="bg-success/10 border border-success p-8 text-center" role="alert" aria-live="polite">
      <svg className="w-12 h-12 text-success mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <h3 className="font-display text-2xl font-bold text-charcoal mb-2 tracking-tight">Application Submitted</h3>
      <p className="text-silver-dark text-sm">Our finance team will review and contact you within one business day.</p>
    </div>
  )

  const steps = ['Personal', 'Employment', 'Loan Details']

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2 mb-2" aria-label="Application steps">
        {steps.map((label, i) => {
          const idx = (i + 1) as Step
          const active = idx === step
          const done = idx < step
          return (
            <div key={label} className="flex items-center gap-2">
              <div className={`w-7 h-7 flex items-center justify-center text-xs font-bold ${done || active ? 'bg-ocean text-white' : 'bg-silver-mid text-silver-dark'}`}>
                {idx}
              </div>
              <span className={`text-sm ${active ? 'text-ocean font-semibold' : done ? 'text-charcoal' : 'text-silver-dark'}`}>{label}</span>
              {i < steps.length - 1 && (
                <svg className="w-3 h-3 text-silver-dark mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
            </div>
          )
        })}
      </div>

      {step === 1 && (
        <>
          <div>
            <label htmlFor="ff-name" className="block text-sm font-medium text-charcoal mb-1.5">Full Name</label>
            <input id="ff-name" type="text" autoComplete="name" value={values.name} onChange={(e) => update('name', e.target.value)} className={inputDefault} placeholder="Full legal name" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="ff-dob" className="block text-sm font-medium text-charcoal mb-1.5">Date of Birth</label>
              <input id="ff-dob" type="date" value={values.dob} onChange={(e) => update('dob', e.target.value)} className={inputDefault} />
            </div>
            <div>
              <label htmlFor="ff-phone" className="block text-sm font-medium text-charcoal mb-1.5">Phone</label>
              <input id="ff-phone" type="tel" autoComplete="tel" value={values.phone} onChange={(e) => update('phone', e.target.value)} className={inputDefault} placeholder="09 XXX XXXX" />
            </div>
          </div>
          <div>
            <label htmlFor="ff-email" className="block text-sm font-medium text-charcoal mb-1.5">Email</label>
            <input id="ff-email" type="email" autoComplete="email" value={values.email} onChange={(e) => update('email', e.target.value)} className={inputDefault} placeholder="you@email.com" />
          </div>
          <div>
            <label htmlFor="ff-address" className="block text-sm font-medium text-charcoal mb-1.5">Home Address</label>
            <input id="ff-address" type="text" autoComplete="street-address" value={values.address} onChange={(e) => update('address', e.target.value)} className={inputDefault} placeholder="Street, Suburb, City" />
          </div>
          <button
            type="button"
            onClick={() => setStep(2)}
            className="inline-flex items-center justify-center gap-2 bg-ocean text-white text-sm font-bold py-3 tracking-wide hover:bg-ocean-light active:scale-[0.98] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
          >
            Next: Employment
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div>
            <label htmlFor="ff-employer" className="block text-sm font-medium text-charcoal mb-1.5">Employer Name</label>
            <input id="ff-employer" type="text" value={values.employer} onChange={(e) => update('employer', e.target.value)} className={inputDefault} placeholder="Company name" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="ff-job" className="block text-sm font-medium text-charcoal mb-1.5">Job Title</label>
              <input id="ff-job" type="text" value={values.jobTitle} onChange={(e) => update('jobTitle', e.target.value)} className={inputDefault} />
            </div>
            <div>
              <label htmlFor="ff-since" className="block text-sm font-medium text-charcoal mb-1.5">Employed Since</label>
              <input id="ff-since" type="date" value={values.employedSince} onChange={(e) => update('employedSince', e.target.value)} className={inputDefault} />
            </div>
          </div>
          <div>
            <label htmlFor="ff-income" className="block text-sm font-medium text-charcoal mb-1.5">Annual Income (before tax)</label>
            <input id="ff-income" type="text" value={values.income} onChange={(e) => update('income', e.target.value)} className={inputDefault} placeholder="e.g. $85,000" />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(1)}
              className="flex-1 border border-silver-mid text-charcoal text-sm font-bold py-3 tracking-wide hover:bg-silver transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
            >
              Back
            </button>
            <button
              type="button"
              onClick={() => setStep(3)}
              className="flex-1 inline-flex items-center justify-center gap-2 bg-ocean text-white text-sm font-bold py-3 tracking-wide hover:bg-ocean-light active:scale-[0.98] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
            >
              Next: Loan Details
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="ff-amount" className="block text-sm font-medium text-charcoal mb-1.5">Loan Amount</label>
              <input id="ff-amount" type="text" value={values.amount} onChange={(e) => update('amount', e.target.value)} className={inputDefault} placeholder="e.g. $35,000" />
            </div>
            <div>
              <label htmlFor="ff-deposit" className="block text-sm font-medium text-charcoal mb-1.5">Deposit</label>
              <input id="ff-deposit" type="text" value={values.deposit} onChange={(e) => update('deposit', e.target.value)} className={inputDefault} placeholder="e.g. $5,000" />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="ff-term" className="block text-sm font-medium text-charcoal mb-1.5">Loan Term (months)</label>
              <select id="ff-term" value={values.term} onChange={(e) => update('term', e.target.value)} className={inputDefault}>
                <option value="24">24</option>
                <option value="36">36</option>
                <option value="48">48</option>
                <option value="60">60</option>
              </select>
            </div>
            <div>
              <label htmlFor="ff-purpose" className="block text-sm font-medium text-charcoal mb-1.5">Purpose</label>
              <input id="ff-purpose" type="text" value={values.purpose} onChange={(e) => update('purpose', e.target.value)} className={inputDefault} />
            </div>
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setStep(2)}
              className="flex-1 border border-silver-mid text-charcoal text-sm font-bold py-3 tracking-wide hover:bg-silver transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
            >
              Back
            </button>
            <button
              type="submit"
              disabled={submitting}
              className="flex-1 bg-navy text-white text-sm font-bold py-3 tracking-wide hover:bg-navy-light active:scale-[0.98] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed focus-visible:outline-2 focus-visible:outline-ocean focus-visible:outline-offset-2"
            >
              {submitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </div>
        </>
      )}
    </form>
  )
}

export default function FinancePage() {
  return (
    <div className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          title="Marine Finance"
          subtitle="Competitive rates and flexible terms to get you on the water sooner."
          align="center"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-silver border border-silver-mid p-8">
            <h2 className="font-display text-2xl font-bold text-charcoal mb-1 tracking-tight">Quick Finance Application</h2>
            <p className="text-silver-dark text-sm mb-6">A few details and we&apos;ll get back to you fast.</p>
            <QuickFinanceForm />
          </div>
          <div className="bg-white border border-silver-mid p-8">
            <h2 className="font-display text-2xl font-bold text-charcoal mb-1 tracking-tight">Full Finance Application</h2>
            <p className="text-silver-dark text-sm mb-6">Complete application for a formal lending decision.</p>
            <FullFinanceForm />
          </div>
        </div>
        <p className="text-center text-xs text-silver-dark mt-8">
          Finance available from 0% - subject to lender approval. Terms and conditions apply.
        </p>
      </div>
    </div>
  )
}
