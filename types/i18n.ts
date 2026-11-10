import { AnimalSpecies, BilingualText, AnatomicalSystem } from './anatomy';

export type Language = 'en' | 'ar';

export interface GlossaryTerm {
  id: string;
  latinTerm: string;
  englishTerm: string;
  arabicTerm: string;
  phoneticTranscription?: string;
  category: AnatomicalSystem | 'general' | 'embryology' | 'histology';
  definition: BilingualText;
  etymology?: string;
  speciesRelevance?: AnimalSpecies[];
  clinicalNote?: BilingualText;
}

export interface QuizQuestion {
  id: string;
  type: 'pin_organ' | 'multiple_choice' | 'clinical_reasoning';
  species: AnimalSpecies;
  system: AnatomicalSystem;
  targetOrganId?: string;
  question: BilingualText;
  options?: BilingualText[];
  correctOptionIndex?: number;
  correctOrganId?: string;
  explanation: BilingualText;
  clinicalRelevance: BilingualText;
  difficulty: 'easy' | 'medium' | 'hard';
}

export interface Flashcard {
  id: string;
  system: AnatomicalSystem;
  species: AnimalSpecies;
  question: BilingualText;
  answer: BilingualText;
  latinName?: string;
  keyPoints: BilingualText[];
  clinicalSignificance?: BilingualText;
}
