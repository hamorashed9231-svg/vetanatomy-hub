import fs from 'fs';
import path from 'path';
import { Document, NodeIO } from '@gltf-transform/core';

// Interface for an Organ definition from data files
export interface GeometrySpec {
  shape: 'sphere' | 'capsule' | 'cylinder' | 'box' | 'cone' | 'torus';
  position: [number, number, number];
  rotation: [number, number, number];
  scale: [number, number, number];
  color: string;
  roughness: number;
  metalness: number;
}

export interface OrganDefinition {
  speciesSlug: string;
  systemSlug: string;
  meshId: string;
  nameEn: string;
  nameAr: string;
  latinName: string;
  descriptionEn: string;
  descriptionAr: string;
  bloodSupplyEn: string;
  bloodSupplyAr: string;
  innervationEn: string;
  innervationAr: string;
  clinicalPearlsEn: string;
  clinicalPearlsAr: string;
  focusCoordinates: {
    position: [number, number, number];
    target: [number, number, number];
  };
  geometry: GeometrySpec;
  quizQuestions: any[];
}

// Helper: Convert Hex color to [r, g, b, a] in 0..1 range
function hexToRgba(hex: string, alpha = 1.0): [number, number, number, number] {
  let clean = hex.replace('#', '');
  if (clean.length === 3) {
    clean = clean.split('').map(c => c + c).join('');
  }
  const num = parseInt(clean, 16);
  const r = ((num >> 16) & 255) / 255;
  const g = ((num >> 8) & 255) / 255;
  const b = (num & 255) / 255;
  return [parseFloat(r.toFixed(4)), parseFloat(g.toFixed(4)), parseFloat(b.toFixed(4)), alpha];
}

// Helper: Convert Euler angles (radians) to Quaternion [x, y, z, w]
function eulerToQuaternion(rx: number, ry: number, rz: number): [number, number, number, number] {
  const c1 = Math.cos(rx / 2);
  const c2 = Math.cos(ry / 2);
  const c3 = Math.cos(rz / 2);
  const s1 = Math.sin(rx / 2);
  const s2 = Math.sin(ry / 2);
  const s3 = Math.sin(rz / 2);

  const qx = s1 * c2 * c3 + c1 * s2 * s3;
  const qy = c1 * s2 * c3 - s1 * c2 * s3;
  const qz = c1 * c2 * s3 + s1 * s2 * c3;
  const qw = c1 * c2 * c3 - s1 * s2 * s3;
  return [
    parseFloat(qx.toFixed(5)),
    parseFloat(qy.toFixed(5)),
    parseFloat(qz.toFixed(5)),
    parseFloat(qw.toFixed(5)),
  ];
}

// -------------------------------------------------------------
// Parametric Geometry Generators
// -------------------------------------------------------------

interface MeshGeometryData {
  positions: Float32Array;
  normals: Float32Array;
  indices: Uint16Array;
}

// 1. UV Sphere Generator
function generateSphere(radius = 0.5, widthSegments = 24, heightSegments = 16): MeshGeometryData {
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];

  for (let y = 0; y <= heightSegments; y++) {
    const v = y / heightSegments;
    const phi = v * Math.PI;
    for (let x = 0; x <= widthSegments; x++) {
      const u = x / widthSegments;
      const theta = u * Math.PI * 2;

      const sinPhi = Math.sin(phi);
      const cosPhi = Math.cos(phi);
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);

      const nx = -sinPhi * cosTheta;
      const ny = cosPhi;
      const nz = sinPhi * sinTheta;

      positions.push(nx * radius, ny * radius, nz * radius);
      normals.push(nx, ny, nz);
    }
  }

  for (let y = 0; y < heightSegments; y++) {
    for (let x = 0; x < widthSegments; x++) {
      const p1 = y * (widthSegments + 1) + x;
      const p2 = p1 + widthSegments + 1;
      indices.push(p1, p2, p1 + 1);
      indices.push(p1 + 1, p2, p2 + 1);
    }
  }

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    indices: new Uint16Array(indices),
  };
}

