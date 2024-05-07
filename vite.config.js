import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    open: true
    },
  plugins: [react()],
  test: {
    globals: true,
    css: true,
    environment: 'jsdom',
    setupFiles: ['../JW_frontend/src/test/setup.js'],
  },
})


