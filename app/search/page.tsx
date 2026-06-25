'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';

  return (
    <div className="min-h-screen bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">
          Search Results for: <span className="text-orange">"{query}"</span>
        </h1>
        <p className="text-gray-600 mb-12">Searching across all stores...</p>

        {/* Placeholder Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition">
              <div className="h-48 bg-gray-200 rounded-lg mb-4"></div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">Product {i}</h3>
              <p className="text-orange text-2xl font-bold mb-4">$99.99</p>
              <button className="w-full bg-orange text-white font-bold py-2 rounded-lg hover:bg-orange/90 transition">
                View Details
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/" className="text-orange font-bold hover:underline">
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <>
      <Header />
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
        <SearchResults />
      </Suspense>
      <Footer />
    </>
  );
}