// 2. Cylinder Generator with End Caps
function generateCylinder(radius = 0.4, height = 1.0, radialSegments = 24): MeshGeometryData {
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];
  const halfH = height / 2;

  // Body vertices
  for (let y = 0; y <= 1; y++) {
    const py = y === 0 ? -halfH : halfH;
    for (let x = 0; x <= radialSegments; x++) {
      const u = x / radialSegments;
      const theta = u * Math.PI * 2;
      const cosTheta = Math.cos(theta);
      const sinTheta = Math.sin(theta);

      positions.push(cosTheta * radius, py, sinTheta * radius);
      normals.push(cosTheta, 0, sinTheta);
    }
  }

  // Body indices
  for (let x = 0; x < radialSegments; x++) {
    const p1 = x;
    const p2 = x + radialSegments + 1;
    indices.push(p1, p2, p1 + 1);
    indices.push(p1 + 1, p2, p2 + 1);
  }

  // Top cap center
  const topCenterIdx = positions.length / 3;
  positions.push(0, halfH, 0);
  normals.push(0, 1, 0);

  // Top cap ring
  const topRingStart = positions.length / 3;
  for (let x = 0; x <= radialSegments; x++) {
    const u = x / radialSegments;
    const theta = u * Math.PI * 2;
    positions.push(Math.cos(theta) * radius, halfH, Math.sin(theta) * radius);
    normals.push(0, 1, 0);
  }
  for (let x = 0; x < radialSegments; x++) {
    indices.push(topCenterIdx, topRingStart + x, topRingStart + x + 1);
  }

  // Bottom cap center
  const bottomCenterIdx = positions.length / 3;
  positions.push(0, -halfH, 0);
  normals.push(0, -1, 0);

  // Bottom cap ring
  const bottomRingStart = positions.length / 3;
  for (let x = 0; x <= radialSegments; x++) {
    const u = x / radialSegments;
    const theta = u * Math.PI * 2;
    positions.push(Math.cos(theta) * radius, -halfH, Math.sin(theta) * radius);
    normals.push(0, -1, 0);
  }
  for (let x = 0; x < radialSegments; x++) {
    indices.push(bottomCenterIdx, bottomRingStart + x + 1, bottomRingStart + x);
  }

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    indices: new Uint16Array(indices),
  };
}

// 3. Cone Generator with Base Cap
function generateCone(radius = 0.5, height = 1.0, radialSegments = 24): MeshGeometryData {
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];
  const halfH = height / 2;

  // Apex vertex
  const apexIdx = 0;
  positions.push(0, halfH, 0);
  normals.push(0, 1, 0);

  // Base ring for mantle
  const baseRingStart = 1;
  const slope = radius / height;
  for (let x = 0; x <= radialSegments; x++) {
    const u = x / radialSegments;
    const theta = u * Math.PI * 2;
    const cosTheta = Math.cos(theta);
    const sinTheta = Math.sin(theta);

    positions.push(cosTheta * radius, -halfH, sinTheta * radius);
    // Approximate conical normal
    const len = Math.sqrt(1 + slope * slope);
    normals.push(cosTheta / len, slope / len, sinTheta / len);
  }

  for (let x = 0; x < radialSegments; x++) {
    indices.push(apexIdx, baseRingStart + x, baseRingStart + x + 1);
  }

  // Base cap center
  const baseCenterIdx = positions.length / 3;
  positions.push(0, -halfH, 0);
  normals.push(0, -1, 0);

  // Base cap ring
  const capRingStart = positions.length / 3;
  for (let x = 0; x <= radialSegments; x++) {
    const u = x / radialSegments;
    const theta = u * Math.PI * 2;
    positions.push(Math.cos(theta) * radius, -halfH, Math.sin(theta) * radius);
    normals.push(0, -1, 0);
  }

  for (let x = 0; x < radialSegments; x++) {
    indices.push(baseCenterIdx, capRingStart + x + 1, capRingStart + x);
  }

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    indices: new Uint16Array(indices),
  };
}

