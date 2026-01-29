import Link from 'next/link';
import { Category } from '@/types';

interface CategoryCardProps {
  category: Category;
  lawCount?: number;
}

export default function CategoryCard({ category, lawCount }: CategoryCardProps) {
  return (
    <Link href={`/category/${category.id}`}>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group cursor-pointer h-full">
        <div className={`${category.color} p-6 text-white`}>
          <span className="text-4xl">{category.icon}</span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-green-700 transition-colors">
            {category.name}
          </h3>
          <p className="text-gray-600 text-sm mb-3">{category.description}</p>
          {lawCount !== undefined && (
            <p className="text-sm text-green-600 font-medium">
              {lawCount} {lawCount === 1 ? 'article' : 'articles'}
            </p>
          )}
        </div>
      </div>
    </Link>
  );
}
