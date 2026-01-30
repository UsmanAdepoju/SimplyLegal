'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-[#FDF8F3] border-b border-[#E8DFD5] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-[#C4A35A] text-xl">✦</span>
            <span
              className="text-xl font-bold text-[#2D2A26]"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              SimplyLegal
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-[#2D2A26] hover:text-[#1B4332] transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/categories"
              className="text-[#2D2A26] hover:text-[#1B4332] transition-colors font-medium"
            >
              Categories
            </Link>
            <Link
              href="/search"
              className="text-[#2D2A26] hover:text-[#1B4332] transition-colors font-medium"
            >
              Search
            </Link>
            <Link
              href="/about"
              className="text-[#2D2A26] hover:text-[#1B4332] transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="/category/fundamental-rights"
              className="inline-flex items-center px-5 py-2 bg-[#1B4332] text-white font-semibold rounded-full hover:bg-[#2D5A3D] transition-all text-sm"
            >
              Know Your Rights
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#2D2A26]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#E8DFD5]">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-[#2D2A26] hover:text-[#1B4332] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/categories"
                className="text-[#2D2A26] hover:text-[#1B4332] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/search"
                className="text-[#2D2A26] hover:text-[#1B4332] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Search
              </Link>
              <Link
                href="/about"
                className="text-[#2D2A26] hover:text-[#1B4332] transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/category/fundamental-rights"
                className="inline-flex items-center justify-center px-5 py-3 bg-[#1B4332] text-white font-semibold rounded-full hover:bg-[#2D5A3D] transition-all text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Know Your Rights
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
