import { create } from 'zustand';
import { 
  Locale, 
  SpeciesId, 
  AnatomicalSystemId, 
  CameraCoordinates 
} from '../types/anatomy';
import { getOrganById } from '../data/anatomyRegistry';

export type ActiveTab = 'explorer' | 'pharmacology' | 'compare' | 'cases' | 'quiz' | 'glossary' | 'flashcards';

export type PinDisplayMode = 'all' | 'hover' | 'quiz_numbers' | 'hidden';

export type AnatomicalPlane = 'sagittal' | 'dorsal' | 'transverse';

export interface CrossSectionConfig {
  enabled: boolean;
  axis: AnatomicalPlane;
  offset: number; // -1.0 to 1.0
  inverted: boolean;
  showPlaneHelper: boolean;
}

export interface AnatomyState {
  // Localization & Bidirectional Layout
  locale: Locale;
  language: Locale; // alias for backward compatibility
  isRtl: boolean;
  setLocale: (locale: Locale) => void;
  setLanguage: (language: Locale) => void; // alias

  // Multi-Species Selection
  activeSpecies: SpeciesId;
  setActiveSpecies: (species: SpeciesId) => void;

  // System Breakdown Filtering
  activeSystem: AnatomicalSystemId | 'all';
  setActiveSystem: (system: AnatomicalSystemId | 'all') => void;

  // Organ Inspection & Raycast Click-to-Isolate Engine
  selectedOrganId: string | null;
  hoveredOrganId: string | null;
  isIsolatedMode: boolean;
  cameraFocus: CameraCoordinates | null;
  
  setSelectedOrganId: (id: string | null) => void;
  setHoveredOrganId: (id: string | null) => void;
  setIsIsolatedMode: (isIsolated: boolean) => void;
  isolateOrgan: (id: string) => void;
  exitIsolation: () => void;
  clearIsolation: () => void; // alias

  // 3D Viewport Controls & Camera
  explodedViewFactor: number; // 0 (assembled) to 1 (fully exploded)
  setExplodedViewFactor: (factor: number) => void;
  layerPeelingDepth: number; // 0 to 100
  setLayerPeelingDepth: (depth: number) => void;
  xrayMode: boolean;
  setXrayMode: (enabled: boolean) => void;
  wireframeMode: boolean;
  setWireframeMode: (enabled: boolean) => void;
  autoRotate: boolean;
  setAutoRotate: (enabled: boolean) => void;
  cameraResetNonce: number;
  resetCamera: () => void;

  // Progressive Layer Peeling & Exploded View Engine
  isMultiLayerPeeling: boolean;
  setIsMultiLayerPeeling: (enabled: boolean) => void;
  toggleMultiLayerPeeling: () => void;
  layerOpacities: Record<string, number>;
  setLayerOpacity: (systemId: string, opacity: number) => void;
  explosionFactor: number; // 0.0 to 2.5
  setExplosionFactor: (factor: number) => void;
  systemVisibility: Record<string, 'visible' | 'ghost' | 'hidden'>;
  setSystemVisibility: (systemId: string, state: 'visible' | 'ghost' | 'hidden') => void;
  cycleSystemVisibility: (systemId: string) => void;

  // Side-by-Side Comparative Anatomy Workstation
  compareMode: boolean;
  setCompareMode: (enabled: boolean) => void;
  secondarySpecies: SpeciesId;
  setSecondarySpecies: (species: SpeciesId) => void;
  secondarySystem: AnatomicalSystemId;
  setSecondarySystem: (system: AnatomicalSystemId) => void;
  secondaryOrganId: string | null;
  setSecondaryOrganId: (id: string | null) => void;
  isCameraSynced: boolean;
  setIsCameraSynced: (synced: boolean) => void;
  toggleCameraSync: () => void;
  sharedCameraState: {
    position: [number, number, number];
    target: [number, number, number];
    zoom: number;
    source: 'left' | 'right' | null;
    nonce: number;
  } | null;
  setSharedCameraState: (state: {
    position: [number, number, number];
    target: [number, number, number];
    zoom: number;
    source: 'left' | 'right' | null;
    nonce: number;
  } | null) => void;

  // Application Navigation & Search
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;

  // Interactive 3D Floating Callout Pins ("Anatomical Pins")
  pinDisplayMode: PinDisplayMode;
  setPinDisplayMode: (mode: PinDisplayMode) => void;
  cyclePinDisplayMode: () => void;

  // Real-Time Cross-Section Slicing Plane ("Anatomical Clipping Engine")
  clippingConfig: CrossSectionConfig;
  updateClippingConfig: (config: Partial<CrossSectionConfig>) => void;
  toggleClipping: () => void;

