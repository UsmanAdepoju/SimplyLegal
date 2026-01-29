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
      <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-6 h-full flex flex-col cursor-pointer group">
        {showCategory && category && (
          <div className="mb-3">
            <span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium text-white ${category.color}`}
            >
              {category.icon} {category.name}
            </span>
          </div>
        )}

        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
          {law.title}
        </h3>

        <p className="text-gray-600 text-sm mb-4 flex-grow">{law.summary}</p>

        <div className="space-y-3">
          {law.penalty && (
            <div className="flex items-start space-x-2 text-sm">
              <span className="text-red-500 mt-0.5">⚠️</span>
              <span className="text-gray-700">
                <strong>Penalty:</strong> {law.penalty}
              </span>
            </div>
          )}

          <div className="pt-3 border-t border-gray-100">
            <p className="text-sm text-green-600 font-medium">
              {law.keyPoints.length} key points to know →
            </p>
          </div>
        </div>
      </article>
    </Link>
  );
}
