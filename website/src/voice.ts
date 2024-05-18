import { Peers } from '@voxelize/core'

import { Peer } from 'peerjs'
import { voxelizeState } from '~/lib/minecord'

const peersRef: Record<string, Peer> = {}
const audioElementsRef = {}
let hostPeerId = 'minecord-host'
export async function voiceChat({ isInitializer }) {
    try {
        const { peers } = voxelizeState

        const clients = peers.children
        const clientId = peers.ownID.replace(/[-_]/g, '')

        const peer = new Peer(isInitializer ? hostPeerId : clientId, {})

        const conn = peer.connect(hostPeerId)

        const { events } = voxelizeState

        peer.on('open', (id) => {
            console.log('My peer ID is: ' + id)
        })
        peer.on('error', (error) => {
            console.error('[peerjs error]', error)
        })

        // Handle incoming data connection
        peer.on('connection', (conn) => {
            console.log('incoming peer connection!')
            conn.on('data', (data) => {
                console.log(`received: ${data}`)
            })
            conn.on('open', () => {
                conn.send('hello!')
            })
        })
        const onStream = (stream: MediaStream) => {
            const tracks = stream.getTracks()
            const hasVideo = tracks.some((track) => track.kind === 'video')
            if (hasVideo) {
                const videoElem: HTMLVideoElement = document.getElementById(
                    'video',
                ) as any
                if (!videoElem) {
                    console.error('video element not found')
                    return
                }
                videoElem.srcObject = stream
                videoElem.play()
            } else {
                const audio = new Audio()
                audio.autoplay = true
                // audio.muted = remoteAudioMuted[targetId]
                audio.srcObject = stream
                audio.play()
            }

            // audioElementsRef[call.peer] = audio
        }
        if (!isInitializer) {
            const stream = await navigator.mediaDevices.getUserMedia({
                audio: true,
            })
            const call = peer.call(hostPeerId, stream)
            call.on('stream', onStream)
        }

        peer.on('call', (call) => {
            navigator.mediaDevices
                .getUserMedia({ video: true, audio: true })
                .then((stream) => {
                    call.answer(stream)
                    call.on('stream', onStream)
                })
                .catch((err) => {
                    console.error('Failed to get local stream', err)
                })
        })
        peer.on('close', () => {
            const targetId = peer.id
            peer.destroy()
            delete peersRef[targetId]
            if (audioElementsRef[targetId]) {
                audioElementsRef[targetId].pause()
                audioElementsRef[targetId].srcObject = null
                delete audioElementsRef[targetId]
            }
        })

        async function shareVideo() {
            if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
                const stream = await navigator.mediaDevices.getDisplayMedia({
                    video: { width: 1280, height: 720 },
                    // audio: false,
                })
                const call = peer.call(hostPeerId, stream)
                call.on('stream', onStream)
            } else {
                console.error('MediaDevices interface not available.')
            }
        }
        return { shareVideo }
    } catch (error) {
        console.error('voiceChat error', error)
    }
}
