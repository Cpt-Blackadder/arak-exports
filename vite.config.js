import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/arak-exports/',
  build: {
    outDir: '.', // Output to root instead of dist
    assetsDir: 'assets',
  },
  optimizeDeps: {
    include: ['jspdf', 'jspdf-autotable', 'html2canvas'],
  },
});