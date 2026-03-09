import type { ChronicleRecordFrontmatter } from "@/schema";

export type ChronicleRecord = ChronicleRecordFrontmatter & {
  slug: string;
  body: string;
  filePath: string;
};

export type RelationshipBuckets = {
  relatedEvents: ChronicleRecord[];
  relatedCultures: ChronicleRecord[];
  relatedPeople: ChronicleRecord[];
  relatedCampaigns: ChronicleRecord[];
  relatedTechnology: ChronicleRecord[];
  relatedPlaces: ChronicleRecord[];
};
