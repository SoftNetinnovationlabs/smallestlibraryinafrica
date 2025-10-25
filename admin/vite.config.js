import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,          // allow LAN access
    port: 5173,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
    watch: {
      usePolling: true,
    },
  },
  build: {
    outDir: 'dist',
  },
  base: './',  // <-- relative paths so IP/domain works
})
