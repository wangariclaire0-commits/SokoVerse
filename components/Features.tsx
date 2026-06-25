const features = [
  { icon: '🔍', title: 'Search Anything', desc: 'Find products across all stores' },
  { icon: '🏪', title: 'Compare Every Store', desc: 'Side-by-side price comparison' },
  { icon: '💰', title: 'Get Best Deal', desc: 'Always find the lowest prices' },
  { icon: '✅', title: 'Shop Safely', desc: 'Verified and trusted stores' },
];

export default function Features() {
  return (
    <section className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-md text-center hover:shadow-xl transition">
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
