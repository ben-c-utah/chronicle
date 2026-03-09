import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type ChronicleRecordType =
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
  directory: ChronicleRecordType;
  frontmatter: Record<string, unknown>;
}

const CONTENT_ROOT = path.join(process.cwd(), "content");

const CONTENT_DIRECTORIES: ChronicleRecordType[] = [
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

export function loadRecordsFromDirectory(
  directory: ChronicleRecordType,
): RawChronicleRecord[] {
  const directoryPath = path.join(CONTENT_ROOT, directory);
  const fileNames = getFilesInDirectory(directoryPath);

  return fileNames.map((fileName) => {
    const fullPath = path.join(directoryPath, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    const slug =
      typeof data.slug === "string" && data.slug.trim().length > 0
        ? data.slug
        : getSlugFromFileName(fileName);

    const title =
      typeof data.title === "string" && data.title.trim().length > 0
        ? data.title
        : slug;

    const id =
      typeof data.id === "string" && data.id.trim().length > 0
        ? data.id
        : `${directory}-${slug}`;

    return {
      id,
      recordType:
        typeof data.recordType === "string" ? data.recordType : directory,
      slug,
      title,
      content: content.trim(),
      sourcePath: fullPath,
      directory,
      frontmatter: data,
    };
  });
}

export function loadAllChronicleRecords(): RawChronicleRecord[] {
  return CONTENT_DIRECTORIES.flatMap((directory) =>
    loadRecordsFromDirectory(directory),
  );
}