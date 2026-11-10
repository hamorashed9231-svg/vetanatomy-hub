'use client';

import { useState, useMemo } from 'react';
import { 
  BookOpen, 
  Search, 
  Volume2, 
  Copy, 
  Check, 
  Sparkles, 
  Layers,
  Info
} from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { GLOSSARY_TERMS } from '../../data/glossaryData';
import { AnatomicalSystem } from '../../types/anatomy';

export function GlossaryModule() {
  const language = useAnatomyStore((state) => state.language);
  const isRtl = useAnatomyStore((state) => state.isRtl);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [copiedTermId, setCopiedTermId] = useState<string | null>(null);

  // Search & filter
  const filteredTerms = useMemo(() => {
    return GLOSSARY_TERMS.filter((term) => {
      const query = searchTerm.toLowerCase();
      const matchesSearch =
        term.latinTerm.toLowerCase().includes(query) ||
        term.englishTerm.toLowerCase().includes(query) ||
        term.arabicTerm.includes(searchTerm) ||
        term.definition[language].toLowerCase().includes(query);

      const matchesCat = selectedCategory === 'all' || term.category === selectedCategory;
      return matchesSearch && matchesCat;
    });
  }, [searchTerm, selectedCategory, language]);

  const copyTerm = (term: string, id: string) => {
    navigator.clipboard.writeText(term);
    setCopiedTermId(id);
    setTimeout(() => setCopiedTermId(null), 2000);
  };

  const t = {
    title: language === 'ar' ? 'معجم المصطلحات التشريحية البيطرية (NAV)' : 'Nomina Anatomica Veterinaria (NAV) Glossary',
    subtitle: language === 'ar' ? 'مرجع معتمد يربط المصطلحات اللاتينية والإنجليزية والعربية' : 'Standardized Trilingual Database Linking Latin, English & Arabic Anatomical Nomenclature',
    searchPlaceholder: language === 'ar' ? 'ابحث باللاتينية، الإنجليزية، العربية، أو بالتعريف...' : 'Search Latin, English, Arabic, or anatomical definitions...',
    definition: language === 'ar' ? 'التعريف التشريحي' : 'Anatomical Definition',
    etymology: language === 'ar' ? 'الأصل اللغوي والاشتقاق' : 'Etymology',
    clinicalNote: language === 'ar' ? 'ملاحظة سريرية وتطبيقية' : 'Clinical Relevance',
    copied: language === 'ar' ? 'تم النسخ!' : 'Copied!',
  };

  return (
    <div className="max-w-5xl mx-auto p-4 lg:p-8 flex flex-col gap-6">
      
      {/* Header Banner */}
      <div className="bg-gradient-to-r from-cyan-950/60 via-slate-900 to-slate-900 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-md shadow-xl flex flex-col gap-2">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-base sm:text-lg">
          <BookOpen size={22} />
          <h2>{t.title}</h2>
        </div>
        <p className="text-xs sm:text-sm text-slate-300">
          {t.subtitle}
        </p>

        {/* Search Bar */}
        <div className="relative mt-3">
          <Search size={18} className="absolute left-3.5 rtl:right-3.5 top-3 text-slate-400" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950/90 border border-slate-700/80 rounded-xl pl-10 rtl:pr-10 pr-4 rtl:pl-4 py-2.5 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400 shadow-inner"
          />
        </div>

        {/* Category Filters */}
        <div className="flex gap-2 overflow-x-auto pt-2 no-scrollbar text-xs">
          {['all', 'circulatory', 'respiratory', 'digestive', 'urogenital', 'skeletal'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1.5 rounded-lg capitalize whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                  : 'bg-slate-950/60 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Glossary Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredTerms.map((item) => {
          const isCopied = copiedTermId === item.id;
          return (
            <div
              key={item.id}
              className="bg-slate-900/70 border border-slate-800/80 rounded-2xl p-5 backdrop-blur-md shadow-lg flex flex-col justify-between gap-4 hover:border-slate-700 transition-all"
            >
              <div className="space-y-3">
                {/* Term Header */}
                <div className="flex items-start justify-between gap-2 border-b border-slate-800/80 pb-3">
                  <div>
                    {/* Latin Term (NAV) */}
                    <div className="flex items-center gap-2">
                      <span className="font-serif italic font-bold text-base text-cyan-300">
                        {item.latinTerm}
                      </span>
                      {item.phoneticTranscription && (
                        <span className="text-[11px] font-mono text-slate-400">
                          {item.phoneticTranscription}
                        </span>
                      )}
                    </div>
                    {/* English & Arabic Equivalents */}
                    <div className="text-xs text-slate-300 mt-1 flex items-center gap-2">
                      <span className="font-semibold text-white">{item.englishTerm}</span>
                      <span className="text-slate-500">•</span>
                      <span className="font-bold text-cyan-400">{item.arabicTerm}</span>
                    </div>
                  </div>

                  {/* Copy Button */}
                  <button
                    onClick={() => copyTerm(item.latinTerm, item.id)}
                    className="p-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-lg transition-colors text-xs flex items-center gap-1"
                    title="Copy Latin Term"
                  >
                    {isCopied ? (
                      <Check size={14} className="text-emerald-400" />
                    ) : (
                      <Copy size={14} />
                    )}
                  </button>
                </div>

                {/* Definition */}
                <div className="space-y-1">
                  <span className="text-[11px] font-semibold text-slate-400 block">
                    {t.definition}:
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/50 p-2.5 rounded-xl border border-slate-800/80">
                    {item.definition[language]}
                  </p>
                </div>

                {/* Clinical Note if present */}
                {item.clinicalNote && (
                  <div className="p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-800/30 text-cyan-200 text-xs flex items-start gap-2">
                    <Info size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      {item.clinicalNote[language]}
                    </p>
                  </div>
                )}
              </div>

              {/* Etymology Tag */}
              {item.etymology && (
                <div className="text-[10px] text-slate-500 font-mono italic pt-2 border-t border-slate-800/80">
                  {item.etymology}
                </div>
              )}
            </div>
          );
        })}
      </div>

    </div>
  );
}
