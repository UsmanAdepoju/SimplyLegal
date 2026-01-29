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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className={`${category.color} text-white py-8`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm mb-4 opacity-80">
            <Link href="/" className="hover:underline">
              Home
            </Link>
            <span>/</span>
            <Link href="/categories" className="hover:underline">
              Categories
            </Link>
            <span>/</span>
            <span>{category.name}</span>
          </div>

          <div className="text-center">
            <span className="text-5xl mb-4 block">{category.icon}</span>
            <h1 className="text-2xl md:text-3xl font-bold">{category.name}</h1>
            <p className="text-base opacity-90 mt-2 max-w-lg mx-auto">
              {category.description}
            </p>
            <p className="text-sm opacity-70 mt-4">
              {categoryLaws.length} {categoryLaws.length === 1 ? 'law' : 'laws'} explained simply
            </p>
          </div>
        </div>
      </section>

      {/* Alphabetical Navigation */}
      {sortedLetters.length > 3 && (
        <div className="bg-white border-b sticky top-0 z-10">
          <div className="max-w-3xl mx-auto px-4 py-3">
            <div className="flex flex-wrap gap-2 justify-center">
              {sortedLetters.map(letter => (
                <a
                  key={letter}
                  href={`#section-${letter}`}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-green-100 text-gray-700 hover:text-green-700 text-sm font-medium transition-colors"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Laws - Alphabetically Organized */}
      <section className="py-8">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {categoryLaws.length > 0 ? (
            <div className="space-y-8">
              {sortedLetters.map(letter => (
                <div key={letter} id={`section-${letter}`}>
                  {/* Letter Header */}
                  <div className="flex items-center mb-4">
                    <span className="text-2xl font-bold text-green-600 w-10">
                      {letter}
                    </span>
                    <div className="flex-1 h-px bg-gray-200 ml-3"></div>
                  </div>

                  {/* Laws for this letter */}
                  <div className="space-y-6 pl-0 md:pl-2">
                    {groupedLaws[letter].map(law => (
                      <LawQuoteCard
                        key={law.id}
                        law={law}
                        color={category.color}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No laws in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Explore Other Categories */}
      <section className="py-8 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4 text-center">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {categories
              .filter(c => c.id !== id)
              .slice(0, 4)
              .map(cat => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.id}`}
                  className={`${cat.color} text-white rounded-xl p-4 hover:opacity-90 transition-opacity text-center`}
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <p className="font-medium text-sm mt-2">{cat.name}</p>
                </Link>
              ))}
          </div>
          <div className="text-center mt-4">
            <Link
              href="/categories"
              className="text-green-600 hover:text-green-700 font-medium text-sm"
            >
              View all categories &rarr;
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
