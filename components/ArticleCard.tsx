import Link from 'next/link';
import { Post } from '@/content/posts';
import { getCategoryById } from '@/content/categories';
import { getAuthorById } from '@/content/authors';

const categoryGradients: Record<string, string> = {
  'engine-repair': 'from-red-900 to-red-700',
  'diy-fixes': 'from-zinc-800 to-zinc-600',
  'maintenance-tips': 'from-slate-800 to-slate-600',
  'diagnostics': 'from-amber-900 to-amber-700',
  'tools-reviews': 'from-blue-900 to-blue-700',
};

const categoryIcons: Record<string, string> = {
  'engine-repair': 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
  'diy-fixes': 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
  'maintenance-tips': 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
  'diagnostics': 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
  'tools-reviews': 'M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z',
};

interface ArticleCardProps {
  post: Post;
  variant?: 'default' | 'featured' | 'compact';
}

export default function ArticleCard({ post, variant = 'default' }: ArticleCardProps) {
  const category = getCategoryById(post.categoryId);
  const author = getAuthorById(post.authorId);
  const gradient = categoryGradients[post.categoryId] ?? 'from-zinc-800 to-zinc-600';
  const iconPath = categoryIcons[post.categoryId] ?? '';

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  if (variant === 'compact') {
    return (
      <Link href={`/blog/${post.slug}/`} className="group flex gap-3 items-start">
        <div className={`w-12 h-12 rounded bg-gradient-to-br ${gradient} flex-shrink-0 flex items-center justify-center overflow-hidden`}>
          {post.image ? (
            <img src={post.image.src} alt={post.image.alt} width={48} height={48} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            <svg aria-hidden="true" className="w-5 h-5 text-white opacity-80" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPath} />
            </svg>
          )}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900 group-hover:text-brand-red transition-colors leading-snug line-clamp-2">
            {post.title}
          </p>
          <p className="text-xs text-gray-500 mt-1">{formattedDate}</p>
        </div>
      </Link>
    );
  }

  if (variant === 'featured') {
    return (
      <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col md:flex-row">
        <div className={`bg-gradient-to-br ${gradient} w-full md:w-56 h-48 md:h-auto flex-shrink-0 flex items-center justify-center overflow-hidden`}>
          {post.image ? (
            <img src={post.image.src} alt={post.image.alt} width={post.image.width} height={post.image.height} className="w-full h-full object-cover" loading="lazy" />
          ) : (
            <svg aria-hidden="true" className="w-16 h-16 text-white opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={iconPath} />
            </svg>
          )}
        </div>
        <div className="p-6 flex flex-col justify-between flex-1">
          <div>
            {category && (
              <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-red mb-2">
                {category.name}
              </span>
            )}
            <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-red transition-colors leading-snug mb-3">
              <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">{post.excerpt}</p>
          </div>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
            <div className="flex items-center gap-2">
              <div className={`w-7 h-7 rounded-full ${author?.accentColor ?? 'bg-gray-400'} flex items-center justify-center`}>
                <span className="text-white text-xs font-bold">{author?.initials}</span>
              </div>
              <div>
                <p className="text-xs font-semibold text-gray-700">{author?.name}</p>
                <p className="text-xs text-gray-500">{formattedDate}</p>
              </div>
            </div>
            <span className="text-xs text-gray-500">{post.readTime} min read</span>
          </div>
        </div>
      </article>
    );
  }

  return (
    <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow border border-gray-100 flex flex-col">
      <div className={`bg-gradient-to-br ${gradient} h-44 flex items-center justify-center overflow-hidden`}>
        {post.image ? (
          <img src={post.image.src} alt={post.image.alt} width={post.image.width} height={post.image.height} className="w-full h-full object-cover" loading="lazy" />
        ) : (
          <svg aria-hidden="true" className="w-14 h-14 text-white opacity-40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d={iconPath} />
          </svg>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex-1">
          {category && (
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-red mb-2">
              {category.name}
            </span>
          )}
          <h3 className="font-bold text-gray-900 group-hover:text-brand-red transition-colors leading-snug mb-2 text-base">
            <Link href={`/blog/${post.slug}/`}>{post.title}</Link>
          </h3>
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
        </div>
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex items-center gap-2">
            <div className={`w-6 h-6 rounded-full ${author?.accentColor ?? 'bg-gray-400'} flex items-center justify-center`}>
              <span className="text-white text-xs font-bold">{author?.initials}</span>
            </div>
            <span className="text-xs text-gray-500">{author?.name}</span>
          </div>
          <div className="flex items-center gap-3 text-xs text-gray-500">
            <span>{formattedDate}</span>
            <span>{post.readTime} min</span>
          </div>
        </div>
      </div>
    </article>
  );
}
