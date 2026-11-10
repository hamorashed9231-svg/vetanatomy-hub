'use client';

import React, { useState } from 'react';
import { 
  Scissors, 
  FlipHorizontal, 
  RotateCcw, 
  Eye, 
  EyeOff, 
  ChevronDown, 
  ChevronUp, 
  Sparkles, 
  Layers, 
  Sliders,
  Move,
  ScanLine
} from 'lucide-react';
import { useAnatomyStore, AnatomicalPlane, CrossSectionConfig } from '../../store/useAnatomyStore';

interface CrossSectionControlsProps {
  className?: string;
}

export function CrossSectionControls({ className }: CrossSectionControlsProps) {
  const locale = useAnatomyStore((state) => state.locale);
  const isRtl = locale === 'ar';

  const clippingConfig = useAnatomyStore((state) => state.clippingConfig);
  const updateClippingConfig = useAnatomyStore((state) => state.updateClippingConfig);
  const toggleClipping = useAnatomyStore((state) => state.toggleClipping);

  const [isCollapsed, setIsCollapsed] = useState(false);

  const planes: {
    id: AnatomicalPlane;
    axisLabel: string;
    label: { en: string; ar: string };
    desc: { en: string; ar: string };
  }[] = [
    {
      id: 'sagittal',
      axisLabel: 'X-Axis',
      label: { en: 'Sagittal (Left / Right)', ar: 'المستوى السهمي (أيمن / أيسر)' },
      desc: {
        en: 'Longitudinal cut dividing lateral dexter & sinister halves',
        ar: 'مقطع طولي ينصف الجسم إلى شطرين أيمن وأيسر لفحص التجاويف الداخلية',
      },
    },
    {
      id: 'dorsal',
      axisLabel: 'Y-Axis',
      label: { en: 'Dorsal (Top / Bottom)', ar: 'المستوى الظهري (ظهري / بطني)' },
      desc: {
        en: 'Horizontal cut dividing dorsal spine from ventral abdomen',
        ar: 'مقطع أفقي يقسم الجسم إلى جانب ظهري علوي وجانب بطني سفلي',
      },
    },
    {
      id: 'transverse',
      axisLabel: 'Z-Axis',
      label: { en: 'Transverse (Front / Back)', ar: 'المستوى المستعرض (أمامي / خلفي)' },
      desc: {
        en: 'Cross-sectional cut dividing cranial from caudal regions',
        ar: 'مقطع عرضي يقسم الجسم إلى منطقة قحفية أمامية وذيلية خلفية',
      },
    },
  ];

  const activePlane = planes.find((p) => p.id === clippingConfig.axis) || planes[0];

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`select-none rounded-2xl border border-slate-700/80 bg-slate-950/85 p-3.5 backdrop-blur-xl shadow-2xl transition-all duration-300 ${
        isCollapsed ? 'w-auto' : 'w-80 sm:w-96 max-w-[calc(100vw-2rem)]'
      } ${className || ''}`}
    >
      {/* 1. Header with Master Toggle & Collapse */}
      <div className="flex items-center justify-between pb-2 border-b border-slate-800/80">
        <div className="flex items-center gap-2">
          <div
            className={`flex h-7 w-7 items-center justify-center rounded-lg border transition-colors ${
              clippingConfig.enabled
                ? 'bg-rose-500/20 text-rose-400 border-rose-500/40 shadow-sm'
                : 'bg-slate-800 text-slate-400 border-slate-700'
            }`}
          >
            <Scissors className="h-4 w-4" />
          </div>
          <div>
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              <span>{isRtl ? 'محرك المقاطع التشريحية 3D' : 'Real-Time Cross-Section Plane'}</span>
              <span
                className={`text-[9px] px-1.5 py-0.2 rounded-full font-mono font-bold ${
                  clippingConfig.enabled
                    ? 'bg-rose-500/20 text-rose-300 border border-rose-500/30'
                    : 'bg-slate-800 text-slate-400'
                }`}
              >
                {clippingConfig.enabled ? (isRtl ? 'قاطع نشط' : 'SLICING ACTIVE') : (isRtl ? 'معطل' : 'INACTIVE')}
              </span>
            </div>
            <div className="text-[10px] text-slate-400">
              {isRtl ? 'تشريح داخلي حي على المستويات الطوبوغرافية' : 'Topographical Anatomical Tomography'}
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1">
          {/* Master Enable/Disable Button */}
          <button
            onClick={toggleClipping}
            className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all shadow-sm border ${
              clippingConfig.enabled
                ? 'bg-rose-500/25 text-rose-300 border-rose-500/50 hover:bg-rose-500/35'
                : 'bg-slate-900 text-slate-300 border-slate-700/80 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {clippingConfig.enabled
              ? isRtl ? 'إيقاف القطع' : 'Deactivate'
              : isRtl ? 'تفعيل القطع' : 'Activate Cut'}
          </button>

          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex h-6 w-6 items-center justify-center rounded-md text-slate-400 hover:bg-slate-800 hover:text-slate-200 transition-colors"
          >
            {isCollapsed ? <ChevronDown className="h-4 w-4" /> : <ChevronUp className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Expanded Controls Body */}
      {!isCollapsed && (
        <div className="mt-3 space-y-3.5">
          {/* 2. Anatomical Plane Selection Tabs */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] text-slate-300 font-semibold">
              <span className="flex items-center gap-1">
                <ScanLine className="h-3.5 w-3.5 text-cyan-400" />
                <span>{isRtl ? 'المستوى التشريحي للقطع' : 'Anatomical Slicing Plane'}</span>
              </span>
              <span className="font-mono text-[10px] text-cyan-400">{activePlane.axisLabel}</span>
            </div>

            <div className="grid grid-cols-3 gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
              {planes.map((plane) => {
                const isActive = clippingConfig.axis === plane.id;
                return (
                  <button
                    key={plane.id}
                    onClick={() => updateClippingConfig({ axis: plane.id, enabled: true })}
                    className={`py-1.5 px-2 rounded-lg text-[11px] font-medium transition-all text-center ${
                      isActive
                        ? 'bg-gradient-to-r from-rose-500/25 to-pink-500/25 text-rose-200 border border-rose-500/40 shadow-sm font-bold'
                        : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
                    }`}
                  >
                    <div>{isRtl ? plane.label.ar.split(' ')[1] || plane.id : plane.id.toUpperCase()}</div>
                    <div className="text-[9px] text-slate-400 font-mono mt-0.5">{plane.axisLabel}</div>
                  </button>
                );
              })}
            </div>

            {/* Current Plane Description */}
            <div className="p-2 rounded-lg bg-slate-900/40 border border-slate-800/80 text-[10.5px] text-slate-300 leading-relaxed">
              {isRtl ? activePlane.desc.ar : activePlane.desc.en}
            </div>
          </div>

          {/* 3. Real-Time Slicing Offset Slider (-1.0 to +1.0) */}
          <div className="space-y-2">
            <div className="flex items-center justify-between text-[11px]">
              <span className="text-slate-300 font-medium flex items-center gap-1">
                <Move className="h-3 w-3 text-rose-400" />
                <span>{isRtl ? 'عمق وإزاحة مستوى القطع' : 'Plane Position Offset'}</span>
              </span>
              <span className="font-mono text-xs font-bold text-rose-300">
                {clippingConfig.offset > 0 ? `+${clippingConfig.offset.toFixed(2)}` : clippingConfig.offset.toFixed(2)}
              </span>
            </div>

            <input
              type="range"
              min={-1.0}
              max={1.0}
              step={0.01}
              value={clippingConfig.offset}
              onChange={(e) => updateClippingConfig({ offset: parseFloat(e.target.value), enabled: true })}
              className="w-full h-1.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-rose-500"
            />

            {/* Quick Snap Position Pills */}
            <div className="flex items-center justify-between gap-1 text-[10px]">
              <button
                onClick={() => updateClippingConfig({ offset: -0.75, enabled: true })}
                className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800"
              >
                {isRtl ? 'البداية (-0.75)' : 'Start (-0.75)'}
              </button>
              <button
                onClick={() => updateClippingConfig({ offset: 0.0, enabled: true })}
                className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-rose-300 border border-slate-800 font-bold"
              >
                {isRtl ? 'المنتصف (0.00)' : 'Center (0.00)'}
              </button>
              <button
                onClick={() => updateClippingConfig({ offset: 0.75, enabled: true })}
                className="px-2 py-0.5 rounded bg-slate-900 hover:bg-slate-800 text-slate-400 border border-slate-800"
              >
                {isRtl ? 'النهاية (+0.75)' : 'End (+0.75)'}
              </button>
            </div>
          </div>

          {/* 4. Action Row: Invert Axis Cut & Laser Guide Helper Toggle */}
          <div className="flex items-center justify-between pt-2 border-t border-slate-800/80 gap-2">
            {/* Invert Cut Direction */}
            <button
              onClick={() => updateClippingConfig({ inverted: !clippingConfig.inverted, enabled: true })}
              className={`flex-1 flex items-center justify-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                clippingConfig.inverted
                  ? 'bg-amber-500/20 text-amber-300 border-amber-500/40 shadow-sm'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-300 border-slate-700/80 hover:text-white'
              }`}
              title={isRtl ? 'عكس اتجاه القطع لعرض النصف المقابل' : 'Invert cut direction to inspect the opposite hemisphere'}
            >
              <FlipHorizontal className="h-3.5 w-3.5 text-amber-400" />
              <span>{isRtl ? 'عكس اتجاه القطع' : 'Invert Cut'}</span>
            </button>

            {/* Laser Guide Helper Plane Toggle */}
            <button
              onClick={() => updateClippingConfig({ showPlaneHelper: !clippingConfig.showPlaneHelper })}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
                clippingConfig.showPlaneHelper
                  ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40 shadow-sm'
                  : 'bg-slate-900 hover:bg-slate-800 text-slate-400 border-slate-700/80'
              }`}
              title={isRtl ? 'إظهار / إخفاء شبكة الليزر الدليلية لمستوى القطع' : 'Show / Hide Neon Laser Cutting Plane Guide'}
            >
              {clippingConfig.showPlaneHelper ? (
                <>
                  <Eye className="h-3.5 w-3.5 text-cyan-400" />
                  <span className="hidden sm:inline">{isRtl ? 'دليل الليزر' : 'Laser Plane'}</span>
                </>
              ) : (
                <>
                  <EyeOff className="h-3.5 w-3.5 text-slate-500" />
                  <span className="hidden sm:inline">{isRtl ? 'إخفاء الدليل' : 'Hide Guide'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
