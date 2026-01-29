import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-2xl">⚖️</span>
              <span className="text-xl font-bold text-white">SimplyLegal</span>
            </div>
            <p className="text-sm mb-4">
              Making Nigerian laws accessible to everyone. Learn about your rights
              and responsibilities in simple, easy-to-understand language.
            </p>
            <p className="text-xs text-gray-500">
              Disclaimer: This website provides general legal information, not legal
              advice. For specific legal matters, please consult a qualified lawyer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-white transition-colors">
                  All Categories
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-white transition-colors">
                  Search Laws
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3 className="text-white font-semibold mb-4">Popular Categories</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/category/traffic"
                  className="hover:text-white transition-colors"
                >
                  Traffic Laws
                </Link>
              </li>
              <li>
                <Link
                  href="/category/consumer"
                  className="hover:text-white transition-colors"
                >
                  Consumer Rights
                </Link>
              </li>
              <li>
                <Link
                  href="/category/tenancy"
                  className="hover:text-white transition-colors"
                >
                  Tenancy Laws
                </Link>
              </li>
              <li>
                <Link
                  href="/category/employment"
                  className="hover:text-white transition-colors"
                >
                  Employment Laws
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} SimplyLegal. All rights reserved.</p>
          <p className="mt-2 text-gray-500">
            Made with care for Nigerians everywhere
          </p>
        </div>
      </div>
    </footer>
  );
}
