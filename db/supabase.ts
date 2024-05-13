import { createClient } from '@supabase/supabase-js'
import { Database } from './supabase.types'

export function createSupabaseAdmin({
    cacheTags = undefined as string[] | undefined,
    revalidate = undefined as number | undefined,
} = {}) {
    return createClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.SUPABASE_SERVICE_ROLE_KEY!,
        {
            auth: {
                persistSession: false,
                autoRefreshToken: false,
                detectSessionInUrl: false,
            }, //
            global: {
                fetch(input, init) {
                    if (!cacheTags?.length && !revalidate) {
                        return fetch(input, {
                            ...init,
                            next: {
                                revalidate: 0,
                            },
                        })
                    }
                    return fetch(input, {
                        ...init,
                        next: {
                            revalidate,
                            tags: cacheTags,
                        },
                        cache: 'force-cache',
                    })
                },
            },
        },
    )
}

export function createSupabaseAnon() {
    return createClient<Database>(
        process.env.NEXT_PUBLIC_SUPABASE_URL!,
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
        {
            auth: {
                persistSession: false,
                autoRefreshToken: false,
                detectSessionInUrl: false,
            }, //
        },
    )
}
