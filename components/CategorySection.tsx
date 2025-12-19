
import React from 'react';
import { Category } from '../types';
import LinkCard from './LinkCard';

interface CategorySectionProps {
  category: Category;
}

const CategorySection: React.FC<CategorySectionProps> = ({ category }) => {
  return (
    <section className="mb-12 last:mb-0">
      <div className="flex items-center space-x-3 mb-6 px-1">
        <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
        <h2 className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-400 dark:text-zinc-500 whitespace-nowrap">
          {category.title}
        </h2>
        <div className="h-px flex-1 bg-zinc-200 dark:bg-zinc-800"></div>
      </div>
      <div className="grid gap-1">
        {category.links.map((link, idx) => (
          <LinkCard key={`${category.id}-${idx}`} link={link} />
        ))}
      </div>
    </section>
  );
};

export default CategorySection;