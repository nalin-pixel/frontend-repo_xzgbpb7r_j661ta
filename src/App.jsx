import React from 'react';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import Programs from './components/Programs';
import InsuranceAndCTA from './components/InsuranceAndCTA';
import TestimonialsFAQ from './components/TestimonialsFAQ';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Sticky header with phone */}
      <header className="sticky top-0 z-20 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg bg-emerald-600" aria-hidden="true" />
            <span className="text-sm font-semibold tracking-tight text-slate-900">Flagler Health & Wellness</span>
          </div>
          <a
            href="tel:+15615550123"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-emerald-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
          >
            Call 24/7: (561) 555-0123
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Benefits />
        <Programs />
        <InsuranceAndCTA />
        <TestimonialsFAQ />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-6 py-8">
          <div className="grid grid-cols-1 items-center gap-6 sm:grid-cols-3">
            <div>
              <p className="text-sm font-semibold text-slate-900">Flagler Health & Wellness</p>
              <p className="mt-1 text-sm text-slate-600">1803 S Australian Ave, West Palm Beach, FL</p>
            </div>
            <div className="text-sm text-slate-600">
              Licensed and JCAHO accredited. Part of Magnified Health Systems.
            </div>
            <div className="sm:text-right">
              <a href="#insurance" className="text-sm font-medium text-emerald-700 hover:underline">
                Start your recovery today – verify insurance
              </a>
            </div>
          </div>
          <div className="mt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} Flagler Health & Wellness. All rights reserved. Privacy Policy.
          </div>
        </div>
      </footer>
    </div>
  );
}
