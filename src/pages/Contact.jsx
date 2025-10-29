import React from 'react';
import { useNavigate } from 'react-router-dom';
export default function Contact() {
  const phone = '+2737260944';
  const whatsapp = '+27688111813';
  const wa = `https://wa.me/${whatsapp.replace('+','')}?text=${encodeURIComponent('Hi, I\'d like to book a cleaning with Pure Space.')}`;
  const mail = 'purespacedomesticcleaning@gmail.com';
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const subject = encodeURIComponent('Booking Request from Pure Space');
    const body = encodeURIComponent(`Name: ${form.name.value}\nEmail: ${form.email.value}\nMessage: ${form.message.value}`);
    # Open mail client
    window.location.href = `mailto:${mail}?subject=${subject}&body=${body}`;
    setTimeout(() => navigate('/thank-you'), 800);
  }

  return (
    <section id="contact">
      <h2 className="text-2xl font-bold">Contact</h2>
      <p className="mt-2 text-gray-600">Reach out by WhatsApp, phone or email.</p>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-2xl p-6 shadow border">
          <div className="text-sm font-medium">WhatsApp</div>
          <a className="text-sky-600 block mt-2" href={wa} target="_blank" rel="noreferrer">Message us on WhatsApp</a>
          <div className="mt-4 text-sm font-medium">Phone</div>
          <a className="text-sky-600 block mt-2" href={`tel:${phone}`}>{phone}</a>
          <div className="mt-4 text-sm font-medium">Email</div>
          <a className="text-sky-600 block mt-2" href={`mailto:${mail}`}>{mail}</a>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 shadow border">
          <label className="block text-sm font-medium">Your name</label>
          <input name="name" className="mt-2 w-full rounded-lg border-gray-200 p-3" placeholder="Jane Doe" required />
          <label className="block text-sm font-medium mt-4">Email</label>
          <input name="email" type="email" className="mt-2 w-full rounded-lg border-gray-200 p-3" placeholder="you@example.com" required />
          <label className="block text-sm font-medium mt-4">Message</label>
          <textarea name="message" className="mt-2 w-full rounded-lg border-gray-200 p-3" rows={4} placeholder="Tell us what you need" required />
          <div className="mt-4 flex items-center justify-between">
            <button type="submit" className="px-4 py-2 rounded-xl bg-sky-600 text-white">Send Message</button>
            <a className="text-emerald-600" href={wa} target="_blank" rel="noreferrer">Or message on WhatsApp</a>
          </div>
        </form>
      </div>
    </section>
  );
}
