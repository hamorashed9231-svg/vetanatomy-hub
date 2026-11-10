'use server';

import { 
  getSpeciesSystemData as getSpeciesSystemDataService,
  getOrganByMeshId as getOrganByMeshIdService,
  getExamQuestions as getExamQuestionsService,
  searchOrgansGlobal as searchOrgansGlobalService,
  getComparativeOrganData as getComparativeOrganDataService,
  SpeciesSystemResult as SpeciesSystemResultType,
  ExamQuestionItem as ExamQuestionItemType,
  GlobalSearchResult as GlobalSearchResultType,
  ComparativeOrganPayload as ComparativeOrganPayloadType,
  ComparativeOrganRecord as ComparativeOrganRecordType
} from '@/lib/anatomyService';

export type SpeciesSystemResult = SpeciesSystemResultType;
export type ExamQuestionItem = ExamQuestionItemType;
export type GlobalSearchResult = GlobalSearchResultType;
export type ComparativeOrganPayload = ComparativeOrganPayloadType;
export type ComparativeOrganRecord = ComparativeOrganRecordType;

/**
 * Server Action: Fetch SpeciesSystem join record and all its associated Organs
 */
export async function getSpeciesSystemData(
  speciesSlug: string,
  systemSlug: string
): Promise<SpeciesSystemResult | null> {
  return getSpeciesSystemDataService(speciesSlug, systemSlug);
}

/**
 * Server Action: Fetch Organ details by its 3D Mesh Identifier
 */
export async function getOrganByMeshId(meshId: string) {
  return getOrganByMeshIdService(meshId);
}

/**
 * Server Action: Fetch Interactive 3D Practical Exam Questions
 */
export async function getExamQuestions(speciesSlug: string, systemSlug: string): Promise<ExamQuestionItem[]> {
  return getExamQuestionsService(speciesSlug, systemSlug);
}

/**
 * Server Action: Fast Command-K Global Search across Arabic, English, and Latin (NAV)
 */
export async function searchOrgansGlobal(query: string): Promise<GlobalSearchResult[]> {
  return searchOrgansGlobalService(query);
}

/**
 * Server Action: Fetch comparative organ payloads in a single parallel query from Neon PostgreSQL
 */
export async function getComparativeOrganData(
  organIdA: string,
  organIdB: string
): Promise<ComparativeOrganPayload> {
  return getComparativeOrganDataService(organIdA, organIdB);
}
