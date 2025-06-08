
import React, { useRef, Suspense, useState, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Sphere, OrbitControls, Html } from '@react-three/drei';
import * as THREE from 'three';

interface CityData {
  name: string;
  position: [number, number, number];
  projects: number;
  color: string;
}

const cities: CityData[] = [
  { name: "Nairobi", position: [0.8, 0.1, 1.8], projects: 45, color: "#F2C94C" },
  { name: "Lagos", position: [-0.5, 0.6, 1.8], projects: 32, color: "#8A2387" },
  { name: "Johannesburg", position: [0.2, -1.2, 1.6], projects: 28, color: "#00F0FF" },
  { name: "Cairo", position: [0.3, 1.1, 1.7], projects: 21, color: "#F2C94C" },
  { name: "Casablanca", position: [-0.6, 1.3, 1.5], projects: 18, color: "#8A2387" }
];

const CityNode = ({ city, onClick }: { city: CityData; onClick: (city: CityData) => void }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.scale.setScalar(hovered ? 1.5 : 1);
      meshRef.current.material = new THREE.MeshStandardMaterial({
        color: city.color,
        emissive: city.color,
        emissiveIntensity: hovered ? 0.5 : 0.2,
      });
    }
  });

  return (
    <mesh
      ref={meshRef}
      position={city.position}
      onClick={() => onClick(city)}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[0.05, 8, 8]} />
      <meshStandardMaterial color={city.color} emissive={city.color} emissiveIntensity={0.2} />
      {hovered && (
        <Html position={[0, 0.1, 0]} center>
          <div className="bg-card/90 text-white p-2 rounded text-xs backdrop-blur-sm border border-cyber-cyan/20">
            <div className="font-bold">{city.name}</div>
            <div className="text-cyber-cyan">{city.projects} projects</div>
          </div>
        </Html>
      )}
    </mesh>
  );
};

const FlightPath = ({ start, end, delay = 0 }: { start: [number, number, number]; end: [number, number, number]; delay?: number }) => {
  const lineRef = useRef<THREE.BufferGeometry>(null);
  const materialRef = useRef<THREE.LineBasicMaterial>(null);

  useFrame((state) => {
    if (materialRef.current) {
      const time = state.clock.elapsedTime + delay;
      materialRef.current.opacity = 0.3 + Math.sin(time * 2) * 0.2;
    }
  });

  const points = [
    new THREE.Vector3(...start),
    new THREE.Vector3(
      (start[0] + end[0]) / 2,
      (start[1] + end[1]) / 2 + 0.5,
      (start[2] + end[2]) / 2
    ),
    new THREE.Vector3(...end)
  ];

  return (
    <line>
      <bufferGeometry ref={lineRef}>
        <bufferAttribute
          attach="attributes-position"
          count={points.length}
          array={new Float32Array(points.flatMap(p => [p.x, p.y, p.z]))}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial ref={materialRef} color="#8A2387" transparent opacity={0.5} />
    </line>
  );
};

const EarthGlobe = ({ onCityClick }: { onCityClick: (city: CityData) => void }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const africaHighlightRef = useRef<THREE.Mesh>(null);
  const { camera } = useThree();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.1;
    }
    if (africaHighlightRef.current) {
      africaHighlightRef.current.rotation.y += delta * 0.1;
      const material = africaHighlightRef.current.material as THREE.MeshStandardMaterial;
      if (material && material.opacity !== undefined) {
        material.opacity = 0.4 + Math.sin(state.clock.elapsedTime * 1.5) * 0.2;
      }
    }
  });

  return (
    <group>
      {/* Main Earth Sphere */}
      <Sphere ref={meshRef} args={[2, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#1e3a8a"
          roughness={0.8}
          metalness={0.2}
          emissive="#001122"
          emissiveIntensity={0.1}
        />
      </Sphere>
      
      {/* Africa Highlight Layer */}
      <Sphere ref={africaHighlightRef} args={[2.05, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#F2C94C"
          transparent={true}
          opacity={0.5}
          emissive="#F2C94C"
          emissiveIntensity={0.4}
        />
      </Sphere>

      {/* Continents - darker land masses */}
      <Sphere args={[2.02, 32, 32]} position={[0, 0, 0]} rotation={[0, 1.2, 0]}>
        <meshStandardMaterial
          color="#059669"
          roughness={0.9}
          metalness={0.1}
          transparent={true}
          opacity={0.7}
        />
      </Sphere>

      {/* City Nodes */}
      {cities.map((city, index) => (
        <CityNode key={city.name} city={city} onClick={onCityClick} />
      ))}

      {/* Flight Paths */}
      {cities.map((city, index) => 
        cities.slice(index + 1).map((otherCity, otherIndex) => (
          <FlightPath 
            key={`${city.name}-${otherCity.name}`}
            start={city.position}
            end={otherCity.position}
            delay={index + otherIndex}
          />
        ))
      )}

      {/* Atmosphere */}
      <Sphere args={[2.15, 64, 64]} position={[0, 0, 0]}>
        <meshStandardMaterial
          color="#00F0FF"
          transparent={true}
          opacity={0.1}
          side={THREE.BackSide}
        />
      </Sphere>
    </group>
  );
};

const Globe3D = () => {
  const [selectedCity, setSelectedCity] = useState<CityData | null>(null);

  const handleCityClick = useCallback((city: CityData) => {
    setSelectedCity(city);
    setTimeout(() => setSelectedCity(null), 3000);
  }, []);

  return (
    <div className="w-full h-96 relative">
      {selectedCity && (
        <div className="absolute top-4 left-4 z-10 bg-card/90 text-white p-4 rounded-lg backdrop-blur-sm border border-cyber-cyan/20 animate-fade-in">
          <h3 className="font-bold text-cyber-cyan">{selectedCity.name}</h3>
          <p className="text-sm">Active Projects: {selectedCity.projects}</p>
          <p className="text-xs text-gray-300">Supply Chain Operations</p>
        </div>
      )}
      
      <Suspense fallback={<div className="w-full h-96 bg-card/30 rounded-lg animate-pulse" />}>
        <Canvas 
          camera={{ position: [0, 0, 6], fov: 45 }}
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
          <pointLight position={[10, 10, 10]} intensity={1.2} color="#F2C94C" />
          <pointLight position={[-10, -10, -10]} intensity={0.6} color="#8A2387" />
          <pointLight position={[0, 10, 0]} intensity={0.8} color="#00F0FF" />
          
          <EarthGlobe onCityClick={handleCityClick} />
          
          <OrbitControls
            enableZoom={true}
            enablePan={false}
            autoRotate={true}
            autoRotateSpeed={0.3}
            minDistance={4}
            maxDistance={10}
          />
        </Canvas>
      </Suspense>
    </div>
  );
};

export default Globe3D;
