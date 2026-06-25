'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg className="w-10 h-10" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="48" height="48" rx="12" fill="#081b39" />
              <text x="24" y="30" fontSize="20" fontWeight="bold" textAnchor="middle" fill="#ff6b00" fontFamily="Poppins">🌎</text>
            </svg>
            <span className="text-2xl font-bold">
              <span className="text-gray-900">Soko</span>
              <span className="text-orange">Verse</span>
            </span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8">
            <Link href="#home" className="text-gray-700 hover:text-orange transition">Home</Link>
            <Link href="#categories" className="text-gray-700 hover:text-orange transition">Categories</Link>
            <Link href="#stores" className="text-gray-700 hover:text-orange transition">Stores</Link>
            <Link href="#products" className="text-gray-700 hover:text-orange transition">Deals</Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-2xl text-gray-700"
          >
            ☰
          </button>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <nav className="md:hidden pb-4 flex flex-col gap-2">
            <Link href="#home" className="block text-gray-700 hover:text-orange transition py-2">Home</Link>
            <Link href="#categories" className="block text-gray-700 hover:text-orange transition py-2">Categories</Link>
            <Link href="#stores" className="block text-gray-700 hover:text-orange transition py-2">Stores</Link>
            <Link href="#products" className="block text-gray-700 hover:text-orange transition py-2">Deals</Link>
          </nav>
        )}
      </div>
    </header>
  );
}
