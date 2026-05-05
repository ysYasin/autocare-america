import Link from 'next/link';
import { categories } from '@/content/categories';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-black border-t border-brand-grey-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-brand-red flex items-center justify-center rounded-sm">
                <span className="text-white font-bold text-sm font-heading">AC</span>
              </div>
              <div>
                <span className="text-white font-heading font-bold text-lg tracking-tight leading-none block">AutoCare</span>
                <span className="text-brand-silver text-xs tracking-widest uppercase leading-none block">America</span>
              </div>
            </Link>
            <p className="text-brand-silver text-sm leading-relaxed">
              Practical car repair and maintenance guides written by ASE-certified technicians. No fluff, no upselling — just the information you need to keep your car running.
            </p>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Categories</h3>
            <ul className="space-y-2">
              {categories.map((cat) => (
                <li key={cat.id}>
                  <Link
                    href={`/blog/?category=${cat.slug}`}
                    className="text-brand-silver hover:text-brand-red transition-colors text-sm"
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Home' },
                { href: '/blog/', label: 'All Articles' },
                { href: '/about/', label: 'About Us' },
                { href: '/contact/', label: 'Contact' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-brand-silver hover:text-brand-red transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm tracking-wider uppercase mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-brand-silver text-sm">
              <li className="flex items-start gap-2">
                <svg aria-hidden="true" className="w-4 h-4 mt-0.5 text-brand-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>tips@autocareamerica.com</span>
              </li>
              <li className="flex items-start gap-2">
                <svg aria-hidden="true" className="w-4 h-4 mt-0.5 text-brand-red flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-brand-grey-700 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-brand-silver text-sm">
            &copy; {currentYear} AutoCare America. All rights reserved.
          </p>
          <p className="text-brand-silver text-xs">
            Content by ASE-certified technicians. Always consult a professional for safety-critical repairs.
          </p>
        </div>
      </div>
    </footer>
  );
}
