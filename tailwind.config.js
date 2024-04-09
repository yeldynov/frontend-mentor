/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/flowbite-react/lib/**/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['outfit', 'sans-serif'],
        youngserif: ['young-serif', 'sans-serif'],
        inter: ['inter', 'sans-serif'],
        worksans: ['work-sans', 'sans-serif'],
        overpass: ['Overpass', 'sans-serif'],
        ubuntu: ['Ubuntu', 'sans-serif'],
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
