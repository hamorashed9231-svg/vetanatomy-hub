'use client';

import { 
  Globe, 
  Moon, 
  Sun, 
  Stethoscope, 
  Sparkles, 
  Layers, 
  Compass, 
  Search, 
  Calculator, 
  Pill,
  GitCompare,
  HardDriveDownload,
  BookOpen
} from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAnatomyStore } from '../../store/useAnatomyStore';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const locale = useAnatomyStore((state) => state.locale);
  const setLocale = useAnatomyStore((state) => state.setLocale);
  const isDarkMode = useAnatomyStore((state) => state.isDarkMode);
  const toggleDarkMode = useAnatomyStore((state) => state.toggleDarkMode);
  const setIsCommandSearchOpen = useAnatomyStore((state) => state.setIsCommandSearchOpen);
  const toggleOfflinePackManager = useAnatomyStore((state) => state.toggleOfflinePackManager);

  const toggleLanguage = () => {
    const nextLocale = locale === 'en' ? 'ar' : 'en';
    setLocale(nextLocale);
    if (pathname && (pathname.startsWith('/en') || pathname.startsWith('/ar'))) {
      const newPath = pathname.replace(/^\/(en|ar)/, `/${nextLocale}`);
      router.push(newPath);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800 bg-slate-950/85 backdrop-blur-md px-4 lg:px-8 py-3 flex items-center justify-between transition-colors">
      {/* Brand & Title */}
      <div className="flex items-center gap-3">
        <Link href={`/${locale}`} className="flex items-center gap-3 group">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 via-teal-500 to-emerald-400 p-0.5 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-cyan-400">
              <Stethoscope size={22} />
            </div>
            <span className="absolute -top-1 -right-1 w-3 h-3 bg-emerald-400 rounded-full border-2 border-slate-950 animate-pulse" />
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-1.5">
                VetAnatomy<span className="text-cyan-400 font-extrabold">Hub</span>
              </h1>
              <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-semibold text-cyan-300">
                v2.0 Multi-Species 3D
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {locale === 'ar'
                ? 'المنصة الأكاديمية التفاعلية للتشريح البيطري متعدد الأنواع ثلاثي الأبعاد'
                : 'Unified Multi-Species 3D Veterinary Anatomy & Clinical Medicine Platform'}
            </p>
          </div>
        </Link>
      </div>

      {/* Action Controls: Search, Dosage Calculator, 3D Studio, Language Switcher & Theme */}
      <div className="flex items-center gap-2 sm:gap-2.5">
        {/* Command-K Search Trigger Button */}
        <button
          onClick={() => setIsCommandSearchOpen(true)}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-700/80 bg-slate-900/90 hover:bg-slate-800 text-xs font-medium text-slate-300 hover:text-white transition-all hover:border-cyan-500/40 shadow-sm"
          title={locale === 'ar' ? 'بحث تشريحي شامل (Ctrl+K)' : 'Global Anatomical Search (Ctrl+K)'}
        >
          <Search size={14} className="text-cyan-400" />
          <span className="hidden md:inline">{locale === 'ar' ? 'بحث تشريحي...' : 'Search anatomy...'}</span>
          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-1.5 py-0.2 text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded">
            Ctrl K
          </kbd>
        </button>

        {/* Clinical Dosage Calculator Link */}
        <Link
          href={`/${locale}/toolkit/dosage`}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-xs font-semibold text-emerald-300 transition-all shadow-sm"
          title={locale === 'ar' ? 'حاسبة الجرعات وعلم الأدوية البيطرية' : 'Veterinary Drug Dosage Calculator'}
        >
          <Calculator size={15} className="text-emerald-400" />
          <span className="hidden sm:inline">{locale === 'ar' ? 'حاسبة الجرعات' : 'Dosage Calc'}</span>
        </Link>

        {/* Comparative Workstation Link */}
        <Link
          href={`/${locale}/compare`}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-violet-500/40 bg-violet-500/10 hover:bg-violet-500/20 text-xs font-semibold text-violet-300 transition-all shadow-sm"
          title={locale === 'ar' ? 'محطة المقارنة التشريحية ثنائية الشاشة' : 'Side-by-Side Comparative Workstation'}
        >
          <GitCompare size={15} className="text-violet-400" />
          <span className="hidden sm:inline">{locale === 'ar' ? 'المقارنة 3D' : 'Compare 3D'}</span>
        </Link>

        {/* 3D Spaced-Repetition Flashcards Link */}
        <Link
          href={`/${locale}/flashcards`}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-sky-500/40 bg-sky-500/10 hover:bg-sky-500/20 text-xs font-semibold text-sky-300 transition-all shadow-sm"
          title={locale === 'ar' ? 'البطاقات الذكية 3D التفاعلية (خوارزمية التكرار المتباعد SM-2)' : '3D Spaced-Repetition Flashcards (SM-2 Algorithm)'}
        >
          <Sparkles size={15} className="text-sky-400" />
          <span className="hidden sm:inline">{locale === 'ar' ? 'البطاقات 3D' : 'Flashcards'}</span>
        </Link>

        {/* Offline Lab Pack Vault Trigger Button */}
        <button
          onClick={toggleOfflinePackManager}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-teal-500/40 bg-teal-500/10 hover:bg-teal-500/20 text-xs font-semibold text-teal-300 transition-all shadow-sm"
          title={locale === 'ar' ? 'مستودع النماذج ثلاثية الأبعاد دون إنترنت (IndexedDB)' : 'Offline 3D Lab Pack Vault (IndexedDB)'}
        >
          <HardDriveDownload size={15} className="text-teal-400" />
          <span className="hidden md:inline">{locale === 'ar' ? 'أوفلاين' : 'Offline Vault'}</span>
        </button>

        {/* 3D Anatomy Studio Link */}
        <Link
          href={`/${locale}/admin/studio`}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-xs font-semibold text-cyan-300 transition-all shadow-sm"
          title={locale === 'ar' ? 'استوديو وفاحص نماذج 3D GLB' : '3D Anatomy Studio & GLB Inspector'}
        >
          <Compass size={15} className="text-cyan-400" />
          <span className="hidden sm:inline">{locale === 'ar' ? 'استوديو 3D' : '3D Studio'}</span>
        </Link>

        {/* Language Toggle Button */}
        <button
          onClick={toggleLanguage}
          className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-slate-700/80 bg-slate-900/90 hover:bg-slate-800 text-xs font-semibold text-slate-200 transition-all hover:border-cyan-500/40 shadow-sm"
          title={locale === 'en' ? 'التبديل إلى العربية' : 'Switch to English'}
        >
          <Globe size={15} className="text-cyan-400" />
          <span className="hidden sm:inline">{locale === 'en' ? 'العربية' : 'English'}</span>
        </button>

        {/* Dark / Light Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-xl border border-slate-700/80 bg-slate-900/90 hover:bg-slate-800 text-slate-300 hover:text-white transition-all shadow-sm"
          title={isDarkMode ? 'Light mode' : 'Dark mode'}
        >
          {isDarkMode ? (
            <Sun size={17} className="text-amber-400" />
          ) : (
            <Moon size={17} className="text-indigo-400" />
          )}
        </button>
      </div>
    </header>
  );
}
