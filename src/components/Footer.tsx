import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#2D2A26] text-[#E8DFD5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-[#C4A35A] text-xl">✦</span>
              <span
                className="text-xl font-bold text-white"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                SimplyLegal
              </span>
            </div>
            <p className="text-sm mb-4 leading-relaxed text-[#a8a29e]">
              Making Nigerian laws accessible to everyone. Know your rights in plain English. Download and share with friends.
            </p>
            <p className="text-xs text-[#78716c]">
              Disclaimer: This website provides general legal information, not legal advice. For specific legal matters, please consult a qualified lawyer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="text-white font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Quick Links
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/" className="hover:text-[#C4A35A] transition-colors flex items-center">
                  <span className="text-[#C4A35A] mr-2 text-xs">✦</span>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-[#C4A35A] transition-colors flex items-center">
                  <span className="text-[#C4A35A] mr-2 text-xs">✦</span>
                  All Categories
                </Link>
              </li>
              <li>
                <Link href="/search" className="hover:text-[#C4A35A] transition-colors flex items-center">
                  <span className="text-[#C4A35A] mr-2 text-xs">✦</span>
                  Search Laws
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#C4A35A] transition-colors flex items-center">
                  <span className="text-[#C4A35A] mr-2 text-xs">✦</span>
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular Categories */}
          <div>
            <h3
              className="text-white font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Popular
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/category/fundamental-rights"
                  className="hover:text-[#C4A35A] transition-colors flex items-center"
                >
                  <span className="text-[#C4A35A] mr-2 text-xs">✦</span>
                  Fundamental Rights
                </Link>
              </li>
              <li>
                <Link
                  href="/category/citizenship"
                  className="hover:text-[#C4A35A] transition-colors flex items-center"
                >
                  <span className="text-[#C4A35A] mr-2 text-xs">✦</span>
                  Citizenship
                </Link>
              </li>
              <li>
                <Link
                  href="/category/consumer"
                  className="hover:text-[#C4A35A] transition-colors flex items-center"
                >
                  <span className="text-[#C4A35A] mr-2 text-xs">✦</span>
                  Consumer Rights
                </Link>
              </li>
              <li>
                <Link
                  href="/category/employment"
                  className="hover:text-[#C4A35A] transition-colors flex items-center"
                >
                  <span className="text-[#C4A35A] mr-2 text-xs">✦</span>
                  Employment Laws
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#3d3a36] mt-12 pt-8 text-center text-sm">
          <p className="text-[#a8a29e]">
            &copy; {new Date().getFullYear()} SimplyLegal. All rights reserved.
          </p>
          <p className="mt-2 text-[#78716c] flex items-center justify-center">
            Made with <span className="text-[#C4A35A] mx-1">✦</span> for Nigerians everywhere 🇳🇬
          </p>
        </div>
      </div>
    </footer>
  );
}
