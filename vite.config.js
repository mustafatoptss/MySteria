import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss() ,// React için
  ],
  server: {
    host: '0.0.0.0', // Telefonda test için gereklidir
    port: 5175,       // Dilersen başka port da seçebilirsin
  }
})
