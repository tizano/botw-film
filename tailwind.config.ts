import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        'fluid-3xl': 'clamp(3rem, 1.9rem + 2.5vw, 6rem)',
        'fluid-2xl': 'clamp(2.5rem, 1.8824rem + 2.3529vw, 4rem)',
        'fluid-xxl': 'clamp(2.25rem, 1.8382rem + 1.5686vw, 3.25rem)',
        'fluid-xl': 'clamp(2rem, 1.6912rem + 1.1765vw, 2.75rem)',
        'fluid-lg': 'clamp(1.75rem, 1.5441rem + 0.7843vw, 2.25rem)',
        'fluid-md': 'clamp(1rem, 0.9485rem + 0.1961vw, 1.125rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8235rem + 0.1961vw, 1rem)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
    },
  },
  plugins: [],
};
export default config;
