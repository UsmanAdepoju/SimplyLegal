'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import SearchResultCard from '@/components/SearchResultCard';
import { searchLaws } from '@/data/laws';
import { categories } from '@/data/categories';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchLaws(query) : [];

  // Cycle through card variants for visual variety
  const cardVariants: Array<'green' | 'mustard' | 'dark'> = ['green', 'mustard', 'dark'];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="py-12 md:py-16 border-b border-[#E0E0E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1
            className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Search Laws
          </h1>
          <SearchBar
            initialQuery={query}
            placeholder="Search for laws, rights, or topics..."
          />
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-[#F5F1E8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {query ? (
            <>
              <div className="mb-8">
                <p className="text-[#6B6B6B]">
                  {results.length} {results.length === 1 ? 'result' : 'results'} for{' '}
                  <span className="font-semibold text-[#1A1A1A]">&quot;{query}&quot;</span>
                </p>
              </div>

              {results.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.map((law, index) => (
                    <SearchResultCard
                      key={law.id}
                      law={law}
                      variant={cardVariants[index % cardVariants.length]}
                    />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🔍</div>
                  <h2
                    className="text-xl font-bold text-[#1A1A1A] mb-2 uppercase"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    No results found
                  </h2>
                  <p className="text-[#6B6B6B] mb-6">
                    Try different keywords or browse our categories below.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">⚖️</div>
              <h2
                className="text-xl font-bold text-[#1A1A1A] mb-2 uppercase"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Search Nigerian Laws
              </h2>
              <p className="text-[#6B6B6B] mb-8">
                Enter a keyword to find laws explained simply.
              </p>
            </div>
          )}

          {/* Popular Categories */}
          <div className="mt-12">
            <h3
              className="text-lg font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {query ? 'Browse Categories' : 'Popular Categories'}
            </h3>
            <div className="flex flex-wrap gap-2">
              {categories.slice(0, 8).map(category => (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="inline-flex items-center px-4 py-2 bg-white border border-[#E0E0E0] text-[#1A1A1A] text-sm hover:border-[#008751] hover:text-[#008751] transition-colors"
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-[#F5F1E8]">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#008751] mx-auto"></div>
            <p className="mt-4 text-[#6B6B6B]">Loading...</p>
          </div>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
