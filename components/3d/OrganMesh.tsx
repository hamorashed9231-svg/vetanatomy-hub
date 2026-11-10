'use client';

import { useRef, useState, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrganDetail } from '../../types/anatomy';
import { useAnatomyStore } from '../../store/useAnatomyStore';

interface OrganMeshProps {
  organ: OrganDetail;
}

export function OrganMesh({ organ }: OrganMeshProps) {
  const meshRef = useRef<THREE.Group>(null);
  const [isHoveredLocal, setIsHoveredLocal] = useState(false);

  const selectedOrganId = useAnatomyStore((state) => state.selectedOrganId);
  const hoveredOrganId = useAnatomyStore((state) => state.hoveredOrganId);
  const isIsolatedMode = useAnatomyStore((state) => state.isIsolatedMode);
  const explodedViewFactor = useAnatomyStore((state) => state.explodedViewFactor);
  const layerPeelingDepth = useAnatomyStore((state) => state.layerPeelingDepth);
  const activeSystem = useAnatomyStore((state) => state.activeSystem);
  const xrayMode = useAnatomyStore((state) => state.xrayMode);
  const wireframeMode = useAnatomyStore((state) => state.wireframeMode);

  const setSelectedOrganId = useAnatomyStore((state) => state.setSelectedOrganId);
  const setHoveredOrganId = useAnatomyStore((state) => state.setHoveredOrganId);
  const isolateOrgan = useAnatomyStore((state) => state.isolateOrgan);

  const isSelected = selectedOrganId === organ.id;
  const isHovered = hoveredOrganId === organ.id || isHoveredLocal;

  // Filter based on active system
  const isSystemVisible = activeSystem === 'all' || activeSystem === organ.system;

  // Filter based on layer peeling depth
  // Skin: 0-25%, Muscle: 25-50%, Organs: 50-75%, Skeleton: 75-100%
  const isLayerVisible = useMemo(() => {
    if (organ.layer === 'skin') return layerPeelingDepth <= 30;
    if (organ.layer === 'muscle') return layerPeelingDepth <= 60;
    if (organ.layer === 'organs') return layerPeelingDepth >= 20;
    if (organ.layer === 'skeleton') return layerPeelingDepth >= 40;
    return true;
  }, [organ.layer, layerPeelingDepth]);

  // Overall visibility
  const shouldRender = isSystemVisible && isLayerVisible;

  // Opacity & Dimming logic for isolation mode
  const { materialOpacity, isDimmed } = useMemo(() => {
    if (!isIsolatedMode) {
      if (xrayMode) return { materialOpacity: 0.35, isDimmed: false };
      return { materialOpacity: 1.0, isDimmed: false };
    }
    if (isSelected) {
      return { materialOpacity: 1.0, isDimmed: false };
    }
    // Dim other non-selected organs in isolation mode
    return { materialOpacity: 0.08, isDimmed: true };
  }, [isIsolatedMode, isSelected, xrayMode]);

  // Dynamic position including exploded view offset
  const computedPosition: [number, number, number] = useMemo(() => {
    const [ox, oy, oz] = organ.position;
    const [ex, ey, ez] = organ.explodedOffset;
    return [
      ox + ex * explodedViewFactor,
      oy + ey * explodedViewFactor,
      oz + ez * explodedViewFactor,
    ];
  }, [organ.position, organ.explodedOffset, explodedViewFactor]);

  // Subtle heartbeat pulse or hover breathing animation
  useFrame(({ clock }) => {
    if (!meshRef.current) return;
    const time = clock.getElapsedTime();

    if (organ.meshType === 'heart') {
      // Realistic double-pulse systolic heartbeat
      const beatCycle = time * 2.8;
      const beat = Math.sin(beatCycle) > 0.7 ? Math.sin(beatCycle * 2) * 0.06 : 0;
      const scaleMultiplier = (isSelected ? 1.08 : 1.0) + beat;
      meshRef.current.scale.set(
        (organ.scale?.[0] || 1) * scaleMultiplier,
        (organ.scale?.[1] || 1) * scaleMultiplier,
        (organ.scale?.[2] || 1) * scaleMultiplier
      );
    } else if (isHovered || isSelected) {
      const breath = Math.sin(time * 3) * 0.02;
      meshRef.current.scale.set(
        (organ.scale?.[0] || 1) * (1 + breath),
        (organ.scale?.[1] || 1) * (1 + breath),
        (organ.scale?.[2] || 1) * (1 + breath)
      );
    }
  });

  if (!shouldRender) return null;

  return (
    <group
      ref={meshRef}
      position={computedPosition}
      rotation={organ.rotation || [0, 0, 0]}
      scale={organ.scale || [1, 1, 1]}
      onClick={(e) => {
        e.stopPropagation();
        setSelectedOrganId(organ.id);
        isolateOrgan(organ.id);
      }}
      onPointerOver={(e) => {
        e.stopPropagation();
        setIsHoveredLocal(true);
        setHoveredOrganId(organ.id);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setIsHoveredLocal(false);
        setHoveredOrganId(null);
        document.body.style.cursor = 'auto';
      }}
    >
      {/* Primary Anatomical Mesh */}
      <mesh castShadow receiveShadow>
        <OrganGeometry meshType={organ.meshType} />
        <meshStandardMaterial
          color={isHovered ? '#38bdf8' : organ.color}
          emissive={
            isSelected
              ? '#06b6d4'
              : isHovered
              ? '#0284c7'
              : organ.emissiveColor || '#000000'
          }
          emissiveIntensity={isSelected ? 0.7 : isHovered ? 0.5 : 0.15}
          roughness={0.35}
          metalness={0.1}
          transparent={materialOpacity < 1.0}
          opacity={materialOpacity}
          wireframe={wireframeMode}
          depthWrite={!isDimmed}
        />
      </mesh>

      {/* Glowing Outline Hull when Hovered or Selected */}
      {(isHovered || isSelected) && !isDimmed && (
        <mesh scale={[1.08, 1.08, 1.08]}>
          <OrganGeometry meshType={organ.meshType} />
          <meshBasicMaterial
            color={isSelected ? '#22d3ee' : '#38bdf8'}
            wireframe
            transparent
            opacity={isSelected ? 0.8 : 0.5}
          />
        </mesh>
      )}
    </group>
  );
}

