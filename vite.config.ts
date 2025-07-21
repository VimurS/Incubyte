// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })


/// <reference types="vitest/globals" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import type { UserConfigExport } from 'vite'

// https://vitejs.dev/config/
const config: UserConfigExport = {
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
  },
}

export default config
