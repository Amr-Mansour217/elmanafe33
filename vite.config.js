// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/elmanafe33/' // 👈 تأكد من كتابة اسم المستودع بشكل صحيح
})