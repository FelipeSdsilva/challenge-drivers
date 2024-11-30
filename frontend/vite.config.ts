import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  preview: {
    port: 81,
    strictPort: true,
  },
  server: {
    host: true,
    strictPort: true,
    port: 81,
    origin: "http://0.0.0.0:81",
  }
})