// 4. Capsule Generator (Cylinder body + two hemispherical caps)
function generateCapsule(radius = 0.35, length = 0.7, segments = 16): MeshGeometryData {
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];
  const halfL = length / 2;
  const rings = 8;

  // Generate vertices
  // Top hemisphere
  for (let r = 0; r <= rings; r++) {
    const phi = (r / rings) * (Math.PI / 2);
    const y = halfL + Math.cos(phi) * radius;
    const rRing = Math.sin(phi) * radius;

    for (let s = 0; s <= segments; s++) {
      const theta = (s / segments) * Math.PI * 2;
      const x = Math.cos(theta) * rRing;
      const z = Math.sin(theta) * rRing;

      positions.push(x, y, z);
      const nx = Math.cos(theta) * Math.sin(phi);
      const ny = Math.cos(phi);
      const nz = Math.sin(theta) * Math.sin(phi);
      normals.push(nx, ny, nz);
    }
  }

  // Bottom hemisphere
  for (let r = 0; r <= rings; r++) {
    const phi = Math.PI / 2 + (r / rings) * (Math.PI / 2);
    const y = -halfL + Math.cos(phi) * radius;
    const rRing = Math.sin(phi) * radius;

    for (let s = 0; s <= segments; s++) {
      const theta = (s / segments) * Math.PI * 2;
      const x = Math.cos(theta) * rRing;
      const z = Math.sin(theta) * rRing;

      positions.push(x, y, z);
      const nx = Math.cos(theta) * Math.sin(phi);
      const ny = Math.cos(phi);
      const nz = Math.sin(theta) * Math.sin(phi);
      normals.push(nx, ny, nz);
    }
  }

  // Build grid indices for all rings
  const totalRings = (rings + 1) * 2 - 1;
  for (let r = 0; r < totalRings; r++) {
    for (let s = 0; s < segments; s++) {
      const p1 = r * (segments + 1) + s;
      const p2 = p1 + segments + 1;
      indices.push(p1, p1 + 1, p2);
      indices.push(p1 + 1, p2 + 1, p2);
    }
  }

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    indices: new Uint16Array(indices),
  };
}

