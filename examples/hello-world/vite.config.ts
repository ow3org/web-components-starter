/// <reference types="vitest" />
import { resolve } from 'path'
import type { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
const config: UserConfig = {
  resolve: {
    alias: {
      '~': resolve(__dirname, '/src'),
    },
  },

  plugins: [
    Vue({
      reactivityTransform: true, // https://vuejs.org/guide/extras/reactivity-transform.html
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: tag => tag.includes('-'),
        },
      },
    }),
  ],
}

export default config
