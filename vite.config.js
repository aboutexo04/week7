import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/week5_scratch/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      external: ['/week5_scratch/assets/index-ef820beb.js']
    }
  },
  plugins: [react()]
})
