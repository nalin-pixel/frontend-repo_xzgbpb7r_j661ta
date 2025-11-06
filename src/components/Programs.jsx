import React from 'react';
import { Activity, BedDouble, Pill, Sparkles, Flower2 } from 'lucide-react';

const programs = [
  {
    title: 'Medical Detox',
    desc: '24/7 monitoring with evidence-based comfort protocols until you’re stable for therapy.',
    icon: Pill,
  },
  {
    title: 'Inpatient Rehab',
    desc: 'Structured daily programming in a calm, supportive environment focused on healing.',
    icon: BedDouble,
  },
  {
    title: 'Dual Diagnosis',
    desc: 'Integrated psychiatric care for co-occurring mental health and addiction.',
    icon: Activity,
  },
  {
    title: 'Medication-Assisted Treatment',
    desc: 'Thoughtful use of medications when appropriate to support long-term recovery.',
    icon: Sparkles,
  },
  {
    title: 'Wellness Practices',
    desc: 'Holistic therapies like yoga, art, and mindfulness to restore balance.',
    icon: Flower2,
  },
];

export default function Programs() {
  return (
    <section className="bg-slate-50 py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Programs designed for safety and lasting change
          </h2>
          <p className="mt-3 text-slate-600">
            From the first day of detox through residential treatment, our team delivers coordinated care
            that addresses the whole person.
          </p>
        </header>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map(({ title, desc, icon: Icon }) => (
            <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="inline-flex items-center justify-center rounded-xl bg-sky-50 p-3 ring-1 ring-sky-100">
                <Icon className="h-5 w-5 text-sky-700" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
