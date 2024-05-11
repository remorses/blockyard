import { defineConfig } from 'vite'

export default defineConfig({
    define: {
        global: 'window',
        process: '{nextTick: setTimeout}',
    },
    resolve: {
        alias: {
            // ...
            'simple-peer': 'simple-peer/simplepeer.min.js',
        },
    },
})
