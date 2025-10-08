import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        resume: resolve(__dirname, 'resume.html'),
        services: resolve(__dirname, 'services.html'),
        contact: resolve(__dirname, 'contact.html')
      }
    },
    copyPublicDir: true
  },
  publicDir: 'public'
})
