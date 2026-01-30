import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <span
                className="text-xl font-black tracking-tight uppercase"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                SIMPLYLEGAL
              </span>
            </Link>
            <p className="text-sm text-[#9CA3AF] mb-4 max-w-sm">
              Making Nigerian laws accessible to everyone. Know your rights in plain English. Download and share with friends.
            </p>
            <p className="text-xs text-[#6B7280]">
              Disclaimer: This website provides general legal information, not legal advice. For specific legal matters, please consult a qualified lawyer.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wide">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-[#9CA3AF] hover:text-[#D4A843] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/categories" className="text-[#9CA3AF] hover:text-[#D4A843] transition-colors">
                  All Categories
                </Link>
              </li>
              <li>
                <Link href="/search" className="text-[#9CA3AF] hover:text-[#D4A843] transition-colors">
                  Search Laws
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-[#9CA3AF] hover:text-[#D4A843] transition-colors">
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Popular */}
          <div>
            <h3 className="font-bold mb-4 text-sm uppercase tracking-wide">
              Popular
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/category/fundamental-rights" className="text-[#9CA3AF] hover:text-[#D4A843] transition-colors">
                  Fundamental Rights
                </Link>
              </li>
              <li>
                <Link href="/category/citizenship" className="text-[#9CA3AF] hover:text-[#D4A843] transition-colors">
                  Citizenship
                </Link>
              </li>
              <li>
                <Link href="/category/consumer" className="text-[#9CA3AF] hover:text-[#D4A843] transition-colors">
                  Consumer Rights
                </Link>
              </li>
              <li>
                <Link href="/category/employment" className="text-[#9CA3AF] hover:text-[#D4A843] transition-colors">
                  Employment Laws
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#374151] mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#6B7280]">
            &copy; {new Date().getFullYear()} SimplyLegal. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-[#6B7280]">
            <span>Made for Nigerians</span>
            <span className="text-lg">🇳🇬</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
