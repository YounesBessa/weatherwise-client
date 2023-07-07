/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs : '320px',
        sm : '375px',
        sml: '500px',
        md : '667px',
       },
       colors: {
        bgBlack : '#181b29',
        bgWhite : '#e6f1fc',
        lightText : '#e6f1fc',
        blackText : '#181b29',

       },
    },
  },
  plugins: [],
}
