import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/week5_scratch_1/',
  build: {
    outDir: 'dist'
  },
  plugins: [react()]
})
