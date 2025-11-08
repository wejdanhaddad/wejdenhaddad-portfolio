// src/components/Hero.jsx
import React from 'react'
import { Canvas } from '@react-three/fiber'
import { Environment, Lightformer, Float } from '@react-three/drei'
import { useMediaQuery } from 'react-responsive'
import AnimatedHeaderSection from '../components/AnimatedHeaderSection'
import Butterfly from '../components/Butterfly'
import FollowCursorButterfly from '../components/FollowCursorButterfly'


const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 })
  const text = `I help growing brands and startups gain an
unfair advantage through premium
results driven webs/apps`

  return (
    <section
      id="home"
      className="relative flex flex-col justify-end min-h-screen"
      style={{
        backgroundImage: "url('assets/backgrounds/bbg.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* TEXT ABOVE 3D */}
      <div className="relative z-20">
        <AnimatedHeaderSection
          subTitle={'Digital Dreamscapes & Web Creations'}
          title={'Wejden Haddad'}
          text={text}
          textColor={'text-white'}
        />
      </div>
      {/* Canvas positioned between bg and text */}
      <Canvas
        shadows
        camera={{ position: [1, 2, 2], fov: 30, near: 0.1, far: 50 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 10,
          pointerEvents: 'none',
          background: 'transparent',
        }}
        gl={{ alpha: true }}
      >
        {/* ambientLight must be positive */}
        <ambientLight intensity={-2} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Float speed={3} rotationIntensity={1.5} floatIntensity={1}>
          <Butterfly scale={0.45} position={[0, 0, 0]} />
          <Butterfly scale={0.38} position={[2, 1, 0]} />
          <Butterfly scale={0.35} position={[-2, -1, 0]} />
          <Butterfly scale={0.4} position={[1.5, -2, 1]} />
          <Butterfly scale={0.34} position={[-1.5, 1.5, -1]} />
</Float>
{/* Interactive butterfly following cursor */}
<FollowCursorButterfly />
        <Environment resolution={1080}>
          <group rotation={[-Math.PI / 3, 4, 1]}>
            <Lightformer form="ring" intensity={1.2} position={[0, 4, -5]} scale={15} />
            <Lightformer form="ring" intensity={2} position={[0, 3, 1]} scale={10} />
            <Lightformer form="ring" intensity={2} position={[-5, -1, -1]} scale={10} />
            <Lightformer form="ring" intensity={2} position={[10, 1, 0]} scale={16} />
          </group>
        </Environment>
      </Canvas>
    </section>
  )
}

export default Hero
