import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3001,
    allowedHosts: ['basta-group.com'],
  },
  preview: {
    port: 3001,
  },
  build: {
    cssCodeSplit: false,
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'assets/index.css';
          return 'assets/[name].[hash][extname]';
        }
      }
    }
  },
  css: {
    postcss: './postcss.config.js'
  }
})
