import type { Metadata } from 'next';
import Breadcrumbs from '@/components/Breadcrumbs';
import ContactForm from '@/components/ContactForm';

export const metadata: Metadata = {
  title: 'Contact AutoCare America',
  description:
    'Send us a repair question, report an article correction, or ask about writing for AutoCare America. We respond to most messages within 48 hours on weekdays.',
  alternates: { canonical: 'https://autocareamerica.com/contact/' },
  openGraph: {
    title: 'Contact AutoCare America',
    description: 'Questions, corrections, and writing inquiries. We respond within 48 hours.',
    url: 'https://autocareamerica.com/contact/',
  },
};

export default function ContactPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-brand-black border-b border-brand-grey-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <Breadcrumbs items={[{ label: 'Contact' }]} />
          <h1 className="text-white font-heading font-bold text-3xl sm:text-4xl mt-4 mb-3">
            Get in Touch
          </h1>
          <p className="text-brand-silver text-lg max-w-xl">
            We respond to most questions within 48 hours on weekdays. Include your vehicle year, make,
            and model for repair-specific questions.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-12">
          {/* Form */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-6">Send a message</h2>
            <ContactForm />
          </div>

          {/* Info */}
          <aside className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-4">Before you write</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                {[
                  'For repair questions, include the year, make, model, and engine size',
                  'We cannot provide repair estimates — those require a physical inspection',
                  'For article corrections, link to the specific guide and quote the incorrect text',
                  'We do not accept sponsored posts or paid link insertions',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-red mt-1.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-black rounded-xl p-6">
              <h3 className="text-white font-bold mb-2">Response time</h3>
              <p className="text-brand-silver text-sm leading-relaxed">
                Weekdays: within 48 hours. Weekends and U.S. holidays: we will pick it up on the
                next business day.
              </p>
              <div className="mt-4 pt-4 border-t border-brand-grey-700">
                <p className="text-brand-silver text-xs">
                  Email:{' '}
                  <span className="text-white">tips@autocareamerica.com</span>
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-gray-900 mb-2">Write for us</h3>
              <p className="text-gray-600 text-sm leading-relaxed mb-3">
                We consider pitches from ASE-certified technicians and experienced automotive
                journalists. We do not publish content from AI writing tools or non-technician
                freelancers.
              </p>
              <p className="text-gray-500 text-xs">
                Include your credentials and two writing samples with your inquiry.
              </p>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
