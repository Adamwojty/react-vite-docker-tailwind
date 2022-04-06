/// <reference types="vitest" />
/// <reference types="vite/client" />

import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  test: {
    globals: true,
    environment: 'happy-dom',

    include: ['./src/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    watchIgnore: [
      '.*\\/node_modules\\/.*',
      '.*\\/build\\/.*',
      '.*\\/postgres-data\\/.*',
    ],
  },
})
