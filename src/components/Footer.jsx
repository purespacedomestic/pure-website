import React from 'react';
export default function Footer() {
  return (
    <footer className="border-t mt-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <div>© {new Date().getFullYear()} Pure Space Cleaning</div>
        <div className="flex gap-4 mt-3 md:mt-0">
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </div>
      </div>
    </footer>
  );
}
