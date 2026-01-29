import { Metadata } from 'next';
import CategoryCard from '@/components/CategoryCard';
import { categories } from '@/data/categories';
import { getLawsByCategory } from '@/data/laws';

export const metadata: Metadata = {
  title: 'All Categories - SimplyLegal',
  description: 'Browse all law categories on SimplyLegal. From traffic laws to employment rights, find the legal information you need.',
};

export default function CategoriesPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-700 to-green-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">All Categories</h1>
          <p className="text-lg text-green-100 max-w-2xl">
            Explore laws organized by topics that matter to you. Select a category
            to learn about your rights and responsibilities.
          </p>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categories.map(category => (
              <CategoryCard
                key={category.id}
                category={category}
                lawCount={getLawsByCategory(category.id).length}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-gray-600 mb-6">
            Use our search feature to find specific laws or topics. You can search
            by keywords, phrases, or specific legal terms.
          </p>
          <a
            href="/search"
            className="inline-flex items-center px-6 py-3 bg-green-700 text-white font-medium rounded-lg hover:bg-green-800 transition-colors"
          >
            Search Laws
            <svg
              className="ml-2 w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}
