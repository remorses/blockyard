import { shell, deployFly } from '@xmorse/deployment-utils'
import path from 'path'

async function main() {
    process.chdir('..')
    await deployFly({
        appName: 'minecord-rust-server',
        port: 4000,
        dockerfile: 'server/Dockerfile',
        minInstances: 0,
        maxInstances: 1,
        buildRemotely: true,
        memorySize: '2gb',
        machineType: 'shared-cpu-2x',
        regions: ['iad'],
    })
}

main()
