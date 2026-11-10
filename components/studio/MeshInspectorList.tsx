'use client';

import React, { useState } from 'react';
import { 
  CheckCircle2, 
  AlertCircle, 
  Layers, 
  Search, 
  Box, 
  Cpu, 
  Crosshair, 
  ArrowRight,
  Filter
} from 'lucide-react';
import { ParsedMeshInfo } from './StudioViewer';

interface MeshInspectorListProps {
  meshes: ParsedMeshInfo[];
  selectedMeshName: string | null;
  onSelectMesh: (mesh: ParsedMeshInfo) => void;
  linkedMeshIds: Record<string, { id: string; nameEn: string; nameAr: string; latinName: string }>;
  isRtl?: boolean;
}

export function MeshInspectorList({
  meshes,
  selectedMeshName,
  onSelectMesh,
  linkedMeshIds,
  isRtl = false,
}: MeshInspectorListProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterMode, setFilterMode] = useState<'all' | 'linked' | 'unlinked'>('all');

  const filteredMeshes = meshes.filter((m) => {
    const matchesSearch =
      m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      m.organId.toLowerCase().includes(searchTerm.toLowerCase());

    const isLinked = Boolean(linkedMeshIds[m.organId] || linkedMeshIds[m.name]);
    if (filterMode === 'linked') return matchesSearch && isLinked;
    if (filterMode === 'unlinked') return matchesSearch && !isLinked;
    return matchesSearch;
  });

  const linkedCount = meshes.filter((m) => linkedMeshIds[m.organId] || linkedMeshIds[m.name]).length;
  const unlinkedCount = meshes.length - linkedCount;

  return (
    <div className="flex flex-col h-full bg-slate-900/60 rounded-2xl border border-slate-800 p-4 backdrop-blur-md">
      {/* Header with Stats */}
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
            <Layers className="h-4 w-4" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-white flex items-center gap-2">
              <span>{isRtl ? 'قائمة المجسمات الفرعية المكتشفة' : 'Detected Scene Meshes'}</span>
              <span className="text-xs px-2 py-0.5 rounded-full bg-slate-800 text-slate-300 font-mono">
                {meshes.length}
              </span>
            </h2>
            <p className="text-[11px] text-slate-400">
              {isRtl
                ? 'فحص هيكلية شجرة المشهد وعناصر الـ Mesh'
                : 'Scene graph traversal & geometry analytics'}
            </p>
          </div>
        </div>

        {/* Linked / Unlinked Summary Pills */}
        <div className="flex items-center gap-1.5 text-[11px] font-mono">
          <button
            onClick={() => setFilterMode('linked')}
            className={`flex items-center gap-1 px-2 py-1 rounded-md transition-colors ${
              filterMode === 'linked'
                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                : 'bg-emerald-950/40 text-emerald-400 hover:bg-emerald-900/40'
            }`}
          >
            <CheckCircle2 className="h-3 w-3" />
            <span>{linkedCount} {isRtl ? 'مرتبط' : 'Linked'}</span>
          </button>
          <button
            onClick={() => setFilterMode('unlinked')}
            className={`flex items-center gap-1 px-2 py-1 rounded-md transition-colors ${
              filterMode === 'unlinked'
                ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                : 'bg-amber-950/40 text-amber-400 hover:bg-amber-900/40'
            }`}
          >
            <AlertCircle className="h-3 w-3" />
            <span>{unlinkedCount} {isRtl ? 'غير مرتبط' : 'Unlinked'}</span>
          </button>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="mt-3 flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-slate-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder={isRtl ? 'بحث باسم المجسم أو المعرف...' : 'Search mesh name or organId...'}
            className="w-full pl-9 pr-3 py-1.5 text-xs rounded-xl bg-slate-950/80 border border-slate-800 text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
          />
        </div>

        {filterMode !== 'all' && (
          <button
            onClick={() => setFilterMode('all')}
            className="px-2.5 py-1.5 text-xs rounded-xl bg-slate-800 text-slate-300 hover:text-white transition-colors"
          >
            Clear Filter
          </button>
        )}
      </div>

      {/* Mesh Items Scrollable Container */}
      <div className="mt-3 flex-1 overflow-y-auto space-y-2 pr-1 scrollbar-thin scrollbar-thumb-slate-800 max-h-[460px]">
        {filteredMeshes.map((mesh) => {
          const isSelected = selectedMeshName === mesh.name || selectedMeshName === mesh.organId;
          const linkedData = linkedMeshIds[mesh.organId] || linkedMeshIds[mesh.name];
          const isLinked = Boolean(linkedData);

          return (
            <div
              key={mesh.name}
              onClick={() => onSelectMesh(mesh)}
              className={`p-3 rounded-xl cursor-pointer border transition-all duration-200 ${
                isSelected
                  ? 'bg-cyan-500/15 border-cyan-400/60 shadow-lg shadow-cyan-500/10'
                  : 'bg-slate-950/60 border-slate-800/80 hover:bg-slate-800/60 hover:border-slate-700'
              }`}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="flex items-start gap-2.5 min-w-0">
                  <div
                    className="w-3 h-3 rounded-full mt-1 shrink-0 ring-1 ring-slate-700"
                    style={{ backgroundColor: mesh.color || '#38bdf8' }}
                  />
                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-slate-100 truncate">
                        {mesh.name}
                      </span>
                      {isSelected && (
                        <span className="px-1.5 py-0.2 rounded text-[9px] bg-cyan-400 text-slate-950 font-bold font-mono">
                          ACTIVE
                        </span>
                      )}
                    </div>
                    {mesh.organId !== mesh.name && (
                      <div className="text-[10px] text-slate-400 font-mono">
                        organId: {mesh.organId}
                      </div>
                    )}
                  </div>
                </div>

                {/* Status Badge */}
                <div>
                  {isLinked ? (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                      <CheckCircle2 className="h-3 w-3" />
                      <span>Linked</span>
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-amber-500/10 text-amber-400 border border-amber-500/30">
                      <AlertCircle className="h-3 w-3" />
                      <span>Unlinked</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Linked Record Details Preview */}
              {isLinked && linkedData && (
                <div className="mt-2 p-2 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-[11px] text-emerald-300 flex items-center justify-between">
                  <span className="font-medium truncate">{linkedData.nameEn} ({linkedData.nameAr})</span>
                  <span className="text-[10px] text-emerald-400/80 font-mono italic truncate ml-2">
                    {linkedData.latinName}
                  </span>
                </div>
              )}

              {/* Geometry Metrics */}
              <div className="mt-2.5 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <div className="flex items-center gap-3">
                  <span title="Vertex Count">
                    <strong className="text-slate-300">{mesh.vertexCount.toLocaleString()}</strong> v
                  </span>
                  <span title="Triangle Count">
                    <strong className="text-slate-300">{mesh.faceCount.toLocaleString()}</strong> tri
                  </span>
                </div>

                <div className="text-slate-400 truncate" title="Bounding Box Center">
                  Center: [{mesh.center[0]}, {mesh.center[1]}, {mesh.center[2]}]
                </div>
              </div>
            </div>
          );
        })}

        {filteredMeshes.length === 0 && (
          <div className="p-8 text-center text-xs text-slate-500 border border-dashed border-slate-800 rounded-xl">
            {isRtl
              ? 'لم يتم العثور على مجسمات مطابقة للبحث'
              : 'No meshes found matching the filter criteria'}
          </div>
        )}
      </div>
    </div>
  );
}
