import { useEffect } from 'react'

let started = false

export function MineCord() {
    useEffect(() => {
        let destroy = () => {}
        Promise.resolve().then(async () => {
            const { start } = await import('~/minecord')
            if (!started) {
                started = true
                destroy = await start()
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
