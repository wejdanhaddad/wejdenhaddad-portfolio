import React, { useRef, useEffect, useState } from 'react'
import { useFrame } from '@react-three/fiber'
import Butterfly from './Butterfly'

export default function FollowCursorButterfly() {
  const butterflyRef = useRef()
  const [mouse, setMouse] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1
      const y = -(e.clientY / window.innerHeight) * 2 + 1
      setMouse({ x, y })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useFrame(() => {
    if (!butterflyRef.current) return
    const targetX = mouse.x * 3
    const targetY = mouse.y * 2

    butterflyRef.current.position.x += (targetX - butterflyRef.current.position.x) * 0.05
    butterflyRef.current.position.y += (targetY - butterflyRef.current.position.y) * 0.05
    butterflyRef.current.position.z = Math.sin(performance.now() * 0.002) * 0.5
    butterflyRef.current.rotation.y += (mouse.x - butterflyRef.current.rotation.y) * 0.05
  })

  return <Butterfly ref={butterflyRef} scale={0.45} follow />
}
