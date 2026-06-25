import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              <span>Soko</span>
              <span className="text-orange">Verse</span>
            </h3>
            <p className="text-gray-400">Find anything, buy anywhere.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li><Link href="#home" className="hover:text-orange transition">Home</Link></li>
              <li><Link href="#categories" className="hover:text-orange transition">Categories</Link></li>
              <li><Link href="#stores" className="hover:text-orange transition">Stores</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-orange transition">Help Center</a></li>
              <li><a href="#" className="hover:text-orange transition">Contact Us</a></li>
              <li><a href="#" className="hover:text-orange transition">Privacy</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="text-2xl hover:text-orange transition">🐦</a>
              <a href="#" className="text-2xl hover:text-orange transition">📘</a>
              <a href="#" className="text-2xl hover:text-orange transition">📷</a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>© 2026 SokoVerse. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
