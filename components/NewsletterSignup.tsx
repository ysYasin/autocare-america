'use client';

import { useState } from 'react';

interface NewsletterSignupProps {
  variant?: 'sidebar' | 'inline';
}

export default function NewsletterSignup({ variant = 'sidebar' }: NewsletterSignupProps) {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  if (variant === 'inline') {
    return (
      <section className="bg-brand-black rounded-xl p-8 text-center">
        <div className="w-10 h-10 bg-brand-red rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <h3 className="text-white font-bold text-xl mb-2">Stay ahead of every repair bill</h3>
        <p className="text-brand-silver text-sm mb-6">
          One email per week. Maintenance reminders, new guides, and the occasional real-world repair story from the shop floor.
        </p>
        {submitted ? (
          <p className="text-green-400 font-medium text-sm">You are subscribed. We will be in touch.</p>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <label htmlFor="inline-email" className="sr-only">Email address</label>
            <input
              id="inline-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-2.5 rounded bg-brand-grey-800 border border-brand-grey-700 text-white placeholder-brand-silver text-sm focus:outline-none focus:border-brand-red"
            />
            <button
              type="submit"
              className="bg-brand-red hover:bg-brand-red-hover text-white font-semibold text-sm px-5 py-2.5 rounded transition-colors whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}
      </section>
    );
  }

  return (
    <div className="bg-brand-black rounded-xl p-5">
      <h3 className="text-white font-bold text-sm mb-1">Weekly Repair Digest</h3>
      <p className="text-brand-silver text-xs leading-relaxed mb-4">
        New guides and maintenance reminders, every week. No spam.
      </p>
      {submitted ? (
        <p className="text-green-400 text-xs font-medium">Subscribed. Check your inbox.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-2">
          <label htmlFor="sidebar-email" className="sr-only">Email address</label>
          <input
            id="sidebar-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
            className="w-full px-3 py-2 rounded bg-brand-grey-800 border border-brand-grey-700 text-white placeholder-brand-silver text-xs focus:outline-none focus:border-brand-red"
          />
          <button
            type="submit"
            className="w-full bg-brand-red hover:bg-brand-red-hover text-white font-semibold text-xs py-2 rounded transition-colors"
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}
