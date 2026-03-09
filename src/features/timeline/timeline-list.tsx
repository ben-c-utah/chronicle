import Link from "next/link";
import { getTimelineEvents } from "@/lib/timeline";
import type { ChronicleRecord } from "@/types/records";

export function TimelineList({ records }: { records: ChronicleRecord[] }) {
  const items = getTimelineEvents(records);

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <article key={item.id} className="rounded-xl border border-stone-300 bg-white p-4 shadow-sm">
          <div className="mb-1 text-sm font-semibold text-stone-600">{item.year}</div>
          <h2 className="text-lg font-semibold text-stone-900">{item.title}</h2>
          {item.summary ? <p className="my-2 text-sm text-stone-700">{item.summary}</p> : null}
          <Link href={`/records/event/${item.slug}`} className="text-sm underline">
            Open event
          </Link>
        </article>
      ))}
    </div>
  );
}
