import * as THREE from 'three'
import { Piece } from './piece.js'

const canvas = document.getElementById("projek")
const renderer = new THREE.WebGLRenderer({canvas, antialias: true})
renderer.setSize(window.innerWidth, window.innerHeight, false)

const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.1,
    100
)
camera.position.set(0, 0, 60)

const game = new THREE.Group()
scene.add(game)

function createMesh(geometry, material) {
    const mesh = new THREE.Mesh(geometry, material)
    game.add(mesh)
    return mesh
}

const grid = []
for (let i = 0; i < 9; i++) {
    grid.push([])
    for (let j = 0; j < 9; j++) grid[i].push(null)
}

const board = []
for (let i = 0; i < 9; i++) {
    grid.push([])
    for (let j = 0; j < 9; j++) {
        const mesh = createMesh(
            new THREE.BoxGeometry(4.5, 4.5, 5),
            new THREE.MeshBasicMaterial({color: 0xffff00})
        )
        mesh.position.set(j*5, i*5, 0)
        grid.push()
    }
}

const raycaster = new THREE.Raycaster()
const pointer = new THREE.Vector2()

function resizeRenderer() {
    const needResize = canvas.width != canvas.clientWidth || canvas.height != canvas.clientHeight
    if (needResize) renderer.setSize(canvas.clientWidth, canvas.clientHeight, false)
    return needResize
}

function generateAnimationCallback() {
    const MILLIS_IN_SECONDS = 1_000
    return (time) => {
        time /= MILLIS_IN_SECONDS

        if (resizeRenderer()) {
            camera.aspect = canvas.clientWidth / canvas.clientHeight
            camera.updateProjectionMatrix()
        }
        renderer.render(scene, camera)
    }
}

renderer.setAnimationLoop(generateAnimationCallback()) // similar to requestAnimationFrame()

window.addEventListener("mousedown", event => {
    pointer.x = 2 * event.clientX / canvas.width - 1,
    pointer.y = -2 * event.clientY / canvas.height + 1
    raycaster.setFromCamera(pointer, camera)
    
    const intersects = raycaster.intersectObjects(scene.children)
    intersects[0].object.material.color.set(0x00ff00)
})
