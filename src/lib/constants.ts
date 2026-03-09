import path from "node:path";

export const CONTENT_ROOT = path.join(process.cwd(), "content");

export const CONTENT_DIRECTORIES = {
  event: "events",
  culture: "cultures",
  person: "people",
  campaign: "campaigns",
  technology: "technology",
  place: "places",
  journal: "journal"
} as const;
