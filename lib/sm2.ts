/**
 * SuperMemo-2 (SM-2) Spaced-Repetition Algorithm Implementation
 * Engineered for 3D Veterinary Anatomy Flashcards
 */

export type FlashcardRating = 'again' | 'hard' | 'good' | 'easy';

export interface SM2State {
  easeFactor: number;    // Minimum 1.3, default 2.5
  interval: number;      // Current review interval in days
  repetitions: number;   // Number of consecutive successful reviews
  nextReviewDate: Date;  // Target review timestamp
  lastDifficulty?: FlashcardRating;
}

export interface SM2CalculationResult {
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextReviewDate: Date;
  intervalDisplay: {
    en: string;
    ar: string;
  };
}

/**
 * Format interval into human-readable bilingual strings (e.g., "< 10m", "1d", "6d", "14d")
 */
export function formatReviewInterval(days: number, isMinutes = false): { en: string; ar: string } {
  if (isMinutes || days === 0) {
    return {
      en: '< 10m',
      ar: '< 10 د',
    };
  }
  if (days === 1) {
    return {
      en: '1d',
      ar: '1 يوم',
    };
  }
  if (days < 30) {
    return {
      en: `${days}d`,
      ar: `${days} أيام`,
    };
  }
  const months = Math.round(days / 30);
  return {
    en: `${months}mo`,
    ar: `${months} شهر`,
  };
}

/**
 * Calculate the next SM-2 progression for a flashcard based on user rating.
 *
 * Ratings:
 * - 'again' (0): Incorrect / failed recall. Reset repetitions to 0. Next review in 10 minutes (or 1 day).
 * - 'hard'  (1): Difficult recall. Moderate interval scaling (1.2x) and ease penalty (-0.15).
 * - 'good'  (2): Standard correct recall. Standard SM-2 interval progression (1d -> 6d -> interval * easeFactor).
 * - 'easy'  (3): Effortless recall. Accelerated interval with ease bonus (+0.15).
 */
export function calculateSM2(
  currentState: { easeFactor: number; interval: number; repetitions: number },
  rating: FlashcardRating
): SM2CalculationResult {
  let { easeFactor, interval, repetitions } = currentState;
  // Ensure default safety minimums
  easeFactor = Math.max(1.3, easeFactor || 2.5);
  interval = Math.max(0, interval || 0);
  repetitions = Math.max(0, repetitions || 0);

  let nextInterval: number;
  let nextRepetitions: number;
  let nextEaseFactor: number;
  let isTenMinutes = false;

  switch (rating) {
    case 'again': {
      nextRepetitions = 0;
      nextInterval = 0; // In-session review
      isTenMinutes = true;
      nextEaseFactor = Math.max(1.3, easeFactor - 0.20);
      break;
    }

    case 'hard': {
      nextRepetitions = repetitions === 0 ? 1 : repetitions;
      if (repetitions === 0) {
        nextInterval = 1;
      } else {
        nextInterval = Math.max(1, Math.round(interval * 1.2));
      }
      nextEaseFactor = Math.max(1.3, easeFactor - 0.15);
      break;
    }

    case 'good': {
      nextRepetitions = repetitions + 1;
      if (nextRepetitions === 1) {
        nextInterval = 1;
      } else if (nextRepetitions === 2) {
        nextInterval = 6;
      } else {
        nextInterval = Math.max(1, Math.round(interval * easeFactor));
      }
      // Standard SM-2 delta for grade 4 (good): +0.00
      nextEaseFactor = easeFactor;
      break;
    }

    case 'easy': {
      nextRepetitions = repetitions + 1;
      if (nextRepetitions === 1) {
        nextInterval = 3;
      } else if (nextRepetitions === 2) {
        nextInterval = 8;
      } else {
        nextInterval = Math.max(1, Math.round(interval * easeFactor * 1.35));
      }
      nextEaseFactor = Math.min(3.2, easeFactor + 0.15);
      break;
    }
  }

  // Calculate target Date
  const nextReviewDate = new Date();
  if (isTenMinutes) {
    nextReviewDate.setMinutes(nextReviewDate.getMinutes() + 10);
  } else {
    nextReviewDate.setDate(nextReviewDate.getDate() + nextInterval);
  }

  return {
    easeFactor: Number(nextEaseFactor.toFixed(2)),
    interval: nextInterval,
    repetitions: nextRepetitions,
    nextReviewDate,
    intervalDisplay: formatReviewInterval(nextInterval, isTenMinutes),
  };
}

/**
 * Preview calculated review intervals for all 4 rating buttons before the student clicks
 */
export function getPreviewIntervals(currentState: {
  easeFactor: number;
  interval: number;
  repetitions: number;
}): Record<FlashcardRating, { en: string; ar: string }> {
  return {
    again: calculateSM2(currentState, 'again').intervalDisplay,
    hard: calculateSM2(currentState, 'hard').intervalDisplay,
    good: calculateSM2(currentState, 'good').intervalDisplay,
    easy: calculateSM2(currentState, 'easy').intervalDisplay,
  };
}
