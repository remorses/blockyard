import { Peers } from '@voxelize/core'

import SimplePeer, { SimplePeer as SimplePeerType } from 'simple-peer'
import { voxelizeState } from '~/minecord'

const peersRef: Record<string, SimplePeer.Instance> = {}
const audioElementsRef = {}

export function voiceChat() {
    const { peers } = voxelizeState

    const clients = peers.children
    const clientId = peers.ownID

    const { events } = voxelizeState
    events.on('signal', (payload) => {
        const clientId = peers.ownID
        console.log('signal', { payload })
        if (!payload) {
            console.error('No payload in signal')
            return
        }
        const { senderId, signal } = JSON.parse(payload)
        if (senderId === clientId) return

        const initiator = clientId > senderId

        if (!peersRef[senderId]) {
            createPeerConnection(senderId, initiator)
        }

        peersRef[senderId].signal(signal)
    })

    const createPeerConnection = (targetId, initiator) => {
        if (peersRef[targetId]) return

        const peer = new SimplePeer({
            initiator,
            trickle: false,
            config: {
                iceServers: [
                    { urls: 'stun:stun.l.google.com:19302' },
                    { urls: 'stun:stun1.l.google.com:19302' },
                ],
            },
        })

        peer.on('error', (err) =>
            console.error('Error in peer connection:', err),
        )

        peer.on('signal', (signal) => {
            voxelizeState.events.emit('signal', {
                targetId,
                test: ' dd',
                senderId: clientId,
                signal,
            })
        })

        peer.on('connect', () => console.log(`Connected to ${targetId}`))

        peer.on('track', (track, stream) => {
            console.log(`Received ${track.kind} track from ${targetId}`)
            track.onunmute = () => {
                const audio = new Audio()
                audio.autoplay = true
                // audio.muted = remoteAudioMuted[targetId]
                audio.srcObject = stream
                audio.play()
                audioElementsRef[targetId] = audio
            }
        })

        peer.on('close', () => {
            console.log(`Disconnected from ${targetId}`)
            peer.destroy()
            delete peersRef[targetId]
            if (audioElementsRef[targetId]) {
                audioElementsRef[targetId].pause()
                audioElementsRef[targetId].srcObject = null
                delete audioElementsRef[targetId]
            }
        })

        navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then((stream) => {
                if (!peer.destroyed) {
                    peer.addStream(stream)
                }
            })
            .catch((error) => {
                console.error('Error getting user media:', error)
            })

        peersRef[targetId] = peer
    }

    // useEffect(() => {
    //     const updatedRemoteAudioMuted = {}
    //     for (const id in clients) {
    //         if (id !== clientId) {
    //             updatedRemoteAudioMuted[id] = !clients[id]?.microphone
    //         }
    //     }
    //     setRemoteAudioMuted(updatedRemoteAudioMuted)
    // }, [clientId, clients])

    const start = () => {
        if (!clientId) {
            console.error('Client ID not found')
            return
        }

        for (const id in clients) {
            if (id !== clientId) {
                const shouldInitiateConnection = clientId > id
                createPeerConnection(id, shouldInitiateConnection)
            }
        }
    }

    return {
        start: start,
        disconnect: () => {
            for (const id in audioElementsRef) {
                if (audioElementsRef[id]) {
                    audioElementsRef[id].pause()
                    audioElementsRef[id].srcObject = null
                }
            }
        },
    }
}
