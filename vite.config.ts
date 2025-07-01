import { defineConfig } from 'vite';
import { name as packageName } from './package.json';
import vue from '@vitejs/plugin-vue';

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
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
