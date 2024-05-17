import { useDisclosure } from '@nextui-org/react'
import { Link, useLoaderData } from '@remix-run/react'
import { XIcon } from 'lucide-react'
import { useEffect } from 'react'
import { WindowHeader, WindowContent, Window, Button, TextInput } from 'react95'
import { loader } from '~/routes/_auth.world.$worldId'

let started = false

export function MineCord() {
    const data = useLoaderData<typeof loader>()
    useEffect(() => {
        let destroy = () => {}
        Promise.resolve().then(async () => {
            const { start } = await import('~/lib/minecord')
            if (!started) {
                started = true
                destroy = await start(data)
            }
        })
        return () => {
            destroy()
        }
    }, [])
    return (
        <div id='app'>
            <canvas id='canvas'></canvas>
            <div id='crosshair' />
            <TopLevelUi />
        </div>
    )
}

function TopLevelUi() {
    const { onClose: onInviteClose, isOpen: isInviteOpen } = useDisclosure({
        defaultOpen: true,
    })
    if (!isInviteOpen) {
        return
    }
    return (
        <div className='h-screen flex flex-col items-center  justify-center w-screen fixed inset-0'>
            {isInviteOpen && <InviteUsersModal onClose={onInviteClose} />}
        </div>
    )
}

function InviteUsersModal({ onClose }) {
    const { world } = useLoaderData<typeof loader>()
    const link = `${window.location.origin}/world/${world.id}`

    return (
        <Window className='w-[700px] min-h-[400px] mx-auto'>
            <WindowHeader className='flex justify-start items-center'>
                to invite users, send them this link
                <div className='grow'></div>
                <Button onClick={onClose}>
                    <XIcon className='w-4' />
                </Button>
            </WindowHeader>
            <WindowContent className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>hello</div>
                <div className='grow'></div>
                <TextInput variant='flat' value={link} fullWidth readOnly />
                <Button primary onClick={onClose} fullWidth>
                    OK
                </Button>
            </WindowContent>
        </Window>
    )
}
