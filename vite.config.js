import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(), // for tailwindcss version 4 
  ],
  // base: '/lakshan-portfolio/', // repo name here only if you use git , not for vercel
})
