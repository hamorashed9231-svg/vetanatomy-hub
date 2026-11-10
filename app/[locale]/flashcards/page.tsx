'use client';

import React, { useState, useEffect, useMemo, useTransition } from 'react';
import Link from 'next/link';
import { 
  Sparkles, 
  RotateCw, 
  CheckCircle2, 
  Flame, 
  BookOpen, 
  HeartPulse, 
  Activity, 
  Stethoscope, 
  Zap, 
  ChevronLeft, 
  ChevronRight, 
  Filter, 
  Eye, 
  Award, 
  RotateCcw,
  Clock,
  Layers,
  Box,
  Compass
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { useAnatomyStore } from '../../../store/useAnatomyStore';
import { SpeciesId, AnatomicalSystemId } from '../../../types/anatomy';
import { SPECIES_REGISTRY, SYSTEMS_REGISTRY } from '../../../data/anatomyRegistry';
import { VetCanvas } from '../../../components/3d/VetCanvas';
import { 
  getFlashcardsDeck, 
  recordFlashcardReview, 
  FlashcardItem 
} from '@/app/actions/flashcards';
import { 
  calculateSM2, 
  getPreviewIntervals, 
  FlashcardRating 
} from '@/lib/sm2';

export default function FlashcardsStudyPage() {
  const locale = useAnatomyStore((state) => state.locale);
  const isRtl = locale === 'ar';

  // Filters
  const [selectedSpecies, setSelectedSpecies] = useState<string>('all');
  const [selectedSystem, setSelectedSystem] = useState<string>('all');
  const [dueOnly, setDueOnly] = useState<boolean>(false);

  // Deck State
  const [deck, setDeck] = useState<FlashcardItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [sessionCompletedCount, setSessionCompletedCount] = useState<number>(0);
  const [isPendingReview, startTransition] = useTransition();

  // Load Flashcards Deck from Neon DB / Local Registry
  useEffect(() => {
    let isCancelled = false;
    setIsLoading(true);

    getFlashcardsDeck(selectedSpecies, selectedSystem)
      .then((items) => {
        if (!isCancelled) {
          setDeck(items);
          setCurrentIndex(0);
          setIsFlipped(false);
          setIsLoading(false);
        }
      })
      .catch((err) => {
        console.error('Failed to load flashcards:', err);
        if (!isCancelled) setIsLoading(false);
      });

    return () => {
      isCancelled = true;
    };
  }, [selectedSpecies, selectedSystem]);

  // Filter cards by due status if dueOnly is enabled
  const filteredDeck = useMemo(() => {
    if (!dueOnly) return deck;
    return deck.filter((card) => card.progress.isDue);
  }, [deck, dueOnly]);

  const currentCard: FlashcardItem | undefined = filteredDeck[currentIndex];

  // Calculate Due Count
  const dueCount = useMemo(() => {
    return deck.filter((c) => c.progress.isDue).length;
  }, [deck]);

  // Compute SM-2 preview intervals for the current card
  const previewIntervals = useMemo(() => {
    if (!currentCard) {
      return {
        again: { en: '< 10m', ar: '< 10 د' },
        hard: { en: '1d', ar: '1 يوم' },
        good: { en: '6d', ar: '6 أيام' },
        easy: { en: '8d', ar: '8 أيام' },
      };
    }
    return getPreviewIntervals({
      easeFactor: currentCard.progress.easeFactor,
      interval: currentCard.progress.interval,
      repetitions: currentCard.progress.repetitions,
    });
  }, [currentCard]);

  // Handle Review Rating
  const handleRateCard = (rating: FlashcardRating) => {
    if (!currentCard) return;

    const organId = currentCard.organId;

    startTransition(async () => {
      try {
        const updatedProgress = await recordFlashcardReview(organId, rating);

        // Update local deck item
        setDeck((prev) =>
          prev.map((c) =>
            c.organId === organId ? { ...c, progress: updatedProgress } : c
          )
        );

        setSessionCompletedCount((prev) => prev + 1);

        // Trigger celebratory confetti if finishing last card
        if (currentIndex >= filteredDeck.length - 1) {
          confetti({
            particleCount: 80,
            spread: 70,
            origin: { y: 0.6 },
          });
        }

        // Advance to next card and flip back
        setIsFlipped(false);
        if (currentIndex < filteredDeck.length - 1) {
          setCurrentIndex((prev) => prev + 1);
        }
      } catch (err) {
        console.error('Failed to record flashcard review:', err);
      }
    });
  };

  // Keyboard navigation shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) return;

      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped((prev) => !prev);
      } else if (isFlipped) {
        if (e.key === '1') handleRateCard('again');
        else if (e.key === '2') handleRateCard('hard');
        else if (e.key === '3') handleRateCard('good');
        else if (e.key === '4') handleRateCard('easy');
      } else {
        if (e.key === 'ArrowRight') {
          if (currentIndex < filteredDeck.length - 1) setCurrentIndex((prev) => prev + 1);
        } else if (e.key === 'ArrowLeft') {
          if (currentIndex > 0) setCurrentIndex((prev) => prev - 1);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFlipped, currentIndex, filteredDeck.length]);

  return (
    <div 
      dir={isRtl ? 'rtl' : 'ltr'} 
      className="flex-1 w-full bg-slate-950 text-slate-100 flex flex-col px-3 sm:px-6 lg:px-8 py-5 space-y-5"
    >
      {/* Top Banner & Deck Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 p-5 rounded-2xl bg-gradient-to-r from-slate-900/95 via-slate-950 to-slate-900/95 border border-slate-800 shadow-xl">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 shadow-sm">
            <BookOpen className="h-5 w-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-lg lg:text-xl font-bold tracking-tight text-white flex items-center gap-2">
                <span>{isRtl ? 'محطة البطاقات الذكية 3D (خوارزمية SM-2)' : '3D Spaced-Repetition Flashcards'}</span>
              </h1>
              <span className="hidden sm:inline-flex px-2.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-semibold text-cyan-300">
                SuperMemo-2 Engine
              </span>
            </div>
            <p className="text-xs text-slate-400">
              {isRtl
                ? 'استذكار تباعدي تفاعلي مدعوم بنماذج 3D لعزل الأعضاء وحفظ التسميات اللاتينية والمعالم الجراحية'
                : 'Interactive 3D retrieval practice with isolated visual prompts and active recall scheduling'}
            </p>
          </div>
        </div>

        {/* Deck Filters & Due Badge */}
        <div className="flex flex-wrap items-center gap-2.5">
          {/* Due Counter Badge */}
          <button
            onClick={() => setDueOnly(!dueOnly)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
              dueOnly
                ? 'bg-amber-500/20 text-amber-300 border-amber-500/50 shadow-amber-500/10 ring-1 ring-amber-400/30'
                : 'bg-slate-900/90 hover:bg-slate-800 text-slate-300 border-slate-700/80 hover:text-white'
            }`}
          >
            <Flame className="h-3.5 w-3.5 text-amber-400 animate-bounce" />
            <span>
              {dueCount} {isRtl ? 'مستحق للمراجعة اليوم' : 'Due for Review'}
            </span>
          </button>

          {/* Species Filter */}
          <select
            value={selectedSpecies}
            onChange={(e) => setSelectedSpecies(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-1.5 font-medium focus:outline-none focus:border-cyan-400"
          >
            <option value="all">{isRtl ? 'جميع الفصائل البيطرية' : 'All Animal Species'}</option>
            {Object.values(SPECIES_REGISTRY).map((s) => (
              <option key={s.id} value={s.id}>
                {isRtl ? s.name.ar : s.name.en}
              </option>
            ))}
          </select>

          {/* System Filter */}
          <select
            value={selectedSystem}
            onChange={(e) => setSelectedSystem(e.target.value)}
            className="bg-slate-900 border border-slate-700 text-xs text-slate-200 rounded-xl px-3 py-1.5 font-medium focus:outline-none focus:border-cyan-400"
          >
            <option value="all">{isRtl ? 'جميع الأجهزة التشريحية' : 'All Anatomical Systems'}</option>
            {SYSTEMS_REGISTRY.map((sys) => (
              <option key={sys.id} value={sys.id}>
                {isRtl ? sys.name.ar : sys.name.en}
              </option>
            ))}
          </select>

          {/* Session Progress Counter */}
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs font-mono text-emerald-400">
            <CheckCircle2 className="h-3.5 w-3.5" />
            <span>{sessionCompletedCount} {isRtl ? 'أُنجزت' : 'Reviewed'}</span>
          </div>
        </div>
      </div>

      {/* Main Flashcard Workstation */}
      {isLoading ? (
        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center rounded-2xl bg-slate-900/40 border border-slate-800">
          <div className="w-12 h-12 border-4 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin mb-4" />
          <h3 className="text-sm font-bold text-slate-200">
            {isRtl ? 'جاري تجهيز حزمة البطاقات الذكية 3D...' : 'Assembling 3D Spaced-Repetition Deck...'}
          </h3>
          <p className="text-xs text-slate-500 mt-1">
            {isRtl ? 'استرداد التكرارات المحسوبة وفق خوارزمية SuperMemo-2' : 'Loading spaced review scheduling from Neon DB'}
          </p>
        </div>
      ) : filteredDeck.length === 0 ? (
        <div className="flex-1 flex flex-col items-center justify-center p-12 text-center rounded-2xl bg-slate-900/40 border border-dashed border-slate-800">
          <Award className="h-12 w-12 text-emerald-400 mb-3 animate-pulse" />
          <h3 className="text-base font-bold text-white">
            {isRtl ? 'رائع! لا توجد بطاقات مستحقة للمراجعة حالياً' : 'All Caught Up! No Due Flashcards'}
          </h3>
          <p className="text-xs text-slate-400 mt-1 max-w-sm">
            {isRtl
              ? 'لقد راجعت جميع الأعضاء المجدولة لليوم. يمكنك تعطيل مرشح "المستحق فقط" لدراسة كامل الحزمة.'
              : 'You have reviewed all cards scheduled for today. Turn off "Due for Review" filter to practice the entire deck.'}
          </p>
          <button
            onClick={() => setDueOnly(false)}
            className="mt-4 px-4 py-2 rounded-xl text-xs font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all"
          >
            {isRtl ? 'عرض كامل الحزمة' : 'View Full Deck'}
          </button>
        </div>
      ) : (
        <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full space-y-4">
          {/* Deck Navigation & Progress Header */}
          <div className="flex items-center justify-between px-2 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-cyan-400 text-sm">
                #{currentIndex + 1}
              </span>
              <span>/</span>
              <span className="font-mono">{filteredDeck.length}</span>
              <span className="text-slate-600">|</span>
              <span className="px-2 py-0.5 rounded-full bg-slate-800 text-[11px] text-slate-300">
                {currentCard?.speciesNameEn} ({currentCard?.systemNameEn})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setIsFlipped(false);
                  setCurrentIndex((prev) => Math.max(0, prev - 1));
                }}
                disabled={currentIndex === 0}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={() => {
                  setIsFlipped(false);
                  setCurrentIndex((prev) => Math.min(filteredDeck.length - 1, prev + 1));
                }}
                disabled={currentIndex === filteredDeck.length - 1}
                className="p-1.5 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:text-white disabled:opacity-40"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Interactive 3D Flashcard Container */}
          <div className="relative w-full rounded-2xl border border-slate-800/90 bg-slate-900/90 shadow-2xl overflow-hidden min-h-[580px] flex flex-col">
            {/* Embedded 3D Prompt Viewport (Front Side) */}
            <div className={`relative w-full flex-1 min-h-[380px] transition-all duration-500 ${isFlipped ? 'h-[220px]' : 'h-[460px]'}`}>
              {currentCard && (
                <VetCanvas
                  speciesId={currentCard.speciesSlug as SpeciesId}
                  systemId={currentCard.systemSlug as AnatomicalSystemId}
                  activeOrganId={currentCard.meshId}
                  showHUD={false}
                  showLayerPeelingControls={false}
                  className="w-full h-full"
                />
              )}

              {/* Floating Prompt Question Overlay on 3D Canvas */}
              {!isFlipped && (
                <div className="absolute top-4 left-4 right-4 z-20 flex flex-col items-center">
                  <div className="px-4 py-2.5 rounded-2xl bg-slate-950/90 border border-cyan-500/40 backdrop-blur-md shadow-2xl text-center max-w-lg">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-cyan-400 block mb-0.5">
                      {isRtl ? 'سؤال استدعاء الذاكرة الفعّال' : 'Active Retrieval Prompt'}
                    </span>
                    <p className="text-xs font-semibold text-slate-100 leading-snug">
                      {isRtl
                        ? 'حدد العضو المضيء ثلاثي الأبعاد، واسمه اللاتيني الرسمي (NAV)، وترويته الشريانية وتعصيبه.'
                        : 'Identify this highlighted 3D structure, its official NAV Latin taxonomy, arterial blood supply, and innervation.'}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Flip / Reveal Action Bar */}
            {!isFlipped ? (
              <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
                <span className="text-[11px] text-slate-400 hidden sm:inline font-mono">
                  {isRtl ? 'اضغط Space أو انقر للتحقق من الإجابة' : 'Press Spacebar or click button to reveal'}
                </span>

                <button
                  onClick={() => setIsFlipped(true)}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-xl text-xs font-bold bg-gradient-to-r from-cyan-500 to-teal-500 text-slate-950 hover:brightness-110 shadow-lg shadow-cyan-500/20 transition-all flex items-center justify-center gap-2 mx-auto sm:mx-0"
                >
                  <Eye className="h-4 w-4" />
                  <span>{isRtl ? 'كشف الإجابة والتحليل السريري' : 'Show Answer & Clinical Pearls'}</span>
                </button>
              </div>
            ) : (
              /* Revealed Answer Drawer & SM-2 Ratings */
              <div className="p-5 lg:p-6 bg-slate-950/95 border-t border-slate-800 flex flex-col space-y-4 animate-in slide-in-from-bottom duration-300">
                {/* Organ Identity & Latin Taxonomy Header */}
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-800 pb-3">
                  <div>
                    <h3 className="text-lg lg:text-xl font-bold text-white">
                      {isRtl ? currentCard?.nameAr : currentCard?.nameEn}
                    </h3>
                    <div className="text-xs text-slate-400">
                      {isRtl ? currentCard?.nameEn : currentCard?.nameAr}
                    </div>
                  </div>

                  <div className="font-mono text-xs font-bold text-cyan-300 bg-cyan-950/50 border border-cyan-500/40 px-3 py-1 rounded-lg">
                    {currentCard?.latinName}
                  </div>
                </div>

                {/* Clinical Dimensions Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                  {/* Blood Supply */}
                  <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/25">
                    <div className="flex items-center gap-1.5 text-rose-300 font-bold mb-1">
                      <HeartPulse className="h-3.5 w-3.5" />
                      <span>{isRtl ? 'التروية الدموية' : 'Blood Supply'}</span>
                    </div>
                    <p className="text-[11px] text-slate-200 leading-relaxed">
                      {isRtl ? currentCard?.bloodSupplyAr : currentCard?.bloodSupplyEn}
                    </p>
                  </div>

                  {/* Innervation */}
                  <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/25">
                    <div className="flex items-center gap-1.5 text-amber-300 font-bold mb-1">
                      <Zap className="h-3.5 w-3.5" />
                      <span>{isRtl ? 'التعصيب العصبي' : 'Innervation'}</span>
                    </div>
                    <p className="text-[11px] text-slate-200 leading-relaxed">
                      {isRtl ? currentCard?.innervationAr : currentCard?.innervationEn}
                    </p>
                  </div>

                  {/* Clinical Pearl */}
                  <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/25">
                    <div className="flex items-center gap-1.5 text-emerald-300 font-bold mb-1">
                      <Stethoscope className="h-3.5 w-3.5" />
                      <span>{isRtl ? 'المعالم السريرية' : 'Clinical Pearl'}</span>
                    </div>
                    <p className="text-[11px] text-slate-200 leading-relaxed">
                      {isRtl ? currentCard?.clinicalPearlsAr : currentCard?.clinicalPearlsEn}
                    </p>
                  </div>
                </div>

                {/* SM-2 4-Button Rating Bar */}
                <div className="pt-2 border-t border-slate-800">
                  <div className="text-center text-[11px] text-slate-400 mb-2 font-medium">
                    {isRtl ? 'قيّم دقة استرجاعك للمعلومة (SuperMemo-2):' : 'Rate Your Recall Accuracy (SuperMemo-2):'}
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {/* Again (0) */}
                    <button
                      onClick={() => handleRateCard('again')}
                      disabled={isPendingReview}
                      className="p-3 rounded-xl border border-rose-500/40 bg-rose-500/10 hover:bg-rose-500/20 text-rose-300 transition-all flex flex-col items-center gap-1 group"
                    >
                      <span className="font-mono text-[10px] text-rose-400 font-bold">
                        {isRtl ? previewIntervals.again.ar : previewIntervals.again.en}
                      </span>
                      <span className="font-bold text-xs">
                        {isRtl ? 'مرة أخرى (0)' : 'Again (1)'}
                      </span>
                    </button>

                    {/* Hard (1) */}
                    <button
                      onClick={() => handleRateCard('hard')}
                      disabled={isPendingReview}
                      className="p-3 rounded-xl border border-amber-500/40 bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 transition-all flex flex-col items-center gap-1 group"
                    >
                      <span className="font-mono text-[10px] text-amber-400 font-bold">
                        {isRtl ? previewIntervals.hard.ar : previewIntervals.hard.en}
                      </span>
                      <span className="font-bold text-xs">
                        {isRtl ? 'صعب (1)' : 'Hard (2)'}
                      </span>
                    </button>

                    {/* Good (2) */}
                    <button
                      onClick={() => handleRateCard('good')}
                      disabled={isPendingReview}
                      className="p-3 rounded-xl border border-cyan-500/40 bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 transition-all flex flex-col items-center gap-1 group"
                    >
                      <span className="font-mono text-[10px] text-cyan-400 font-bold">
                        {isRtl ? previewIntervals.good.ar : previewIntervals.good.en}
                      </span>
                      <span className="font-bold text-xs">
                        {isRtl ? 'جيد (2)' : 'Good (3)'}
                      </span>
                    </button>

                    {/* Easy (3) */}
                    <button
                      onClick={() => handleRateCard('easy')}
                      disabled={isPendingReview}
                      className="p-3 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 transition-all flex flex-col items-center gap-1 group"
                    >
                      <span className="font-mono text-[10px] text-emerald-400 font-bold">
                        {isRtl ? previewIntervals.easy.ar : previewIntervals.easy.en}
                      </span>
                      <span className="font-bold text-xs">
                        {isRtl ? 'سهل (3)' : 'Easy (4)'}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
