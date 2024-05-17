import { useLoaderData } from '@remix-run/react'
import { useEffect } from 'react'
import { loader } from '~/routes/_auth.world.$worldId'

let started = false

export function MineCord() {
    const data = useLoaderData<typeof loader>()
    useEffect(() => {
        let destroy = () => {}
        Promise.resolve().then(async () => {
            const { start } = await import('~/lib/minecord')
            if (!started) {
                started = true
                destroy = await start(data)
            }
        })
        return () => {
            destroy()
        }
    }, [])
    return (
        <div id='app'>
            <canvas id='canvas'></canvas>
            <div id='crosshair' />
        </div>
    )
}
