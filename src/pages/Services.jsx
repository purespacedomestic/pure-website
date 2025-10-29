import React from 'react';
export default function Services() {
  const services = [
    { title: 'Recurring Home Cleaning', desc: 'Weekly / fortnightly / monthly plans.' , price: 'From R300'},
    { title: 'Deep Clean', desc: 'One-off deep cleans for spring cleaning.', price: 'From R650'},
    { title: 'Move In / Move Out', desc: 'Thorough cleans for tenancy changes.', price: 'Contact us'},
    { title: 'Holiday-Ready', desc: 'Short-stay turnovers for hosts.', price: 'From R350'},
  ];
  return (
    <section id="services">
      <h2 className="text-2xl font-bold">Services</h2>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map(s => (
          <div key={s.title} className="bg-white rounded-2xl p-5 shadow-sm border">
            <div className="font-semibold">{s.title}</div>
            <div className="mt-2 text-sm text-gray-500">{s.desc}</div>
            <div className="mt-4 text-sm text-gray-700 font-medium">{s.price}</div>
            <a className="mt-4 inline-block text-sm text-sky-600" href="/contact">Request this service</a>
          </div>
        ))}
      </div>
    </section>
  );
}
