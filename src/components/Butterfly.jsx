import React, { useRef, useEffect, useMemo, forwardRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from 'three'
import gsap from 'gsap'

const Butterfly = forwardRef(({ scale = 0.4, follow = false, ...props }, ref) => {
  const internalRef = useRef(null)
  const modelRef = ref || internalRef // support both internal + forwarded refs

  const gltf = useGLTF('/models/animated_butterfly.glb')
  const { scene, animations } = gltf

  const clonedScene = useMemo(() => SkeletonUtils.clone(scene), [scene])
  const { actions, mixer } = useAnimations(animations, modelRef)

  // 🦋 Start the flap animation
  useEffect(() => {
    if (!actions) return
    Object.values(actions).forEach((action) => {
      action.reset().play()
      action.setLoop(THREE.LoopRepeat)
    })
    return () => mixer?.stopAllAction()
  }, [actions, mixer])

  // 🌀 Natural glide motion (disabled if it's following the cursor)
  useEffect(() => {
    if (follow) return // skip glide when controlled externally

    let mounted = true
    const glide = () => {
      if (!mounted || !modelRef.current) return
      gsap.to(modelRef.current.position, {
        x: (Math.random() - 0.5) * 6,
        y: (Math.random() - 0.5) * 3,
        z: (Math.random() - 0.3) * 2,
        duration: 6 + Math.random() * 3,
        ease: 'power2.inOut',
        onComplete: glide,
      })
    }

    if (modelRef.current) {
      modelRef.current.position.set(
        (Math.random() - 0.5) * 6,
        (Math.random() - 0.5) * 3,
        (Math.random() - 0.5) * 2
      )
    }

    glide()
    return () => {
      mounted = false
    }
  }, [follow, modelRef])

  return <primitive ref={modelRef} object={clonedScene} {...props} scale={scale} />
})

export default Butterfly
useGLTF.preload('/models/animated_butterfly.glb')
