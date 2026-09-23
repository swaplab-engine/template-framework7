import path from 'path';
import { svelte } from '@sveltejs/vite-plugin-svelte';

const SRC_DIR = path.resolve(import.meta.dirname, './src');
const PUBLIC_DIR = path.resolve(import.meta.dirname, './public');
const BUILD_DIR = path.resolve(import.meta.dirname, './docs');

export default {
  plugins: [
    svelte(),
  ],
  root: SRC_DIR,
  base: '',
  publicDir: PUBLIC_DIR,
  css: {
    lightningcss: {
      errorRecovery: true
    }
  },
  build: {
    outDir: BUILD_DIR,
    assetsInlineLimit: 0,
    emptyOutDir: true,
    chunkSizeWarningLimit: 2000,
    rollupOptions: {
      treeshake: false,
    },
  },
  resolve: {
    alias: {
      '@': SRC_DIR,
    },
  },
  server: {
    host: true,
  },
};