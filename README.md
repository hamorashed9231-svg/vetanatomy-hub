# 🐾 VetAnatomy Hub (منصة التشريح البيطري التفاعلي)

> **Enterprise-Grade Unified Multi-Species 3D Veterinary Anatomy & Clinical Education Platform**  
> Built with Next.js 15 (App Router), React 19, TypeScript, Three.js, React Three Fiber, Zustand, and Tailwind CSS.

---

## 🌟 Architecture & Core Deliverables

### 1. Unified Multi-Species Architecture & Data Pipeline
- **7 Core Veterinary Species**:
  1. 🐎 **Equine** (*Equus caballus* - Horses)
  2. 🐄 **Bovine** (*Bos taurus* - Cattle & Cows)
  3. 🐕 **Canine** (*Canis lupus familiaris* - Dogs)
  4. 🐈 **Feline** (*Felis catus* - Cats)
  5. 🐑 **Ovine / Caprine** (*Ovis aries* & *Capra hircus* - Sheep & Goats)
  6. 🐓 **Avian** (*Gallus gallus domesticus* - Birds & Poultry)
  7. 🐪 **Camelids** (*Camelus dromedarius* - Dromedary Camels)
- **Standardized Anatomical Taxonomy**:
  - `Skeletal`, `Muscular`, `Cardiovascular`, `Respiratory`, `Digestive`, `Nervous`, `Urogenital`.
- **Authentic Veterinary Science Data (`anatomyRegistry.ts`)**:
  - Latin Nomina Anatomica Veterinaria (NAV) nomenclature.
  - Arterial blood supply and venous drainage.
  - Autonomic, somatic, and cranial nerve innervation.
  - Pathologies, surgical landmarks, and clinical pearls.
  - Ready-to-plug GLB paths (`/models/[species]/[system].glb`) with procedural geometric fallbacks.

### 2. Central 3D Dynamic Viewer (`VetCanvas.tsx`)
- **WebGL Pipeline**: Built with `@react-three/fiber` and `@react-three/drei`.
- **Raycasting Click-to-Isolate Engine**:
  - Click event reads `event.object.userData.organId`.
  - Animates camera position to `cameraFocus: { position, target }` using smooth `useFrame` lerp.
  - Ghost material dimming: non-selected meshes dim to `opacity: 0.15` and `depthWrite: false`.
  - Glowing emissive wireframe outline on hover and active selection.
- **Exploded View & Layer Peeling**: Real-time slider controlling anatomical depth from Skin ➔ Muscle ➔ Viscera ➔ Skeleton.

### 3. Dynamic App Router Routing (`/[locale]/explorer/[species]/[system]`)
- **System Tree Navigator Sidebar (`SystemTreeNavigator.tsx`)**:
  - Bilingual live search (Latin NAV, English, Arabic).
  - Expandable tree view displaying all anatomical systems and organ counts.
- **Bottom Detail Drawer / Inspector Card (`OrganInspectorDrawer.tsx`)**:
  - Latin taxonomy name, English name, Arabic name.
  - Blood supply, innervation, physiological overview, and clinical pearls.
  - "Exit Isolation" button.

### 4. Bilingual Localization (Arabic RTL & English LTR)
- Dynamic bidirectional layout (`dir="rtl"` vs `dir="ltr"`).
- Cairo font for Arabic and Inter font for English.

---

## 🗂️ Project Directory Structure

```
vetanatomy-hub/
├── app/
│   ├── [locale]/
│   │   ├── explorer/[species]/[system]/
│   │   │   └── page.tsx          # Dynamic multi-species explorer route
│   │   ├── layout.tsx            # Locale wrapper
│   │   └── page.tsx              # Locale redirect
│   ├── layout.tsx                # Root layout with Cairo/Inter fonts & AppShell
│   ├── page.tsx                  # Dashboard with dual-pane 3D workstation
│   └── globals.css               # Medical dark theme & neon glow styling
├── components/
│   ├── 3d/
│   │   ├── VetCanvas.tsx         # Unified 3D dynamic multi-species viewer
│   │   ├── AnatomyViewer.tsx     # Three.js Canvas container
│   │   ├── CameraController.tsx  # Smooth camera transition hooks
│   │   ├── ModelStage.tsx        # Environmental lights & medical grid
│   │   ├── ProceduralAnimalModel.tsx # 3D model assembly
│   │   ├── OrganMesh.tsx         # Raycastable mesh with hover outline glow
│   │   └── ViewportControls.tsx  # Floating 3D HUD (explode, peel, xray, wireframe)
│   ├── explorer/
│   │   ├── ExplorerView.tsx      # Unified workstation view
│   │   ├── SpeciesHeaderNav.tsx  # 7-species navigation ribbon & clinical vitals
│   │   ├── SystemTreeNavigator.tsx# Tree view with trilingual quick search
│   │   └── OrganInspectorDrawer.tsx# Floating bottom drawer (Latin, blood, nerves)
│   ├── layout/
│   │   ├── AppShell.tsx          # LTR/RTL sync & dark/light theme
│   │   ├── Header.tsx            # Header with language switcher & route sync
│   │   └── TabNav.tsx            # Navigation tabs
│   ├── pharmacology/
│   │   └── PharmacologyModule.tsx# Live weight-based dosage calculator
│   ├── cases/
│   │   └── ClinicalCasesModule.tsx# Case studies, vitals, lab ranges & checklists
│   ├── quiz/
│   │   └── QuizModule.tsx        # 3D Pin-the-organ quiz & flashcards
│   └── glossary/
│       └── GlossaryModule.tsx    # Searchable NAV glossary
├── store/
│   └── useAnatomyStore.ts        # Zustand global state (organ, species, layer, i18n)
├── data/
│   ├── anatomyRegistry.ts        # Comprehensive 7-species database registry
│   ├── animals.ts                # Species profiles & normal vitals
│   ├── drugsData.ts              # Veterinary formulary with species dosage rates
│   ├── casesData.ts              # Clinical case studies & lab values
│   ├── quizzesData.ts            # 3D pin-the-organ questions & flashcards
│   └── glossaryData.ts           # Nomina Anatomica Veterinaria database
└── types/
    ├── anatomy.ts                # TypeScript interfaces (SpeciesId, OrganPart, etc.)
    ├── pharmacology.ts           # Veterinary formulary and dosage types
    ├── clinical.ts               # Patient vitals, lab results, and case types
    └── i18n.ts                   # Localization, quiz, and glossary types
```

---

## 🚀 Getting Started

### Development
```bash
npm run dev
```

### Production Build & Launch
```bash
npm run build
npm start
```
Open [http://localhost:3000](http://localhost:3000) or navigate directly to:
- English Equine: `http://localhost:3000/en/explorer/equine/cardiovascular`
- Arabic Camelid: `http://localhost:3000/ar/explorer/camelid/digestive`
