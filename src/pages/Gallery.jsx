import React from 'react';
export default function Gallery() {
  const placeholders = [1,2,3,4];
  return (
    <section id="gallery">
      <h2 className="text-2xl font-bold">Gallery</h2>
      <p className="mt-2 text-gray-600">Replace these placeholders with your before & after photos.</p>
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {placeholders.map(i => <div key={i} className="h-36 rounded-lg bg-gradient-to-br from-gray-100 to-white border flex items-center justify-center text-gray-400">Photo {i}</div>)}
      </div>
    </section>
  );
}
