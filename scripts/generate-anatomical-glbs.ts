import fs from 'fs';
import path from 'path';
import { Document, NodeIO } from '@gltf-transform/core';

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

interface MeshGeometryData {
  positions: Float32Array;
  normals: Float32Array;
  indices: Uint16Array;
}

// Convert Hex to [r, g, b, a] in 0..1 range
function hexToRgba(hex: string, alpha = 1.0): [number, number, number, number] {
  let clean = hex.replace('#', '');
  if (clean.length === 3) {
    clean = clean.split('').map((c) => c + c).join('');
  }
  const num = parseInt(clean, 16);
  const r = ((num >> 16) & 255) / 255;
  const g = ((num >> 8) & 255) / 255;
  const b = (num & 255) / 255;
  return [parseFloat(r.toFixed(4)), parseFloat(g.toFixed(4)), parseFloat(b.toFixed(4)), alpha];
}

// Convert Euler angles (radians) to Quaternion [x, y, z, w]
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

// Smooth normal vector calculator
function computeNormals(positions: Float32Array, indices: Uint16Array): Float32Array {
  const normals = new Float32Array(positions.length);
  for (let i = 0; i < indices.length; i += 3) {
    const i0 = indices[i] * 3;
    const i1 = indices[i + 1] * 3;
    const i2 = indices[i + 2] * 3;

    const ax = positions[i1] - positions[i0];
    const ay = positions[i1 + 1] - positions[i0 + 1];
    const az = positions[i1 + 2] - positions[i0 + 2];

    const bx = positions[i2] - positions[i0];
    const by = positions[i2 + 1] - positions[i0 + 1];
    const bz = positions[i2 + 2] - positions[i0 + 2];

    const nx = ay * bz - az * by;
    const ny = az * bx - ax * bz;
    const nz = ax * by - ay * bx;

    normals[i0] += nx;
    normals[i0 + 1] += ny;
    normals[i0 + 2] += nz;
    normals[i1] += nx;
    normals[i1 + 1] += ny;
    normals[i1 + 2] += nz;
    normals[i2] += nx;
    normals[i2 + 1] += ny;
    normals[i2 + 2] += nz;
  }
  for (let i = 0; i < normals.length; i += 3) {
    const len = Math.hypot(normals[i], normals[i + 1], normals[i + 2]) || 1;
    normals[i] /= len;
    normals[i + 1] /= len;
    normals[i + 2] /= len;
  }
  return normals;
}

// -------------------------------------------------------------
// 12 Authentic Parametric Anatomical Organic Generators
// -------------------------------------------------------------

// 1. ANATOMICAL HEART (Cor)
// Features: Asymmetrical ventricular cone, paraconal and subsinuosal interventricular grooves,
// left & right auricles, and curved ascending aorta arch.
function generateAnatomicalHeart(scale = [1, 1, 1]): MeshGeometryData {
  const [sx, sy, sz] = scale;
  const positions: number[] = [];
  const indices: number[] = [];

  const uSegs = 32;
  const vSegs = 24;

  for (let j = 0; j <= vSegs; j++) {
    const v = j / vSegs; // 0 = base, 1 = apex
    const y = (0.5 - v) * 0.85 * sy;
    
    // Radius profile along ventricular axis
    let rProfile = Math.sin(v * Math.PI) * 0.45;
    if (v < 0.25) {
      rProfile = 0.35 + v * 0.4; // Base / atria bulge
    } else {
      rProfile = 0.45 * Math.pow(1 - v * 0.85, 0.7); // Tapering to apex
    }

    for (let i = 0; i <= uSegs; i++) {
      const u = i / uSegs;
      const theta = u * Math.PI * 2;

      // Interventricular groove indentation & auricular asymmetry
      const groove1 = Math.exp(-Math.pow(theta - 1.1, 2) / 0.12) * 0.08;
      const groove2 = Math.exp(-Math.pow(theta - 4.2, 2) / 0.15) * 0.07;
      
      // Left ventricle apex tilt
      const xOffset = Math.sin(v * Math.PI * 0.6) * 0.08;
      const zOffset = Math.sin(v * Math.PI * 0.5) * 0.04;

      // Auricle crested bulges near the base
      let auricleBulge = 0;
      if (v < 0.3) {
        auricleBulge = (Math.sin(theta * 2) * 0.04) * (1 - v / 0.3);
      }

      const r = (rProfile - groove1 - groove2 + auricleBulge);
      const x = (r * Math.cos(theta) + xOffset) * sx;
      const z = (r * Math.sin(theta) + zOffset) * sz;

      positions.push(x, y, z);
    }
  }

  // Indices for ventricular body
  for (let j = 0; j < vSegs; j++) {
    for (let i = 0; i < uSegs; i++) {
      const p1 = j * (uSegs + 1) + i;
      const p2 = p1 + uSegs + 1;
      indices.push(p1, p2, p1 + 1);
      indices.push(p1 + 1, p2, p2 + 1);
    }
  }

  // Append Ascending Aorta Arch
  const aortaStartIdx = positions.length / 3;
  const aortaSteps = 12;
  const aortaRadial = 12;
  const aortaRadius = 0.09 * Math.min(sx, sz);

  for (let s = 0; s <= aortaSteps; s++) {
    const t = s / aortaSteps;
    const archAngle = t * Math.PI * 0.75;
    // Curved arch path curving cranial then dorsal
    const cx = (Math.sin(archAngle) * 0.15 - 0.02) * sx;
    const cy = (0.35 + Math.sin(archAngle) * 0.22) * sy;
    const cz = (-Math.cos(archAngle) * 0.18 + 0.1) * sz;

    for (let r = 0; r <= aortaRadial; r++) {
      const a = (r / aortaRadial) * Math.PI * 2;
      const vx = cx + Math.cos(a) * aortaRadius;
      const vy = cy + Math.sin(a) * aortaRadius * 0.8;
      const vz = cz + Math.sin(a) * aortaRadius * 0.6;
      positions.push(vx, vy, vz);
    }
  }

  for (let s = 0; s < aortaSteps; s++) {
    for (let r = 0; r < aortaRadial; r++) {
      const p1 = aortaStartIdx + s * (aortaRadial + 1) + r;
      const p2 = p1 + aortaRadial + 1;
      indices.push(p1, p2, p1 + 1);
      indices.push(p1 + 1, p2, p2 + 1);
    }
  }

  const posArray = new Float32Array(positions);
  const idxArray = new Uint16Array(indices);
  const normArray = computeNormals(posArray, idxArray);
  return { positions: posArray, normals: normArray, indices: idxArray };
}

