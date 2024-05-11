import './style.css'

import * as VOXELIZE from '@voxelize/core'
import { GUI } from 'lil-gui'
import * as THREE from 'three'

import '@voxelize/core/dist/styles.css'
import { voiceChat } from '~/voice'

const canvas = document.getElementById('canvas')

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
    0.1,
    3000,
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
const rigidControls = new VOXELIZE.RigidControls(
    camera,
    renderer.domElement,
    world,
    {
        initialPosition: [0, 40, 0],
    },
)

rigidControls.connect(inputs)

inputs.bind('g', rigidControls.toggleGhostMode)
inputs.bind('f', rigidControls.toggleFly)

// To add/remove blocks
const voxelInteract = new VOXELIZE.VoxelInteract(camera, world, {
    highlightType: 'outline',
})
world.add(voxelInteract)

inputs.click('left', () => {
    if (!voxelInteract.target) return

    const [x, y, z] = voxelInteract.target
    world.updateVoxel(x, y, z, 0)
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
    world.updateVoxel(...voxel, holdingBlockType)
})

// Add a character to the control
function createCharacter() {
    const character = new VOXELIZE.Character()
    world.add(character)
    lightShined.add(character)
    shadows.add(character)
    return character
}

const mainCharacter = createCharacter()
rigidControls.attachCharacter(mainCharacter)

// To change the perspective of the player
const perspectives = new VOXELIZE.Perspective(rigidControls, world)
perspectives.connect(inputs)

/* -------------------------------------------------------------------------- */
/*                           MULTIPLAYER CHARACTERS                           */
/* -------------------------------------------------------------------------- */
const peers = new VOXELIZE.Peers(rigidControls.object)

peers.createPeer = createCharacter

peers.onPeerJoin = (id) => {
    const peer = peers.getPeerById(id)
    if (!peer) return
    peer.userData ||= {}
    peer.userData.id = id

    // setTimeout(() => {
    //     chat.onChat({
    //         type: 'system',
    //         body: `${peer.nametag.text} $${grayReplacement}$has joined the game`,
    //     })
    //     // some arbitrary number to wait until nametag is stable
    // }, 1000)
}

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
const debug = new VOXELIZE.Debug(document.body)

debug.registerDisplay('Current time', world, 'time', (time) =>
    Number(time).toFixed(2),
)

const gui = new GUI()
gui.domElement.style.top = '10px'

inputs.bind('j', debug.toggle)

/* -------------------------------------------------------------------------- */
/*                               NETWORK MANAGER                              */
/* -------------------------------------------------------------------------- */
const network = new VOXELIZE.Network()

network.register(world).register(peers)

const events = new VOXELIZE.Events()

network.register(events)

/* -------------------------------------------------------------------------- */
/*                               MAIN GAME LOOPS                              */
/* -------------------------------------------------------------------------- */
function animate() {
    requestAnimationFrame(animate)

    // Process incoming network messages
    network.sync()

    if (world.isInitialized) {
        perspectives.update()
        voxelInteract.update()
        rigidControls.update()
        lightShined.update()
        shadows.update()

        world.update(
            camera.getWorldPosition(new THREE.Vector3()),
            camera.getWorldDirection(new THREE.Vector3()),
        )

        peers.update()
        debug.update()
    }

    renderer.render(world, camera)

    // Send outgoing network messages
    network.flush()
}

export const voxelizeState = {
    world,
    network,
    peers,
    events,
    mainCharacter,
}

export async function start() {
    animate()

    await network.connect(
        process.env.PUBLIC_SERVER_URL || 'http://localhost:4000',
    )
    await network.join('tutorial')

    await world.initialize()
    await applyBlockTextures()

    gui.add(
        { time: world.time },
        'time',
        0,
        world.options.timePerDay,
        0.01,
    ).onFinishChange((time) => {
        world.time = time
    })
    world.time = 0.5 * 24_000

    await voiceChat()

    events.on('stuff', (payload) => {
        console.log('stuff', payload)
    })
    events.emit('stuff', 'hello')
}
