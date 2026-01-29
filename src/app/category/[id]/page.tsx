import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import LawCard from '@/components/LawCard';
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

  const categoryLaws = getLawsByCategory(id);

  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className={`${category.color} text-white py-12`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm mb-4">
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

          <div className="flex items-center space-x-4">
            <span className="text-5xl">{category.icon}</span>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold">{category.name}</h1>
              <p className="text-lg opacity-90 mt-2">{category.description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Laws Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <p className="text-gray-600">
              {categoryLaws.length} {categoryLaws.length === 1 ? 'article' : 'articles'} in this category
            </p>
          </div>

          {categoryLaws.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categoryLaws.map(law => (
                <LawCard key={law.id} law={law} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No articles in this category yet. Check back soon!
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Explore Other Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories
              .filter(c => c.id !== id)
              .slice(0, 4)
              .map(cat => (
                <Link
                  key={cat.id}
                  href={`/category/${cat.id}`}
                  className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <span className="text-2xl">{cat.icon}</span>
                  <p className="font-medium text-gray-900 mt-2">{cat.name}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
