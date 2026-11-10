'use client';

import React, { useState, useEffect, useMemo, useCallback } from 'react';
import confetti from 'canvas-confetti';
import { 
  GraduationCap, 
  Sparkles, 
  Flame, 
  Award, 
  RotateCcw, 
  CheckCircle2, 
  XCircle, 
  ChevronRight, 
  ChevronLeft, 
  Target, 
  HelpCircle, 
  BookOpen, 
  Eye, 
  Layers, 
  Info,
  ShieldCheck,
  AlertTriangle,
  ArrowRight
} from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { SpeciesId, AnatomicalSystemId } from '../../types/anatomy';
import { getExamQuestions, ExamQuestionItem } from '../../app/actions/anatomy';

interface PracticalExamModeProps {
  species: SpeciesId;
  system: AnatomicalSystemId;
  className?: string;
  onExitExam?: () => void;
}

export function PracticalExamMode({
  species,
  system,
  className,
  onExitExam,
}: PracticalExamModeProps) {
  const locale = useAnatomyStore((state) => state.locale);
  const isRtl = locale === 'ar';
  const setIsExamMode = useAnatomyStore((state) => state.setIsExamMode);
  const isolateOrgan = useAnatomyStore((state) => state.isolateOrgan);
  const exitIsolation = useAnatomyStore((state) => state.exitIsolation);

  // Exam global store state
  const examMeshFlash = useAnatomyStore((state) => state.examMeshFlash);
  const setExamMeshFlash = useAnatomyStore((state) => state.setExamMeshFlash);
  const examClickedMeshId = useAnatomyStore((state) => state.examClickedMeshId);
  const setExamClickedMeshId = useAnatomyStore((state) => state.setExamClickedMeshId);
  const examScore = useAnatomyStore((state) => state.examScore);
  const setExamScore = useAnatomyStore((state) => state.setExamScore);
  const examStreak = useAnatomyStore((state) => state.examStreak);
  const setExamStreak = useAnatomyStore((state) => state.setExamStreak);
  const examSystemStats = useAnatomyStore((state) => state.examSystemStats);
  const recordExamAnswer = useAnatomyStore((state) => state.recordExamAnswer);
  const resetExamStats = useAnatomyStore((state) => state.resetExamStats);

  // Local component state
  const [questions, setQuestions] = useState<ExamQuestionItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [filterType, setFilterType] = useState<'all' | 'identify' | 'mcq'>('all');
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [answerStatus, setAnswerStatus] = useState<'correct' | 'wrong' | null>(null);
  const [clickedOrganFeedback, setClickedOrganFeedback] = useState<string | null>(null);

  // Fetch Questions from Neon PostgreSQL (or resilient fallback)
  useEffect(() => {
    let isMounted = true;
    async function loadQuestions() {
      setIsLoading(true);
      try {
        const fetched = await getExamQuestions(species, system);
        if (isMounted) {
          setQuestions(fetched);
          setCurrentIndex(0);
          setIsAnswered(false);
          setAnswerStatus(null);
          setSelectedOption(null);
          setClickedOrganFeedback(null);
        }
      } catch (err) {
        console.error('Failed to load exam questions:', err);
      } finally {
        if (isMounted) setIsLoading(false);
      }
    }
    loadQuestions();
    return () => {
      isMounted = false;
    };
  }, [species, system]);

  // Filtered Questions
  const filteredQuestions = useMemo(() => {
    if (filterType === 'all') return questions;
    return questions.filter((q) => q.type === filterType);
  }, [questions, filterType]);

  const currentQuestion = filteredQuestions[currentIndex] || null;

  // Auto-isolate organ when a Clinical MCQ is active
  useEffect(() => {
    if (!currentQuestion) return;

    if (currentQuestion.type === 'mcq' && currentQuestion.targetMeshId) {
      isolateOrgan(currentQuestion.targetMeshId);
    } else if (currentQuestion.type === 'identify' && !isAnswered) {
      exitIsolation();
    }
  }, [currentQuestion, isAnswered, isolateOrgan, exitIsolation]);

  // Handle Raycasting Mesh Click in "Identify on 3D Model" mode
  useEffect(() => {
    if (!examClickedMeshId || !currentQuestion || isAnswered) return;

    // Only process mesh clicks for Identify mode
    if (currentQuestion.type === 'identify') {
      const isCorrect =
        examClickedMeshId.toLowerCase() === currentQuestion.targetMeshId.toLowerCase() ||
        examClickedMeshId.toLowerCase().includes(currentQuestion.targetMeshId.toLowerCase()) ||
        currentQuestion.targetMeshId.toLowerCase().includes(examClickedMeshId.toLowerCase());

      setClickedOrganFeedback(examClickedMeshId);
      setIsAnswered(true);

      if (isCorrect) {
        setAnswerStatus('correct');
        setExamMeshFlash({ meshId: examClickedMeshId, status: 'correct', timestamp: Date.now() });
        setExamScore((prev) => prev + 15);
        setExamStreak((prev) => prev + 1);
        recordExamAnswer(system, true);

        // Confetti celebration
        try {
          confetti({
            particleCount: 65,
            spread: 70,
            origin: { y: 0.65 },
            colors: ['#10b981', '#06b6d4', '#3b82f6', '#f59e0b'],
          });
        } catch (_) {}
      } else {
        setAnswerStatus('wrong');
        setExamMeshFlash({ meshId: examClickedMeshId, status: 'wrong', timestamp: Date.now() });
        setExamStreak(0);
        recordExamAnswer(system, false);
      }

      // Reset clicked mesh listener in store
      setExamClickedMeshId(null);
    }
  }, [
    examClickedMeshId,
    currentQuestion,
    isAnswered,
    setExamMeshFlash,
    setExamScore,
    setExamStreak,
    recordExamAnswer,
    system,
    setExamClickedMeshId,
  ]);

  // Handle MCQ Option Selection
  const handleSelectOption = useCallback(
    (index: number) => {
      if (isAnswered || !currentQuestion || currentQuestion.type !== 'mcq') return;

      setSelectedOption(index);
      setIsAnswered(true);

      const isCorrect = index === currentQuestion.correctOptionIndex;

      if (isCorrect) {
        setAnswerStatus('correct');
        if (currentQuestion.targetMeshId) {
          setExamMeshFlash({
            meshId: currentQuestion.targetMeshId,
            status: 'correct',
            timestamp: Date.now(),
          });
        }
        setExamScore((prev) => prev + 10);
        setExamStreak((prev) => prev + 1);
        recordExamAnswer(system, true);

        try {
          confetti({
            particleCount: 50,
            spread: 60,
            origin: { y: 0.65 },
          });
        } catch (_) {}
      } else {
        setAnswerStatus('wrong');
        if (currentQuestion.targetMeshId) {
          setExamMeshFlash({
            meshId: currentQuestion.targetMeshId,
            status: 'wrong',
            timestamp: Date.now(),
          });
        }
        setExamStreak(0);
        recordExamAnswer(system, false);
      }
    },
    [currentQuestion, isAnswered, setExamMeshFlash, setExamScore, setExamStreak, recordExamAnswer, system]
  );

  // Navigate to Next Question
  const handleNext = () => {
    setExamMeshFlash(null);
    setIsAnswered(false);
    setAnswerStatus(null);
    setSelectedOption(null);
    setClickedOrganFeedback(null);

    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  // Navigate to Previous Question
  const handlePrev = () => {
    setExamMeshFlash(null);
    setIsAnswered(false);
    setAnswerStatus(null);
    setSelectedOption(null);
    setClickedOrganFeedback(null);

    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    } else {
      setCurrentIndex(filteredQuestions.length - 1);
    }
  };

  // Calculate System Accuracy Percentage
  const systemStat = examSystemStats[system] || { correct: 0, total: 0 };
  const accuracyPct =
    systemStat.total > 0 ? Math.round((systemStat.correct / systemStat.total) * 100) : 0;

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className={`flex flex-col h-full bg-slate-900/90 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl ${className || ''}`}
    >
      {/* 1. Exam Header with Mode Badge & Exit Switcher */}
      <div className="p-4 border-b border-slate-800 bg-gradient-to-r from-emerald-950/40 via-slate-900 to-slate-950 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-emerald-500 to-teal-400 p-0.5 flex items-center justify-center shadow-lg shadow-emerald-500/20">
            <div className="w-full h-full bg-slate-950 rounded-[10px] flex items-center justify-center text-emerald-400">
              <GraduationCap size={18} />
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-white tracking-wide">
                {isRtl ? 'وضع الاختبار العملي 3D' : '3D Practical Exam Mode'}
              </span>
              <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-500/40">
                LIVE NEON DB
              </span>
            </div>
            <p className="text-[10px] text-slate-400">
              {isRtl ? 'تحديد الأعضاء بالنموذج وحالات سريرية' : 'Pin-the-Organ & Clinical Cases'}
            </p>
          </div>
        </div>

        {/* Exit Exam / Back to Study Mode */}
        <button
          onClick={() => {
            setIsExamMode(false);
            if (onExitExam) onExitExam();
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-all border border-slate-700"
          title={isRtl ? 'العودة لوضع الدراسة' : 'Return to Study Mode'}
        >
          <ArrowRight size={13} className={isRtl ? '' : 'rotate-180'} />
          <span>{isRtl ? 'وضع الدراسة' : 'Study Mode'}</span>
        </button>
      </div>

      {/* 2. Live Performance HUD: Score, Streak, & System Accuracy */}
      <div className="grid grid-cols-3 gap-2 p-3 bg-slate-950/60 border-b border-slate-800 text-center font-mono">
        {/* Score */}
        <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800">
          <div className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
            <Award size={12} className="text-emerald-400" />
            <span>{isRtl ? 'النقاط' : 'Score'}</span>
          </div>
          <div className="text-base font-black text-emerald-400">{examScore}</div>
        </div>

        {/* Streak */}
        <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800">
          <div className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
            <Flame size={12} className="text-amber-500" />
            <span>{isRtl ? 'التتابع' : 'Streak'}</span>
          </div>
          <div className="text-base font-black text-amber-400 flex items-center justify-center gap-1">
            <span>{examStreak}</span>
            {examStreak >= 3 && <span className="text-xs animate-bounce">🔥</span>}
          </div>
        </div>

        {/* System Accuracy */}
        <div className="p-2 rounded-xl bg-slate-900/90 border border-slate-800">
          <div className="text-[10px] text-slate-400 flex items-center justify-center gap-1">
            <ShieldCheck size={12} className="text-cyan-400" />
            <span>{isRtl ? 'دقة الجهاز' : 'Accuracy'}</span>
          </div>
          <div
            className={`text-base font-black ${
              accuracyPct >= 80
                ? 'text-emerald-400'
                : accuracyPct >= 50
                ? 'text-amber-400'
                : 'text-cyan-400'
            }`}
          >
            {systemStat.total > 0 ? `${accuracyPct}%` : '---'}
          </div>
        </div>
      </div>

      {/* 3. Question Filter Tabs */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-800/80 text-xs">
        <div className="flex items-center gap-1 bg-slate-950 p-1 rounded-xl border border-slate-800">
          <button
            onClick={() => {
              setFilterType('all');
              setCurrentIndex(0);
            }}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all text-[11px] ${
              filterType === 'all'
                ? 'bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isRtl ? 'الكل' : 'All'}
          </button>
          <button
            onClick={() => {
              setFilterType('identify');
              setCurrentIndex(0);
            }}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all text-[11px] ${
              filterType === 'identify'
                ? 'bg-emerald-500/20 text-emerald-300 font-bold border border-emerald-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isRtl ? 'تحديد على 3D' : 'Identify 3D'}
          </button>
          <button
            onClick={() => {
              setFilterType('mcq');
              setCurrentIndex(0);
            }}
            className={`px-2.5 py-1 rounded-lg font-medium transition-all text-[11px] ${
              filterType === 'mcq'
                ? 'bg-purple-500/20 text-purple-300 font-bold border border-purple-500/30'
                : 'text-slate-400 hover:text-slate-200'
            }`}
          >
            {isRtl ? 'اختيار متعدد' : 'MCQs'}
          </button>
        </div>

        {/* Question Counter */}
        {filteredQuestions.length > 0 && (
          <span className="font-mono text-xs text-slate-400">
            {currentIndex + 1} / {filteredQuestions.length}
          </span>
        )}
      </div>

      {/* 4. Main Question Card Area */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {isLoading ? (
          <div className="flex flex-col items-center justify-center h-56 gap-3 text-cyan-400">
            <div className="w-8 h-8 border-3 border-cyan-500/20 border-t-cyan-400 rounded-full animate-spin" />
            <span className="text-xs font-mono">Loading Exam Questions from Neon DB...</span>
          </div>
        ) : !currentQuestion ? (
          <div className="text-center p-8 text-slate-400 text-xs">
            {isRtl
              ? 'لا توجد أسئلة مسجلة لهذا الجهاز بالفلتر المحدد.'
              : 'No exam questions registered for this system under the selected filter.'}
          </div>
        ) : (
          <>
            {/* Question Type Banner */}
            <div className="flex items-center justify-between">
              {currentQuestion.type === 'identify' ? (
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-[11px] font-semibold">
                  <Target size={13} className="text-emerald-400 animate-pulse" />
                  <span>{isRtl ? 'انقر على العضو في النموذج ثلاثي الأبعاد' : 'Identify on 3D Model'}</span>
                </div>
              ) : (
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-purple-500/15 border border-purple-500/30 text-purple-300 text-[11px] font-semibold">
                  <BookOpen size={13} className="text-purple-400" />
                  <span>{isRtl ? 'سؤال سريري • العضو معزول ثلاثي الأبعاد' : 'Clinical MCQ • 3D Isolated'}</span>
                </div>
              )}

              <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400">
                {currentQuestion.systemSlug}
              </span>
            </div>

            {/* Prompt Text */}
            <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2">
              <h3 className="text-sm sm:text-base font-bold text-white leading-relaxed">
                {isRtl ? currentQuestion.prompt.ar : currentQuestion.prompt.en}
              </h3>
              {/* Optional sub-language translation */}
              <p className="text-xs text-slate-400 font-normal">
                {isRtl ? currentQuestion.prompt.en : currentQuestion.prompt.ar}
              </p>
            </div>

            {/* Interaction Area: Type 1 Identify Mode */}
            {currentQuestion.type === 'identify' && !isAnswered && (
              <div className="p-4 rounded-xl border border-dashed border-cyan-500/40 bg-cyan-950/10 text-center space-y-2 animate-pulse">
                <Target size={24} className="mx-auto text-cyan-400" />
                <div className="text-xs font-bold text-cyan-300">
                  {isRtl ? 'الرجاء النقر على العضو المستهدف في نافذة العرض 3D' : 'Click the Target Mesh on the 3D Canvas'}
                </div>
                <p className="text-[11px] text-slate-400">
                  {isRtl
                    ? 'سيومض النموذج باللون الأخضر الزمردي عند الإجابة الصحيحة أو الأحمر القرمزي عند الخطأ.'
                    : 'The mesh will flash emerald green on correct click or crimson red on wrong click.'}
                </p>
              </div>
            )}

            {/* Interaction Area: Type 2 MCQ Options */}
            {currentQuestion.type === 'mcq' && currentQuestion.options && (
              <div className="space-y-2">
                {currentQuestion.options.map((opt, idx) => {
                  const isSelected = selectedOption === idx;
                  const isCorrect = isAnswered && idx === currentQuestion.correctOptionIndex;
                  const isWrong = isAnswered && isSelected && !isCorrect;

                  return (
                    <button
                      key={idx}
                      disabled={isAnswered}
                      onClick={() => handleSelectOption(idx)}
                      className={`w-full text-left rtl:text-right p-3 rounded-xl border flex items-center justify-between text-xs transition-all font-medium ${
                        isCorrect
                          ? 'bg-emerald-950/80 border-emerald-500 text-emerald-200 shadow-lg shadow-emerald-500/10'
                          : isWrong
                          ? 'bg-rose-950/80 border-rose-500 text-rose-200 shadow-lg shadow-rose-500/10'
                          : isSelected
                          ? 'bg-cyan-950/60 border-cyan-500 text-cyan-200'
                          : 'bg-slate-950/60 hover:bg-slate-800/80 border-slate-800 text-slate-300'
                      }`}
                    >
                      <div className="space-y-0.5 pr-2 rtl:pr-0 rtl:pl-2">
                        <div>{isRtl ? opt.ar : opt.en}</div>
                        <div className="text-[10px] text-slate-400 font-normal">
                          {isRtl ? opt.en : opt.ar}
                        </div>
                      </div>

                      <div className="shrink-0">
                        {isCorrect && <CheckCircle2 size={16} className="text-emerald-400" />}
                        {isWrong && <XCircle size={16} className="text-rose-400" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            )}

            {/* Answer Feedback & Clinical Explanation Banner */}
            {isAnswered && (
              <div
                className={`p-4 rounded-xl border space-y-2.5 text-xs animate-fade-in ${
                  answerStatus === 'correct'
                    ? 'bg-emerald-950/40 border-emerald-500/50 text-emerald-200'
                    : 'bg-rose-950/40 border-rose-500/50 text-rose-200'
                }`}
              >
                {/* Result Title */}
                <div className="flex items-center gap-2 font-bold text-sm">
                  {answerStatus === 'correct' ? (
                    <>
                      <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />
                      <span>
                        {isRtl
                          ? `إجابة صحيحة وممتازة! تم تحديد ${currentQuestion.targetOrganName.ar}`
                          : `Correct Identification! Target: ${currentQuestion.targetOrganName.en}`}
                      </span>
                    </>
                  ) : (
                    <>
                      <XCircle size={18} className="text-rose-400 shrink-0" />
                      <span>
                        {isRtl
                          ? `إجابة خاطئة. الهدف المطلوب هو: ${currentQuestion.targetOrganName.ar}`
                          : `Incorrect. Expected Target: ${currentQuestion.targetOrganName.en}`}
                      </span>
                    </>
                  )}
                </div>

                {/* Latin Nomenclature (NAV) */}
                {currentQuestion.targetOrganName.latin && (
                  <div className="font-serif italic text-[11px] text-cyan-300">
                    Nomina Anatomica Veterinaria: {currentQuestion.targetOrganName.latin}
                  </div>
                )}

                {/* Scientific Explanation */}
                <div className="text-slate-300 leading-relaxed pt-1 border-t border-slate-800/80">
                  <div className="font-semibold text-slate-200 flex items-center gap-1 mb-1">
                    <BookOpen size={13} className="text-cyan-400" />
                    <span>{isRtl ? 'التفسير السريري:' : 'Clinical Explanation:'}</span>
                  </div>
                  <p>{isRtl ? currentQuestion.explanation.ar : currentQuestion.explanation.en}</p>
                </div>

                {/* Clinical Pearl */}
                {currentQuestion.clinicalPearl && (
                  <div className="p-2.5 rounded-lg bg-slate-950/80 border border-slate-800 text-[11px] text-amber-300 space-y-0.5">
                    <span className="font-bold flex items-center gap-1 text-amber-400">
                      <Sparkles size={12} />
                      <span>Clinical Pearl:</span>
                    </span>
                    <p className="text-slate-300">
                      {isRtl ? currentQuestion.clinicalPearl.ar : currentQuestion.clinicalPearl.en}
                    </p>
                  </div>
                )}

                {/* Action button to highlight target on 3D canvas if student failed */}
                {answerStatus === 'wrong' && currentQuestion.targetMeshId && (
                  <button
                    onClick={() => isolateOrgan(currentQuestion.targetMeshId)}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[11px] font-semibold hover:bg-cyan-500/30 transition-all mt-1"
                  >
                    <Eye size={12} />
                    <span>{isRtl ? 'كشف مكان العضو الصحيح في النموذج 3D' : 'Reveal Target Organ on 3D Model'}</span>
                  </button>
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* 5. Bottom Navigation Controls */}
      <div className="p-3 border-t border-slate-800 bg-slate-950/80 flex items-center justify-between">
        <button
          onClick={handlePrev}
          disabled={filteredQuestions.length <= 1}
          className="flex items-center gap-1 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-900 border border-slate-800 hover:bg-slate-800 text-slate-300 disabled:opacity-40 transition-all"
        >
          <ChevronLeft size={15} className={isRtl ? 'rotate-180' : ''} />
          <span>{isRtl ? 'السابق' : 'Prev'}</span>
        </button>

        <button
          onClick={handleNext}
          className="flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-400 hover:to-teal-400 text-slate-950 shadow-lg shadow-emerald-500/20 transition-all"
        >
          <span>{isRtl ? 'السؤال التالي' : 'Next Question'}</span>
          <ChevronRight size={15} className={isRtl ? 'rotate-180' : ''} />
        </button>
      </div>
    </div>
  );
}
