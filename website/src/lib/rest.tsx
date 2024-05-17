import { env } from '~/lib/env'

export class ServerRest {
    serverBase = env.PUBLIC_SERVER_URL

    async upsertWorld({ worldId }) {
        return await this.fetch('/api/upsert-world', {
            method: 'POST',
            body: JSON.stringify({ world_id: worldId }),
        })
    }

    async fetch<T>(url: string, options: RequestInit): Promise<T> {
        let u = new URL(url, this.serverBase)
        u.searchParams.set('secret', 'xx')
        // u.searchParams.set('apikey', 'xx')
        const response = await fetch(u, {
            method: 'POST',
            ...options,
            headers: {
                'Content-Type': 'application/json',
                ...options.headers,
            },
        })
        if (!response.ok) {
            throw new Error(response.status + ': ' + (await response.text()))
        }
        return response.json()
    }
}

export const serverApi = new ServerRest()
