'use client';

import { useState } from 'react';
import confetti from 'canvas-confetti';
import { 
  HelpCircle, 
  Award, 
  Sparkles, 
  RotateCw, 
  CheckCircle2, 
  XCircle, 
  Layers, 
  ChevronRight,
  BookOpen,
  Flame
} from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { QUIZ_QUESTIONS, FLASHCARDS_DECK } from '../../data/quizzesData';
import { ORGANS_DATA } from '../../data/organsData';

export function QuizModule() {
  const language = useAnatomyStore((state) => state.language);
  const isRtl = useAnatomyStore((state) => state.isRtl);
  const isolateOrgan = useAnatomyStore((state) => state.isolateOrgan);
  const setActiveTab = useAnatomyStore((state) => state.setActiveTab);

  const [activeSubTab, setActiveSubTab] = useState<'quiz' | 'flashcards'>('quiz');
  
  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | string | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  // Flashcards state
  const [cardIndex, setCardIndex] = useState(0);
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const question = QUIZ_QUESTIONS[currentQuestionIndex];
  const card = FLASHCARDS_DECK[cardIndex];

  // Submit Answer
  const handleAnswerSubmit = (answer: number | string) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(answer);
    setIsAnswerSubmitted(true);

    const isCorrect = 
      question.type === 'pin_organ'
        ? answer === question.correctOrganId
        : answer === question.correctOptionIndex;

    if (isCorrect) {
      setScore((prev) => prev + 10);
      setStreak((prev) => prev + 1);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    } else {
      setStreak(0);
    }
  };

  const handleNextQuestion = () => {
    setIsAnswerSubmitted(false);
    setSelectedAnswer(null);
    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      setCurrentQuestionIndex(0); // Loop back or reset
    }
  };

  const t = {
    quizTitle: language === 'ar' ? 'اختبارات التشريح التفاعلية' : 'Interactive Anatomy Quizzes',
    flashcardsTitle: language === 'ar' ? 'البطاقات التعليمية والتكرار المتباعد' : 'NAVLE Spaced Repetition Flashcards',
    score: language === 'ar' ? 'النقاط' : 'Score',
    streak: language === 'ar' ? 'التتابع' : 'Streak',
    questionCounter: language === 'ar' ? `السؤال ${currentQuestionIndex + 1} من ${QUIZ_QUESTIONS.length}` : `Question ${currentQuestionIndex + 1} of ${QUIZ_QUESTIONS.length}`,
    nextQuestion: language === 'ar' ? 'السؤال التالي' : 'Next Question',
    explanation: language === 'ar' ? 'التفسير العلمي السريري' : 'Scientific Explanation',
    flipCard: language === 'ar' ? 'انقر لقلب البطاقة وكشف الإجابة' : 'Click to flip card and reveal answer',
    nextCard: language === 'ar' ? 'البطاقة التالية' : 'Next Card',
    prevCard: language === 'ar' ? 'البطاقة السابقة' : 'Previous Card',
    selectOrganPrompt: language === 'ar' ? 'اختر العضو المستهدف من الخيارات التالية:' : 'Select the target anatomical organ:',
  };

  return (
    <div className="max-w-4xl mx-auto p-4 lg:p-8 flex flex-col gap-6">
      
      {/* Subtab Switcher: Quiz vs Flashcards */}
      <div className="flex items-center justify-between border-b border-slate-800 pb-3">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveSubTab('quiz')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'quiz'
                ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <HelpCircle size={15} />
            <span>{t.quizTitle}</span>
          </button>

          <button
            onClick={() => setActiveSubTab('flashcards')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold transition-all ${
              activeSubTab === 'flashcards'
                ? 'bg-purple-500 text-white shadow-md shadow-purple-500/20'
                : 'bg-slate-900 text-slate-400 hover:text-white'
            }`}
          >
            <Layers size={15} />
            <span>{t.flashcardsTitle}</span>
          </button>
        </div>

        {/* Score & Streak HUD */}
        {activeSubTab === 'quiz' && (
          <div className="flex items-center gap-3 text-xs font-mono">
            <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 text-amber-400 font-bold">
              <Flame size={15} className="text-amber-500 animate-bounce" />
              <span>{streak} Streak</span>
            </div>
            <div className="flex items-center gap-1.5 bg-slate-900 px-3 py-1.5 rounded-xl border border-slate-800 text-emerald-400 font-bold">
              <Award size={15} className="text-emerald-500" />
              <span>{score} pts</span>
            </div>
          </div>
        )}
      </div>

      {/* Mode 1: Interactive Quiz */}
      {activeSubTab === 'quiz' && (
        <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-6 backdrop-blur-md shadow-2xl flex flex-col gap-5">
          {/* Question Header */}
          <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800 pb-3">
            <span className="font-mono font-semibold text-cyan-400">
              {t.questionCounter}
            </span>
            <div className="flex items-center gap-2">
              <span className="capitalize px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                {question.species}
              </span>
              <span className="capitalize px-2 py-0.5 rounded bg-slate-800 text-slate-300">
                {question.system}
              </span>
              <span className="capitalize px-2 py-0.5 rounded bg-slate-800 text-amber-400">
                {question.difficulty}
              </span>
            </div>
          </div>

          {/* Question Text */}
          <h3 className="text-base sm:text-lg font-bold text-white leading-relaxed">
            {question.question[language]}
          </h3>

          {/* Options: Multiple Choice or Pin-Organ Selection */}
          {question.type === 'multiple_choice' && question.options ? (
            <div className="grid grid-cols-1 gap-2.5">
              {question.options.map((opt, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = isAnswerSubmitted && idx === question.correctOptionIndex;
                const isWrong = isAnswerSubmitted && isSelected && !isCorrect;

                return (
                  <button
                    key={idx}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleAnswerSubmit(idx)}
                    className={`text-left rtl:text-right p-3.5 rounded-xl border flex items-center justify-between transition-all text-xs sm:text-sm font-medium ${
                      isCorrect
                        ? 'bg-emerald-950/70 border-emerald-500 text-emerald-200'
                        : isWrong
                        ? 'bg-rose-950/70 border-rose-500 text-rose-200'
                        : isSelected
                        ? 'bg-cyan-950/50 border-cyan-500 text-cyan-200'
                        : 'bg-slate-950/50 hover:bg-slate-800/60 border-slate-800 text-slate-300'
                    }`}
                  >
                    <span>{opt[language]}</span>
                    {isCorrect && <CheckCircle2 size={18} className="text-emerald-400 shrink-0" />}
                    {isWrong && <XCircle size={18} className="text-rose-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          ) : (
            /* Pin-Organ Options Grid */
            <div className="space-y-3">
              <span className="text-xs text-slate-400 block font-medium">
                {t.selectOrganPrompt}
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {ORGANS_DATA.slice(0, 6).map((organ) => {
                  const isSelected = selectedAnswer === organ.id;
                  const isCorrect = isAnswerSubmitted && organ.id === question.correctOrganId;
                  const isWrong = isAnswerSubmitted && isSelected && !isCorrect;

                  return (
                    <button
                      key={organ.id}
                      disabled={isAnswerSubmitted}
                      onClick={() => handleAnswerSubmit(organ.id)}
                      className={`text-left rtl:text-right p-3 rounded-xl border flex flex-col justify-between transition-all text-xs ${
                        isCorrect
                          ? 'bg-emerald-950/70 border-emerald-500 text-emerald-200 font-bold'
                          : isWrong
                          ? 'bg-rose-950/70 border-rose-500 text-rose-200 font-bold'
                          : isSelected
                          ? 'bg-cyan-950/50 border-cyan-500 text-cyan-200'
                          : 'bg-slate-950/50 hover:bg-slate-800/60 border-slate-800 text-slate-300'
                      }`}
                    >
                      <span className="font-bold">{organ.name[language]}</span>
                      <span className="font-serif italic text-[11px] text-slate-400 mt-1">
                        {organ.latinName}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Answer Feedback & Scientific Explanation */}
          {isAnswerSubmitted && (
            <div className="p-4 rounded-xl bg-slate-950/80 border border-cyan-500/30 space-y-2 text-xs animate-fade-in">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <BookOpen size={16} />
                <span>{t.explanation}:</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {question.explanation[language]}
              </p>
              <div className="pt-2 border-t border-slate-800 text-emerald-300 font-medium">
                <strong>Clinical Pearl: </strong>
                {question.clinicalRelevance[language]}
              </div>

              <div className="flex justify-end pt-2">
                <button
                  onClick={handleNextQuestion}
                  className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl text-xs flex items-center gap-1.5 transition-all shadow-md"
                >
                  <span>{t.nextQuestion}</span>
                  <ChevronRight size={14} className={isRtl ? 'rotate-180' : ''} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Mode 2: Spaced Repetition Flashcards */}
      {activeSubTab === 'flashcards' && (
        <div className="flex flex-col items-center gap-5">
          {/* Card Container with 3D Flip */}
          <div
            onClick={() => setIsCardFlipped(!isCardFlipped)}
            className="w-full min-h-[320px] bg-gradient-to-br from-slate-900 via-slate-850 to-slate-900 border border-purple-500/30 rounded-3xl p-6 sm:p-8 cursor-pointer shadow-2xl flex flex-col justify-between transition-all hover:border-purple-400/60 text-center"
          >
            {/* Card Header */}
            <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-3">
              <span className="font-mono text-purple-400 font-bold">
                Card {cardIndex + 1} of {FLASHCARDS_DECK.length}
              </span>
              <span className="capitalize px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 font-semibold">
                {card.system} • {card.species}
              </span>
            </div>

            {/* Card Content Front / Back */}
            <div className="my-auto py-6">
              {!isCardFlipped ? (
                /* Question Front */
                <div className="space-y-4">
                  <span className="text-xs font-mono uppercase text-slate-500 tracking-wider">
                    Anatomical Board Exam Question
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-white max-w-xl mx-auto leading-relaxed">
                    {card.question[language]}
                  </h3>
                  {card.latinName && (
                    <span className="font-serif italic text-sm text-cyan-300 block">
                      NAV: {card.latinName}
                    </span>
                  )}
                </div>
              ) : (
                /* Answer Back */
                <div className="space-y-4 text-left rtl:text-right">
                  <span className="text-xs font-mono uppercase text-emerald-400 font-bold block text-center">
                    Correct Answer & Key Findings
                  </span>
                  <p className="text-sm sm:text-base text-white font-medium leading-relaxed bg-slate-950/60 p-4 rounded-2xl border border-slate-800">
                    {card.answer[language]}
                  </p>
                  <ul className="text-xs text-slate-300 space-y-1.5 list-disc list-inside">
                    {card.keyPoints.map((point, idx) => (
                      <li key={idx}>{point[language]}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Card Footer prompt */}
            <div className="text-[11px] text-slate-400 font-mono flex items-center justify-center gap-1.5 pt-3 border-t border-slate-800/80">
              <RotateCw size={12} className="text-purple-400" />
              <span>{t.flipCard}</span>
            </div>
          </div>

          {/* Flashcard Navigation */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setIsCardFlipped(false);
                setCardIndex((prev) => (prev > 0 ? prev - 1 : FLASHCARDS_DECK.length - 1));
              }}
              className="px-4 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:bg-slate-800 text-xs font-semibold text-slate-300"
            >
              {t.prevCard}
            </button>
            <button
              onClick={() => {
                setIsCardFlipped(false);
                setCardIndex((prev) => (prev < FLASHCARDS_DECK.length - 1 ? prev + 1 : 0));
              }}
              className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-semibold shadow-md shadow-purple-500/20"
            >
              {t.nextCard}
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