// Procedural Geometry Builder tailored to each organ's morphology
function OrganGeometry({ meshType }: { meshType: OrganDetail['meshType'] }) {
  switch (meshType) {
    case 'heart':
      return <coneGeometry args={[0.32, 0.55, 32]} />;
    case 'lungs':
      return <cylinderGeometry args={[0.28, 0.42, 0.65, 32]} />;
    case 'liver':
      return <sphereGeometry args={[0.42, 32, 24]} />;
    case 'stomach':
      return <torusGeometry args={[0.3, 0.18, 24, 36, Math.PI * 1.5]} />;
    case 'rumen':
      return <sphereGeometry args={[0.62, 32, 24]} />;
    case 'kidney':
      return <capsuleGeometry args={[0.16, 0.32, 16, 32]} />;
    case 'brain':
      return <sphereGeometry args={[0.38, 32, 28]} />;
    case 'skull':
      return <boxGeometry args={[0.55, 0.45, 0.8]} />;
    case 'spine':
      return <cylinderGeometry args={[0.12, 0.14, 1.8, 24]} />;
    case 'limb':
      return <cylinderGeometry args={[0.08, 0.12, 1.2, 16]} />;
    case 'muscle':
      return <capsuleGeometry args={[0.35, 1.1, 16, 32]} />;
    case 'bladder':
      return <sphereGeometry args={[0.26, 24, 24]} />;
    default:
      return <sphereGeometry args={[0.3, 24, 24]} />;
  }
}
