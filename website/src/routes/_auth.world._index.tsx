import * as z from 'zod'
import { prisma } from 'db/prisma'
import { Hourglass } from 'react95'

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
import { Form, Link, useActionData, useLoaderData } from '@remix-run/react'
import {
    Button,
    TextInput,
    Separator,
    WindowContent,
    WindowHeader,
    Window,
} from 'react95'
import {
    RemixFormProvider,
    getValidatedFormData,
    useRemixForm,
    useRemixFormContext,
    validateFormData,
} from 'remix-hook-form'
import { Resolver, zodResolver } from '@hookform/resolvers/zod'
import { ProgressBarIncrementing, Windows95Provider } from '~/components/95'
import { sleep, getWorldUrl } from '~/lib/utils'
import { useNavigation } from '@remix-run/react'
import { useFormContext } from 'react-hook-form'

export const meta: MetaFunction = () => {
    return [
        { title: 'BLockyard' },
        { name: 'description', content: 'Minecraft + Discord + Zoom' },
    ]
}

const schema = z.object({
    option: z.enum(['create', 'join']),
    worldId: z.string().optional(),
})
const resolver = zodResolver(schema)

type Data = z.infer<typeof schema>

export async function action({ request }: ActionFunctionArgs) {
    // await sleep(1000 * 6)
    // return {}
    const { supabase, userId, headers, session } =
        await getSupabaseWithSessionHeaders({
            request,
        })
    const { receivedValues, data, errors } = await getValidatedFormData<Data>(
        request,
        resolver,
    )
    if (errors) {
        return json({ errors, defaultValues: {} })
    }

    if (data.option === 'join') {
        const found = await prisma.world.findFirst({
            where: { id: data.worldId },
        })
        if (!found) {
            return json(
                {
                    errors: {
                        worldId: { message: 'World not found' },
                    },
                },
                { status: 400 },
            )
        }
        return redirect(`/world/${data.worldId}`, { headers })
    } else if (data.option === 'create') {
        let [org] = await Promise.all([
            prisma.org.findFirst({
                where: { users: { some: { userId } } },
            }),
        ])
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
                createdByUserId: userId,
                orgId,
            },
        })
        return redirect(`/world/${world.id}`, { headers })
    }
}

export let loader = async ({ request, params }: LoaderFunctionArgs) => {
    const { worldId: worldId } = params
    console.log('Incoming params ', params)
    const { supabase, userId, headers, redirectTo, session } =
        await getSupabaseWithSessionHeaders({
            request,
        })

    if (redirectTo) {
        throw redirectTo
    }

    let [org, worlds] = await Promise.all([
        prisma.org.findFirst({
            where: { users: { some: { userId } } },
        }),
        prisma.world.findMany({
            where: { createdByUserId: userId },
        }),
    ])
    console.log({ org, worlds })

    return json(
        {
            worlds,
            //
        },
        { headers },
    )
}

export default function Page() {
    const { worlds } = useLoaderData<typeof loader>()
    const actionData = useActionData<typeof action>()
    const methods = useRemixForm<Data>({
        resolver,
        // errors: actionData?.errors,
    })
    const {
        handleSubmit,
        formState: { errors, isSubmitting },
        register,

        control,
    } = methods

    const navigation = useNavigation()

    if (!worlds.length) {
        return (
            <div className='flex flex-col items-center pt-12'>
                <Window className='w-[700px] mx-auto'>
                    <WindowHeader>Create New World</WindowHeader>
                    <WindowContent>
                        <Form
                            method='POST'
                            onSubmit={handleSubmit}
                            className='flex-col gap-6 flex'
                        >
                            <RemixFormProvider {...methods}>
                                <Button
                                    type='submit'
                                    {...register('option', { value: 'create' })}
                                >
                                    Create World
                                </Button>
                                <Separator />
                                <div className=''>
                                    or join an existing world
                                </div>
                                <JoinAnotherWorld />

                                {isSubmitting && <ProgressBarIncrementing />}
                            </RemixFormProvider>
                        </Form>
                    </WindowContent>
                </Window>
            </div>
        )
    }

    return (
        <div className='flex flex-col items-center pt-12'>
            <Window className='w-[700px] mx-auto'>
                <WindowHeader>Your Worlds</WindowHeader>
                <WindowContent className='flex flex-col gap-4'>
                    <div className='flex flex-col gap-4'>
                        {worlds.map((world) => {
                            const link = getWorldUrl({ worldId: world.id })
                            return (
                                <div
                                    key={world.id}
                                    className='flex flex-col gap-4'
                                >
                                    <div>{world.id}</div>
                                    <div className=''>
                                        Invite Users Sending this link
                                    </div>
                                    <TextInput
                                        variant='flat'
                                        value={link}
                                        fullWidth
                                        readOnly
                                    />
                                    {/* <div>{world.createdByUserId}</div> */}
                                    <Link to={`/world/${world.id}`}>
                                        <Button type='button' primary>
                                            Start Meeting
                                        </Button>
                                    </Link>
                                </div>
                            )
                        })}
                    </div>
                    <Separator />
                    <div className=''>Or join another one</div>
                    <Form
                        method='POST'
                        onSubmit={handleSubmit}
                        className='flex-col gap-6 flex'
                    >
                        <RemixFormProvider {...methods}>
                            <JoinAnotherWorld />
                        </RemixFormProvider>
                    </Form>
                    {isSubmitting && <ProgressBarIncrementing />}
                </WindowContent>
            </Window>
        </div>
    )
}

function JoinAnotherWorld() {
    const { formState, register } = useRemixFormContext<Data>()
    return (
        <div className='flex items-stretch gap-4'>
            <Button type='submit' {...register('option', { value: 'join' })}>
                Join World
            </Button>
            <TextInput
                placeholder='world code'
                variant='flat'
                {...register('worldId', {})}
            />
            {formState?.errors?.worldId && (
                <div className='text-red-500'>
                    {formState?.errors?.worldId?.message}
                </div>
            )}
            {/* {formState.isSubmitting && 'loading...'} */}
        </div>
    )
}
