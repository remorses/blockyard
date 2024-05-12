import { vitePlugin as remix } from '@remix-run/dev'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

import { installGlobals } from '@remix-run/node'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

const building = process.env.NODE_ENV === 'production'

export default defineConfig(({ mode, command, isSsrBuild }) => {
    const define = {} as any

    define['global'] = 'window'
    // define['process'] = '{env: {}}'
    Object.assign(
        define,
        Object.fromEntries(
            Object.entries(process.env)
                .filter(([key]) => key.includes('PUBLIC_'))
                .map(([key, value]) => [
                    `process.env.${key}`,
                    JSON.stringify(value),
                ]),
        ),
    )

    return {
        define,

        ssr: {
            noExternal: building ? true : undefined,
        },
        legacy: {
            proxySsrExternalModules: true,
        },
        plugins: [remix({ appDirectory: 'src' }), tsconfigPaths()],
    }
})