// 2. ANATOMICAL KIDNEY (Ren)
// Features: True reniform kidney bean curvature with indented medial hilum.
// Supports: Heart-shaped (Equine right) and Multilobulated (Bovine).
function generateAnatomicalKidney(scale = [1, 1, 1], type: 'bean' | 'heart' | 'lobulated' = 'bean'): MeshGeometryData {
  const [sx, sy, sz] = scale;
  const positions: number[] = [];
  const indices: number[] = [];

  const uSegs = 28;
  const vSegs = 20;

  for (let j = 0; j <= vSegs; j++) {
    const v = (j / vSegs) * Math.PI; // 0 to PI
    const sinV = Math.sin(v);
    const cosV = Math.cos(v);

    for (let i = 0; i <= uSegs; i++) {
      const u = (i / uSegs) * Math.PI * 2; // 0 to 2PI

      // Medial hilum notch: located at u near PI
      const hilumAngleDiff = Math.abs(u - Math.PI);
      const hilumNotch = Math.exp(-Math.pow(hilumAngleDiff, 2) / 0.5) * 0.45 * sinV;

      let rMod = 1.0 - hilumNotch;

      // Cordiform indentation for equine right kidney
      if (type === 'heart') {
        const dorsalHeartCleft = Math.exp(-Math.pow(v - 0.2, 2) / 0.1) * Math.cos(u * 2) * 0.12;
        rMod += dorsalHeartCleft;
      }

      // Bovine renicular lobulation
      if (type === 'lobulated') {
        const lobes = Math.sin(u * 4) * Math.sin(v * 5) * 0.05 + Math.cos(u * 6) * 0.03;
        rMod += lobes;
      }

      const x = 0.32 * sinV * Math.cos(u) * rMod * sx;
      const y = 0.55 * cosV * sy;
      const z = 0.22 * sinV * Math.sin(u) * rMod * sz;

      positions.push(x, y, z);
    }
  }

  for (let j = 0; j < vSegs; j++) {
    for (let i = 0; i < uSegs; i++) {
      const p1 = j * (uSegs + 1) + i;
      const p2 = p1 + uSegs + 1;
      indices.push(p1, p2, p1 + 1);
      indices.push(p1 + 1, p2, p2 + 1);
    }
  }

  const posArray = new Float32Array(positions);
  const idxArray = new Uint16Array(indices);
  const normArray = computeNormals(posArray, idxArray);
  return { positions: posArray, normals: normArray, indices: idxArray };
}

