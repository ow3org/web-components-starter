/// <reference types="vitest" />
import { resolve } from 'path';
import { UserConfig } from 'vite';
import Vue from '@vitejs/plugin-vue';
import EslintPlugin from 'vite-plugin-eslint';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import pkg from './package.json';

process.env.VITE_APP_VERSION = pkg.version;
if (process.env.NODE_ENV === 'production') {
  process.env.VITE_APP_BUILD_EPOCH = new Date().getTime().toString();
}

// https://vitejs.dev/config/
const config: UserConfig = {
  plugins: [
    Vue({
      script: {
        refSugar: true // https://github.com/vuejs/rfcs/discussions/369
      },
      template: {
        compilerOptions: {
          // treat all tags with a dash as custom elements
          isCustomElement: (tag) => tag.includes('-')
        }
      }
    }),
    EslintPlugin(),
    AutoImport({
      imports: [
        'vue',
        'pinia',
        {
          '@/store': ['useStore']
        }
      ],
      dts: 'src/auto-imports.d.ts',
      eslintrc: {
        enabled: true
      }
    }),
    Components({
      dirs: ['src/components'],
      extensions: ['vue']
    })
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, '/src')
    }
  },
  test: {
    include: ['tests/unit/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}']
  }
};

export default config;
