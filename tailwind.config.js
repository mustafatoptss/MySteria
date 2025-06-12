/** @type {import('tailwindcss').Config} */
export default {
  corePlugins: {
    preflight: true // ✅ AÇIK tutun (modern projelerde önerilen)
  },
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