// 3. ANATOMICAL LUNG (Pulmo)
// Features: Multi-lobed respiratory geometry, convex costal curvature,
// flat mediastinal face, cardiac notch, and concave diaphragmatic base.
function generateAnatomicalLung(scale = [1, 1, 1], isRight = false): MeshGeometryData {
  const [sx, sy, sz] = scale;
  const positions: number[] = [];
  const indices: number[] = [];

  const uSegs = 28;
  const vSegs = 22;

  for (let j = 0; j <= vSegs; j++) {
    const v = j / vSegs; // 0 = cranial apex, 1 = diaphragmatic base
    const y = (0.5 - v) * 1.0 * sy;

    // Radius expands from cranial apex to broad caudal diaphragmatic base
    const rBase = (0.18 + Math.pow(v, 0.7) * 0.42);

    for (let i = 0; i <= uSegs; i++) {
      const u = (i / uSegs) * Math.PI * 2;

      // Costal (convex lateral) vs Mediastinal (concave medial)
      const costalFactor = 1.0 + Math.cos(u) * 0.25;
      
      // Cardiac notch indentation on medial border
      const notchAngle = isRight ? 2.5 : 0.8;
      const cardiacNotch = Math.exp(-Math.pow(u - notchAngle, 2) / 0.4) * Math.exp(-Math.pow(v - 0.45, 2) / 0.1) * 0.22;

      // Fissural interlobar clefts (Right lung has 4 lobes, Left has 2-3)
      const lobeCount = isRight ? 3.5 : 2.5;
      const interlobarFissure = Math.sin(v * Math.PI * lobeCount) * 0.03 * (v > 0.2 && v < 0.85 ? 1 : 0);

      const r = (rBase * costalFactor - cardiacNotch - interlobarFissure);
      const x = r * Math.cos(u) * 0.8 * sx;
      const z = r * Math.sin(u) * 1.15 * sz;

      positions.push(x, y, z);
    }
  }

  for (let j = 0; j < vSegs; j++) {
    for (let i = 0; i < uSegs; i++) {
      const p1 = j * (uSegs + 1) + i;
      const p2 = p1 + uSegs + 1;
      indices.push(p1, p2, p1 + 1);
      indices.push(p1 + 1, p2, p2 + 1);
    }
  }

  const posArray = new Float32Array(positions);
  const idxArray = new Uint16Array(indices);
  const normArray = computeNormals(posArray, idxArray);
  return { positions: posArray, normals: normArray, indices: idxArray };
}

// 4. ANATOMICAL LIVER (Hepar)
// Features: Curved crescent conforming to diaphragm, sharp ventral margin,
// deep interlobar fissures, and gallbladder fossa.
function generateAnatomicalLiver(scale = [1, 1, 1]): MeshGeometryData {
  const [sx, sy, sz] = scale;
  const positions: number[] = [];
  const indices: number[] = [];

  const uSegs = 32;
  const vSegs = 20;

  for (let j = 0; j <= vSegs; j++) {
    const v = j / vSegs;
    const y = (0.5 - v) * 0.7 * sy;
    
    // Asymmetric cranial convexity vs ventral tapering edge
    const thickness = Math.sin(v * Math.PI) * 0.32 * (1.2 - v * 0.6);

    for (let i = 0; i <= uSegs; i++) {
      const u = (i / uSegs) * Math.PI * 2;
      
      // Liver lobe notches (Left lateral, Left medial, Quadrate, Right lobes)
      const lobeNotches = (
        Math.exp(-Math.pow(u - 1.2, 2) / 0.1) * 0.12 +
        Math.exp(-Math.pow(u - 2.8, 2) / 0.1) * 0.14 +
        Math.exp(-Math.pow(u - 4.5, 2) / 0.1) * 0.10
      ) * (v > 0.4 ? 1 : 0);

      // Gallbladder bulge on visceral surface
      const gbBulge = Math.exp(-Math.pow(u - 2.1, 2) / 0.15) * Math.exp(-Math.pow(v - 0.6, 2) / 0.1) * 0.15;

      const r = (0.55 + Math.cos(u * 0.5) * 0.2 - lobeNotches + gbBulge);
      const x = r * Math.cos(u) * 1.1 * sx;
      const z = (thickness * Math.sin(u) + Math.cos(u) * 0.2) * sz;

      positions.push(x, y, z);
    }
  }

  for (let j = 0; j < vSegs; j++) {
    for (let i = 0; i < uSegs; i++) {
      const p1 = j * (uSegs + 1) + i;
      const p2 = p1 + uSegs + 1;
      indices.push(p1, p2, p1 + 1);
      indices.push(p1 + 1, p2, p2 + 1);
    }
  }

  const posArray = new Float32Array(positions);
  const idxArray = new Uint16Array(indices);
  const normArray = computeNormals(posArray, idxArray);
  return { positions: posArray, normals: normArray, indices: idxArray };
}

