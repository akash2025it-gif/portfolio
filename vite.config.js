import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  // Keep every generated deployment file at the site root.  Relative URLs make
  // the build work both from a custom domain and from a GitHub project page.
  base: './',
  plugins: [react(), tailwindcss()],
  build: {
    assetsDir: '.',
    rollupOptions: {
      output: {
        entryFileNames: '[name]-[hash].js',
        chunkFileNames: '[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]',
      },
    },
  },
})
