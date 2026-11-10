import { AnimalSpecies, BilingualText } from './anatomy';

export type DrugCategory = 
  | 'antimicrobial' 
  | 'nsaid' 
  | 'analgesic' 
  | 'anesthetic' 
  | 'antiparasitic' 
  | 'cardiovascular' 
  | 'emergency';

export type AdministrationRoute = 'IV' | 'IM' | 'SC' | 'PO' | 'Topical' | 'Inhalation' | 'Intratracheal';

export interface SpeciesDosage {
  species: AnimalSpecies;
  doseMgPerKgMin: number;
  doseMgPerKgMax: number;
  routes: AdministrationRoute[];
  frequency: BilingualText;
  notes?: BilingualText;
  isContraindicated?: boolean;
  contraindicationReason?: BilingualText;
}

export interface VeterinaryDrug {
  id: string;
  genericName: string;
  brandNames: string[];
  arabicName: string;
  category: DrugCategory;
  mechanismOfAction: BilingualText;
  dosages: SpeciesDosage[];
  indications: BilingualText[];
  contraindications: BilingualText[];
  adverseEffects: BilingualText[];
  withdrawalTimes?: {
    meatDays?: number;
    milkDays?: number;
    eggsDays?: number;
  };
  clinicalPearls: BilingualText;
  toxicityWarnings?: BilingualText[];
}
