import { Device } from 'mediasoup-client'
import {
    MediaKind,
    RtpCapabilities,
    RtpParameters,
} from 'mediasoup-client/lib/RtpParameters'
import {
    DtlsParameters,
    TransportOptions,
    Transport,
} from 'mediasoup-client/lib/Transport'
import { ConsumerOptions } from 'mediasoup-client/lib/Consumer'
import { Producer } from 'mediasoup-client/lib/types'
import { env } from '~/lib/env'

type Brand<K, T> = K & { __brand: T }

type RoomId = Brand<string, 'RoomId'>
type ParticipantId = Brand<string, 'ParticipantId'>
type ConsumerId = Brand<string, 'ConsumerId'>
type ProducerId = Brand<string, 'ProducerId'>

interface ServerInit {
    action: 'Init'
    roomId: RoomId
    participantId: ParticipantId
    consumerTransportOptions: TransportOptions
    producerTransportOptions: TransportOptions
    routerRtpCapabilities: RtpCapabilities
}

interface ServerProducerAdded {
    action: 'ProducerAdded'
    participantId: ParticipantId
    producerId: ProducerId
}

interface ServerProducerRemoved {
    action: 'ProducerRemoved'
    participantId: ParticipantId
    producerId: ProducerId
}

interface ServerConnectedProducerTransport {
    action: 'ConnectedProducerTransport'
}

interface ServerProduced {
    action: 'Produced'
    id: ProducerId
}

interface ServerConnectedConsumerTransport {
    action: 'ConnectedConsumerTransport'
}

interface ServerConsumed {
    action: 'Consumed'
    id: ConsumerId
    kind: MediaKind
    rtpParameters: RtpParameters
}

type ServerMessage =
    | ServerInit
    | ServerProducerAdded
    | ServerProducerRemoved
    | ServerConnectedProducerTransport
    | ServerProduced
    | ServerConnectedConsumerTransport
    | ServerConsumed

interface ClientInit {
    action: 'Init'
    rtpCapabilities: RtpCapabilities
}

interface ClientConnectProducerTransport {
    action: 'ConnectProducerTransport'
    dtlsParameters: DtlsParameters
}

interface ClientConnectConsumerTransport {
    action: 'ConnectConsumerTransport'
    dtlsParameters: DtlsParameters
}

interface ClientProduce {
    action: 'Produce'
    kind: MediaKind
    rtpParameters: RtpParameters
}

interface ClientConsume {
    action: 'Consume'
    producerId: ProducerId
}

interface ClientConsumerResume {
    action: 'ConsumerResume'
    id: ConsumerId
}

type CallType = 'audioOnly' | 'shareScreen'

interface ClientProducerRemoved {
    action: 'ProducerRemoved'
    participantId: ParticipantId
    producerId: ProducerId
}

type ClientMessage =
    | ClientInit
    | ClientConnectProducerTransport
    | ClientProduce
    | ClientConnectConsumerTransport
    | ClientConsume
    | ClientConsumerResume
    | ClientProducerRemoved

class Participant {
    // readonly figure: HTMLElement
    readonly preview: HTMLAudioElement
    readonly mediaStream = new MediaStream()
    producerIds: string[] = []

    callType: CallType

    constructor({
        callType,

        id,
    }: {
        id: ParticipantId

        callType: CallType
    }) {
        this.callType = callType
        console.log(`new participant ${id}, type: ${callType}`)
        const container = document.getElementById('top-level-root')!
        if (!container) {
            throw new Error('Container element is required')
        }
        if (callType === 'audioOnly') {
            this.preview = document.createElement('audio')
            if (!debugRoom) {
                this.preview.classList.add('hidden')
            } else {
                this.preview.classList.add('border')
            }
        } else {
            this.preview = document.getElementById(
                'screen-video',
            ) as HTMLVideoElement
        }

        if (!this.preview) {
            throw new Error('Preview element is required')
        }

        this.preview.muted = false
        this.preview.controls = true

        this.preview.onloadedmetadata = () => {
            this.preview.play()
        }

        container.append(this.preview)
    }

    public addTrack(track: MediaStreamTrack): void {
        this.mediaStream.addTrack(track)

        this.preview.srcObject = this.mediaStream
    }

