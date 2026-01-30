'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b border-[#E0E0E0] sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <span
              className="text-xl font-black tracking-tight text-[#1A1A1A] uppercase"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              SIMPLYLEGAL
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/categories"
              className="text-[#1A1A1A] hover:text-[#008751] transition-colors font-medium text-sm uppercase tracking-wide"
            >
              Categories
            </Link>
            <Link
              href="/search"
              className="text-[#1A1A1A] hover:text-[#008751] transition-colors font-medium text-sm uppercase tracking-wide"
            >
              Search
            </Link>
            <Link
              href="/about"
              className="text-[#1A1A1A] hover:text-[#008751] transition-colors font-medium text-sm uppercase tracking-wide"
            >
              About Us
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/category/fundamental-rights"
              className="px-5 py-2 bg-[#1A1A1A] text-white font-semibold text-sm uppercase tracking-wide hover:bg-[#008751] transition-colors"
            >
              Know Your Rights
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-[#1A1A1A]"
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
          <div className="md:hidden py-4 border-t border-[#E0E0E0]">
            <div className="flex flex-col space-y-4">
              <Link
                href="/categories"
                className="text-[#1A1A1A] hover:text-[#008751] transition-colors font-medium text-sm uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Categories
              </Link>
              <Link
                href="/search"
                className="text-[#1A1A1A] hover:text-[#008751] transition-colors font-medium text-sm uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                Search
              </Link>
              <Link
                href="/about"
                className="text-[#1A1A1A] hover:text-[#008751] transition-colors font-medium text-sm uppercase tracking-wide"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/category/fundamental-rights"
                className="inline-block px-5 py-3 bg-[#1A1A1A] text-white font-semibold text-sm uppercase tracking-wide text-center hover:bg-[#008751] transition-colors"
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
