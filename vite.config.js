import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),  // react ПЕРВЫМ
    tailwindcss(),
  ],
  base: '/My-landing-/',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: false,
  }
})