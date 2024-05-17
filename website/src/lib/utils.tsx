import { env } from '~/lib/env'

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export function getWorldUrl({ worldId }) {
    return new URL(`/world/${worldId}`, env.PUBLIC_URL).toString()
}