    public deleteTrack(track: MediaStreamTrack): void {
        this.mediaStream.removeTrack(track)

        this.preview.srcObject = this.mediaStream
        if (!this.hasTracks()) {
            this.destroy()
        }
    }

    public hasTracks(): boolean {
        return this.mediaStream.getTracks().length > 0
    }

    public destroy(): void {
        for (let track of this.mediaStream.getTracks()) {
            this.deleteTrack(track)
        }
        this.preview.srcObject = null
        this.preview.remove();
    }
}

type TwoWayMessaging = {
    send: (message: ClientMessage) => void
    close: () => void
    onMessage: (callback: (message: ServerMessage) => void) => void
}

export function defaultMediasoupWsTransport({ roomId }): TwoWayMessaging {
    const wsUrl = new URL('/ws-room', env.PUBLIC_SERVER_URL)
    wsUrl.protocol = wsUrl.protocol === 'http:' ? 'ws:' : 'wss:'
    if (roomId) {
        wsUrl.searchParams.set('roomId', roomId)
    }

    const ws = new WebSocket(wsUrl.toString())

    function send(message: ClientMessage) {
        ws.send(JSON.stringify(message))
    }
    ws.onerror = console.error
    return {
        send,
        onMessage(callback) {
            ws.onmessage = (message) => {
                const decodedMessage: ServerMessage = JSON.parse(message.data)
                callback(decodedMessage)
            }
        },
        close() {
            ws.close()
        },
    }
}

let debugRoom = true

