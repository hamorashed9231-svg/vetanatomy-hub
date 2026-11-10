'use client';

import React, { useRef, Suspense, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, ContactShadows, useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import { 
  Layers, 
  Focus, 
  RotateCcw, 
  Eye, 
  EyeOff, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Heart, 
  Coffee, 
  Wind, 
  Brain, 
  Bone, 
  Activity, 
  GraduationCap, 
  Lock, 
  Flame, 
  Award, 
  Sliders, 
  Split,
  Scissors,
  Bookmark,
  Tag,
  HardDriveDownload
} from 'lucide-react';
import { LayerPeelingControls } from './LayerPeelingControls';
import { CrossSectionControls } from './CrossSectionControls';
import { AnatomicalPins } from './AnatomicalPins';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { 
  getOrgansBySpeciesAndSystem, 
  getSpeciesProfile, 
  getOrganById,
  SYSTEMS_REGISTRY
} from '../../data/anatomyRegistry';
import { OrganPart, SpeciesId, AnatomicalSystemId } from '../../types/anatomy';
import { resolveGlbModelUrl, getMemoryCachedGlbUrl } from '../../lib/offlineAssetCache';

// Official Google Draco Decoder Endpoint
const DRACO_DECODER_PATH = 'https://www.gstatic.com/draco/versioned/decoders/1.5.7/';

// Progressive multi-system layer rendering stack ordered from superficial to deep
const MULTI_LAYER_STACK: { id: AnatomicalSystemId; strata: 'muscle' | 'vascular' | 'visceral' | 'skeletal' }[] = [
  { id: 'muscular', strata: 'muscle' },
  { id: 'cardiovascular', strata: 'vascular' },
  { id: 'nervous', strata: 'vascular' },
  { id: 'digestive', strata: 'visceral' },
  { id: 'respiratory', strata: 'visceral' },
  { id: 'urogenital', strata: 'visceral' },
  { id: 'skeletal', strata: 'skeletal' },
];

function getComputedLayerOpacity(
  sysId: AnatomicalSystemId,
  strata: 'muscle' | 'vascular' | 'visceral' | 'skeletal',
  depth: number,
  visibility: Record<string, 'visible' | 'ghost' | 'hidden'>
): number {
  const vis = visibility[sysId] || 'visible';
  if (vis === 'hidden') return 0.0;
  if (vis === 'ghost') return 0.20;

  // Progressive depth peeling strata:
  // 1. Muscular System (0% to 25% depth)
  if (strata === 'muscle') {
    return Math.max(0, Math.min(1, 1 - depth / 25));
  }
  // 2. Cardiovascular & Nervous (25% to 50% depth)
  if (strata === 'vascular') {
    if (depth < 25) return 1.0;
    return Math.max(0, Math.min(1, 1 - (depth - 25) / 25));
  }
  // 3. Visceral / Internal Organs (50% to 75% depth)
  if (strata === 'visceral') {
    if (depth < 50) return 1.0;
    return Math.max(0, Math.min(1, 1 - (depth - 50) / 25));
  }
  // 4. Skeletal Framework (75% to 100% depth)
  return 1.0;
}

interface VetCanvasProps {
  speciesId?: SpeciesId;
  systemId?: AnatomicalSystemId;
  className?: string;
  viewportId?: 'main' | 'left' | 'right';
  showLayerPeelingControls?: boolean;
  showHUD?: boolean;
  defaultPeelingOpen?: boolean;
  activeOrganId?: string | null;
  onSelectOrgan?: (organId: string) => void;
  onSelectSystem?: (systemId: AnatomicalSystemId) => void;
}

export function VetCanvas({ 
  speciesId, 
  systemId, 
  className,
  viewportId = 'main',
  showLayerPeelingControls = true,
  showHUD = true,
  defaultPeelingOpen = false,
  activeOrganId,
  onSelectOrgan,
  onSelectSystem,
}: VetCanvasProps) {
  const storeSpecies = useAnatomyStore((state) => state.activeSpecies);
  const storeSystem = useAnatomyStore((state) => state.activeSystem);
  const setStoreSystem = useAnatomyStore((state) => state.setActiveSystem);
  const autoRotate = useAnatomyStore((state) => state.autoRotate);
  const isDarkMode = useAnatomyStore((state) => state.isDarkMode);
  const isExamMode = useAnatomyStore((state) => state.isExamMode);
  const toggleExamMode = useAnatomyStore((state) => state.toggleExamMode);
  const examScore = useAnatomyStore((state) => state.examScore);
  const examStreak = useAnatomyStore((state) => state.examStreak);
  const locale = useAnatomyStore((state) => state.locale);
  const isRtl = locale === 'ar';

  const isMultiLayerPeeling = useAnatomyStore((state) => state.isMultiLayerPeeling);
  const layerPeelingDepth = useAnatomyStore((state) => state.layerPeelingDepth);
  const systemVisibility = useAnatomyStore((state) => state.systemVisibility);
  const [showPeelingControls, setShowPeelingControls] = useState(defaultPeelingOpen);

  const pinDisplayMode = useAnatomyStore((state) => state.pinDisplayMode);
  const cyclePinDisplayMode = useAnatomyStore((state) => state.cyclePinDisplayMode);
  const clippingConfig = useAnatomyStore((state) => state.clippingConfig);
  const [showClippingControls, setShowClippingControls] = useState(false);
  const toggleOfflinePackManager = useAnatomyStore((state) => state.toggleOfflinePackManager);

  // Active species & system (prop override or store)
  const currentSpecies: SpeciesId = speciesId || storeSpecies;
  // If 'all' is selected in store, default the 3D canvas to 'cardiovascular'
  const activeSystemSlug: AnatomicalSystemId = 
    systemId || (storeSystem === 'all' ? 'cardiovascular' : storeSystem);

  const controlsRef = useRef<any>(null);

  // Derive model URL for Draco GLTF loading
  const modelUrl = useMemo(() => {
    return `/models/${currentSpecies}/${activeSystemSlug}.glb`;
  }, [currentSpecies, activeSystemSlug]);

  // Simultaneous multi-system layer rendering stack
  const multiLayerModels = useMemo(() => {
    return MULTI_LAYER_STACK.map((layer) => ({
      systemId: layer.id,
      modelUrl: `/models/${currentSpecies}/${layer.id}.glb`,
      opacity: getComputedLayerOpacity(layer.id, layer.strata, layerPeelingDepth, systemVisibility),
    }));
  }, [currentSpecies, layerPeelingDepth, systemVisibility]);

  return (
    <div className={`relative w-full h-full min-h-[520px] overflow-hidden rounded-2xl border border-slate-700/60 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 shadow-2xl ${className || ''}`}>
      {/* Interactive Organ Layer List & Switcher HUD Overlay (Shown when HUD enabled and not collapsed) */}
      {showHUD && (
        <OrganLayerListOverlay
          currentSpecies={currentSpecies}
          activeSystem={activeSystemSlug}
          onSelectSystem={(sys) => (onSelectSystem ? onSelectSystem(sys) : setStoreSystem(sys))}
          viewportId={viewportId}
          activeOrganId={activeOrganId}
          onSelectOrgan={onSelectOrgan}
        />
      )}

      {/* Top-Right Viewport Controls: Layer Peeling, Exam Mode & HUD */}
      {showHUD && (
        <div className="absolute top-4 right-4 z-20 flex flex-wrap items-center justify-end gap-2 max-w-[calc(100vw-3rem)]">
          {/* 3D Floating Callout Pins Switcher */}
          <button
            onClick={() => cyclePinDisplayMode()}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-md border transition-all shadow-xl ${
              pinDisplayMode !== 'hidden'
                ? 'bg-gradient-to-r from-sky-500/20 to-blue-500/20 text-sky-300 border-sky-400/50 shadow-sky-500/10'
                : 'bg-slate-900/90 hover:bg-slate-800 text-slate-400 border-slate-700/80 hover:text-white'
            }`}
            title={
              isRtl
                ? 'شارات الأعضاء 3D: انقر للتبديل (الكل / عند التحويم / أرقام الاختبار / إخفاء)'
                : '3D Anatomical Pins: Click to cycle (All / Hover / Quiz Numbers / Hidden)'
            }
          >
            <Bookmark size={14} className={pinDisplayMode !== 'hidden' ? 'text-sky-400' : ''} />
            <span className="hidden sm:inline">
              {pinDisplayMode === 'all'
                ? isRtl ? 'الشارات: الكل' : 'Pins: All'
                : pinDisplayMode === 'hover'
                ? isRtl ? 'الشارات: التحويم' : 'Pins: Hover'
                : pinDisplayMode === 'quiz_numbers'
                ? isRtl ? 'الشارات: اختبار #' : 'Pins: Quiz #'
                : isRtl ? 'الشارات: مخفية' : 'Pins: Off'}
            </span>
          </button>

          {/* Real-Time Cross-Section Slicing Plane Toggle */}
          <button
            onClick={() => setShowClippingControls(!showClippingControls)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-md border transition-all shadow-xl ${
              showClippingControls || clippingConfig.enabled
                ? 'bg-gradient-to-r from-rose-500/20 to-pink-500/20 text-rose-300 border-rose-400/50 shadow-rose-500/10'
                : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border-slate-700/80 hover:text-white'
            }`}
            title={isRtl ? 'محرك المقاطع والتشريح الحي 3D' : '3D Cross-Section Slicing Engine'}
          >
            <Scissors size={14} className={showClippingControls || clippingConfig.enabled ? 'text-rose-400' : ''} />
            <span className="hidden sm:inline">{isRtl ? 'المقاطع 3D' : 'Cross-Section'}</span>
          </button>

          {/* Peeling & Exploded View Controls Toggle */}
          <button
            onClick={() => setShowPeelingControls(!showPeelingControls)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-md border transition-all shadow-xl ${
              showPeelingControls || isMultiLayerPeeling
                ? 'bg-gradient-to-r from-teal-500/20 to-cyan-500/20 text-cyan-300 border-cyan-400/50 shadow-cyan-500/10'
                : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border-slate-700/80 hover:text-white'
            }`}
            title={isRtl ? 'محرك التقشير والتفكيك 3D' : '3D Layer Peeling & Exploded View'}
          >
            <Sliders size={14} className={showPeelingControls || isMultiLayerPeeling ? 'text-cyan-400' : ''} />
            <span className="hidden sm:inline">{isRtl ? 'التقشير والتفكيك' : 'Layer Peeling'}</span>
          </button>

          {/* Offline Lab Pack Manager Button */}
          <button
            onClick={() => toggleOfflinePackManager()}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold backdrop-blur-md border border-slate-700/80 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white transition-all shadow-xl hover:border-emerald-500/40"
            title={isRtl ? 'حزم التحميل أوفلاين لمختبر التشريح (IndexedDB Vault)' : 'Offline 3D Lab Packs (IndexedDB Vault)'}
          >
            <HardDriveDownload size={14} className="text-emerald-400" />
            <span className="hidden sm:inline">{isRtl ? 'أوفلاين' : 'Offline'}</span>
          </button>

          {isExamMode && (
            <div className="flex items-center gap-2 bg-slate-950/85 backdrop-blur-md px-3 py-1.5 rounded-xl border border-emerald-500/30 text-xs font-mono shadow-xl">
              <span className="flex items-center gap-1 text-amber-400 font-bold">
                <Flame className="h-3.5 w-3.5 text-amber-500 animate-bounce" />
                <span>{examStreak}</span>
              </span>
              <span className="text-slate-600">|</span>
              <span className="flex items-center gap-1 text-emerald-400 font-bold">
                <Award className="h-3.5 w-3.5 text-emerald-400" />
                <span>{examScore} pts</span>
              </span>
            </div>
          )}

          <button
            onClick={() => toggleExamMode()}
            className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all shadow-xl backdrop-blur-md border ${
              isExamMode
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white border-emerald-400/50 shadow-emerald-500/20'
                : 'bg-slate-900/90 hover:bg-slate-800 text-slate-200 border-slate-700/80 hover:border-cyan-500/40'
            }`}
            title={isRtl ? 'التبديل بين وضع الدراسة ووضع الاختبار العملي' : 'Toggle Study Mode / 3D Exam Mode'}
          >
            {isExamMode ? (
              <>
                <Sparkles className="h-3.5 w-3.5 text-emerald-200 animate-pulse" />
                <span>{isRtl ? 'وضع الاختبار 3D' : '3D Exam Mode'}</span>
              </>
            ) : (
              <>
                <GraduationCap className="h-3.5 w-3.5 text-cyan-400" />
                <span>{isRtl ? 'بدء الاختبار العملي' : '3D Exam Mode'}</span>
              </>
            )}
          </button>
        </div>
      )}

      {/* Floating Progressive Layer Peeling & Exploded View HUD */}
      {showHUD && (showPeelingControls || defaultPeelingOpen) && (
        <div className="absolute bottom-12 left-4 z-20">
          <LayerPeelingControls />
        </div>
      )}

      {/* Floating Real-Time Cross-Section Slicing Controls HUD */}
      {showHUD && showClippingControls && (
        <div className="absolute bottom-12 right-4 z-20">
          <CrossSectionControls />
        </div>
      )}

      {/* 3D WebGL Canvas */}
      <Canvas
        shadows
        gl={{ 
          antialias: true, 
          alpha: true, 
          preserveDrawingBuffer: true, 
          powerPreference: 'high-performance',
          localClippingEnabled: true 
        }}
        camera={{ position: [2.8, 1.8, 3.2], fov: 45, near: 0.1, far: 50 }}
        className="w-full h-full cursor-grab active:cursor-grabbing"
      >
        <Suspense fallback={<LoadingModelStage />}>
          {/* Studio Lighting & Ambient Tone */}
          <ambientLight intensity={isDarkMode ? 0.6 : 0.85} />
          <hemisphereLight
            args={[
              isDarkMode ? '#38bdf8' : '#e0f2fe',
              isDarkMode ? '#0f172a' : '#f1f5f9',
              isDarkMode ? 0.5 : 0.7,
            ]}
          />
          <directionalLight
            position={[5, 8, 5]}
            intensity={1.3}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-bias={-0.0001}
          />
          <directionalLight position={[-5, 4, -5]} intensity={0.6} color="#818cf8" />
          <spotLight
            position={[0, 6, -6]}
            intensity={0.9}
            color="#38bdf8"
            angle={0.6}
            penumbra={0.8}
          />

          {/* Draco-Compressed Anatomical Models: Multi-System Stack OR Single System */}
          {isMultiLayerPeeling ? (
            <group>
              {multiLayerModels.map((item) => (
                <DracoAnatomicalModel
                  key={`${currentSpecies}_${item.systemId}`}
                  modelUrl={item.modelUrl}
                  speciesId={currentSpecies}
                  systemId={item.systemId}
                  layerOpacity={item.opacity}
                  viewportId={viewportId}
                  activeOrganId={activeOrganId}
                  onSelectOrgan={onSelectOrgan}
                />
              ))}
            </group>
          ) : (
            <DracoAnatomicalModel
              key={modelUrl}
              modelUrl={modelUrl}
              speciesId={currentSpecies}
              systemId={activeSystemSlug}
              layerOpacity={1.0}
              viewportId={viewportId}
              activeOrganId={activeOrganId}
              onSelectOrgan={onSelectOrgan}
            />
          )}

          {/* WebGL Local Clipping Guarantee */}
          <LocalClippingEnabler />

          {/* Neon Laser Cross-Section Guide Quad & Boundary */}
          <ClippingPlaneLaserVisualizer />

          {/* Interactive 3D Floating Callout Pins with Leader Lines & Occlusion */}
          <AnatomicalPins
            speciesId={currentSpecies}
            systemId={activeSystemSlug}
            activeOrganId={activeOrganId}
            onSelectOrgan={onSelectOrgan}
            viewportId={viewportId}
          />

          {/* Smooth Camera Fly-To (Lerp) Transition Controller */}
          <CameraFocusController controlsRef={controlsRef} />

          {/* Synchronized Camera Controller for Comparative Split-Screen */}
          <SynchronizedCameraController controlsRef={controlsRef} viewportId={viewportId} />

          {/* OrbitControls */}
          <OrbitControls
            ref={controlsRef}
            enableDamping
            dampingFactor={0.06}
            minDistance={0.8}
            maxDistance={8.5}
            maxPolarAngle={Math.PI / 2 + 0.1}
            autoRotate={autoRotate}
            autoRotateSpeed={1.0}
          />

          {/* Ground Contact Shadows & Medical Grid */}
          <ContactShadows
            position={[0, -0.65, 0]}
            opacity={isDarkMode ? 0.6 : 0.3}
            scale={6.5}
            blur={2}
            far={3}
          />
          <gridHelper
            args={[10, 20, isDarkMode ? '#0284c7' : '#94a3b8', isDarkMode ? '#1e293b' : '#cbd5e1']}
            position={[0, -0.66, 0]}
          />
        </Suspense>
      </Canvas>

      {/* Floating Status Indicator */}
      <div className="absolute bottom-3 right-3 pointer-events-none flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900/85 backdrop-blur-md border border-slate-700/80 text-[11px] text-slate-300 font-mono shadow-lg">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
        <span>Draco 1.5.7 • Multi-Mesh GLB • {currentSpecies.toUpperCase()} ({activeSystemSlug.toUpperCase()})</span>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// Interactive "Organ Layer List" Overlay Inside the Viewport
// -------------------------------------------------------------

function OrganLayerListOverlay({
  currentSpecies,
  activeSystem,
  onSelectSystem,
  viewportId = 'main',
  activeOrganId,
  onSelectOrgan,
}: {
  currentSpecies: SpeciesId;
  activeSystem: AnatomicalSystemId;
  onSelectSystem: (sys: AnatomicalSystemId) => void;
  viewportId?: 'main' | 'left' | 'right';
  activeOrganId?: string | null;
  onSelectOrgan?: (organId: string) => void;
}) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const locale = useAnatomyStore((state) => state.locale);
  const isRtl = locale === 'ar';

  const storeSelectedOrganId = useAnatomyStore((state) => state.selectedOrganId);
  const secondaryOrganId = useAnatomyStore((state) => state.secondaryOrganId);
  const setSecondaryOrganId = useAnatomyStore((state) => state.setSecondaryOrganId);
  const hoveredOrganId = useAnatomyStore((state) => state.hoveredOrganId);
  const isIsolatedMode = useAnatomyStore((state) => state.isIsolatedMode);
  const setSelectedOrganId = useAnatomyStore((state) => state.setSelectedOrganId);
  const setHoveredOrganId = useAnatomyStore((state) => state.setHoveredOrganId);
  const isolateOrgan = useAnatomyStore((state) => state.isolateOrgan);
  const exitIsolation = useAnatomyStore((state) => state.exitIsolation);
  const isExamMode = useAnatomyStore((state) => state.isExamMode);

  const effectiveSelectedOrganId = activeOrganId !== undefined
    ? activeOrganId
    : (viewportId === 'right' ? secondaryOrganId : storeSelectedOrganId);

  // Available organs for active species & system
  const organs = useMemo(() => {
    return getOrgansBySpeciesAndSystem(currentSpecies, activeSystem);
  }, [currentSpecies, activeSystem]);

  const activeSystemMeta = SYSTEMS_REGISTRY.find((s) => s.id === activeSystem);

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="absolute top-4 left-4 z-20 w-80 max-w-[calc(100vw-2rem)] select-none rounded-xl border border-slate-700/70 bg-slate-950/85 p-3 backdrop-blur-md shadow-2xl transition-all duration-300"
    >
      {/* Header with System Info & Quick Actions */}
      <div className="flex items-center justify-between border-b border-slate-800/80 pb-2.5">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Layers className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-semibold text-slate-100 flex items-center gap-1.5">
              <span>{isRtl ? activeSystemMeta?.name.ar : activeSystemMeta?.name.en}</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-slate-800 text-slate-400 font-mono">
                {organs.length}
              </span>
            </div>
            <div className="text-[10px] text-slate-400">
              {isRtl ? 'طبقات الأعضاء ثلاثية الأبعاد' : '3D Organ Layer Switcher'}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {isIsolatedMode && (
            <button
              onClick={exitIsolation}
              title={isRtl ? 'إلغاء العزل' : 'Reset Isolation'}
              className="flex items-center gap-1 px-2 py-1 text-[10px] rounded-md bg-amber-500/10 text-amber-400 border border-amber-500/30 hover:bg-amber-500/20 transition-colors"
            >
              <RotateCcw className="h-3 w-3" />
              <span>{isRtl ? 'إعادة ضبط' : 'Reset'}</span>
            </button>
          )}

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors"
          >
            {isCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Collapsible Layer Items List */}
      {!isCollapsed && (
        <div className="mt-2.5 space-y-1.5 max-h-64 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-slate-800">
          {isExamMode ? (
            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs text-emerald-300 flex items-center gap-2">
                <Lock className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="text-[11px] font-medium leading-tight">
                  {isRtl
                    ? 'وضع الاختبار نشط: تم إخفاء أسماء الأعضاء. انقر مباشرة على النموذج ثلاثي الأبعاد.'
                    : 'Exam Mode Active: Organ names hidden. Identify structures directly on the 3D canvas.'}
                </span>
              </div>
              {organs.map((organ, idx) => (
                <div
                  key={organ.meshId}
                  className="flex items-center justify-between p-2 rounded-lg bg-slate-900/50 border border-slate-800/80 text-xs text-slate-400"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="h-2 w-2 rounded-full bg-slate-600" />
                    <span className="font-mono text-[11px]">
                      {isRtl ? `بنية تشريحية #${idx + 1}` : `Anatomical Structure #${idx + 1}`}
                    </span>
                  </div>
                  <Lock className="h-3 w-3 text-slate-600" />
                </div>
              ))}
            </div>
          ) : (
            organs.map((organ) => {
              const isSelected = effectiveSelectedOrganId === organ.id || effectiveSelectedOrganId === organ.meshId;
              const isHovered = hoveredOrganId === organ.id || hoveredOrganId === organ.meshId;
              const isGhosted = isIsolatedMode && !isSelected;

              return (
                <div
                  key={organ.meshId}
                  onClick={() => {
                    if (onSelectOrgan) {
                      onSelectOrgan(organ.meshId);
                    } else if (viewportId === 'right') {
                      setSecondaryOrganId(organ.meshId);
                    } else {
                      setSelectedOrganId(organ.meshId);
                      isolateOrgan(organ.meshId);
                    }
                  }}
                  onMouseEnter={() => setHoveredOrganId(organ.meshId)}
                  onMouseLeave={() => setHoveredOrganId(null)}
                  className={`group flex items-center justify-between p-2 rounded-lg cursor-pointer transition-all duration-200 text-xs ${
                    isSelected
                      ? 'bg-cyan-500/20 border border-cyan-400/50 shadow-md text-cyan-200'
                      : isHovered
                      ? 'bg-slate-800/80 border border-slate-700 text-slate-100'
                      : isGhosted
                      ? 'bg-slate-900/40 border border-transparent text-slate-500 opacity-60'
                      : 'bg-slate-900/60 border border-slate-800/60 hover:bg-slate-800/60 text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {/* Material Color Dot */}
                    <span
                      className={`h-2.5 w-2.5 rounded-full shrink-0 transition-transform ${
                        isSelected ? 'ring-2 ring-cyan-400 ring-offset-1 ring-offset-slate-950 scale-125' : ''
                      }`}
                      style={{ backgroundColor: organ.color }}
                    />

                    <div className="truncate">
                      <div className="font-medium truncate flex items-center gap-1.5">
                        <span>{isRtl ? organ.name.ar : organ.name.en}</span>
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono italic truncate">
                        {organ.latinTaxonomyName}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 shrink-0 ml-2">
                    {isSelected ? (
                      <span className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[9px] bg-cyan-400 text-slate-950 font-semibold font-mono">
                        <Sparkles className="h-2.5 w-2.5" />
                        <span>{isRtl ? 'معزول' : 'ISOLATED'}</span>
                      </span>
                    ) : isGhosted ? (
                      <EyeOff className="h-3.5 w-3.5 text-slate-600" />
                    ) : (
                      <Eye className="h-3.5 w-3.5 text-slate-500 group-hover:text-slate-300" />
                    )}
                  </div>
                </div>
              );
            })
          )}

          {organs.length === 0 && (
            <div className="p-4 text-center text-xs text-slate-500">
              {isRtl ? 'لا توجد أعضاء متاحة' : 'No organs registered in this layer'}
            </div>
          )}

          {/* Tip Cue */}
          <div className="pt-1.5 border-t border-slate-800/70 text-[10px] text-slate-400 text-center font-mono">
            {isRtl ? 'انقر على أي عضو للعزل والتحليق السلس' : 'Click layer or 3D mesh for smooth lerp focus'}
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// Draco-Compressed Anatomical GLTF Model Renderer
// -------------------------------------------------------------

function DracoAnatomicalModel({
  modelUrl,
  speciesId,
  systemId,
  layerOpacity = 1.0,
  viewportId = 'main',
  activeOrganId,
  onSelectOrgan,
}: {
  modelUrl: string;
  speciesId: SpeciesId;
  systemId: AnatomicalSystemId;
  layerOpacity?: number;
  viewportId?: 'main' | 'left' | 'right';
  activeOrganId?: string | null;
  onSelectOrgan?: (organId: string) => void;
}) {
  // Offline-First: resolve model from IndexedDB blob cache if available
  const [activeUrl, setActiveUrl] = useState<string>(() => getMemoryCachedGlbUrl(modelUrl) || modelUrl);

  useEffect(() => {
    let isMounted = true;
    resolveGlbModelUrl(modelUrl).then((resolved) => {
      if (isMounted && resolved !== activeUrl) {
        setActiveUrl(resolved);
      }
    });
    return () => {
      isMounted = false;
    };
  }, [modelUrl, activeUrl]);

  // Load Draco GLTF asset with official Google Draco WASM decoder
  const gltf = useGLTF(activeUrl, DRACO_DECODER_PATH);

  const storeSelectedOrganId = useAnatomyStore((state) => state.selectedOrganId);
  const secondaryOrganId = useAnatomyStore((state) => state.secondaryOrganId);
  const setSecondaryOrganId = useAnatomyStore((state) => state.setSecondaryOrganId);
  const hoveredOrganId = useAnatomyStore((state) => state.hoveredOrganId);
  const isIsolatedMode = useAnatomyStore((state) => state.isIsolatedMode);
  const explodedViewFactor = useAnatomyStore((state) => state.explodedViewFactor);
  const explosionFactor = useAnatomyStore((state) => state.explosionFactor);
  const xrayMode = useAnatomyStore((state) => state.xrayMode);
  const wireframeMode = useAnatomyStore((state) => state.wireframeMode);

  const setSelectedOrganId = useAnatomyStore((state) => state.setSelectedOrganId);
  const setHoveredOrganId = useAnatomyStore((state) => state.setHoveredOrganId);
  const isolateOrgan = useAnatomyStore((state) => state.isolateOrgan);
  const isExamMode = useAnatomyStore((state) => state.isExamMode);
  const examMeshFlash = useAnatomyStore((state) => state.examMeshFlash);
  const setExamClickedMeshId = useAnatomyStore((state) => state.setExamClickedMeshId);
  const clippingConfig = useAnatomyStore((state) => state.clippingConfig);
  const activeClipPlane = useRef<THREE.Plane>(new THREE.Plane(new THREE.Vector3(-1, 0, 0), 0));

  const updateClipPlaneValues = () => {
    if (clippingConfig.axis === 'sagittal') {
      activeClipPlane.current.normal.set(clippingConfig.inverted ? 1 : -1, 0, 0);
      activeClipPlane.current.constant = clippingConfig.inverted 
        ? -clippingConfig.offset * 1.5 
        : clippingConfig.offset * 1.5;
    } else if (clippingConfig.axis === 'dorsal') {
      activeClipPlane.current.normal.set(0, clippingConfig.inverted ? 1 : -1, 0);
      const yCenter = 0.4;
      activeClipPlane.current.constant = clippingConfig.inverted 
        ? -(yCenter + clippingConfig.offset * 1.0) 
        : (yCenter + clippingConfig.offset * 1.0);
    } else if (clippingConfig.axis === 'transverse') {
      activeClipPlane.current.normal.set(0, 0, clippingConfig.inverted ? 1 : -1);
      activeClipPlane.current.constant = clippingConfig.inverted 
        ? -clippingConfig.offset * 1.8 
        : clippingConfig.offset * 1.8;
    }
  };

  const effectiveSelectedOrganId = activeOrganId !== undefined
    ? activeOrganId
    : (viewportId === 'right' ? secondaryOrganId : storeSelectedOrganId);

  // Deep clone scene graph to allow isolated runtime material adjustments
  const clonedScene = useMemo(() => {
    const clone = gltf.scene.clone(true);
    // Ensure all materials are cloned independently
    clone.traverse((child: any) => {
      if (child.isMesh && child.material) {
        if (Array.isArray(child.material)) {
          child.material = child.material.map((m: any) => m.clone());
        } else {
          child.material = child.material.clone();
        }
      }
    });
    return clone;
  }, [gltf.scene]);

  // Center of mass and radial vectors for the Exploded Anatomical View
  const centerOfMass = useRef<THREE.Vector3>(new THREE.Vector3(0, 0.4, 0));
  const meshDirections = useRef<Map<any, { basePos: THREE.Vector3; radialDir: THREE.Vector3 }>>(new Map());

  // Compute model center of mass and calculate each organ's radial displacement vector
  useEffect(() => {
    const box = new THREE.Box3().setFromObject(clonedScene);
    box.getCenter(centerOfMass.current);

    meshDirections.current.clear();
    clonedScene.traverse((child: any) => {
      if (child.isMesh) {
        const meshBox = new THREE.Box3().setFromObject(child);
        const meshCenter = new THREE.Vector3();
        meshBox.getCenter(meshCenter);

        const dir = meshCenter.clone().sub(centerOfMass.current);
        if (dir.lengthSq() < 0.0001) {
          dir.set(0, 1, 0);
        } else {
          dir.normalize();
        }

        meshDirections.current.set(child, {
          basePos: child.position.clone(),
          radialDir: dir,
        });
      }
    });
  }, [clonedScene]);

  // Apply Realtime Interactive Highlighting, Multi-Layer Peeling Opacity, and Ghost Isolation
  useEffect(() => {
    clonedScene.traverse((child: any) => {
      if (!child.isMesh) return;

      // Layer opacity gate
      if (layerOpacity < 0.01) {
        child.visible = false;
        return;
      }
      child.visible = true;

      const organId = child.userData?.organId || child.name;
      const isSelected = effectiveSelectedOrganId === organId || effectiveSelectedOrganId === child.name;
      const isHovered = hoveredOrganId === organId || hoveredOrganId === child.name;

      const materials = Array.isArray(child.material) ? child.material : [child.material];

      materials.forEach((mat: THREE.MeshStandardMaterial) => {
        if (!mat) return;

        // Apply wireframe mode
        mat.wireframe = wireframeMode;

        // Apply real-time cross-section clipping plane & DoubleSide rendering
        if (clippingConfig.enabled) {
          updateClipPlaneValues();
          mat.clippingPlanes = [activeClipPlane.current];
          mat.clipShadows = true;
          mat.side = THREE.DoubleSide; // Clean solid internal rendering without hollow artifacts
        } else {
          mat.clippingPlanes = [];
          mat.side = THREE.FrontSide;
        }

        // Exam Mode Mesh Flashing Reaction: emerald green on correct, crimson red on wrong
        const isExamFlashed = examMeshFlash && (examMeshFlash.meshId === organId || examMeshFlash.meshId === child.name);
        if (isExamFlashed) {
          mat.transparent = false;
          mat.opacity = 1.0;
          mat.depthWrite = true;
          if (examMeshFlash.status === 'correct') {
            mat.emissive = new THREE.Color('#10b981'); // Emerald green
            mat.emissiveIntensity = 2.4;
          } else {
            mat.emissive = new THREE.Color('#ef4444'); // Crimson red
            mat.emissiveIntensity = 2.4;
          }
          mat.needsUpdate = true;
          return;
        }

        if (isIsolatedMode) {
          if (isSelected) {
            // Selected organ: crisp full opacity with glowing cyan emissive edge
            mat.transparent = false;
            mat.opacity = 1.0;
            mat.depthWrite = true;
            mat.emissive = new THREE.Color('#06b6d4');
            mat.emissiveIntensity = 0.8;
          } else {
            // Ghost isolation on unselected meshes with opacity 0.12
            mat.transparent = true;
            mat.opacity = 0.12;
            mat.depthWrite = false;
            mat.emissive = new THREE.Color('#000000');
            mat.emissiveIntensity = 0;
          }
        } else {
          // Standard / Multi-Layer Progressive Peeling mode
          const effectiveOpacity = layerOpacity < 1.0 ? layerOpacity : (xrayMode ? 0.35 : 1.0);
          mat.transparent = effectiveOpacity < 0.99;
          mat.opacity = effectiveOpacity;
          mat.depthWrite = effectiveOpacity > 0.7;

          if (isHovered) {
            mat.emissive = new THREE.Color('#0284c7');
            mat.emissiveIntensity = 0.55;
          } else {
            mat.emissive = new THREE.Color('#000000');
            mat.emissiveIntensity = 0.05;
          }
        }
        mat.needsUpdate = true;
      });
    });
  }, [clonedScene, effectiveSelectedOrganId, hoveredOrganId, isIsolatedMode, xrayMode, wireframeMode, examMeshFlash, layerOpacity, clippingConfig.enabled, clippingConfig.axis, clippingConfig.offset, clippingConfig.inverted]);

  // useFrame: Smooth Radial Exploded View Displacement, Real-Time Clipping Plane & Pulse
  useFrame(({ clock }, delta) => {
    // 0. Update real-time cross-section clipping plane
    if (clippingConfig.enabled) {
      updateClipPlaneValues();
    }

    // 1. Radial Exploded View Lerp
    const targetExplosion = explosionFactor || explodedViewFactor || 0;
    const lerpSpeed = Math.min(1.0, delta * 7.5);

    meshDirections.current.forEach(({ basePos, radialDir }, mesh) => {
      const displacement = radialDir.clone().multiplyScalar(targetExplosion * 0.95);
      const targetPos = basePos.clone().add(displacement);
      mesh.position.lerp(targetPos, lerpSpeed);
    });

    // 2. Breathing / pulse animation on selected organ
    if (effectiveSelectedOrganId) {
      const time = clock.getElapsedTime();
      const pulse = 1.0 + Math.sin(time * 3.5) * 0.025;

      clonedScene.traverse((child: any) => {
        if (child.isMesh) {
          const organId = child.userData?.organId || child.name;
          if (effectiveSelectedOrganId === organId || effectiveSelectedOrganId === child.name) {
            child.scale.set(pulse, pulse, pulse);
          } else {
            child.scale.set(1.0, 1.0, 1.0);
          }
        }
      });
    }
  });

  return (
    <primitive
      object={clonedScene}
      onClick={(e: any) => {
        e.stopPropagation();
        // Read exact 3D node identifier
        const targetMesh = e.object;
        const organId = targetMesh.userData?.organId || targetMesh.name;
        if (isExamMode) {
          if (organId) {
            setExamClickedMeshId(organId);
          }
          return;
        }
        if (organId) {
          if (onSelectOrgan) {
            onSelectOrgan(organId);
          } else if (viewportId === 'right') {
            setSecondaryOrganId(organId);
          } else {
            setSelectedOrganId(organId);
            isolateOrgan(organId);
          }
        }
      }}
      onPointerOver={(e: any) => {
        e.stopPropagation();
        const targetMesh = e.object;
        const organId = targetMesh.userData?.organId || targetMesh.name;
        if (organId) {
          setHoveredOrganId(organId);
          document.body.style.cursor = 'pointer';
        }
      }}
      onPointerOut={() => {
        setHoveredOrganId(null);
        document.body.style.cursor = 'auto';
      }}
    />
  );
}

// -------------------------------------------------------------
// Camera Focus Controller with Smooth Lerp Interpolation
// -------------------------------------------------------------

function CameraFocusController({ controlsRef }: { controlsRef: React.RefObject<any> }) {
  const { camera } = useThree();
  const selectedOrganId = useAnatomyStore((state) => state.selectedOrganId);
  const isIsolatedMode = useAnatomyStore((state) => state.isIsolatedMode);
  const cameraResetNonce = useAnatomyStore((state) => state.cameraResetNonce);

  const defaultPosition = useRef(new THREE.Vector3(2.8, 1.8, 3.2));
  const defaultTarget = useRef(new THREE.Vector3(0, 0.4, 0));

  const targetCameraPos = useRef(defaultPosition.current.clone());
  const targetLookAt = useRef(defaultTarget.current.clone());
  const isTransitioning = useRef(false);

  // Compute destination coordinates when selected organ or isolation mode changes
  useEffect(() => {
    if (selectedOrganId && isIsolatedMode) {
      const organ = getOrganById(selectedOrganId);
      if (organ && organ.cameraFocus) {
        const [px, py, pz] = organ.cameraFocus.position;
        const [tx, ty, tz] = organ.cameraFocus.target;
        targetCameraPos.current.set(px, py, pz);
        targetLookAt.current.set(tx, ty, tz);
        isTransitioning.current = true;
      }
    } else if (!isIsolatedMode) {
      targetCameraPos.current.copy(defaultPosition.current);
      targetLookAt.current.copy(defaultTarget.current);
      isTransitioning.current = true;
    }
  }, [selectedOrganId, isIsolatedMode]);

  // Reset trigger handler
  useEffect(() => {
    if (cameraResetNonce > 0) {
      targetCameraPos.current.copy(defaultPosition.current);
      targetLookAt.current.copy(defaultTarget.current);
      isTransitioning.current = true;
    }
  }, [cameraResetNonce]);

  // Frame-by-frame smooth lerp interpolation
  useFrame((_, delta) => {
    if (!isTransitioning.current) return;

    // Delta-time independent lerp factor
    const lerpFactor = Math.min(1.0, delta * 4.5);
    camera.position.lerp(targetCameraPos.current, lerpFactor);

    if (controlsRef.current) {
      controlsRef.current.target.lerp(targetLookAt.current, lerpFactor);
      controlsRef.current.update();
    }

    const posDist = camera.position.distanceTo(targetCameraPos.current);
    const targetDist = controlsRef.current
      ? controlsRef.current.target.distanceTo(targetLookAt.current)
      : 0;

    if (posDist < 0.005 && targetDist < 0.005) {
      camera.position.copy(targetCameraPos.current);
      if (controlsRef.current) {
        controlsRef.current.target.copy(targetLookAt.current);
      }
      isTransitioning.current = false;
    }
  });

  return null;
}

// -------------------------------------------------------------
// Loading Placeholder for 3D Viewport
// -------------------------------------------------------------

function LoadingModelStage() {
  return (
    <mesh position={[0, 0.4, 0]}>
      <sphereGeometry args={[0.3, 16, 16]} />
      <meshStandardMaterial color="#0284c7" wireframe transparent opacity={0.3} />
    </mesh>
  );
}

// -------------------------------------------------------------
// Synchronized Camera Controller for Split-Screen Comparative View
// -------------------------------------------------------------

function SynchronizedCameraController({
  controlsRef,
  viewportId = 'main',
}: {
  controlsRef: React.RefObject<any>;
  viewportId?: 'main' | 'left' | 'right';
}) {
  const { camera } = useThree();
  const isCameraSynced = useAnatomyStore((state) => state.isCameraSynced);
  const sharedCameraState = useAnatomyStore((state) => state.sharedCameraState);
  const setSharedCameraState = useAnatomyStore((state) => state.setSharedCameraState);

  const lastBroadcastRef = useRef<{ pos: THREE.Vector3; target: THREE.Vector3 }>({
    pos: new THREE.Vector3(),
    target: new THREE.Vector3(),
  });
  const isApplyingRemoteRef = useRef(false);

  // Apply shared camera state from the opposite viewport
  useEffect(() => {
    if (!isCameraSynced || !sharedCameraState || sharedCameraState.source === viewportId) return;
    if (viewportId === 'main') return;

    isApplyingRemoteRef.current = true;
    const [px, py, pz] = sharedCameraState.position;
    const [tx, ty, tz] = sharedCameraState.target;

    camera.position.set(px, py, pz);
    if (controlsRef.current) {
      controlsRef.current.target.set(tx, ty, tz);
      controlsRef.current.update();
    }

    const timer = setTimeout(() => {
      isApplyingRemoteRef.current = false;
    }, 20);
    return () => clearTimeout(timer);
  }, [sharedCameraState, isCameraSynced, viewportId, camera, controlsRef]);

  // Broadcast local camera adjustments if the user interacted with this viewport
  useFrame(() => {
    if (!isCameraSynced || viewportId === 'main') return;
    if (isApplyingRemoteRef.current) return;
    if (!controlsRef.current) return;

    const currentPos = camera.position;
    const currentTarget = controlsRef.current.target;

    const posMoved = currentPos.distanceTo(lastBroadcastRef.current.pos) > 0.003;
    const targetMoved = currentTarget.distanceTo(lastBroadcastRef.current.target) > 0.003;

    if (posMoved || targetMoved) {
      lastBroadcastRef.current.pos.copy(currentPos);
      lastBroadcastRef.current.target.copy(currentTarget);

      setSharedCameraState({
        position: [currentPos.x, currentPos.y, currentPos.z],
        target: [currentTarget.x, currentTarget.y, currentTarget.z],
        zoom: camera.zoom,
        source: viewportId,
        nonce: Date.now(),
      });
    }
  });

  return null;
}

// -------------------------------------------------------------
// WebGL Local Clipping Guarantee
// -------------------------------------------------------------

function LocalClippingEnabler() {
  const { gl } = useThree();
  useEffect(() => {
    gl.localClippingEnabled = true;
  }, [gl]);
  return null;
}

// -------------------------------------------------------------
// Real-Time Neon Laser Cross-Section Guide Quad & Boundary
// -------------------------------------------------------------

function ClippingPlaneLaserVisualizer() {
  const clippingConfig = useAnatomyStore((state) => state.clippingConfig);

  if (!clippingConfig.enabled || !clippingConfig.showPlaneHelper) return null;

  let position: [number, number, number] = [0, 0.4, 0];
  let rotation: [number, number, number] = [0, 0, 0];

  if (clippingConfig.axis === 'sagittal') {
    position = [clippingConfig.offset * 1.5, 0.4, 0];
    rotation = [0, Math.PI / 2, 0];
  } else if (clippingConfig.axis === 'dorsal') {
    position = [0, 0.4 + clippingConfig.offset * 1.0, 0];
    rotation = [-Math.PI / 2, 0, 0];
  } else if (clippingConfig.axis === 'transverse') {
    position = [0, 0.4, clippingConfig.offset * 1.8];
    rotation = [0, 0, 0];
  }

  return (
    <group position={position} rotation={rotation}>
      {/* Semi-transparent neon laser plane quad */}
      <mesh>
        <planeGeometry args={[2.8, 2.8]} />
        <meshBasicMaterial
          color="#f43f5e"
          transparent
          opacity={0.16}
          side={THREE.DoubleSide}
          depthWrite={false}
        />
      </mesh>

      {/* Laser cutting perimeter outline */}
      <lineSegments>
        <edgesGeometry args={[new THREE.PlaneGeometry(2.8, 2.8)]} />
        <lineBasicMaterial color="#fb7185" linewidth={2} />
      </lineSegments>
    </group>
  );
}
