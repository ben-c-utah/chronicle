import type { ChronicleRecord } from "@/types/records";

export function getTimelineEvents(records: ChronicleRecord[]) {
  return records
    .filter((record) => record.recordType === "event")
    .map((record) => ({
      id: record.id,
      slug: record.slug,
      title: record.title,
      year: "year" in record ? record.year : undefined,
      summary: record.summary
    }))
    .sort((a, b) => (a.year ?? 0) - (b.year ?? 0));
}