// 5. ANATOMICAL STOMACH / RUMEN (Gaster / Rumen / Ventriculus)
// Monogastric: J-shaped pouch with fundus dome, greater & lesser curvatures.
// Ruminant: Massive bi-lobed fermentation sac with longitudinal sulci.
function generateAnatomicalStomach(scale = [1, 1, 1], isRuminant = false): MeshGeometryData {
  const [sx, sy, sz] = scale;
  const positions: number[] = [];
  const indices: number[] = [];

  const uSegs = 30;
  const vSegs = 24;

  if (isRuminant) {
    // Massive Rumen with dorsal & ventral sacs separated by longitudinal grooves
    for (let j = 0; j <= vSegs; j++) {
      const v = (j / vSegs) * Math.PI;
      const sinV = Math.sin(v);
      const cosV = Math.cos(v);

      for (let i = 0; i <= uSegs; i++) {
        const u = (i / uSegs) * Math.PI * 2;
        
        // Horizontal longitudinal groove dividing dorsal and ventral sacs
        const ruminalGroove = Math.exp(-Math.pow(v - Math.PI / 2, 2) / 0.15) * 0.15 * Math.abs(Math.sin(u));
        // Cranial and caudal blind sacs
        const blindSacPillow = Math.sin(u * 2) * 0.08 * sinV;

        const r = (0.55 - ruminalGroove + blindSacPillow);
        const x = r * sinV * Math.cos(u) * 1.2 * sx;
        const y = 0.65 * cosV * sy;
        const z = r * sinV * Math.sin(u) * 0.9 * sz;

        positions.push(x, y, z);
      }
    }
  } else {
    // Monogastric C-shaped / J-shaped Stomach
    for (let j = 0; j <= vSegs; j++) {
      const t = j / vSegs; // Path along stomach C-curve (0 = cardia/fundus, 1 = pylorus)
      const curveAngle = t * Math.PI * 1.35 - 0.4;
      
      // Central curved axis of stomach
      const cx = Math.sin(curveAngle) * 0.35 * sx;
      const cy = -Math.cos(curveAngle) * 0.3 * sy;
      const cz = (t - 0.5) * 0.25 * sz;

      // Cross sectional diameter: Huge fundus dome at t=0.2, narrow pyloric tube at t=1.0
      let rSection = 0.28;
      if (t < 0.4) {
        rSection = 0.25 + Math.sin((t / 0.4) * Math.PI * 0.5) * 0.22; // Fundus dome
      } else {
        rSection = 0.47 * Math.pow(1 - (t - 0.4) / 0.6, 0.6) + 0.1; // Tapers to pylorus
      }

      for (let i = 0; i <= uSegs; i++) {
        const u = (i / uSegs) * Math.PI * 2;
        // Greater curvature bulge vs lesser curvature concavity
        const curvatureDistort = 1.0 + Math.cos(u) * 0.25;
        const vx = cx + Math.cos(u) * rSection * curvatureDistort * sx;
        const vy = cy + Math.sin(u) * rSection * sy;
        const vz = cz + Math.sin(u) * rSection * 0.8 * sz;

        positions.push(vx, vy, vz);
      }
    }
  }

  for (let j = 0; j < vSegs; j++) {
    for (let i = 0; i < uSegs; i++) {
      const p1 = j * (uSegs + 1) + i;
      const p2 = p1 + uSegs + 1;
      indices.push(p1, p2, p1 + 1);
      indices.push(p1 + 1, p2, p2 + 1);
    }
  }

  const posArray = new Float32Array(positions);
  const idxArray = new Uint16Array(indices);
  const normArray = computeNormals(posArray, idxArray);
  return { positions: posArray, normals: normArray, indices: idxArray };
}

// 6. ANATOMICAL BRAIN (Cerebrum & Cerebellum)
// Features: Dual cerebral hemispheres, longitudinal fissure, gyri/sulci surface convolutions.
function generateAnatomicalBrain(scale = [1, 1, 1], isCerebellum = false): MeshGeometryData {
  const [sx, sy, sz] = scale;
  const positions: number[] = [];
  const indices: number[] = [];

  const uSegs = 32;
  const vSegs = 22;

  for (let j = 0; j <= vSegs; j++) {
    const v = (j / vSegs) * Math.PI;
    const sinV = Math.sin(v);
    const cosV = Math.cos(v);

    for (let i = 0; i <= uSegs; i++) {
      const u = (i / uSegs) * Math.PI * 2;

      let r = 0.45;

      if (!isCerebellum) {
        // Deep interhemispheric longitudinal fissure at x = 0 (u = PI/2 and 3PI/2)
        const fissure = (Math.exp(-Math.pow(u - Math.PI / 2, 2) / 0.08) + Math.exp(-Math.pow(u - (3 * Math.PI) / 2, 2) / 0.08)) * 0.16 * sinV;
        // Cortical gyri & sulci folds
        const gyriFolds = Math.sin(u * 9) * Math.cos(v * 8) * 0.025 + Math.sin(u * 14 + v * 12) * 0.015;
        r = (0.42 - fissure + gyriFolds);
      } else {
        // Cerebellar vermis & fine transverse folia ridges
        const folia = Math.cos(v * 18) * 0.025;
        r = (0.38 + folia);
      }

      const x = r * sinV * Math.cos(u) * 1.15 * sx;
      const y = r * cosV * 0.85 * sy;
      const z = r * sinV * Math.sin(u) * 1.25 * sz;

      positions.push(x, y, z);
    }
  }

  for (let j = 0; j < vSegs; j++) {
    for (let i = 0; i < uSegs; i++) {
      const p1 = j * (uSegs + 1) + i;
      const p2 = p1 + uSegs + 1;
      indices.push(p1, p2, p1 + 1);
      indices.push(p1 + 1, p2, p2 + 1);
    }
  }

  const posArray = new Float32Array(positions);
  const idxArray = new Uint16Array(indices);
  const normArray = computeNormals(posArray, idxArray);
  return { positions: posArray, normals: normArray, indices: idxArray };
}

