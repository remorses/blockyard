import type { LoaderFunctionArgs } from '@remix-run/node'
import { Button } from 'react95'

import { json, redirect } from '@remix-run/node'
import { useOutletContext } from '@remix-run/react'
import toast from 'react-hot-toast'
import { Windows95Provider } from '~/components/95'
import { env } from '~/lib/env'
import { SupabaseOutletContext } from '~/lib/supabase'
import { getSupabaseWithSessionHeaders } from '~/lib/supabase.server'

export let loader = async ({ request }: LoaderFunctionArgs) => {
    const { headers, session } = await getSupabaseWithSessionHeaders({
        request,
    })

    if (session) {
        return redirect('/world', { headers })
    }

    return json({ success: true }, { headers })
}

export default function Login() {
    return (
        <div className=''>
            <LoginWithGoogle />
        </div>
    )
}

export function LoginWithGoogle() {
    const { supabase } = useOutletContext<SupabaseOutletContext>()

    const handleSignIn = async () => {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'google',

            options: {
                redirectTo: `${env.PUBLIC_URL}/api/auth/callback`,
                
            },
        })
        
        if (error) {
            console.log('Sign in ', error)
            toast.error(error.message)
        }
    }

    return (
        <Windows95Provider>
            <div className='flex gap-12 pt-24 flex-col items-center justify-center'>
                <div className='text-2xl'>Welcome To BlockYard</div>
                <Button size='lg' className='' onClick={handleSignIn}>
                    <GoogleIcon className='w-6 mr-2' />
                    Login with Google
                </Button>
            </div>
        </Windows95Provider>
    )
}

export function GoogleIcon(props) {
    return (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 1024 1024'
            {...props}
        >
            <path
                fill='#888888'
                d='M881 442.4H519.7v148.5h206.4c-8.9 48-35.9 88.6-76.6 115.8c-34.4 23-78.3 36.6-129.9 36.6c-99.9 0-184.4-67.5-214.6-158.2c-7.6-23-12-47.6-12-72.9s4.4-49.9 12-72.9c30.3-90.6 114.8-158.1 214.7-158.1c56.3 0 106.8 19.4 146.6 57.4l110-110.1c-66.5-62-153.2-100-256.6-100c-149.9 0-279.6 86-342.7 211.4c-26 51.8-40.8 110.4-40.8 172.4S151 632.8 177 684.6C240.1 810 369.8 896 519.7 896c103.6 0 190.4-34.4 253.8-93c72.5-66.8 114.4-165.2 114.4-282.1c0-27.2-2.4-53.3-6.9-78.5'
            ></path>
        </svg>
    )
}
