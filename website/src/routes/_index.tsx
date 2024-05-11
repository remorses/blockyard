import '../style.css'
import { useSyncExternalStore } from 'react'
import type { MetaFunction } from '@remix-run/node'
import { useEffect } from 'react'
import { MineCord } from '~/components/MineCord.client'

export const meta: MetaFunction = () => {
    return [
        { title: 'New Remix App' },
        { name: 'description', content: 'Welcome to Remix!' },
    ]
}

const sub = () => {
    return () => {}
}
export default function Page() {
    const isClient = useSyncExternalStore(
        sub,
        () => true,
        () => false,
    )
    if (isClient) {
        return <MineCord />
    } else {
        return null
    }
}
