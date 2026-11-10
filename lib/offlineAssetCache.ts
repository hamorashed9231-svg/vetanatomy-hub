/**
 * IndexedDB 3D Binary Asset & Anatomical Data Vault
 * Powers 0ms Offline 3D GLB Model Streaming for Anatomy Labs
 */

import { SpeciesId, AnatomicalSystemId } from '../types/anatomy';
import { SYSTEMS_REGISTRY } from '../data/anatomyRegistry';

const DB_NAME = 'vet_anatomy_vault_v1';
const DB_VERSION = 1;

export const STORES = {
  MODELS: 'models_bin_store',
  DATA: 'anatomy_data_store',
  FLASHCARDS: 'flashcard_offline_store',
} as const;

// Track active Object URLs to prevent memory leaks
const activeBlobUrls = new Map<string, string>();

/**
 * Initialize / open IndexedDB database
 */
function openVaultDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    if (typeof window === 'undefined' || !window.indexedDB) {
      reject(new Error('IndexedDB not supported in current environment'));
      return;
    }

    const request = window.indexedDB.open(DB_NAME, DB_VERSION);

    request.onupgradeneeded = (event: IDBVersionChangeEvent) => {
      const db = (event.target as IDBOpenDBRequest).result;

      // 1. 3D GLB Binary blobs store
      if (!db.objectStoreNames.contains(STORES.MODELS)) {
        const modelStore = db.createObjectStore(STORES.MODELS, { keyPath: 'url' });
        modelStore.createIndex('species', 'species', { unique: false });
        modelStore.createIndex('system', 'system', { unique: false });
      }

      // 2. JSON Anatomical metadata cache
      if (!db.objectStoreNames.contains(STORES.DATA)) {
        db.createObjectStore(STORES.DATA, { keyPath: 'key' });
      }

      // 3. Offline SM-2 flashcard reviews queue
      if (!db.objectStoreNames.contains(STORES.FLASHCARDS)) {
        db.createObjectStore(STORES.FLASHCARDS, { keyPath: 'organId' });
      }
    };

    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

/**
 * Synchronous check for active in-memory object URL
 */
export function getMemoryCachedGlbUrl(modelUrl: string): string | null {
  return activeBlobUrls.get(modelUrl) || null;
}

/**
 * Check if a GLB model exists in IndexedDB and return an ephemeral Object URL
 */
export async function getCachedGlbBlobUrl(modelUrl: string): Promise<string | null> {
  try {
    // Return existing memory blob URL if still valid
    if (activeBlobUrls.has(modelUrl)) {
      return activeBlobUrls.get(modelUrl)!;
    }

    const db = await openVaultDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORES.MODELS, 'readonly');
      const store = tx.objectStore(STORES.MODELS);
      const req = store.get(modelUrl);

      req.onsuccess = () => {
        if (req.result && req.result.blob) {
          const blobUrl = URL.createObjectURL(req.result.blob);
          activeBlobUrls.set(modelUrl, blobUrl);
          resolve(blobUrl);
        } else {
          resolve(null);
        }
      };

      req.onerror = () => resolve(null);
    });
  } catch {
    return null;
  }
}

/**
 * Cache binary GLB model in IndexedDB
 */
export async function storeGlbBlob(
  modelUrl: string,
  blob: Blob,
  species: string,
  system: string
): Promise<void> {
  const db = await openVaultDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction(STORES.MODELS, 'readwrite');
    const store = tx.objectStore(STORES.MODELS);

    const record = {
      url: modelUrl,
      blob,
      size: blob.size,
      species,
      system,
      timestamp: Date.now(),
    };

    const req = store.put(record);
    req.onsuccess = () => {
      // Create and track memory blob url
      const blobUrl = URL.createObjectURL(blob);
      activeBlobUrls.set(modelUrl, blobUrl);
      resolve();
    };
    req.onerror = () => reject(req.error);
  });
}

/**
 * High-performance resolver: Returns cached ObjectURL if present, otherwise returns origin URL
 */
export async function resolveGlbModelUrl(modelUrl: string): Promise<string> {
  if (typeof window === 'undefined') return modelUrl;
  const cachedUrl = await getCachedGlbBlobUrl(modelUrl);
  return cachedUrl || modelUrl;
}

/**
 * Pre-cache an entire species 3D pack (all 7 anatomical systems) for offline lab use
 */
export async function cacheEntireSpeciesPack(
  species: SpeciesId,
  onProgress?: (completed: number, total: number, system: string) => void
): Promise<{ bytesSaved: number; totalModels: number }> {
  let bytesSaved = 0;
  let completed = 0;
  const systems = SYSTEMS_REGISTRY.map((s) => s.id);
  const total = systems.length;

  for (const sys of systems) {
    const modelUrl = `/models/${species}/${sys}.glb`;

    // Check if already in cache
    const existing = await getCachedGlbBlobUrl(modelUrl);
    if (!existing) {
      try {
        const response = await fetch(modelUrl);
        if (response.ok) {
          const blob = await response.blob();
          await storeGlbBlob(modelUrl, blob, species, sys);
          bytesSaved += blob.size;
        }
      } catch (err) {
        console.warn(`Failed to prefetch offline model: ${modelUrl}`, err);
      }
    }

    completed += 1;
    if (onProgress) {
      onProgress(completed, total, sys);
    }
  }

  return { bytesSaved, totalModels: completed };
}

/**
 * Get storage vault metrics: total size, model count, and cached species
 */
export async function getVaultStorageMetrics(): Promise<{
  totalBytes: number;
  modelCount: number;
  cachedSpecies: Record<string, number>;
}> {
  try {
    const db = await openVaultDB();
    return new Promise((resolve) => {
      const tx = db.transaction(STORES.MODELS, 'readonly');
      const store = tx.objectStore(STORES.MODELS);
      const req = store.getAll();

      req.onsuccess = () => {
        const records = req.result || [];
        let totalBytes = 0;
        const cachedSpecies: Record<string, number> = {};

        records.forEach((rec: any) => {
          totalBytes += rec.size || 0;
          cachedSpecies[rec.species] = (cachedSpecies[rec.species] || 0) + 1;
        });

        resolve({
          totalBytes,
          modelCount: records.length,
          cachedSpecies,
        });
      };

      req.onerror = () => resolve({ totalBytes: 0, modelCount: 0, cachedSpecies: {} });
    });
  } catch {
    return { totalBytes: 0, modelCount: 0, cachedSpecies: {} };
  }
}

/**
 * Clear all cached 3D binary models and data from IndexedDB
 */
export async function clearVaultCache(): Promise<void> {
  // Revoke all active Object URLs
  activeBlobUrls.forEach((url) => URL.revokeObjectURL(url));
  activeBlobUrls.clear();

  const db = await openVaultDB();
  return new Promise((resolve, reject) => {
    const tx = db.transaction([STORES.MODELS, STORES.DATA], 'readwrite');
    tx.objectStore(STORES.MODELS).clear();
    tx.objectStore(STORES.DATA).clear();
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
  });
}
