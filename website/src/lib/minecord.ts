import * as VOXELIZE from '@voxelize/core'
import modelUrl from 'website/src/assets/boxman.glb'
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

import { atom } from 'nanostores'

import {
    Participant,
    RemoteTrackPublication,
    Room,
    RoomEvent,
    Track,
    TrackPublication,
} from 'livekit-client'
import * as THREE from 'three'

import { SerializeFrom } from '@remix-run/node'

import { loader } from '~/routes/_auth.world.$worldId'
import { setupWorld } from '~/world'
import { cuidToUUID } from '~/lib/utils'
import { div, lights } from 'three/examples/jsm/nodes/Nodes.js'
import { $ } from 'vitest/dist/reporters-yx5ZTtEV.js'
import { env } from '~/lib/env'

export const participantsStore = atom<Participant[]>([])

export let voxelizeState: {
    sharingScreen: boolean
    // room?: Room
    world: VOXELIZE.World
    network: VOXELIZE.Network
    controls: VOXELIZE.RigidControls
    peers: VOXELIZE.Peers
    events: VOXELIZE.Events
    mainCharacter: VOXELIZE.Character
    shareScreenMesh?: THREE.Mesh
    clearUpdate?: () => void
    isFocused: boolean
} = {} as any

export async function start(data: SerializeFrom<typeof loader>) {
    const canvas = document.getElementById('canvas')
    if (!canvas) {
        throw new Error('Canvas not found')
    }

    /* -------------------------------------------------------------------------- */
    /*                               VOXELIZE WORLD                               */
    /* -------------------------------------------------------------------------- */
    const world = new VOXELIZE.World({
        textureUnitDimension: 16,
    })

    async function applyBlockTextures() {
        const allFaces = ['px', 'nx', 'py', 'ny', 'pz', 'nz']

        await world.applyBlockTexture('Dirt', allFaces, '/blocks/dirt.png')
        await world.applyBlockTexture('Stone', allFaces, '/blocks/stone.png')
        await world.applyBlockTexture(
            'Grass Block',
            ['px', 'pz', 'nx', 'nz'],
            '/blocks/grass_side.png',
        )
        await world.applyBlockTexture(
            'Grass Block',
            ['py'],
            '/blocks/grass_top.png',
        )
        await world.applyBlockTexture('Grass Block', ['ny'], '/blocks/dirt.png')
    }

    /* -------------------------------------------------------------------------- */
    /*                         THREE-JS UTILITIES/CLASSES                         */
    /* -------------------------------------------------------------------------- */
    const camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.0001,
        30000,
    )

    const renderer = new THREE.WebGLRenderer({
        antialias: true,
        powerPreference: 'high-performance',
        canvas: canvas!,
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio || 1)
    renderer.outputColorSpace = THREE.SRGBColorSpace

    window.addEventListener('resize', () => {
        camera.aspect = window.innerWidth / window.innerHeight
        camera.updateProjectionMatrix()
        renderer.setSize(window.innerWidth, window.innerHeight)
    })

    /* -------------------------------------------------------------------------- */
    /*                             VISUAL IMPROVEMENTS                            */
    /* -------------------------------------------------------------------------- */
    const shadows = new VOXELIZE.Shadows(world)
    const lightShined = new VOXELIZE.LightShined(world)

    world.sky.setShadingPhases([
        // start of sunrise
        {
            name: 'sunrise',
            color: {
                top: new THREE.Color('#7694CF'),
                middle: new THREE.Color('#B0483A'),
                bottom: new THREE.Color('#222'),
            },
            skyOffset: 0.05,
            voidOffset: 0.6,
            start: 0.2,
        },
        // end of sunrise
        {
            name: 'daylight',
            color: {
                top: new THREE.Color('#73A3FB'),
                middle: new THREE.Color('#B1CCFD'),
                bottom: new THREE.Color('#222'),
            },
            skyOffset: 0,
            voidOffset: 0.6,
            start: 0.25,
        },
        // start of sunset
        {
            name: 'sunset',
            color: {
                top: new THREE.Color('#A57A59'),
                middle: new THREE.Color('#FC5935'),
                bottom: new THREE.Color('#222'),
            },
            skyOffset: 0.05,
            voidOffset: 0.6,
            start: 0.7,
        },
        // end of sunset
        {
            name: 'night',
            color: {
                top: new THREE.Color('#000'),
                middle: new THREE.Color('#000'),
                bottom: new THREE.Color('#000'),
            },
            skyOffset: 0.1,
            voidOffset: 0.6,
            start: 0.75,
        },
    ])

    world.sky.paint('bottom', VOXELIZE.artFunctions.drawSun())
    world.sky.paint('top', VOXELIZE.artFunctions.drawStars())
    world.sky.paint('top', VOXELIZE.artFunctions.drawMoon())
    world.sky.paint('sides', VOXELIZE.artFunctions.drawStars())

    /* -------------------------------------------------------------------------- */
    /*                               PLAYER CONTROLS                              */
    /* -------------------------------------------------------------------------- */
    const inputs = new VOXELIZE.Inputs()

    // To run around the world
    const controls = new VOXELIZE.RigidControls(
        camera,
        renderer.domElement,
        world,
        {
            initialPosition: [0, 40, 0],
        },
    )

    controls.connect(inputs)

    // inputs.bind('g', controls.toggleGhostMode)
    // inputs.bind('f', controls.toggleFly)

    // To add/remove blocks
    const voxelInteract = new VOXELIZE.VoxelInteract(camera, world, {
        highlightType: 'outline',
    })
    world.add(voxelInteract)

    inputs.click('left', () => {
        if (!voxelInteract.target) return

        const [x, y, z] = voxelInteract.target
        world.updateVoxel(x, y, z, 0, {})
    })

    let holdingBlockType = 1

    inputs.click('middle', () => {
        if (!voxelInteract.target) return

        const [x, y, z] = voxelInteract.target
        holdingBlockType = world.getVoxelAt(x, y, z)
    })

    inputs.click('right', () => {
        if (!voxelInteract.potential) return

        const { voxel } = voxelInteract.potential
        world.updateVoxel(...voxel, holdingBlockType, {})
    })

    // Add a character to the control
    function createCharacter() {
        const character = new VOXELIZE.Character({})

        character.username = data.username
        world.add(character)
        lightShined.add(character)
        shadows.add(character)
        return character
    }

    const mainCharacter = createCharacter()
    controls.attachCharacter(mainCharacter)
    world.addChunkInitListener([0, 0], async (chunk) => {
        let i = 0
        while (i < 10) {
            await sleep(600)
            let status = world.getChunkStatus(0, 0)

            if (status === 'loaded') {
                controls.teleportToTop(0, 0)

                return
            } else {
                console.log('waiting for chunk to load, then teleport')
            }
        }
    })

    function sleep(ms: number) {
        return new Promise((resolve) => setTimeout(resolve, ms))
    }

    // To change the perspective of the player
    const perspectives = new VOXELIZE.Perspective(controls, world)
    perspectives.connect(inputs)

    /* -------------------------------------------------------------------------- */
    /*                           MULTIPLAYER CHARACTERS                           */
    /* -------------------------------------------------------------------------- */
    const peers = new VOXELIZE.Peers(controls.object)

    peers.createPeer = createCharacter

    peers.onPeerLeave = (_, peer) => {
        // chat.onChat({
        //     type: 'system',
        //     body: `${peer.nametag.text} $${grayReplacement}$has left the game`,
        // })
    }
    peers.onPeerUpdate = (peer, data) => {
        ;(peer as any).set(data.position, data.direction)
    }

    world.add(peers)

    /* -------------------------------------------------------------------------- */
    /*                                  DEBUGGING                                 */
    /* -------------------------------------------------------------------------- */
    // const debug = new VOXELIZE.Debug(document.body, {})

    // debug.registerDisplay('Current time', world, 'time', (time) =>
    //     Number(time).toFixed(2),
    // )

    // // const gui = new GUI()
    // // gui.domElement.style.top = '10px'
    // debug.visible = false

    // inputs.bind('j', debug.toggle)

    /* -------------------------------------------------------------------------- */
    /*                               NETWORK MANAGER                              */
    /* -------------------------------------------------------------------------- */
    const network = new VOXELIZE.Network()

    network.register(world).register(peers)

    const events = new VOXELIZE.Events()

    network.register(events)

    // const debugPos = throttle(() => {
    //     let res = new THREE.Vector3()
    //     mainCharacter.bodyGroup.getWorldPosition(res)
    //     console.log('Main Character Position:', mainCharacter.position)
    //     console.log('Main Character Body Group Position:', res)
    //     console.log('GLTF Scene Position:', gltf.scene.position)
    // }, 1000 * 5)
    /* -------------------------------------------------------------------------- */
    /*                               MAIN GAME LOOPS                              */
    /* -------------------------------------------------------------------------- */

    function update() {
        // Process incoming network messages
        network.sync()

        if (world.isInitialized) {
            perspectives.update()
            voxelInteract.update()
            controls.update()
            lightShined.update()
            shadows.update()

            world.update(
                camera.getWorldPosition(new THREE.Vector3()),
                camera.getWorldDirection(new THREE.Vector3()),
            )

            peers.update()
            // debug.update()
        }

        renderer.render(world, camera)

        // Send outgoing network messages
        network.flush()
    }

    const worldId = data?.world?.id
    const hostUserId = data?.world?.createdByUserId
    const userId = data?.userId

    network.setID(userId)
    await network.connect(
        process.env.PUBLIC_SERVER_URL || 'https://minecord-rust-server.fly.dev',
    )
    await network.join(worldId || '')
    await world.initialize()
    await setupWorld(world)

    await applyBlockTextures()

    world.time = 0.4 * 24_000
    world.renderRadius = 8
    voxelizeState = {
        sharingScreen: false,
        world,
        network,
        controls,
        peers,
        events,
        mainCharacter,
        isFocused: true,
        clearUpdate: () => {},
    }

    const onVisibility = () => {
        if (document.visibilityState === 'visible') {
            console.log('visible, increasing update rate')
            voxelizeState.isFocused = true
            voxelizeState.clearUpdate?.()
        } else {
            console.log('not visible, decreasing update rate')
            voxelizeState.clearUpdate = VOXELIZE.setWorkerInterval(
                update,
                1000 / 2,
            )
            voxelizeState.isFocused = false
        }
    }
    document.addEventListener('visibilitychange', onVisibility)
    function animate() {
        requestAnimationFrame(animate)
        if (voxelizeState.isFocused) {
            update()
        }
    }
    animate()

    const container = document.getElementById('top-level-root')

    let room: Room | undefined

    async function startAudio() {
        const wsURL = 'wss://blockyard-dlqqsec6.livekit.cloud'

        room = new Room({})

        function getParticipants() {
            const users = [
                ...room?.remoteParticipants.values(),
                room?.localParticipant,
            ]
            participantsStore.set(users)
        }
        getParticipants()
        // voxelizeState.room = room
        // set up event listeners
        room.on(
            RoomEvent.TrackSubscribed,
            (track, publication, participant) => {
                console.log('track subscribed', track)
                if (track.kind === Track.Kind.Audio) {
                    // attach it to a new HTMLVideoElement or HTMLAudioElement
                    const element = track.attach()
                    container.appendChild(element)
                }
                renderScreenShare(room)
            },
        )
            .on(RoomEvent.LocalTrackPublished, (publication, participant) => {
                renderScreenShare(room)
            })
            .on(
                RoomEvent.TrackUnsubscribed,
                (track, publication, participant) => {
                    // remove tracks from all attached elements
                    track.detach()
                },
            )
            .on(RoomEvent.ActiveSpeakersChanged, (speakers) => {
                // show UI indicators when participant is speaking
            })
            .on(RoomEvent.Disconnected, () => {
                console.log('disconnected from room')
            })
            .on(RoomEvent.ParticipantConnected, (participant) => {
                console.log('participant connected', participant)
                getParticipants()
            })
            .on(RoomEvent.ParticipantDisconnected, (participant) => {
                console.log('participant disconnected', participant)
                getParticipants()
            })
            .on(RoomEvent.LocalTrackUnpublished, (publication, participant) => {
                // when local tracks are ended, update UI to remove them from rendering
                publication.track.detach()
            })
        await room.connect(wsURL, data.livekitToken, {})
        console.log('connected to livekit room', room.name)

        // publish local camera and mic tracks
        // await room.localParticipant.enableCameraAndMicrophone()
        await room.localParticipant.setCameraEnabled(false)
        await room.localParticipant.setMicrophoneEnabled(true)
    }

    if (!env.PUBLIC_DISABLE_CALL) {
        controls.on('lock', async () => {
            if (room) return
            startAudio()
        })
        if (controls.isLocked) {
            startAudio()
        }
    }

    async function onVideoShareKeyPress(e: KeyboardEvent) {
        // if (voxelizeState.sharingScreen) return
        if (e.key === 'v') {
            const res = await room.localParticipant.setScreenShareEnabled(
                true,
                {},
            )
        }
    }
    window.addEventListener('keydown', onVideoShareKeyPress)
    inputs.bind('n', async (e) => {
        const loader = new GLTFLoader()

        const gltf: GLTF = await new Promise((resolve, reject) => {
            loader.load(modelUrl, (x) => resolve(x), undefined, reject)
        })

        if (!gltf) {
            throw new Error('GLTF model not loaded')
        }
        console.log('stopping screen share')
        world.add(gltf.scene)

        const maxHeight = world.getMaxHeightAt(10, 0)
        lightShined.add(gltf.scene)
        // add a light
        const light = new THREE.PointLight(0xffffff, 1, 100)
        light.position.set(0, maxHeight + 6, 0)
        world.add(light)
        console.log({ maxHeight })
        gltf.scene.position.set(0, maxHeight, 0)
    })
    peers.onPeerJoin = (id) => {
        if (id === userId) return
        if (id === hostUserId) {
            // voiceChat({ isInitializer: userId === hostUserId })
        }

        setTimeout(() => {
            const peer = peers.getPeerById(id)
            if (!peer) return
            peer.userData ||= {}
            peer.userData.id = id
        }, 1000)
    }

    return () => {
        mainCharacter.remove()
        room?.disconnect()
        document.removeEventListener('visibilitychange', onVisibility)
        voxelizeState?.clearUpdate?.()
        window.removeEventListener('keydown', onVideoShareKeyPress)
    }
}
// https://github.com/livekit/client-sdk-js/blob/1e8465ab3202be0542580648c6443846a39ccfe4/example/sample.ts#L687
function renderScreenShare(room: Room) {
    // if (room.state !== ConnectionState.Connected) {
    //     div.style.display = 'none'
    //     return
    // }
    let participant: Participant | undefined
    let screenSharePub: TrackPublication | undefined =
        room.localParticipant.getTrackPublication(Track.Source.ScreenShare)
    let screenShareAudioPub: RemoteTrackPublication | undefined
    if (!screenSharePub) {
        room.remoteParticipants.forEach((p) => {
            if (screenSharePub) {
                return
            }
            participant = p
            const pub = p.getTrackPublication(Track.Source.ScreenShare)
            if (pub?.isSubscribed) {
                screenSharePub = pub
            }
            const audioPub = p.getTrackPublication(
                Track.Source.ScreenShareAudio,
            )
            if (audioPub?.isSubscribed) {
                screenShareAudioPub = audioPub
            }
        })
    } else {
        participant = room.localParticipant
    }

    if (screenSharePub && participant) {
        const { mesh, video } = createOrGetShareVideo({
            peerId: participant.identity,
        })
        screenSharePub.videoTrack?.attach(video)
        if (screenShareAudioPub) {
            screenShareAudioPub.audioTrack?.attach(video)
        }
    } else {
        // console.log('no screen share track, removing video elem')
        // removeScreenShare()
    }
}

