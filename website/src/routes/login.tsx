import { Button } from '@nextui-org/react'
import type { LoaderFunctionArgs } from '@remix-run/node'

import { json, redirect } from '@remix-run/node'
import { useOutletContext } from '@remix-run/react'
import { Github } from 'lucide-react'
import toast from 'react-hot-toast'
import { env } from '~/lib/env'
import { SupabaseOutletContext } from '~/lib/supabase'
import { getSupabaseWithSessionHeaders } from '~/lib/supabase.server'

export let loader = async ({ request }: LoaderFunctionArgs) => {
    const { headers, session } = await getSupabaseWithSessionHeaders({
        request,
    })

    if (session) {
        return redirect('/gitposts', { headers })
    }

    return json({ success: true }, { headers })
}

export default function Login() {
    return <div className=''></div>
}

export function LoginWithGoogle() {
    const { supabase } = useOutletContext<SupabaseOutletContext>()

    const handleSignIn = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',
            options: {
                redirectTo: `${env.PUBLIC_URL}/auth/callback`,
            },
        })

        if (error) {
            console.log('Sign in ', error)
            toast.error(error.message)
        }
    }

    return (
        <div>
            <Button
                startContent={<Github className=' w-4' />}
                className=''
                onClick={handleSignIn}
            >
                Login with Google
            </Button>
        </div>
    )
}
