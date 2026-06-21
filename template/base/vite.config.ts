import { defineConfig } from 'vite'
import VitePluginRue from '@rue-js/vite-plugin-rue'
import wasm from 'vite-plugin-wasm'
import tailwindcss from '@tailwindcss/vite'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)
const runtimeDomEntry = require.resolve('@rue-js/runtime/src/dom.ts')

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@rue-js/runtime/dom',
        replacement: runtimeDomEntry,
      },
    ],
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
