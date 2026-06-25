'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Hero() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?q=${encodeURIComponent(search)}`);
    }
  };

  return (
    <section id="home" className="bg-gradient-to-br from-dark-blue to-blue-dark text-white py-32 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Find Anything.<br />Buy Anywhere.
        </h1>
        
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Compare products from Amazon, Jumia, Jiji, eBay, AliExpress and thousands of stores.
        </p>

        {/* Search Box */}
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-2 max-w-2xl mx-auto">
          <div className="flex-1 relative">
            <span className="absolute left-4 top-4 text-gray-400">🔍</span>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full pl-12 pr-4 py-3 rounded-lg outline-none text-gray-900 font-medium"
            />
          </div>
          <button
            type="submit"
            className="bg-orange hover:bg-orange/90 text-white font-bold py-3 px-8 rounded-lg transition duration-300 whitespace-nowrap"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
}
