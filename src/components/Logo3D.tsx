
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Logo3DText = () => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Text
      ref={meshRef}
      font="/fonts/Inter-Bold.woff"
      fontSize={1}
      color="#00F0FF"
      anchorX="center"
      anchorY="middle"
      position={[0, 0, 0]}
    >
      AISPAR
      <meshStandardMaterial
        color="#00F0FF"
        emissive="#FF00F5"
        emissiveIntensity={0.3}
        metalness={0.8}
        roughness={0.2}
      />
    </Text>
  );
};

const Logo3D = () => {
  return (
    <div className="w-64 h-64">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#00F0FF" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#FF00F5" />
        <Logo3DText />
        <OrbitControls enableZoom={false} enablePan={false} />
      </Canvas>
    </div>
  );
};

export default Logo3D;
