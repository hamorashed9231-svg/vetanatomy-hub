'use client';

import React, { useState, useEffect, useTransition, useMemo } from 'react';
import Link from 'next/link';
import { useSearchParams, useRouter, useParams } from 'next/navigation';
import { 
  GitCompare, 
  Lock, 
  Unlock, 
  RotateCcw, 
  Sparkles, 
  Layers, 
  Sliders, 
  Eye, 
  ChevronRight, 
  ChevronDown,
  Info,
  ArrowRightLeft,
  Maximize2,
  Box,
  Compass
} from 'lucide-react';
import { useAnatomyStore } from '../../../store/useAnatomyStore';
import { SpeciesId, AnatomicalSystemId } from '../../../types/anatomy';
import { SPECIES_REGISTRY, SYSTEMS_REGISTRY, getOrgansBySpeciesAndSystem } from '../../../data/anatomyRegistry';
import { VetCanvas } from '../../../components/3d/VetCanvas';
import { LayerPeelingControls } from '../../../components/3d/LayerPeelingControls';
import { ComparisonMatrix } from '../../../components/compare/ComparisonMatrix';
import { getComparativeOrganData, ComparativeOrganPayload } from '@/app/actions/anatomy';

interface ComparativePreset {
  id: string;
  name: { en: string; ar: string };
  description: { en: string; ar: string };
  speciesA: SpeciesId;
  systemA: AnatomicalSystemId;
  organA: string;
  speciesB: SpeciesId;
  systemB: AnatomicalSystemId;
  organB: string;
  badge: { en: string; ar: string };
}

const COMPARATIVE_PRESETS: ComparativePreset[] = [
  {
    id: 'stomach_equine_bovine',
    name: {
      en: 'Equine Simple Stomach vs. Bovine 4-Chambered Rumen',
      ar: 'المعدة البسيطة في الخيل مقابل الكرش المركب في الأبقار',
    },
    description: {
      en: 'Contrast monogastric stomach with margo plicatus against massive ruminant fermentation vat.',
      ar: 'مقارنة المعدة أحادية التجاويف ذات الحافة المطوية بالكرش التخميري الضخم في المجترات.',
    },
    speciesA: 'equine',
    systemA: 'digestive',
    organA: 'Mesh_Equine_Gaster',
    speciesB: 'bovine',
    systemB: 'digestive',
    organB: 'Mesh_Bovine_Rumen',
    badge: { en: 'Forestomach vs Hindgut', ar: 'التخمير الأمامي مقابل الخلفي' },
  },
  {
    id: 'stomach_bovine_camelid',
    name: {
      en: 'Bovine 4-Chambered Rumen vs. Camelid 3-Chambered Stomach',
      ar: 'معدة الأبقار الرباعية مقابل معدة الإبليات ثلاثية الحجرات (C1/C2/C3)',
    },
    description: {
      en: 'True ruminant forestomachs vs camelid pseudo-ruminant C1 glandular water saccules lacking an omasum.',
      ar: 'معدة المجترات الحقيقية مقابل شبيهات المجترات ثلاثية التجاويف ذات الأكياس الغدية والمفتقرة لأم التلافيف.',
    },
    speciesA: 'bovine',
    systemA: 'digestive',
    organA: 'Mesh_Bovine_Rumen',
    speciesB: 'camelid',
    systemB: 'digestive',
    organB: 'Mesh_Camelid_C1',
    badge: { en: 'Pseudo-Ruminant Adaptation', ar: 'تكيف شبيهات المجترات' },
  },
  {
    id: 'skeletal_canine_feline',
    name: {
      en: 'Canine vs. Feline Skeletal Framework & Clavicle',
      ar: 'الهيكل العظمي في الكلاب مقابل القطط والترقوة الحرة العائمة',
    },
    description: {
      en: 'Carnivore cursorial pelvic/limb stability vs hyper-flexible feline spine and free-floating vestigial clavicle.',
      ar: 'دعامة العدو والوثب القوية في الكلاب مقابل المرونة الفائقة والترقوة الحرة في القطط.',
    },
    speciesA: 'canine',
    systemA: 'skeletal',
    organA: 'Mesh_Canine_ColumnaVertebralis',
    speciesB: 'feline',
    systemB: 'skeletal',
    organB: 'Mesh_Feline_Clavicula',
    badge: { en: 'Carnivora Locomotion', ar: 'ميكانيكا حركة الضواري' },
  },
  {
    id: 'heart_equine_canine',
    name: {
      en: 'Equine Athletic Heart vs. Canine Conical Heart',
      ar: 'القلب الرياضي الضخم في الخيول مقابل القلب المخروطي في الكلاب',
    },
    description: {
      en: 'Massive aerobic cardiac reserve (4-5 kg) vs high-frequency canine monogastric perfusion.',
      ar: 'الاحتياطي القلبي الهوائي الهائل في الخيول (4-5 كغ) مقابل ديناميكا القلب في الكلاب.',
    },
    speciesA: 'equine',
    systemA: 'cardiovascular',
    organA: 'Mesh_Equine_Cor',
    speciesB: 'canine',
    systemB: 'cardiovascular',
    organB: 'Mesh_Canine_Cor',
    badge: { en: 'Cardiovascular Dynamics', ar: 'ديناميكا الدورة الدموية' },
  },
  {
    id: 'respiratory_avian_bovine',
    name: {
      en: 'Avian Parabronchial Lungs vs. Mammalian Lobed Lungs',
      ar: 'الرئتان الطيريتان ذات الأكياس الهوائية مقابل الرئة الفصية الثديية في الأبقار',
    },
    description: {
      en: 'Rigid unidirectional flow parabronchi with air sacs vs tidal expansion alveolar lobes in ruminants.',
      ar: 'التدفق أحادي الاتجاه عبر القصبات والأكياس الهوائية في الطيور مقابل التوسع الحويصلي في الأبقار.',
    },
    speciesA: 'avian',
    systemA: 'respiratory',
    organA: 'Mesh_Avian_Pulmo',
    speciesB: 'bovine',
    systemB: 'respiratory',
    organB: 'Mesh_Bovine_PulmoDexter',
    badge: { en: 'Aerodynamic vs Tidal Flow', ar: 'التبادل الهوائي المستمر' },
  },
];

