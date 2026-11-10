'use client';

import { useState } from 'react';
import { 
  FileText, 
  Activity, 
  AlertTriangle, 
  CheckCircle, 
  Stethoscope, 
  TestTube, 
  ChevronRight,
  ShieldCheck,
  Sparkles,
  HeartCrack
} from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { CLINICAL_CASES } from '../../data/casesData';

export function ClinicalCasesModule() {
  const language = useAnatomyStore((state) => state.language);
  const isRtl = useAnatomyStore((state) => state.isRtl);
  const [selectedCaseId, setSelectedCaseId] = useState(CLINICAL_CASES[0].id);
  const [completedSteps, setCompletedSteps] = useState<Record<string, boolean>>({});

  const activeCase = CLINICAL_CASES.find((c) => c.id === selectedCaseId) || CLINICAL_CASES[0];

  const toggleStep = (stepKey: string) => {
    setCompletedSteps((prev) => ({
      ...prev,
      [stepKey]: !prev[stepKey],
    }));
  };

  const t = {
    title: language === 'ar' ? 'مكتبة الحالات السريرية والمحاكاة التشخيصية' : 'Clinical Cases & Diagnostic Simulation Library',
    historyTitle: language === 'ar' ? 'السيرة المرضية والشكوى الرئيسية' : 'History & Presenting Complaint',
    vitalsTitle: language === 'ar' ? 'العلامات الحيوية مقارنة بالمعدل الطبيعي' : 'Vital Signs vs Reference Ranges',
    labsTitle: language === 'ar' ? 'نتائج الفحوصات المخبرية وتفسيرها' : 'Laboratory Findings & Pathophysiological Significance',
    dxTitle: language === 'ar' ? 'التشخيص النهائي ومسار العلاج' : 'Definitive Diagnosis & Intervention Plan',
    pathophysiology: language === 'ar' ? 'الفسيولوجيا المرضية' : 'Underlying Pathophysiology',
    immediateCare: language === 'ar' ? 'خطة الطوارئ الفورية' : 'Immediate Resuscitation Plan',
    medicalTx: language === 'ar' ? 'العلاج الدوائي' : 'Medical Therapy',
    surgicalTx: language === 'ar' ? 'التدخل الجراحي' : 'Surgical Intervention',
    prognosis: language === 'ar' ? 'الإنذار المتوقع' : 'Prognosis',
    pearl: language === 'ar' ? 'لؤلؤة سريرية لا تنساها' : 'Crucial Clinical Pearl',
    stepCompleted: language === 'ar' ? 'تم التنفيذ' : 'Completed',
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 p-4 lg:p-8">
      {/* Left Column: Case Selector & Signalment Card */}
      <div className="lg:col-span-4 flex flex-col gap-4">
        {/* Case Selector Card */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 backdrop-blur-md space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <FileText size={18} />
            <span>{t.title}</span>
          </div>

          <div className="space-y-2">
            {CLINICAL_CASES.map((c) => {
              const isSelected = c.id === activeCase.id;
              return (
                <button
                  key={c.id}
                  onClick={() => {
                    setSelectedCaseId(c.id);
                    setCompletedSteps({});
                  }}
                  className={`w-full text-left rtl:text-right p-3 rounded-xl border transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-950/60 to-slate-900 border-cyan-500/60 shadow-lg'
                      : 'bg-slate-950/40 hover:bg-slate-800/60 border-slate-800/80 text-slate-300'
                  }`}
                >
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-slate-800 text-cyan-400 font-bold">
                    {c.species}
                  </span>
                  <h3 className="font-bold text-xs text-white mt-1.5 line-clamp-2">
                    {c.title[language]}
                  </h3>
                  <div className="text-[11px] text-slate-400 mt-1">
                    {c.breed[language]} • {c.age} • {c.weightKg} kg
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Patient Signalment Quick Card */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-4 backdrop-blur-md space-y-3 text-xs">
          <h4 className="font-bold text-white flex items-center gap-2 border-b border-slate-800 pb-2">
            <Stethoscope size={15} className="text-teal-400" />
            <span>Patient Signalment</span>
          </h4>
          <div className="space-y-1.5 text-slate-300">
            <div className="flex justify-between">
              <span className="text-slate-400">Breed:</span>
              <span className="font-medium text-white">{activeCase.breed[language]}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Age & Weight:</span>
              <span className="font-medium text-white">{activeCase.age} • {activeCase.weightKg} kg</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">Sex:</span>
              <span className="font-medium text-white">{activeCase.sex[language]}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400">System Involved:</span>
              <span className="font-medium text-cyan-400 capitalize">{activeCase.affectedSystem}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Column: Case Deep Dive */}
      <div className="lg:col-span-8 flex flex-col gap-6">
        
        {/* History & Presenting Complaint */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 backdrop-blur-md space-y-3">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <Activity size={17} />
            <span>{t.historyTitle}</span>
          </div>

          <div className="bg-slate-950/60 border border-slate-800 p-3.5 rounded-xl text-xs space-y-2">
            <div className="text-rose-300 font-medium">
              <strong className="text-slate-200">Complaint: </strong>
              {activeCase.presentingComplaint[language]}
            </div>
            <div className="text-slate-300 leading-relaxed border-t border-slate-800/80 pt-2">
              <strong className="text-slate-200">History: </strong>
              {activeCase.history[language]}
            </div>
          </div>
        </div>

        {/* Vital Signs Table */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 backdrop-blur-md space-y-3">
          <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
            <Stethoscope size={17} />
            <span>{t.vitalsTitle}</span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left rtl:text-right border-collapse">
              <thead>
                <tr className="border-b border-slate-800 text-slate-400">
                  <th className="py-2 px-3">Parameter</th>
                  <th className="py-2 px-3">Measured</th>
                  <th className="py-2 px-3">Reference Range</th>
                  <th className="py-2 px-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/60 font-mono">
                {activeCase.vitals.map((vital, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/30">
                    <td className="py-2.5 px-3 font-sans font-medium text-slate-200">
                      {vital.name[language]}
                    </td>
                    <td className="py-2.5 px-3 font-bold text-white">
                      {vital.value} {vital.unit}
                    </td>
                    <td className="py-2.5 px-3 text-slate-400">
                      {vital.referenceRange}
                    </td>
                    <td className="py-2.5 px-3">
                      <span
                        className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                          vital.status === 'critical'
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30 animate-pulse'
                            : vital.status === 'elevated' || vital.status === 'decreased'
                            ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                            : 'bg-emerald-500/20 text-emerald-300'
                        }`}
                      >
                        {vital.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Laboratory Findings */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 backdrop-blur-md space-y-3">
          <div className="flex items-center gap-2 text-purple-400 font-bold text-sm">
            <TestTube size={17} />
            <span>{t.labsTitle}</span>
          </div>

          <div className="space-y-3">
            {activeCase.labTests.map((lab, idx) => (
              <div
                key={idx}
                className="bg-slate-950/60 border border-slate-800 p-3.5 rounded-xl space-y-1.5 text-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-bold text-white">
                    {lab.parameter} ({lab.arabicParameter})
                  </span>
                  <div className="flex items-center gap-2 font-mono">
                    <span className="font-bold text-rose-400 text-sm">
                      {lab.measured} {lab.unit}
                    </span>
                    <span className="text-[11px] text-slate-500">
                      (Ref: {lab.reference})
                    </span>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed pt-1 border-t border-slate-800/80">
                  {lab.significance[language]}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Diagnosis & Interactive Treatment Pathway */}
        <div className="bg-slate-900/70 border border-slate-800 rounded-2xl p-5 backdrop-blur-md space-y-4">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-sm">
            <ShieldCheck size={18} />
            <span>{t.dxTitle}</span>
          </div>

          {/* Definitive Diagnosis Banner */}
          <div className="p-4 rounded-xl bg-cyan-950/50 border border-cyan-500/40 text-cyan-200">
            <span className="text-[11px] uppercase tracking-wider font-mono text-cyan-400 block mb-1">
              Definitive Diagnosis:
            </span>
            <h3 className="font-bold text-sm text-white">
              {activeCase.definitiveDiagnosis[language]}
            </h3>
          </div>

          {/* Underlying Pathophysiology */}
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-300 block">
              {t.pathophysiology}:
            </span>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950/40 p-3 rounded-xl border border-slate-800">
              {activeCase.pathophysiology[language]}
            </p>
          </div>

          {/* Treatment Action Checklist */}
          <div className="space-y-3">
            <span className="text-xs font-semibold text-emerald-400 block">
              {t.immediateCare} (Interactive Checklist):
            </span>
            <div className="space-y-2">
              {activeCase.treatmentPlan.immediate.map((item, idx) => {
                const stepKey = `${activeCase.id}_imm_${idx}`;
                const isDone = !!completedSteps[stepKey];
                return (
                  <button
                    key={idx}
                    onClick={() => toggleStep(stepKey)}
                    className={`w-full text-left rtl:text-right p-3 rounded-xl border flex items-start gap-3 transition-all text-xs ${
                      isDone
                        ? 'bg-emerald-950/40 border-emerald-500/60 text-emerald-200'
                        : 'bg-slate-950/50 hover:bg-slate-800/50 border-slate-800 text-slate-300'
                    }`}
                  >
                    <CheckCircle
                      size={16}
                      className={`shrink-0 mt-0.5 ${
                        isDone ? 'text-emerald-400' : 'text-slate-600'
                      }`}
                    />
                    <div className="flex-1 leading-relaxed">
                      {item[language]}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Clinical Pearl Banner */}
          <div className="p-4 rounded-xl bg-gradient-to-r from-amber-950/40 to-slate-950 border border-amber-500/40 text-amber-200 space-y-1">
            <div className="flex items-center gap-1.5 font-bold text-amber-400 text-xs">
              <Sparkles size={15} />
              <span>{t.pearl}</span>
            </div>
            <p className="text-xs leading-relaxed">
              {activeCase.clinicalPearls[language]}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}
