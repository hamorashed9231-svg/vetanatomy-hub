'use client';

import React, { useState, useEffect, useCallback, useTransition } from 'react';
import dynamic from 'next/dynamic';
import { useParams, useRouter } from 'next/navigation';
import { 
  Sparkles, 
  UploadCloud, 
  Layers, 
  Database, 
  FileBox, 
  Compass, 
  RotateCcw, 
  ArrowLeft,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { MeshInspectorList } from '@/components/studio/MeshInspectorList';
import { OrganEditorForm } from '@/components/studio/OrganEditorForm';
import { ParsedMeshInfo, StudioViewerProps } from '@/components/studio/StudioViewer';
import { getAllLinkedMeshIds, getStudioMetadata } from '@/app/actions/studio';
import { SpeciesId, AnatomicalSystemId } from '@/types/anatomy';

// Dynamically import StudioViewer to bypass SSR for Three.js WebGL
const StudioViewer = dynamic<StudioViewerProps>(
  () => import('@/components/studio/StudioViewer').then((mod) => mod.StudioViewer),
  {
    ssr: false,
    loading: () => (
      <div className="w-full h-[620px] rounded-2xl bg-slate-950 border border-slate-800 flex flex-col items-center justify-center text-slate-500 font-mono text-xs gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-cyan-500 border-t-transparent animate-spin" />
        <span>Loading 3D WebGL Studio Engine...</span>
      </div>
    ),
  }
);

export default function StudioPage() {
  const params = useParams();
  const router = useRouter();
  const locale = (params?.locale as string) || 'en';
  const isRtl = locale === 'ar';

  // Selection states
  const [selectedSpecies, setSelectedSpecies] = useState<SpeciesId>('equine');
  const [selectedSystem, setSelectedSystem] = useState<AnatomicalSystemId>('cardiovascular');
  const [customModelUrl, setCustomModelUrl] = useState<string | null>(null);
  const [uploadedFileName, setUploadedFileName] = useState<string | null>(null);

  // Inspector and sync states
  const [parsedMeshes, setParsedMeshes] = useState<ParsedMeshInfo[]>([]);
  const [selectedMesh, setSelectedMesh] = useState<ParsedMeshInfo | null>(null);
  const [linkedMeshIds, setLinkedMeshIds] = useState<Record<string, any>>({});
  const [speciesList, setSpeciesList] = useState<any[]>([]);
  const [systemsList, setSystemsList] = useState<any[]>([]);
  const [isPending, startTransition] = useTransition();

  // Active Model URL
  const activeModelUrl = customModelUrl || `/models/${selectedSpecies}/${selectedSystem}.glb`;

  // Load Neon Database metadata on mount
  const refreshDbStatus = useCallback(async () => {
    try {
      const [linked, meta] = await Promise.all([
        getAllLinkedMeshIds(),
        getStudioMetadata(),
      ]);
      setLinkedMeshIds(linked);
      if (meta.species.length > 0) setSpeciesList(meta.species);
      if (meta.systems.length > 0) setSystemsList(meta.systems);
    } catch (e) {
      console.error('Failed to load Studio database metadata:', e);
    }
  }, []);

  useEffect(() => {
    refreshDbStatus();
  }, [refreshDbStatus]);

  // Handle local GLB upload
  const handleFileUpload = (file: File) => {
    const objectUrl = URL.createObjectURL(file);
    setCustomModelUrl(objectUrl);
    setUploadedFileName(file.name);
    setSelectedMesh(null);
  };

  // Handle Camera Capture Callback
  const handleCaptureCoordinates = (coords: {
    position: [number, number, number];
    target: [number, number, number];
  }) => {
    if (selectedMesh) {
      // Trigger update on form
      setSelectedMesh({
        ...selectedMesh,
        center: coords.target,
      });
    }
  };

  return (
    <div
      dir={isRtl ? 'rtl' : 'ltr'}
      className="min-h-screen bg-slate-950 text-slate-100 flex flex-col"
    >
      {/* Top Studio Navigation Bar */}
      <div className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/90 backdrop-blur-md px-6 py-3.5 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button
            onClick={() => router.push(`/${locale}`)}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors"
            title="Return to Hub"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>

          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-slate-950 font-bold shadow-md shadow-cyan-500/20">
              <Compass className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-base font-bold text-white flex items-center gap-2">
                <span>{isRtl ? 'استوديو التشريح وفاحص نماذج Blender GLB' : '3D Anatomy Studio & GLB Inspector'}</span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Phase 2 Tooling
                </span>
              </h1>
              <p className="text-xs text-slate-400">
                {isRtl
                  ? 'استيراد نماذج GLB، فحص شجرة المشهد، التقاط إحداثيات الكاميرا، والمزامنة مع Neon DB'
                  : 'Import Blender GLBs, parse scene graph, pick focus coordinates & sync with Neon DB'}
              </p>
            </div>
          </div>
        </div>

        {/* Model Selector & Upload Controls */}
        <div className="flex items-center gap-2">
          {/* File Upload Button */}
          <label className="flex items-center gap-2 px-3.5 py-1.5 rounded-xl border border-dashed border-cyan-500/50 bg-cyan-500/5 hover:bg-cyan-500/10 text-xs text-cyan-300 font-medium cursor-pointer transition-colors shadow-sm">
            <UploadCloud className="h-4 w-4" />
            <span>{uploadedFileName ? uploadedFileName : (isRtl ? 'رفع ملف GLB محلي' : 'Import Local .glb')}</span>
            <input
              type="file"
              accept=".glb,.gltf"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files.length > 0) {
                  handleFileUpload(e.target.files[0]);
                }
              }}
            />
          </label>

          {/* Reset Custom Upload */}
          {customModelUrl && (
            <button
              onClick={() => {
                setCustomModelUrl(null);
                setUploadedFileName(null);
                setSelectedMesh(null);
              }}
              className="px-2.5 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-400 hover:text-white"
              title="Reset to default models"
            >
              Reset
            </button>
          )}

          {/* Species Dropdown */}
          <select
            disabled={Boolean(customModelUrl)}
            value={selectedSpecies}
            onChange={(e) => {
              setSelectedSpecies(e.target.value as SpeciesId);
              setSelectedMesh(null);
            }}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 disabled:opacity-50"
          >
            <option value="equine">Equine (Horse)</option>
            <option value="bovine">Bovine (Cattle)</option>
            <option value="canine">Canine (Dog)</option>
            <option value="feline">Feline (Cat)</option>
            <option value="ovine_caprine">Ovine/Caprine (Sheep/Goat)</option>
            <option value="avian">Avian (Bird)</option>
            <option value="camelid">Camelids (Camel)</option>
          </select>

          {/* System Dropdown */}
          <select
            disabled={Boolean(customModelUrl)}
            value={selectedSystem}
            onChange={(e) => {
              setSelectedSystem(e.target.value as AnatomicalSystemId);
              setSelectedMesh(null);
            }}
            className="px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-slate-200 focus:outline-none focus:border-cyan-500 disabled:opacity-50"
          >
            <option value="cardiovascular">Cardiovascular</option>
            <option value="digestive">Digestive</option>
            <option value="respiratory">Respiratory</option>
            <option value="nervous">Nervous</option>
            <option value="urogenital">Urogenital</option>
            <option value="skeletal">Skeletal</option>
            <option value="muscular">Muscular</option>
          </select>
        </div>
      </div>

      {/* Main Studio Workspace */}
      <main className="flex-1 p-6 space-y-6 max-w-[1720px] mx-auto w-full">
        {/* Top Grid: 3D Viewport on Left (2/3) + Mesh Inspector List on Right (1/3) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <StudioViewer
              modelUrl={activeModelUrl}
              selectedMeshName={selectedMesh?.name || null}
              onSelectMesh={(mesh: ParsedMeshInfo) => setSelectedMesh(mesh)}
              onMeshesParsed={(meshes: ParsedMeshInfo[]) => setParsedMeshes(meshes)}
              onCaptureCoordinates={handleCaptureCoordinates}
              linkedMeshIds={linkedMeshIds}
              onFileUpload={handleFileUpload}
            />
          </div>

          <div className="lg:col-span-1 h-[620px]">
            <MeshInspectorList
              meshes={parsedMeshes}
              selectedMeshName={selectedMesh?.name || null}
              onSelectMesh={(mesh: ParsedMeshInfo) => setSelectedMesh(mesh)}
              linkedMeshIds={linkedMeshIds}
              isRtl={isRtl}
            />
          </div>
        </div>

        {/* Bottom Section: Direct Neon Database Sync & Organ Editor Form */}
        <div>
          <OrganEditorForm
            selectedMesh={selectedMesh}
            speciesList={speciesList}
            systemsList={systemsList}
            defaultSpeciesSlug={selectedSpecies}
            defaultSystemSlug={selectedSystem}
            onOrganSaved={() => refreshDbStatus()}
            isRtl={isRtl}
          />
        </div>
      </main>
    </div>
  );
}
