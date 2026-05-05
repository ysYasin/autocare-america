import type { Metadata } from 'next';
import { Inter, Roboto_Condensed } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-roboto-condensed',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://autocareamerica.com'),
  title: {
    template: '%s | AutoCare America',
    default: 'AutoCare America — Car Repair & Maintenance Guides',
  },
  description:
    'Practical car repair and maintenance guides written by ASE-certified technicians. Engine repair, DIY fixes, diagnostics, tools, and maintenance tips for American car owners.',
  keywords: ['car repair', 'auto maintenance', 'DIY car repair', 'engine repair', 'brake replacement', 'oil change guide'],
  authors: [{ name: 'AutoCare America' }],
  creator: 'AutoCare America',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'AutoCare America',
    images: [{ url: '/og/default.png', width: 1200, height: 630, alt: 'AutoCare America' }],
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@autocareamerica',
  },
  robots: {
    index: true,
    follow: true,
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AutoCare America',
  url: 'https://autocareamerica.com',
  logo: 'https://autocareamerica.com/og/default.png',
  description: 'Practical car repair and maintenance guides written by ASE-certified technicians.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${robotoCondensed.variable}`}>
      <link rel="preload" as="font" type="font/woff2" href="/_next/static/media/e4af272ccee01ff0-s.p.woff2" crossOrigin="anonymous" />
      <link rel="preload" as="font" type="font/woff2" href="/_next/static/media/dc1a31dd116e0329-s.p.woff2" crossOrigin="anonymous" />
      <body className="font-sans bg-white">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-brand-red focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-semibold">
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