  // 3D Practical Exam Mode ("Pin-the-Organ")
  isExamMode: boolean;
  setIsExamMode: (isExamMode: boolean) => void;
  toggleExamMode: () => void;
  examMeshFlash: { meshId: string; status: 'correct' | 'wrong'; timestamp: number } | null;
  setExamMeshFlash: (flash: { meshId: string; status: 'correct' | 'wrong'; timestamp: number } | null) => void;
  examClickedMeshId: string | null;
  setExamClickedMeshId: (meshId: string | null) => void;
  examScore: number;
  setExamScore: (score: number | ((prev: number) => number)) => void;
  examStreak: number;
  setExamStreak: (streak: number | ((prev: number) => number)) => void;
  examSystemStats: Record<string, { correct: number; total: number }>;
  recordExamAnswer: (systemSlug: string, isCorrect: boolean) => void;
  resetExamStats: () => void;

  // Global Command-K Search
  isCommandSearchOpen: boolean;
  setIsCommandSearchOpen: (open: boolean) => void;
  toggleCommandSearch: () => void;

  // Offline Lab Pack Manager & PWA Vault
  isOfflinePackManagerOpen: boolean;
  setIsOfflinePackManagerOpen: (open: boolean) => void;
  toggleOfflinePackManager: () => void;

  // Theme
  isDarkMode: boolean;
  toggleDarkMode: () => void;
}

