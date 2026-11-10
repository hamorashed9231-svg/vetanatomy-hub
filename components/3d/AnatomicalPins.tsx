'use client';

import React, { useState, useMemo } from 'react';
import { Html, Line } from '@react-three/drei';
import * as THREE from 'three';
import { 
  Check, 
  HelpCircle, 
  Sparkles, 
  Eye, 
  ChevronRight,
  Bookmark
} from 'lucide-react';
import { useAnatomyStore, PinDisplayMode } from '../../store/useAnatomyStore';
import { getOrgansBySpeciesAndSystem } from '../../data/anatomyRegistry';
import { SpeciesId, AnatomicalSystemId, OrganPart } from '../../types/anatomy';

interface AnatomicalPinsProps {
  speciesId: SpeciesId;
  systemId: AnatomicalSystemId;
  activeOrganId?: string | null;
  onSelectOrgan?: (organId: string) => void;
  viewportId?: 'main' | 'left' | 'right';
}

export function AnatomicalPins({
  speciesId,
  systemId,
  activeOrganId,
  onSelectOrgan,
  viewportId = 'main',
}: AnatomicalPinsProps) {
  const pinDisplayMode = useAnatomyStore((state) => state.pinDisplayMode);
  const storeSelectedOrganId = useAnatomyStore((state) => state.selectedOrganId);
  const secondaryOrganId = useAnatomyStore((state) => state.secondaryOrganId);
  const hoveredOrganId = useAnatomyStore((state) => state.hoveredOrganId);
  const isIsolatedMode = useAnatomyStore((state) => state.isIsolatedMode);
  const setSelectedOrganId = useAnatomyStore((state) => state.setSelectedOrganId);
  const setSecondaryOrganId = useAnatomyStore((state) => state.setSecondaryOrganId);
  const isolateOrgan = useAnatomyStore((state) => state.isolateOrgan);
  const isExamMode = useAnatomyStore((state) => state.isExamMode);
  const setHoveredOrganId = useAnatomyStore((state) => state.setHoveredOrganId);

  // Track revealed state for Blind Quiz Number Mode
  const [revealedPins, setRevealedPins] = useState<Record<string, boolean>>({});

  const toggleRevealPin = (organId: string) => {
    setRevealedPins((prev) => ({
      ...prev,
      [organId]: !prev[organId],
    }));
  };

  const effectiveSelectedId = activeOrganId !== undefined
    ? activeOrganId
    : (viewportId === 'right' ? secondaryOrganId : storeSelectedOrganId);

  // Available organs for this species & system
  const organs = useMemo(() => {
    return getOrgansBySpeciesAndSystem(speciesId, systemId);
  }, [speciesId, systemId]);

  // If pins hidden or exam mode is active, do not render pins
  if (pinDisplayMode === 'hidden' || isExamMode || organs.length === 0) {
    return null;
  }

  return (
    <group name="anatomical-pins-layer">
      {organs.map((organ, index) => {
        const isSelected = effectiveSelectedId === organ.id || effectiveSelectedId === organ.meshId;
        const isHovered = hoveredOrganId === organ.id || hoveredOrganId === organ.meshId;

        // In 'hover' mode, only display pins for active or hovered organs
        if (pinDisplayMode === 'hover' && !isSelected && !isHovered) {
          return null;
        }

        return (
          <SingleOrganPin
            key={organ.meshId}
            organ={organ}
            index={index}
            totalCount={organs.length}
            isSelected={isSelected}
            isHovered={isHovered}
            isIsolatedMode={isIsolatedMode}
            pinDisplayMode={pinDisplayMode}
            isRevealed={Boolean(revealedPins[organ.meshId])}
            onToggleReveal={() => toggleRevealPin(organ.meshId)}
            onSelect={() => {
              if (onSelectOrgan) {
                onSelectOrgan(organ.meshId);
              } else if (viewportId === 'right') {
                setSecondaryOrganId(organ.meshId);
              } else {
                setSelectedOrganId(organ.meshId);
                isolateOrgan(organ.meshId);
              }
            }}
            onHover={(hover) => setHoveredOrganId(hover ? organ.meshId : null)}
          />
        );
      })}
    </group>
  );
}

// -------------------------------------------------------------
// Individual Spatial Callout Pin with Raycast Occlusion & 3D Leader Line
// -------------------------------------------------------------

