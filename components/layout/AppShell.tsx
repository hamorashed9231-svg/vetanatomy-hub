'use client';

import { useEffect, ReactNode } from 'react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { Header } from './Header';
import { TabNav } from './TabNav';
import { GlobalCommandSearch } from '../search/GlobalCommandSearch';
import { OfflinePackManager } from '../pwa/OfflinePackManager';

interface AppShellProps {
  children: ReactNode;
}

export function AppShell({ children }: AppShellProps) {
  const language = useAnatomyStore((state) => state.language);
  const isRtl = useAnatomyStore((state) => state.isRtl);
  const isDarkMode = useAnatomyStore((state) => state.isDarkMode);
  const isOfflinePackManagerOpen = useAnatomyStore((state) => state.isOfflinePackManagerOpen);
  const setIsOfflinePackManagerOpen = useAnatomyStore((state) => state.setIsOfflinePackManagerOpen);

  // Sync document direction, language attribute, and dark mode class
  useEffect(() => {
    document.documentElement.dir = isRtl ? 'rtl' : 'ltr';
    document.documentElement.lang = language;

    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [language, isRtl, isDarkMode]);

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`min-h-screen flex flex-col transition-colors ${
        isDarkMode ? 'bg-slate-950 text-slate-100' : 'bg-slate-100 text-slate-900'
      } ${language === 'ar' ? 'font-arabic' : 'font-sans'}`}
    >
      <Header />
      <TabNav />
      <main className="flex-1 flex flex-col">{children}</main>
      <GlobalCommandSearch />
      <OfflinePackManager
        isOpen={isOfflinePackManagerOpen}
        onClose={() => setIsOfflinePackManagerOpen(false)}
      />
    </div>
  );
}
