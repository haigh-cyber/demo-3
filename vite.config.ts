import { defineConfig } from 'vite'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: 'index.html',
        about: 'about.html',
        resume: 'resume.html',
        services: 'services.html',
        contact: 'contact.html'
      }
    }
  },
  publicDir: 'assets'
})
