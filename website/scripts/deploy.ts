import {
    shell,
    getDopplerEnv,
    getCurrentStage,
    deployFly,
} from '@xmorse/deployment-utils'
import path from 'path'

async function main() {
    const stage = getCurrentStage()
    const env = await getDopplerEnv({ stage, project: 'website' })
    await Promise.all([
        shell(`pnpm build`, {
            env,
        }),
    ])
    await deployFly({
        appName: 'minecord-website',
        port: 3000,
        dockerfile: 'Dockerfile',
        minInstances: 1,
        maxInstances: 1,
        healthCheckPath: '/health',
        memorySize: '512mb',
        regions: ['iad'],
    })
}

main()
