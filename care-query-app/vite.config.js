import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    base: "./",
    outDir: 'dist',
    manifest: true,
    emptyOutDir: true,
  }
})
