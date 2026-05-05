'use client';

import { useEffect, useState } from 'react';
import { TOCItem } from '@/content/posts';

interface TableOfContentsProps {
  items: TOCItem[];
}

export default function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0 }
    );

    items.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="Table of contents" className="sticky top-24">
      <h3 className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-3">In this article</h3>
      <ul className="space-y-1 border-l-2 border-gray-100">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-sm py-1 pl-3 border-l-2 -ml-0.5 transition-all ${
                item.level === 3 ? 'pl-6' : ''
              } ${
                activeId === item.id
                  ? 'border-brand-red text-brand-red font-semibold'
                  : 'border-transparent text-gray-500 hover:text-gray-900 hover:border-gray-300'
              }`}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
