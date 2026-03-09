import { getAllRecords, type ChronicleRecord } from "@/lib/records";

export interface ResolvedChronicleRecord extends ChronicleRecord {
  relatedCampaignRecords: ChronicleRecord[];
  relatedCultureRecords: ChronicleRecord[];
  relatedEventRecords: ChronicleRecord[];
  relatedPeopleRecords: ChronicleRecord[];
  relatedPlaceRecords: ChronicleRecord[];
  relatedTechnologyRecords: ChronicleRecord[];
}

function resolveIds(ids: string[], recordsById: Map<string, ChronicleRecord>) {
  return ids
    .map((id) => recordsById.get(id))
    .filter((record): record is ChronicleRecord => Boolean(record));
}

export function getAllResolvedRecords(): ResolvedChronicleRecord[] {
  const records = getAllRecords();
  const recordsById = new Map(records.map((record) => [record.id, record]));

  return records.map((record) => ({
    ...record,
    relatedCampaignRecords: resolveIds(record.relatedCampaigns, recordsById),
    relatedCultureRecords: resolveIds(record.relatedCultures, recordsById),
    relatedEventRecords: resolveIds(record.relatedEvents, recordsById),
    relatedPeopleRecords: resolveIds(record.relatedPeople, recordsById),
    relatedPlaceRecords: resolveIds(record.relatedPlaces, recordsById),
    relatedTechnologyRecords: resolveIds(
      record.relatedTechnologies,
      recordsById,
    ),
  }));
}

export function getResolvedRecordBySlug(
  directory: string,
  slug: string,
): ResolvedChronicleRecord | undefined {
  return getAllResolvedRecords().find(
    (record) => record.directory === directory && record.slug === slug,
  );
}