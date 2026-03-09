import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { CONTENT_DIRECTORIES, CONTENT_ROOT } from "./constants";
import { RecordSchema, type RecordType } from "@/schema";
import type { ChronicleRecord } from "@/types/records";

function readDirectoryFiles(dirPath: string): string[] {
  if (!fs.existsSync(dirPath)) return [];
  return fs.readdirSync(dirPath)
    .filter((file) => file.endsWith(".md") || file.endsWith(".mdx"))
    .map((file) => path.join(dirPath, file));
}

function parseRecordFile(filePath: string): ChronicleRecord {
  const raw = fs.readFileSync(filePath, "utf8");
  const parsed = matter(raw);
  const frontmatter = RecordSchema.parse(parsed.data);
  const slug = path.basename(filePath).replace(/\.(md|mdx)$/, "");

  return {
    ...frontmatter,
    slug,
    body: parsed.content.trim(),
    filePath
  };
}

export function getAllRecords(): ChronicleRecord[] {
  const allFiles = Object.values(CONTENT_DIRECTORIES)
    .flatMap((folder) => readDirectoryFiles(path.join(CONTENT_ROOT, folder)));

  return allFiles.map(parseRecordFile);
}

export function getRecordsByType(recordType: RecordType): ChronicleRecord[] {
  return getAllRecords().filter((record) => record.recordType === recordType);
}

export function getRecordBySlug(recordType: RecordType, slug: string): ChronicleRecord | null {
  return getRecordsByType(recordType).find((record) => record.slug === slug) ?? null;
}

export function getRecordById(recordId: string): ChronicleRecord | null {
  return getAllRecords().find((record) => record.id === recordId) ?? null;
}
