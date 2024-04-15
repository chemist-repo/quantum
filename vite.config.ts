/// <reference types="histoire" />

import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'

const LIB_NAME = 'quantum'

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      fileName: LIB_NAME,
      name: LIB_NAME,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        assetFileNames: (asset_info) => asset_info.name == 'style.css' ? `${ LIB_NAME }.css` : asset_info.name,
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    vue(),
    !process.env.HISTOIRE ? dts({
      rollupTypes: true,
    }) : null,
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '~': resolve(__dirname, './src'),
      '~~': resolve(__dirname, './src'),
    },
  },
})
