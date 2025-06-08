
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';
import { TextureLoader } from 'three';
import * as THREE from 'three';

const EarthGlobe = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const africaHighlightRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.2;
    }
    if (africaHighlightRef.current) {
      africaHighlightRef.current.rotation.y += delta * 0.2;
      africaHighlightRef.current.material.opacity = 0.3 + Math.sin(state.clock.elapsedTime * 2) * 0.2;
    }
  });

  return (
    <group>
      {/* Main Earth Sphere */}
      <Sphere ref={meshRef} args={[2, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#1a4c96"
          roughness={0.8}
          metalness={0.2}
          emissive="#001122"
          emissiveIntensity={0.1}
        />
      </Sphere>
      
      {/* Africa Highlight Layer */}
      <Sphere ref={africaHighlightRef} args={[2.05, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#00F0FF"
          transparent={true}
          opacity={0.4}
          emissive="#00F0FF"
          emissiveIntensity={0.3}
          wireframe={false}
        />
      </Sphere>

      {/* Continents representation */}
      <Sphere args={[2.02, 32, 32]} position={[0, 0, 0]} rotation={[0, 1, 0]}>
        <meshStandardMaterial
          color="#2d5016"
          roughness={0.9}
          metalness={0.1}
          transparent={true}
          opacity={0.8}
        />
      </Sphere>
    </group>
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
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00F0FF" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF00F5" />
          <pointLight position={[0, 10, 0]} intensity={0.8} color="#FFFF66" />
          <EarthGlobe />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Globe3D;