export default function ComparativeWorkstationPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const params = useParams();
  const locale = useAnatomyStore((state) => state.locale);
  const isRtl = locale === 'ar';

  const isCameraSynced = useAnatomyStore((state) => state.isCameraSynced);
  const toggleCameraSync = useAnatomyStore((state) => state.toggleCameraSync);
  const resetCamera = useAnatomyStore((state) => state.resetCamera);
  const isMultiLayerPeeling = useAnatomyStore((state) => state.isMultiLayerPeeling);
  const toggleMultiLayerPeeling = useAnatomyStore((state) => state.toggleMultiLayerPeeling);

  // Read URL query params or fallback to default preset
  const paramSpeciesA = searchParams?.get('speciesA') as SpeciesId | null;
  const paramSystemA = searchParams?.get('systemA') as AnatomicalSystemId | null;
  const paramOrganA = searchParams?.get('organA');

  const paramSpeciesB = searchParams?.get('speciesB') as SpeciesId | null;
  const paramSystemB = searchParams?.get('systemB') as AnatomicalSystemId | null;
  const paramOrganB = searchParams?.get('organB');

  // Default state: Equine Simple Stomach vs Bovine Rumen
  const [speciesA, setSpeciesA] = useState<SpeciesId>(paramSpeciesA || 'equine');
  const [systemA, setSystemA] = useState<AnatomicalSystemId>(paramSystemA || 'digestive');
  const [organIdA, setOrganIdA] = useState<string>(paramOrganA || 'Mesh_Equine_Gaster');

  const [speciesB, setSpeciesB] = useState<SpeciesId>(paramSpeciesB || 'bovine');
  const [systemB, setSystemB] = useState<AnatomicalSystemId>(paramSystemB || 'digestive');
  const [organIdB, setOrganIdB] = useState<string>(paramOrganB || 'Mesh_Bovine_Rumen');

  const [activePresetId, setActivePresetId] = useState<string>('stomach_equine_bovine');
  const [showPeelingHUD, setShowPeelingHUD] = useState(false);

  // Server Action state
  const [comparativePayload, setComparativePayload] = useState<ComparativeOrganPayload | null>(null);
  const [isPending, startTransition] = useTransition();

  // Load comparative organ data from Neon PostgreSQL whenever organA or organB changes
  useEffect(() => {
    let isCancelled = false;

    startTransition(async () => {
      try {
        const result = await getComparativeOrganData(organIdA, organIdB);
        if (!isCancelled) {
          setComparativePayload(result);
        }
      } catch (err) {
        console.error('Failed to fetch comparative organ data:', err);
      }
    });

    return () => {
      isCancelled = true;
    };
  }, [organIdA, organIdB]);

  // Handle Preset Selection
  const applyPreset = (preset: ComparativePreset) => {
    setActivePresetId(preset.id);
    setSpeciesA(preset.speciesA);
    setSystemA(preset.systemA);
    setOrganIdA(preset.organA);

    setSpeciesB(preset.speciesB);
    setSystemB(preset.systemB);
    setOrganIdB(preset.organB);
  };

  // Available organs for left side selector
  const organsA = useMemo(() => {
    return getOrgansBySpeciesAndSystem(speciesA, systemA);
  }, [speciesA, systemA]);

  // Available organs for right side selector
  const organsB = useMemo(() => {
    return getOrgansBySpeciesAndSystem(speciesB, systemB);
  }, [speciesB, systemB]);

  return (
    <div 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className="flex-1 w-full bg-slate-950 text-slate-100 flex flex-col px-3 sm:px-6 lg:px-8 py-5 space-y-6"
    >
      {/* Top Banner & Control Ribbon */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-900/95 via-slate-950 to-slate-900/95 border border-slate-800 shadow-xl">
        <div className="space-y-1">
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500/20 via-teal-500/20 to-emerald-500/20 border border-cyan-500/30 text-cyan-400 shadow-sm">
              <GitCompare className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg lg:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                  <span>{isRtl ? 'محطة المقارنة التشريحية ثنائية الشاشة' : 'Side-by-Side Comparative Workstation'}</span>
                </h1>
                <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-semibold text-cyan-300">
                  Dual 3D Viewport Synchronizer
                </span>
              </div>
              <p className="text-xs text-slate-400">
                {isRtl
                  ? 'مقارنة متزامنة للبنى التشريحية عبر مختلف الفصائل البيطرية مع قفل حركة الكاميرا ومصفوفة الفروق المورفولوجية'
                  : 'Synchronized cross-species 3D anatomical comparisons with locked camera coordination and morphological diffs'}
              </p>
            </div>
          </div>
        </div>

        {/* Global Workstation Controls: Camera Sync, Reset & Multi-Layer Peeling */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Synchronize Cameras Toggle Button */}
          <button
            onClick={toggleCameraSync}
            className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-lg border backdrop-blur-md ${
              isCameraSynced
                ? 'bg-gradient-to-r from-cyan-500/30 to-teal-500/30 text-cyan-200 border-cyan-400/60 shadow-cyan-500/10 ring-1 ring-cyan-400/30'
                : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border-slate-700/80 hover:text-white'
            }`}
            title={
              isRtl
                ? isCameraSynced
                  ? 'الكاميرات متزامنة حالياً: تحريك أي نافذة يعكس الزوايا في الأخرى (انقر للإلغاء)'
                  : 'مزامنة الكاميرات: قفل الدوران والتقريب بين الشاشتين'
                : isCameraSynced
                ? 'Cameras Synchronized: Orbiting one viewport mirrors into the other'
                : 'Sync Cameras: Mirror orbit, pan & zoom between dual viewports'
            }
          >
            {isCameraSynced ? (
              <>
                <Lock className="h-4 w-4 text-cyan-400 animate-pulse" />
                <span>{isRtl ? 'الكاميرات متزامنة' : 'Cameras Synced'}</span>
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping ml-1" />
              </>
            ) : (
              <>
                <Unlock className="h-4 w-4 text-slate-400" />
                <span>{isRtl ? 'مزامنة الكاميرات' : 'Sync Cameras'}</span>
              </>
            )}
          </button>

          {/* Reset Cameras */}
          <button
            onClick={resetCamera}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900/90 hover:bg-slate-800 text-slate-300 border border-slate-700/80 hover:text-white transition-all shadow-sm"
            title={isRtl ? 'إعادة ضبط وضع الكاميرات الافتراضي' : 'Reset Camera Positions'}
          >
            <RotateCcw className="h-3.5 w-3.5 text-slate-400" />
            <span className="hidden sm:inline">{isRtl ? 'إعادة ضبط' : 'Reset View'}</span>
          </button>

          {/* Layer Peeling & Exploded View Toggle */}
          <button
            onClick={() => setShowPeelingHUD(!showPeelingHUD)}
            className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold transition-all border shadow-sm ${
              showPeelingHUD || isMultiLayerPeeling
                ? 'bg-teal-500/20 text-teal-300 border-teal-500/40 shadow-teal-500/10'
                : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border-slate-700/80 hover:text-white'
            }`}
            title={isRtl ? 'محرك التقشير والتفكيك التشريحي' : 'Layer Peeling & Exploded View'}
          >
            <Sliders className="h-3.5 w-3.5 text-teal-400" />
            <span className="hidden sm:inline">{isRtl ? 'التقشير والتفكيك' : 'Peeling HUD'}</span>
          </button>

          {/* Return to Explorer */}
          <Link
            href={`/${locale}/explorer/${speciesA}/${systemA}`}
            className="flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-slate-900/90 hover:bg-slate-800 text-cyan-400 border border-slate-700/80 hover:border-cyan-500/40 transition-all shadow-sm"
            title={isRtl ? 'العودة للمستكشف الكامل' : 'Return to Full 3D Explorer'}
          >
            <Box className="h-3.5 w-3.5" />
            <span className="hidden md:inline">{isRtl ? 'المستكشف' : 'Explorer'}</span>
          </Link>
        </div>
      </div>

      {/* Floating Progressive Layer Peeling & Exploded View HUD (If toggled on) */}
      {showPeelingHUD && (
        <div className="flex justify-center">
          <div className="max-w-2xl w-full">
            <LayerPeelingControls />
          </div>
        </div>
      )}

      {/* Curriculum Comparison Presets Ribbon */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-slate-400 px-1">
          <span className="font-semibold text-slate-300 flex items-center gap-1.5">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>{isRtl ? 'مقارنات المناهج البيطرية النموذجية' : 'Veterinary Curriculum Comparative Presets'}</span>
          </span>
          <span className="text-[11px] text-slate-500">
            {isRtl ? 'انقر على أي نموذج لتطبيقه فوراً على الشاشتين' : 'Click preset to load dual models and clinical matrix'}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2.5">
          {COMPARATIVE_PRESETS.map((preset) => {
            const isActive = activePresetId === preset.id;
            return (
              <button
                key={preset.id}
                onClick={() => applyPreset(preset)}
                className={`p-3 rounded-xl border text-left rtl:text-right transition-all flex flex-col justify-between gap-2 text-xs group ${
                  isActive
                    ? 'bg-gradient-to-br from-cyan-950/60 to-slate-900 border-cyan-400/50 shadow-lg shadow-cyan-500/5 ring-1 ring-cyan-400/30'
                    : 'bg-slate-900/50 hover:bg-slate-900/90 border-slate-800/80 hover:border-slate-700 text-slate-300'
                }`}
              >
                <div>
                  <span
                    className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider mb-1.5 border ${
                      isActive
                        ? 'bg-cyan-500/20 text-cyan-300 border-cyan-500/40'
                        : 'bg-slate-800 text-slate-400 border-slate-700/60'
                    }`}
                  >
                    {isRtl ? preset.badge.ar : preset.badge.en}
                  </span>
                  <h4 className="font-bold text-white text-xs leading-snug line-clamp-2">
                    {isRtl ? preset.name.ar : preset.name.en}
                  </h4>
                </div>
                <p className="text-[11px] text-slate-400 line-clamp-2 leading-relaxed">
                  {isRtl ? preset.description.ar : preset.description.en}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Dual Synchronized 3D Viewports Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch relative">
        {/* Floating Center Sync Badge Overlay for Desktop */}
        <div className="hidden lg:flex absolute left-1/2 top-4 -translate-x-1/2 z-30 pointer-events-none">
          <div
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-[11px] font-mono shadow-2xl backdrop-blur-md transition-all ${
              isCameraSynced
                ? 'bg-cyan-950/90 text-cyan-300 border-cyan-400/60 shadow-cyan-500/20'
                : 'bg-slate-950/80 text-slate-400 border-slate-800'
            }`}
          >
            {isCameraSynced ? (
              <>
                <Lock className="h-3 w-3 text-cyan-400" />
                <span>{isRtl ? 'كاميرات متزامنة 3D' : 'CAMERAS LINKED'}</span>
              </>
            ) : (
              <>
                <Unlock className="h-3 w-3 text-slate-500" />
                <span>{isRtl ? 'كاميرات مستقلة' : 'INDEPENDENT CAMERAS'}</span>
              </>
            )}
          </div>
        </div>

        {/* Viewport A (Left Side) */}
        <div className="flex flex-col space-y-3">
          {/* Viewport A Selector Toolbar */}
          <div className="p-3.5 rounded-xl bg-cyan-950/20 border border-cyan-500/30 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-300 text-xs font-bold font-mono">
                A
              </span>
              <span className="text-xs font-bold text-cyan-300">
                {isRtl ? 'الجانب الأيسر (النموذج أ)' : 'Viewport A (Species A)'}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Species A Dropdown */}
              <select
                value={speciesA}
                onChange={(e) => {
                  const newSpecies = e.target.value as SpeciesId;
                  setSpeciesA(newSpecies);
                  // auto select first organ in new species/system
                  const nextOrgans = getOrgansBySpeciesAndSystem(newSpecies, systemA);
                  if (nextOrgans.length > 0) setOrganIdA(nextOrgans[0].meshId);
                }}
                className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-lg px-2.5 py-1.5 font-medium focus:outline-none focus:border-cyan-400"
              >
                {Object.values(SPECIES_REGISTRY).map((s) => (
                  <option key={s.id} value={s.id}>
                    {isRtl ? s.name.ar : s.name.en}
                  </option>
                ))}
              </select>

              {/* System A Dropdown */}
              <select
                value={systemA}
                onChange={(e) => {
                  const newSys = e.target.value as AnatomicalSystemId;
                  setSystemA(newSys);
                  const nextOrgans = getOrgansBySpeciesAndSystem(speciesA, newSys);
                  if (nextOrgans.length > 0) setOrganIdA(nextOrgans[0].meshId);
                }}
                className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-lg px-2.5 py-1.5 font-medium focus:outline-none focus:border-cyan-400"
              >
                {SYSTEMS_REGISTRY.map((sys) => (
                  <option key={sys.id} value={sys.id}>
                    {isRtl ? sys.name.ar : sys.name.en}
                  </option>
                ))}
              </select>

              {/* Organ A Dropdown */}
              <select
                value={organIdA}
                onChange={(e) => setOrganIdA(e.target.value)}
                className="bg-slate-900 border border-cyan-500/40 text-xs text-cyan-200 rounded-lg px-2.5 py-1.5 font-medium focus:outline-none focus:border-cyan-400 max-w-[170px] truncate"
              >
                {organsA.map((o) => (
                  <option key={o.meshId} value={o.meshId}>
                    {isRtl ? o.name.ar : o.name.en}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3D Canvas A */}
          <div className="relative w-full h-[540px]">
            <VetCanvas
              viewportId="left"
              speciesId={speciesA}
              systemId={systemA}
              activeOrganId={organIdA}
              onSelectOrgan={(meshId) => setOrganIdA(meshId)}
              onSelectSystem={(sys) => setSystemA(sys)}
              showHUD={true}
              showLayerPeelingControls={false}
              className="ring-1 ring-cyan-500/30"
            />
          </div>
        </div>

        {/* Viewport B (Right Side) */}
        <div className="flex flex-col space-y-3">
          {/* Viewport B Selector Toolbar */}
          <div className="p-3.5 rounded-xl bg-violet-950/20 border border-violet-500/30 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-violet-500/20 text-violet-300 text-xs font-bold font-mono">
                B
              </span>
              <span className="text-xs font-bold text-violet-300">
                {isRtl ? 'الجانب الأيمن (النموذج ب)' : 'Viewport B (Species B)'}
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {/* Species B Dropdown */}
              <select
                value={speciesB}
                onChange={(e) => {
                  const newSpecies = e.target.value as SpeciesId;
                  setSpeciesB(newSpecies);
                  const nextOrgans = getOrgansBySpeciesAndSystem(newSpecies, systemB);
                  if (nextOrgans.length > 0) setOrganIdB(nextOrgans[0].meshId);
                }}
                className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-lg px-2.5 py-1.5 font-medium focus:outline-none focus:border-violet-400"
              >
                {Object.values(SPECIES_REGISTRY).map((s) => (
                  <option key={s.id} value={s.id}>
                    {isRtl ? s.name.ar : s.name.en}
                  </option>
                ))}
              </select>

              {/* System B Dropdown */}
              <select
                value={systemB}
                onChange={(e) => {
                  const newSys = e.target.value as AnatomicalSystemId;
                  setSystemB(newSys);
                  const nextOrgans = getOrgansBySpeciesAndSystem(speciesB, newSys);
                  if (nextOrgans.length > 0) setOrganIdB(nextOrgans[0].meshId);
                }}
                className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-lg px-2.5 py-1.5 font-medium focus:outline-none focus:border-violet-400"
              >
                {SYSTEMS_REGISTRY.map((sys) => (
                  <option key={sys.id} value={sys.id}>
                    {isRtl ? sys.name.ar : sys.name.en}
                  </option>
                ))}
              </select>

              {/* Organ B Dropdown */}
              <select
                value={organIdB}
                onChange={(e) => setOrganIdB(e.target.value)}
                className="bg-slate-900 border border-violet-500/40 text-xs text-violet-200 rounded-lg px-2.5 py-1.5 font-medium focus:outline-none focus:border-violet-400 max-w-[170px] truncate"
              >
                {organsB.map((o) => (
                  <option key={o.meshId} value={o.meshId}>
                    {isRtl ? o.name.ar : o.name.en}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3D Canvas B */}
          <div className="relative w-full h-[540px]">
            <VetCanvas
              viewportId="right"
              speciesId={speciesB}
              systemId={systemB}
              activeOrganId={organIdB}
              onSelectOrgan={(meshId) => setOrganIdB(meshId)}
              onSelectSystem={(sys) => setSystemB(sys)}
              showHUD={true}
              showLayerPeelingControls={false}
              className="ring-1 ring-violet-500/30"
            />
          </div>
        </div>
      </div>

      {/* Side-by-Side Morphological & Clinical Matrix */}
      <div className="pt-4">
        <ComparisonMatrix
          payload={comparativePayload}
          isLoading={isPending}
        />
      </div>
    </div>
  );
}
