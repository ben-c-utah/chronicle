import Link from "next/link";
import type { ChronicleRecord } from "@/types/records";

export function RecordCard({ record }: { record: ChronicleRecord }) {
  return (
    <article className="rounded-xl border border-stone-300 bg-white p-4 shadow-sm">
      <div className="mb-2 text-xs uppercase tracking-wide text-stone-500">
        {record.recordType}
      </div>
      <h3 className="mb-2 text-lg font-semibold text-stone-900">{record.title}</h3>
      {record.summary ? <p className="mb-3 text-sm text-stone-700">{record.summary}</p> : null}
      <Link
        href={`/records/${record.recordType}/${record.slug}`}
        className="text-sm font-medium text-stone-900 underline"
      >
        Open record
      </Link>
    </article>
  );
}
