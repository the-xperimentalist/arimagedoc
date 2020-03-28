
import { MeshLambertMaterial, SphereGeometry, Mesh } from 'three'

export function initmoon () {
  var moonMaterial = new MeshLambertMaterial({ color: 0xfd59d7 })

  var moonGeometry = new SphereGeometry( 25, 16, 16 )
  var moonMesh = new Mesh( moonGeometry, moonMaterial )
  moonMesh.receiveShadow = true
  moonMesh.castShadow = true

  console.log("Here in moon")

  return moonMesh
}
