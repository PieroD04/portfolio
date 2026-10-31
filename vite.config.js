import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // precompile the locale JSON at build time so the runtime message compiler isn't shipped
    VueI18nPlugin({
      include: fileURLToPath(new URL('./src/locale/**', import.meta.url)),
      dropMessageCompiler: true
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
