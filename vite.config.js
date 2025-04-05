import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/week6_scratch/',
  build: {
    outDir: 'dist'
  },
  plugins: [react()]
})
