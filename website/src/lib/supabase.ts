import { createBrowserClient } from '@supabase/ssr'
import type { Session, SupabaseClient } from '@supabase/supabase-js'
import { useEffect, useState } from 'react'

import { useRevalidator } from '@remix-run/react'
import { env } from '~/lib/env'

export type SupabaseOutletContext = {
    supabase: SupabaseClient
}

export const useSupabase = ({ session }) => {
    // Singleton
    const [supabase] = useState(() =>
        createBrowserClient<any>(
            env.PUBLIC_SUPABASE_URL!,
            env.PUBLIC_SUPABASE_ANON_KEY!,
        ),
    )
    const revalidator = useRevalidator()

    const serverAccessToken = session?.access_token

    useEffect(() => {
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((event, session) => {
            console.log('Auth event happened: ', event, session)

            if (session?.access_token !== serverAccessToken) {
                // call loaders
                revalidator.revalidate()
            }
        })

        return () => {
            subscription.unsubscribe()
        }
    }, [supabase, serverAccessToken, revalidator])

    return { supabase }
}
