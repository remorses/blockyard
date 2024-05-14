// vite.config.ts
import { defineConfig } from 'vite'

export default defineConfig({
    esbuild: {
        jsx: 'transform',
    },
    test: {
        alias: [{ find: /^@voxelize\/core/, replacement: '@voxelize/core/dist/index.js' }],

        exclude: ['**/dist/**', '**/esm/**', '**/node_modules/**', '**/e2e/**'],
    },
})
