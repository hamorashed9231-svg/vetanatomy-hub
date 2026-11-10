'use client';

import { 
  RotateCcw, 
  Layers, 
  Maximize2, 
  Eye, 
  Box, 
  Play, 
  Pause,
  Compass,
  X
} from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';

interface ViewportControlsProps {
  onSetCameraPreset?: (preset: 'lateral_left' | 'lateral_right' | 'cranial' | 'dorsal') => void;
}

export function ViewportControls({ onSetCameraPreset }: ViewportControlsProps) {
  const language = useAnatomyStore((state) => state.language);
  const isRtl = useAnatomyStore((state) => state.isRtl);

  const explodedViewFactor = useAnatomyStore((state) => state.explodedViewFactor);
  const setExplodedViewFactor = useAnatomyStore((state) => state.setExplodedViewFactor);

  const layerPeelingDepth = useAnatomyStore((state) => state.layerPeelingDepth);
  const setLayerPeelingDepth = useAnatomyStore((state) => state.setLayerPeelingDepth);

  const xrayMode = useAnatomyStore((state) => state.xrayMode);
  const setXrayMode = useAnatomyStore((state) => state.setXrayMode);

  const wireframeMode = useAnatomyStore((state) => state.wireframeMode);
  const setWireframeMode = useAnatomyStore((state) => state.setWireframeMode);

  const autoRotate = useAnatomyStore((state) => state.autoRotate);
  const setAutoRotate = useAnatomyStore((state) => state.setAutoRotate);

  const isIsolatedMode = useAnatomyStore((state) => state.isIsolatedMode);
  const clearIsolation = useAnatomyStore((state) => state.clearIsolation);
  const resetCamera = useAnatomyStore((state) => state.resetCamera);

  const t = {
    explodedView: language === 'ar' ? 'عرض تفكيكي (Exploded)' : 'Exploded View',
    peeling: language === 'ar' ? 'تقشير الطبقات' : 'Layer Peeling',
    skin: language === 'ar' ? 'جلد' : 'Skin',
    muscle: language === 'ar' ? 'عضلات' : 'Muscle',
    organs: language === 'ar' ? 'أعضاء' : 'Organs',
    skeleton: language === 'ar' ? 'هيكل' : 'Skeleton',
    xray: language === 'ar' ? 'أشعة X' : 'X-Ray',
    wireframe: language === 'ar' ? 'إطار سلكي' : 'Wireframe',
    autoRotate: language === 'ar' ? 'تدوير تلقائي' : 'Auto Rotate',
    reset: language === 'ar' ? 'إعادة ضبط العرض' : 'Reset View',
    isolatedBanner: language === 'ar' ? 'وضع العزل النشط: انقر للخروج' : 'Organ Isolated: Click to return',
  };

  return (
    <div className={`absolute top-4 ${isRtl ? 'right-4' : 'left-4'} z-20 flex flex-col gap-3 max-w-xs pointer-events-none`}>
      {/* Active Isolation Alert Banner */}
      {isIsolatedMode && (
        <div className="pointer-events-auto flex items-center justify-between gap-2 px-3 py-2 bg-teal-500/90 text-white rounded-xl shadow-lg shadow-teal-500/20 backdrop-blur-md text-xs font-semibold animate-pulse-glow">
          <span>{t.isolatedBanner}</span>
          <button
            onClick={clearIsolation}
            className="p-1 hover:bg-white/20 rounded-lg transition-colors"
            title="Exit Isolation"
          >
            <X size={14} />
          </button>
        </div>
      )}

      {/* Primary Floating Toolbar */}
      <div className="pointer-events-auto bg-slate-900/85 backdrop-blur-md border border-slate-700/60 p-3 rounded-2xl shadow-2xl flex flex-col gap-3 text-slate-200">
        
        {/* Exploded View Slider */}
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="flex items-center gap-1.5 text-cyan-400">
              <Maximize2 size={13} />
              {t.explodedView}
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              {Math.round(explodedViewFactor * 100)}%
            </span>
          </div>
          <input
            type="range"
            min="0"
            max="1"
            step="0.02"
            value={explodedViewFactor}
            onChange={(e) => setExplodedViewFactor(parseFloat(e.target.value))}
            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-400"
          />
        </div>

        {/* Layer Peeling Depth Slider */}
        <div className="flex flex-col gap-1.5 pt-1 border-t border-slate-800">
          <div className="flex items-center justify-between text-xs font-medium">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <Layers size={13} />
              {t.peeling}
            </span>
            <span className="text-[10px] font-mono text-slate-400">
              {layerPeelingDepth <= 30
                ? t.skin
                : layerPeelingDepth <= 60
                ? t.muscle
                : layerPeelingDepth <= 85
                ? t.organs
                : t.skeleton}
            </span>
          </div>
          <input
            type="range"
            min="10"
            max="100"
            step="1"
            value={layerPeelingDepth}
            onChange={(e) => setLayerPeelingDepth(parseInt(e.target.value))}
            className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-emerald-400"
          />
          <div className="flex justify-between text-[9px] text-slate-500 px-0.5">
            <span>{t.skin}</span>
            <span>{t.muscle}</span>
            <span>{t.organs}</span>
            <span>{t.skeleton}</span>
          </div>
        </div>

        {/* Action Button Toggles */}
        <div className="grid grid-cols-4 gap-1.5 pt-2 border-t border-slate-800">
          <button
            onClick={() => setXrayMode(!xrayMode)}
            className={`flex flex-col items-center justify-center p-2 rounded-xl text-[10px] font-medium transition-all ${
              xrayMode
                ? 'bg-cyan-500 text-white shadow-md shadow-cyan-500/30'
                : 'bg-slate-800 hover:bg-slate-700/80 text-slate-300'
            }`}
            title={t.xray}
          >
            <Eye size={14} />
            <span className="mt-1">{t.xray}</span>
          </button>

          <button
            onClick={() => setWireframeMode(!wireframeMode)}
            className={`flex flex-col items-center justify-center p-2 rounded-xl text-[10px] font-medium transition-all ${
              wireframeMode
                ? 'bg-violet-500 text-white shadow-md shadow-violet-500/30'
                : 'bg-slate-800 hover:bg-slate-700/80 text-slate-300'
            }`}
            title={t.wireframe}
          >
            <Box size={14} />
            <span className="mt-1">{t.wireframe}</span>
          </button>

          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`flex flex-col items-center justify-center p-2 rounded-xl text-[10px] font-medium transition-all ${
              autoRotate
                ? 'bg-emerald-500 text-white shadow-md shadow-emerald-500/30'
                : 'bg-slate-800 hover:bg-slate-700/80 text-slate-300'
            }`}
            title={t.autoRotate}
          >
            {autoRotate ? <Pause size={14} /> : <Play size={14} />}
            <span className="mt-1">Rotate</span>
          </button>

          <button
            onClick={resetCamera}
            className="flex flex-col items-center justify-center p-2 rounded-xl text-[10px] font-medium bg-slate-800 hover:bg-slate-700/80 text-slate-300 transition-all hover:text-white"
            title={t.reset}
          >
            <RotateCcw size={14} />
            <span className="mt-1">Reset</span>
          </button>
        </div>

        {/* View Presets */}
        {onSetCameraPreset && (
          <div className="flex items-center justify-between gap-1 pt-1 border-t border-slate-800 text-[9px]">
            <span className="text-slate-400 flex items-center gap-1">
              <Compass size={11} />
              Views:
            </span>
            <button
              onClick={() => onSetCameraPreset('lateral_left')}
              className="px-1.5 py-0.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-300"
            >
              Left
            </button>
            <button
              onClick={() => onSetCameraPreset('lateral_right')}
              className="px-1.5 py-0.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-300"
            >
              Right
            </button>
            <button
              onClick={() => onSetCameraPreset('cranial')}
              className="px-1.5 py-0.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-300"
            >
              Cranial
            </button>
            <button
              onClick={() => onSetCameraPreset('dorsal')}
              className="px-1.5 py-0.5 bg-slate-800 hover:bg-slate-700 rounded text-slate-300"
            >
              Dorsal
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
