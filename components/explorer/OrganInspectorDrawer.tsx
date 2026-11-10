'use client';

import React from 'react';
import { 
  X, 
  RotateCcw, 
  Activity, 
  Droplet, 
  Zap, 
  Sparkles, 
  AlertTriangle,
  BookOpen
} from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { getOrganById } from '../../data/anatomyRegistry';

export function OrganInspectorDrawer() {
  const locale = useAnatomyStore((state) => state.locale);
  const isRtl = useAnatomyStore((state) => state.isRtl);
  const selectedOrganId = useAnatomyStore((state) => state.selectedOrganId);
  const isIsolatedMode = useAnatomyStore((state) => state.isIsolatedMode);
  const exitIsolation = useAnatomyStore((state) => state.exitIsolation);

  if (!selectedOrganId) return null;

  const organ = getOrganById(selectedOrganId);
  if (!organ) return null;

  const t = {
    latinLabel: locale === 'ar' ? 'التصنيف اللاتيني (NAV)' : 'Nomina Anatomica Veterinaria',
    exitIsolation: locale === 'ar' ? 'إنهاء وضع العزل' : 'Exit Isolation Mode',
    bloodSupply: locale === 'ar' ? 'التروية الدموية والأوعية' : 'Blood Supply & Drainage',
    innervation: locale === 'ar' ? 'التعصيب والمسارات العصبية' : 'Nerve Supply / Innervation',
    clinicalPearls: locale === 'ar' ? 'لؤلؤة سريرية وأهمية جراحية' : 'Clinical Pearl & Pathology',
    commonPathologies: locale === 'ar' ? 'أبرز الاعتلالات السريرية' : 'Common Pathologies',
  };

  return (
    <div className={`fixed bottom-4 ${isRtl ? 'left-4' : 'right-4'} z-30 w-full max-w-xl animate-fade-in-up`}>
      <div className="bg-slate-900/95 border border-cyan-500/40 rounded-3xl p-5 shadow-2xl backdrop-blur-xl text-slate-200">
        
        {/* Header Ribbon */}
        <div className="flex items-start justify-between gap-3 border-b border-slate-800 pb-3">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
              <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                {organ.name[locale]}
              </h3>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="text-slate-400 font-medium">{t.latinLabel}:</span>
              <span className="font-serif italic font-semibold text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded-md border border-cyan-800/40">
                {organ.latinTaxonomyName}
              </span>
            </div>
          </div>

          {/* Action: Exit Isolation Button */}
          <button
            onClick={exitIsolation}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-md shadow-amber-500/20 transition-all"
            title={t.exitIsolation}
          >
            <RotateCcw size={14} />
            <span>{t.exitIsolation}</span>
          </button>
        </div>

        {/* Scrollable Inspection Body */}
        <div className="max-h-[360px] overflow-y-auto space-y-3.5 pr-1 mt-3.5 text-xs">
          
          {/* Physiological & Morphological Description */}
          <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl space-y-1">
            <span className="text-[11px] font-semibold text-cyan-400 flex items-center gap-1.5">
              <Activity size={13} />
              Description & Physiology
            </span>
            <p className="text-slate-300 leading-relaxed">
              {organ.description[locale]}
            </p>
          </div>

          {/* Blood Supply & Innervation Dual Column */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl space-y-1">
              <span className="text-[11px] font-semibold text-rose-400 flex items-center gap-1.5">
                <Droplet size={13} />
                {t.bloodSupply}
              </span>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {organ.bloodSupply[locale]}
              </p>
            </div>

            <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl space-y-1">
              <span className="text-[11px] font-semibold text-yellow-400 flex items-center gap-1.5">
                <Zap size={13} />
                {t.innervation}
              </span>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {organ.innervation[locale]}
              </p>
            </div>
          </div>

          {/* Clinical Pearls & Surgical Significance */}
          <div className="bg-gradient-to-r from-amber-950/40 to-slate-950 border border-amber-500/30 p-3 rounded-xl text-amber-200 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-amber-400 text-xs">
              <Sparkles size={14} />
              <span>{t.clinicalPearls}</span>
            </div>
            <p className="text-xs leading-relaxed text-amber-100/90">
              {organ.clinicalPearls[locale]}
            </p>
          </div>

          {/* Common Pathologies */}
          {organ.commonPathologies.length > 0 && (
            <div className="bg-slate-950/60 border border-slate-800 p-3 rounded-xl space-y-1.5">
              <span className="text-[11px] font-semibold text-rose-400 flex items-center gap-1.5">
                <AlertTriangle size={13} />
                {t.commonPathologies}
              </span>
              <ul className="list-disc list-inside space-y-1 text-slate-300 text-[11px]">
                {organ.commonPathologies.map((pathology, idx) => (
                  <li key={idx}>{pathology[locale]}</li>
                ))}
              </ul>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
