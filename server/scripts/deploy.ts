import { shell, deployFly } from '@xmorse/deployment-utils'
import path from 'path'

async function main() {
    process.chdir('..')
    await deployFly({
        appName: 'minecord-rust-server',
        port: 4000,
        dockerfile: 'server/Dockerfile',
        minInstances: 1,
        maxInstances: 1,
        memorySize: '1gb',
        regions: ['iad'],
    })
}

main()
