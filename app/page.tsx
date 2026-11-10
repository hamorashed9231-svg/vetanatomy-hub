'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { Compass, Sparkles, ExternalLink } from 'lucide-react';
import { useAnatomyStore } from '../store/useAnatomyStore';
import { AnimalSelector } from '../components/anatomy/AnimalSelector';
import { SystemSelector } from '../components/anatomy/SystemSelector';
import { OrganDetailCard } from '../components/anatomy/OrganDetailCard';
import { PharmacologyModule } from '../components/pharmacology/PharmacologyModule';
import { ClinicalCasesModule } from '../components/cases/ClinicalCasesModule';
import { QuizModule } from '../components/quiz/QuizModule';
import { GlossaryModule } from '../components/glossary/GlossaryModule';

// Dynamically import VetCanvas 3D Engine with SSR disabled
const VetCanvas = dynamic(
  () => import('../components/3d/VetCanvas').then((mod) => mod.VetCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-full min-h-[500px] flex flex-col items-center justify-center bg-slate-950 rounded-2xl border border-slate-800 text-cyan-400 gap-3">
        <div className="w-10 h-10 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin" />
        <span className="text-xs font-mono tracking-wider">
          Initializing 3D Multi-Species Engine...
        </span>
      </div>
    ),
  }
);

export default function HomePage() {
  const locale = useAnatomyStore((state) => state.locale);
  const activeTab = useAnatomyStore((state) => state.activeTab);
  const activeSpecies = useAnatomyStore((state) => state.activeSpecies);
  const activeSystem = useAnatomyStore((state) => state.activeSystem);

  const sysParam = activeSystem === 'all' ? 'cardiovascular' : activeSystem;

  return (
    <div className="flex-1 flex flex-col w-full h-full">
      {/* Tab: 3D Anatomy Explorer */}
      {activeTab === 'explorer' && (
        <div className="flex-1 flex flex-col p-3 sm:p-4 lg:p-6 gap-3 sm:gap-4 max-w-[1700px] mx-auto w-full">
          {/* Top Ribbons: Species Selection & Navigation Banner */}
          <div className="flex flex-col gap-2.5">
            <div className="flex items-center justify-between bg-gradient-to-r from-cyan-950/40 via-slate-900 to-slate-950 border border-cyan-500/30 px-4 py-2.5 rounded-2xl">
              <div className="flex items-center gap-2 text-xs font-semibold text-cyan-300">
                <Sparkles size={16} className="text-cyan-400" />
                <span>
                  {locale === 'ar'
                    ? 'وضع المستكشف المتقدم: يدعم 7 أنواع حيوانية رئيسية (الخيول، الأبقار، الكلاب، القطط، الضأن، الطيور، والإبل)'
                    : 'Advanced Multi-Species Explorer: Equine, Bovine, Canine, Feline, Ovine, Avian & Camelids'}
                </span>
              </div>
              <Link
                href={`/${locale}/explorer/${activeSpecies}/${sysParam}`}
                className="flex items-center gap-1.5 px-3 py-1 bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40 rounded-xl text-xs font-bold transition-all shadow-sm"
              >
                <span>
                  {locale === 'ar' ? 'فتح في مسار شجرة الأجهزة' : 'Open Dedicated Route'}
                </span>
                <ExternalLink size={13} />
              </Link>
            </div>

            <AnimalSelector />
            <div className="flex items-center justify-between">
              <SystemSelector />
            </div>
          </div>

          {/* Primary Workstation Dual-Pane: 3D Viewport + Organ Details (Fixed 3D Workstation) */}
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
            {/* 3D Viewport Column - Stationary Sticky Viewport */}
            <div className="lg:col-span-8 flex flex-col h-[500px] lg:h-[calc(100vh-220px)] lg:sticky lg:top-4">
              <VetCanvas />
            </div>

            {/* Organ Details Side Panel */}
            <div className="lg:col-span-4 flex flex-col h-[500px] lg:h-[calc(100vh-220px)] overflow-hidden">
              <OrganDetailCard />
            </div>
          </div>
        </div>
      )}

      {/* Tab: Pharmacology & Dosages */}
      {activeTab === 'pharmacology' && <PharmacologyModule />}

      {/* Tab: Clinical Cases & Labs */}
      {activeTab === 'cases' && <ClinicalCasesModule />}

      {/* Tab: 3D Quiz & Flashcards */}
      {activeTab === 'quiz' && <QuizModule />}

      {/* Tab: Trilingual NAV Glossary */}
      {activeTab === 'glossary' && <GlossaryModule />}
    </div>
  );
}
