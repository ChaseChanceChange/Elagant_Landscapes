import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    // Remove or comment out base when using dev/tunnel or production server
    // base: '/Elagant_Landscapes/',   // ← Only uncomment for GitHub Pages

    plugins: [react(), tailwindcss()],

    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    server: {
      host: true,                    // Allow access from network / tunnel
      allowedHosts: true,            // ← Key fix: allow any host (including trycloudflare.com)
      
      // Keep your existing HMR line if you want
      hmr: process.env.DISABLE_HMR !== 'true',
    },

    // Optional: for preview mode (npm run preview)
    preview: {
      host: true,
      port: 3000,
    },
  };
});