function removeScreenShare() {
    voxelizeState.world.remove(voxelizeState.shareScreenMesh)
}

export function createOrGetShareVideo({ peerId }) {
    const videoId = 'share-video'
    let video = document.getElementById(videoId) as HTMLVideoElement
    if (!video) {
        // throw new Error('Video for screen share not found')
        video = document.createElement('video')
        document.body.appendChild(video)
        video.id = videoId
        video.style.display = 'none'
        video.autoplay = true
        video.muted = false
        video.playsInline = true
        // video.onloadedmetadata = () => {
        //     video.play().catch((e) => {
        //         console.error(
        //             `share video.play() failed inside onloadedmetadata`,
        //             e,
        //         )
        //     })
        // }
        // video.addEventListener('play', () => {
        //     console.log('share video playing')
        // })
        // video.play().catch((e) => {
        //     console.error(`share video.play() failed`, e)
        // })
    }
    if (voxelizeState.shareScreenMesh) {
        voxelizeState.world.remove(voxelizeState.shareScreenMesh)
        voxelizeState.shareScreenMesh = undefined
    }

    // this.video.play()

    const texture = new THREE.VideoTexture(video)
    texture.colorSpace = THREE.SRGBColorSpace

    const geometry = new THREE.PlaneGeometry(16, 9)
    // texture.wrapS = THREE.RepeatWrapping
    // texture.wrapT = THREE.RepeatWrapping
    // geometry.scale(0.5, 0.5, 0.5)
    const material = new THREE.MeshBasicMaterial({
        // color: 0xffffff,
        side: THREE.DoubleSide,
        map: texture,
    })

    const planeMesh = new THREE.Mesh(geometry, material)
    let peer =
        voxelizeState.peers.getPeerById(peerId) || voxelizeState.mainCharacter
    // if (!peer) {
    //     throw new Error(
    //         `Peer that shared screen not found: ${peerId} in ${[...voxelizeState.peers.children.keys()]}`,
    //     )
    // }
    const pos = peer.position
    // Assuming you have an animation loop or a function that updates on character movement

    const forward = new THREE.Vector3(0, 0, -1)
    forward.applyQuaternion(peer.quaternion)
    forward.normalize() // Ensure the forward vector is of unit length
    const planePosition = forward.clone().multiplyScalar(10).add(peer.position)
    planeMesh.position.copy(planePosition)

    // elevate it a bit
    planeMesh.lookAt(peer.position)
    planeMesh.position.y += 5

    voxelizeState.world.add(planeMesh)
    voxelizeState.shareScreenMesh = planeMesh

    return { mesh: planeMesh, video }
}
