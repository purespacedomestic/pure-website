import React from 'react';
export default function ThankYou() {
  return (
    <section>
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold">Thank you!</h2>
        <p className="mt-4 text-gray-600">Your booking request has been received. We'll be in touch shortly.</p>
        <a href="/" className="mt-6 inline-block px-5 py-3 rounded-2xl bg-emerald-500 text-white">Back to Home</a>
      </div>
    </section>
  );
}
