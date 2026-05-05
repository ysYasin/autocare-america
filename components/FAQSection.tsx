import { FAQItem } from '@/content/posts';

interface FAQSectionProps {
  items: FAQItem[];
  postSlug: string;
}

export default function FAQSection({ items, postSlug }: FAQSectionProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="mt-12" aria-labelledby={`faq-heading-${postSlug}`}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h2 id={`faq-heading-${postSlug}`} className="text-2xl font-bold text-gray-900 mb-6">
        Frequently Asked Questions
      </h2>
      <div className="space-y-3">
        {items.map((item, index) => (
          <details
            key={index}
            open={index === 0}
            className="border border-gray-200 rounded-lg overflow-hidden group"
          >
            <summary className="flex items-center justify-between px-5 py-4 cursor-pointer hover:bg-gray-50 transition-colors [&::-webkit-details-marker]:hidden list-none">
              <span className="font-semibold text-gray-900 pr-4 text-sm sm:text-base">{item.question}</span>
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-brand-red flex-shrink-0 transition-transform group-open:rotate-180"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </summary>
            <div className="px-5 pb-5 pt-1">
              <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
