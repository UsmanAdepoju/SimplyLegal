import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import { categories } from '@/data/categories';
import { getLawsByCategory, laws } from '@/data/laws';

export default function Home() {
  const totalLaws = laws.length;

  // Get some sample tags for the search section
  const sampleTags = ['Rights', 'Freedom', 'Arrest', 'Property', 'Marriage', 'Employment', 'Consumer', 'Traffic'];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - Clean like archivi.ng */}
      <section className="py-16 md:py-24 border-b border-[#E0E0E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          {/* Main Headline - Bold, italic like archivi.ng */}
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1A1A] mb-6 italic"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Nigerian laws, one search away
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#6B6B6B] mb-10 max-w-2xl mx-auto">
            Explore Nigerian constitutional rights and laws in simple, plain English. Download shareable cards and spread awareness.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-6">
            <SearchBar
              placeholder='Try: "Right to Life" or "Freedom of Speech"'
              className="w-full"
            />
          </div>

          {/* Tag Pills - Like archivi.ng */}
          <div className="flex flex-wrap justify-center gap-2">
            {sampleTags.map((tag) => (
              <Link
                key={tag}
                href={`/search?q=${tag}`}
                className="px-4 py-1.5 border border-[#E0E0E0] rounded-full text-sm text-[#1A1A1A] hover:border-[#008751] hover:text-[#008751] transition-colors"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mustard Yellow Section - "Today in History" style */}
      <section className="py-12 bg-[#D4A843]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="md:w-1/2">
              <h2
                className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Know Your Rights
              </h2>
              <p className="text-[#1A1A1A] mb-6 text-lg">
                Every Nigerian has fundamental rights protected by the Constitution. Learn what they are and how to exercise them.
              </p>
              <Link
                href="/category/fundamental-rights"
                className="inline-block px-6 py-3 bg-[#1A1A1A] text-white font-semibold text-sm uppercase tracking-wide hover:bg-[#008751] transition-colors"
              >
                Explore Your Rights
              </Link>
            </div>
            <div className="md:w-1/2">
              {/* Featured Quote Card Preview */}
              <div className="bg-[#008751] p-6 md:p-8 text-white max-w-sm mx-auto">
                <p
                  className="text-xl md:text-2xl font-bold mb-4 leading-tight"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  &ldquo;Every person has the right to life. Nobody can take your life except through a court sentence.&rdquo;
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium opacity-80">— Section 33</span>
                  <span className="text-xs uppercase tracking-widest opacity-60">Nigerian Constitution</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section - "TOPICS" style from archivi.ng */}
      <section className="py-16 md:py-24 bg-[#F5F1E8]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-2 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Categories
            </h2>
            <p className="text-[#6B6B6B]">
              Explore {totalLaws} laws across {categories.length} categories
            </p>
          </div>

          {/* Category Grid - Like archivi.ng Topics */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {categories.map((category, index) => {
              const lawCount = getLawsByCategory(category.id).length;
              // Alternate between green, mustard, and dark backgrounds
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
                  <span className="text-3xl mb-3 block">{category.icon}</span>
                  <h3
                    className="font-bold text-lg mb-1 uppercase tracking-wide"
                    style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                  >
                    {category.name.split(' ')[0]}
                  </h3>
                  <p className="text-sm opacity-80">
                    {lawCount} {lawCount === 1 ? 'law' : 'laws'}
                  </p>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/categories"
              className="inline-flex items-center px-6 py-3 border-2 border-[#1A1A1A] text-[#1A1A1A] font-semibold text-sm uppercase tracking-wide hover:bg-[#1A1A1A] hover:text-white transition-colors"
            >
              See All Categories
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 md:py-24 bg-white border-t border-[#E0E0E0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              How It Works
            </h2>
            <p className="text-[#6B6B6B] max-w-xl mx-auto">
              We make Nigerian laws accessible to everyone through simple explanations and shareable content.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#008751] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                1
              </div>
              <h3
                className="font-bold text-lg mb-2 uppercase"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Read
              </h3>
              <p className="text-[#6B6B6B] text-sm">
                Laws explained in plain English that every Nigerian can understand. No legal jargon.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#D4A843] text-[#1A1A1A] text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                2
              </div>
              <h3
                className="font-bold text-lg mb-2 uppercase"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Download
              </h3>
              <p className="text-[#6B6B6B] text-sm">
                Save beautiful quote cards as images. Perfect for sharing on social media.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-[#1A1A1A] text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                3
              </div>
              <h3
                className="font-bold text-lg mb-2 uppercase"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Share
              </h3>
              <p className="text-[#6B6B6B] text-sm">
                Spread awareness on WhatsApp, Instagram, Twitter. Help others know their rights.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA - Green Section */}
      <section className="py-16 md:py-20 bg-[#008751] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-bold mb-6 italic"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Ready to know your rights?
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-xl mx-auto">
            Start with the fundamental rights every Nigerian citizen is entitled to.
          </p>
          <Link
            href="/category/fundamental-rights"
            className="inline-block px-8 py-4 bg-white text-[#008751] font-bold text-sm uppercase tracking-wide hover:bg-[#D4A843] hover:text-[#1A1A1A] transition-colors"
          >
            Explore Fundamental Rights
          </Link>
        </div>
      </section>
    </div>
  );
}
