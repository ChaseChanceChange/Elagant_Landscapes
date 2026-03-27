import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    base: '/Elagant_Landscapes/',   // ← Required for GitHub Pages

    plugins: [react(), tailwindcss()],

    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },

    // You can keep server settings or remove them — they are ignored during build
    server: {
      host: true,
      allowedHosts: true,
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
    // Optional: for preview mode (npm run preview)
    preview: {
      host: true,
      port: 3000,
    },
  };
});
