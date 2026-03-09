import { loadAllChronicleRecords } from "@/lib/content-loader";

export interface ChronicleRecord {
  id: string;
  recordType: string;
  directory: string;
  slug: string;
  title: string;
  content: string;
  year?: number;
  latitude?: number;
  longitude?: number;
  relatedCampaigns: string[];
  relatedCultures: string[];
  relatedEvents: string[];
  relatedPeople: string[];
  relatedPlaces: string[];
  relatedTechnologies: string[];
}

function toArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value.filter((item): item is string => typeof item === "string");
}

export function getAllRecords(): ChronicleRecord[] {
  const rawRecords = loadAllChronicleRecords();

  return rawRecords.map((record) => ({
    id: record.id,
    recordType: record.recordType,
    directory: record.directory,
    slug: record.slug,
    title: record.title,
    content: record.content,
    year: record.frontmatter.year,
    latitude: record.frontmatter.latitude,
    longitude: record.frontmatter.longitude,
    relatedCampaigns: toArray(record.frontmatter.relatedCampaigns),
    relatedCultures: toArray(record.frontmatter.relatedCultures),
    relatedEvents: toArray(record.frontmatter.relatedEvents),
    relatedPeople: toArray(record.frontmatter.relatedPeople),
    relatedPlaces: toArray(record.frontmatter.relatedPlaces),
    relatedTechnologies: toArray(record.frontmatter.relatedTechnologies),
  }));
}

export function getRecordBySlug(
  directory: string,
  slug: string,
): ChronicleRecord | undefined {
  return getAllRecords().find(
    (record) => record.directory === directory && record.slug === slug,
  );
}