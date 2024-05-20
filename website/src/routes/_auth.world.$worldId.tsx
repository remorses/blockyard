import { useSyncExternalStore } from 'react'
import { AccessToken } from 'livekit-server-sdk'

import {
    LoaderFunctionArgs,
    json,
    redirect,
    type MetaFunction,
} from '@remix-run/node'
import { useEffect } from 'react'
import { MineCord } from '~/components/MineCord.client'
import { getSupabaseWithSessionHeaders } from '~/lib/supabase.server'
import { prisma } from 'db/prisma'
import { serverApi } from '~/lib/rest'
import { env } from '~/lib/env'

export const meta: MetaFunction = () => {
    return [
        { title: 'MineCord' },
        { name: 'description', content: 'Minecraft + Discord + Zoom' },
    ]
}

const sub = () => {
    return () => {}
}

export let loader = async ({ request, params }: LoaderFunctionArgs) => {
    const { worldId: worldId } = params
    console.log('Incoming params ', params)
    const { supabase, userId, headers, session } =
        await getSupabaseWithSessionHeaders({
            request,
        })

    const name = session?.user?.user_metadata?.name || 'Guest'

    if (!session) {
        const u = new URL('/login', request.url)
        u.searchParams.set('next', request.url)

        return redirect(u.toString(), { headers })
    }

    if (!worldId) {
        return redirect('/404', { headers })
    }

    const [world] = await Promise.all([
        prisma.world.findFirst({
            where: {
                id: worldId,
            },
        }),
    ])
    if (!world) {
        console.log('World not found')
        return redirect('/world', { headers })
    }

    async function getToken() {
        const at = new AccessToken(
            env.LIVEKIT_API_KEY,
            env.LIVEKIT_API_SECRET,
            {
                identity: userId,
                name,
                // metadata: {}
            },
        )
        at.addGrant({
            roomJoin: true,
            room: worldId,
            canPublish: true,
            canSubscribe: true,
            // canPublishSources: true,
        })

        const token = await at.toJwt()
        return token
    }

    const [livekitToken] = await Promise.all([
        getToken(),
        serverApi.upsertWorld({ worldId }),
    ])

    return json(
        {
            world,
            userId,
            livekitToken,
            // world,
            //
        },
        { headers },
    )
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
