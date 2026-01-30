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

const cardVariants: Array<'green' | 'mustard' | 'dark'> = ['green', 'mustard', 'dark'];

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { id } = await params;
  const category = categories.find(c => c.id === id);

  if (!category) {
    notFound();
  }

  // Get laws and sort alphabetically
  const categoryLaws = getLawsByCategory(id).sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <section className="py-12 md:py-16 border-b border-[#E0E0E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm mb-8 text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#008751] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/categories" className="hover:text-[#008751] transition-colors">
              Categories
            </Link>
            <span>/</span>
            <span className="text-[#1A1A1A]">{category.name}</span>
          </div>

          {/* Category Info */}
          <div className="flex items-start gap-6">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1
                className="text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-3 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                {category.name}
              </h1>
              <p className="text-lg text-[#6B6B6B] mb-4">
                {category.description}
              </p>
              <p className="text-sm text-[#008751] font-semibold uppercase tracking-wide">
                {categoryLaws.length} {categoryLaws.length === 1 ? 'law' : 'laws'} explained
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Laws Section */}
      <section className="py-12 md:py-16 bg-[#F5F1E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryLaws.length > 0 ? (
            <div className="space-y-12">
              {categoryLaws.map((law, index) => (
                <LawQuoteCard
                  key={law.id}
                  law={law}
                  variant={cardVariants[index % cardVariants.length]}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">📜</div>
              <h2
                className="text-2xl font-bold text-[#1A1A1A] mb-2 uppercase"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Coming Soon
              </h2>
              <p className="text-[#6B6B6B]">
                Laws for this category are being prepared. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Other Categories Section */}
      <section className="py-12 md:py-16 bg-white border-t border-[#E0E0E0]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-8 uppercase tracking-wide"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Other Categories
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories
              .filter(c => c.id !== id)
              .slice(0, 4)
              .map((cat, index) => {
                const bgColors = ['bg-[#008751]', 'bg-[#D4A843]', 'bg-[#1A1A1A]', 'bg-[#6B6B6B]'];
                const textColors = ['text-white', 'text-[#1A1A1A]', 'text-white', 'text-white'];
                return (
                  <Link
                    key={cat.id}
                    href={`/category/${cat.id}`}
                    className={`${bgColors[index % bgColors.length]} ${textColors[index % textColors.length]} p-5 hover:opacity-90 transition-opacity`}
                  >
                    <span className="text-2xl block mb-2">{cat.icon}</span>
                    <p
                      className="font-bold text-sm uppercase tracking-wide"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      {cat.name.split(' ')[0]}
                    </p>
                  </Link>
                );
              })}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/categories"
              className="inline-flex items-center px-6 py-3 border-2 border-[#1A1A1A] text-[#1A1A1A] font-semibold text-sm uppercase tracking-wide hover:bg-[#1A1A1A] hover:text-white transition-colors"
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
