'use client';

import React, { useRef, Suspense, useMemo, useState, useEffect, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, ContactShadows, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { 
  UploadCloud, 
  Camera, 
  Crosshair, 
  CheckCircle2, 
  Layers, 
  Sparkles, 
  FileBox, 
  RotateCcw,
  Eye,
  Maximize2
} from 'lucide-react';

const DRACO_DECODER_PATH = 'https://www.gstatic.com/draco/versioned/decoders/1.5.7/';

export interface ParsedMeshInfo {
  name: string;
  organId: string;
  vertexCount: number;
  faceCount: number;
  center: [number, number, number];
  size: [number, number, number];
  isLinked: boolean;
  color?: string;
}

export interface StudioViewerProps {
  modelUrl: string;
  selectedMeshName: string | null;
  onSelectMesh: (mesh: ParsedMeshInfo) => void;
  onMeshesParsed: (meshes: ParsedMeshInfo[]) => void;
  onCaptureCoordinates: (coords: { position: [number, number, number]; target: [number, number, number] }) => void;
  linkedMeshIds: Record<string, any>;
  onFileUpload: (file: File) => void;
}

export function StudioViewer({
  modelUrl,
  selectedMeshName,
  onSelectMesh,
  onMeshesParsed,
  onCaptureCoordinates,
  linkedMeshIds,
  onFileUpload,
}: StudioViewerProps) {
  const controlsRef = useRef<any>(null);
  const [isDragOver, setIsDragOver] = useState(false);
  const [copiedToast, setCopiedToast] = useState(false);
  const [liveCamera, setLiveCamera] = useState({
    pos: [2.8, 1.8, 3.2] as [number, number, number],
    target: [0, 0.4, 0] as [number, number, number],
  });

  // Handle Drag & Drop of Blender .glb files
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      const file = e.dataTransfer.files[0];
      if (file.name.toLowerCase().endsWith('.glb') || file.name.toLowerCase().endsWith('.gltf')) {
        onFileUpload(file);
      }
    }
  };

  const handleCaptureFocus = () => {
    if (!controlsRef.current) return;
    const controls = controlsRef.current;
    const camera = controls.object;

    const px = parseFloat(camera.position.x.toFixed(2));
    const py = parseFloat(camera.position.y.toFixed(2));
    const pz = parseFloat(camera.position.z.toFixed(2));

    const tx = parseFloat(controls.target.x.toFixed(2));
    const ty = parseFloat(controls.target.y.toFixed(2));
    const tz = parseFloat(controls.target.z.toFixed(2));

    onCaptureCoordinates({
      position: [px, py, pz],
      target: [tx, ty, tz],
    });

    setCopiedToast(true);
    setTimeout(() => setCopiedToast(false), 2200);
  };

  return (
    <div
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`relative w-full h-[620px] rounded-2xl border ${
        isDragOver
          ? 'border-cyan-400 bg-cyan-950/20'
          : 'border-slate-800 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950'
      } overflow-hidden shadow-2xl transition-all duration-200`}
    >
      {/* 3D WebGL Canvas */}
      <Canvas
        shadows
        gl={{ antialias: true, alpha: true, preserveDrawingBuffer: true, powerPreference: 'high-performance' }}
        camera={{ position: [2.8, 1.8, 3.2], fov: 45, near: 0.1, far: 50 }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={<StudioLoadingSpinner />}>
          <ambientLight intensity={0.75} />
          <hemisphereLight args={['#38bdf8', '#0f172a', 0.6]} />
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.2}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />
          <directionalLight position={[-5, 4, -5]} intensity={0.5} color="#818cf8" />
          <spotLight position={[0, 6, -6]} intensity={0.8} color="#38bdf8" angle={0.6} penumbra={0.8} />

          {/* Dynamic Scene Inspector & Interactive Mesh Resolver */}
          <SceneMeshInspector
            key={modelUrl}
            modelUrl={modelUrl}
            selectedMeshName={selectedMeshName}
            onSelectMesh={onSelectMesh}
            onMeshesParsed={onMeshesParsed}
            linkedMeshIds={linkedMeshIds}
          />

          <StudioCameraTracker
            controlsRef={controlsRef}
            onUpdateCamera={(pos, target) => setLiveCamera({ pos, target })}
          />

          <OrbitControls
            ref={controlsRef}
            enableDamping
            dampingFactor={0.06}
            minDistance={0.5}
            maxDistance={12}
            maxPolarAngle={Math.PI / 2 + 0.1}
          />

          <ContactShadows position={[0, -0.65, 0]} opacity={0.5} scale={6.5} blur={2} far={3} />
          <gridHelper args={[10, 20, '#0284c7', '#1e293b']} position={[0, -0.66, 0]} />
        </Suspense>
      </Canvas>

      {/* Drag & Drop Visual Indicator Overlay */}
      {isDragOver && (
        <div className="absolute inset-0 z-30 flex flex-col items-center justify-center bg-cyan-950/75 backdrop-blur-sm border-2 border-dashed border-cyan-400 p-6 text-center animate-in fade-in">
          <UploadCloud className="h-16 w-16 text-cyan-400 animate-bounce mb-3" />
          <h3 className="text-lg font-bold text-white">Drop Blender .GLB Model Here</h3>
          <p className="text-xs text-cyan-200 mt-1">Automatic scene parsing and mesh verification</p>
        </div>
      )}

      {/* Floating Camera Coordinates HUD & Capture Button */}
      <div className="absolute top-4 right-4 z-20 flex flex-col items-end gap-2">
        <button
          onClick={handleCaptureFocus}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold text-xs shadow-lg shadow-cyan-500/25 transition-all transform active:scale-95 border border-cyan-300/30"
          title="Capture current camera position and target for Organ focusCoordinates"
        >
          <Camera className="h-4 w-4" />
          <span>Capture Camera Focus • التقاط الزاوية</span>
        </button>

        {copiedToast && (
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500/90 text-white text-xs font-medium shadow-lg animate-in fade-in slide-in-from-top-1">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>Captured to focusCoordinates!</span>
          </div>
        )}

        {/* Live Coordinate Display */}
        <div className="bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-lg p-2 text-[10px] font-mono text-slate-300 space-y-0.5">
          <div className="flex items-center justify-between gap-3">
            <span className="text-slate-400">Position:</span>
            <span className="text-cyan-400">
              [{liveCamera.pos[0].toFixed(2)}, {liveCamera.pos[1].toFixed(2)}, {liveCamera.pos[2].toFixed(2)}]
            </span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="text-slate-400">Target:</span>
            <span className="text-emerald-400">
              [{liveCamera.target[0].toFixed(2)}, {liveCamera.target[1].toFixed(2)}, {liveCamera.target[2].toFixed(2)}]
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Model Info Badge */}
      <div className="absolute bottom-3 left-4 z-20 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-950/85 backdrop-blur-md border border-slate-800 text-[11px] text-slate-400 font-mono">
        <FileBox className="h-3.5 w-3.5 text-cyan-400" />
        <span className="truncate max-w-xs">{modelUrl}</span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Scene Mesh Parser & Interactive Raycaster
