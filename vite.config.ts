import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@widgets': path.resolve(__dirname, 'src/widgets'), // Задайте путь к вашей папке widgets
    },
  },
});
