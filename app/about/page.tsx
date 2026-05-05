import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import { authors } from '@/content/authors';

export const metadata: Metadata = {
  title: 'About AutoCare America — ASE-Certified Technicians',
  description:
    'AutoCare America is written by ASE-certified technicians who have diagnosed over 14,000 vehicles. Specific guides, real numbers, no paid partnerships.',
  alternates: { canonical: 'https://autocareamerica.com/about/' },
  openGraph: {
    title: 'About AutoCare America — ASE-Certified Technicians',
    description: 'Written by ASE-certified technicians. No paid partnerships, no guesswork.',
    url: 'https://autocareamerica.com/about/',
    type: 'website',
    images: [{ url: 'https://autocareamerica.com/og/about.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About AutoCare America — ASE-Certified Technicians',
    description: 'Written by ASE-certified technicians. No paid partnerships, no guesswork.',
    images: ['https://autocareamerica.com/og/about.png'],
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AutoCare America',
  url: 'https://autocareamerica.com',
  description:
    'Practical car repair and maintenance guides written by ASE-certified technicians for American car owners.',
  foundingDate: '2024',
  knowsAbout: ['Car repair', 'Auto maintenance', 'Engine diagnostics', 'DIY auto repair'],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />

      {/* Header */}
      <div className="bg-brand-black border-b border-brand-grey-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Breadcrumbs items={[{ label: 'About' }]} />
          <h1 className="text-white font-heading font-bold text-3xl sm:text-4xl mt-4 mb-3">
            About AutoCare America
          </h1>
          <p className="text-brand-silver text-lg max-w-2xl">
            Every guide on this site is written or reviewed by an ASE-certified technician who has
            done the job. No freelance research. No vague warnings. Specific costs, specific tools,
            specific steps.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-16">
        {/* Mission */}
        <section aria-labelledby="mission-heading">
          <h2 id="mission-heading" className="text-2xl font-bold text-gray-900 mb-6 font-heading">
            Why we built this
          </h2>
          <div className="prose-like space-y-4 text-gray-700 leading-relaxed">
            <p>
              The average car repair shop visit costs $386. A check engine light diagnosis runs
              $100–$165 at an independent shop, $130–$220 at a dealership. Neither is necessary for a
              significant portion of common problems — but most repair guides online are written by
              people who have never held a wrench, optimized for search rankings instead of accuracy.
            </p>
            <p>
              AutoCare America sits between &ldquo;take it to a mechanic&rdquo; and &ldquo;figure it out on
              YouTube.&rdquo; We tell you exactly what the repair costs, which tools you need, how long it
              takes, and when it is genuinely not worth attempting yourself. That last point matters
              as much as the first three.
            </p>
            <p>
              We are not anti-mechanic. There are repairs we will specifically tell you not to
              attempt. But you should make that call with real information, not because a generic
              guide buried the answer in boilerplate warnings.
            </p>
          </div>
        </section>

        {/* When this site won't help */}
        <section aria-labelledby="limits-heading">
          <h2 id="limits-heading" className="text-2xl font-bold text-gray-900 mb-6 font-heading">
            When this site will not help you
          </h2>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              We cover repairs a competent first-timer can complete in a driveway or garage with hand
              tools and a floor jack. We do not cover transmission rebuilds, head gasket replacements
              on engines with variable valve timing, or anything that requires a lift, a hydraulic
              press, or shop-grade diagnostic equipment.
            </p>
            <p>
              If your car is leaking brake fluid, has a spongy pedal, or the ABS light came on after
              a hard stop — stop reading and call a shop. Brake hydraulics have no acceptable margin
              for error.
            </p>
            <p>
              We also cannot tell you whether a specific used car is worth buying. We can tell you
              what a failing power steering rack costs to replace. We cannot inspect the one in front
              of you.
            </p>
          </div>
        </section>

        {/* Standards */}
        <section aria-labelledby="standards-heading">
          <h2 id="standards-heading" className="text-2xl font-bold text-gray-900 mb-6 font-heading">
            Editorial standards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              {
                title: 'Written by people who do the work',
                desc: 'Every guide is written or reviewed by an ASE-certified technician. We do not publish articles from freelance writers who researched the topic for three hours.',
              },
              {
                title: 'Specific numbers, not vague ranges',
                desc: 'We give you the actual part cost, the torque spec, and the exact service interval — not "consult your manual." Numbers come from our repair records and verified industry sources.',
              },
              {
                title: 'No paid partnerships',
                desc: 'We do not accept manufacturer loans, sponsored content, or affiliate arrangements that influence what we recommend. The tools we recommend are tools we have used.',
              },
              {
                title: 'Specific "when not to DIY" in every guide',
                desc: 'Every guide includes a concrete scenario where we say call a shop — not generic boilerplate, but specific: seized caliper, corroded brake line, soft pedal, cracked serpentine rib.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 bg-gray-50 rounded-xl border border-gray-100"
              >
                <div className="w-1 bg-brand-red rounded flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-gray-900 text-sm mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section aria-labelledby="team-heading">
          <h2 id="team-heading" className="text-2xl font-bold text-gray-900 mb-6 font-heading">
            The team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {authors.map((author) => (
              <div key={author.id} className="bg-white border border-gray-200 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`w-14 h-14 rounded-full ${author.accentColor} flex items-center justify-center flex-shrink-0`}
                  >
                    <span className="text-white text-lg font-bold">{author.initials}</span>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{author.name}</h3>
                    <p className="text-xs text-brand-red font-medium">{author.credentials}</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">{author.bio}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="bg-brand-black rounded-2xl p-8 text-center">
          <h2 className="text-white font-bold text-xl mb-3">Found a mistake?</h2>
          <p className="text-brand-silver text-sm leading-relaxed mb-6 max-w-lg mx-auto">
            Automotive specifications vary between model years and trim levels. If you find anything
            inaccurate in our guides, tell us. We will update the article and credit you if you want.
          </p>
          <a
            href="/contact/"
            className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm"
          >
            Contact us
          </a>
        </section>
      </div>
    </>
  );
}
