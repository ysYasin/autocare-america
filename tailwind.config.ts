import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          red: '#CC0000',
          'red-dark': '#990000',
          'red-hover': '#E60000',
          black: '#0A0A0A',
          'grey-900': '#111111',
          'grey-800': '#1A1A1A',
          'grey-700': '#2D2D2D',
          silver: '#9CA3AF',
          'silver-light': '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        heading: ['var(--font-roboto-condensed)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: 'none',
            color: '#1A1A1A',
            h2: { color: '#0A0A0A', fontWeight: '700' },
            h3: { color: '#0A0A0A', fontWeight: '600' },
            strong: { color: '#0A0A0A' },
            a: { color: '#CC0000', textDecoration: 'underline' },
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
