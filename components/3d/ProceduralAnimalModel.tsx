'use client';

import { useMemo } from 'react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { ORGANS_DATA } from '../../data/organsData';
import { OrganMesh } from './OrganMesh';

export function ProceduralAnimalModel() {
  const activeSpecies = useAnatomyStore((state) => state.activeSpecies);
  const layerPeelingDepth = useAnatomyStore((state) => state.layerPeelingDepth);
  const isIsolatedMode = useAnatomyStore((state) => state.isIsolatedMode);

  // Filter organs relevant to the active species
  const speciesOrgans = useMemo(() => {
    return ORGANS_DATA.filter((organ) => organ.species.includes(activeSpecies));
  }, [activeSpecies]);

  // Skin contour visibility: visible when peeling depth is low (<= 35%)
  const showBodyContour = !isIsolatedMode && layerPeelingDepth <= 35;

  return (
    <group position={[0, 0, 0]}>
      {/* Translucent Body Contour / Surface Envelope */}
      {showBodyContour && (
        <group>
          {/* Main Thoracoabdominal Trunk Contour */}
          <mesh position={[0, 0.45, 0]}>
            <capsuleGeometry args={[0.7, 1.6, 16, 32]} />
            <meshStandardMaterial
              color="#38bdf8"
              transparent
              opacity={0.12}
              roughness={0.6}
              depthWrite={false}
            />
          </mesh>

          {/* Cranial / Head Contour */}
          <mesh position={[0, 0.9, 1.25]} rotation={[0.2, 0, 0]}>
            <sphereGeometry args={[0.48, 24, 24]} />
            <meshStandardMaterial
              color="#38bdf8"
              transparent
              opacity={0.1}
              roughness={0.6}
              depthWrite={false}
            />
          </mesh>
        </group>
      )}

      {/* Structural Rib Cage Arches (Bilateral Anatomical Costae) */}
      {!isIsolatedMode && layerPeelingDepth >= 35 && (
        <group position={[0, 0.5, 0.1]}>
          {[-0.6, -0.4, -0.2, 0, 0.2, 0.4, 0.6].map((z, idx) => (
            <mesh key={`rib_${idx}`} position={[0, 0, z]} rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.55 + Math.sin(idx * 0.5) * 0.08, 0.022, 12, 32, Math.PI * 1.8]} />
              <meshStandardMaterial
                color="#cbd5e1"
                roughness={0.5}
                metalness={0.1}
                transparent={isIsolatedMode}
                opacity={isIsolatedMode ? 0.08 : 0.85}
              />
            </mesh>
          ))}
        </group>
      )}

      {/* Render all interactive raycastable organs */}
      {speciesOrgans.map((organ) => (
        <OrganMesh key={organ.id} organ={organ} />
      ))}
    </group>
  );
}