function SingleOrganPin({
  organ,
  index,
  totalCount,
  isSelected,
  isHovered,
  isIsolatedMode,
  pinDisplayMode,
  isRevealed,
  onToggleReveal,
  onSelect,
  onHover,
}: {
  organ: OrganPart;
  index: number;
  totalCount: number;
  isSelected: boolean;
  isHovered: boolean;
  isIsolatedMode: boolean;
  pinDisplayMode: PinDisplayMode;
  isRevealed: boolean;
  onToggleReveal: () => void;
  onSelect: () => void;
  onHover: (hover: boolean) => void;
}) {
  const locale = useAnatomyStore((state) => state.locale);
  const isRtl = locale === 'ar';
  const [isOccluded, setIsOccluded] = useState(false);

  // Compute anchor position from organ cameraFocus target
  const anchorPos = useMemo<[number, number, number]>(() => {
    if (organ.cameraFocus && organ.cameraFocus.target) {
      return organ.cameraFocus.target;
    }
    return [0, 0.4, 0];
  }, [organ.cameraFocus]);

  // Compute elevated leader line floating position
  const labelPos = useMemo<[number, number, number]>(() => {
    const [ax, ay, az] = anchorPos;
    // Radial angular elevation offset to fan out multiple callouts
    const angle = (index / Math.max(1, totalCount)) * Math.PI * 2;
    const radialSpread = 0.12;
    const lx = ax + Math.sin(angle) * radialSpread;
    const ly = ay + 0.32 + (index % 3) * 0.05;
    const lz = az + Math.cos(angle) * radialSpread + 0.08;
    return [lx, ly, lz];
  }, [anchorPos, index, totalCount]);

  const lineColor = isSelected
    ? '#06b6d4' // Cyan
    : isHovered
    ? '#38bdf8' // Sky
    : '#64748b'; // Slate

  return (
    <group>
      {/* 1. Anchor Sphere Dot on Mesh Surface */}
      <mesh position={anchorPos}>
        <sphereGeometry args={[0.018, 12, 12]} />
        <meshBasicMaterial
          color={organ.color || (isSelected ? '#06b6d4' : '#94a3b8')}
          transparent
          opacity={isOccluded ? 0.25 : 0.95}
        />
      </mesh>

      {/* 2. 3D Spatial Leader Line connecting Anchor to Floating Callout */}
      <Line
        points={[anchorPos, labelPos]}
        color={lineColor}
        lineWidth={isSelected ? 2.2 : isHovered ? 1.8 : 1.1}
        transparent
        opacity={isOccluded ? 0.18 : isSelected ? 0.95 : 0.65}
      />

      {/* 3. Floating 3D HTML Callout Badge with Occlusion Support */}
      <Html
        position={labelPos}
        center
        distanceFactor={6.8}
        zIndexRange={[100, 0]}
        occlude
        onOcclude={(occluded) => setIsOccluded(Boolean(occluded))}
        style={{
          transition: 'all 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          pointerEvents: isOccluded ? 'none' : 'auto',
          opacity: isOccluded ? 0.20 : 1.0,
          transform: isOccluded ? 'scale(0.88)' : 'scale(1.0)',
        }}
      >
        <div
          dir={isRtl ? 'rtl' : 'ltr'}
          onMouseEnter={() => onHover(true)}
          onMouseLeave={() => onHover(false)}
          className="select-none cursor-pointer"
        >
          {pinDisplayMode === 'quiz_numbers' ? (
            /* Blind Quiz Number Mode: Clicking reveals identity */
            <div
              onClick={(e) => {
                e.stopPropagation();
                onToggleReveal();
                onSelect();
              }}
              className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full border shadow-2xl backdrop-blur-md transition-all font-mono text-xs ${
                isRevealed
                  ? 'bg-emerald-950/90 text-emerald-200 border-emerald-400/80 shadow-emerald-500/20 ring-2 ring-emerald-400/30'
                  : isSelected
                  ? 'bg-cyan-950/90 text-cyan-200 border-cyan-400 shadow-cyan-500/20'
                  : 'bg-slate-950/90 text-slate-300 border-slate-700/90 hover:border-cyan-400/60 hover:text-white'
              }`}
            >
              <div className="flex h-5 w-5 items-center justify-center rounded-full bg-slate-800 border border-slate-600 text-[11px] font-bold">
                #{index + 1}
              </div>

              {isRevealed ? (
                <div className="flex items-center gap-1.5 pr-1 pl-1">
                  <div className="flex flex-col text-left rtl:text-right leading-tight">
                    <span className="font-bold text-[11px] text-white">
                      {isRtl ? organ.name.ar : organ.name.en}
                    </span>
                    <span className="text-[9px] text-emerald-300 italic">
                      {organ.latinTaxonomyName}
                    </span>
                  </div>
                  <Check className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                </div>
              ) : (
                <span className="text-[10px] text-slate-400 hover:text-cyan-300 flex items-center gap-0.5">
                  <HelpCircle className="h-3 w-3" />
                  <span>{isRtl ? 'كشف' : 'Reveal'}</span>
                </span>
              )}
            </div>
          ) : (
            /* Standard & Hover Callout Mode: localized name + Latin subtitle */
            <div
              onClick={(e) => {
                e.stopPropagation();
                onSelect();
              }}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border shadow-xl backdrop-blur-md transition-all group ${
                isSelected
                  ? 'bg-cyan-950/90 border-cyan-400/90 text-cyan-100 shadow-cyan-500/20 ring-2 ring-cyan-400/40'
                  : isHovered
                  ? 'bg-slate-900/95 border-slate-600 text-white shadow-lg'
                  : 'bg-slate-950/85 border-slate-700/70 text-slate-200 hover:border-cyan-400/60 hover:text-white'
              }`}
            >
              {/* Material Color Indicator Dot */}
              <span
                className={`h-2.5 w-2.5 rounded-full shrink-0 shadow-sm ${
                  isSelected ? 'ring-2 ring-cyan-300 ring-offset-1 ring-offset-slate-950 animate-pulse' : ''
                }`}
                style={{ backgroundColor: organ.color || '#06b6d4' }}
              />

              <div className="flex flex-col text-left rtl:text-right leading-tight">
                <span className="text-xs font-bold whitespace-nowrap">
                  {isRtl ? organ.name.ar : organ.name.en}
                </span>
                <span className="text-[9.5px] font-mono text-cyan-300/80 whitespace-nowrap italic">
                  {organ.latinTaxonomyName}
                </span>
              </div>

              {isSelected && (
                <Sparkles className="h-3.5 w-3.5 text-cyan-300 shrink-0 animate-pulse" />
              )}
            </div>
          )}
        </div>
      </Html>
    </group>
  );
}
