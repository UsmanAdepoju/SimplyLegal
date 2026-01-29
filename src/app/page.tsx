import Link from 'next/link';
import CategoryCard from '@/components/CategoryCard';
import LawCard from '@/components/LawCard';
import SearchBar from '@/components/SearchBar';
import { categories } from '@/data/categories';
import { laws, getLawsByCategory } from '@/data/laws';

export default function Home() {
  // Get featured laws (one from each category, up to 6)
  const featuredLaws = categories.slice(0, 6).map(category => {
    const categoryLaws = getLawsByCategory(category.id);
    return categoryLaws[0];
  }).filter(Boolean);

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nigerian Laws Made Simple
            </h1>
            <p className="text-xl md:text-2xl text-green-100 mb-8">
              Know your rights. Understand your responsibilities.
              Learn about everyday laws that affect you in bite-sized, easy-to-understand content.
            </p>
            <SearchBar
              placeholder="Search for laws, rights, or topics..."
              className="max-w-xl mx-auto"
            />
          </div>
        </div>

        {/* Wave decoration */}
        <div className="relative h-16">
          <svg
            className="absolute bottom-0 w-full h-16 text-gray-50"
            preserveAspectRatio="none"
            viewBox="0 0 1440 54"
          >
            <path
              fill="currentColor"
              d="M0 22L60 16.7C120 11 240 1.00001 360 0.700012C480 1.00001 600 11 720 16.7C840 22 960 22 1080 19.8C1200 17 1320 11 1380 8.5L1440 6V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0V22Z"
            />
          </svg>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-green-700">{categories.length}</p>
              <p className="text-gray-600 text-sm">Categories</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-green-700">{laws.length}</p>
              <p className="text-gray-600 text-sm">Laws Explained</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-green-700">100%</p>
              <p className="text-gray-600 text-sm">Free Access</p>
            </div>
            <div className="bg-white rounded-lg p-4 text-center shadow-sm">
              <p className="text-3xl font-bold text-green-700">24/7</p>
              <p className="text-gray-600 text-sm">Available</p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Browse by Category
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore laws organized by topics that matter to you. From traffic rules
              to consumer rights, find what you need to know.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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

      {/* Featured Laws Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Featured Laws You Should Know
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Start with these important laws that affect everyday life in Nigeria.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredLaws.map(law => (
              <LawCard key={law.id} law={law} showCategory />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/categories"
              className="inline-flex items-center px-6 py-3 bg-green-700 text-white font-medium rounded-lg hover:bg-green-800 transition-colors"
            >
              View All Laws
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Know Your Laws Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Know Your Laws?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-700 text-3xl mb-4">
                🛡️
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Protect Your Rights
              </h3>
              <p className="text-gray-600">
                Knowledge is power. When you know your rights, you can stand up for
                yourself and your loved ones.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-700 text-3xl mb-4">
                🚫
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Avoid Trouble
              </h3>
              <p className="text-gray-600">
                Understanding the law helps you stay on the right side of it and avoid
                unnecessary penalties or legal issues.
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-700 text-3xl mb-4">
                💪
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Make Better Decisions
              </h3>
              <p className="text-gray-600">
                From signing contracts to understanding your workplace rights, legal
                knowledge helps you make informed decisions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Learning Today
          </h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            Don&apos;t wait until you need legal knowledge. Start exploring laws
            that affect your daily life and be prepared for anything.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/categories"
              className="inline-flex items-center justify-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
            >
              Browse Categories
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center justify-center px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Search Laws
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
