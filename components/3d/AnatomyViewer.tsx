'use client';

import { useRef, Suspense, useCallback } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import { ModelStage } from './ModelStage';
import { ProceduralAnimalModel } from './ProceduralAnimalModel';
import { CameraController } from './CameraController';
import { ViewportControls } from './ViewportControls';
import { useAnatomyStore } from '../../store/useAnatomyStore';

export function AnatomyViewer() {
  const controlsRef = useRef<any>(null);
  const autoRotate = useAnatomyStore((state) => state.autoRotate);
  const isDarkMode = useAnatomyStore((state) => state.isDarkMode);

  // Camera preset handler
  const handleCameraPreset = useCallback(
    (preset: 'lateral_left' | 'lateral_right' | 'cranial' | 'dorsal') => {
      if (!controlsRef.current) return;
      const controls = controlsRef.current;
      const camera = controls.object;

      switch (preset) {
        case 'lateral_left':
          camera.position.set(3.5, 0.5, 0);
          controls.target.set(0, 0.4, 0);
          break;
        case 'lateral_right':
          camera.position.set(-3.5, 0.5, 0);
          controls.target.set(0, 0.4, 0);
          break;
        case 'cranial':
          camera.position.set(0, 0.8, 3.8);
          controls.target.set(0, 0.5, 0);
          break;
        case 'dorsal':
          camera.position.set(0, 4.2, 0.1);
          controls.target.set(0, 0.3, 0);
          break;
      }
      controls.update();
    },
    []
  );

  return (
    <div className="relative w-full h-full min-h-[500px] overflow-hidden rounded-2xl border border-slate-700/50 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl">
      {/* 3D Canvas */}
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true }}
        camera={{ position: [2.8, 1.8, 3.2], fov: 45, near: 0.1, far: 50 }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={null}>
          <ModelStage />
          <ProceduralAnimalModel />
          <CameraController controlsRef={controlsRef} />
          <OrbitControls
            ref={controlsRef}
            enableDamping
            dampingFactor={0.06}
            minDistance={0.8}
            maxDistance={8}
            maxPolarAngle={Math.PI / 2 + 0.1}
            autoRotate={autoRotate}
            autoRotateSpeed={1.2}
          />
        </Suspense>
      </Canvas>

      {/* Floating HUD Controls */}
      <ViewportControls onSetCameraPreset={handleCameraPreset} />

      {/* Subtle Medical Grid Watermark / Orientation Cue */}
      <div className="absolute bottom-3 right-3 pointer-events-none flex items-center gap-2 px-2.5 py-1 rounded-lg bg-slate-900/60 backdrop-blur-sm border border-slate-800 text-[10px] text-slate-400 font-mono">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
        <span>R3F Realtime Engine • 60 FPS</span>
      </div>
    </div>
  );
}
