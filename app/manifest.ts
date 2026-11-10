import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'VetAnatomy Hub | منصة التشريح البيطري التفاعلي',
    short_name: 'VetAnatomy',
    description: 'Unified 3D Multi-Species Veterinary Anatomy, Clinical Pharmacology & Spaced-Repetition Study Platform',
    start_url: '/',
    display: 'standalone',
    background_color: '#090D16',
    theme_color: '#00F0FF',
    orientation: 'any',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
    categories: ['education', 'medical', 'productivity'],
  };
}
