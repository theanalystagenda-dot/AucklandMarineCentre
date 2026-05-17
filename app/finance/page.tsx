'use client'

import { useState, FormEvent } from 'react'
import SectionHeader from '@/components/SectionHeader'

const FORMSPREE_ID = 'PLACEHOLDER_ID'

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
    if (!values.amount.trim()) next.amount = 'Required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (!validate()) return
    setSubmitting(true)
    await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...values, type: 'Quick Finance Application' }),
    })
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) return (
    <div className="bg-success/10 border border-success rounded-xl p-8 text-center">
      <h3 className="font-display text-2xl font-bold text-charcoal mb-2">Application Received</h3>
      <p className="text-silver-dark">We&apos;ll be in touch within one business day with a quick decision.</p>
    </div>
  )

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Full Name</label>
        <input type="text" value={values.name} onChange={(e) => setValues({ ...values, name: e.target.value })}
          className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean ${errors.name ? 'border-red-500' : 'border-silver-mid'}`} placeholder="Your name" />
        {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Phone</label>
          <input type="tel" value={values.phone} onChange={(e) => setValues({ ...values, phone: e.target.value })}
            className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean ${errors.phone ? 'border-red-500' : 'border-silver-mid'}`} placeholder="09 XXX XXXX" />
          {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Email</label>
          <input type="email" value={values.email} onChange={(e) => setValues({ ...values, email: e.target.value })}
            className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean ${errors.email ? 'border-red-500' : 'border-silver-mid'}`} placeholder="you@email.com" />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
        </div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <label className="block text-sm font-medium text-charcoal mb-1">Loan Amount</label>
          <input type="text" value={values.amount} onChange={(e) => setValues({ ...values, amount: e.target.value })}
            className={`w-full border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean ${errors.amount ? 'border-red-500' : 'border-silver-mid'}`} placeholder="e.g. $35,000" />
          {errors.amount && <p className="text-red-500 text-xs mt-1">{errors.amount}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Term</label>
          <select value={values.term} onChange={(e) => setValues({ ...values, term: e.target.value })}
            className="w-full border border-silver-mid rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean">
            <option>24</option><option>36</option><option>48</option><option>60</option>
          </select>
        </div>
      </div>
      <button type="submit" disabled={submitting} className="bg-ocean text-white font-semibold py-3 rounded-md hover:bg-ocean-light transition-colors disabled:opacity-60">
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
    await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...values, type: 'Full Finance Application' }),
    })
    setSubmitting(false)
    setSubmitted(true)
  }

  if (submitted) return (
    <div className="bg-success/10 border border-success rounded-xl p-8 text-center">
      <h3 className="font-display text-2xl font-bold text-charcoal mb-2">Application Submitted</h3>
      <p className="text-silver-dark">Our finance team will review and contact you within one business day.</p>
    </div>
  )

  const steps = ['Personal', 'Employment', 'Loan Details']

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex gap-2 mb-2">
        {steps.map((label, i) => (
          <div key={label} className="flex items-center gap-2">
            <div className={`w-7 h-7 rounded-sm flex items-center justify-center text-xs font-bold ${i + 1 <= step ? 'bg-ocean text-white' : 'bg-silver-mid text-silver-dark'}`}>
              {i + 1}
            </div>
            <span className={`text-sm ${i + 1 === step ? 'text-ocean font-medium' : 'text-silver-dark'}`}>{label}</span>
            {i < steps.length - 1 && <span className="text-silver-dark mx-1">→</span>}
          </div>
        ))}
      </div>

      {step === 1 && (
        <>
          <div><label className="block text-sm font-medium text-charcoal mb-1">Full Name</label>
            <input type="text" value={values.name} onChange={(e) => update('name', e.target.value)} className="w-full border border-silver-mid rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean" placeholder="Full legal name" /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="block text-sm font-medium text-charcoal mb-1">Date of Birth</label>
              <input type="date" value={values.dob} onChange={(e) => update('dob', e.target.value)} className="w-full border border-silver-mid rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean" /></div>
            <div><label className="block text-sm font-medium text-charcoal mb-1">Phone</label>
              <input type="tel" value={values.phone} onChange={(e) => update('phone', e.target.value)} className="w-full border border-silver-mid rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean" placeholder="09 XXX XXXX" /></div>
          </div>
          <div><label className="block text-sm font-medium text-charcoal mb-1">Email</label>
            <input type="email" value={values.email} onChange={(e) => update('email', e.target.value)} className="w-full border border-silver-mid rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean" placeholder="you@email.com" /></div>
          <div><label className="block text-sm font-medium text-charcoal mb-1">Home Address</label>
            <input type="text" value={values.address} onChange={(e) => update('address', e.target.value)} className="w-full border border-silver-mid rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean" placeholder="Street, Suburb, City" /></div>
          <button type="button" onClick={() => setStep(2)} className="bg-ocean text-white font-semibold py-3 rounded-md hover:bg-ocean-light transition-colors">Next: Employment →</button>
        </>
      )}

      {step === 2 && (
        <>
          <div><label className="block text-sm font-medium text-charcoal mb-1">Employer Name</label>
            <input type="text" value={values.employer} onChange={(e) => update('employer', e.target.value)} className="w-full border border-silver-mid rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean" placeholder="Company name" /></div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="block text-sm font-medium text-charcoal mb-1">Job Title</label>
              <input type="text" value={values.jobTitle} onChange={(e) => update('jobTitle', e.target.value)} className="w-full border border-silver-mid rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean" /></div>
            <div><label className="block text-sm font-medium text-charcoal mb-1">Employed Since</label>
              <input type="date" value={values.employedSince} onChange={(e) => update('employedSince', e.target.value)} className="w-full border border-silver-mid rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean" /></div>
          </div>
          <div><label className="block text-sm font-medium text-charcoal mb-1">Annual Income (before tax)</label>
            <input type="text" value={values.income} onChange={(e) => update('income', e.target.value)} className="w-full border border-silver-mid rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean" placeholder="e.g. $85,000" /></div>
          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(1)} className="flex-1 border border-silver-mid text-charcoal font-medium py-3 rounded-md hover:bg-silver transition-colors">← Back</button>
            <button type="button" onClick={() => setStep(3)} className="flex-1 bg-ocean text-white font-semibold py-3 rounded-md hover:bg-ocean-light transition-colors">Next: Loan Details →</button>
          </div>
        </>
      )}

      {step === 3 && (
        <>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="block text-sm font-medium text-charcoal mb-1">Loan Amount</label>
              <input type="text" value={values.amount} onChange={(e) => update('amount', e.target.value)} className="w-full border border-silver-mid rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean" placeholder="e.g. $35,000" /></div>
            <div><label className="block text-sm font-medium text-charcoal mb-1">Deposit</label>
              <input type="text" value={values.deposit} onChange={(e) => update('deposit', e.target.value)} className="w-full border border-silver-mid rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean" placeholder="e.g. $5,000" /></div>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div><label className="block text-sm font-medium text-charcoal mb-1">Loan Term (months)</label>
              <select value={values.term} onChange={(e) => update('term', e.target.value)} className="w-full border border-silver-mid rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean">
                <option>24</option><option>36</option><option>48</option><option>60</option>
              </select></div>
            <div><label className="block text-sm font-medium text-charcoal mb-1">Purpose</label>
              <input type="text" value={values.purpose} onChange={(e) => update('purpose', e.target.value)} className="w-full border border-silver-mid rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-ocean" /></div>
          </div>
          <div className="flex gap-3">
            <button type="button" onClick={() => setStep(2)} className="flex-1 border border-silver-mid text-charcoal font-medium py-3 rounded-md hover:bg-silver transition-colors">← Back</button>
            <button type="submit" disabled={submitting} className="flex-1 bg-navy text-white font-semibold py-3 rounded-md hover:bg-navy-light transition-colors disabled:opacity-60">
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
        <SectionHeader title="Marine Finance" subtitle="Competitive rates and flexible terms to get you on the water sooner." align="center" />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-silver rounded-xl p-8">
            <h2 className="font-display text-2xl font-bold text-charcoal mb-1">Quick Finance Application</h2>
            <p className="text-silver-dark text-sm mb-6">A few details and we&apos;ll get back to you fast.</p>
            <QuickFinanceForm />
          </div>
          <div className="bg-white rounded-xl border border-silver-mid p-8">
            <h2 className="font-display text-2xl font-bold text-charcoal mb-1">Full Finance Application</h2>
            <p className="text-silver-dark text-sm mb-6">Complete application for a formal lending decision.</p>
            <FullFinanceForm />
          </div>
        </div>
        <p className="text-center text-xs text-silver-dark mt-6">
          Finance available from 0% - subject to lender approval. Terms and conditions apply.
        </p>
      </div>
    </div>
  )
}
