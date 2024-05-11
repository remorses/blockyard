import '../style.css'
import type { MetaFunction } from '@remix-run/node'
import { useEffect } from 'react'

export const meta: MetaFunction = () => {
    return [
        { title: 'New Remix App' },
        { name: 'description', content: 'Welcome to Remix!' },
    ]
}
let started = false

export default function Index() {
    useEffect(() => {
        Promise.resolve().then(async () => {
            const { start } = await import('../minecord')
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