// 5. Torus Generator (Vessels, arches, and intestinal loops)
function generateTorus(radius = 0.45, tube = 0.15, radialSegments = 16, tubularSegments = 24): MeshGeometryData {
  const positions: number[] = [];
  const normals: number[] = [];
  const indices: number[] = [];

  for (let j = 0; j <= radialSegments; j++) {
    for (let i = 0; i <= tubularSegments; i++) {
      const u = (i / tubularSegments) * Math.PI * 2;
      const v = (j / radialSegments) * Math.PI * 2;

      const x = (radius + tube * Math.cos(v)) * Math.cos(u);
      const y = (radius + tube * Math.cos(v)) * Math.sin(u);
      const z = tube * Math.sin(v);

      positions.push(x, y, z);

      const nx = Math.cos(v) * Math.cos(u);
      const ny = Math.cos(v) * Math.sin(u);
      const nz = Math.sin(v);
      normals.push(nx, ny, nz);
    }
  }

  for (let j = 1; j <= radialSegments; j++) {
    for (let i = 1; i <= tubularSegments; i++) {
      const a = (tubularSegments + 1) * j + i - 1;
      const b = (tubularSegments + 1) * (j - 1) + i - 1;
      const c = (tubularSegments + 1) * (j - 1) + i;
      const d = (tubularSegments + 1) * j + i;

      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  return {
    positions: new Float32Array(positions),
    normals: new Float32Array(normals),
    indices: new Uint16Array(indices),
  };
}

// 6. Box Generator (Cranium, vertebrae, articular blocks)
function generateBox(width = 0.8, height = 0.8, depth = 0.8): MeshGeometryData {
  const hw = width / 2;
  const hh = height / 2;
  const hd = depth / 2;

  // 6 faces * 4 vertices = 24 vertices
  const rawPositions = [
    // Front (+Z)
    -hw, -hh,  hd,   hw, -hh,  hd,   hw,  hh,  hd,  -hw,  hh,  hd,
    // Back (-Z)
     hw, -hh, -hd,  -hw, -hh, -hd,  -hw,  hh, -hd,   hw,  hh, -hd,
    // Top (+Y)
    -hw,  hh,  hd,   hw,  hh,  hd,   hw,  hh, -hd,  -hw,  hh, -hd,
    // Bottom (-Y)
    -hw, -hh, -hd,   hw, -hh, -hd,   hw, -hh,  hd,  -hw, -hh,  hd,
    // Right (+X)
     hw, -hh,  hd,   hw, -hh, -hd,   hw,  hh, -hd,   hw,  hh,  hd,
    // Left (-X)
    -hw, -hh, -hd,  -hw, -hh,  hd,  -hw,  hh,  hd,  -hw,  hh, -hd,
  ];

  const rawNormals = [
    // Front
    0, 0, 1,  0, 0, 1,  0, 0, 1,  0, 0, 1,
    // Back
    0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1,
    // Top
    0, 1, 0,  0, 1, 0,  0, 1, 0,  0, 1, 0,
    // Bottom
    0, -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0,
    // Right
    1, 0, 0,  1, 0, 0,  1, 0, 0,  1, 0, 0,
    // Left
    -1, 0, 0, -1, 0, 0, -1, 0, 0, -1, 0, 0,
  ];

  const indices: number[] = [];
  for (let f = 0; f < 6; f++) {
    const o = f * 4;
    indices.push(o, o + 1, o + 2, o, o + 2, o + 3);
  }

  return {
    positions: new Float32Array(rawPositions),
    normals: new Float32Array(rawNormals),
    indices: new Uint16Array(indices),
  };
}

// Geometry Dispatcher with distinct anatomical proportions
function buildShape(shape: GeometrySpec['shape'], scale?: [number, number, number]): MeshGeometryData {
  const [sx, sy, sz] = scale || [1, 1, 1];
  switch (shape) {
    case 'sphere':
      return generateSphere(0.48 * ((sx + sy + sz) / 3), 24, 16);
    case 'cylinder':
      return generateCylinder(0.35 * Math.max(sx, sz), 0.8 * sy, 24);
    case 'cone':
      return generateCone(0.45 * Math.max(sx, sz), 0.85 * sy, 24);
    case 'capsule':
      return generateCapsule(0.3 * Math.max(sx, sz), 0.7 * sy, 18);
    case 'torus':
      return generateTorus(0.42 * Math.max(sx, sz), 0.16 * sy, 16, 24);
    case 'box':
      return generateBox(0.7 * sx, 0.6 * sy, 0.7 * sz);
    default:
      return generateSphere(0.45 * ((sx + sy + sz) / 3), 20, 14);
  }
}

// -------------------------------------------------------------
// Main Generator Execution
// -------------------------------------------------------------

async function generateAllGlbs() {
  console.log('🚀 Starting Procedural Multi-Mesh Anatomical GLB Generator...\n');

  const speciesList = ['equine', 'bovine', 'canine', 'feline', 'ovine_caprine', 'avian', 'camelid'];
  const systemsList = ['cardiovascular', 'digestive', 'respiratory', 'nervous', 'urogenital', 'skeletal', 'muscular'];

  // Load datasets
  const dataFiles: Record<string, string> = {
    equine: 'data-equine.js',
    bovine: 'data-bovine.js',
    canine: 'data-canine.js',
    feline: 'data-feline.js',
    ovine_caprine: 'data-ovine.js',
    avian: 'data-avian.js',
    camelid: 'data-camelid.js',
  };

  const allOrgansMap = new Map<string, OrganDefinition[]>();

  for (const [species, fileName] of Object.entries(dataFiles)) {
    const fullPath = path.resolve(process.cwd(), 'scripts', fileName);
    if (!fs.existsSync(fullPath)) {
      throw new Error(`Data file not found: ${fullPath}`);
    }
    const rawData = require(fullPath);
    const organs: OrganDefinition[] = rawData.default || rawData;
    allOrgansMap.set(species, organs);
    console.log(`📦 Loaded ${organs.length} anatomical organs for [${species}] from ${fileName}`);
  }

  const io = new NodeIO();
  let totalFilesGenerated = 0;
  let totalSubMeshesCount = 0;

  for (const species of speciesList) {
    const organsForSpecies = allOrgansMap.get(species) || [];

    for (const system of systemsList) {
      // Filter organs belonging to this species & system
      const systemOrgans = organsForSpecies.filter((o) => {
        const matchesSys = o.systemSlug === system;
        const matchesSpecies =
          o.speciesSlug === species ||
          (species === 'ovine_caprine' && (o.speciesSlug === 'ovine' || o.speciesSlug === 'ovine_caprine'));
        return matchesSys && matchesSpecies;
      });

      if (systemOrgans.length === 0) {
        console.warn(`⚠️ Warning: No organs found for ${species}/${system}!`);
        continue;
      }

      // Create new glTF Document
      const doc = new Document();
      const buffer = doc.createBuffer();
      const scene = doc.createScene('Scene');

      for (const organ of systemOrgans) {
        // Build parametric geometry data with distinct anatomical scale
        const shapeType = organ.geometry?.shape || 'sphere';
        const geoData = buildShape(shapeType, organ.geometry?.scale);

        // Accessors
        const posAccessor = doc
          .createAccessor(`${organ.meshId}_POS`)
          .setBuffer(buffer)
          .setType('VEC3')
          .setArray(geoData.positions as any);

        const normAccessor = doc
          .createAccessor(`${organ.meshId}_NORM`)
          .setBuffer(buffer)
          .setType('VEC3')
          .setArray(geoData.normals as any);

        const idxAccessor = doc
          .createAccessor(`${organ.meshId}_INDICES`)
          .setBuffer(buffer)
          .setType('SCALAR')
          .setArray(geoData.indices as any);

        // PBR Material with anatomical color tones
        const baseColorRgba = hexToRgba(organ.geometry?.color || '#e2e8f0');
        const material = doc
          .createMaterial(`${organ.meshId}_Mat`)
          .setBaseColorFactor(baseColorRgba)
          .setRoughnessFactor(organ.geometry?.roughness ?? 0.35)
          .setMetallicFactor(organ.geometry?.metalness ?? 0.1)
          .setDoubleSided(true);

        // Primitive
        const primitive = doc
          .createPrimitive()
          .setAttribute('POSITION', posAccessor)
          .setAttribute('NORMAL', normAccessor)
          .setIndices(idxAccessor)
          .setMaterial(material);

        // Sub-Mesh with explicit mesh.name and mesh.userData.organId
        const mesh = doc
          .createMesh(organ.meshId)
          .addPrimitive(primitive)
          .setExtras({ organId: organ.meshId });

        // Scene Node with spatial transformation and explicit node.name and node.userData.organId
        const node = doc
          .createNode(organ.meshId)
          .setMesh(mesh)
          .setExtras({ organId: organ.meshId });

        if (organ.geometry?.position) {
          node.setTranslation(organ.geometry.position);
        }
        if (organ.geometry?.rotation) {
          const [rx, ry, rz] = organ.geometry.rotation;
          node.setRotation(eulerToQuaternion(rx, ry, rz));
        }
        if (organ.geometry?.scale) {
          node.setScale(organ.geometry.scale);
        }

        scene.addChild(node);
        totalSubMeshesCount++;
      }

      // Target path: public/models/[species]/[system].glb
      const targetDir = path.resolve(process.cwd(), 'public', 'models', species);
      fs.mkdirSync(targetDir, { recursive: true });

      const targetPath = path.join(targetDir, `${system}.glb`);
      const glbBinary = await io.writeBinary(doc);
      fs.writeFileSync(targetPath, Buffer.from(glbBinary));

      totalFilesGenerated++;
      console.log(
        `  ✓ Generated ${species}/${system}.glb (${systemOrgans.length} sub-meshes: ${systemOrgans.map(o => o.meshId).join(', ')}) - ${(glbBinary.byteLength / 1024).toFixed(1)} KB`
      );
    }
  }

  console.log(
    `\n✨ Generator Complete: Successfully created ${totalFilesGenerated} multi-mesh GLB files with ${totalSubMeshesCount} distinct anatomical sub-meshes in /public/models/!`
  );
}

generateAllGlbs().catch((err) => {
  console.error('❌ Error during GLB generation:', err);
  process.exit(1);
});
