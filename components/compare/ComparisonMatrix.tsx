'use client';

import React, { useState } from 'react';
import { 
  GitCompare, 
  Activity, 
  HeartPulse, 
  Stethoscope, 
  Layers, 
  Copy, 
  Check, 
  Sparkles, 
  BookOpen, 
  AlertCircle,
  Zap,
  ArrowRightLeft,
  ChevronRight
} from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { ComparativeOrganPayload, ComparativeOrganRecord } from '@/lib/anatomyService';

interface ComparisonMatrixProps {
  payload?: ComparativeOrganPayload | null;
  isLoading?: boolean;
  onSelectPreset?: (presetKey: string) => void;
}

export function ComparisonMatrix({
  payload,
  isLoading = false,
}: ComparisonMatrixProps) {
  const locale = useAnatomyStore((state) => state.locale);
  const isRtl = locale === 'ar';
  const [copiedOrgan, setCopiedOrgan] = useState<string | null>(null);
  const [activeDiffFilter, setActiveDiffFilter] = useState<'all' | 'morphology' | 'vascular' | 'clinical'>('all');

  const organA = payload?.organA;
  const organB = payload?.organB;

  const handleCopyLatin = (name: string, organKey: string) => {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(name);
      setCopiedOrgan(organKey);
      setTimeout(() => setCopiedOrgan(null), 2000);
    }
  };

  if (isLoading) {
    return (
      <div 
        dir={isRtl ? 'rtl' : 'ltr'} 
        className="w-full rounded-2xl border border-slate-800 bg-slate-950/80 p-8 backdrop-blur-md shadow-2xl"
      >
        <div className="flex flex-col items-center justify-center py-12 text-center space-y-4">
          <div className="relative">
            <div className="h-14 w-14 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 animate-spin">
              <GitCompare className="h-7 w-7" />
            </div>
            <span className="absolute -top-1 -right-1 h-3.5 w-3.5 rounded-full bg-cyan-400 animate-ping" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-100">
              {isRtl ? 'جاري استرداد البيانات التشريحية المقارنة...' : 'Synthesizing Comparative Morphological Matrix...'}
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-md">
              {isRtl
                ? 'يتم فحص قواعد بيانات التشريح البيطري ومطابقة التسميات اللاتينية الرسمية (NAV) والفروق الوظيفية.'
                : 'Querying parallel Neon PostgreSQL anatomical records and aligning official NAV nomenclature.'}
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (!organA && !organB) {
    return (
      <div 
        dir={isRtl ? 'rtl' : 'ltr'}
        className="w-full rounded-2xl border border-dashed border-slate-800 bg-slate-950/60 p-8 text-center"
      >
        <ArrowRightLeft className="mx-auto h-10 w-10 text-slate-600 mb-3" />
        <h4 className="text-sm font-semibold text-slate-300">
          {isRtl ? 'لم يتم تحديد أعضاء للمقارنة' : 'No Organs Selected for Comparison'}
        </h4>
        <p className="text-xs text-slate-500 mt-1 max-w-sm mx-auto">
          {isRtl
            ? 'اختر عضواً في النافذة اليسرى وعضواً في النافذة اليمنى لبدء التحليل المورفولوجي والسريري المقارن.'
            : 'Select an organ in Viewport A and an organ in Viewport B to generate a side-by-side morphological breakdown.'}
        </p>
      </div>
    );
  }

  return (
    <section 
      dir={isRtl ? 'rtl' : 'ltr'}
      className="w-full rounded-2xl border border-slate-800/90 bg-slate-950/90 backdrop-blur-xl shadow-2xl overflow-hidden transition-all duration-300"
    >
      {/* Matrix Header Banner */}
      <div className="border-b border-slate-800 px-5 lg:px-8 py-4 bg-gradient-to-r from-slate-900/90 via-slate-950 to-slate-900/90 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-500/20 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shadow-sm">
            <GitCompare className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-sm lg:text-base font-bold text-white">
                {isRtl ? 'مصفوفة المقارنة المورفولوجية والسريرية' : 'Comparative Morphological & Clinical Matrix'}
              </h2>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-semibold text-cyan-300">
                NAV 6th Edition
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {isRtl
                ? 'تحليل ثنائي اللغة متزامن للبنية التشريحية والتروية الدموية والتعصيب والمعالم الجراحية'
                : 'Bilingual side-by-side taxonomy, vascular perfusion, innervation & surgical landmarks'}
            </p>
          </div>
        </div>

        {/* Section Filter Pills */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
          <button
            onClick={() => setActiveDiffFilter('all')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              activeDiffFilter === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isRtl ? 'الكل' : 'All Dimensions'}
          </button>
          <button
            onClick={() => setActiveDiffFilter('morphology')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              activeDiffFilter === 'morphology'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isRtl ? 'البنية والشكل' : 'Morphology'}
          </button>
          <button
            onClick={() => setActiveDiffFilter('vascular')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              activeDiffFilter === 'vascular'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isRtl ? 'التروية والتعصيب' : 'Vascular & Nerves'}
          </button>
          <button
            onClick={() => setActiveDiffFilter('clinical')}
            className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-all ${
              activeDiffFilter === 'clinical'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 shadow-sm'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isRtl ? 'السريرية والجراحة' : 'Clinical Pearls'}
          </button>
        </div>
      </div>

      {/* Dual Organ Header Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x rtl:md:divide-x-reverse divide-slate-800/80 border-b border-slate-800/80">
        {/* Left Organ Card (Organ A) */}
        <OrganHeaderSection 
          organ={organA} 
          variant="left" 
          isRtl={isRtl} 
          locale={locale} 
          onCopyLatin={() => organA && handleCopyLatin(organA.latinName, 'A')}
          isCopied={copiedOrgan === 'A'}
        />

        {/* Right Organ Card (Organ B) */}
        <OrganHeaderSection 
          organ={organB} 
          variant="right" 
          isRtl={isRtl} 
          locale={locale} 
          onCopyLatin={() => organB && handleCopyLatin(organB.latinName, 'B')}
          isCopied={copiedOrgan === 'B'}
        />
      </div>

      {/* Comparison Rows */}
      <div className="divide-y divide-slate-800/60">
        {/* 1. Official NAV Latin Nomenclature */}
        <ComparisonRow
          title={{ en: 'NAV Latin Taxonomy & Classification', ar: 'التسمية اللاتينية الرسمية (NAV) والتصنيف' }}
          icon={<BookOpen className="h-4 w-4 text-cyan-400" />}
          visible={activeDiffFilter === 'all' || activeDiffFilter === 'morphology'}
          organAContent={
            organA ? (
              <div>
                <div className="font-mono text-xs font-bold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-3 py-1.5 rounded-lg inline-block">
                  {organA.latinName}
                </div>
                <div className="text-[11px] text-slate-400 mt-1.5 font-mono">
                  {organA.species.scientificName} • {organA.system.nameEn}
                </div>
              </div>
            ) : null
          }
          organBContent={
            organB ? (
              <div>
                <div className="font-mono text-xs font-bold text-violet-300 bg-violet-950/40 border border-violet-500/30 px-3 py-1.5 rounded-lg inline-block">
                  {organB.latinName}
                </div>
                <div className="text-[11px] text-slate-400 mt-1.5 font-mono">
                  {organB.species.scientificName} • {organB.system.nameEn}
                </div>
              </div>
            ) : null
          }
        />

        {/* 2. Anatomical Structure & Morphological Differences */}
        <ComparisonRow
          title={{ en: 'Morphological Structure & Function', ar: 'البنية المورفولوجية والوظيفة الحيوية' }}
          icon={<Layers className="h-4 w-4 text-teal-400" />}
          visible={activeDiffFilter === 'all' || activeDiffFilter === 'morphology'}
          organAContent={
            organA ? (
              <div className="space-y-2">
                <p className="text-xs text-slate-200 leading-relaxed">
                  {locale === 'ar' ? organA.descriptionAr : organA.descriptionEn}
                </p>
                <div className="text-[11px] text-slate-400 italic">
                  {locale === 'ar' ? organA.descriptionEn : organA.descriptionAr}
                </div>
              </div>
            ) : null
          }
          organBContent={
            organB ? (
              <div className="space-y-2">
                <p className="text-xs text-slate-200 leading-relaxed">
                  {locale === 'ar' ? organB.descriptionAr : organB.descriptionEn}
                </p>
                <div className="text-[11px] text-slate-400 italic">
                  {locale === 'ar' ? organB.descriptionEn : organB.descriptionAr}
                </div>
              </div>
            ) : null
          }
        />

        {/* 3. Arterial Blood Supply & Venous Return */}
        <ComparisonRow
          title={{ en: 'Arterial Perfusion & Venous Drainage', ar: 'التروية الشريانية والتصريف الوريدي' }}
          icon={<HeartPulse className="h-4 w-4 text-rose-400" />}
          visible={activeDiffFilter === 'all' || activeDiffFilter === 'vascular'}
          organAContent={
            organA ? (
              <div className="space-y-1">
                <div className="p-2.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
                  <div className="text-[11px] font-medium text-rose-300">
                    {locale === 'ar' ? organA.bloodSupplyAr : organA.bloodSupplyEn}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1">
                    {locale === 'ar' ? organA.bloodSupplyEn : organA.bloodSupplyAr}
                  </div>
                </div>
              </div>
            ) : null
          }
          organBContent={
            organB ? (
              <div className="space-y-1">
                <div className="p-2.5 rounded-xl bg-rose-950/20 border border-rose-500/20">
                  <div className="text-[11px] font-medium text-rose-300">
                    {locale === 'ar' ? organB.bloodSupplyAr : organB.bloodSupplyEn}
                  </div>
                  <div className="text-[10px] text-slate-400 font-mono mt-1">
                    {locale === 'ar' ? organB.bloodSupplyEn : organB.bloodSupplyAr}
                  </div>
                </div>
              </div>
            ) : null
          }
        />

        {/* 4. Somatic & Autonomic Innervation */}
        <ComparisonRow
          title={{ en: 'Nerve Innervation & Autonomous Control', ar: 'التعصيب العصبي والتحكم اللاإرادي' }}
          icon={<Zap className="h-4 w-4 text-amber-400" />}
          visible={activeDiffFilter === 'all' || activeDiffFilter === 'vascular'}
          organAContent={
            organA ? (
              <div className="p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/20">
                <div className="text-[11px] font-medium text-amber-300">
                  {locale === 'ar' ? organA.innervationAr : organA.innervationEn}
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-1">
                  {locale === 'ar' ? organA.innervationEn : organA.innervationAr}
                </div>
              </div>
            ) : null
          }
          organBContent={
            organB ? (
              <div className="p-2.5 rounded-xl bg-amber-950/20 border border-amber-500/20">
                <div className="text-[11px] font-medium text-amber-300">
                  {locale === 'ar' ? organB.innervationAr : organB.innervationEn}
                </div>
                <div className="text-[10px] text-slate-400 font-mono mt-1">
                  {locale === 'ar' ? organB.innervationEn : organB.innervationAr}
                </div>
              </div>
            ) : null
          }
        />

        {/* 5. Clinical Pearls & Surgical Landmarks */}
        <ComparisonRow
          title={{ en: 'Clinical Pearls, Pathologies & Surgical Landmarks', ar: 'الفوائد السريرية والأمراض والمعالم الجراحية' }}
          icon={<Stethoscope className="h-4 w-4 text-emerald-400" />}
          visible={activeDiffFilter === 'all' || activeDiffFilter === 'clinical'}
          organAContent={
            organA ? (
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>{isRtl ? 'الأهمية السريرية والجراحية' : 'Surgical & Clinical Relevance'}</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {locale === 'ar' ? organA.clinicalPearlsAr : organA.clinicalPearlsEn}
                </p>
                <p className="text-[11px] text-slate-400 italic">
                  {locale === 'ar' ? organA.clinicalPearlsEn : organA.clinicalPearlsAr}
                </p>
              </div>
            ) : null
          }
          organBContent={
            organB ? (
              <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/30 space-y-1.5">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-300">
                  <Sparkles className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                  <span>{isRtl ? 'الأهمية السريرية والجراحية' : 'Surgical & Clinical Relevance'}</span>
                </div>
                <p className="text-xs text-slate-200 leading-relaxed">
                  {locale === 'ar' ? organB.clinicalPearlsAr : organB.clinicalPearlsEn}
                </p>
                <p className="text-[11px] text-slate-400 italic">
                  {locale === 'ar' ? organB.clinicalPearlsEn : organB.clinicalPearlsAr}
                </p>
              </div>
            ) : null
          }
        />
      </div>

      {/* Footer Citation */}
      <div className="px-6 py-3 bg-slate-950/90 border-t border-slate-800/80 flex flex-wrap items-center justify-between text-[11px] text-slate-500 gap-2">
        <span>
          {isRtl
            ? 'البيانات مستندة إلى أحدث إصدارات Nomina Anatomica Veterinaria ومراجع الجراحة البيطرية المعتمدة.'
            : 'Standardized according to the International Committee on Veterinary Gross Anatomical Nomenclature (NAV).'}
        </span>
        <span className="font-mono text-cyan-400">
          VetAnatomy Hub • Split-Screen Engine v2.0
        </span>
      </div>
    </section>
  );
}

// -------------------------------------------------------------
// Sub-components: Organ Header Section & Comparison Row
// -------------------------------------------------------------

function OrganHeaderSection({
  organ,
  variant,
  isRtl,
  locale,
  onCopyLatin,
  isCopied,
}: {
  organ: ComparativeOrganRecord | null | undefined;
  variant: 'left' | 'right';
  isRtl: boolean;
  locale: string;
  onCopyLatin: () => void;
  isCopied: boolean;
}) {
  const isLeft = variant === 'left';
  const accentColor = isLeft ? 'cyan' : 'violet';

  if (!organ) {
    return (
      <div className="p-6 flex flex-col items-center justify-center text-center min-h-[140px] bg-slate-900/30">
        <AlertCircle className="h-6 w-6 text-slate-600 mb-2" />
        <span className="text-xs text-slate-400 font-medium">
          {isRtl ? `لم يتم اختيار عضو للجانب (${isLeft ? 'أ' : 'ب'})` : `Select an organ for Side (${isLeft ? 'A' : 'B'})`}
        </span>
      </div>
    );
  }

  return (
    <div className={`p-5 lg:p-6 transition-colors ${isLeft ? 'bg-cyan-950/10' : 'bg-violet-950/10'}`}>
      <div className="flex items-start justify-between gap-3">
        <div>
          {/* Species Badge & System Tag */}
          <div className="flex flex-wrap items-center gap-2 mb-2">
            <span
              className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border shadow-sm ${
                isLeft
                  ? 'bg-cyan-500/15 text-cyan-300 border-cyan-500/30'
                  : 'bg-violet-500/15 text-violet-300 border-violet-500/30'
              }`}
            >
              {isRtl ? organ.species.nameAr : organ.species.nameEn}
            </span>
            <span className="text-xs font-serif italic text-slate-400">
              ({organ.species.scientificName})
            </span>
            <span className="px-2 py-0.5 rounded-md bg-slate-800 text-[10px] font-mono text-slate-300">
              {isRtl ? organ.system.nameAr : organ.system.nameEn}
            </span>
          </div>

          {/* Organ Common Names */}
          <h3 className="text-lg font-bold text-white leading-tight">
            {locale === 'ar' ? organ.nameAr : organ.nameEn}
          </h3>
          <div className="text-xs text-slate-400 mt-0.5">
            {locale === 'ar' ? organ.nameEn : organ.nameAr}
          </div>
        </div>

        {/* Latin NAV Copy Action */}
        <button
          onClick={onCopyLatin}
          className={`flex items-center gap-1 px-2.5 py-1.5 rounded-lg border text-xs font-mono transition-all ${
            isCopied
              ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
              : 'bg-slate-900/80 hover:bg-slate-800 text-slate-300 border-slate-700/70 hover:text-white'
          }`}
          title={isRtl ? 'نسخ التسمية اللاتينية الرسمية (NAV)' : 'Copy official NAV Latin name'}
        >
          {isCopied ? (
            <>
              <Check className="h-3.5 w-3.5 text-emerald-400" />
              <span className="text-[10px]">{isRtl ? 'تم النسخ' : 'Copied'}</span>
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5 text-slate-400" />
              <span className="text-[10px]">NAV</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}

function ComparisonRow({
  title,
  icon,
  organAContent,
  organBContent,
  visible = true,
}: {
  title: { en: string; ar: string };
  icon: React.ReactNode;
  organAContent: React.ReactNode;
  organBContent: React.ReactNode;
  visible?: boolean;
}) {
  const locale = useAnatomyStore((state) => state.locale);
  const isRtl = locale === 'ar';

  if (!visible) return null;

  return (
    <div className="p-4 lg:p-6 hover:bg-slate-900/30 transition-colors">
      <div className="flex items-center gap-2 mb-3">
        {icon}
        <h4 className="text-xs font-bold uppercase tracking-wider text-slate-300">
          {isRtl ? title.ar : title.en}
        </h4>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
        {/* Organ A Column */}
        <div className="min-w-0">
          {organAContent || (
            <span className="text-xs text-slate-600 italic">
              {isRtl ? 'غير متوفر' : 'Not available'}
            </span>
          )}
        </div>

        {/* Organ B Column */}
        <div className="min-w-0">
          {organBContent || (
            <span className="text-xs text-slate-600 italic">
              {isRtl ? 'غير متوفر' : 'Not available'}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
