import { shell, deployFly } from '@xmorse/deployment-utils'
import path from 'path'

async function main() {
    const serverExe = path.resolve('./server_exe')
    await Promise.all([shell(`pnpm build`, {})])
    await deployFly({
        appName: 'minecord-website',
        port: 3000,
        dockerfile: 'Dockerfile',
        regions: ['iad'],
    })
}

main()
