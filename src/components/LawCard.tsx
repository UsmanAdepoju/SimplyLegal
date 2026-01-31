import Link from 'next/link';
import { Law } from '@/types';
import { categories } from '@/data/categories';

interface LawCardProps {
  law: Law;
  showCategory?: boolean;
}

export default function LawCard({ law, showCategory = false }: LawCardProps) {
  const category = categories.find(c => c.id === law.category);

  return (
    <Link href={`/law/${law.id}`}>
      <article className="bg-white border border-[#E0E0E0] hover:border-[#008751] transition-all duration-300 p-6 h-full flex flex-col cursor-pointer group">
        {showCategory && category && (
          <div className="mb-3">
            <span className="inline-flex items-center px-3 py-1 bg-[#008751] text-white text-xs font-medium uppercase tracking-wide">
              {category.icon} {category.name}
            </span>
          </div>
        )}

        <h3
          className="text-lg font-bold text-[#1A1A1A] mb-2 group-hover:text-[#008751] transition-colors uppercase tracking-wide"
          style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
        >
          {law.title}
        </h3>

        <p className="text-[#6B6B6B] text-sm mb-4 flex-grow leading-relaxed">{law.summary}</p>

        <div className="space-y-3">
          {law.penalty && (
            <div className="flex items-start space-x-2 text-sm bg-[#D4A843] p-3">
              <span className="mt-0.5">⚠️</span>
              <span className="text-[#1A1A1A]">
                <strong>Penalty:</strong> {law.penalty}
              </span>
            </div>
          )}

          <div className="pt-3 border-t border-[#E0E0E0]">
            <p className="text-sm text-[#008751] font-semibold uppercase tracking-wide">
              {law.keyPoints.length} key points →
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
