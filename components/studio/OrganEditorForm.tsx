'use client';

import React, { useState, useEffect } from 'react';
import { 
  Database, 
  Save, 
  CheckCircle2, 
  AlertCircle, 
  Loader2, 
  Globe, 
  Stethoscope, 
  Activity, 
  Cpu, 
  Layers, 
  Compass, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';
import { upsertOrganRecord, OrganUpsertInput, getOrganDetailsForStudio } from '../../app/actions/studio';
import { ParsedMeshInfo } from './StudioViewer';

interface OrganEditorFormProps {
  selectedMesh: ParsedMeshInfo | null;
  speciesList: Array<{ id: string; slug: string; nameEn: string; nameAr: string }>;
  systemsList: Array<{ id: string; slug: string; nameEn: string; nameAr: string }>;
  defaultSpeciesSlug?: string;
  defaultSystemSlug?: string;
  onOrganSaved?: (organ: any) => void;
  isRtl?: boolean;
}

export function OrganEditorForm({
  selectedMesh,
  speciesList,
  systemsList,
  defaultSpeciesSlug = 'equine',
  defaultSystemSlug = 'cardiovascular',
  onOrganSaved,
  isRtl = false,
}: OrganEditorFormProps) {
  const [activeTab, setActiveTab] = useState<'bilingual' | 'coordinates'>('bilingual');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingExisting, setIsLoadingExisting] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  // Form State
  const [formData, setFormData] = useState<OrganUpsertInput>({
    meshId: '',
    speciesSlug: defaultSpeciesSlug,
    systemSlug: defaultSystemSlug,
    nameEn: '',
    nameAr: '',
    latinName: '',
    descriptionEn: '',
    descriptionAr: '',
    bloodSupplyEn: '',
    bloodSupplyAr: '',
    innervationEn: '',
    innervationAr: '',
    clinicalPearlsEn: '',
    clinicalPearlsAr: '',
    focusCoordinates: {
      position: [2.8, 1.8, 3.2],
      target: [0, 0.4, 0],
    },
  });

  // When selected mesh changes, pre-fill meshId or fetch existing record from DB
  useEffect(() => {
    if (!selectedMesh) return;
    const currentMesh = selectedMesh;
    const meshId = currentMesh.organId || currentMesh.name;
    setStatusMessage(null);

    async function loadData() {
      setIsLoadingExisting(true);
      try {
        const existing = await getOrganDetailsForStudio(meshId);
        if (existing) {
          setFormData({
            meshId: existing.meshId,
            speciesSlug: existing.speciesSlug,
            systemSlug: existing.systemSlug,
            nameEn: existing.nameEn,
            nameAr: existing.nameAr,
            latinName: existing.latinName,
            descriptionEn: existing.descriptionEn,
            descriptionAr: existing.descriptionAr,
            bloodSupplyEn: existing.bloodSupplyEn,
            bloodSupplyAr: existing.bloodSupplyAr,
            innervationEn: existing.innervationEn,
            innervationAr: existing.innervationAr,
            clinicalPearlsEn: existing.clinicalPearlsEn,
            clinicalPearlsAr: existing.clinicalPearlsAr,
            focusCoordinates: existing.focusCoordinates || {
              position: [2.8, 1.8, 3.2],
              target: [0, 0.4, 0],
            },
          });
        } else {
          // Unlinked mesh: populate sensible defaults
          setFormData((prev) => ({
            ...prev,
            meshId,
            speciesSlug: defaultSpeciesSlug,
            systemSlug: defaultSystemSlug,
            nameEn: formatReadableName(currentMesh.name),
            nameAr: '',
            latinName: '',
            descriptionEn: '',
            descriptionAr: '',
            bloodSupplyEn: '',
            bloodSupplyAr: '',
            innervationEn: '',
            innervationAr: '',
            clinicalPearlsEn: '',
            clinicalPearlsAr: '',
            focusCoordinates: {
              position: [
                parseFloat((currentMesh.center[0] + 1.2).toFixed(2)),
                parseFloat((currentMesh.center[1] + 0.8).toFixed(2)),
                parseFloat((currentMesh.center[2] + 1.2).toFixed(2)),
              ],
              target: currentMesh.center,
            },
          }));
        }
      } catch (err) {
        console.error('Error fetching existing organ:', err);
      } finally {
        setIsLoadingExisting(false);
      }
    }

    loadData();
  }, [selectedMesh, defaultSpeciesSlug, defaultSystemSlug]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.meshId) {
      setStatusMessage({ type: 'error', text: 'Please select a mesh first.' });
      return;
    }

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      const res = await upsertOrganRecord(formData);
      if (res.success) {
        setStatusMessage({
          type: 'success',
          text: `Successfully synced ${formData.meshId} to Neon PostgreSQL!`,
        });
        if (onOrganSaved) {
          onOrganSaved(res.organ);
        }
      } else {
        setStatusMessage({
          type: 'error',
          text: res.error || 'Failed to sync to Neon database.',
        });
      }
    } catch (err: any) {
      setStatusMessage({
        type: 'error',
        text: err.message || 'Network error occurred during DB sync.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-5 backdrop-blur-md shadow-2xl">
      {/* Header */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Database className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-bold text-white flex items-center gap-2">
              <span>{isRtl ? 'محرر ومزامنة قاعدة بيانات Neon' : 'Neon Database Organ Editor'}</span>
              <span className="px-2 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-300 font-mono">
                PostgreSQL
              </span>
            </h2>
            <p className="text-xs text-slate-400">
              {isRtl
                ? 'تخصيص البيانات التشريحية واللآلئ السريرية وحفظها في قاعدة البيانات'
                : 'Bilingual schema metadata & clinical pearls synchronization'}
            </p>
          </div>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center p-1 rounded-xl bg-slate-950 border border-slate-800 text-xs">
          <button
            type="button"
            onClick={() => setActiveTab('bilingual')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'bilingual'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Bilingual Anatomy
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('coordinates')}
            className={`px-3 py-1.5 rounded-lg transition-colors ${
              activeTab === 'coordinates'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            3D Coordinates
          </button>
        </div>
      </div>

      {/* Loading Existing Indicator */}
      {isLoadingExisting && (
        <div className="py-2 px-3 my-3 rounded-lg bg-cyan-950/40 border border-cyan-500/30 flex items-center gap-2 text-xs text-cyan-300 animate-pulse">
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
          <span>Fetching current record from Neon PostgreSQL...</span>
        </div>
      )}

      {/* Status Messages */}
      {statusMessage && (
        <div
          className={`py-2.5 px-3.5 my-3 rounded-xl border flex items-center gap-2 text-xs font-medium ${
            statusMessage.type === 'success'
              ? 'bg-emerald-950/40 border-emerald-500/40 text-emerald-300'
              : 'bg-rose-950/40 border-rose-500/40 text-rose-300'
          }`}
        >
          {statusMessage.type === 'success' ? (
            <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
          ) : (
            <AlertCircle className="h-4 w-4 shrink-0 text-rose-400" />
          )}
          <span>{statusMessage.text}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="mt-4 space-y-4">
        {/* Row 1: Target MeshId, Species & System Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Target 3D Mesh Identifier (meshId)
            </label>
            <input
              type="text"
              required
              value={formData.meshId}
              onChange={(e) => setFormData({ ...formData, meshId: e.target.value })}
              placeholder="e.g. Mesh_Equine_Cor"
              className="w-full px-3 py-2 text-xs font-mono rounded-xl bg-slate-950 border border-slate-800 text-cyan-300 focus:outline-none focus:border-cyan-500"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Species (النوع / الحيوان)
            </label>
            <select
              value={formData.speciesSlug}
              onChange={(e) => setFormData({ ...formData, speciesSlug: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
            >
              {speciesList.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.nameEn} ({s.nameAr})
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1">
              Anatomical System (الجهاز التشريحي)
            </label>
            <select
              value={formData.systemSlug}
              onChange={(e) => setFormData({ ...formData, systemSlug: e.target.value })}
              className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
            >
              {systemsList.map((sys) => (
                <option key={sys.slug} value={sys.slug}>
                  {sys.nameEn} ({sys.nameAr})
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Latin NAV Nomenclature */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 mb-1">
            Official NAV Latin Name (Nomina Anatomica Veterinaria)
          </label>
          <input
            type="text"
            required
            value={formData.latinName}
            onChange={(e) => setFormData({ ...formData, latinName: e.target.value })}
            placeholder="e.g. Cor (Equus caballus) or Rumen (Bos taurus)"
            className="w-full px-3 py-2 text-xs font-serif italic rounded-xl bg-slate-950 border border-slate-800 text-amber-200 focus:outline-none focus:border-cyan-500"
          />
        </div>

        {activeTab === 'bilingual' ? (
          <>
            {/* Names (English & Arabic) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Globe className="h-3 w-3 text-cyan-400" />
                  <span>English Name</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.nameEn}
                  onChange={(e) => setFormData({ ...formData, nameEn: e.target.value })}
                  placeholder="e.g. Equine Heart"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div dir="rtl">
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Globe className="h-3 w-3 text-cyan-400" />
                  <span>الاسم باللغة العربية</span>
                </label>
                <input
                  type="text"
                  required
                  value={formData.nameAr}
                  onChange={(e) => setFormData({ ...formData, nameAr: e.target.value })}
                  placeholder="مثال: قلب الحصان"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Descriptions (English & Arabic) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  Morphological & Functional Overview (English)
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.descriptionEn}
                  onChange={(e) => setFormData({ ...formData, descriptionEn: e.target.value })}
                  placeholder="Physiological role, chambers, weight..."
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div dir="rtl">
                <label className="block text-xs font-semibold text-slate-300 mb-1">
                  الوصف المورفولوجي والوظيفي (عربي)
                </label>
                <textarea
                  rows={3}
                  required
                  value={formData.descriptionAr}
                  onChange={(e) => setFormData({ ...formData, descriptionAr: e.target.value })}
                  placeholder="الدور الفسيولوجي، الحجرات، والوزن..."
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Blood Supply */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Activity className="h-3 w-3 text-rose-400" />
                  <span>Blood Supply (Arterial & Venous)</span>
                </label>
                <input
                  type="text"
                  value={formData.bloodSupplyEn}
                  onChange={(e) => setFormData({ ...formData, bloodSupplyEn: e.target.value })}
                  placeholder="e.g. Left and right coronary arteries"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div dir="rtl">
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Activity className="h-3 w-3 text-rose-400" />
                  <span>التروية الدموية (شريانية ووريدية)</span>
                </label>
                <input
                  type="text"
                  value={formData.bloodSupplyAr}
                  onChange={(e) => setFormData({ ...formData, bloodSupplyAr: e.target.value })}
                  placeholder="مثال: الشريانان التاجيان الأيمن والأيسر"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Innervation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Cpu className="h-3 w-3 text-amber-400" />
                  <span>Innervation (Neural Pathways)</span>
                </label>
                <input
                  type="text"
                  value={formData.innervationEn}
                  onChange={(e) => setFormData({ ...formData, innervationEn: e.target.value })}
                  placeholder="e.g. Vagus nerve (CN X) and sympathetic plexus"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div dir="rtl">
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Cpu className="h-3 w-3 text-amber-400" />
                  <span>التعصيب (المسارات العصبية الذاتية)</span>
                </label>
                <input
                  type="text"
                  value={formData.innervationAr}
                  onChange={(e) => setFormData({ ...formData, innervationAr: e.target.value })}
                  placeholder="مثال: العصب المبهم والألياف الودية"
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>

            {/* Clinical Pearls */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Stethoscope className="h-3 w-3 text-cyan-400" />
                  <span>Clinical Pearls & Surgical Landmarks</span>
                </label>
                <textarea
                  rows={2}
                  value={formData.clinicalPearlsEn}
                  onChange={(e) => setFormData({ ...formData, clinicalPearlsEn: e.target.value })}
                  placeholder="Auscultation site, impaction risk, puncture danger..."
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>

              <div dir="rtl">
                <label className="block text-xs font-semibold text-slate-300 mb-1 flex items-center gap-1.5">
                  <Stethoscope className="h-3 w-3 text-cyan-400" />
                  <span>اللآلئ السريرية والمعالم الجراحية</span>
                </label>
                <textarea
                  rows={2}
                  value={formData.clinicalPearlsAr}
                  onChange={(e) => setFormData({ ...formData, clinicalPearlsAr: e.target.value })}
                  placeholder="موقع التسمع، خطر الانحشار، نقاط البزل..."
                  className="w-full px-3 py-2 text-xs rounded-xl bg-slate-950 border border-slate-800 text-slate-200 focus:outline-none focus:border-cyan-500"
                />
              </div>
            </div>
          </>
        ) : (
          /* Coordinates JSON Editor */
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-300 flex items-center gap-1.5">
                <Compass className="h-4 w-4 text-cyan-400" />
                <span>Camera Focus Coordinates JSON (position & target)</span>
              </span>
              <span className="text-[11px] text-slate-400 font-mono">
                Tip: Use "Capture Camera Focus" in 3D viewport to populate automatically
              </span>
            </div>

            <textarea
              rows={6}
              value={JSON.stringify(formData.focusCoordinates, null, 2)}
              onChange={(e) => {
                try {
                  const parsed = JSON.parse(e.target.value);
                  setFormData({ ...formData, focusCoordinates: parsed });
                } catch (err) {}
              }}
              className="w-full px-3 py-2 text-xs font-mono rounded-xl bg-slate-950 border border-slate-800 text-emerald-300 focus:outline-none focus:border-cyan-500"
            />
          </div>
        )}

        {/* Submit Button */}
        <div className="pt-3 border-t border-slate-800 flex items-center justify-end gap-3">
          <button
            type="submit"
            disabled={isSubmitting || !formData.meshId}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 disabled:opacity-50 text-white font-bold text-xs shadow-lg shadow-emerald-500/20 transition-all transform active:scale-95"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                <span>Syncing to Neon Database...</span>
              </>
            ) : (
              <>
                <Save className="h-4 w-4" />
                <span>Save & Sync to Neon PostgreSQL • حفظ ومزامنة</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}

// Utility to humanize camelCase or PascalCase mesh names
function formatReadableName(rawName: string): string {
  return rawName
    .replace(/^Mesh_/i, '')
    .replace(/_/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2');
}
