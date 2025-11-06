import React from 'react';
import { Phone, Shield, Clock, BadgeCheck } from 'lucide-react';

const phoneNumber = "+1 (561) 555-0123"; // Replace with real tracking number when available

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-white to-emerald-50" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:flex lg:items-center lg:gap-12 lg:py-28">
        {/* Copy */}
        <div className="flex-1">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-sky-700 ring-1 ring-sky-100 backdrop-blur">
            <Shield className="h-4 w-4" aria-hidden="true" />
            Accredited care • Confidential & compassionate
          </div>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
            Safe Medical Detox & Dual Diagnosis Treatment in West Palm Beach
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-700">
            Boutique 20-bed setting for truly individualized care. 24/7 medical team on site.
            We verify insurance quickly and discreetly.
          </p>

          {/* Key points */}
          <ul className="mt-6 flex flex-wrap gap-3 text-sm text-slate-600">
            <li className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
              <Clock className="h-4 w-4 text-emerald-600" /> 24/7 Admissions
            </li>
            <li className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
              <BadgeCheck className="h-4 w-4 text-emerald-600" /> Insurance verified fast
            </li>
            <li className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200">
              <Shield className="h-4 w-4 text-emerald-600" /> Privacy-first
            </li>
          </ul>

          {/* CTAs */}
          <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
            <a
              href={`tel:${phoneNumber.replace(/[^\d+]/g, '')}`}
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 text-base font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              <Phone className="h-5 w-5" /> Call 24/7 {phoneNumber}
            </a>
            <a
              href="#insurance"
              className="inline-flex items-center justify-center rounded-lg px-5 py-3 text-base font-medium text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
            >
              Verify Insurance
            </a>
          </div>

          {/* Trust markers */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500">
            <span>Trusted by families nationwide</span>
            <span className="h-4 w-px bg-slate-200" aria-hidden="true" />
            <span>Part of Magnified Health Systems</span>
            <span className="h-4 w-px bg-slate-200" aria-hidden="true" />
            <span>JCAHO Accredited</span>
          </div>
        </div>

        {/* Visual */}
        <div className="mt-10 w-full flex-1 lg:mt-0">
          <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-lg ring-1 ring-slate-200">
            <img
              src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&w=1800&auto=format&fit=crop"
              alt="Calm, sunlit interior representing a soothing recovery environment"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-emerald-100/20" />
          </div>
          <p className="mt-3 text-center text-xs text-slate-500">
            Located minutes from Palm Beach International Airport
          </p>
        </div>
      </div>
    </section>
  );
}
