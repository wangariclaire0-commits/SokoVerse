'use client';

const stores = [
  { name: 'Amazon', url: 'https://www.amazon.com', emoji: '📦' },
  { name: 'Jumia', url: 'https://www.jumia.com.ng', emoji: '🛍️' },
  { name: 'Jiji', url: 'https://www.jiji.ng', emoji: '⚡' },
  { name: 'AliExpress', url: 'https://www.aliexpress.com', emoji: '🌐' },
  { name: 'eBay', url: 'https://www.ebay.com', emoji: '🏪' },
  { name: 'Kilimall', url: 'https://www.kilimall.com', emoji: '🚀' },
];

export default function Stores() {
  return (
    <section id="stores" className="bg-gray-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Popular Stores</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {stores.map((store) => (
            <a
              key={store.name}
              href={store.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center group cursor-pointer"
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition">
                {store.emoji}
              </div>
              <p className="font-semibold text-gray-900 group-hover:text-orange transition">
                {store.name}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
