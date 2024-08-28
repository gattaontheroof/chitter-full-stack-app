import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
  test: {
    environment: "jsdom",
    setupFiles: ["./test/config/setup.js"],
    testMatch: ["./test/**/*.test.jsx$?"],
    globals: true,
},
})
