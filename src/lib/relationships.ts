import type { ChronicleRecord, RelationshipBuckets } from "@/types/records";

const keys = [
  "relatedEvents",
  "relatedCultures",
  "relatedPeople",
  "relatedCampaigns",
  "relatedTechnology",
  "relatedPlaces"
] as const;

export function buildRecordIndex(records: ChronicleRecord[]) {
  return new Map(records.map((record) => [record.id, record]));
}

export function resolveRelationships(record: ChronicleRecord, allRecords: ChronicleRecord[]): RelationshipBuckets {
  const index = buildRecordIndex(allRecords);

  return Object.fromEntries(
    keys.map((key) => [
      key,
      (record[key] ?? [])
        .map((relatedId) => index.get(relatedId))
        .filter(Boolean)
    ])
  ) as RelationshipBuckets;
}
