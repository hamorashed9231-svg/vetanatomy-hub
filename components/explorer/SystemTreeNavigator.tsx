'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  ChevronRight, 
  ChevronDown, 
  Layers, 
  Activity, 
  Heart, 
  Wind, 
  Brain, 
  Bone, 
  Coffee,
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { 
  SYSTEMS_REGISTRY, 
  getOrgansBySpeciesAndSystem 
} from '../../data/anatomyRegistry';
import { SpeciesId, AnatomicalSystemId } from '../../types/anatomy';

interface SystemTreeNavigatorProps {
  currentSpecies: SpeciesId;
  currentSystem: AnatomicalSystemId;
}

export function SystemTreeNavigator({
  currentSpecies,
  currentSystem,
}: SystemTreeNavigatorProps) {
  const router = useRouter();
  const locale = useAnatomyStore((state) => state.locale);
  const isRtl = useAnatomyStore((state) => state.isRtl);
  const selectedOrganId = useAnatomyStore((state) => state.selectedOrganId);
  const isolateOrgan = useAnatomyStore((state) => state.isolateOrgan);
  const setSelectedOrganId = useAnatomyStore((state) => state.setSelectedOrganId);

  const [searchQuery, setSearchQuery] = useState('');
  const [expandedSystems, setExpandedSystems] = useState<Record<string, boolean>>({
    [currentSystem]: true,
  });

  const toggleExpand = (sysId: string) => {
    setExpandedSystems((prev) => ({
      ...prev,
      [sysId]: !prev[sysId],
    }));
  };

  const getSystemIcon = (sysId: AnatomicalSystemId) => {
    switch (sysId) {
      case 'cardiovascular': return Heart;
      case 'respiratory': return Wind;
      case 'digestive': return Coffee;
      case 'nervous': return Brain;
      case 'skeletal': return Bone;
      case 'muscular': return Activity;
      case 'urogenital': return Layers;
      default: return Sparkles;
    }
  };

  // Filter organs across all systems based on bilingual search
  const filteredTree = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return SYSTEMS_REGISTRY.map((sys) => {
      const organsInSystem = getOrgansBySpeciesAndSystem(currentSpecies, sys.id);
      const matchingOrgans = organsInSystem.filter((organ) => {
        if (!q) return true;
        return (
          organ.name[locale].toLowerCase().includes(q) ||
          organ.name.en.toLowerCase().includes(q) ||
          organ.name.ar.includes(q) ||
          organ.latinTaxonomyName.toLowerCase().includes(q)
        );
      });
      return {
        ...sys,
        organs: matchingOrgans,
        totalCount: organsInSystem.length,
      };
    });
  }, [currentSpecies, locale, searchQuery]);

  const t = {
    searchPlaceholder: locale === 'ar' ? 'بحث باللاتينية، الإنجليزية، أو العربية...' : 'Search Latin, English, or Arabic...',
    navigatorTitle: locale === 'ar' ? 'شجرة الأجهزة التشريحية' : 'Anatomical System Tree',
    allOrgans: locale === 'ar' ? 'عضو مسجل' : 'organs',
  };

  return (
    <div className="flex flex-col h-full bg-slate-900/80 border border-slate-800 rounded-2xl p-4 backdrop-blur-md shadow-2xl overflow-hidden">
      {/* Title & Search Bar */}
      <div className="space-y-3 pb-3 border-b border-slate-800">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <Layers size={17} />
            <span>{t.navigatorTitle}</span>
          </div>
          <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-cyan-300">
            {currentSpecies}
          </span>
        </div>

        {/* Quick Search */}
        <div className="relative">
          <Search size={15} className="absolute left-3 rtl:right-3 top-2.5 text-slate-400" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-8 rtl:pr-8 pr-3 rtl:pl-3 py-2 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500"
          />
        </div>
      </div>

      {/* Tree View */}
      <div className="flex-1 overflow-y-auto space-y-2 pt-3 pr-1">
        {filteredTree.map((sys) => {
          const Icon = getSystemIcon(sys.id);
          const isCurrentActive = currentSystem === sys.id;
          const isExpanded = !!expandedSystems[sys.id] || searchQuery.length > 0;

          return (
            <div key={sys.id} className="rounded-xl border border-slate-800/80 overflow-hidden bg-slate-950/40">
              {/* System Header Link / Toggle */}
              <div className="flex items-center justify-between p-2.5 hover:bg-slate-800/50 transition-colors">
                <Link
                  href={`/${locale}/explorer/${currentSpecies}/${sys.id}`}
                  className="flex items-center gap-2 flex-1 text-left rtl:text-right"
                >
                  <Icon
                    size={16}
                    className={isCurrentActive ? 'text-cyan-400' : 'text-slate-400'}
                  />
                  <span
                    className={`text-xs font-semibold ${
                      isCurrentActive ? 'text-cyan-300' : 'text-slate-300'
                    }`}
                  >
                    {sys.name[locale]}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    ({sys.organs.length})
                  </span>
                </Link>

                <button
                  onClick={() => toggleExpand(sys.id)}
                  className="p-1 hover:bg-slate-800 rounded text-slate-400 hover:text-white"
                  title="Toggle tree"
                >
                  {isExpanded ? (
                    <ChevronDown size={14} />
                  ) : (
                    <ChevronRight size={14} className={isRtl ? 'rotate-180' : ''} />
                  )}
                </button>
              </div>

              {/* Collapsible Organ List */}
              {isExpanded && sys.organs.length > 0 && (
                <div className="border-t border-slate-800/80 bg-slate-950/60 p-2 space-y-1">
                  {sys.organs.map((organ) => {
                    const isSelected = selectedOrganId === organ.id;
                    return (
                      <button
                        key={organ.id}
                        onClick={() => {
                          setSelectedOrganId(organ.id);
                          isolateOrgan(organ.id);
                        }}
                        className={`w-full text-left rtl:text-right p-2 rounded-lg text-xs flex items-center justify-between transition-all ${
                          isSelected
                            ? 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-200 font-bold'
                            : 'hover:bg-slate-800/60 text-slate-300'
                        }`}
                      >
                        <div className="flex flex-col truncate">
                          <span>{organ.name[locale]}</span>
                          <span className="font-serif italic text-[10px] text-slate-400 truncate">
                            {organ.latinTaxonomyName}
                          </span>
                        </div>
                        {isSelected && (
                          <CheckCircle2 size={14} className="text-cyan-400 shrink-0 ml-1 rtl:mr-1" />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
