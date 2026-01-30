import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import LawQuoteCard from '@/components/LawQuoteCard';
import { categories } from '@/data/categories';
import { getLawsByCategory } from '@/data/laws';

interface CategoryPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { id } = await params;
  const category = categories.find(c => c.id === id);

  if (!category) {
    return {
      title: 'Category Not Found - SimplyLegal',
    };
  }

  return {
    title: `${category.name} - SimplyLegal`,
    description: category.description,
  };
}

export async function generateStaticParams() {
  return categories.map(category => ({
    id: category.id,
  }));
}

const colorSchemes: Array<'green' | 'gold' | 'terracotta' | 'charcoal'> = ['green', 'gold', 'terracotta', 'charcoal'];

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params;
  const category = categories.find(c => c.id === id);

  if (!category) {
    notFound();
  }

  // Get laws and sort alphabetically by title
  const categoryLaws = getLawsByCategory(id).sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  // Group laws by first letter for alphabetical sections
  const groupedLaws = categoryLaws.reduce((acc, law) => {
    const firstLetter = law.title[0].toUpperCase();
    if (!acc[firstLetter]) {
      acc[firstLetter] = [];
    }
    acc[firstLetter].push(law);
    return acc;
  }, {} as Record<string, typeof categoryLaws>);

  const sortedLetters = Object.keys(groupedLaws).sort();

  return (
    <div className="min-h-screen bg-[#FDF8F3]">
      {/* Header */}
      <section className="bg-[#1B4332] text-white py-12 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-6 left-10 text-3xl text-[#C4A35A] opacity-30">✦</div>
        <div className="absolute top-10 right-16 text-2xl text-[#C4A35A] opacity-20">✦</div>
        <div className="absolute bottom-6 left-20 text-xl text-[#C4A35A] opacity-20">✦</div>
        <div className="absolute bottom-8 right-10 text-3xl text-[#C4A35A] opacity-30">✦</div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm mb-6 opacity-80">
            <Link href="/" className="hover:text-[#C4A35A] transition-colors">
              Home
            </Link>
            <span className="text-[#C4A35A]">✦</span>
            <Link href="/categories" className="hover:text-[#C4A35A] transition-colors">
              Categories
            </Link>
            <span className="text-[#C4A35A]">✦</span>
            <span>{category.name}</span>
          </div>

          <div className="text-center">
            <span className="text-6xl mb-6 block">{category.icon}</span>
            <h1
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {category.name}
            </h1>
            <p className="text-lg opacity-90 max-w-lg mx-auto leading-relaxed">
              {category.description}
            </p>
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-white/10 rounded-full">
              <span className="text-[#C4A35A] mr-2">✦</span>
              <span className="text-sm font-medium">
                {categoryLaws.length} {categoryLaws.length === 1 ? 'law' : 'laws'} explained simply
              </span>
              <span className="text-[#C4A35A] ml-2">✦</span>
            </div>
          </div>
        </div>
      </section>

      {/* Alphabetical Navigation */}
      {sortedLetters.length > 3 && (
        <div className="bg-white border-b border-[#E8DFD5] sticky top-16 z-10">
          <div className="max-w-4xl mx-auto px-4 py-4">
            <div className="flex flex-wrap gap-2 justify-center">
              {sortedLetters.map(letter => (
                <a
                  key={letter}
                  href={`#section-${letter}`}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#FDF8F3] hover:bg-[#1B4332] text-[#2D2A26] hover:text-white text-sm font-semibold transition-all border border-[#E8DFD5] hover:border-[#1B4332]"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Laws - Alphabetically Organized */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryLaws.length > 0 ? (
            <div className="space-y-12">
              {sortedLetters.map((letter, letterIndex) => (
                <div key={letter} id={`section-${letter}`}>
                  {/* Letter Header */}
                  <div className="flex items-center mb-8">
                    <span
                      className="text-4xl font-bold text-[#C4A35A] w-14"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {letter}
                    </span>
                    <div className="flex-1 h-px bg-[#E8DFD5] ml-4"></div>
                  </div>

                  {/* Laws for this letter */}
                  <div className="space-y-10">
                    {groupedLaws[letter].map((law, lawIndex) => (
                      <LawQuoteCard
                        key={law.id}
                        law={law}
                        colorScheme={colorSchemes[(letterIndex + lawIndex) % colorSchemes.length]}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📜</div>
              <p
                className="text-[#2D2A26] text-xl font-bold mb-2"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Coming Soon
              </p>
              <p className="text-[#5a5652]">
                Laws for this category are being prepared. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Explore Other Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-[#C4A35A] font-semibold uppercase tracking-widest text-sm mb-2">
              ✦ Keep Exploring ✦
            </p>
            <h2
              className="text-2xl md:text-3xl font-bold text-[#2D2A26]"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              Other Categories
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories
              .filter(c => c.id !== id)
              .slice(0, 4)
              .map((cat, index) => {
                const bgColors = ['bg-[#1B4332]', 'bg-[#C4A35A]', 'bg-[#C17B5D]', 'bg-[#2D2A26]'];
                return (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.id}`}
                    className={`${bgColors[index % bgColors.length]} text-white rounded-2xl p-5 hover:scale-105 transition-transform text-center shadow-lg`}
                  >
                    <span className="text-3xl block mb-2">{cat.icon}</span>
                    <p
                      className="font-semibold text-sm"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {cat.name}
                    </p>
                  </Link>
                );
              })}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/categories"
              className="inline-flex items-center px-6 py-3 bg-[#FDF8F3] text-[#2D2A26] font-semibold rounded-full border-2 border-[#E8DFD5] hover:border-[#C4A35A] transition-all"
            >
              View All Categories
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
