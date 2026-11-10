'use client';

import { 
  Target, 
  RotateCcw, 
  BookOpen, 
  Microscope, 
  AlertTriangle, 
  Sparkles, 
  Droplet,
  Zap,
  ChevronRight,
  Stethoscope
} from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { ORGANS_DATA } from '../../data/organsData';
import { getOrganById, ORGANS_REGISTRY } from '../../data/anatomyRegistry';

export function OrganDetailCard() {
  const language = useAnatomyStore((state) => state.language);
  const isRtl = useAnatomyStore((state) => state.isRtl);
  const selectedOrganId = useAnatomyStore((state) => state.selectedOrganId);
  const isIsolatedMode = useAnatomyStore((state) => state.isIsolatedMode);
  const isolateOrgan = useAnatomyStore((state) => state.isolateOrgan);
  const clearIsolation = useAnatomyStore((state) => state.clearIsolation);
  const setSelectedOrganId = useAnatomyStore((state) => state.setSelectedOrganId);
  const setActiveTab = useAnatomyStore((state) => state.setActiveTab);

  // Check registry first, fallback to organsData
  const registryOrgan = selectedOrganId ? getOrganById(selectedOrganId) : undefined;
  const legacyOrgan = ORGANS_DATA.find((o) => o.id === selectedOrganId) || ORGANS_DATA[0];

  const organName = registryOrgan ? registryOrgan.name[language] : legacyOrgan.name[language];
  const latinName = registryOrgan ? registryOrgan.latinTaxonomyName : legacyOrgan.latinName;
  const description = registryOrgan ? registryOrgan.description[language] : legacyOrgan.function[language];
  const clinicalSignificance = registryOrgan ? registryOrgan.clinicalPearls[language] : legacyOrgan.clinicalSignificance[language];
  const bloodSupply = registryOrgan ? registryOrgan.bloodSupply[language] : undefined;
  const innervation = registryOrgan ? registryOrgan.innervation[language] : undefined;
  const commonPathologies = registryOrgan ? registryOrgan.commonPathologies : legacyOrgan.commonPathologies;
  const organId = registryOrgan ? registryOrgan.id : legacyOrgan.id;

  const t = {
    latinLabel: language === 'ar' ? 'التسمية اللاتينية (NAV)' : 'Nomina Anatomica Veterinaria',
    functionLabel: language === 'ar' ? 'الوظيفة الفسيولوجية والتشريحية' : 'Physiological Overview',
    bloodLabel: language === 'ar' ? 'التروية الدموية والأوعية' : 'Blood Supply & Drainage',
    innervationLabel: language === 'ar' ? 'التعصيب العصبي' : 'Nerve Supply / Innervation',
    clinicalSignificanceLabel: language === 'ar' ? 'الأهمية السريرية والتطبيقية' : 'Clinical Significance',
    pathologiesLabel: language === 'ar' ? 'الاعتلالات والأمراض الشائعة' : 'Common Pathologies',
    isolateBtn: language === 'ar' ? 'عزل العضو والتركيز ثلاثي الأبعاد' : 'Isolate & Focus Organ',
    isolatedActive: language === 'ar' ? 'العضو في وضع العزل (انقر للإلغاء)' : 'Isolated Mode Active (Click to exit)',
    viewCases: language === 'ar' ? 'استعراض الحالات السريرية ذات الصلة' : 'Explore Related Clinical Cases',
    clinicalPearl: language === 'ar' ? 'لؤلؤة سريرية بيطرية' : 'Veterinary Clinical Pearl',
    allOrgans: language === 'ar' ? 'قائمة الأعضاء القابلة للفحص' : 'Inspectable Organs',
  };

  return (
    <div className="flex flex-col h-full bg-slate-900/80 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-md shadow-2xl">
      {/* Top Header Card */}
      <div className="p-4 border-b border-slate-800 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 flex items-start justify-between gap-3">
        <div className="flex-1">
          {/* Trilingual Title */}
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h2 className="text-lg font-bold text-white tracking-tight">
              {organName}
            </h2>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 font-medium">{t.latinLabel}:</span>
            <span className="font-serif italic font-semibold text-cyan-300 bg-cyan-950/60 px-2 py-0.5 rounded-md border border-cyan-800/40">
              {latinName}
            </span>
          </div>
        </div>

        {/* Isolate / Focus Action Button */}
        <button
          onClick={() => {
            if (isIsolatedMode) {
              clearIsolation();
            } else {
              isolateOrgan(organId);
            }
          }}
          className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all shadow-md ${
            isIsolatedMode
              ? 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-amber-500/20'
              : 'bg-cyan-500 hover:bg-cyan-400 text-slate-950 shadow-cyan-500/20'
          }`}
          title={isIsolatedMode ? t.isolatedActive : t.isolateBtn}
        >
          {isIsolatedMode ? <RotateCcw size={14} /> : <Target size={14} />}
          <span>{isIsolatedMode ? (language === 'ar' ? 'إلغاء العزل' : 'Reset Focus') : t.isolateBtn}</span>
        </button>
      </div>

      {/* Scrollable Details Body */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3.5 text-xs text-slate-300">
        
        {/* Section 1: Physiological Function */}
        <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3.5 space-y-1.5">
          <div className="flex items-center gap-2 text-cyan-400 font-semibold">
            <BookOpen size={15} />
            <span>{t.functionLabel}</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Section 2: Blood Supply & Innervation (if available) */}
        {bloodSupply && innervation && (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 space-y-1">
              <span className="text-[11px] font-semibold text-rose-400 flex items-center gap-1.5">
                <Droplet size={13} />
                {t.bloodLabel}
              </span>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {bloodSupply}
              </p>
            </div>
            <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3 space-y-1">
              <span className="text-[11px] font-semibold text-yellow-400 flex items-center gap-1.5">
                <Zap size={13} />
                {t.innervationLabel}
              </span>
              <p className="text-slate-300 leading-relaxed text-[11px]">
                {innervation}
              </p>
            </div>
          </div>
        )}

        {/* Section 3: Clinical Significance & Surgical Pearls */}
        <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3.5 space-y-1.5">
          <div className="flex items-center gap-2 text-indigo-400 font-semibold">
            <Stethoscope size={15} />
            <span>{t.clinicalSignificanceLabel}</span>
          </div>
          <p className="text-slate-300 leading-relaxed">
            {clinicalSignificance}
          </p>
        </div>

        {/* Section 4: Common Pathologies */}
        <div className="bg-slate-950/60 border border-slate-800/80 rounded-xl p-3.5 space-y-2">
          <div className="flex items-center gap-2 text-rose-400 font-semibold">
            <AlertTriangle size={15} />
            <span>{t.pathologiesLabel}</span>
          </div>
          <ul className="space-y-1.5 list-disc list-inside text-slate-300 leading-normal">
            {commonPathologies.map((pathology, idx) => (
              <li key={idx} className="pl-1">
                {pathology[language]}
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Link to Clinical Cases */}
        <button
          onClick={() => setActiveTab('cases')}
          className="w-full py-2.5 px-3 bg-gradient-to-r from-cyan-900/40 to-teal-900/40 hover:from-cyan-900/60 hover:to-teal-900/60 border border-cyan-700/50 rounded-xl text-cyan-300 text-xs font-semibold flex items-center justify-center gap-2 transition-all shadow-sm"
        >
          <span>{t.viewCases}</span>
          <ChevronRight size={14} className={isRtl ? 'rotate-180' : ''} />
        </button>

        {/* Organ Quick Selector Grid */}
        <div className="pt-2 border-t border-slate-800">
          <span className="text-[11px] font-semibold text-slate-400 block mb-2">
            {t.allOrgans}
          </span>
          <div className="grid grid-cols-2 gap-1.5">
            {ORGANS_REGISTRY.map((item) => {
              const isItemActive = item.id === organId;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    setSelectedOrganId(item.id);
                    isolateOrgan(item.id);
                  }}
                  className={`text-left rtl:text-right px-2.5 py-1.5 rounded-lg text-[11px] truncate transition-all ${
                    isItemActive
                      ? 'bg-cyan-500/20 border border-cyan-500/60 text-cyan-200 font-semibold'
                      : 'bg-slate-950/40 hover:bg-slate-800 border border-slate-800 text-slate-400'
                  }`}
                >
                  {item.name[language]}
                </button>
              );
            })}
          </div>
        </div>

      </div>
    </div>
  );
}
