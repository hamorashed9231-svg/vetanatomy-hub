'use client';

import React, { useState, useEffect, useRef, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Search, 
  Command, 
  X, 
  ArrowRight, 
  ExternalLink, 
  Sparkles, 
  Layers, 
  Activity, 
  Heart, 
  Wind, 
  Coffee, 
  Brain, 
  Bone, 
  Clock,
  Compass
} from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { searchOrgansGlobal, GlobalSearchResult } from '../../app/actions/anatomy';
import { SPECIES_REGISTRY, SYSTEMS_REGISTRY } from '../../data/anatomyRegistry';
import { SpeciesId } from '../../types/anatomy';

export function GlobalCommandSearch() {
  const router = useRouter();
  const locale = useAnatomyStore((state) => state.locale);
  const isRtl = locale === 'ar';

  const isOpen = useAnatomyStore((state) => state.isCommandSearchOpen);
  const setIsOpen = useAnatomyStore((state) => state.setIsCommandSearchOpen);
  const setSelectedOrganId = useAnatomyStore((state) => state.setSelectedOrganId);
  const isolateOrgan = useAnatomyStore((state) => state.isolateOrgan);

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<GlobalSearchResult[]>([]);
  const [isPending, startTransition] = useTransition();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [recentSearches, setRecentSearches] = useState<GlobalSearchResult[]>([]);

  const inputRef = useRef<HTMLInputElement>(null);

  // Global Keyboard Shortcut: Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsOpen(!isOpen);
      } else if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, setIsOpen]);

  // Focus input on modal open
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 50);
    } else {
      setQuery('');
      setResults([]);
      setSelectedIndex(0);
    }
  }, [isOpen]);

  // Debounced search query
  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(() => {
      startTransition(async () => {
        try {
          const res = await searchOrgansGlobal(query);
          setResults(res);
          setSelectedIndex(0);
        } catch (err) {
          console.error('Search error:', err);
        }
      });
    }, 150);

    return () => clearTimeout(timer);
  }, [query]);

  // Navigate to selected result
  const handleSelect = (item: GlobalSearchResult) => {
    // Save to recents
    setRecentSearches((prev) => {
      const filtered = prev.filter((r) => r.meshId !== item.meshId);
      return [item, ...filtered].slice(0, 5);
    });

    setIsOpen(false);
    setSelectedOrganId(item.meshId);
    isolateOrgan(item.meshId);

    // Jump to the exact explorer route with focus param
    router.push(`/${locale}/explorer/${item.speciesSlug}/${item.systemSlug}?focus=${encodeURIComponent(item.meshId)}`);
  };

  // Keyboard navigation within results
  const handleKeyDownInInput = (e: React.KeyboardEvent) => {
    if (results.length === 0) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (results[selectedIndex]) {
        handleSelect(results[selectedIndex]);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="fixed inset-0 z-50 flex items-start justify-center pt-14 sm:pt-20 px-3 bg-slate-950/80 backdrop-blur-md animate-fade-in"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-scale-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Header Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-950/70">
          <Search size={20} className="text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={handleKeyDownInInput}
            placeholder={
              isRtl
                ? 'ابحث بالإنجليزية أو العربية أو اللاتينية (Nomina Anatomica Veterinaria)...'
                : 'Search by English, Arabic, or Latin (NAV) organ names (e.g. Cor, Reticulum, Gaster)...'
            }
            className="flex-1 bg-transparent text-sm sm:text-base text-white placeholder-slate-500 focus:outline-none"
          />

          {isPending && (
            <div className="w-5 h-5 border-2 border-cyan-500/30 border-t-cyan-400 rounded-full animate-spin shrink-0" />
          )}

          {query && (
            <button
              onClick={() => {
                setQuery('');
                inputRef.current?.focus();
              }}
              className="p-1 rounded-md text-slate-400 hover:text-white transition-colors"
            >
              <X size={16} />
            </button>
          )}

          <kbd className="hidden sm:inline-flex items-center gap-0.5 px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 border border-slate-700 rounded-md">
            ESC
          </kbd>
        </div>

        {/* Quick Species Filter Shortcuts */}
        {!query && (
          <div className="p-3 border-b border-slate-800/80 bg-slate-950/30 overflow-x-auto no-scrollbar flex items-center gap-2">
            <span className="text-[11px] text-slate-500 font-mono shrink-0 pl-1">
              {isRtl ? 'اقتراحات سريعة:' : 'Quick Prompts:'}
            </span>
            {['Reticulum', 'Cor Heart', 'Gaster Stomach', 'Cecum', 'Pulmo Lungs', 'Ren Kidney'].map(
              (sample) => (
                <button
                  key={sample}
                  onClick={() => setQuery(sample.split(' ')[0])}
                  className="px-2.5 py-1 rounded-lg text-xs bg-slate-800/80 hover:bg-slate-700 text-slate-300 transition-colors shrink-0"
                >
                  {sample}
                </button>
              )
            )}
          </div>
        )}

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1.5 max-h-[460px]">
          {query.trim() && results.length === 0 && !isPending && (
            <div className="py-12 text-center text-slate-400 text-xs space-y-1">
              <Compass size={28} className="mx-auto text-slate-600 mb-2" />
              <p>{isRtl ? 'لم يتم العثور على نتائج مطابقة.' : 'No anatomical structures found matching your query.'}</p>
              <p className="text-[11px] text-slate-500">
                {isRtl ? 'جرّب البحث باسم العضو باللاتينية أو بالإنجليزية.' : 'Try searching by standard Latin (NAV) or English taxonomy.'}
              </p>
            </div>
          )}

          {/* Render Matching Results */}
          {results.map((item, index) => {
            const isSelected = selectedIndex === index;
            return (
              <div
                key={`${item.meshId}_${index}`}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={`p-3 rounded-xl cursor-pointer flex items-center justify-between transition-all border ${
                  isSelected
                    ? 'bg-cyan-500/15 border-cyan-500/40 text-cyan-200 shadow-md'
                    : 'bg-slate-900/60 hover:bg-slate-800/60 border-slate-800/70 text-slate-300'
                }`}
              >
                <div className="flex items-center gap-3 min-w-0">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 border ${
                      isSelected
                        ? 'bg-cyan-500/20 border-cyan-400/50 text-cyan-300'
                        : 'bg-slate-800 border-slate-700 text-slate-400'
                    }`}
                  >
                    <Layers size={17} />
                  </div>

                  <div className="truncate">
                    <div className="font-bold text-sm text-white flex items-center gap-2 truncate">
                      <span>{isRtl ? item.nameAr : item.nameEn}</span>
                      <span className="text-xs text-slate-400 font-normal">
                        ({isRtl ? item.nameEn : item.nameAr})
                      </span>
                    </div>

                    <div className="flex items-center gap-2 mt-0.5">
                      <span className="font-serif italic text-xs text-cyan-400 font-medium truncate">
                        NAV: {item.latinName}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2 shrink-0 ml-3">
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-slate-800 text-slate-300 border border-slate-700">
                    {item.speciesNameEn}
                  </span>
                  <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-medium bg-cyan-950/80 text-cyan-300 border border-cyan-700/50">
                    {item.systemNameEn}
                  </span>
                  <ArrowRight size={14} className={isRtl ? 'rotate-180 text-cyan-400' : 'text-cyan-400'} />
                </div>
              </div>
            );
          })}

          {/* Default State: Recent / Suggested Searches */}
          {!query.trim() && recentSearches.length > 0 && (
            <div className="p-2 space-y-1">
              <div className="flex items-center gap-1.5 text-xs font-semibold text-slate-400 px-2 py-1">
                <Clock size={13} />
                <span>{isRtl ? 'عمليات البحث الأخيرة:' : 'Recent Anatomical Jumps:'}</span>
              </div>
              {recentSearches.map((item, idx) => (
                <div
                  key={`recent_${item.meshId}_${idx}`}
                  onClick={() => handleSelect(item)}
                  className="p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800/80 flex items-center justify-between text-xs cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-white">{isRtl ? item.nameAr : item.nameEn}</span>
                    <span className="font-serif italic text-cyan-400 text-[11px]">({item.latinName})</span>
                  </div>
                  <span className="text-[10px] text-slate-400 font-mono">{item.speciesNameEn}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer Shortcut Guide */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/70 flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div className="flex items-center gap-3">
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">↑↓</kbd> Navigate
            </span>
            <span className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-slate-800 rounded border border-slate-700 text-slate-300">↵</kbd> Select & Jump
            </span>
          </div>

          <span className="text-cyan-400 font-semibold">
            {isRtl ? 'التوجيه المباشر للنموذج ثلاثي الأبعاد' : 'Direct 3D Mesh Raycast Isolation'}
          </span>
        </div>
      </div>
    </div>
  );
}
