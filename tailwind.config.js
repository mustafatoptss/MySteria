module.exports = {
  content: [
    "./index.html",
      "./pages/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",      // src klasörü ve altındaki tüm .jsx dosyaları
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
        fontSize: {
      xs: '0.6rem',
      sm: '0.75rem',
      base: '0.85rem', // ← tüm ".text-base" sınıfı artık daha küçük
      lg: '1rem',
      xl: '1.125rem',
      '2xl': '1.25rem',
      // diğerleri
    },
    },
  },
  plugins: [],
 
}
