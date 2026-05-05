import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import Breadcrumbs from '@/components/Breadcrumbs';
import Sidebar from '@/components/Sidebar';
import AuthorCard from '@/components/AuthorCard';
import FAQSection from '@/components/FAQSection';
import SocialShare from '@/components/SocialShare';
import { posts, getPostBySlug } from '@/content/posts';
import { getCategoryById } from '@/content/categories';
import { getAuthorById } from '@/content/authors';

const TableOfContents = dynamic(() => import('@/components/TableOfContents'));

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  if (posts.length === 0) return [{ slug: '_empty' }];
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const siteUrl = 'https://autocareamerica.com';
  const url = `${siteUrl}/blog/${slug}/`;

  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url,
      type: 'article',
      publishedTime: post.date,
      authors: [getAuthorById(post.authorId)?.name ?? 'AutoCare America'],
      images: [{ url: `${siteUrl}/og/default.png`, width: 1200, height: 630 }],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const category = getCategoryById(post.categoryId);
  const author = getAuthorById(post.authorId);
  const siteUrl = 'https://autocareamerica.com';

  const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${slug}/`,
    },
    image: post.image
      ? { '@type': 'ImageObject', url: `${siteUrl}${post.image.src}`, width: post.image.width, height: post.image.height }
      : { '@type': 'ImageObject', url: `${siteUrl}/og/default.png`, width: 1200, height: 630 },
    author: {
      '@type': 'Person',
      name: author?.name,
      description: author?.credentials,
    },
    publisher: {
      '@type': 'Organization',
      name: 'AutoCare America',
      url: siteUrl,
    },
    url: `${siteUrl}/blog/${slug}/`,
    keywords: post.tags.join(', '),
  };

  return (
    <>
      {post.image && (
        <link rel="preload" as="image" href={post.image.src} fetchPriority="high" />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Article header */}
      <div className="bg-brand-black border-b border-brand-grey-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Breadcrumbs
            items={[
              { label: 'Blog', href: '/blog/' },
              ...(category ? [{ label: category.name }] : []),
              { label: post.title },
            ]}
          />
          {category && (
            <span className="inline-block mt-4 text-xs font-bold uppercase tracking-widest text-red-400">
              {category.name}
            </span>
          )}
          <h1 className="text-white font-heading font-bold text-3xl sm:text-4xl mt-2 mb-4 leading-tight">
            {post.title}
          </h1>
          <p className="text-brand-silver text-lg leading-relaxed mb-6 max-w-3xl">{post.excerpt}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-brand-silver">
            {author && (
              <div className="flex items-center gap-2">
                <div className={`w-7 h-7 rounded-full ${author.accentColor} flex items-center justify-center`}>
                  <span className="text-white text-xs font-bold">{author.initials}</span>
                </div>
                <span className="font-medium text-white">{author.name}</span>
              </div>
            )}
            <span>{formattedDate}</span>
            <span>{post.readTime} min read</span>
            <div className="flex gap-1 flex-wrap">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-brand-grey-800 text-brand-silver px-2 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hero image */}
      {post.image && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
          <figure className="relative rounded-xl overflow-hidden" style={{ aspectRatio: '940 / 480' }}>
            <img
              src={post.image.src}
              alt={post.image.alt}
              width={940}
              height={480}
              className="w-full h-full object-cover"
              loading="eager"
              fetchPriority="high"
            />
            <figcaption className="absolute bottom-0 right-0 text-xs text-white/70 bg-black/40 px-2 py-1 rounded-tl">
              Photo by{' '}
              <a href={post.image.pexelsUrl} target="_blank" rel="noopener noreferrer" className="underline hover:text-white">
                {post.image.photographer}
              </a>{' '}
              / Pexels
            </figcaption>
          </figure>
        </div>
      )}

      {/* Content area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[200px_1fr_300px] gap-10">
          {/* Left: TOC (desktop) */}
          <div className="hidden lg:block">
            {post.toc.length > 0 && <TableOfContents items={post.toc} />}
          </div>

          {/* Center: Article */}
          <article className="min-w-0">
            {/* TOC (mobile) */}
            {post.toc.length > 0 && (
              <details className="lg:hidden mb-8 border border-gray-200 rounded-xl p-4">
                <summary className="text-sm font-bold cursor-pointer text-gray-700">
                  Table of Contents
                </summary>
                <nav className="mt-3 space-y-1">
                  {post.toc.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm text-gray-600 hover:text-brand-red py-0.5 ${item.level === 3 ? 'pl-4' : ''}`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </details>
            )}

            {/* Article body */}
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            {/* Share */}
            <div className="mt-10 pt-6 border-t border-gray-100">
              <SocialShare title={post.title} slug={post.slug} />
            </div>

            {/* FAQ */}
            {post.faq.length > 0 && (
              <FAQSection items={post.faq} postSlug={post.slug} />
            )}

            {/* Author */}
            {author && <AuthorCard author={author} />}
          </article>

          {/* Right: Sidebar */}
          <Sidebar currentSlug={post.slug} />
        </div>
      </div>
    </>
  );
}
