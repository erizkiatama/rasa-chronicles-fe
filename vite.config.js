import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    plugins: [
      vue(),
    ],
    server: {
      port: Number(env.PORT),
      proxy: {
        '/api/v1': {
          target: env.API_URL,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api\/v1/, '')
        }
      }
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    }
  }
})
