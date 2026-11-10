export type Locale = 'en' | 'ar';

export interface BilingualText {
  en: string;
  ar: string;
}

export type SpeciesId = 
  | 'equine'
  | 'bovine'
  | 'canine'
  | 'feline'
  | 'ovine_caprine'
  | 'ovine'
  | 'avian'
  | 'camelid';

export type AnimalSpecies = SpeciesId;

export type AnatomicalSystemId = 
  | 'skeletal' 
  | 'muscular' 
  | 'cardiovascular' 
  | 'circulatory'
  | 'respiratory' 
  | 'digestive' 
  | 'nervous' 
  | 'urogenital';

export type AnatomicalSystem = AnatomicalSystemId;

export type AnatomicalLayer = 'skin' | 'muscle' | 'organs' | 'skeleton';

export interface CameraCoordinates {
  position: [number, number, number];
  target: [number, number, number];
}

export interface OrganClinicalCase {
  id: string;
  title: BilingualText;
  description: BilingualText;
  severity: 'mild' | 'moderate' | 'critical';
  urgency: BilingualText;
}

export interface OrganPart {
  id: string;                     // e.g., 'equine_heart', 'camelid_c1_stomach'
  meshId: string;                 // Target mesh node name within the GLTF/GLB hierarchy
  systemId: AnatomicalSystemId;
  speciesId: SpeciesId;
  latinTaxonomyName: string;      // Nomina Anatomica Veterinaria (NAV) official Latin taxonomy
  name: BilingualText;            // Primary English and Arabic names
  description: BilingualText;     // Morphological and physiological overview
  bloodSupply: BilingualText;     // Arterial distribution and venous drainage
  innervation: BilingualText;     // Somatic and autonomic neural pathways
  clinicalPearls: BilingualText;  // Diagnostic relevance, surgical landmarks, and exam pearls
  commonPathologies: BilingualText[]; // Frequent diseases and clinical entities
  cameraFocus: CameraCoordinates; // Camera coordinates [x, y, z] and lookAt target [tx, ty, tz]
  color: string;                  // Fallback and highlight shader color
  emissiveColor?: string;         // Emissive glow color
  proceduralType: 
    | 'heart' 
    | 'lungs' 
    | 'liver' 
    | 'stomach' 
    | 'rumen' 
    | 'kidney' 
    | 'brain' 
    | 'bladder' 
    | 'spine' 
    | 'skull' 
    | 'limb' 
    | 'muscle';
}

// Full OrganDetail interface ensuring 100% backward compatibility
export interface OrganDetail {
  id: string;
  name: BilingualText;
  latinName: string;
  species: (AnimalSpecies | string)[];
  system: AnatomicalSystem;
  layer: AnatomicalLayer;
  color: string;
  emissiveColor?: string;
  position: [number, number, number];
  rotation?: [number, number, number];
  scale?: [number, number, number];
  meshType: 'heart' | 'lungs' | 'liver' | 'stomach' | 'rumen' | 'kidney' | 'brain' | 'bone' | 'muscle' | 'spleen' | 'intestine' | 'bladder' | 'spine' | 'skull' | 'limb';
  explodedOffset: [number, number, number];
  function: BilingualText;
  histology: BilingualText;
  clinicalSignificance: BilingualText;
  innervationAndBloodSupply?: BilingualText;
  commonPathologies: BilingualText[];
  clinicalCases: OrganClinicalCase[];
  triviaOrClinicalPearl?: BilingualText;
}

export interface SystemMetadata {
  id: AnatomicalSystemId;
  name: BilingualText;
  icon: string;
  color: string;
  description: BilingualText;
}

export interface SpeciesProfile {
  id: SpeciesId;
  name: BilingualText;
  scientificName: string;
  commonFamily: BilingualText;
  icon: string;
  description: BilingualText;
  gestation: BilingualText;
  normalVitals: {
    tempC: string;
    heartRateBpm: string;
    respiratoryRateBpm: string;
  };
  anatomicalHighlights: BilingualText[];
  glbAssetMap: Partial<Record<AnatomicalSystemId, string>>;
}

export interface AnimalProfile {
  id: AnimalSpecies | string;
  name: BilingualText;
  scientificName: string;
  icon: string;
  description: BilingualText;
  systemsAvailable: AnatomicalSystem[];
  anatomicalHighlights: BilingualText[];
  gestationPeriod: BilingualText;
  normalVitals: {
    tempC: string;
    heartRateBpm: string;
    respiratoryRateBpm: string;
  };
}
