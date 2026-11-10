'use client';

import { useState, useMemo } from 'react';
import { 
  Calculator, 
  Pill, 
  Search, 
  AlertOctagon, 
  CheckCircle2, 
  Clock, 
  ShieldAlert, 
  Sparkles,
  Info
} from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { VETERINARY_DRUGS } from '../../data/drugsData';
import { ANIMALS_DATA } from '../../data/animals';
import { AnimalSpecies } from '../../types/anatomy';

export function PharmacologyModule() {
  const language = useAnatomyStore((state) => state.language);
  const activeSpecies = useAnatomyStore((state) => state.activeSpecies);
  
  // Selected drug & calculator state
  const [selectedDrugId, setSelectedDrugId] = useState(VETERINARY_DRUGS[0].id);
  const [patientSpecies, setPatientSpecies] = useState<AnimalSpecies>(activeSpecies);
  const [weightKg, setWeightKg] = useState<number>(20);
  const [drugConcentrationMgPerMl, setDrugConcentrationMgPerMl] = useState<number>(50); // e.g. 50 mg/mL
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const selectedDrug = useMemo(() => {
    return VETERINARY_DRUGS.find((d) => d.id === selectedDrugId) || VETERINARY_DRUGS[0];
  }, [selectedDrugId]);

  // Filtered drugs
  const filteredDrugs = useMemo(() => {
    return VETERINARY_DRUGS.filter((drug) => {
      const matchesSearch = 
        drug.genericName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        drug.arabicName.includes(searchTerm) ||
        drug.brandNames.some((b) => b.toLowerCase().includes(searchTerm.toLowerCase()));
      const matchesCategory = selectedCategory === 'all' || drug.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  // Dosage computation for active species
  const speciesDosage = useMemo(() => {
    return selectedDrug.dosages.find((d) => d.species === patientSpecies);
  }, [selectedDrug, patientSpecies]);

  // Calculated doses
  const calculatedDoseMinMg = speciesDosage ? speciesDosage.doseMgPerKgMin * weightKg : 0;
  const calculatedDoseMaxMg = speciesDosage ? speciesDosage.doseMgPerKgMax * weightKg : 0;
  const volumeMinMl = drugConcentrationMgPerMl > 0 ? calculatedDoseMinMg / drugConcentrationMgPerMl : 0;
  const volumeMaxMl = drugConcentrationMgPerMl > 0 ? calculatedDoseMaxMg / drugConcentrationMgPerMl : 0;

  const t = {
    title: language === 'ar' ? 'دستور الأدوية وحاسبة الجرعات البيطرية' : 'Veterinary Drug Formulary & Dosage Engine',
    searchPlaceholder: language === 'ar' ? 'ابحث بالاسم العلمي، التجاري، أو العربي...' : 'Search generic, brand, or Arabic name...',
    calcHeader: language === 'ar' ? 'حاسبة الجرعة السريرية الحية' : 'Live Clinical Dosage Calculator',
    speciesLabel: language === 'ar' ? 'نوع الحيوان المريض' : 'Patient Species',
    weightLabel: language === 'ar' ? 'وزن الحيوان (كجم)' : 'Body Weight (kg)',
    concentrationLabel: language === 'ar' ? 'تركيز المستحضر (مجم/مل)' : 'Concentration (mg/mL)',
    contraindicatedWarning: language === 'ar' ? 'تحذير طبي: الدواء ممنوع تماماً في هذا الحيوان!' : 'Medical Warning: Contraindicated in this species!',
    doseOutputLabel: language === 'ar' ? 'الجرعة المحسوبة بالمليجرام' : 'Calculated Total Dose (mg)',
    volumeOutputLabel: language === 'ar' ? 'حجم الحقن / الشراب المطلوب' : 'Calculated Liquid Volume (mL)',
    routes: language === 'ar' ? 'طرق الإعطاء' : 'Routes',
    frequency: language === 'ar' ? 'التكرار' : 'Frequency',
    mechanism: language === 'ar' ? 'آلية العمل الدوائي' : 'Mechanism of Action',
    indications: language === 'ar' ? 'دواعي الاستعمال' : 'Indications',
    contraindications: language === 'ar' ? 'موانع الاستعمال' : 'Contraindications',
    clinicalPearl: language === 'ar' ? 'لؤلؤة سريرية' : 'Clinical Pearl',
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 lg:p-8">
      {/* Left Column: Drug Directory & Filter */}
      <div className="lg:col-span-4 flex flex-col gap-4 bg-slate-900/70 border border-slate-800 rounded-2xl p-4 backdrop-blur-md">
        <div className="flex items-center gap-2 text-cyan-400 font-bold text-base">
          <Pill size={18} />
          <span>{t.title}</span>
        </div>

        {/* Search Input */}
        <div className="relative">
          <Search size={16} className="absolute left-3 rtl:right-3 top-3 text-slate-400" />
          <input
            type="text"
            placeholder={t.searchPlaceholder}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-950/80 border border-slate-800 rounded-xl pl-9 rtl:pr-9 pr-3 rtl:pl-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
          />
        </div>

        {/* Drug Category Pills */}
        <div className="flex gap-1.5 overflow-x-auto pb-1 no-scrollbar text-[11px]">
          {['all', 'antimicrobial', 'nsaid', 'anesthetic', 'cardiovascular', 'emergency'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-2.5 py-1 rounded-lg capitalize whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 font-bold'
                  : 'bg-slate-800 text-slate-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Drug List */}
        <div className="flex flex-col gap-2 overflow-y-auto max-h-[600px] pr-1">
          {filteredDrugs.map((drug) => {
            const isSelected = drug.id === selectedDrug.id;
            return (
              <button
                key={drug.id}
                onClick={() => setSelectedDrugId(drug.id)}
                className={`text-left rtl:text-right p-3 rounded-xl border transition-all ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-950/50 to-slate-900 border-cyan-500/60 shadow-md'
                    : 'bg-slate-950/40 hover:bg-slate-800/60 border-slate-800/80 text-slate-300'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-xs text-white">
                    {drug.genericName}
                  </span>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-800 text-cyan-400">
                    {drug.category}
                  </span>
                </div>
                <div className="text-[11px] text-cyan-300/80 mb-0.5">
                  {drug.arabicName}
                </div>
                <div className="text-[10px] text-slate-400 truncate">
                  Trade: {drug.brandNames.join(', ')}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Right Column: Interactive Dosage Calculator & Drug Monograph */}
      <div className="lg:col-span-8 flex flex-col gap-6">
        
        {/* Live Dosage Calculator Widget */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-cyan-500/30 rounded-2xl p-5 shadow-xl">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
              <Calculator size={18} />
              <span>{t.calcHeader}</span>
            </div>
            <span className="text-xs font-semibold px-2.5 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-lg">
              {selectedDrug.genericName}
            </span>
          </div>

          {/* Calculator Inputs Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-4">
            {/* Species Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400">
                {t.speciesLabel}
              </label>
              <select
                value={patientSpecies}
                onChange={(e) => setPatientSpecies(e.target.value as AnimalSpecies)}
                className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs text-slate-200 focus:outline-none focus:border-cyan-500"
              >
                {Object.values(ANIMALS_DATA).map((animal) => (
                  <option key={animal.id} value={animal.id}>
                    {animal.name[language]}
                  </option>
                ))}
              </select>
            </div>

            {/* Patient Weight */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400">
                {t.weightLabel}
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="0.1"
                  step="0.5"
                  value={weightKg}
                  onChange={(e) => setWeightKg(Math.max(0.1, parseFloat(e.target.value) || 0))}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-cyan-400 font-bold focus:outline-none focus:border-cyan-500"
                />
                <span className="absolute right-3 rtl:left-3 top-2.5 text-xs text-slate-500">
                  kg
                </span>
              </div>
            </div>

            {/* Drug Concentration */}
            <div className="space-y-1.5">
              <label className="text-xs font-medium text-slate-400">
                {t.concentrationLabel}
              </label>
              <div className="relative">
                <input
                  type="number"
                  min="1"
                  value={drugConcentrationMgPerMl}
                  onChange={(e) => setDrugConcentrationMgPerMl(Math.max(1, parseFloat(e.target.value) || 1))}
                  className="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-xs font-mono text-cyan-400 font-bold focus:outline-none focus:border-cyan-500"
                />
                <span className="absolute right-3 rtl:left-3 top-2.5 text-xs text-slate-500">
                  mg/mL
                </span>
              </div>
            </div>
          </div>

          {/* Contraindication Warning Banner if applicable */}
          {speciesDosage?.isContraindicated ? (
            <div className="p-4 rounded-xl bg-rose-950/60 border border-rose-500/60 text-rose-200 flex items-start gap-3 animate-pulse">
              <ShieldAlert size={22} className="text-rose-400 shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-bold text-rose-300">
                  {t.contraindicatedWarning}
                </h4>
                <p className="text-xs text-rose-200/90 mt-1 leading-relaxed">
                  {speciesDosage.contraindicationReason?.[language]}
                </p>
              </div>
            </div>
          ) : (
            /* Computed Dose Output Cards */
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-slate-950/70 p-4 rounded-xl border border-slate-800">
              <div className="flex flex-col gap-1">
                <span className="text-xs text-slate-400 font-medium">
                  {t.doseOutputLabel}
                </span>
                <span className="text-xl sm:text-2xl font-black font-mono text-emerald-400">
                  {calculatedDoseMinMg === calculatedDoseMaxMg
                    ? `${calculatedDoseMinMg.toFixed(1)} mg`
                    : `${calculatedDoseMinMg.toFixed(1)} - ${calculatedDoseMaxMg.toFixed(1)} mg`}
                </span>
                <span className="text-[11px] text-slate-400">
                  Rate: {speciesDosage?.doseMgPerKgMin} - {speciesDosage?.doseMgPerKgMax} mg/kg
                </span>
              </div>

              <div className="flex flex-col gap-1 sm:border-l sm:rtl:border-r border-slate-800 sm:pl-4 sm:rtl:pr-4">
                <span className="text-xs text-slate-400 font-medium">
                  {t.volumeOutputLabel}
                </span>
                <span className="text-xl sm:text-2xl font-black font-mono text-cyan-400">
                  {volumeMinMl === volumeMaxMl
                    ? `${volumeMinMl.toFixed(2)} mL`
                    : `${volumeMinMl.toFixed(2)} - ${volumeMaxMl.toFixed(2)} mL`}
                </span>
                <span className="text-[11px] text-slate-400">
                  Routes: {speciesDosage?.routes.join(', ')} • {speciesDosage?.frequency[language]}
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Detailed Drug Monograph */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 space-y-4 backdrop-blur-md">
          <div className="flex items-center gap-2 text-cyan-300 font-bold text-sm">
            <Info size={16} />
            <span>{selectedDrug.genericName} ({selectedDrug.arabicName}) - Monograph</span>
          </div>

          {/* Mechanism of Action */}
          <div className="space-y-1">
            <span className="text-xs font-semibold text-cyan-400 block">
              {t.mechanism}:
            </span>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/50 p-3 rounded-xl border border-slate-800/80">
              {selectedDrug.mechanismOfAction[language]}
            </p>
          </div>

          {/* Indications & Contraindications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5 bg-slate-950/40 p-3 rounded-xl border border-slate-800/80">
              <span className="text-xs font-semibold text-emerald-400 flex items-center gap-1.5">
                <CheckCircle2 size={14} />
                {t.indications}
              </span>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                {selectedDrug.indications.map((ind, i) => (
                  <li key={i}>{ind[language]}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-1.5 bg-slate-950/40 p-3 rounded-xl border border-slate-800/80">
              <span className="text-xs font-semibold text-rose-400 flex items-center gap-1.5">
                <AlertOctagon size={14} />
                {t.contraindications}
              </span>
              <ul className="text-xs text-slate-300 space-y-1 list-disc list-inside">
                {selectedDrug.contraindications.map((ci, i) => (
                  <li key={i}>{ci[language]}</li>
                ))}
              </ul>
            </div>
          </div>

          {/* Clinical Pearl */}
          <div className="p-3.5 rounded-xl bg-amber-950/30 border border-amber-600/30 text-amber-200 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-amber-400 text-xs">
              <Sparkles size={14} />
              <span>{t.clinicalPearl}</span>
            </div>
            <p className="text-xs leading-relaxed">
              {selectedDrug.clinicalPearls[language]}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
