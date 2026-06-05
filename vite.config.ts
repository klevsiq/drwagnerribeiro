// e:\ClaudeCode\_FreelanceTemplate\vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Para GitHub Pages: altere base para '/nome-do-repo/' antes do deploy
export default defineConfig({
  plugins: [react()],
  base: '/drwagnerribeiro/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})
