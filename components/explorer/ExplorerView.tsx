'use client';

import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { Sparkles, GraduationCap, Compass, Layers } from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { SpeciesId, AnatomicalSystemId, Locale } from '../../types/anatomy';
import { SpeciesSystemResult } from '../../app/actions/anatomy';
import { SpeciesHeaderNav } from './SpeciesHeaderNav';
import { SystemTreeNavigator } from './SystemTreeNavigator';
import { OrganInspectorDrawer } from './OrganInspectorDrawer';
import { PracticalExamMode } from '../exam/PracticalExamMode';

// Dynamically import VetCanvas with SSR disabled
const VetCanvas = dynamic(
  () => import('../3d/VetCanvas').then((mod) => mod.VetCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[550px] flex flex-col items-center justify-center bg-slate-950 rounded-2xl border border-slate-800 text-cyan-400 gap-3">
        <div className="w-10 h-10 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin" />
        <span className="text-xs font-mono tracking-wider">
          Streaming 3D Veterinary Asset Pipeline...
        </span>
      </div>
    ),
  }
);

interface ExplorerViewProps {
  locale: Locale;
  species: SpeciesId;
  system: AnatomicalSystemId;
  dbData?: SpeciesSystemResult | null;
  focusMeshId?: string;
}

export function ExplorerView({ locale, species, system, dbData, focusMeshId }: ExplorerViewProps) {
  const searchParams = useSearchParams();
  const setLocale = useAnatomyStore((state) => state.setLocale);
  const setActiveSpecies = useAnatomyStore((state) => state.setActiveSpecies);
  const setActiveSystem = useAnatomyStore((state) => state.setActiveSystem);
  const isExamMode = useAnatomyStore((state) => state.isExamMode);
  const setIsExamMode = useAnatomyStore((state) => state.setIsExamMode);
  const toggleExamMode = useAnatomyStore((state) => state.toggleExamMode);
  const setSelectedOrganId = useAnatomyStore((state) => state.setSelectedOrganId);
  const isolateOrgan = useAnatomyStore((state) => state.isolateOrgan);

  const isRtl = locale === 'ar';

  // Sync dynamic URL route params to Zustand global store
  useEffect(() => {
    setLocale(locale);
    setActiveSpecies(species);
    setActiveSystem(system);
  }, [locale, species, system, setLocale, setActiveSpecies, setActiveSystem]);

  // Handle focus query parameter (?focus=[meshId]) from Global Search
  useEffect(() => {
    const targetFocus = focusMeshId || searchParams?.get('focus');
    if (targetFocus) {
      setSelectedOrganId(targetFocus);
      isolateOrgan(targetFocus);
    }
  }, [focusMeshId, searchParams, setSelectedOrganId, isolateOrgan]);

  return (
    <div className="flex-1 flex flex-col p-3 sm:p-4 lg:p-6 gap-4 max-w-[1750px] mx-auto w-full">
      {/* 1. Top Species Selector & Vitals Ribbon */}
      <SpeciesHeaderNav currentSpecies={species} currentSystem={system} />

      {/* 2. Mode Selector Segmented Ribbon: Study Mode vs 3D Exam Mode */}
      <div className="flex items-center justify-between p-2 rounded-2xl bg-slate-950/70 border border-slate-800/80 backdrop-blur-md">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsExamMode(false)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              !isExamMode
                ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-300 border border-cyan-500/40 shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
            }`}
          >
            <Compass size={15} className={!isExamMode ? 'text-cyan-400' : 'text-slate-500'} />
            <span>{isRtl ? 'وضع الدراسة التفاعلي' : 'Interactive Study Mode'}</span>
          </button>

          <button
            onClick={() => setIsExamMode(true)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              isExamMode
                ? 'bg-gradient-to-r from-emerald-500/20 to-teal-500/20 text-emerald-300 border border-emerald-500/40 shadow-md'
                : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
            }`}
          >
            <GraduationCap size={15} className={isExamMode ? 'text-emerald-400 animate-pulse' : 'text-slate-500'} />
            <span>{isRtl ? 'وضع الاختبار العملي 3D ("Pin-the-Organ")' : '3D Practical Exam Mode ("Pin-the-Organ")'}</span>
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-[11px] text-slate-400 font-mono pr-2 rtl:pr-0 rtl:pl-2">
          {isExamMode ? (
            <span className="flex items-center gap-1.5 text-emerald-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{isRtl ? 'وضع الاختبار نشط: تم إخفاء أسماء الأعضاء' : 'Exam Active: Names Hidden'}</span>
            </span>
          ) : (
            <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
              <span className="w-2 h-2 rounded-full bg-cyan-400" />
              <span>{isRtl ? 'وضع الاستكشاف المفتوح والتشريح' : 'Open Exploration & Inspection'}</span>
            </span>
          )}
        </div>
      </div>

      {/* 3. Primary 3D Workstation Dual-Pane Layout (Fixed & Sticky 3D Viewport) */}
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* Left/Right Sidebar: System Tree Navigator OR 3D Practical Exam Mode */}
        <div className="lg:col-span-4 flex flex-col h-[520px] lg:h-[calc(100vh-190px)] overflow-hidden">
          {isExamMode ? (
            <PracticalExamMode
              species={species}
              system={system}
              onExitExam={() => setIsExamMode(false)}
            />
          ) : (
            <SystemTreeNavigator currentSpecies={species} currentSystem={system} />
          )}
        </div>

        {/* Central Dynamic 3D Viewer (VetCanvas) - Stationary Sticky Viewport */}
        <div className="lg:col-span-8 flex flex-col h-[520px] lg:h-[calc(100vh-190px)] lg:sticky lg:top-4 relative">
          <VetCanvas 
            speciesId={species} 
            systemId={system} 
            className="w-full h-full"
          />
        </div>
      </div>

      {/* 4. Bottom Detail Drawer / Floating Inspector Card (Shown only in Study Mode) */}
      {!isExamMode && <OrganInspectorDrawer />}
    </div>
  );
}
