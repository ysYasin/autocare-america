import Link from 'next/link';
import { Post, getRecentPosts } from '@/content/posts';
import { categories } from '@/content/categories';
import { getCategoryById } from '@/content/categories';
import ArticleCard from './ArticleCard';
import NewsletterSignup from './NewsletterSignup';

interface SidebarProps {
  currentSlug?: string;
  popularPosts?: Post[];
}

export default function Sidebar({ currentSlug, popularPosts }: SidebarProps) {
  const recentPosts = getRecentPosts(5).filter((p) => p.slug !== currentSlug);
  const featured = popularPosts ?? getRecentPosts(3).filter((p) => p.slug !== currentSlug);

  return (
    <aside className="space-y-8">
      {/* Newsletter */}
      <NewsletterSignup variant="sidebar" />

      {/* Categories */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-4">Browse by Category</h3>
        <ul className="space-y-2">
          {categories.map((cat) => (
            <li key={cat.id}>
              <Link
                href={`/blog/?category=${cat.slug}`}
                className="flex items-center justify-between group px-3 py-2 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <span className="text-sm font-medium text-gray-700 group-hover:text-brand-red transition-colors">
                  {cat.name}
                </span>
                <svg aria-hidden="true" className="w-4 h-4 text-gray-300 group-hover:text-brand-red transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Recent Posts */}
      <div>
        <h3 className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-4">Recent Articles</h3>
        <div className="space-y-4">
          {recentPosts.slice(0, 4).map((post) => (
            <ArticleCard key={post.slug} post={post} variant="compact" />
          ))}
        </div>
      </div>

      {/* Popular Posts */}
      {featured.length > 0 && (
        <div>
          <h3 className="text-xs font-bold uppercase tracking-widest text-gray-600 mb-4">Popular Guides</h3>
          <div className="space-y-4">
            {featured.slice(0, 3).map((post) => {
              const cat = getCategoryById(post.categoryId);
              return (
                <div key={post.slug} className="flex gap-3 items-start group">
                  <div className="w-1 h-12 bg-brand-red rounded flex-shrink-0 mt-1" />
                  <div>
                    <Link href={`/blog/${post.slug}/`} className="text-sm font-semibold text-gray-900 group-hover:text-brand-red transition-colors leading-snug block">
                      {post.title}
                    </Link>
                    {cat && <span className="text-xs text-brand-red font-medium mt-0.5 block">{cat.name}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Ad placeholder */}
      <div className="border-2 border-dashed border-gray-200 rounded-xl p-6 text-center">
        <p className="text-xs text-gray-600 font-medium uppercase tracking-wider">Advertisement</p>
        <p className="text-xs text-gray-500 mt-1">300 × 250</p>
      </div>
    </aside>
  );
}