export async function startCall({
    send,
    onMessage,
    close,
    callType,
    preview: sendPreview,
}: {
    // roomId: string;
    callType: CallType
    preview?: HTMLAudioElement | HTMLVideoElement | null
} & TwoWayMessaging) {
    if (!sendPreview) {
        throw new Error('Preview element is required')
    }
    sendPreview.onloadedmetadata = () => {
        sendPreview.play()
    }

    const participants = new Map<ParticipantId, Participant>()
    let producerIdToTrack = new Map<ProducerId, MediaStreamTrack>()

    // const roomId = (new URL(location.href)).searchParams.get('roomId') as RoomId | undefined;

    const device = new Device()
    let producerTransport: Transport | undefined
    let consumerTransport: Transport | undefined

    let sequentialMessages: Promise<void> = Promise.resolve()
    const waitingForResponse: Map<ServerMessage['action'], Function> = new Map()

    function getOrCreateParticipant(id: ParticipantId): Participant {
		
        let participant = participants.get(id)

        if (!participant) {
            participant = new Participant({
                id,
                callType,
            })
            participants.set(id, participant)
        }

        return participant
    }
    let mediaStream: MediaStream
    let producer: Producer

    let myParticipantId = '' as ParticipantId

    const leave = async () => {
        console.log('leaving room call')
        send({
            action: 'ProducerRemoved',
            participantId: myParticipantId!,
            producerId: producer?.id! as any,
        })
        // producer.close();
        // producerTransport?.close();
        const tracks = mediaStream.getTracks()
        for (let track of tracks) {
            track.stop()
        }
        close()
    }
    const onmessage = async (message: ServerMessage) => {
		console.log(`room message: ${message.action}`)
        switch (message.action) {
            case 'Init': {
                await device.load({
                    routerRtpCapabilities: message.routerRtpCapabilities,
                })

                myParticipantId = message.participantId
                // Send client-side initialization message back right away
                send({
                    action: 'Init',
                    rtpCapabilities: device.rtpCapabilities,
                })
                // Producer transport is needed to send audio and video to SFU
                producerTransport = device.createSendTransport(
                    message.producerTransportOptions,
                )

                producerTransport
                    .on('connect', ({ dtlsParameters }, success) => {
                        // Send request to establish producer transport connection
                        send({
                            action: 'ConnectProducerTransport',
                            dtlsParameters,
                        })
                        // And wait for confirmation, but, obviously, no error handling,
                        // which you should definitely have in real-world applications
                        waitingForResponse.set(
                            'ConnectedProducerTransport',
                            () => {
                                success()
                                console.log('Producer transport connected')
                            },
                        )
                    })
                    .on('produce', ({ kind, rtpParameters }, success) => {
                        // Once connection is established, send request to produce
                        // audio or video track
                        send({
                            action: 'Produce',
                            kind,
                            rtpParameters,
                        })
                        // And wait for confirmation, but, obviously, no error handling,
                        // which you should definitely have in real-world applications
                        waitingForResponse.set(
                            'Produced',
                            ({ id }: { id: string }) => {
                                success({ id })
                            },
                        )
                    })
                // Producer transport will be needed to receive produced tracks
                consumerTransport = device.createRecvTransport(
                    message.consumerTransportOptions,
                )

                consumerTransport.on(
                    'connect',
                    ({ dtlsParameters }, success) => {
                        // Send request to establish consumer transport connection
                        send({
                            action: 'ConnectConsumerTransport',
                            dtlsParameters,
                        })
                        // And wait for confirmation, but, obviously, no error handling,
                        // which you should definitely have in real-world applications
                        waitingForResponse.set(
                            'ConnectedConsumerTransport',
                            () => {
                                success()
                                console.log('Consumer transport connected')
                            },
                        )
                    },
                )
                const startCall = async () => {
                    // Request microphone and camera access, in real-world apps you may want
                    // to do this separately so that audio-only and video-only cases are
                    // handled nicely instead of failing completely
                    mediaStream =
                        callType === 'audioOnly'
                            ? await navigator.mediaDevices.getUserMedia({
                                  audio: true,

                                  video: false,
                              })
                            : await navigator.mediaDevices.getDisplayMedia({
                                  video: true,
                              })

                    sendPreview.srcObject = mediaStream

                    // And create producers for all tracks that were previously requested
                    for (const track of mediaStream.getTracks()) {
                        producer = await producerTransport!.produce({ track })

                        console.log(`${track.kind} producer created:`, producer)
                    }
                }

                if (callType === 'audioOnly') {
                    await startCall()
                    break
                } else if (callType === 'shareScreen') {
                    const startButton = document.querySelector('button#share')!
                    startButton.addEventListener('click', async () => {
                        await startCall()
                    })
                    let endButton = document.querySelector('button#stop-share')
                    endButton?.addEventListener('click', leave)

                    break
                }
                break
            }
            case 'ProducerAdded': {
                await new Promise((resolve) => {
                    // Send request to consume producer
                    send({
                        action: 'Consume',
                        producerId: message.producerId,
                    })
                    // And wait for confirmation, but, obviously, no error handling,
                    // which you should definitely have in real-world applications
                    waitingForResponse.set(
                        'Consumed',
                        async (consumerOptions: ConsumerOptions) => {
                            // Once confirmation is received, corresponding consumer
                            // can be created client-side
                            const consumer = await (
                                consumerTransport as Transport
                            ).consume(consumerOptions)

                            console.log(
                                `${consumer.kind} consumer created:`,
                                consumer,
                            )

                            // Consumer needs to be resumed after being created in
                            // paused state (see official documentation about why:
                            // https://mediasoup.org/documentation/v3/mediasoup/api/#transport-consume)
                            send({
                                action: 'ConsumerResume',
                                id: consumer.id as ConsumerId,
                            })

                            producerIdToTrack.set(
                                message.producerId,
                                consumer.track,
                            )
                            getOrCreateParticipant(
                                message.participantId,
                            ).addTrack(consumer.track)

                            resolve(undefined)
                        },
                    )
                })
                break
            }
            case 'ProducerRemoved': {
                const track = producerIdToTrack.get(message.producerId)
                if (!track) {
                    console.error(`track to remove not found`)
                    return
                }
                const participant = getOrCreateParticipant(
                    message.participantId,
                )
                participant.deleteTrack(track)
                if (!participant.hasTracks()) {
                    participants.delete(message.participantId)
                }

                break
            }
            default: {
                console.error('Received unexpected message', message)
            }
        }
    }

    onMessage((decodedMessage) => {
        // All other messages go here and are assumed to be notifications
        // that correspond to previously sent requests
        const callback = waitingForResponse.get(decodedMessage.action)

        if (callback) {
            waitingForResponse.delete(decodedMessage.action)
            callback(decodedMessage)
        } else {
            // Simple hack to make sure we process all messages in order, in real-world apps
            // messages it would be useful to have messages being processed concurrently
            sequentialMessages = sequentialMessages
                .then(() => {
                    return onmessage(decodedMessage)
                })
                .catch((error) => {
                    console.error(
                        'Unexpected error during message handling:',
                        error,
                    )
                })
        }
    })
    return {
        leave,
    }
}
