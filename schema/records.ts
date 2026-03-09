import { z } from "zod";
import { BaseRecordSchema } from "./base";

export const EventSchema = BaseRecordSchema.extend({
  recordType: z.literal("event"),
  year: z.coerce.number().int(),
  startYear: z.coerce.number().int().optional(),
  endYear: z.coerce.number().int().optional(),
  latitude: z.coerce.number().optional(),
  longitude: z.coerce.number().optional(),
  region: z.string().optional(),
  eventType: z.string().optional(),
  outcome: z.string().optional()
});

export const CultureSchema = BaseRecordSchema.extend({
  recordType: z.literal("culture"),
  era: z.string().optional(),
  region: z.string().optional()
});

export const PersonSchema = BaseRecordSchema.extend({
  recordType: z.literal("person"),
  era: z.string().optional(),
  culture: z.string().optional(),
  birthYear: z.coerce.number().int().optional(),
  deathYear: z.coerce.number().int().optional()
});

export const CampaignSchema = BaseRecordSchema.extend({
  recordType: z.literal("campaign"),
  startYear: z.coerce.number().int().optional(),
  endYear: z.coerce.number().int().optional(),
  region: z.string().optional()
});

export const TechnologySchema = BaseRecordSchema.extend({
  recordType: z.literal("technology"),
  era: z.string().optional(),
  region: z.string().optional()
});

export const PlaceSchema = BaseRecordSchema.extend({
  recordType: z.literal("place"),
  latitude: z.coerce.number().optional(),
  longitude: z.coerce.number().optional(),
  region: z.string().optional()
});

export const JournalSchema = BaseRecordSchema.extend({
  recordType: z.literal("journal"),
  publishedAt: z.string().optional(),
  videoGallery: z.array(z.object({
    platform: z.enum(["youtube", "vimeo"]),
    url: z.string().url(),
    title: z.string().optional()
  })).default([])
});

export const RecordSchema = z.discriminatedUnion("recordType", [
  EventSchema,
  CultureSchema,
  PersonSchema,
  CampaignSchema,
  TechnologySchema,
  PlaceSchema,
  JournalSchema
]);

export type ChronicleRecordFrontmatter = z.infer<typeof RecordSchema>;
