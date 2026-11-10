'use client';

import { ContactShadows } from '@react-three/drei';
import { useAnatomyStore } from '../../store/useAnatomyStore';

export function ModelStage() {
  const isDarkMode = useAnatomyStore((state) => state.isDarkMode);

  return (
    <>
      {/* Ambient & Hemisphere Lighting */}
      <ambientLight intensity={isDarkMode ? 0.6 : 0.8} />
      <hemisphereLight
        args={[
          isDarkMode ? '#38bdf8' : '#e0f2fe',
          isDarkMode ? '#0f172a' : '#f1f5f9',
          isDarkMode ? 0.5 : 0.7,
        ]}
      />

      {/* Primary Key Light */}
      <directionalLight
        position={[5, 8, 5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-near={0.5}
        shadow-camera-far={25}
        shadow-camera-left={-4}
        shadow-camera-right={4}
        shadow-camera-top={4}
        shadow-camera-bottom={-4}
        shadow-bias={-0.0001}
      />

      {/* Soft Fill Light */}
      <directionalLight position={[-5, 4, -5]} intensity={0.5} color="#818cf8" />

      {/* Medical Blue/Cyan Rim Light to highlight organ edges */}
      <spotLight
        position={[0, 6, -6]}
        intensity={0.8}
        color="#38bdf8"
        angle={0.6}
        penumbra={0.8}
      />

      {/* Soft Ground Contact Shadows */}
      <ContactShadows
        position={[0, -0.65, 0]}
        opacity={isDarkMode ? 0.6 : 0.3}
        scale={6}
        blur={2}
        far={3}
      />

      {/* Grid Floor */}
      <gridHelper
        args={[10, 20, isDarkMode ? '#0284c7' : '#94a3b8', isDarkMode ? '#1e293b' : '#e2e8f0']}
        position={[0, -0.66, 0]}
      />
    </>
  );
}
