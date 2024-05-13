import * as z from 'zod'
import { prisma } from 'db/prisma'
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
import { Button, ButtonGroup, Input } from '@nextui-org/react'
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
    worldName: z.string().optional(),
})
const resolver = zodResolver(schema)

type Data = z.infer<typeof schema>

export async function action({ request }: ActionFunctionArgs) {
    const { supabase, userId, headers, session } =
        await getSupabaseWithSessionHeaders({
            request,
        })
    const { receivedValues, data, errors } = await getValidatedFormData<Data>(
        request,
        resolver,
    )
    console.log({ receivedValues, data, errors })
    if (errors) {
        return json({ errors, defaultValues: {} })
    }
    let org = await prisma.org.findFirst({
        where: { users: { some: { userId } } },
    })
    let orgId = org?.orgId as string
    if (!org) {
        org = await prisma.org.create({
            data: {
                users: {
                    create: { userId, role: 'ADMIN' },
                },
            },
        })
        orgId = org.orgId
    }

    const world = await prisma.world.create({
        data: {
            orgId,
        },
    })
    return json({
        receivedValues,
        world,
        data,
        errors: { worldName: 'errore' },
    })
}

export let loader = async ({ request, params }: LoaderFunctionArgs) => {
    const { worldId: worldId } = params
    console.log('Incoming params ', params)
    const { supabase, headers, session } = await getSupabaseWithSessionHeaders({
        request,
    })

    if (!session) {
        return redirect('/login', { headers })
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
            <Form
                method='POST'
                onSubmit={handleSubmit}
                className='flex-col gap-6 flex'
            >
                <Button
                    type='submit'
                    {...register('option', { value: 'create' })}
                >
                    Create World
                </Button>
                <div className='flex '>
                    <Button
                        type='submit'
                        {...register('option', { value: 'join' })}
                    >
                        Join World
                    </Button>
                    <Input
                        placeholder='World name'
                        errorMessage={errors?.worldName?.message}
                        {...register('worldName', {})}
                    />
                </div>
            </Form>
        </div>
    )
}
