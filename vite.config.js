import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@theme-toggles/react/css/classic.css'],
  },
  build: {
    rollupOptions: {
      external: ['@theme-toggles/react/css/classic.css'],
    }
  }
})
