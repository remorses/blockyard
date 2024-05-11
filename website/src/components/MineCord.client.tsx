import { useEffect } from 'react'

let started = false

export function MineCord() {
    useEffect(() => {
        Promise.resolve().then(async () => {
            const { start } = await import('~/minecord')
            if (!started) {
                start()
                started = true
            }
        })
    }, [])
    return (
        <div id='app'>
            <canvas id='canvas'></canvas>
            <div id='crosshair' />
        </div>
    )
}
