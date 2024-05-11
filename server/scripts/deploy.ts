import { shell, deployFly } from '@xmorse/deployment-utils'
import path from 'path'

async function main() {
    await Promise.all([
        shell(`cargo build --release --target=x86_64-unknown-linux-gnu`, {
            env: {
                CARGO_TARGET_X86_64_UNKNOWN_LINUX_GNU_LINKER:
                    'x86_64-linux-gnu-gcc',
            },
        }),
    ])
    await deployFly({
        appName: 'minecord-rust-server',
        port: 4000,
        dockerfile: 'Dockerfile',
        minInstances: 1,
        regions: ['iad'],
    })
}

main()
