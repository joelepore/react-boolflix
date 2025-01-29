import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  define: {
    "process.env": process.env,
    VITE_API_AUTH_KEY: process.env.VITE_API_AUTH_KEY,
    VITE_BASE_API_URL: process.env.VITE_BASE_API_URL,
    VITE_BASE_IMG_URL: process.env.VITE_BASE_IMG_URL,
  },
})
