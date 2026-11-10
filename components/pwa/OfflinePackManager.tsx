'use client';

import React, { useState, useEffect } from 'react';
import { 
  Wifi, 
  WifiOff, 
  Download, 
  CheckCircle2, 
  Trash2, 
  HardDrive, 
  Layers, 
  Sparkles, 
  RefreshCw, 
  X,
  Database,
  ShieldCheck,
  Smartphone
} from 'lucide-react';
import { useAnatomyStore } from '../../store/useAnatomyStore';
import { SpeciesId } from '../../types/anatomy';
import { SPECIES_REGISTRY } from '../../data/anatomyRegistry';
import { 
  cacheEntireSpeciesPack, 
  getVaultStorageMetrics, 
  clearVaultCache 
} from '../../lib/offlineAssetCache';

interface OfflinePackManagerProps {
  isOpen: boolean;
  onClose: () => void;
}

export function OfflinePackManager({ isOpen, onClose }: OfflinePackManagerProps) {
  const locale = useAnatomyStore((state) => state.locale);
  const isRtl = locale === 'ar';

  const [isOnline, setIsOnline] = useState<boolean>(true);
  const [metrics, setMetrics] = useState<{
    totalBytes: number;
    modelCount: number;
    cachedSpecies: Record<string, number>;
  }>({ totalBytes: 0, modelCount: 0, cachedSpecies: {} });

  const [downloadingSpecies, setDownloadingSpecies] = useState<string | null>(null);
  const [downloadProgress, setDownloadProgress] = useState<{ completed: number; total: number; system: string }>({
    completed: 0,
    total: 7,
    system: '',
  });

  // Track online/offline status
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsOnline(navigator.onLine);
      const handleOnline = () => setIsOnline(true);
      const handleOffline = () => setIsOnline(false);

      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
      return () => {
        window.removeEventListener('online', handleOnline);
        window.removeEventListener('offline', handleOffline);
      };
    }
  }, []);

  // Refresh storage metrics
  const refreshMetrics = async () => {
    const data = await getVaultStorageMetrics();
    setMetrics(data);
  };

  useEffect(() => {
    if (isOpen) {
      refreshMetrics();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleDownloadSpecies = async (speciesId: SpeciesId) => {
    if (downloadingSpecies) return;
    setDownloadingSpecies(speciesId);
    setDownloadProgress({ completed: 0, total: 7, system: '' });

    try {
      await cacheEntireSpeciesPack(speciesId, (completed, total, system) => {
        setDownloadProgress({ completed, total, system });
      });
      await refreshMetrics();
    } catch (err) {
      console.error('Failed to cache species pack:', err);
    } finally {
      setDownloadingSpecies(null);
    }
  };

  const handleDownloadAll = async () => {
    if (downloadingSpecies) return;
    const allSpecies = Object.keys(SPECIES_REGISTRY) as SpeciesId[];

    for (const spec of allSpecies) {
      setDownloadingSpecies(spec);
      setDownloadProgress({ completed: 0, total: 7, system: '' });
      await cacheEntireSpeciesPack(spec, (completed, total, system) => {
        setDownloadProgress({ completed, total, system });
      });
    }
    await refreshMetrics();
    setDownloadingSpecies(null);
  };

  const handleClearCache = async () => {
    if (window.confirm(isRtl ? 'هل تريد مسح جميع النماذج ثلاثية الأبعاد المحفوظة بدون إنترنت؟' : 'Are you sure you want to clear all offline 3D models?')) {
      await clearVaultCache();
      await refreshMetrics();
    }
  };

  const totalMb = (metrics.totalBytes / (1024 * 1024)).toFixed(1);

  return (
    <div 
      dir={isRtl ? 'rtl' : 'ltr'}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 border-b border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
              <HardDrive className="h-5 w-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-base font-bold text-white">
                  {isRtl ? 'مدير حزم المختبر بدون إنترنت (PWA)' : 'Offline Lab Pack Manager'}
                </h2>
                {isOnline ? (
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-[10px] font-semibold text-emerald-400">
                    <Wifi className="h-3 w-3" />
                    <span>{isRtl ? 'متصل' : 'Online'}</span>
                  </span>
                ) : (
                  <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-[10px] font-semibold text-amber-400">
                    <WifiOff className="h-3 w-3" />
                    <span>{isRtl ? 'وضع عدم الاتصال' : 'Offline'}</span>
                  </span>
                )}
              </div>
              <p className="text-xs text-slate-400">
                {isRtl
                  ? 'حفظ نماذج 3D GLB في ذاكرة IndexedDB للدراسة السلسة داخل مختبرات التشريح'
                  : 'Cache Draco 3D GLB models into IndexedDB for 0ms loading in underground anatomy labs'}
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Storage Metrics Ribbon */}
        <div className="p-4 bg-slate-950/60 border-b border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-4">
            <div>
              <span className="text-slate-400 block text-[10px]">
                {isRtl ? 'المساحة المحجوزة' : 'IndexedDB Storage'}
              </span>
              <span className="font-mono font-bold text-cyan-400 text-sm">
                {totalMb} MB
              </span>
            </div>
            <div className="h-6 w-[1px] bg-slate-800" />
            <div>
              <span className="text-slate-400 block text-[10px]">
                {isRtl ? 'النماذج ثلاثية الأبعاد' : 'Cached Models'}
              </span>
              <span className="font-mono font-bold text-white text-sm">
                {metrics.modelCount} / 49 GLB
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleDownloadAll}
              disabled={Boolean(downloadingSpecies) || !isOnline}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 hover:bg-cyan-500/30 transition-all disabled:opacity-50"
            >
              <Download className="h-3.5 w-3.5" />
              <span>{isRtl ? 'تحميل جميع الفصائل' : 'Download All Packs'}</span>
            </button>

            {metrics.modelCount > 0 && (
              <button
                onClick={handleClearCache}
                disabled={Boolean(downloadingSpecies)}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-rose-500/10 text-rose-300 border border-rose-500/30 hover:bg-rose-500/20 transition-all"
                title={isRtl ? 'إفراغ الذاكرة' : 'Clear Cache'}
              >
                <Trash2 className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Download Progress Bar Banner */}
        {downloadingSpecies && (
          <div className="p-3 bg-cyan-950/40 border-b border-cyan-500/30 text-xs">
            <div className="flex items-center justify-between text-cyan-300 font-semibold mb-1">
              <span className="flex items-center gap-1.5">
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                <span>
                  {isRtl
                    ? `جاري تحميل حزمة ${SPECIES_REGISTRY[downloadingSpecies]?.name.ar}...`
                    : `Caching ${SPECIES_REGISTRY[downloadingSpecies]?.name.en} Pack...`}
                </span>
              </span>
              <span className="font-mono text-[11px]">
                {downloadProgress.completed} / {downloadProgress.total} ({downloadProgress.system})
              </span>
            </div>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
              <div 
                className="h-full bg-cyan-400 transition-all duration-300"
                style={{ width: `${(downloadProgress.completed / downloadProgress.total) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Species Packs List */}
        <div className="p-4 overflow-y-auto space-y-2 flex-1 scrollbar-thin scrollbar-thumb-slate-800">
          {Object.values(SPECIES_REGISTRY).map((species) => {
            const cachedCount = metrics.cachedSpecies[species.id] || 0;
            const isFullyCached = cachedCount >= 7;
            const isCurrentDownloading = downloadingSpecies === species.id;

            return (
              <div
                key={species.id}
                className={`p-3.5 rounded-xl border flex items-center justify-between gap-3 transition-colors ${
                  isFullyCached
                    ? 'bg-emerald-950/15 border-emerald-500/30'
                    : 'bg-slate-950/40 border-slate-800'
                }`}
              >
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-white">
                      {isRtl ? species.name.ar : species.name.en}
                    </h4>
                    <span className="text-[10px] text-slate-400 font-serif italic">
                      ({species.scientificName})
                    </span>
                  </div>
                  <div className="flex items-center gap-2 mt-1">
                    <span
                      className={`text-[10px] font-mono font-medium ${
                        isFullyCached ? 'text-emerald-400' : cachedCount > 0 ? 'text-cyan-400' : 'text-slate-500'
                      }`}
                    >
                      {cachedCount}/7 {isRtl ? 'أنظمة محفوظة' : 'systems cached'}
                    </span>
                    {isFullyCached && (
                      <span className="flex items-center gap-0.5 text-[10px] text-emerald-400 font-bold">
                        <CheckCircle2 className="h-3 w-3" />
                        <span>{isRtl ? 'جاهز للمختبر' : 'Offline Ready'}</span>
                      </span>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => handleDownloadSpecies(species.id as SpeciesId)}
                  disabled={isCurrentDownloading || Boolean(downloadingSpecies) || !isOnline}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                    isFullyCached
                      ? 'bg-slate-800 hover:bg-slate-750 text-slate-300 border border-slate-700'
                      : 'bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-500/40'
                  } disabled:opacity-50`}
                >
                  {isCurrentDownloading ? (
                    <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Download className="h-3.5 w-3.5" />
                  )}
                  <span>
                    {isFullyCached
                      ? isRtl ? 'إعادة التحديث' : 'Re-verify'
                      : isRtl ? 'تحميل الحزمة' : 'Download Pack'}
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Footer info */}
        <div className="p-3 bg-slate-950 border-t border-slate-800 text-[10.5px] text-slate-500 flex items-center justify-between">
          <span className="flex items-center gap-1">
            <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
            <span>
              {isRtl
                ? 'البيانات محمية محلياً وتعمل بكفاءة 100% دون الحاجة لأي اتصال بالشبكة.'
                : 'Assets securely preserved in browser IndexedDB sandbox for offline lab access.'}
            </span>
          </span>
          <span className="font-mono text-cyan-400">PWA v2.0 Vault</span>
        </div>
      </div>
    </div>
  );
}
