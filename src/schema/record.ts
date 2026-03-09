import { z } from "zod";

export const recordTypeSchema = z.enum([
  "campaign",
  "culture",
  "event",
  "journal",
  "person",
  "place",
  "technology",
]);

export const baseRecordSchema = z.object({
  id: z.string().min(1, "Record id is required"),
  recordType: recordTypeSchema,
  slug: z.string().min(1, "Record slug is required"),
  title: z.string().min(1, "Record title is required"),
});

export const relationshipArraySchema = z.array(z.string().min(1)).optional();

export const chronicleRecordSchema = baseRecordSchema.extend({
  year: z.number().int().optional(),
  latitude: z.number().optional(),
  longitude: z.number().optional(),
  relatedCampaigns: relationshipArraySchema,
  relatedCultures: relationshipArraySchema,
  relatedEvents: relationshipArraySchema,
  relatedPeople: relationshipArraySchema,
  relatedPlaces: relationshipArraySchema,
  relatedTechnologies: relationshipArraySchema,
});

export type ChronicleRecordFrontmatter = z.infer<typeof chronicleRecordSchema>;
export type ChronicleRecordType = z.infer<typeof recordTypeSchema>;