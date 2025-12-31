import { useRef } from "react"
import { useFrame } from "@react-three/fiber"
import * as THREE from "three"
import { number } from "framer-motion"

//TODO: implement firelight

export default function FireLight({ position = [0, 1, 0] }) {
  const lightRef = useRef()
  useFrame(({ clock }) => {
    if (!lightRef.current) return

    const t = clock.elapsedTime

    // base intensity + flicker
    lightRef.current.intensity =
      0.4 + Math.sin(t * 8) * 0.05 + Math.random() * 0.03
  })

  return (
    <pointLight
      ref={lightRef}
      position={position}
      color="#ff9b55"
      intensity={200}
      distance={10}
      decay={2}
      castShadow
    />
  )
}
