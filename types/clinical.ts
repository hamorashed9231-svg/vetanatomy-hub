import { AnimalSpecies, BilingualText, AnatomicalSystem } from './anatomy';

export interface VitalSignItem {
  name: BilingualText;
  value: string;
  unit: string;
  referenceRange: string;
  status: 'normal' | 'elevated' | 'decreased' | 'critical';
}

export interface LabTestResult {
  parameter: string;
  arabicParameter: string;
  measured: number | string;
  unit: string;
  reference: string;
  abnormal: boolean;
  significance: BilingualText;
}

export interface DiagnosticFinding {
  modality: 'radiology' | 'ultrasound' | 'bloodwork' | 'urinalysis' | 'ecg' | 'endoscopy';
  title: BilingualText;
  description: BilingualText;
  imageUrl?: string;
  keyAbnormalities: BilingualText[];
}

export interface ClinicalCase {
  id: string;
  title: BilingualText;
  species: AnimalSpecies;
  breed: BilingualText;
  age: string;
  weightKg: number;
  sex: BilingualText;
  presentingComplaint: BilingualText;
  history: BilingualText;
  affectedSystem: AnatomicalSystem;
  vitals: VitalSignItem[];
  physicalExamFindings: BilingualText[];
  diagnostics: DiagnosticFinding[];
  labTests: LabTestResult[];
  differentialDiagnoses: BilingualText[];
  definitiveDiagnosis: BilingualText;
  pathophysiology: BilingualText;
  treatmentPlan: {
    immediate: BilingualText[];
    medical: BilingualText[];
    surgical?: BilingualText[];
    monitoring: BilingualText[];
  };
  prognosis: BilingualText;
  clinicalPearls: BilingualText;
}