// -------------------------------------------------------------

function SceneMeshInspector({
  modelUrl,
  selectedMeshName,
  onSelectMesh,
  onMeshesParsed,
  linkedMeshIds,
}: {
  modelUrl: string;
  selectedMeshName: string | null;
  onSelectMesh: (mesh: ParsedMeshInfo) => void;
  onMeshesParsed: (meshes: ParsedMeshInfo[]) => void;
  linkedMeshIds: Record<string, any>;
}) {
  const gltf = useGLTF(modelUrl, DRACO_DECODER_PATH);
  const [hoveredName, setHoveredName] = useState<string | null>(null);

  // Parse scene graph into structured mesh records
  const parsedMeshes = useMemo(() => {
    const list: ParsedMeshInfo[] = [];

    gltf.scene.traverse((child: any) => {
      if (child.isMesh) {
        const meshName = child.name || 'Unnamed_Mesh';
        const organId = child.userData?.organId || meshName;

        // Bounding box calculation
        const box = new THREE.Box3().setFromObject(child);
        const centerVec = new THREE.Vector3();
        const sizeVec = new THREE.Vector3();
        box.getCenter(centerVec);
        box.getSize(sizeVec);

        const vertexCount = child.geometry?.attributes?.position?.count || 0;
        const faceCount = child.geometry?.index
          ? child.geometry.index.count / 3
          : vertexCount / 3;

        // Check if linked in Neon PostgreSQL
        const isLinked = Boolean(linkedMeshIds[organId] || linkedMeshIds[meshName]);

        // Color extraction from material
        let matColor = '#38bdf8';
        if (child.material && !Array.isArray(child.material) && child.material.color) {
          matColor = '#' + child.material.color.getHexString();
        }

        list.push({
          name: meshName,
          organId,
          vertexCount,
          faceCount: Math.round(faceCount),
          center: [
            parseFloat(centerVec.x.toFixed(2)),
            parseFloat(centerVec.y.toFixed(2)),
            parseFloat(centerVec.z.toFixed(2)),
          ],
          size: [
            parseFloat(sizeVec.x.toFixed(2)),
            parseFloat(sizeVec.y.toFixed(2)),
            parseFloat(sizeVec.z.toFixed(2)),
          ],
          isLinked,
          color: matColor,
        });
      }
    });

    return list;
  }, [gltf.scene, linkedMeshIds]);

  // Notify parent of parsed meshes
  useEffect(() => {
    onMeshesParsed(parsedMeshes);
  }, [parsedMeshes, onMeshesParsed]);

  // Clone scene to apply interactive highlight shader
  const clonedScene = useMemo(() => {
    const clone = gltf.scene.clone(true);
    clone.traverse((child: any) => {
      if (child.isMesh && child.material) {
        child.material = Array.isArray(child.material)
          ? child.material.map((m: any) => m.clone())
          : child.material.clone();
      }
    });
    return clone;
  }, [gltf.scene]);

  // Realtime highlight & dimming
  useEffect(() => {
    clonedScene.traverse((child: any) => {
      if (!child.isMesh) return;

      const meshName = child.name;
      const organId = child.userData?.organId || meshName;
      const isSelected = selectedMeshName === meshName || selectedMeshName === organId;
      const isHovered = hoveredName === meshName || hoveredName === organId;

      const materials = Array.isArray(child.material) ? child.material : [child.material];

      materials.forEach((mat: THREE.MeshStandardMaterial) => {
        if (!mat) return;

        if (selectedMeshName) {
          if (isSelected) {
            mat.transparent = false;
            mat.opacity = 1.0;
            mat.emissive = new THREE.Color('#06b6d4');
            mat.emissiveIntensity = 0.85;
            mat.depthWrite = true;
          } else {
            // Ghost unselected meshes to 0.15 opacity
            mat.transparent = true;
            mat.opacity = 0.15;
            mat.depthWrite = false;
            mat.emissive = new THREE.Color('#000000');
            mat.emissiveIntensity = 0;
          }
        } else {
          mat.transparent = false;
          mat.opacity = 1.0;
          mat.depthWrite = true;
          if (isHovered) {
            mat.emissive = new THREE.Color('#0284c7');
            mat.emissiveIntensity = 0.6;
          } else {
            mat.emissive = new THREE.Color('#000000');
            mat.emissiveIntensity = 0.05;
          }
        }
        mat.needsUpdate = true;
      });
    });
  }, [clonedScene, selectedMeshName, hoveredName]);

  return (
    <primitive
      object={clonedScene}
      onClick={(e: any) => {
        e.stopPropagation();
        const mesh = e.object;
        const meshName = mesh.name;
        const found = parsedMeshes.find((m) => m.name === meshName || m.organId === meshName);
        if (found) {
          onSelectMesh(found);
        }
      }}
      onPointerOver={(e: any) => {
        e.stopPropagation();
        setHoveredName(e.object.name);
        document.body.style.cursor = 'pointer';
      }}
      onPointerOut={() => {
        setHoveredName(null);
        document.body.style.cursor = 'auto';
      }}
    />
  );
}

// -------------------------------------------------------------
// Studio Camera Tracker Sub-Component
// -------------------------------------------------------------

function StudioCameraTracker({
  controlsRef,
  onUpdateCamera,
}: {
  controlsRef: React.RefObject<any>;
  onUpdateCamera: (pos: [number, number, number], target: [number, number, number]) => void;
}) {
  const { camera } = useThree();
  const lastUpdate = useRef(0);

  useFrame(({ clock }) => {
    const elapsed = clock.getElapsedTime();
    if (elapsed - lastUpdate.current > 0.1) {
      // Throttle updates to ~10 Hz for smooth performance
      lastUpdate.current = elapsed;
      const target = controlsRef.current?.target;
      if (target) {
        onUpdateCamera(
          [camera.position.x, camera.position.y, camera.position.z],
          [target.x, target.y, target.z]
        );
      }
    }
  });

  return null;
}

function StudioLoadingSpinner() {
  return (
    <mesh position={[0, 0.4, 0]}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial color="#0284c7" wireframe transparent opacity={0.3} />
    </mesh>
  );
}
