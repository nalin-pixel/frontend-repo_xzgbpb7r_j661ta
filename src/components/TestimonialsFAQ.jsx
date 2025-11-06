import React from 'react';
import { Quote, Star, Shield } from 'lucide-react';

const testimonials = [
  {
    name: 'Alex M.',
    text: 'From the first phone call I felt heard and safe. The team supported me through detox and into rehab without judgment.',
    rating: 5,
  },
  {
    name: 'Samantha R.',
    text: 'Beautiful, calm environment and truly attentive staff. They helped my anxiety and addiction together.',
    rating: 5,
  },
  {
    name: 'David P.',
    text: 'They made insurance easy and kept my family in the loop. I’m grateful for the care I received here.',
    rating: 5,
  },
];

const faqs = [
  {
    q: 'What is the average length of stay?',
    a: 'Detox typically lasts 5–10 days depending on substances and history. Residential stays often range from 2–4 weeks based on clinical need.',
  },
  {
    q: 'Do you treat co-occurring mental health conditions?',
    a: 'Yes. Our dual-diagnosis program integrates psychiatric services to address anxiety, depression, trauma, and other concerns alongside addiction.',
  },
  {
    q: 'Can I bring my phone?',
    a: 'Phones are typically held during the acute detox period for safety. As you stabilize, supervised access is provided according to your care plan.',
  },
  {
    q: 'Is my information confidential?',
    a: 'Absolutely. We follow strict HIPAA guidelines and protect your privacy at every step.',
  },
];

export default function TestimonialsFAQ() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Testimonials */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-sky-50 px-3 py-1 text-sky-800 ring-1 ring-sky-100">
              <Quote className="h-4 w-4" /> Real stories
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Proof you can feel
            </h2>
            <ul className="mt-6 grid grid-cols-1 gap-4">
              {testimonials.map((t) => (
                <li key={t.name} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
                  <div className="flex items-center gap-2 text-amber-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <p className="mt-2 text-slate-700">“{t.text}”</p>
                  <p className="mt-2 text-sm font-medium text-slate-900">{t.name}</p>
                </li>
              ))}
            </ul>
            <p className="mt-4 flex items-center gap-2 text-sm text-slate-600">
              <Shield className="h-4 w-4 text-emerald-600" /> JCAHO accredited • 4.3★ Google rating
            </p>
          </div>

          {/* FAQs */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-emerald-800 ring-1 ring-emerald-100">
              <Shield className="h-4 w-4" /> FAQs
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
              Common questions, answered clearly
            </h2>
            <div className="mt-6 divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
              {faqs.map((f) => (
                <details key={f.q} className="group p-5">
                  <summary className="cursor-pointer list-none text-base font-medium text-slate-900 outline-none">
                    {f.q}
                  </summary>
                  <p className="mt-2 text-sm text-slate-600">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
