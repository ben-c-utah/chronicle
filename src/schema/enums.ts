export const RECORD_TYPES = [
  "event",
  "culture",
  "person",
  "campaign",
  "technology",
  "place",
  "journal"
] as const;

export type RecordType = (typeof RECORD_TYPES)[number];
