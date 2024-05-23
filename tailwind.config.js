/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'h1': '2.25rem', // 36px
        'h2': '1.875rem', // 30px
        'h3': '8rem', // 24px
        'h4': '1.25rem', // 20px
        'h5': '1.125rem', // 18px
        'h6': '1rem', // 16px
      },
      fontWeight: {
        'h1': '700', // font-bold
        'h2': '700',
        'h3': '700',
        'h4': '700',
        'h5': '700',
        'h6': '700',
      }
    },
  },
  plugins: [],
}
