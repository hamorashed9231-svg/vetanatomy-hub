'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  Box, 
  Pill, 
  FileText, 
  HelpCircle, 
  BookOpen,
  GitCompare
} from 'lucide-react';
import { useAnatomyStore, ActiveTab } from '../../store/useAnatomyStore';

export function TabNav() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useAnatomyStore((state) => state.locale);
  const activeTab = useAnatomyStore((state) => state.activeTab);
  const setActiveTab = useAnatomyStore((state) => state.setActiveTab);
  const activeSpecies = useAnatomyStore((state) => state.activeSpecies);
  const activeSystem = useAnatomyStore((state) => state.activeSystem);

  const tabs: { id: ActiveTab; label: { en: string; ar: string }; icon: any }[] = [
    {
      id: 'explorer',
      label: { en: '3D Multi-Species Explorer', ar: 'مستكشف التشريح متعدد الأنواع ثلاثي الأبعاد' },
      icon: Box,
    },
    {
      id: 'compare',
      label: { en: 'Comparative Workstation', ar: 'المقارنة التشريحية ثنائية الشاشة' },
      icon: GitCompare,
    },
    {
      id: 'pharmacology',
      label: { en: 'Pharmacology & Dosages', ar: 'علم الأدوية وحاسبة الجرعات' },
      icon: Pill,
    },
    {
      id: 'cases',
      label: { en: 'Clinical Cases & Labs', ar: 'الحالات السريرية والمختبر' },
      icon: FileText,
    },
    {
      id: 'flashcards',
      label: { en: '3D SM-2 Flashcards', ar: 'البطاقات الذكية 3D' },
      icon: HelpCircle,
    },
    {
      id: 'glossary',
      label: { en: 'NAV Glossary', ar: 'معجم المصطلحات البيطرية' },
      icon: BookOpen,
    },
  ];

  const handleTabClick = (tabId: ActiveTab) => {
    setActiveTab(tabId);
    if (tabId === 'explorer') {
      const sys = activeSystem === 'all' ? 'cardiovascular' : activeSystem;
      router.push(`/${locale}/explorer/${activeSpecies}/${sys}`);
    } else if (tabId === 'compare') {
      router.push(`/${locale}/compare`);
    } else if (tabId === 'pharmacology') {
      router.push(`/${locale}/toolkit/dosage`);
    } else if (tabId === 'flashcards' || tabId === 'quiz') {
      router.push(`/${locale}/flashcards`);
    } else {
      router.push('/');
    }
  };

  const isExplorerRoute = pathname && pathname.includes('/explorer/');
  const isCompareRoute = pathname && pathname.includes('/compare');
  const isDosageRoute = pathname && pathname.includes('/toolkit/dosage');
  const isFlashcardsRoute = pathname && pathname.includes('/flashcards');

  return (
    <nav className="w-full border-b border-slate-800 bg-slate-950/50 px-4 lg:px-8 py-2 overflow-x-auto no-scrollbar">
      <div className="flex items-center gap-2 min-w-max">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive =
            tab.id === 'explorer'
              ? isExplorerRoute && !isCompareRoute && !isDosageRoute && !isFlashcardsRoute
              : tab.id === 'compare'
              ? isCompareRoute
              : tab.id === 'pharmacology'
              ? isDosageRoute || activeTab === 'pharmacology'
              : tab.id === 'flashcards'
              ? isFlashcardsRoute || activeTab === 'flashcards'
              : activeTab === tab.id && !isExplorerRoute && !isCompareRoute && !isDosageRoute && !isFlashcardsRoute;

          return (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-semibold transition-all ${
                isActive
                  ? 'bg-gradient-to-r from-cyan-500/20 to-teal-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900 border border-transparent'
              }`}
            >
              <Icon size={16} className={isActive ? 'text-cyan-400' : 'text-slate-500'} />
              <span>{tab.label[locale]}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
