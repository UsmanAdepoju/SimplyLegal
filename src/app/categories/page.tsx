import { Metadata } from 'next';
import Link from 'next/link';
import { categories } from '@/data/categories';
import { getLawsByCategory } from '@/data/laws';

export const metadata: Metadata = {
  title: 'All Categories - SimplyLegal',
  description: 'Browse all law categories on SimplyLegal. From traffic laws to employment rights, find the legal information you need.',
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 md:py-16 border-b border-[#E0E0E0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            All Categories
          </h1>
          <p className="text-lg text-[#6B6B6B] max-w-2xl">
            Explore laws organized by topics that matter to you. Select a category to learn about your rights and responsibilities.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12 md:py-16 bg-[#F5F1E8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((category, index) => {
              const lawCount = getLawsByCategory(category.id).length;
              const bgColors = ['bg-[#008751]', 'bg-[#D4A843]', 'bg-[#1A1A1A]', 'bg-[#6B6B6B]'];
              const textColors = ['text-white', 'text-[#1A1A1A]', 'text-white', 'text-white'];
              const bgColor = bgColors[index % bgColors.length];
              const textColor = textColors[index % textColors.length];

              return (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className={`${bgColor} ${textColor} p-6 hover:opacity-90 transition-opacity group`}
                >
                  <span className="text-4xl mb-4 block">{category.icon}</span>
                  <h2
                    className="font-bold text-xl mb-2 uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {category.name}
                  </h2>
                  <p className="text-sm opacity-80 mb-3">
                    {category.description}
                  </p>
                  <p className="text-xs font-semibold uppercase tracking-wide opacity-60">
                    {lawCount} {lawCount === 1 ? 'law' : 'laws'}
                  </p>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 md:py-16 bg-white border-t border-[#E0E0E0]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-2xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-[#6B6B6B] mb-6">
            Use our search feature to find specific laws or topics. You can search by keywords, phrases, or specific legal terms.
          </p>
          <Link
            href="/search"
            className="inline-flex items-center px-6 py-3 bg-[#1A1A1A] text-white font-semibold text-sm uppercase tracking-wide hover:bg-[#008751] transition-colors"
          >
            Search Laws
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
