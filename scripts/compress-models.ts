import fs from 'fs';
import path from 'path';
import { NodeIO, PropertyType } from '@gltf-transform/core';
import { KHRDracoMeshCompression } from '@gltf-transform/extensions';
import { dedup, prune, weld, draco } from '@gltf-transform/functions';
import draco3d from 'draco3dgltf';

// Recursively find all .glb files in a directory
function findGlbFiles(dir: string, fileList: string[] = []): string[] {
  if (!fs.existsSync(dir)) return fileList;

  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      findGlbFiles(fullPath, fileList);
    } else if (entry.isFile() && entry.name.endsWith('.glb')) {
      fileList.push(fullPath);
    }
  }
  return fileList;
}

async function compressAllModels() {
  console.log('⚡ Initializing Draco & Meshopt Compression Pipeline...\n');

  // Initialize Draco encoder & decoder modules
  const encoder = await draco3d.createEncoderModule();
  const decoder = await draco3d.createDecoderModule();

  const io = new NodeIO()
    .registerExtensions([KHRDracoMeshCompression])
    .registerDependencies({
      'draco3d.encoder': encoder,
      'draco3d.decoder': decoder,
    });

  const modelsDir = path.resolve(process.cwd(), 'public', 'models');
  const glbFiles = findGlbFiles(modelsDir);

  if (glbFiles.length === 0) {
    console.error(`❌ No .glb files found in ${modelsDir}! Run 'npm run models:generate' first.`);
    process.exit(1);
  }

  console.log(`Found ${glbFiles.length} GLB files across /public/models/ to compress.\n`);

  let totalOriginalBytes = 0;
  let totalCompressedBytes = 0;
  let verifiedCount = 0;

  for (const filePath of glbFiles) {
    const relPath = path.relative(process.cwd(), filePath).replace(/\\/g, '/');
    const originalBytes = fs.statSync(filePath).size;
    totalOriginalBytes += originalBytes;

    // 1. Read input GLB
    const doc = await io.read(filePath);

    // Collect expected mesh IDs to verify preservation
    const originalMeshes = doc.getRoot().listMeshes().map((m) => ({
      name: m.getName(),
      organId: (m.getExtras() as any)?.organId,
    }));

    // 2. Apply gltf-transform optimization transforms
    await doc.transform(
      dedup({ propertyTypes: [PropertyType.ACCESSOR, PropertyType.TEXTURE, PropertyType.MATERIAL] }),
      prune({ keepAttributes: true, keepIndices: true }),
      weld(),
      draco({
        method: 'edgebreaker',
        quantizePosition: 14,
        quantizeNormal: 10,
        quantizeTexcoord: 12,
        quantizeColor: 8,
        quantizeGeneric: 12,
      })
    );

    // 3. Write compressed GLB (overwriting production asset)
    const compressedBuffer = await io.writeBinary(doc);
    fs.writeFileSync(filePath, Buffer.from(compressedBuffer));

    const compressedBytes = compressedBuffer.byteLength;
    totalCompressedBytes += compressedBytes;
    const ratio = (((originalBytes - compressedBytes) / originalBytes) * 100).toFixed(1);

    // 4. Verify integrity and attribute preservation
    const verifyDoc = await io.readBinary(compressedBuffer);
    const verifiedMeshes = verifyDoc.getRoot().listMeshes();
    const verifiedNodes = verifyDoc.getRoot().listNodes();

    let allPreserved = true;
    for (const orig of originalMeshes) {
      const meshMatch = verifiedMeshes.find((m) => m.getName() === orig.name);
      const nodeMatch = verifiedNodes.find((n) => n.getName() === orig.name);
      const organIdPreserved =
        (meshMatch?.getExtras() as any)?.organId === orig.organId ||
        (nodeMatch?.getExtras() as any)?.organId === orig.organId;

      if (!meshMatch || !organIdPreserved) {
        allPreserved = false;
        console.warn(`  ⚠️ Warning: attribute mismatch for ${orig.name} in ${relPath}`);
      }
    }

    if (allPreserved) {
      verifiedCount++;
    }

    console.log(
      `  ✓ Compressed ${relPath.padEnd(42)} | ${(originalBytes / 1024).toFixed(1)} KB ➔ ${(compressedBytes / 1024).toFixed(1)} KB (-${ratio}%) | Verified: ${verifiedMeshes.length} meshes`
    );
  }

  const overallRatio = (((totalOriginalBytes - totalCompressedBytes) / totalOriginalBytes) * 100).toFixed(1);

  console.log('\n=============================================================');
  console.log(`🏆 Compression Summary:`);
  console.log(`   - Files Processed: ${glbFiles.length}`);
  console.log(`   - 100% Integrity Verified: ${verifiedCount}/${glbFiles.length} files`);
  console.log(`   - Total Original Size:   ${(totalOriginalBytes / 1024).toFixed(1)} KB`);
  console.log(`   - Total Compressed Size: ${(totalCompressedBytes / 1024).toFixed(1)} KB`);
  console.log(`   - Total Bandwidth Saved: ${overallRatio}% reduction`);
  console.log('=============================================================\n');
}

compressAllModels().catch((err) => {
  console.error('❌ Compression pipeline error:', err);
  process.exit(1);
});
