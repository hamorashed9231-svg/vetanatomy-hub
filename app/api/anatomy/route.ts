import { NextRequest, NextResponse } from 'next/server';
import { getSpeciesSystemData, getOrganByMeshId } from '@/lib/anatomyService';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const species = searchParams.get('species');
  const system = searchParams.get('system');
  const meshId = searchParams.get('meshId');

  if (meshId) {
    const organ = await getOrganByMeshId(meshId);
    if (!organ) {
      return NextResponse.json({ error: 'Organ mesh not found' }, { status: 404 });
    }
    return NextResponse.json({ organ });
  }

  if (species && system) {
    const data = await getSpeciesSystemData(species, system);
    if (!data) {
      return NextResponse.json({ error: 'Species system record not found' }, { status: 404 });
    }
    return NextResponse.json(data);
  }

  return NextResponse.json(
    { error: 'Missing query parameters. Provide either (species and system) or (meshId).' },
    { status: 400 }
  );
}
