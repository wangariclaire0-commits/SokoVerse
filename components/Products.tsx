'use client';

import { useRouter } from 'next/navigation';
import Image from 'next/image';

const products = [
  {
    id: 1,
    name: 'iPhone 15 Pro',
    price: '$999',
    image: 'https://via.placeholder.com/300x300?text=iPhone+15+Pro',
    stores: ['Amazon', 'Jumia', 'eBay'],
  },
  {
    id: 2,
    name: 'Samsung S24 Ultra',
    price: '$1,099',
    image: 'https://via.placeholder.com/300x300?text=Samsung+S24',
    stores: ['Amazon', 'AliExpress', 'eBay'],
  },
  {
    id: 3,
    name: 'Sony WH-1000XM5',
    price: '$299',
    image: 'https://via.placeholder.com/300x300?text=Sony+Headphones',
    stores: ['Amazon', 'Jumia'],
  },
  {
    id: 4,
    name: 'iPad Air',
    price: '$599',
    image: 'https://via.placeholder.com/300x300?text=iPad+Air',
    stores: ['Amazon', 'Jiji'],
  },
];

export default function Products() {
  const router = useRouter();

  const handleCompare = (productName: string) => {
    router.push(`/search?q=${encodeURIComponent(productName)}`);
  };

  return (
    <section id="products" className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Trending Products</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-300 overflow-hidden group">
            {/* Product Image */}
            <div className="relative h-56 bg-gray-200 overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Product Info */}
            <div className="p-6">
              <h3 className="font-bold text-lg text-gray-900 mb-2">{product.name}</h3>
              <p className="text-3xl font-bold text-orange mb-4">{product.price}</p>

              {/* Store Badges */}
              <div className="mb-4 flex flex-wrap gap-2">
                {product.stores.map((store) => (
                  <span key={store} className="text-xs bg-blue-100 text-dark-blue px-2 py-1 rounded-full font-semibold">
                    {store}
                  </span>
                ))}
              </div>

              {/* Compare Button */}
              <button
                onClick={() => handleCompare(product.name)}
                className="w-full bg-orange hover:bg-orange/90 text-white font-bold py-2 rounded-lg transition duration-300"
              >
                Compare Prices
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
