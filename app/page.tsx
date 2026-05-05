import type { Metadata } from 'next';
import Link from 'next/link';
import HeroSection from '@/components/HeroSection';
import ArticleCard from '@/components/ArticleCard';
import NewsletterSignup from '@/components/NewsletterSignup';
import { posts, getRecentPosts } from '@/content/posts';
import { categories } from '@/content/categories';

export const metadata: Metadata = {
  title: 'AutoCare America — Car Repair & Maintenance Guides',
  description:
    'Practical car repair and maintenance guides written by ASE-certified technicians. Engine repair, DIY fixes, diagnostics, and maintenance tips for American car owners.',
  alternates: { canonical: 'https://autocareamerica.com/' },
  openGraph: {
    title: 'AutoCare America — Car Repair & Maintenance Guides',
    description: 'Practical guides from ASE-certified technicians for American car owners.',
    url: 'https://autocareamerica.com/',
    images: [{ url: '/og/default.png', width: 1200, height: 630 }],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AutoCare America',
  url: 'https://autocareamerica.com',
  description: 'Practical car repair and maintenance guides written by ASE-certified technicians.',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://autocareamerica.com/blog/?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};

const categoryGradients: Record<string, string> = {
  'engine-repair': 'from-red-900 to-red-700',
  'diy-fixes': 'from-zinc-800 to-zinc-600',
  'maintenance-tips': 'from-slate-800 to-slate-600',
  'diagnostics': 'from-amber-900 to-amber-700',
  'tools-reviews': 'from-blue-900 to-blue-700',
};

export default function HomePage() {
  const featured = posts.filter((p) => p.featured).slice(0, 3);
  const recent = getRecentPosts(6);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />

      <HeroSection />

      {/* Featured Articles */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-1">Editor picks</p>
              <h2 className="text-3xl font-bold text-gray-900 font-heading">Featured Guides</h2>
            </div>
            <Link href="/blog/" className="text-sm font-semibold text-brand-red hover:underline hidden sm:block">
              View all articles
            </Link>
          </div>
          <div className="space-y-6">
            {featured.map((post) => (
              <ArticleCard key={post.slug} post={post} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-16 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-1">Find what you need</p>
            <h2 className="text-3xl font-bold text-gray-900 font-heading">Browse by Category</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((cat) => {
              const gradient = categoryGradients[cat.id] ?? 'from-gray-800 to-gray-600';
              return (
                <Link
                  key={cat.id}
                  href={`/blog/?category=${cat.slug}`}
                  className={`group bg-gradient-to-br ${gradient} rounded-xl p-5 flex flex-col gap-3 hover:opacity-90 transition-opacity`}
                >
                  <h3 className="text-white font-bold text-sm leading-snug">{cat.name}</h3>
                  <p className="text-white/70 text-xs leading-relaxed line-clamp-2">{cat.description}</p>
                  <span className="text-white text-xs font-medium flex items-center gap-1 mt-auto">
                    Browse
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-brand-red text-xs font-bold uppercase tracking-widest mb-1">Latest</p>
              <h2 className="text-3xl font-bold text-gray-900 font-heading">Recent Articles</h2>
            </div>
            <Link href="/blog/" className="text-sm font-semibold text-brand-red hover:underline hidden sm:block">
              See all {posts.length} guides
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recent.map((post) => (
              <ArticleCard key={post.slug} post={post} variant="default" />
            ))}
          </div>
          <div className="mt-10 text-center sm:hidden">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
            >
              See all {posts.length} guides
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-brand-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {[
              {
                icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                title: 'Verified by Technicians',
                desc: 'Every guide reviewed by ASE-certified professionals before publication',
              },
              {
                icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
                title: 'Real Cost Estimates',
                desc: 'Specific part prices and labor costs, not vague ranges that waste your time',
              },
              {
                icon: 'M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636',
                title: 'No Paid Reviews',
                desc: 'Tools and parts are purchased independently. No manufacturer sponsorships',
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center">
                <div className="w-12 h-12 bg-brand-grey-800 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-brand-red" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-brand-silver text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-gray-50 py-16 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup variant="inline" />
        </div>
      </section>
    </>
  );
}
