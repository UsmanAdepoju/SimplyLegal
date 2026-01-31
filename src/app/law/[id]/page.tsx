import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import LawCard from '@/components/LawCard';
import ShareButtons from '@/components/ShareButtons';
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

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-[#F5F1E8] overflow-hidden">
          {/* Header */}
          {category && (
            <div className="bg-[#008751] px-6 py-4">
              <Link
                href={`/category/${category.id}`}
                className="inline-flex items-center space-x-2 text-white hover:opacity-80"
              >
                <span className="text-xl">{category.icon}</span>
                <span className="text-sm font-medium uppercase tracking-wide">{category.name}</span>
              </Link>
            </div>
          )}

          <div className="p-6 md:p-8">
            {/* Title and Summary */}
            <h1
              className="text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              {law.title}
            </h1>

            <p className="text-lg text-[#6B6B6B] mb-6 pb-6 border-b border-[#E0E0E0]">
              {law.summary}
            </p>

            {/* Key Points */}
            <div className="mb-8">
              <h2
                className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide flex items-center"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                Key Points
              </h2>
              <ul className="space-y-3">
                {law.keyPoints.map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start space-x-3 bg-white p-4"
                  >
                    <span className="text-[#D4A843] font-bold">→</span>
                    <span className="text-[#1A1A1A]">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Full Content */}
            <div className="mb-8">
              <h2
                className="text-xl font-bold text-[#1A1A1A] mb-4 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
              >
                What You Need to Know
              </h2>
              <div className="bg-white p-6">
                {law.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-[#6B6B6B] mb-4 leading-relaxed last:mb-0">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>

            {/* Penalty Box */}
            {law.penalty && (
              <div className="mb-8 bg-[#D4A843] p-4">
                <h3
                  className="font-bold text-[#1A1A1A] mb-2 flex items-center uppercase"
                  style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                >
                  <span className="mr-2">⚠️</span>
                  Penalty for Violation
                </h3>
                <p className="text-[#1A1A1A]">{law.penalty}</p>
              </div>
            )}

            {/* Original Constitutional Text */}
            {law.originalText && (
              <div className="mb-8">
                <details className="group">
                  <summary className="cursor-pointer bg-[#008751] text-white p-4 hover:opacity-90 transition-opacity">
                    <div className="flex items-center justify-between">
                      <h3 className="font-bold flex items-center uppercase tracking-wide text-sm">
                        <span className="mr-2">📜</span>
                        Read Original Constitutional Text
                        {law.section && (
                          <span className="ml-2 font-normal opacity-80">
                            ({law.section})
                          </span>
                        )}
                      </h3>
                      <span className="group-open:rotate-180 transition-transform">▼</span>
                    </div>
                  </summary>
                  <div className="p-6 bg-white border-t-0">
                    <p
                      className="text-[#6B6B6B] whitespace-pre-line leading-relaxed italic"
                      style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
                    >
                      &quot;{law.originalText}&quot;
                    </p>
                    <p className="text-xs text-[#6B6B6B] mt-4 font-medium">
                      — {law.source}
                    </p>
                  </div>
                </details>
              </div>
            )}

            {/* Section Reference Badge */}
            {law.section && (
              <div className="mb-8 inline-flex items-center bg-[#008751] text-white px-4 py-2 text-sm font-semibold uppercase tracking-wide">
                📖 {law.section}
              </div>
            )}

            {/* Source */}
            <div className="bg-[#1A1A1A] text-white p-4">
              <h3 className="font-bold mb-2 uppercase tracking-wide text-sm">Legal Source</h3>
              <p className="text-sm opacity-80">{law.source}</p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 p-4 bg-[#D4A843]">
          <p className="text-sm text-[#1A1A1A]">
            <strong>Disclaimer:</strong> This information is provided for educational purposes
            only and does not constitute legal advice. For specific legal matters, please
            consult a qualified legal practitioner.
          </p>
        </div>

        {/* Share Buttons */}
        <ShareButtons law={law} />

        {/* Navigation */}
        <div className="mt-6">
          <Link
            href={`/category/${law.category}`}
            className="text-[#008751] hover:text-[#006B3F] font-semibold flex items-center uppercase tracking-wide text-sm"
          >
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to {category?.name || 'Category'}
          </Link>
        </div>
      </article>

      {/* Related Laws */}
      {relatedLaws.length > 0 && (
        <section className="bg-[#F5F1E8] py-12 mt-8">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className="text-2xl font-bold text-[#1A1A1A] mb-6 uppercase tracking-wide"
              style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
            >
              Related Laws
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
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
