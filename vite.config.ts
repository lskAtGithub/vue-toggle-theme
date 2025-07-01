import { defineConfig } from 'vite';
import { name as packageName } from './package.json';
import vue from '@vitejs/plugin-vue';
// use vite-plugin-css-injected-by-js 解决打包之后没有js引入css， 导致使用时还需要用户去import的问题
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      name: packageName,
      entry: './src/ToggleTheme/index.vue',
      formats: ['es', 'cjs'],
      fileName: (format) => `${packageName}.${format}.js`
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
});
