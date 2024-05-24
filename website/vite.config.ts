import { vitePlugin as remix } from '@remix-run/dev'
import { nodePolyfills } from 'vite-plugin-node-polyfills'

import { installGlobals } from '@remix-run/node'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { glslify } from 'vite-plugin-glslify'

const building = process.env.NODE_ENV === 'production'

export default defineConfig(({ mode, command, isSsrBuild }) => {
    const define = {} as any

    define['global'] = 'globalThis'
    // define['process'] = '{env: {}}'
    Object.assign(
        define,
        Object.fromEntries(
            Object.entries(process.env)
                .filter(
                    ([key, v]) =>
                        key.includes('PUBLIC_') && typeof v === 'string',
                )
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
            external: building ? ['@prisma/client'] : undefined,
        },
        legacy: {
            proxySsrExternalModules: true,
        },
        assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.hdr', '**/*.fbx'],
        plugins: [glslify(), remix({ appDirectory: 'src' }), tsconfigPaths({})],
        test: {
            alias: [
                {
                    find: /^@voxelize\/core/,
                    replacement: '@voxelize/core/dist/index.js',
                },
            ],

            // setupFiles: ['@vitest/web-worker'],

            exclude: [
                '**/dist/**',
                '**/esm/**',
                '**/node_modules/**',
                '**/e2e/**',
            ],
        },
    }
})
