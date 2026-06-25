'use client';

import { useRouter } from 'next/navigation';

const categories = [
  { icon: '📱', name: 'Electronics', value: 'electronics' },
  { icon: '👕', name: 'Fashion', value: 'fashion' },
  { icon: '🏠', name: 'Home', value: 'home' },
  { icon: '💄', name: 'Beauty', value: 'beauty' },
  { icon: '🚗', name: 'Vehicles', value: 'vehicles' },
  { icon: '💻', name: 'Computers', value: 'computers' },
];

export default function Categories() {
  const router = useRouter();

  const handleCategory = (categoryValue: string) => {
    router.push(`/search?q=${encodeURIComponent(categoryValue)}`);
  };

  return (
    <section id="categories" className="max-w-7xl mx-auto px-4 py-20">
      <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Top Categories</h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {categories.map((category) => (
          <button
            key={category.value}
            onClick={() => handleCategory(category.value)}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center cursor-pointer group"
          >
            <div className="text-5xl mb-3 group-hover:scale-110 transition">
              {category.icon}
            </div>
            <p className="font-semibold text-gray-900 group-hover:text-orange transition">
              {category.name}
            </p>
          </button>
        ))}
      </div>
    </section>
  );
}
