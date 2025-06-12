module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",     // src klasörü ve altındaki tüm .jsx dosyaları
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        lora: ['Lora', 'serif'],
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // özel css kullanıyorsan true yerine false yap
  },
}
