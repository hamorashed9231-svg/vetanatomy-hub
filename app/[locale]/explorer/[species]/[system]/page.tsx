import { notFound } from 'next/navigation';
import { ExplorerView } from '../../../../../components/explorer/ExplorerView';
import { SpeciesId, AnatomicalSystemId, Locale } from '../../../../../types/anatomy';
import { SPECIES_REGISTRY, SYSTEMS_REGISTRY } from '../../../../../data/anatomyRegistry';
import { getSpeciesSystemData } from '../../../../actions/anatomy';

interface PageProps {
  params: Promise<{
    locale: string;
    species: string;
    system: string;
  }>;
  searchParams?: Promise<{
    focus?: string;
  }>;
}

export default async function DynamicExplorerPage({ params, searchParams }: PageProps) {
  const { locale, species, system } = await params;
  const search = searchParams ? await searchParams : undefined;
  const focusMeshId = search?.focus;

  // Validate locale
  const validLocale: Locale = locale === 'ar' ? 'ar' : 'en';

  // Validate species
  const validSpecies = (species in SPECIES_REGISTRY ? species : 'equine') as SpeciesId;

  // Validate system
  const validSystem = (
    SYSTEMS_REGISTRY.some((s) => s.id === system) ? system : 'cardiovascular'
  ) as AnatomicalSystemId;

  // Server Action: Fetch SpeciesSystem join record and all its associated Organs from Prisma DB
  const dbData = await getSpeciesSystemData(validSpecies, validSystem);

  return (
    <ExplorerView
      locale={validLocale}
      species={validSpecies}
      system={validSystem}
      dbData={dbData}
      focusMeshId={focusMeshId}
    />
  );
}
