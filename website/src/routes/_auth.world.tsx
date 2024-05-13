
import * as z from 'zod'
import { useSyncExternalStore } from 'react'
import {
    ActionFunctionArgs,
    LoaderFunctionArgs,
    json,
    redirect,
    type MetaFunction,
} from '@remix-run/node'
import { useEffect } from 'react'
import { MineCord } from '~/components/MineCord.client'
import { getSupabaseWithSessionHeaders } from '~/lib/supabase.server'
import { Form, useActionData, useLoaderData } from '@remix-run/react'
import { Button } from '@nextui-org/react'
import {
    getValidatedFormData,
    useRemixForm,
    validateFormData,
} from 'remix-hook-form'
import { Resolver, zodResolver } from '@hookform/resolvers/zod'

export const meta: MetaFunction = () => {
    return [
        { title: 'MineCord' },
        { name: 'description', content: 'Minecraft + Discord + Zoom' },
    ]
}

const schema = z.object({
    option: z.enum(['create', 'join']),
})
const resolver = zodResolver(schema)

export async function action({ request }: ActionFunctionArgs) {
    const { receivedValues, data, errors } = await getValidatedFormData<
        z.infer<typeof schema>
    >(request, resolver)
    console.log({ receivedValues, data, errors })
    if (errors) {
        return json({ errors, defaultValues: {} })
    }
    return json({ receivedValues, data, errors })
}

export let loader = async ({ request, params }: LoaderFunctionArgs) => {
    const { worldId: worldId } = params
    console.log('Incoming params ', params)
    const { supabase, headers, session } = await getSupabaseWithSessionHeaders({
        request,
    })

    if (!session) {
        // return redirect('/login', { headers })
    }

    return json(
        {
            //
        },
        { headers },
    )
}

export default function Page() {
    const {} = useLoaderData<typeof loader>()
    const actionData = useActionData<typeof action>()
    const {
        handleSubmit,
        formState: { errors },
        register,
        control,
    } = useRemixForm<z.infer<typeof schema>>({
        resolver,
    })

    return (
        <div className='p-12 flex flex-col'>
            <Form method='POST' onSubmit={handleSubmit} className=''>
                <Button
                    type='submit'
                    {...register('option', { value: 'create' })}
                >
                    Create World
                </Button>
                <Button
                    type='submit'
                    {...register('option', { value: 'join' })}
                >
                    Join World
                </Button>
            </Form>
        </div>
    )
}
