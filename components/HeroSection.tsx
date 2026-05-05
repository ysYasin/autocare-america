import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="bg-brand-black relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.03) 2px,
            rgba(255,255,255,0.03) 4px
          )`
        }} />
      </div>

      {/* Red accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-brand-red" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-px bg-brand-red" />
            <span className="text-brand-red text-xs font-bold uppercase tracking-widest">
              Written by ASE-Certified Technicians
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-white font-heading font-bold text-4xl sm:text-5xl lg:text-6xl leading-tight mb-6">
            Fix It Right the{' '}
            <span className="text-brand-red">First Time</span>
          </h1>

          {/* Subheadline */}
          <p className="text-brand-silver text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl">
            Practical repair and maintenance guides for American car owners. No shop jargon, no upselling —
            just the exact steps, costs, and warnings you need before you touch a wrench.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16">
            <Link
              href="/blog/"
              className="inline-flex items-center gap-2 bg-brand-red hover:bg-brand-red-hover text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              Browse All Guides
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
            <Link
              href="/about/"
              className="inline-flex items-center gap-2 border border-brand-grey-700 hover:border-brand-silver text-brand-silver hover:text-white font-semibold px-6 py-3 rounded-lg transition-colors"
            >
              About Our Team
            </Link>
          </div>

          {/* Stats bar */}
          <div className="flex flex-wrap gap-8">
            {[
              { value: '12+', label: 'In-depth guides' },
              { value: '22 yrs', label: 'Combined shop experience' },
              { value: '14,000+', label: 'Vehicles diagnosed' },
              { value: '100%', label: 'No paid reviews' },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-white font-bold text-xl font-heading">{stat.value}</div>
                <div className="text-brand-silver text-xs mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-brand-grey-700" />
    </section>
  );
}
