'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-brand-black border-b border-brand-grey-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-brand-red flex items-center justify-center rounded-sm">
              <span className="text-white font-bold text-sm font-heading">AC</span>
            </div>
            <div>
              <span className="text-white font-heading font-bold text-lg tracking-tight leading-none block">
                AutoCare
              </span>
              <span className="text-brand-silver text-xs tracking-widest uppercase leading-none block">
                America
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-brand-silver hover:text-white transition-colors text-sm font-medium tracking-wide">
              Home
            </Link>
            <Link href="/blog/" className="text-brand-silver hover:text-white transition-colors text-sm font-medium tracking-wide">
              Blog
            </Link>
            <Link href="/about/" className="text-brand-silver hover:text-white transition-colors text-sm font-medium tracking-wide">
              About
            </Link>
            <Link href="/contact/" className="text-brand-silver hover:text-white transition-colors text-sm font-medium tracking-wide">
              Contact
            </Link>
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link
              href="/blog/"
              className="hidden md:inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              Browse Guides
            </Link>

            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-brand-silver hover:text-white p-1"
              aria-label="Toggle menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-brand-grey-700 py-4 space-y-1">
            {[
              { href: '/', label: 'Home' },
              { href: '/blog/', label: 'Blog' },
              { href: '/about/', label: 'About' },
              { href: '/contact/', label: 'Contact' },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block px-2 py-2 text-brand-silver hover:text-white hover:bg-brand-grey-800 rounded text-sm font-medium transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/blog/"
              onClick={() => setMenuOpen(false)}
              className="block mt-3 text-center bg-brand-red hover:bg-brand-red-hover text-white text-sm font-semibold px-4 py-2 rounded transition-colors"
            >
              Browse Guides
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
