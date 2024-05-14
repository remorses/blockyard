import { test } from 'vitest'
import * as VOXELIZE from '@voxelize/core'
import { env } from '~/lib/env'
import { Worker } from 'worker_threads'

test('events', async () => {
    const network = new VOXELIZE.Network()
    await network.connect(env.PUBLIC_SERVER_URL!)
    const res = await network.action('test', 'hello')
    console.log(res)
})
