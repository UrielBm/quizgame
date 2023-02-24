import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({  
      injectRegister: 'auto',
      strategies: 'injectManifest',
      injectManifest: {
        injectionPoint: undefined
      },
      filename: 'sw.js',  
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],  
      // devOptions: {
      //   enabled: false
      // },
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
