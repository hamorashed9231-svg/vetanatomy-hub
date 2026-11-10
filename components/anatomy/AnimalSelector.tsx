'use client';

import { 
  Dog, 
  Cat, 
  Compass, 
  Shield, 
  Layers, 
  Feather,
  Heart,
  Thermometer,
  Activity
} from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { ANIMALS_DATA } from '../../data/animals';
import { AnimalSpecies } from '../../types/anatomy';

export function AnimalSelector() {
  const language = useAnatomyStore((state) => state.language);
  const activeSpecies = useAnatomyStore((state) => state.activeSpecies);
  const setActiveSpecies = useAnatomyStore((state) => state.setActiveSpecies);

  const speciesList: { id: AnimalSpecies; icon: any }[] = [
    { id: 'equine', icon: Compass },
    { id: 'bovine', icon: Shield },
    { id: 'canine', icon: Dog },
    { id: 'feline', icon: Cat },
    { id: 'ovine', icon: Layers },
    { id: 'avian', icon: Feather },
    { id: 'camelid', icon: Layers },
  ];

  const currentProfile = ANIMALS_DATA[activeSpecies];

  return (
    <div className="flex flex-col gap-3 bg-slate-900/60 border border-slate-800/80 rounded-2xl p-3.5 backdrop-blur-md">
      {/* Species Carousel / Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
        {speciesList.map((item) => {
          const profile = ANIMALS_DATA[item.id];
          const Icon = item.icon;
          const isSelected = activeSpecies === item.id;

          return (
            <button
              key={item.id}
              onClick={() => setActiveSpecies(item.id)}
              className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                isSelected
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20 font-bold scale-[1.02]'
                  : 'bg-slate-800/90 text-slate-300 hover:bg-slate-700/80 hover:text-white'
              }`}
            >
              <Icon size={16} />
              <span>{profile.name[language]}</span>
            </button>
          );
        })}
      </div>

      {/* Selected Species Quick Clinical Vitals Ribbon */}
      {currentProfile && (
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-2 border-t border-slate-800/80 text-xs">
          <div className="flex items-center gap-2 bg-slate-950/50 px-2.5 py-1.5 rounded-lg border border-slate-800/60">
            <Thermometer size={14} className="text-amber-400 shrink-0" />
            <div className="overflow-hidden">
              <span className="text-[10px] text-slate-400 block truncate">
                {language === 'ar' ? 'حرارة الجسم الطبيعية' : 'Normal Temp'}
              </span>
              <span className="font-mono text-slate-200 text-[11px] truncate block">
                {currentProfile.normalVitals.tempC}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-950/50 px-2.5 py-1.5 rounded-lg border border-slate-800/60">
            <Heart size={14} className="text-rose-400 shrink-0" />
            <div className="overflow-hidden">
              <span className="text-[10px] text-slate-400 block truncate">
                {language === 'ar' ? 'معدل ضربات القلب' : 'Heart Rate'}
              </span>
              <span className="font-mono text-slate-200 text-[11px] truncate block">
                {currentProfile.normalVitals.heartRateBpm}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-slate-950/50 px-2.5 py-1.5 rounded-lg border border-slate-800/60">
            <Activity size={14} className="text-cyan-400 shrink-0" />
            <div className="overflow-hidden">
              <span className="text-[10px] text-slate-400 block truncate">
                {language === 'ar' ? 'معدل التنفس' : 'Respiratory Rate'}
              </span>
              <span className="font-mono text-slate-200 text-[11px] truncate block">
                {currentProfile.normalVitals.respiratoryRateBpm}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
