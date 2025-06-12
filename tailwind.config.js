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
    xs: '0.7rem',
    sm: '0.8rem',
    base: '0.9rem',
    lg: '1rem',
    xl: '1.2rem',
    '2xl': '1.4rem',
    '3xl': '1.6rem',
    '4xl': '1.8rem',
    '5xl': '2rem',
    '6xl': '2.2rem',
    '7xl': '2.5rem',
    '8xl': '3rem',
    '9xl': '3.5rem',
  }
    },
  },
  plugins: [],
 
}
