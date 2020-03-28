
import { MeshLambertMaterial, SphereGeometry, Mesh } from 'three'

export function initEarth () {
  var earthMaterial = new MeshLambertMaterial({ color: 0xfd59d7 })

  var earthGeometry = new SphereGeometry( 25, 16, 16 )
  var earthMesh = new Mesh( earthGeometry, earthMaterial )
  earthMesh.receiveShadow = true
  earthMesh.castShadow = true

  console.log("Here in earth")

  return earthMesh
}
