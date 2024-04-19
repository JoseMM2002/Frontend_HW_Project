import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: 'frontend.hw.project',
    port: 8080,
    https: {
      cert: 'frontend.hw.project.pem',
      key: 'frontend.hw.project-key.pem',
    },
  },
  plugins: [react()],
})
