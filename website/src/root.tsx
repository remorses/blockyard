import { LoaderFunctionArgs } from '@remix-run/node'
import '@voxelize/core/dist/styles.css'

import './global.css'
import {
    Links,
    Meta,
    Outlet,
    Scripts,
    ScrollRestoration,
    json,
    useLoaderData,
} from '@remix-run/react'
import { useSupabase } from '~/lib/supabase'
import { NextUIProvider } from '@nextui-org/react'
import {
    getSupabaseWithSessionHeaders,
    getSupabaseEnv,
} from '~/lib/supabase.server'

export const loader = async ({ request }: LoaderFunctionArgs) => {
    const { session, headers } = await getSupabaseWithSessionHeaders({
        request,
    })

    return json(
        {
            // env: getSupabaseEnv(),
            session,
        },
        { headers },
    )
}

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <head>
                <meta charSet='utf-8' />
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1'
                />
                <Meta />
                <Links />
            </head>
            <body>
                <NextUIProvider className='h-full'>{children}</NextUIProvider>
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    )
}

export default function App() {
    const { session } = useLoaderData<typeof loader>()

    const { supabase } = useSupabase({ session })
    return <Outlet context={{ supabase }} />
}
