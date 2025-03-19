// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/feedback': 'http://srv759235.hstgr.cloud'
    }
  }
})