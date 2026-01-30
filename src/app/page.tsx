import Link from 'next/link';
import SearchBar from '@/components/SearchBar';
import { categories } from '@/data/categories';
import { getLawsByCategory, laws } from '@/data/laws';

export default function Home() {
  const totalLaws = laws.length;

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Hero Section - Warm and Engaging */}
      <section className="relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 left-10 text-4xl text-[#C4A35A] opacity-30 sparkle">✦</div>
        <div className="absolute top-20 left-32 text-2xl text-[#C4A35A] opacity-20 sparkle">✦</div>
        <div className="absolute top-16 right-20 text-3xl text-[#C4A35A] opacity-30 sparkle">✦</div>
        <div className="absolute top-32 right-40 text-xl text-[#C4A35A] opacity-20 sparkle">✦</div>
        <div className="absolute bottom-20 left-20 text-2xl text-[#1B4332] opacity-20 sparkle">✦</div>
        <div className="absolute bottom-10 right-32 text-3xl text-[#1B4332] opacity-20 sparkle">✦</div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 relative z-10">
          <div className="text-center">
            {/* Tagline */}
            <div className="inline-flex items-center px-4 py-2 bg-[#1B4332]/10 rounded-full mb-6">
              <span className="text-[#C4A35A] mr-2">✦</span>
              <span className="text-sm font-medium text-[#1B4332]">
                For Every Nigerian
              </span>
              <span className="text-[#C4A35A] ml-2">✦</span>
            </div>

            {/* Main Headline */}
            <h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#2D2A26] mb-6 leading-tight"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Know Your Rights,
              <br />
              <span className="text-[#1B4332]">In Plain English</span>
            </h1>

            {/* Subheadline */}
            <p className="text-lg md:text-xl text-[#5a5652] mb-10 max-w-2xl mx-auto leading-relaxed">
              Nigerian laws explained simply. Download beautiful quote cards and share with friends on WhatsApp.
            </p>

            {/* Search */}
            <SearchBar
              placeholder="Search for any law..."
              className="max-w-lg mx-auto mb-8"
            />

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/category/fundamental-rights"
                className="inline-flex items-center px-8 py-4 bg-[#1B4332] text-white font-semibold rounded-full hover:bg-[#2D5A3D] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Explore Your Rights
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link
                href="/categories"
                className="inline-flex items-center px-8 py-4 bg-white text-[#2D2A26] font-semibold rounded-full border-2 border-[#E8DFD5] hover:border-[#C4A35A] transition-all"
              >
                Browse All Categories
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Law Categories Banner - Like Konsulto */}
      <section className="py-4 bg-[#C4A35A] overflow-hidden">
        <div className="animate-marquee whitespace-nowrap flex items-center">
          {[...categories, ...categories].map((cat, i) => (
            <span key={i} className="mx-6 text-[#2D2A26] font-medium flex items-center">
              <span className="mr-2">✦</span>
              {cat.name}
            </span>
          ))}
        </div>
      </section>

      {/* Featured Quote Card */}
      <section className="py-16 md:py-24 bg-[#FDF8F3]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold text-[#2D2A26] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Laws as Shareable Quotes
            </h2>
            <p className="text-[#5a5652] max-w-xl mx-auto">
              Download and share beautiful law cards on social media. Spread legal awareness.
            </p>
          </div>

          {/* Example Quote Card */}
          <div className="max-w-md mx-auto">
            <div
              className="bg-[#1B4332] aspect-square rounded-3xl p-8 text-white shadow-2xl relative overflow-hidden"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {/* Decorative */}
              <div className="absolute top-6 left-6 text-2xl text-[#C4A35A] opacity-60">✦</div>
              <div className="absolute top-6 right-6 text-2xl text-[#C4A35A] opacity-60">✦</div>
              <div className="absolute bottom-16 left-8 text-lg text-[#C4A35A] opacity-30">✦</div>
              <div className="absolute bottom-12 right-10 text-xl text-[#C4A35A] opacity-40">✦</div>

              <div className="h-full flex flex-col justify-center items-center text-center px-4">
                <div className="text-5xl text-[#C4A35A] opacity-40 mb-2">&ldquo;</div>
                <p className="text-xl md:text-2xl font-bold leading-tight mb-4">
                  Every person has the right to life. Nobody can take your life except through a court sentence.
                </p>
                <div className="text-5xl text-[#C4A35A] opacity-40 mb-4">&rdquo;</div>
                <div className="w-16 h-1 bg-[#C4A35A] rounded-full mb-3" />
                <p className="text-base font-medium opacity-90">Section 33</p>
                <div className="absolute bottom-5 left-0 right-0 text-center">
                  <p className="text-xs tracking-widest uppercase opacity-60">SimplyLegal 🇳🇬</p>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <Link
                href="/category/fundamental-rights"
                className="inline-flex items-center px-6 py-3 bg-[#2D2A26] text-white font-semibold rounded-full hover:bg-[#1B4332] transition-all shadow-lg"
              >
                See All Rights
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-[#C4A35A] font-semibold uppercase tracking-widest text-sm mb-3">
              ✦ Explore ✦
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-[#2D2A26] mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Law Categories
            </h2>
            <p className="text-[#5a5652]">
              {totalLaws} laws across {categories.length} categories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {categories.map((category, index) => {
              const lawCount = getLawsByCategory(category.id).length;
              const colors = ['bg-[#1B4332]', 'bg-[#C4A35A]', 'bg-[#C17B5D]', 'bg-[#2D2A26]'];
              const bgColor = colors[index % colors.length];

              return (
                <Link
                  key={category.id}
                  href={`/category/${category.id}`}
                  className="group relative overflow-hidden rounded-2xl p-6 bg-[#FFFBF7] border border-[#E8DFD5] hover:border-[#C4A35A] transition-all hover:shadow-lg"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <span
                        className={`${bgColor} w-14 h-14 rounded-2xl flex items-center justify-center text-2xl text-white shadow-md`}
                      >
                        {category.icon}
                      </span>
                      <div>
                        <h3
                          className="font-bold text-[#2D2A26] text-lg group-hover:text-[#1B4332] transition-colors"
                          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                        >
                          {category.name}
                        </h3>
                        <p className="text-sm text-[#888]">
                          {lawCount} {lawCount === 1 ? 'law' : 'laws'} explained
                        </p>
                      </div>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[#E8DFD5] flex items-center justify-center group-hover:bg-[#C4A35A] transition-colors">
                      <svg
                        className="w-5 h-5 text-[#2D2A26] group-hover:text-white transition-colors"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-16 md:py-24 bg-[#1B4332] text-white relative overflow-hidden">
        {/* Decorative */}
        <div className="absolute top-10 left-10 text-4xl text-[#C4A35A] opacity-20 sparkle">✦</div>
        <div className="absolute bottom-10 right-10 text-4xl text-[#C4A35A] opacity-20 sparkle">✦</div>
        <div className="absolute top-1/2 left-1/4 text-2xl text-[#C4A35A] opacity-10">✦</div>
        <div className="absolute top-1/3 right-1/4 text-3xl text-[#C4A35A] opacity-10">✦</div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Why SimplyLegal?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto">
              We believe every Nigerian should understand their rights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C4A35A] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                📖
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Plain English
              </h3>
              <p className="text-white/70 text-sm">
                No legal jargon. Just simple words every Nigerian can understand.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C4A35A] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                📱
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Shareable Cards
              </h3>
              <p className="text-white/70 text-sm">
                Download beautiful quote cards and share on WhatsApp, Instagram, Twitter.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-[#C4A35A] rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4">
                📜
              </div>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Original Text
              </h3>
              <p className="text-white/70 text-sm">
                Always see the actual constitutional text with &quot;Read More&quot;.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-20 bg-[#FDF8F3]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-[#C4A35A] font-semibold uppercase tracking-widest text-sm mb-3">
            ✦ Start Learning ✦
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-[#2D2A26] mb-6"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Ready to Know Your Rights?
          </h2>
          <p className="text-[#5a5652] mb-8 max-w-xl mx-auto">
            Start with your fundamental rights as a Nigerian citizen.
          </p>
          <Link
            href="/category/fundamental-rights"
            className="inline-flex items-center px-8 py-4 bg-[#1B4332] text-white font-semibold rounded-full hover:bg-[#2D5A3D] transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            Explore Fundamental Rights
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </div>
  );
}
