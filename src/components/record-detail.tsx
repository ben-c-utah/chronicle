import { resolveRelationships } from "@/lib/relationships";
import type { ChronicleRecord } from "@/types/records";
import Link from "next/link";

export function RecordDetail({
  record,
  allRecords
}: {
  record: ChronicleRecord;
  allRecords: ChronicleRecord[];
}) {
  const related = resolveRelationships(record, allRecords);

  return (
    <div className="space-y-8">
      <section className="rounded-2xl border border-stone-300 bg-white p-6 shadow-sm">
        <div className="mb-2 text-xs uppercase tracking-wide text-stone-500">
          {record.recordType}
        </div>
        <h1 className="mb-3 text-3xl font-bold text-stone-900">{record.title}</h1>
        <dl className="grid gap-2 text-sm text-stone-700 sm:grid-cols-2">
          <div><dt className="font-semibold">Record ID</dt><dd>{record.id}</dd></div>
          {"year" in record && record.year ? <div><dt className="font-semibold">Year</dt><dd>{record.year}</dd></div> : null}
          {"region" in record && record.region ? <div><dt className="font-semibold">Region</dt><dd>{record.region}</dd></div> : null}
          {"latitude" in record && typeof record.latitude === "number" ? <div><dt className="font-semibold">Latitude</dt><dd>{record.latitude}</dd></div> : null}
          {"longitude" in record && typeof record.longitude === "number" ? <div><dt className="font-semibold">Longitude</dt><dd>{record.longitude}</dd></div> : null}
        </dl>
      </section>

      <section className="rounded-2xl border border-stone-300 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-stone-900">Chronicle Narrative</h2>
        <div className="prose prose-stone max-w-none whitespace-pre-wrap text-stone-800">
          {record.body}
        </div>
      </section>

      <section className="rounded-2xl border border-stone-300 bg-white p-6 shadow-sm">
        <h2 className="mb-4 text-xl font-semibold text-stone-900">Related Records</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {Object.entries(related).map(([label, items]) => (
            <div key={label}>
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-stone-600">{label}</h3>
              {items.length ? (
                <ul className="space-y-2">
                  {items.map((item) => (
                    <li key={item.id}>
                      <Link href={`/records/${item.recordType}/${item.slug}`} className="underline">
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-sm text-stone-500">No linked records yet.</p>
              )}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
