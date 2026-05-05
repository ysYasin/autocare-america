import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import BlogListing from '@/components/BlogListing';
import Sidebar from '@/components/Sidebar';
import { posts } from '@/content/posts';
import { categories } from '@/content/categories';

export const metadata: Metadata = {
  title: 'All Car Repair & Maintenance Guides',
  description:
    'Browse all car repair, maintenance, diagnostics, and DIY fix guides. Written by ASE-certified technicians for American car owners.',
  alternates: { canonical: 'https://autocareamerica.com/blog/' },
  openGraph: {
    title: 'All Car Repair & Maintenance Guides — AutoCare America',
    description: 'Browse all guides from ASE-certified technicians.',
    url: 'https://autocareamerica.com/blog/',
  },
};

export default function BlogPage() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div className="bg-white">
      {/* Page header */}
      <div className="bg-brand-black border-b border-brand-grey-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Breadcrumbs items={[{ label: 'Blog' }]} />
          <h1 className="text-white font-heading font-bold text-3xl sm:text-4xl mt-4 mb-2">
            All Guides
          </h1>
          <p className="text-brand-silver text-base">
            {posts.length} articles covering engine repair, maintenance, diagnostics, DIY fixes, and tool reviews.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12">
          <BlogListing posts={sortedPosts} categories={categories} />
          <Sidebar />
        </div>
      </div>
    </div>
  );
}
