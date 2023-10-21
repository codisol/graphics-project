import * as THREE from 'three'

let canvas = document.getElementById("projek")
let renderer = new THREE.WebGLRenderer({canvas})
renderer.setSize(window.innerWidth, window.innerHeight, false)

let scene = new THREE.Scene()
let camera = new THREE.PerspectiveCamera(
    90,
    window.innerWidth / window.innerHeight,
    0.1,
    100
)

function generateAnimationCallback() {
    const MILLIS_IN_SECONDS = 1_000
    return (time) => {
        time /= MILLIS_IN_SECONDS

        renderer.render(scene, camera)
    }
}

renderer.setAnimationLoop(generateAnimationCallback()) // similar to requestAnimationFrame()
