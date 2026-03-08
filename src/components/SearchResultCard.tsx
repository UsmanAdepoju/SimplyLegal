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
    bg: '#00512E',
    text: '#FFFFFF',
    accent: '#F0C040',
  },
  mustard: {
    bg: '#7B2D00',
    text: '#FEF3C7',
    accent: '#F0C040',
  },
  dark: {
    bg: '#111111',
    text: '#F5F5F5',
    accent: '#00C874',
  },
};

export default function SearchResultCard({ law, variant = 'green' }: SearchResultCardProps) {
  const style = variants[variant];
  const category = categories.find(c => c.id === law.category);

  const displaySummary = law.summary.length > 90
    ? law.summary.substring(0, 90) + '…'
    : law.summary;

  return (
    <Link href={`/law/${law.id}`} className="block group">
      {/* Visual Card — SQUARE */}
      <div
        className="aspect-square w-full relative overflow-hidden transition-transform group-hover:scale-[1.02]"
        style={{ backgroundColor: style.bg, color: style.text }}
      >
        {/* Left accent bar */}
        <div
          className="absolute left-0 top-0 bottom-0 w-[4px]"
          style={{ backgroundColor: style.accent }}
        ></div>

        {/* Nigerian flag stripe — top */}
        <div className="absolute top-0 left-0 right-0 h-[4px] flex">
          <div className="flex-1 bg-[#00512E]"></div>
          <div className="flex-1 bg-white"></div>
          <div className="flex-1 bg-[#00512E]"></div>
        </div>

        {/* Content */}
        <div className="h-full flex flex-col justify-between p-5 pl-7 pt-6">
          {/* Top — branding + category */}
          <div>
            <p
              className="text-[9px] font-bold uppercase tracking-[0.22em] mb-2"
              style={{ color: style.accent, fontFamily: "var(--font-space), system-ui, sans-serif" }}
            >
              SimplyLegal 🇳🇬
            </p>
            {category && (
              <p
                className="text-[10px] uppercase tracking-wide opacity-70"
                style={{ color: style.text, fontFamily: "var(--font-space), system-ui, sans-serif" }}
              >
                {category.icon} {category.name}
              </p>
            )}
          </div>

          {/* Centre — quote */}
          <div className="flex-1 flex items-center py-3">
            <p
              className="font-bold leading-snug text-[clamp(0.85rem,2.8vw,1.1rem)]"
              style={{ color: style.text, fontFamily: "var(--font-space), system-ui, sans-serif" }}
            >
              {displaySummary}
            </p>
          </div>

          {/* Bottom — source */}
          <div>
            <div className="w-8 h-[2px] mb-2" style={{ backgroundColor: style.accent }}></div>
            <p
              className="text-[9px] font-semibold uppercase tracking-widest"
              style={{ color: style.accent, fontFamily: "var(--font-space), system-ui, sans-serif" }}
            >
              {law.section || 'Nigerian Law'}
            </p>
          </div>
        </div>
      </div>

      {/* Read More */}
      <div className="mt-3 text-center">
        <span
          className="inline-flex items-center text-[#00512E] font-bold text-xs uppercase tracking-widest group-hover:text-[#00341E] transition-colors"
          style={{ fontFamily: "var(--font-space), system-ui, sans-serif" }}
        >
          Read More
          <svg className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
