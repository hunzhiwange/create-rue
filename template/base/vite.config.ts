import { defineConfig } from 'vite-plus'
import VitePluginRue from '@rue-js/vite-plugin-rue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ command }) => ({
  resolve: {
    conditions: ['import', 'module', 'browser', 'default'],
  },
  plugins: [
    tailwindcss() as any,
    VitePluginRue({
      debug: command === 'serve',
    }),
  ],
  server: {
    port: 5173,
    strictPort: false,
  },
}))
