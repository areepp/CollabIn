/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: '#09090b',
        text: '#e4e4e7',
        secondary: '#129092',
      },
    },
    fontFamily: {
      sans: ['Saira Condensed', 'system-ui', 'sans-serif'],
      mono: ['Roboto Mono Variable', 'ui-monospace'],
    },
  },
  plugins: [],
};
