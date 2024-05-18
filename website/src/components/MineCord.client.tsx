import { useDisclosure } from '@nextui-org/react'
import { Link, useLoaderData } from '@remix-run/react'
import { XIcon } from 'lucide-react'
import { useEffect } from 'react'
import { WindowHeader, WindowContent, Window, Button, TextInput } from 'react95'
import { voxelizeState } from '~/lib/minecord'
import { getWorldUrl } from '~/lib/utils'
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
            started = false
            destroy()
        }
    }, [])
    return (
        <div id='app'>
            <canvas id='canvas'></canvas>
            {/* <audio
                // className='hidden'
                id='preview-audio-self'
                key='preview-audio-self'
                muted
                controls
            ></audio> */}

            <video
                id='screen-video'
                style={{ display: 'none' }}
                autoPlay
                // src='/sample.mp4'
                playsInline
            ></video>

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
        <div
            id='top-level-ui'
            className='h-screen  flex flex-col items-center  justify-center w-screen fixed inset-0'
        >
            {isInviteOpen && (
                <InviteUsersModal
                    onClose={() => {
                        onInviteClose()
                        voxelizeState.controls.lock()
                    }}
                />
            )}
        </div>
    )
}

function InviteUsersModal({ onClose }) {
    const { world } = useLoaderData<typeof loader>()
    const link = getWorldUrl({ worldId: world.id })

    return (
        <Window className='w-[700px] mx-auto'>
            <WindowHeader className='flex justify-start items-center'>
                invite people to your world
                <div className='grow'></div>
                <Button onClick={onClose}>
                    <XIcon className='w-4' />
                </Button>
            </WindowHeader>
            <WindowContent className='flex flex-col gap-4'>
                <div className='flex flex-col gap-4'>
                    You can incite your friends sending the link below
                </div>
                <div className='grow'></div>
                <TextInput variant='flat' value={link} fullWidth readOnly />
                <Button primary onClick={onClose} fullWidth>
                    OK
                </Button>
            </WindowContent>
        </Window>
    )
}