// 7. ANATOMICAL SKULL (Cranium)
// Features: Rounded neurocranium vault, sagittal crest, tapering facial snout,
// bilateral orbits, zygomatic arches, and mandible.
function generateAnatomicalSkull(scale = [1, 1, 1]): MeshGeometryData {
  const [sx, sy, sz] = scale;
  const positions: number[] = [];
  const indices: number[] = [];

  const uSegs = 28;
  const vSegs = 20;

  for (let j = 0; j <= vSegs; j++) {
    const v = j / vSegs; // 0 = caudal cranium, 1 = rostral snout tip
    const z = (v - 0.4) * 1.1 * sz;

    // Profile from broad cranial box to tapered snout
    let widthProfile = 0.42;
    let heightProfile = 0.38;

    if (v < 0.4) {
      // Cranial braincase
      widthProfile = 0.42 * Math.sin((v / 0.4) * Math.PI * 0.5 + 0.3);
      heightProfile = 0.42;
    } else {
      // Tapering facial muzzle & nasal bridge
      const muzzleFactor = 1 - (v - 0.4) / 0.6;
      widthProfile = 0.42 * Math.pow(muzzleFactor, 0.6) * 0.7 + 0.12;
      heightProfile = 0.35 * muzzleFactor + 0.12;
    }

    for (let i = 0; i <= uSegs; i++) {
      const u = (i / uSegs) * Math.PI * 2;
      
      // Dorsal Sagittal Crest at top (u = PI/2)
      const sagittalCrest = Math.exp(-Math.pow(u - Math.PI / 2, 2) / 0.1) * (v < 0.4 ? 0.08 : 0);
      // Orbital eye sockets (v ~ 0.45, u ~ 0.2 and u ~ 2.9)
      const orbitIndent = (Math.exp(-Math.pow(u - 0.25, 2) / 0.12) + Math.exp(-Math.pow(u - 2.89, 2) / 0.12)) *
        Math.exp(-Math.pow(v - 0.45, 2) / 0.05) * 0.15;
      // Zygomatic arch flare
      const zygomaticFlare = Math.sin(u) * Math.exp(-Math.pow(v - 0.4, 2) / 0.08) * 0.12;

      const x = (Math.cos(u) * widthProfile + (Math.cos(u) > 0 ? zygomaticFlare : -zygomaticFlare) - (Math.cos(u) * orbitIndent)) * sx;
      const y = (Math.sin(u) * heightProfile + sagittalCrest) * sy;

      positions.push(x, y, z);
    }
  }

  for (let j = 0; j < vSegs; j++) {
    for (let i = 0; i < uSegs; i++) {
      const p1 = j * (uSegs + 1) + i;
      const p2 = p1 + uSegs + 1;
      indices.push(p1, p2, p1 + 1);
      indices.push(p1 + 1, p2, p2 + 1);
    }
  }

  const posArray = new Float32Array(positions);
  const idxArray = new Uint16Array(indices);
  const normArray = computeNormals(posArray, idxArray);
  return { positions: posArray, normals: normArray, indices: idxArray };
}

// 8. ANATOMICAL VERTEBRAL COLUMN (Columna Vertebralis)
// Features: Articulated series of vertebral centra with prominent dorsal spinous processes.
function generateAnatomicalSpine(scale = [1, 1, 1]): MeshGeometryData {
  const [sx, sy, sz] = scale;
  const positions: number[] = [];
  const indices: number[] = [];

  const segments = 16;
  const radial = 12;

  for (let s = 0; s <= segments; s++) {
    const t = s / segments;
    const z = (t - 0.5) * 1.8 * sz;

    // Withers dorsal spinous process height profile (tall in cranial thoracic, low in lumbar)
    const spinousHeight = Math.sin(t * Math.PI * 0.8 + 0.1) * 0.35 * Math.exp(-Math.pow(t - 0.3, 2) / 0.08) + 0.12;
    // Intervertebral disc constriction
    const discWave = 0.12 + Math.cos(t * Math.PI * 18) * 0.035;

    for (let r = 0; r <= radial; r++) {
      const a = (r / radial) * Math.PI * 2;
      
      // Dorsal spinous blade at top (a near PI/2)
      const spineSpike = Math.exp(-Math.pow(a - Math.PI / 2, 2) / 0.15) * spinousHeight;
      // Transverse lateral processes (a near 0 and PI)
      const transverseWings = (Math.exp(-Math.pow(a, 2) / 0.2) + Math.exp(-Math.pow(a - Math.PI, 2) / 0.2)) * 0.1;

      const x = (Math.cos(a) * discWave + (Math.cos(a) > 0 ? transverseWings : -transverseWings)) * sx;
      const y = (Math.sin(a) * discWave + spineSpike) * sy;

      positions.push(x, y, z);
    }
  }

  for (let s = 0; s < segments; s++) {
    for (let r = 0; r < radial; r++) {
      const p1 = s * (radial + 1) + r;
      const p2 = p1 + radial + 1;
      indices.push(p1, p2, p1 + 1);
      indices.push(p1 + 1, p2, p2 + 1);
    }
  }

  const posArray = new Float32Array(positions);
  const idxArray = new Uint16Array(indices);
  const normArray = computeNormals(posArray, idxArray);
  return { positions: posArray, normals: normArray, indices: idxArray };
}

