import { defineConfig } from 'vite'
import VitePluginRue from '@rue-js/vite-plugin-rue'
import wasm from 'vite-plugin-wasm'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  resolve: {
    conditions: ['import', 'module', 'browser', 'default'],
  },
  plugins: [
    wasm(),
    tailwindcss() as any,
    VitePluginRue({
      include: ['/app/'],
      debug: true,
    }),
  ],
})
