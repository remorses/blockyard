import { useSyncExternalStore } from 'react'
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

    // if (!session) {
    //     return redirect('/login', { headers })
    // }

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
        return redirect('/world', { headers })
    }
    await serverApi.upsertWorld({ worldId })

    return json(
        {
            world,
            userId,
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
