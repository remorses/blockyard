import {
    shell,
    getDopplerEnv,
    getCurrentStage,
    deployFly,
} from '@xmorse/deployment-utils'
import path from 'path'

async function main() {
    const stage = getCurrentStage()
    const env = await getDopplerEnv({ stage: 'production', project: 'website' })
    // await Promise.all([
    //     shell(`pnpm build`, {
    //         env,
    //     }),
    // ])
    await deployFly({
        appName: 'minecord-website',
        port: 3000,
        buildRemotely: true,
        dockerfile: 'Dockerfile',
        minInstances: 1,
        forceHttps: false,
        maxInstances: 1,
        healthCheckPath: '/api/health',
        memorySize: '512mb',
        env: {
            ...env,
            NODE_ENV: 'production',
            PORT: '3000',
        },
        regions: ['iad'],
    })
}

main()
