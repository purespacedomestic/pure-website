import React from 'react';
export default function Home() {
  const whatsapp = '+27688111813';
  const wa = `https://wa.me/${whatsapp.replace('+','')}?text=${encodeURIComponent('Hi, I\'d like to book a cleaning with Pure Space.')}`;
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="text-sm text-sky-600 font-medium">Professional Domestic Cleaning</p>
          <h1 className="mt-4 text-4xl font-extrabold">Pure Space — spotless homes, happier people</h1>
          <p className="mt-4 text-gray-600">Reliable, insured cleaning teams for recurring and one-off cleans across your area.</p>
          <div className="mt-6 flex gap-4">
            <a href={wa} target="_blank" rel="noreferrer" className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-emerald-500 text-white">Message on WhatsApp</a>
            <a href="/contact" className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border">Get a Quote</a>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow border">
          <div className="h-56 rounded-lg bg-gradient-to-br from-sky-50 to-emerald-50 flex flex-col items-center justify-center">
            <div className="font-semibold text-emerald-700">Book a Trusted Cleaner</div>
            <div className="mt-2 text-sm text-gray-500">Fast quotes and flexible scheduling</div>
            <div className="mt-4 font-bold">From R300 / visit</div>
          </div>
        </div>
      </div>
    </section>
);
}
