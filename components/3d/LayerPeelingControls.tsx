'use client';

import React, { useState } from 'react';
import { 
  Layers, 
  Eye, 
  EyeOff, 
  Ghost, 
  Maximize2, 
  RotateCcw, 
  Sliders, 
  Sparkles, 
  ChevronDown, 
  ChevronUp, 
  Bone, 
  Heart, 
  Brain, 
  Coffee, 
  Activity, 
  Wind,
  Split
} from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { AnatomicalSystemId } from '../../types/anatomy';

interface LayerPeelingControlsProps {
  className?: string;
}

export function LayerPeelingControls({ className }: LayerPeelingControlsProps) {
  const locale = useAnatomyStore((state) => state.locale);
  const isRtl = locale === 'ar';

  const isMultiLayerPeeling = useAnatomyStore((state) => state.isMultiLayerPeeling);
  const setIsMultiLayerPeeling = useAnatomyStore((state) => state.setIsMultiLayerPeeling);
  const toggleMultiLayerPeeling = useAnatomyStore((state) => state.toggleMultiLayerPeeling);

  const layerPeelingDepth = useAnatomyStore((state) => state.layerPeelingDepth);
  const setLayerPeelingDepth = useAnatomyStore((state) => state.setLayerPeelingDepth);

  const explosionFactor = useAnatomyStore((state) => state.explosionFactor);
  const setExplosionFactor = useAnatomyStore((state) => state.setExplosionFactor);

  const systemVisibility = useAnatomyStore((state) => state.systemVisibility);
  const cycleSystemVisibility = useAnatomyStore((state) => state.cycleSystemVisibility);

  const [isCollapsed, setIsCollapsed] = useState(false);

  // Depth preset quick jumps
  const depthPresets = [
    { label: { en: 'Superficial (0%)', ar: 'سطحي (0%)' }, value: 0 },
    { label: { en: 'Vascular (35%)', ar: 'وعائي (35%)' }, value: 35 },
    { label: { en: 'Visceral (60%)', ar: 'أحشائي (60%)' }, value: 60 },
    { label: { en: 'Skeletal (100%)', ar: 'عظمي (100%)' }, value: 100 },
  ];

  // Systems for quick-toggle pills
  const layerSystems: { id: string; label: { en: string; ar: string }; icon: any; color: string }[] = [
    {
      id: 'muscular',
      label: { en: 'Muscular', ar: 'العضلي' },
      icon: Activity,
      color: '#ef4444',
    },
    {
      id: 'cardiovascular',
      label: { en: 'Cardiovascular', ar: 'القلبي والوعائي' },
      icon: Heart,
      color: '#dc2626',
    },
    {
      id: 'nervous',
      label: { en: 'Nervous', ar: 'العصبي' },
      icon: Brain,
      color: '#a855f7',
    },
    {
      id: 'digestive',
      label: { en: 'Visceral Organs', ar: 'الأحشاء الداخلية' },
      icon: Coffee,
      color: '#f59e0b',
    },
    {
      id: 'skeletal',
      label: { en: 'Skeletal', ar: 'الهيكل العظمي' },
      icon: Bone,
      color: '#e2e8f0',
    },
  ];

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`select-none rounded-2xl border border-slate-700/80 bg-slate-950/85 p-3.5 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
        isCollapsed ? 'w-auto' : 'w-80 sm:w-96 max-w-[calc(100vw-2rem)]'
      } ${className || ''}`}
    >
      {/* 1. Header with Mode Toggle & Collapse */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Sliders className="h-4 w-4" />
          </div>
          {!isCollapsed && (
            <div>
              <div className="text-xs font-bold text-white flex items-center gap-1.5">
                <span>{isRtl ? 'محرك التقشير والتفكيك 3D' : '3D Layer Peeling & Exploded Engine'}</span>
              </div>
              <div className="text-[10px] text-slate-400">
                {isRtl ? 'التحكم بعمق الطبقات والتشتيت الفراغي' : 'Progressive Strata & Radial Dispersion'}
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center gap-1.5">
          {/* Multi-Layer Mode Switch */}
          {!isCollapsed && (
            <button
              onClick={() => toggleMultiLayerPeeling()}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-bold font-mono transition-all border ${
                isMultiLayerPeeling
                  ? 'bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20'
                  : 'bg-slate-900 text-slate-400 border-slate-700 hover:text-white'
              }`}
              title={isRtl ? 'تفعيل التقشير لجميع الطبقات معاً' : 'Toggle simultaneous multi-system layer rendering'}
            >
              {isMultiLayerPeeling
                ? isRtl
                  ? 'الطبقات المتعددة (نشط)'
                  : 'Multi-Stack: ON'
                : isRtl
                ? 'طبقة مفردة'
                : 'Single Layer'}
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

      {/* 2. Expanded Controls Body */}
      {!isCollapsed && (
        <div className="mt-3 space-y-4">
          
          {/* Control A: Anatomical Depth & Peeling Slider */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-slate-300 flex items-center gap-1.5">
                <Layers className="h-3.5 w-3.5 text-cyan-400" />
                <span>{isRtl ? 'عمق التقشير التشريحي:' : 'Anatomical Depth & Peeling:'}</span>
              </span>
              <span className="font-mono text-cyan-400 font-bold text-xs">
                {layerPeelingDepth}%
              </span>
            </div>

            {/* Slider with visual strata gradient */}
            <div className="space-y-1">
              <input
                type="range"
                min="0"
                max="100"
                step="1"
                value={layerPeelingDepth}
                onChange={(e) => setLayerPeelingDepth(parseInt(e.target.value) || 0)}
                className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-red-500 via-amber-500 via-teal-500 to-slate-200 focus:outline-none accent-cyan-400"
              />

              {/* Strata Labels */}
              <div className="flex justify-between text-[9px] font-mono text-slate-500 px-0.5">
                <span>{isRtl ? 'عضلات' : 'Muscle'}</span>
                <span>{isRtl ? 'أوعية/أعصاب' : 'Vascular'}</span>
                <span>{isRtl ? 'أحشاء' : 'Viscera'}</span>
                <span>{isRtl ? 'عظام' : 'Skeleton'}</span>
              </div>
            </div>

            {/* Quick Depth Presets */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 pt-1">
              {depthPresets.map((preset) => (
                <button
                  key={preset.value}
                  onClick={() => setLayerPeelingDepth(preset.value)}
                  className={`px-1.5 py-1 rounded text-[10px] font-mono transition-all truncate ${
                    layerPeelingDepth === preset.value
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow'
                      : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border border-slate-800'
                  }`}
                >
                  {isRtl ? preset.label.ar : preset.label.en}
                </button>
              ))}
            </div>
          </div>

          {/* Control B: Individual Quick-Toggle Pills */}
          <div className="space-y-1.5 pt-2 border-t border-slate-800/80">
            <div className="flex items-center justify-between text-[11px] font-semibold text-slate-300">
              <span>{isRtl ? 'حالة ظهور الطبقات (انقر للتبديل):' : 'System Visibility (Click to Cycle):'}</span>
              <span className="text-[10px] text-slate-500 font-mono">
                🟢 Vis 🟡 Ghost ⚪ Hide
              </span>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {layerSystems.map((sys) => {
                const status = systemVisibility[sys.id] || 'visible';
                const Icon = sys.icon;

                return (
                  <button
                    key={sys.id}
                    onClick={() => cycleSystemVisibility(sys.id)}
                    className={`flex items-center justify-between p-2 rounded-xl text-xs border transition-all ${
                      status === 'visible'
                        ? 'bg-slate-900/90 border-slate-700 text-slate-200'
                        : status === 'ghost'
                        ? 'bg-amber-950/20 border-amber-500/40 text-amber-300'
                        : 'bg-slate-950/60 border-slate-850 text-slate-600 opacity-60'
                    }`}
                  >
                    <div className="flex items-center gap-1.5 truncate">
                      <Icon className="h-3.5 w-3.5 shrink-0" style={{ color: sys.color }} />
                      <span className="truncate text-[11px] font-medium">
                        {isRtl ? sys.label.ar : sys.label.en}
                      </span>
                    </div>

                    <div className="shrink-0 ml-1">
                      {status === 'visible' && (
                        <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block shadow-sm shadow-emerald-400" />
                      )}
                      {status === 'ghost' && (
                        <Ghost className="h-3 w-3 text-amber-400" />
                      )}
                      {status === 'hidden' && (
                        <EyeOff className="h-3 w-3 text-slate-600" />
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Control C: Exploded Anatomical View Slider */}
          <div className="space-y-2 pt-2 border-t border-slate-800/80">
            <div className="flex items-center justify-between text-xs font-medium">
              <span className="text-slate-300 flex items-center gap-1.5">
                <Split className="h-3.5 w-3.5 text-teal-400" />
                <span>{isRtl ? 'التفكيك الشعاعي ثلاثي الأبعاد:' : 'Radial Exploded View:'}</span>
              </span>
              <div className="flex items-center gap-2">
                <span className="font-mono text-teal-400 font-bold text-xs">
                  {explosionFactor.toFixed(1)}x
                </span>
                {explosionFactor > 0 && (
                  <button
                    onClick={() => setExplosionFactor(0)}
                    className="p-1 rounded text-slate-400 hover:text-amber-400 transition-colors"
                    title={isRtl ? 'إعادة التجميع' : 'Snap back to assembled'}
                  >
                    <RotateCcw className="h-3 w-3" />
                  </button>
                )}
              </div>
            </div>

            <input
              type="range"
              min="0"
              max="2.5"
              step="0.1"
              value={explosionFactor}
              onChange={(e) => setExplosionFactor(parseFloat(e.target.value) || 0)}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-slate-800 focus:outline-none accent-teal-400"
            />

            <div className="flex justify-between text-[9px] font-mono text-slate-500 px-0.5">
              <span>{isRtl ? 'مُجمّع (0x)' : 'Assembled (0x)'}</span>
              <span>{isRtl ? 'تشتيت طفيف (1.0x)' : 'Moderate (1.0x)'}</span>
              <span>{isRtl ? 'تفكيك كامل (2.5x)' : 'Max Dispersion (2.5x)'}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
