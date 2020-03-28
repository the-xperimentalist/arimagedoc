
import { Scene, PerspectiveCamera, WebGLRenderer } from 'three'
import { initEarth } from './meshes/earth'
import { initLight } from './prerequisites/light'

var scene, camera, renderer
var earthRotY = 0
var earthMesh = initEarth()
var light = initLight()

function initScene ( width, height ) {
  scene = new Scene()

  camera = new PerspectiveCamera( 45, width / height, 0.1, 1000 )
  camera.position.set(0, 0, 400)

  renderer = new WebGLRenderer({ antialias: true, alpha: true })
  renderer.setSize(width, height)
  renderer.shadowMap.enabled = true
  document.body.appendChild(renderer.domElement)
}

function update() {
  earthRotY += 0.007
  earthMesh.rotation.y = earthRotY
}

function render() {
  update()
  renderer.setClearColor(0x000000, 0)
  renderer.render(scene, camera)

  requestAnimationFrame(render)
}

document.addEventListener("DOMContentLoaded", function (e) {

  initScene( window.innerWidth, window.innerHeight )
  scene.add( earthMesh )
  scene.add( light )

  requestAnimationFrame(render)
})
