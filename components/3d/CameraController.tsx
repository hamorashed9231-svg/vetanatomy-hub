'use client';

import { useRef, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { ORGANS_DATA } from '../../data/organsData';

interface CameraControllerProps {
  controlsRef: React.RefObject<any>;
}

export function CameraController({ controlsRef }: CameraControllerProps) {
  const { camera } = useThree();
  const selectedOrganId = useAnatomyStore((state) => state.selectedOrganId);
  const isIsolatedMode = useAnatomyStore((state) => state.isIsolatedMode);
  const cameraResetNonce = useAnatomyStore((state) => state.cameraResetNonce);

  // Default home camera orientation
  const homePosition = useRef(new THREE.Vector3(2.8, 1.8, 3.2));
  const homeTarget = useRef(new THREE.Vector3(0, 0.4, 0));

  // Current animation target vectors
  const targetCameraPos = useRef(homePosition.current.clone());
  const targetLookAt = useRef(homeTarget.current.clone());
  const isTransitioning = useRef(false);

  // When selected organ or isolation changes, compute new camera destination
  useEffect(() => {
    if (selectedOrganId && isIsolatedMode) {
      const organ = ORGANS_DATA.find((o) => o.id === selectedOrganId);
      if (organ) {
        const [ox, oy, oz] = organ.position;
        // Target look-at is directly centered on the organ
        targetLookAt.current.set(ox, oy, oz);
        
        // Target camera position: offset from organ for optimal close-up angled inspection
        const distance = 1.35;
        targetCameraPos.current.set(
          ox + distance * 0.7,
          oy + distance * 0.5,
          oz + distance * 0.8
        );
        isTransitioning.current = true;
      }
    } else if (!isIsolatedMode) {
      // Return smoothly to overview
      targetCameraPos.current.copy(homePosition.current);
      targetLookAt.current.copy(homeTarget.current);
      isTransitioning.current = true;
    }
  }, [selectedOrganId, isIsolatedMode]);

  // When reset trigger fires
  useEffect(() => {
    if (cameraResetNonce > 0) {
      targetCameraPos.current.copy(homePosition.current);
      targetLookAt.current.copy(homeTarget.current);
      isTransitioning.current = true;
    }
  }, [cameraResetNonce]);

  // Smooth frame-by-frame interpolation using lerp
  useFrame((_, delta) => {
    if (!isTransitioning.current) return;

    // Smooth lerp speed factor (delta adjusted for 60fps)
    const lerpFactor = Math.min(1, delta * 3.8);

    camera.position.lerp(targetCameraPos.current, lerpFactor);

    if (controlsRef.current) {
      controlsRef.current.target.lerp(targetLookAt.current, lerpFactor);
      controlsRef.current.update();
    }

    // Check if transition is close enough to rest
    const posDist = camera.position.distanceTo(targetCameraPos.current);
    const targetDist = controlsRef.current
      ? controlsRef.current.target.distanceTo(targetLookAt.current)
      : 0;

    if (posDist < 0.01 && targetDist < 0.01) {
      camera.position.copy(targetCameraPos.current);
      if (controlsRef.current) {
        controlsRef.current.target.copy(targetLookAt.current);
      }
      isTransitioning.current = false;
    }
  });

  return null;
}
