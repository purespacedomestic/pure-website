import React from "react";

export default function Contact() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6 text-gray-800">Contact Us</h2>
        <p className="text-gray-600 mb-8">
          Have a question or want to book our cleaning services? We’d love to hear from you!
        </p>

        <div className="bg-white shadow-lg rounded-2xl p-8 space-y-4">
          <p><strong>📞 Phone / WhatsApp:</strong> +27 68 811 1813 / +27 37 260 944</p>
          <p><strong>📧 Email:</strong> purespacedomesticcleaning@gmail.com</p>
          <p><strong>📍 Location:</strong> Cape Town, South Africa</p>
        </div>

        <a
          href="mailto:purespacedomesticcleaning@gmail.com"
          className="inline-block mt-8 bg-green-600 text-white px-6 py-3 rounded-xl hover:bg-green-700 transition"
        >
          Send an Email
        </a>
      </div>
    </section>
  );
}
