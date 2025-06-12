/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      fontSize: { // Font boyutlarını sabitle
        base: '1rem',   // 16px (varsayılan)
        lg: '1.125rem', // 18px
        xl: '1.25rem',  // 20px
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        bebas: ['"Bebas Neue"', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
    },
  },
  corePlugins: {
    preflight: false, // Tarayıcı resetlerini KAPAT (önemli!)
  },
  plugins: [],
}