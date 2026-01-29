'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import SearchBar from '@/components/SearchBar';
import LawCard from '@/components/LawCard';
import { searchLaws } from '@/data/laws';
import { categories } from '@/data/categories';

function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const results = query ? searchLaws(query) : [];

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-6">Search Laws</h1>
          <SearchBar
            initialQuery={query}
            placeholder="Search for laws, rights, or topics..."
          />
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {query ? (
            <>
              <div className="mb-8">
                <p className="text-gray-600">
                  {results.length} {results.length === 1 ? 'result' : 'results'} for{' '}
                  <span className="font-semibold text-gray-900">&quot;{query}&quot;</span>
                </p>
              </div>

              {results.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.map(law => (
                    <LawCard key={law.id} law={law} showCategory />
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-5xl mb-4">🔍</div>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2">
                    No results found
                  </h2>
                  <p className="text-gray-600 mb-6">
                    Try different keywords or browse our categories below.
                  </p>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <div className="text-5xl mb-4">⚖️</div>
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                Search Nigerian Laws
              </h2>
              <p className="text-gray-600 mb-8">
                Enter a keyword or phrase to find relevant laws and legal information.
              </p>
            </div>
          )}

          {/* Popular Searches / Categories */}
          <div className="mt-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              {query ? 'Try searching in these categories' : 'Popular Categories'}
            </h3>
            <div className="flex flex-wrap gap-3">
              {categories.map(category => (
                <a
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="inline-flex items-center px-4 py-2 bg-white border border-gray-200 rounded-full hover:border-green-500 hover:text-green-700 transition-colors"
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </a>
              ))}
            </div>
          </div>

          {/* Search Tips */}
          <div className="mt-12 bg-green-50 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Search Tips
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Use specific terms like &quot;minimum wage&quot; or &quot;tenant rights&quot;
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Try different variations of your search term
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">•</span>
                Browse categories if you&apos;re not sure what to search for
              </li>
            </ul>
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
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-700 mx-auto"></div>
            <p className="mt-4 text-gray-600">Loading...</p>
          </div>
        </div>
      }
    >
      <SearchResults />
    </Suspense>
  );
}
