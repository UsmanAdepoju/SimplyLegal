import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import LawCard from '@/components/LawCard';
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

export default async function LawPage({ params }: LawPageProps) {
  const { id } = await params;
  const law = getLawById(id);

  if (!law) {
    notFound();
  }

  const category = categories.find(c => c.id === law.category);
  const relatedLaws = getLawsByCategory(law.category)
    .filter(l => l.id !== law.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-green-600">
              Home
            </Link>
            <span>/</span>
            {category && (
              <>
                <Link
                  href={`/category/${category.id}`}
                  className="hover:text-green-600"
                >
                  {category.name}
                </Link>
                <span>/</span>
              </>
            )}
            <span className="text-gray-900 truncate">{law.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          {category && (
            <div className={`${category.color} px-6 py-4`}>
              <Link
                href={`/category/${category.id}`}
                className="inline-flex items-center space-x-2 text-white hover:underline"
              >
                <span className="text-xl">{category.icon}</span>
                <span className="text-sm font-medium">{category.name}</span>
              </Link>
            </div>
          )}

          <div className="p-6 md:p-8">
            {/* Title and Summary */}
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {law.title}
            </h1>

            <p className="text-lg text-gray-600 mb-6 pb-6 border-b">
              {law.summary}
            </p>

            {/* Key Points */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                <span className="text-green-600 mr-2">✓</span>
                Key Points to Remember
              </h2>
              <ul className="space-y-3">
                {law.keyPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 bg-green-50 rounded-lg p-3"
                  >
                    <span className="text-green-600 font-bold">{index + 1}.</span>
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Content */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                What You Need to Know
              </h2>
              <div className="prose prose-green max-w-none">
                {law.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Penalty Box */}
            {law.penalty && (
              <div className="mb-8 bg-red-50 border-l-4 border-red-500 rounded-r-lg p-4">
                <h3 className="font-semibold text-red-800 mb-2 flex items-center">
                  <span className="mr-2">⚠️</span>
                  Penalty for Violation
                </h3>
                <p className="text-red-700">{law.penalty}</p>
              </div>
            )}

            {/* Source */}
            <div className="bg-gray-100 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">Legal Source</h3>
              <p className="text-gray-600 text-sm">{law.source}</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-yellow-50 rounded-lg border border-yellow-200">
          <p className="text-sm text-yellow-800">
            <strong>Disclaimer:</strong> This information is provided for educational purposes
            only and does not constitute legal advice. For specific legal matters, please
            consult a qualified legal practitioner.
          </p>
        </div>

        {/* Share and Navigation */}
        <div className="mt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <Link
            href={`/category/${law.category}`}
            className="text-green-600 hover:text-green-700 font-medium flex items-center"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to {category?.name || 'Category'}
          </Link>
        </div>
      </article>

      {/* Related Laws */}
      {relatedLaws.length > 0 && (
        <section className="bg-white py-12 mt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Laws You Might Find Useful
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedLaws.map(relatedLaw => (
                <LawCard key={relatedLaw.id} law={relatedLaw} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
