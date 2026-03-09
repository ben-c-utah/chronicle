import { z } from "zod";
import { RECORD_TYPES } from "./enums";

export const RelationshipIdsSchema = z.array(z.string().min(1)).default([]);

export const BaseRecordSchema = z.object({
  id: z.string().min(1).regex(/^[a-z0-9-]+$/),
  recordType: z.enum(RECORD_TYPES),
  title: z.string().min(1),
  summary: z.string().optional(),
  tags: z.array(z.string()).default([]),
  relatedEvents: RelationshipIdsSchema,
  relatedCultures: RelationshipIdsSchema,
  relatedPeople: RelationshipIdsSchema,
  relatedCampaigns: RelationshipIdsSchema,
  relatedTechnology: RelationshipIdsSchema,
  relatedPlaces: RelationshipIdsSchema
});

export type BaseRecordFrontmatter = z.infer<typeof BaseRecordSchema>;
