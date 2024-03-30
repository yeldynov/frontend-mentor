/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                outfit: ['outfit', 'sans-serif'],
                youngserif: ['young-serif', 'sans-serif'],
                inter: ['inter', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
