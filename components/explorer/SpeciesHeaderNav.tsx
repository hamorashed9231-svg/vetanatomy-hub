'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Dog, 
  Cat, 
  Compass, 
  Shield, 
  Layers, 
  Feather, 
  Award,
  Heart,
  Thermometer,
  Activity
} from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { SPECIES_REGISTRY } from '../../data/anatomyRegistry';
import { SpeciesId, AnatomicalSystemId } from '../../types/anatomy';

interface SpeciesHeaderNavProps {
  currentSpecies: SpeciesId;
  currentSystem: AnatomicalSystemId;
}

export function SpeciesHeaderNav({
  currentSpecies,
  currentSystem,
}: SpeciesHeaderNavProps) {
  const locale = useAnatomyStore((state) => state.locale);
  const setActiveSpecies = useAnatomyStore((state) => state.setActiveSpecies);

  const speciesList: { id: SpeciesId; icon: any }[] = [
    { id: 'equine', icon: Compass },
    { id: 'bovine', icon: Shield },
    { id: 'canine', icon: Dog },
    { id: 'feline', icon: Cat },
    { id: 'ovine_caprine', icon: Layers },
    { id: 'avian', icon: Feather },
    { id: 'camelid', icon: Award },
  ];

  const currentProfile = SPECIES_REGISTRY[currentSpecies];

  return (
    <div className="flex flex-col gap-3 bg-slate-900/80 border border-slate-800 rounded-2xl p-4 backdrop-blur-md shadow-xl">
      {/* 7 Species Selector Ribbon */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {speciesList.map((item) => {
          const profile = SPECIES_REGISTRY[item.id];
          const Icon = item.icon;
          const isSelected = currentSpecies === item.id;

          return (
            <Link
              key={item.id}
              href={`/${locale}/explorer/${item.id}/${currentSystem}`}
              onClick={() => setActiveSpecies(item.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20 scale-[1.02]'
                  : 'bg-slate-950/60 text-slate-300 hover:bg-slate-800 hover:text-white border border-slate-800'
              }`}
            >
              <Icon size={16} />
              <span>{profile.name[locale]}</span>
            </Link>
          );
        })}
      </div>

      {/* Selected Species Clinical Profile Card */}
      {currentProfile && (
        <div className="pt-2 border-t border-slate-800/80 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm">
                {currentProfile.name[locale]}
              </span>
              <span className="font-serif italic text-cyan-300 text-xs">
                ({currentProfile.scientificName})
              </span>
              <span className="text-[10px] text-slate-400 px-2 py-0.5 rounded bg-slate-800">
                {currentProfile.commonFamily[locale]}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-1 max-w-2xl">
              {currentProfile.description[locale]}
            </p>
          </div>

          {/* Normal Vitals Ribbon */}
          <div className="flex items-center gap-2 shrink-0">
            <div className="flex items-center gap-1.5 bg-slate-950/60 px-2.5 py-1 rounded-lg border border-slate-800 text-[11px]">
              <Thermometer size={13} className="text-amber-400" />
              <span className="text-slate-300 font-mono">{currentProfile.normalVitals.tempC}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-950/60 px-2.5 py-1 rounded-lg border border-slate-800 text-[11px]">
              <Heart size={13} className="text-rose-400" />
              <span className="text-slate-300 font-mono">{currentProfile.normalVitals.heartRateBpm}</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-950/60 px-2.5 py-1 rounded-lg border border-slate-800 text-[11px]">
              <Activity size={13} className="text-cyan-400" />
              <span className="text-slate-300 font-mono">{currentProfile.normalVitals.respiratoryRateBpm}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
