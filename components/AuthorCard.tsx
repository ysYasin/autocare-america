import { Author } from '@/content/authors';

interface AuthorCardProps {
  author: Author;
}

export default function AuthorCard({ author }: AuthorCardProps) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: author.name,
    description: author.bio,
    jobTitle: author.credentials,
  };

  return (
    <aside className="bg-gray-50 border border-gray-200 rounded-xl p-6 mt-10">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <h3 className="text-xs font-bold uppercase tracking-widest text-brand-red mb-4">About the Author</h3>
      <div className="flex items-start gap-4">
        <div className={`w-14 h-14 rounded-full ${author.accentColor} flex items-center justify-center flex-shrink-0`}>
          <span className="text-white text-lg font-bold">{author.initials}</span>
        </div>
        <div>
          <p className="font-bold text-gray-900">{author.name}</p>
          <p className="text-xs text-brand-red font-medium mb-2">{author.credentials}</p>
          <p className="text-gray-600 text-sm leading-relaxed">{author.bio}</p>
          {author.social && (
            <div className="flex gap-3 mt-3">
              {author.social.twitter && (
                <a
                  href={author.social.twitter}
                  className="text-gray-500 hover:text-brand-red transition-colors"
                  aria-label={`${author.name} on Twitter`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {author.social.linkedin && (
                <a
                  href={author.social.linkedin}
                  className="text-gray-500 hover:text-brand-red transition-colors"
                  aria-label={`${author.name} on LinkedIn`}
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