// 9. ANATOMICAL LONG BONE / LIMB (Femur / Humerus / Cannon)
// Features: Flared proximal epiphysis (articular head & trochanter), slender bowed shaft,
// and distal bicondylar articular trochlea.
function generateAnatomicalLongBone(scale = [1, 1, 1]): MeshGeometryData {
  const [sx, sy, sz] = scale;
  const positions: number[] = [];
  const indices: number[] = [];

  const vSegs = 20;
  const uSegs = 16;

  for (let j = 0; j <= vSegs; j++) {
    const v = j / vSegs; // 0 = proximal epiphysis, 1 = distal epiphysis
    const y = (0.5 - v) * 1.4 * sy;

    // Radius flares at ends, slender diaphysis shaft in middle
    let rBase = 0.1;
    if (v < 0.2) {
      rBase = 0.25 - v * 0.75; // Proximal head flare
    } else if (v > 0.8) {
      rBase = 0.1 + (v - 0.8) * 0.75; // Distal condyle flare
    }

    // Physiological cranial bowing of the bone
    const bowOffset = Math.sin(v * Math.PI) * 0.08 * sz;

    for (let i = 0; i <= uSegs; i++) {
      const u = (i / uSegs) * Math.PI * 2;

      // Distal bicondylar split (two distinct rounded condyles separated by a notch)
      let condyleSplit = 0;
      if (v > 0.82) {
        condyleSplit = Math.sin(u * 2) * 0.06;
      }
      // Proximal greater trochanter flare
      let trochanter = 0;
      if (v < 0.18) {
        trochanter = Math.exp(-Math.pow(u - 0.5, 2) / 0.3) * 0.12;
      }

      const r = rBase + condyleSplit + trochanter;
      const x = r * Math.cos(u) * sx;
      const z = (r * Math.sin(u) + bowOffset) * sz;

      positions.push(x, y, z);
    }
  }

  for (let j = 0; j < vSegs; j++) {
    for (let i = 0; i < uSegs; i++) {
      const p1 = j * (uSegs + 1) + i;
      const p2 = p1 + uSegs + 1;
      indices.push(p1, p2, p1 + 1);
      indices.push(p1 + 1, p2, p2 + 1);
    }
  }

  const posArray = new Float32Array(positions);
  const idxArray = new Uint16Array(indices);
  const normArray = computeNormals(posArray, idxArray);
  return { positions: posArray, normals: normArray, indices: idxArray };
}

// 10. ANATOMICAL RIB CAGE (Costae)
// Features: Array of bilateral costal arches curving outward and downward.
function generateAnatomicalRibCage(scale = [1, 1, 1]): MeshGeometryData {
  const [sx, sy, sz] = scale;
  const positions: number[] = [];
  const indices: number[] = [];

  const ribCount = 8;
  const ptsPerRib = 16;
  const tubeRadial = 8;
  const tubeRadius = 0.025 * Math.min(sx, sy);

  for (let r = 0; r < ribCount; r++) {
    const rNorm = r / (ribCount - 1);
    const zCenter = (rNorm - 0.5) * 1.2 * sz;
    const archRadius = (0.55 + Math.sin(rNorm * Math.PI) * 0.25) * Math.max(sx, sy);

    for (let p = 0; p <= ptsPerRib; p++) {
      const angle = (p / ptsPerRib) * Math.PI * 1.85 + 0.25;
      const cx = Math.cos(angle) * archRadius * 0.9 * sx;
      const cy = Math.sin(angle) * archRadius * 0.75 * sy;
      const cz = zCenter;

      const ringBase = positions.length / 3;

      for (let tr = 0; tr <= tubeRadial; tr++) {
        const ta = (tr / tubeRadial) * Math.PI * 2;
        const vx = cx + Math.cos(ta) * tubeRadius;
        const vy = cy + Math.sin(ta) * tubeRadius;
        const vz = cz + Math.sin(ta) * tubeRadius;
        positions.push(vx, vy, vz);
      }

      if (p > 0) {
        const prevRingBase = ringBase - (tubeRadial + 1);
        for (let tr = 0; tr < tubeRadial; tr++) {
          const p1 = prevRingBase + tr;
          const p2 = ringBase + tr;
          indices.push(p1, p2, p1 + 1);
          indices.push(p1 + 1, p2, p2 + 1);
        }
      }
    }
  }

  const posArray = new Float32Array(positions);
  const idxArray = new Uint16Array(indices);
  const normArray = computeNormals(posArray, idxArray);
  return { positions: posArray, normals: normArray, indices: idxArray };
}

