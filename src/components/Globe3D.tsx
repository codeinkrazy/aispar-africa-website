
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  return (
    <Sphere ref={meshRef} args={[2, 64, 64]} position={[0, 0, 0]}>
      <meshStandardMaterial
        color="#1a1a2e"
        wireframe={true}
        emissive="#00F0FF"
        emissiveIntensity={0.2}
      />
    </Sphere>
  );
};

const Globe3D = () => {
  return (
    <div className="w-full h-96">
      <Suspense fallback={<div className="w-full h-96 bg-card/30 rounded-lg animate-pulse" />}>
        <Canvas 
          camera={{ position: [0, 0, 8], fov: 45 }}
          gl={{ 
            alpha: true, 
            antialias: true,
            powerPreference: "high-performance"
          }}
          onCreated={({ gl }) => {
            gl.setClearColor('#000000', 0);
          }}
        >
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00F0FF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF00F5" />
          <AnimatedGlobe />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={1}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Globe3D;
