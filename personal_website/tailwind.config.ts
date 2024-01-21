import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '$primary-color',
      secondary: '$secondary-color',
      tertiary: '$tertiary-color',
      quaternary: '$quaternary-color',
    },
  },
  plugins: [],
};
export default config;
