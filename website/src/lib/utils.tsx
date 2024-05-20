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

function toHexadecimal(str) {
    let result = ''
    for (let i = 0; i < str.length; i++) {
        result += str.charCodeAt(i).toString(16)
    }
    return result
}

export function cuidToUUID(str) {
    let hash = toHexadecimal(str)
    // pad hash to be 32 characters long
    while (hash.length < 32) {
        hash += '0'
    }
    return `${hash.substring(0, 8)}-${hash.substring(8, 12)}-4${hash.substring(13, 16)}-a${hash.substring(17, 20)}-${hash.substring(20, 32)}`
}
