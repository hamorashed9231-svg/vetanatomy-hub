'use client';

import { 
  Heart, 
  Wind, 
  Brain, 
  Activity, 
  Layers, 
  Bone, 
  Sparkles 
} from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { AnatomicalSystem } from '../../types/anatomy';

export function SystemSelector() {
  const language = useAnatomyStore((state) => state.language);
  const activeSystem = useAnatomyStore((state) => state.activeSystem);
  const setActiveSystem = useAnatomyStore((state) => state.setActiveSystem);

  const systems: { id: AnatomicalSystem | 'all'; label: { en: string; ar: string }; icon: any; color: string }[] = [
    {
      id: 'all',
      label: { en: 'All Systems', ar: 'كافة الأجهزة' },
      icon: Sparkles,
      color: 'text-cyan-400',
    },
    {
      id: 'cardiovascular',
      label: { en: 'Cardiovascular', ar: 'القلب والأوعية الدموية' },
      icon: Heart,
      color: 'text-rose-500',
    },
    {
      id: 'respiratory',
      label: { en: 'Respiratory', ar: 'التنفسي' },
      icon: Wind,
      color: 'text-sky-400',
    },
    {
      id: 'digestive',
      label: { en: 'Digestive', ar: 'الهضمي' },
      icon: Activity,
      color: 'text-amber-500',
    },
    {
      id: 'nervous',
      label: { en: 'Nervous', ar: 'العصبي' },
      icon: Brain,
      color: 'text-yellow-400',
    },
    {
      id: 'urogenital',
      label: { en: 'Urogenital', ar: 'البولي والتناسلي' },
      icon: Layers,
      color: 'text-purple-400',
    },
    {
      id: 'skeletal',
      label: { en: 'Skeletal', ar: 'الهيكل العظمي' },
      icon: Bone,
      color: 'text-slate-300',
    },
  ];

  return (
    <div className="flex items-center gap-1.5 overflow-x-auto py-1 no-scrollbar">
      {systems.map((sys) => {
        const Icon = sys.icon;
        const isActive = activeSystem === sys.id;

        return (
          <button
            key={sys.id}
            onClick={() => setActiveSystem(sys.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium whitespace-nowrap transition-all ${
              isActive
                ? 'bg-slate-800 text-cyan-300 border border-cyan-500/50 shadow-sm'
                : 'bg-slate-900/60 text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-slate-800/60'
            }`}
          >
            <Icon size={14} className={isActive ? 'text-cyan-400' : sys.color} />
            <span>{sys.label[language]}</span>
          </button>
        );
      })}
    </div>
  );
}
