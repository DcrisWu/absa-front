import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
    proxy: {
      '^/absa/': {
        target: 'http://110.64.90.217:5000',
        changeOrigin: true,
        headers: {
          // 解决 post 请求返回 403 的问题
          host: 'http://110.64.90.217:5000',
          origin: 'http://110.64.90.217:5000'
        }
      }
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
