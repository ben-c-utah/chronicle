import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import {
  chronicleRecordSchema,
  type ChronicleRecordFrontmatter,
} from "@/schema/record";

export type ChronicleDirectory =
  | "campaigns"
  | "cultures"
  | "events"
  | "journal"
  | "people"
  | "places"
  | "technologies";

export interface RawChronicleRecord {
  id: string;
  recordType: string;
  slug: string;
  title: string;
  content: string;
  sourcePath: string;
  directory: ChronicleDirectory;
  frontmatter: ChronicleRecordFrontmatter;
}

const CONTENT_ROOT = path.join(process.cwd(), "content");

const CONTENT_DIRECTORIES: ChronicleDirectory[] = [
  "campaigns",
  "cultures",
  "events",
  "journal",
  "people",
  "places",
  "technologies",
];

function isMdxFile(fileName: string): boolean {
  return fileName.endsWith(".mdx") || fileName.endsWith(".md");
}

function getSlugFromFileName(fileName: string): string {
  return fileName.replace(/\.mdx?$/, "");
}

function getFilesInDirectory(directoryPath: string): string[] {
  if (!fs.existsSync(directoryPath)) {
    return [];
  }

  return fs
    .readdirSync(directoryPath)
    .filter((fileName) => isMdxFile(fileName));
}

function validateFrontmatter(
  data: Record<string, unknown>,
  filePath: string,
  fallbackSlug: string,
): ChronicleRecordFrontmatter {
  const normalizedData = {
    ...data,
    slug:
      typeof data.slug === "string" && data.slug.trim().length > 0
        ? data.slug
        : fallbackSlug,
  };

  const result = chronicleRecordSchema.safeParse(normalizedData);

  if (!result.success) {
    const message = result.error.issues
      .map((issue) => `${issue.path.join(".")}: ${issue.message}`)
      .join("; ");

    throw new Error(`Invalid Chronicle record in "${filePath}": ${message}`);
  }

  return result.data;
}

export function loadRecordsFromDirectory(
  directory: ChronicleDirectory,
): RawChronicleRecord[] {
  const directoryPath = path.join(CONTENT_ROOT, directory);
  const fileNames = getFilesInDirectory(directoryPath);

  return fileNames.map((fileName) => {
    const fullPath = path.join(directoryPath, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const fallbackSlug = getSlugFromFileName(fileName);
    const frontmatter = validateFrontmatter(
      data as Record<string, unknown>,
      fullPath,
      fallbackSlug,
    );

    return {
      id: frontmatter.id,
      recordType: frontmatter.recordType,
      slug: frontmatter.slug,
      title: frontmatter.title,
      content: content.trim(),
      sourcePath: fullPath,
      directory,
      frontmatter,
    };
  });
}

export function loadAllChronicleRecords(): RawChronicleRecord[] {
  return CONTENT_DIRECTORIES.flatMap((directory) =>
    loadRecordsFromDirectory(directory),
  );
}