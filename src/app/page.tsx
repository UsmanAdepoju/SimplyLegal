import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import { categories } from '@/data/categories';
import { getLawsByCategory } from '@/data/laws';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - Simple and Clear */}
      <section className="bg-gradient-to-br from-green-700 via-green-600 to-green-800 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Nigerian Laws Made Simple
            </h1>
            <p className="text-lg text-green-100 mb-8 max-w-xl mx-auto">
              Know your rights in plain English. Download and share with friends.
            </p>
            <SearchBar
              placeholder="Search for a law..."
              className="max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      {/* Categories Section - The Main Focus */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
            Explore Law Categories
          </h2>

          <div className="space-y-3">
            {categories.map(category => {
              const lawCount = getLawsByCategory(category.id).length;
              return (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="flex items-center justify-between bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                >
                  <div className="flex items-center space-x-4">
                    <span
                      className={`${category.color} w-12 h-12 rounded-full flex items-center justify-center text-xl text-white`}
                    >
                      {category.icon}
                    </span>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {category.name}
                      </h3>
                      <p className="text-sm text-gray-500">
                        {lawCount} {lawCount === 1 ? 'law' : 'laws'}
                      </p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400"
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
              );
            })}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/categories"
              className="inline-flex items-center px-6 py-3 bg-green-700 text-white font-medium rounded-full hover:bg-green-800 transition-colors"
            >
              Explore All Categories
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

      {/* Simple Value Proposition */}
      <section className="py-12 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl mb-2">📖</div>
              <p className="text-sm font-medium text-gray-900">Simple English</p>
              <p className="text-xs text-gray-500">Easy to understand</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📱</div>
              <p className="text-sm font-medium text-gray-900">Download & Share</p>
              <p className="text-xs text-gray-500">Spread awareness</p>
            </div>
            <div>
              <div className="text-3xl mb-2">📜</div>
              <p className="text-sm font-medium text-gray-900">Read Original</p>
              <p className="text-xs text-gray-500">From Constitution</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Example */}
      <section className="py-12 bg-green-700 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg font-medium mb-2">
            &quot;Every person has the right to life.&quot;
          </p>
          <p className="text-sm opacity-80 mb-6">— Section 33</p>
          <Link
            href="/category/fundamental-rights"
            className="inline-flex items-center px-5 py-2 bg-white text-green-700 font-medium rounded-full hover:bg-gray-100 transition-colors text-sm"
          >
            Know Your Rights
          </Link>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-8 bg-gray-900 text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400 text-sm mb-4">
            Laws explained simply. For every Nigerian.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/about"
              className="text-sm text-green-400 hover:text-green-300"
            >
              About Us
            </Link>
            <Link
              href="/categories"
              className="text-sm text-green-400 hover:text-green-300"
            >
              All Categories
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
