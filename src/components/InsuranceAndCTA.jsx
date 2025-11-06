import React, { useState } from 'react';
import { ShieldCheck, Phone, Send } from 'lucide-react';

export default function InsuranceAndCTA() {
  const [form, setForm] = useState({ name: '', phone: '', provider: '' });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Frontend-only demo: in a full app, send to backend endpoint.
    setSubmitted(true);
  }

  return (
    <section id="insurance" className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-800 ring-1 ring-emerald-100">
              <ShieldCheck className="h-4 w-4" /> Insurance & Admissions
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Insurance may cover up to 100%
            </h2>
            <p className="mt-3 max-w-xl text-slate-600">
              We verify your benefits discreetly and quickly—often in under 10 minutes. No obligation.
              Your privacy is protected every step of the way.
            </p>
            <p className="mt-2 text-xs text-slate-500">*Coverage varies by plan and medical necessity.</p>

            <div className="mt-6 flex flex-col items-start gap-3 sm:flex-row">
              <a
                href="tel:+15615550123"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
              >
                <Phone className="h-4 w-4" /> Call Now (24/7)
              </a>
              <div className="text-sm text-slate-600">Prefer text or email? Use the quick form.</div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
            {submitted ? (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="inline-flex items-center justify-center rounded-full bg-emerald-100 p-3 ring-1 ring-emerald-200">
                  <Send className="h-5 w-5 text-emerald-700" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">Request received</h3>
                <p className="mt-2 text-sm text-slate-600">
                  A compassionate admissions specialist will reach out shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium text-slate-800">Full name</label>
                  <input
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    autoComplete="name"
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="Jane Doe"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-sm font-medium text-slate-800">Phone number</label>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    required
                    inputMode="tel"
                    autoComplete="tel"
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="provider" className="text-sm font-medium text-slate-800">Insurance provider</label>
                  <input
                    id="provider"
                    name="provider"
                    value={form.provider}
                    onChange={handleChange}
                    required
                    className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-slate-900 placeholder-slate-400 shadow-sm focus:border-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                    placeholder="Blue Cross, Aetna, Cigna..."
                  />
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-sky-700 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-700 focus-visible:ring-offset-2"
                >
                  <Send className="h-4 w-4" /> Verify My Insurance
                </button>
                <p className="text-xs text-slate-500">
                  By submitting, you agree to be contacted by Flagler Health & Wellness. Your information is confidential.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
