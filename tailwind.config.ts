import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
        fhd: '1920px',
      },
    },
    extend: {
      screens: {
        fhd: '1920px',
      },
      fontSize: {
        'fluid-3xl': 'clamp(3rem, 1.9rem + 2.5vw, 6rem)',
        'fluid-2xl': 'clamp(2.5rem, 1.8824rem + 2.3529vw, 4rem)',
        'fluid-xxl': 'clamp(2.25rem, 1.8382rem + 1.5686vw, 3.25rem)',
        'fluid-xl': 'clamp(2rem, 1.6912rem + 1.1765vw, 2.75rem)',
        'fluid-lg': 'clamp(1.75rem, 1.5441rem + 0.7843vw, 2rem)',
        'fluid-md': 'clamp(1rem, 0.9485rem + 0.1961vw, 1.125rem)',
        'fluid-sm': 'clamp(0.875rem, 0.8235rem + 0.1961vw, 1rem)',
      },
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'primary-400': 'var(--primary-400)',
        'primary-600': 'var(--primary-600)',
        'primary-800': 'var(--primary-800)',
        'secondary-400': 'var(--secondary-400)',
        'secondary-600': 'var(--secondary-600)',
        'secondary-800': 'var(--secondary-800)',
      },
      boxShadow: {
        'primary-inset':
          'inset 0px 25px 51px -36px rgba(255, 255, 255, 0.5), inset 0px 2px 11px -4px #ffffff, inset 0px 98px 100px -64px rgba(202, 172, 255, 0.3), inset 0px 4px 18px rgba(154, 146, 210, 0.3), inset 0px 1px 0px rgba(227, 222, 255, 0.2)',
        'secondary-inset':
          'nset 0px 25px 51px -36px rgba(255, 255, 255, 0.5), inset 0px 2px 11px -4px #FFFFFF, inset 0px 98px 100px -64px rgba(202, 172, 255, 0.3), inset 0px 4px 18px rgba(154, 146, 210, 0.3), inset 0px 1px 0px rgba(227, 222, 255, 0.2)',
      },
    },
  },
  plugins: [],
};
export default config;
