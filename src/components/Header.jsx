import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const whatsapp = '+27688111813';
  const waLink = `https://wa.me/${whatsapp.replace('+','')}?text=${encodeURIComponent("Hi, I'd like to book a cleaning with Pure Space.")}`;
  return (
    <header className="border-b">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src="/logo.svg" alt="Pure Space Cleaning" className="h-10" />
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm">
          <NavLink to="/services" className={({isActive}) => isActive ? 'text-sky-600 font-medium' : ''}>Services</NavLink>
          <NavLink to="/gallery" className={({isActive}) => isActive ? 'text-sky-600 font-medium' : ''}>Gallery</NavLink>
          <NavLink to="/about" className={({isActive}) => isActive ? 'text-sky-600 font-medium' : ''}>About</NavLink>
          <NavLink to="/contact" className={({isActive}) => isActive ? 'text-sky-600 font-medium' : ''}>Contact</NavLink>
          <a href={waLink} target="_blank" rel="noreferrer" className="ml-4 px-4 py-2 rounded-xl bg-emerald-500 text-white">Book Now</a>
        </nav>

        <div className="md:hidden">☰</div>
      </div>
    </header>
  );
}