// 11. ANATOMICAL MUSCLE (Musculus)
// Features: Fusiform muscle belly (venter) bulging centrally, tapering to tendon aponeuroses.
function generateAnatomicalMuscle(scale = [1, 1, 1]): MeshGeometryData {
  const [sx, sy, sz] = scale;
  const positions: number[] = [];
  const indices: number[] = [];

  const vSegs = 20;
  const uSegs = 18;

  for (let j = 0; j <= vSegs; j++) {
    const v = j / vSegs; // 0 = origin tendon, 1 = insertion tendon
    const y = (0.5 - v) * 1.2 * sy;

    // Fusiform belly bulge in center (v ~ 0.5)
    const bellyBulge = Math.sin(v * Math.PI);
    const rBase = 0.08 + Math.pow(bellyBulge, 0.7) * 0.32;

    for (let i = 0; i <= uSegs; i++) {
      const u = (i / uSegs) * Math.PI * 2;
      // Fascicular striations
      const striations = Math.sin(u * 6) * 0.015 * bellyBulge;

      const r = rBase + striations;
      const x = r * Math.cos(u) * 1.25 * sx;
      const z = r * Math.sin(u) * 0.85 * sz;

      positions.push(x, y, z);
    }
  }

  for (let j = 0; j < vSegs; j++) {
    for (let i = 0; i < uSegs; i++) {
      const p1 = j * (uSegs + 1) + i;
      const p2 = p1 + uSegs + 1;
      indices.push(p1, p2, p1 + 1);
      indices.push(p1 + 1, p2, p2 + 1);
    }
  }

  const posArray = new Float32Array(positions);
  const idxArray = new Uint16Array(indices);
  const normArray = computeNormals(posArray, idxArray);
  return { positions: posArray, normals: normArray, indices: idxArray };
}

// 12. ANATOMICAL VESSEL / TRACHEA (Aorta, Vena Cava, Trachea)
// Features: Corrugated tracheal cartilage rings or smooth curved vascular arch.
function generateAnatomicalVessel(scale = [1, 1, 1], isTrachea = false): MeshGeometryData {
  const [sx, sy, sz] = scale;
  const positions: number[] = [];
  const indices: number[] = [];

  const vSegs = 24;
  const uSegs = 16;

  for (let j = 0; j <= vSegs; j++) {
    const v = j / vSegs;
    const y = (0.5 - v) * 1.3 * sy;

    let rBase = 0.18;
    if (isTrachea) {
      // Periodic corrugated C-shaped cartilaginous tracheal rings
      const cartilageRing = Math.sin(v * Math.PI * 24) * 0.035;
      rBase = 0.2 + cartilageRing;
    }

    for (let i = 0; i <= uSegs; i++) {
      const u = (i / uSegs) * Math.PI * 2;
      const x = rBase * Math.cos(u) * sx;
      const z = rBase * Math.sin(u) * sz;
      positions.push(x, y, z);
    }
  }

  for (let j = 0; j < vSegs; j++) {
    for (let i = 0; i < uSegs; i++) {
      const p1 = j * (uSegs + 1) + i;
      const p2 = p1 + uSegs + 1;
      indices.push(p1, p2, p1 + 1);
      indices.push(p1 + 1, p2, p2 + 1);
    }
  }

  const posArray = new Float32Array(positions);
  const idxArray = new Uint16Array(indices);
  const normArray = computeNormals(posArray, idxArray);
  return { positions: posArray, normals: normArray, indices: idxArray };
}

