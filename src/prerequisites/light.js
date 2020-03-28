
import { SpotLight } from 'three'

export function initLight () {
  var light = new SpotLight(0xffffff)

  light.position.set(400, 100, 1000)
  light.castShadow = true

  return light
}
