import { env } from '~/lib/env'

export function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export function getWorldUrl({ worldId }) {
    return new URL(`/world/${worldId}`, env.PUBLIC_URL).toString()
}

export function withResolvers() {
    let resolve, reject
    const promise = new Promise((res, rej) => {
        resolve = res
        reject = rej
    })
    return { promise, resolve, reject }
}
