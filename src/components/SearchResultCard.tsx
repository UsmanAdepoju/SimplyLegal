'use client';

import Link from 'next/link';
import { Law } from '@/types';
import { categories } from '@/data/categories';

interface SearchResultCardProps {
  law: Law;
  variant?: 'green' | 'mustard' | 'dark';
}

const variants = {
  green: {
    bg: 'bg-[#008751]',
    text: 'text-white',
    accent: '#D4A843',
    accentText: 'text-[#D4A843]',
  },
  mustard: {
    bg: 'bg-[#D4A843]',
    text: 'text-[#1A1A1A]',
    accent: '#008751',
    accentText: 'text-[#008751]',
  },
  dark: {
    bg: 'bg-[#1A1A1A]',
    text: 'text-white',
    accent: '#D4A843',
    accentText: 'text-[#D4A843]',
  },
};

export default function SearchResultCard({ law, variant = 'green' }: SearchResultCardProps) {
  const style = variants[variant];
  const category = categories.find(c => c.id === law.category);

  // Truncate summary for card display
  const displaySummary = law.summary.length > 100
    ? law.summary.substring(0, 100) + '...'
    : law.summary;

  return (
    <Link href={`/law/${law.id}`} className="block group">
      {/* Visual Card Preview - SQUARE */}
      <div
        className={`${style.bg} ${style.text} aspect-square w-full p-6 relative cursor-pointer transition-transform group-hover:scale-[1.02]`}
        style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
      >
        {/* Top bar - Nigerian flag stripe */}
        <div className="absolute top-0 left-0 right-0 h-1.5 flex">
          <div className="w-1/3 bg-[#008751]"></div>
          <div className="w-1/3 bg-white"></div>
          <div className="w-1/3 bg-[#008751]"></div>
        </div>

        {/* Content */}
        <div className="h-full flex flex-col justify-between pt-2">
          {/* Category Badge */}
          {category && (
            <div className="mb-2">
              <span className={`inline-flex items-center text-xs uppercase tracking-wide ${style.accentText}`}>
                {category.icon} {category.name}
              </span>
            </div>
          )}

          {/* Quote */}
          <div className="flex-1 flex flex-col justify-center">
            <p className="text-lg md:text-xl font-bold leading-tight">
              &ldquo;{displaySummary}&rdquo;
            </p>
          </div>

          {/* Bottom section */}
          <div>
            {/* Divider line */}
            <div className="w-12 h-0.5 mb-3" style={{ backgroundColor: style.accent }}></div>

            {/* Section reference */}
            <p className={`text-sm font-semibold ${style.accentText}`}>
              {law.section || 'Nigerian Law'}
            </p>

            {/* Branding */}
            <div className="flex items-center justify-between mt-3">
              <span className="text-[10px] uppercase tracking-[0.15em] opacity-60">
                SimplyLegal
              </span>
              <span className="text-sm">🇳🇬</span>
            </div>
          </div>
        </div>
      </div>

      {/* Read More Button */}
      <div className="mt-3 text-center">
        <span className="inline-flex items-center text-[#008751] font-semibold text-sm uppercase tracking-wide group-hover:text-[#006B3F] transition-colors">
          Read More
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