export const useAnatomyStore = create<AnatomyState>((set) => ({
  // Localization
  locale: 'en',
  language: 'en',
  isRtl: false,
  setLocale: (locale) => set({
    locale,
    language: locale,
    isRtl: locale === 'ar',
  }),
  setLanguage: (language) => set({
    locale: language,
    language,
    isRtl: language === 'ar',
  }),

  // Multi-Species Selection (default: Equine)
  activeSpecies: 'equine',
  setActiveSpecies: (activeSpecies) => set({
    activeSpecies,
    selectedOrganId: null,
    hoveredOrganId: null,
    isIsolatedMode: false,
    cameraFocus: null,
  }),

  // System Breakdown Filtering
  activeSystem: 'all',
  setActiveSystem: (activeSystem) => set({ activeSystem }),

  // Organ Inspection & Click-to-Isolate
  selectedOrganId: 'equine_heart',
  hoveredOrganId: null,
  isIsolatedMode: false,
  cameraFocus: null,

  setSelectedOrganId: (selectedOrganId) => {
    if (!selectedOrganId) {
      set({ selectedOrganId: null, cameraFocus: null });
      return;
    }
    const organ = getOrganById(selectedOrganId);
    set({
      selectedOrganId,
      cameraFocus: organ ? organ.cameraFocus : null,
    });
  },

  setHoveredOrganId: (hoveredOrganId) => set({ hoveredOrganId }),
  setIsIsolatedMode: (isIsolatedMode) => set({ isIsolatedMode }),

  isolateOrgan: (id: string) => {
    const organ = getOrganById(id);
    set({
      selectedOrganId: id,
      isIsolatedMode: true,
      cameraFocus: organ ? organ.cameraFocus : null,
    });
  },

  exitIsolation: () => set({
    isIsolatedMode: false,
    selectedOrganId: null,
    cameraFocus: null,
  }),
  clearIsolation: () => set({
    isIsolatedMode: false,
    selectedOrganId: null,
    cameraFocus: null,
  }),

  // 3D Viewport Controls
  explodedViewFactor: 0,
  setExplodedViewFactor: (explodedViewFactor) => set({ explodedViewFactor }),
  layerPeelingDepth: 75,
  setLayerPeelingDepth: (layerPeelingDepth) => set({ layerPeelingDepth }),
  xrayMode: false,
  setXrayMode: (xrayMode) => set({ xrayMode }),
  wireframeMode: false,
  setWireframeMode: (wireframeMode) => set({ wireframeMode }),
  autoRotate: false,
  setAutoRotate: (autoRotate) => set({ autoRotate }),
  cameraResetNonce: 0,
  resetCamera: () => set((state) => ({
    cameraResetNonce: state.cameraResetNonce + 1,
    selectedOrganId: null,
    isIsolatedMode: false,
    cameraFocus: null,
    explodedViewFactor: 0,
    explosionFactor: 0,
  })),

  // Progressive Layer Peeling & Exploded View Engine
  isMultiLayerPeeling: false,
  setIsMultiLayerPeeling: (isMultiLayerPeeling) => set({ isMultiLayerPeeling }),
  toggleMultiLayerPeeling: () => set((state) => ({ isMultiLayerPeeling: !state.isMultiLayerPeeling })),
  layerOpacities: {
    muscular: 1.0,
    cardiovascular: 1.0,
    nervous: 1.0,
    digestive: 1.0,
    respiratory: 1.0,
    urogenital: 1.0,
    skeletal: 1.0,
  },
  setLayerOpacity: (systemId, opacity) => set((state) => ({
    layerOpacities: {
      ...state.layerOpacities,
      [systemId]: opacity,
    },
  })),
  explosionFactor: 0,
  setExplosionFactor: (explosionFactor) => set({ explosionFactor, explodedViewFactor: explosionFactor }),
  systemVisibility: {
    muscular: 'visible',
    cardiovascular: 'visible',
    nervous: 'visible',
    digestive: 'visible',
    respiratory: 'visible',
    urogenital: 'visible',
    skeletal: 'visible',
  },
  setSystemVisibility: (systemId, status) => set((state) => ({
    systemVisibility: {
      ...state.systemVisibility,
      [systemId]: status,
    },
  })),
  cycleSystemVisibility: (systemId) => set((state) => {
    const current = state.systemVisibility[systemId] || 'visible';
    const next = current === 'visible' ? 'ghost' : current === 'ghost' ? 'hidden' : 'visible';
    return {
      systemVisibility: {
        ...state.systemVisibility,
        [systemId]: next,
      },
    };
  }),

  // Side-by-Side Comparative Anatomy Workstation
  compareMode: false,
  setCompareMode: (compareMode) => set({ compareMode }),
  secondarySpecies: 'bovine',
  setSecondarySpecies: (secondarySpecies) => set({ secondarySpecies }),
  secondarySystem: 'digestive',
  setSecondarySystem: (secondarySystem) => set({ secondarySystem }),
  secondaryOrganId: null,
  setSecondaryOrganId: (secondaryOrganId) => set({ secondaryOrganId }),
  isCameraSynced: true,
  setIsCameraSynced: (isCameraSynced) => set({ isCameraSynced }),
  toggleCameraSync: () => set((state) => ({ isCameraSynced: !state.isCameraSynced })),
  sharedCameraState: null,
  setSharedCameraState: (sharedCameraState) => set({ sharedCameraState }),

  // Navigation & Search
  activeTab: 'explorer',
  setActiveTab: (activeTab) => set({ activeTab }),
  searchQuery: '',
  setSearchQuery: (searchQuery) => set({ searchQuery }),

  // Interactive 3D Floating Callout Pins
  pinDisplayMode: 'hover',
  setPinDisplayMode: (pinDisplayMode) => set({ pinDisplayMode }),
  cyclePinDisplayMode: () => set((state) => {
    const modes: PinDisplayMode[] = ['all', 'hover', 'quiz_numbers', 'hidden'];
    const currentIndex = modes.indexOf(state.pinDisplayMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    return { pinDisplayMode: modes[nextIndex] };
  }),

  // Real-Time Cross-Section Slicing Plane
  clippingConfig: {
    enabled: false,
    axis: 'sagittal',
    offset: 0,
    inverted: false,
    showPlaneHelper: true,
  },
  updateClippingConfig: (partial) => set((state) => ({
    clippingConfig: {
      ...state.clippingConfig,
      ...partial,
    },
  })),
  toggleClipping: () => set((state) => ({
    clippingConfig: {
      ...state.clippingConfig,
      enabled: !state.clippingConfig.enabled,
    },
  })),

  // 3D Practical Exam Mode ("Pin-the-Organ")
  isExamMode: false,
  setIsExamMode: (isExamMode) => set({ isExamMode }),
  toggleExamMode: () => set((state) => ({ isExamMode: !state.isExamMode })),
  examMeshFlash: null,
  setExamMeshFlash: (examMeshFlash) => set({ examMeshFlash }),
  examClickedMeshId: null,
  setExamClickedMeshId: (examClickedMeshId) => set({ examClickedMeshId }),
  examScore: 0,
  setExamScore: (score) => set((state) => ({
    examScore: typeof score === 'function' ? score(state.examScore) : score,
  })),
  examStreak: 0,
  setExamStreak: (streak) => set((state) => ({
    examStreak: typeof streak === 'function' ? streak(state.examStreak) : streak,
  })),
  examSystemStats: {},
  recordExamAnswer: (systemSlug, isCorrect) => set((state) => {
    const current = state.examSystemStats[systemSlug] || { correct: 0, total: 0 };
    return {
      examSystemStats: {
        ...state.examSystemStats,
        [systemSlug]: {
          correct: current.correct + (isCorrect ? 1 : 0),
          total: current.total + 1,
        },
      },
    };
  }),
  resetExamStats: () => set({
    examScore: 0,
    examStreak: 0,
    examSystemStats: {},
    examMeshFlash: null,
    examClickedMeshId: null,
  }),

  // Global Command-K Search
  isCommandSearchOpen: false,
  setIsCommandSearchOpen: (isCommandSearchOpen) => set({ isCommandSearchOpen }),
  toggleCommandSearch: () => set((state) => ({ isCommandSearchOpen: !state.isCommandSearchOpen })),

  // Offline Lab Pack Manager & PWA Vault
  isOfflinePackManagerOpen: false,
  setIsOfflinePackManagerOpen: (isOfflinePackManagerOpen) => set({ isOfflinePackManagerOpen }),
  toggleOfflinePackManager: () => set((state) => ({ isOfflinePackManagerOpen: !state.isOfflinePackManagerOpen })),

  // Theme
  isDarkMode: true,
  toggleDarkMode: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));