// -------------------------------------------------------------
// Intelligent Anatomical Mesh Dispatcher
// -------------------------------------------------------------
function buildAnatomicalMesh(organ: OrganDefinition): MeshGeometryData {
  const scale = organ.geometry?.scale || [1, 1, 1];
  const name = (organ.nameEn || '').toLowerCase();
  const latin = (organ.latinName || '').toLowerCase();
  const id = (organ.meshId || '').toLowerCase();
  const system = organ.systemSlug;
  const species = organ.speciesSlug;

  // 1. Cardiovascular System
  if (system === 'cardiovascular') {
    if (name.includes('heart') || latin.includes('cor') || id.includes('cor')) {
      return generateAnatomicalHeart(scale);
    }
    if (name.includes('aorta') || latin.includes('aorta') || id.includes('aorta')) {
      return generateAnatomicalVessel(scale, false);
    }
    if (name.includes('vena') || latin.includes('vena') || name.includes('azygos') || id.includes('vena')) {
      return generateAnatomicalVessel(scale, false);
    }
    return generateAnatomicalVessel(scale, false);
  }

  // 2. Digestive System
  if (system === 'digestive') {
    if (name.includes('stomach') || latin.includes('gaster') || id.includes('gaster') || name.includes('proventriculus') || name.includes('gizzard')) {
      return generateAnatomicalStomach(scale, false);
    }
    if (name.includes('rumen') || latin.includes('rumen') || id.includes('rumen') || name.includes('c1') || name.includes('reticulum') || name.includes('omasum') || name.includes('abomasum')) {
      return generateAnatomicalStomach(scale, true);
    }
    if (name.includes('liver') || latin.includes('hepar') || id.includes('hepar')) {
      return generateAnatomicalLiver(scale);
    }
    if (name.includes('cecum') || name.includes('colon') || name.includes('intestine') || latin.includes('intestinum')) {
      return generateAnatomicalStomach(scale, false);
    }
    return generateAnatomicalLiver(scale);
  }

  // 3. Respiratory System
  if (system === 'respiratory') {
    if (name.includes('lung') || latin.includes('pulmo') || id.includes('pulmo')) {
      const isRight = name.includes('right') || id.includes('dexter');
      return generateAnatomicalLung(scale, isRight);
    }
    if (name.includes('trachea') || latin.includes('trachea') || name.includes('larynx') || id.includes('trachea')) {
      return generateAnatomicalVessel(scale, true);
    }
    return generateAnatomicalLung(scale, false);
  }

  // 4. Nervous System
  if (system === 'nervous') {
    if (name.includes('cerebellum') || id.includes('cerebellum')) {
      return generateAnatomicalBrain(scale, true);
    }
    if (name.includes('cerebrum') || latin.includes('cerebrum') || id.includes('cerebrum') || name.includes('brain')) {
      return generateAnatomicalBrain(scale, false);
    }
    if (name.includes('spinal') || latin.includes('medulla') || id.includes('spinal') || name.includes('nerve') || name.includes('plexus')) {
      return generateAnatomicalVessel(scale, false);
    }
    return generateAnatomicalBrain(scale, false);
  }

  // 5. Urogenital System
  if (system === 'urogenital') {
    if (name.includes('kidney') || latin.includes('ren') || id.includes('ren')) {
      let type: 'bean' | 'heart' | 'lobulated' = 'bean';
      if (species === 'equine' && (name.includes('right') || id.includes('dexter'))) {
        type = 'heart';
      } else if (species === 'bovine') {
        type = 'lobulated';
      }
      return generateAnatomicalKidney(scale, type);
    }
    if (name.includes('bladder') || latin.includes('vesica') || id.includes('vesica')) {
      return generateAnatomicalKidney(scale, 'bean');
    }
    if (name.includes('uterus') || name.includes('prostate') || name.includes('penis')) {
      return generateAnatomicalMuscle(scale);
    }
    return generateAnatomicalKidney(scale, 'bean');
  }

  // 6. Skeletal System
  if (system === 'skeletal') {
    if (name.includes('skull') || latin.includes('cranium') || id.includes('cranium')) {
      return generateAnatomicalSkull(scale);
    }
    if (name.includes('vertebral') || name.includes('vertebra') || name.includes('spine') || latin.includes('columna') || id.includes('columna') || id.includes('vertebra')) {
      return generateAnatomicalSpine(scale);
    }
    if (name.includes('rib') || latin.includes('costa') || id.includes('costa')) {
      return generateAnatomicalRibCage(scale);
    }
    if (name.includes('femur') || name.includes('bone') || name.includes('limb') || name.includes('pelvis') || name.includes('digit') || name.includes('cannon') || name.includes('tibia')) {
      return generateAnatomicalLongBone(scale);
    }
    return generateAnatomicalLongBone(scale);
  }

  // 7. Muscular System
  if (system === 'muscular') {
    return generateAnatomicalMuscle(scale);
  }

  // Fallback
  return generateAnatomicalHeart(scale);
}

// -------------------------------------------------------------
// Main Generator Execution for All 7 Species & 7 Systems
// -------------------------------------------------------------

async function generateAllGlbs() {
  console.log('🚀 Starting Authentic Multi-Species Anatomical GLB Generator...\n');

  const speciesList = ['equine', 'bovine', 'canine', 'feline', 'ovine_caprine', 'avian', 'camelid'];
  const systemsList = ['cardiovascular', 'digestive', 'respiratory', 'nervous', 'urogenital', 'skeletal', 'muscular'];

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

      const doc = new Document();
      const buffer = doc.createBuffer();
      const scene = doc.createScene('Scene');

      for (const organ of systemOrgans) {
        // Build authentic anatomical organ mesh
        const geoData = buildAnatomicalMesh(organ);

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
          .setMetallicFactor(organ.geometry?.metalness ?? 0.08)
          .setDoubleSided(true);

        const primitive = doc
          .createPrimitive()
          .setAttribute('POSITION', posAccessor)
          .setAttribute('NORMAL', normAccessor)
          .setIndices(idxAccessor)
          .setMaterial(material);

        const mesh = doc
          .createMesh(organ.meshId)
          .addPrimitive(primitive)
          .setExtras({ organId: organ.meshId });

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
        `  ✓ Generated ${species}/${system}.glb (${systemOrgans.length} anatomical sub-meshes) - ${(glbBinary.byteLength / 1024).toFixed(1)} KB`
      );
    }
  }

  console.log(
    `\n✨ Generator Complete: Successfully created ${totalFilesGenerated} multi-mesh GLB files with ${totalSubMeshesCount} authentic anatomical sub-meshes in /public/models/!`
  );
}

generateAllGlbs().catch((err) => {
  console.error('❌ Error during GLB generation:', err);
  process.exit(1);
});
