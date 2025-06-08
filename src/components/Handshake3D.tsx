
import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Box, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const HandshakeModel = () => {
  const leftHandRef = useRef<THREE.Group>(null);
  const rightHandRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (leftHandRef.current && rightHandRef.current) {
      const time = state.clock.elapsedTime;
      leftHandRef.current.rotation.z = Math.sin(time * 0.5) * 0.1;
      rightHandRef.current.rotation.z = -Math.sin(time * 0.5) * 0.1;
      leftHandRef.current.position.y = Math.sin(time * 0.8) * 0.05;
      rightHandRef.current.position.y = -Math.sin(time * 0.8) * 0.05;
    }
  });

  return (
    <group>
      {/* Left Hand */}
      <group ref={leftHandRef} position={[-1.5, 0, 0]}>
        {/* Forearm */}
        <Box args={[0.3, 0.3, 1.5]} position={[0, 0, -0.75]}>
          <meshStandardMaterial color="#8B4513" />
        </Box>
        {/* Hand */}
        <Box args={[0.4, 0.2, 0.6]} position={[0, 0, 0.3]}>
          <meshStandardMaterial color="#D4A574" />
        </Box>
        {/* Fingers */}
        <Box args={[0.08, 0.08, 0.3]} position={[-0.15, 0, 0.65]}>
          <meshStandardMaterial color="#D4A574" />
        </Box>
        <Box args={[0.08, 0.08, 0.3]} position={[-0.05, 0, 0.7]}>
          <meshStandardMaterial color="#D4A574" />
        </Box>
        <Box args={[0.08, 0.08, 0.3]} position={[0.05, 0, 0.7]}>
          <meshStandardMaterial color="#D4A574" />
        </Box>
        <Box args={[0.08, 0.08, 0.3]} position={[0.15, 0, 0.65]}>
          <meshStandardMaterial color="#D4A574" />
        </Box>
      </group>

      {/* Right Hand */}
      <group ref={rightHandRef} position={[1.5, 0, 0]} rotation={[0, Math.PI, 0]}>
        {/* Forearm */}
        <Box args={[0.3, 0.3, 1.5]} position={[0, 0, -0.75]}>
          <meshStandardMaterial color="#2F4F4F" />
        </Box>
        {/* Hand */}
        <Box args={[0.4, 0.2, 0.6]} position={[0, 0, 0.3]}>
          <meshStandardMaterial color="#8B7355" />
        </Box>
        {/* Fingers */}
        <Box args={[0.08, 0.08, 0.3]} position={[-0.15, 0, 0.65]}>
          <meshStandardMaterial color="#8B7355" />
        </Box>
        <Box args={[0.08, 0.08, 0.3]} position={[-0.05, 0, 0.7]}>
          <meshStandardMaterial color="#8B7355" />
        </Box>
        <Box args={[0.08, 0.08, 0.3]} position={[0.05, 0, 0.7]}>
          <meshStandardMaterial color="#8B7355" />
        </Box>
        <Box args={[0.08, 0.08, 0.3]} position={[0.15, 0, 0.65]}>
          <meshStandardMaterial color="#8B7355" />
        </Box>
      </group>

      {/* Connection/Shake Effect */}
      <Box args={[0.2, 0.2, 0.2]} position={[0, 0, 0.3]}>
        <meshStandardMaterial 
          color="#00F0FF" 
          emissive="#00F0FF"
          emissiveIntensity={0.5}
          transparent={true}
          opacity={0.7}
        />
      </Box>
    </group>
  );
};

const Handshake3D = () => {
  return (
    <div className="w-full h-80">
      <Suspense fallback={<div className="w-full h-80 bg-card/30 rounded-lg animate-pulse" />}>
        <Canvas 
          camera={{ position: [0, 2, 6], fov: 60 }}
          gl={{ 
            alpha: true, 
            antialias: true 
          }}
        >
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={1} color="#00F0FF" />
          <directionalLight position={[-10, -10, -5]} intensity={0.5} color="#FF00F5" />
          <HandshakeModel />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={2}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Handshake3D;
