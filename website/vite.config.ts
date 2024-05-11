import { vitePlugin as remix } from '@remix-run/dev'
import { installGlobals } from '@remix-run/node'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const building = process.env.NODE_ENV === 'production'

export default defineConfig({
    define: {
        // global: 'typeof global !== "undefined" ? global : globalThis',
    },
    ssr: {
        noExternal: building ? true : undefined,
    },
    legacy: {
        proxySsrExternalModules: true,
    },
    plugins: [remix({ appDirectory: 'src' }), tsconfigPaths()],
})
