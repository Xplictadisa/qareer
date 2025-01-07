import type { Config } from 'tailwindcss';

export default {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#1e90ff', // Dark text for light theme
          dark: '#1e90ff', // Light text for dark theme
        },
        n: {
          light: '#f5f5f5', // Background for light theme
          dark: '#444', // Background for dark theme
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
