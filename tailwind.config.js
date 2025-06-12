/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Roboto', 'sans-serif'], // Varsayılan font
      poppins: ['Poppins', 'sans-serif'],
      lora: ['Lora', 'serif'],
    },
    fontSize: {
      base: '1rem',   // 16px (zorunlu sabit)
      sm: '0.875rem', // 14px
      lg: '1.125rem', // 18px
    },
  },
 
  plugins: [],
}