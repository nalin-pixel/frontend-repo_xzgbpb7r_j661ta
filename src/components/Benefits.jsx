import React from 'react';
import { HeartHandshake, Building2, Stethoscope, Brain, Users } from 'lucide-react';

const benefits = [
  {
    title: 'Boutique, 20-bed setting',
    desc: 'Smaller census means more time with clinicians and a quieter healing environment.',
    icon: Building2,
  },
  {
    title: 'Dual-diagnosis expertise',
    desc: 'Integrated treatment for co-occurring mental health and substance use disorders.',
    icon: Brain,
  },
  {
    title: '24/7 medical detox',
    desc: 'Round-the-clock monitoring and comfort-focused detox protocols.',
    icon: Stethoscope,
  },
  {
    title: 'Insurance-friendly care',
    desc: 'We work with most major plans and verify benefits in minutes.',
    icon: HeartHandshake,
  },
  {
    title: 'Family involvement',
    desc: 'Compassionate updates and programming to support loved ones.',
    icon: Users,
  },
];

export default function Benefits() {
  return (
    <section className="bg-white py-14 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <header className="max-w-3xl">
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Why choose Flagler Health & Wellness
          </h2>
          <p className="mt-3 text-slate-600">
            Compassion first, outcomes focused. Everything we do is designed to help you feel safe,
            supported, and ready for meaningful change.
          </p>
        </header>

        <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map(({ title, desc, icon: Icon }) => (
            <li key={title} className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
              <div className="inline-flex items-center justify-center rounded-xl bg-emerald-50 p-3 ring-1 ring-emerald-100">
                <Icon className="h-5 w-5 text-emerald-700" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
