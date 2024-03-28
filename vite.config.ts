import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
 build: {
    outDir: 'dist',
    assetsInlineLimit: 0,
    chunkSizeWarningLimit: 4500,
    minify: 'terser',
    manifest: true,
    rollupOptions: {
      output: {
        entryFileNames: '[name].[hash].js', // Esto generará nombres únicos para los archivos de entrada
      },
    },
  },
  plugins: [react(),
    VitePWA({
      registerType: "autoUpdate",
      devOptions: {
        enabled: true,
        type: "module",
        navigateFallback: "index.html",
      }, 
      strategies: 'injectManifest',
      srcDir: "src",
      filename: 'sw.js',  
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg','logo.svg'],  
      injectManifest: {
        globPatterns: ['**/*.{js,css,html,png,jpg,json,svg}'],
        maximumFileSizeToCacheInBytes:10 * 1024 * 1024,
      },
      manifest: {  
        name: 'Encuestados',  
        short_name: 'QuizGame',  
        description: 'Encuestados, atrevete a probar tus conocimientos by Uriel Benítez Medina',  
        theme_color: '#ffffff',  
        start_url: '/',  
        icons: [  
          {  
            src: 'pwa-192x192.png',  
            sizes: '192x192',  
            type: 'image/png',  
          },  
          {  
          src: 'pwa-512x512.png',  
            sizes: '512x512',  
            type: 'image/png',  
          },  
          {  
          src: 'pwa-512x512.png',  
            sizes: '512x512',  
            type: 'image/png',  
            purpose: 'any maskable',  
          },  
        ],  
      },  
    }),  
  ],
})
