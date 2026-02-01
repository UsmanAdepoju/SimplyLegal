import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import LawQuoteCard from '@/components/LawQuoteCard';
import SearchResultCard from '@/components/SearchResultCard';
import { categories } from '@/data/categories';
import { laws, getLawById, getLawsByCategory } from '@/data/laws';

interface LawPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: LawPageProps): Promise<Metadata> {
  const { id } = await params;
  const law = getLawById(id);

  if (!law) {
    return {
      title: 'Law Not Found - SimplyLegal',
    };
  }

  return {
    title: `${law.title} - SimplyLegal`,
    description: law.summary,
  };
}

export async function generateStaticParams() {
  return laws.map(law => ({
    id: law.id,
  }));
}

// Determine card variant based on law index in its category
const cardVariants: Array<'green' | 'mustard' | 'dark'> = ['green', 'mustard', 'dark'];

export default async function LawPage({ params }: LawPageProps) {
  const { id } = await params;
  const law = getLawById(id);

  if (!law) {
    notFound();
  }

  const category = categories.find(c => c.id === law.category);
  const allCategoryLaws = getLawsByCategory(law.category);
  const lawIndex = allCategoryLaws.findIndex(l => l.id === law.id);
  const variant = cardVariants[lawIndex % cardVariants.length];

  const relatedLaws = allCategoryLaws
    .filter(l => l.id !== law.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="border-b border-[#E0E0E0]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-[#6B6B6B]">
            <Link href="/" className="hover:text-[#008751]">
              Home
            </Link>
            <span>/</span>
            {category && (
              <>
                <Link
                  href={`/category/${category.id}`}
                  className="hover:text-[#008751]"
                >
                  {category.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-[#1A1A1A] truncate">{law.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content - Centered Downloadable Card */}
      <section className="py-12 bg-[#F5F1E8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Badge */}
          {category && (
            <div className="text-center mb-6">
              <Link
                href={`/category/${category.id}`}
                className="inline-flex items-center px-4 py-2 bg-[#008751] text-white text-sm font-medium uppercase tracking-wide hover:opacity-90"
              >
                {category.icon} {category.name}
              </Link>
            </div>
          )}

          {/* The Downloadable Card */}
          <LawQuoteCard law={law} variant={variant} />

          {/* Disclaimer */}
          <div className="mt-8 p-4 bg-white border border-[#E0E0E0] text-center max-w-[500px] mx-auto">
            <p className="text-xs text-[#6B6B6B]">
              <strong>Disclaimer:</strong> This is for educational purposes only and does not constitute legal advice.
            </p>
          </div>

          {/* Navigation */}
          <div className="mt-6 text-center">
            <Link
              href={`/category/${law.category}`}
              className="inline-flex items-center text-[#008751] hover:text-[#006B3F] font-semibold uppercase tracking-wide text-sm"
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to {category?.name || 'Category'}
            </Link>
          </div>
        </div>
      </section>

      {/* Related Laws */}
      {relatedLaws.length > 0 && (
        <section className="bg-white py-12 border-t border-[#E0E0E0]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl font-bold text-[#1A1A1A] mb-6 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Related Laws
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedLaws.map((relatedLaw, index) => (
                <SearchResultCard
                  key={relatedLaw.id}
                  law={relatedLaw}
                  variant={cardVariants[(index + 1) % cardVariants.length]}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
