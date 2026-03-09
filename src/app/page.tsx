import Link from "next/link";
import { getAllRecords } from "@/lib/content";
import { RecordCard } from "@/components/record-card";

export default function HomePage() {
  const records = getAllRecords().slice(0, 3);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <section className="mb-4">
        <p className="text-sm uppercase tracking-wide text-stone-600">Chronicle</p>
        <h1 className="text-3xl font-bold text-stone-900">The Viking Age</h1>
        <p className="my-2 max-w-4xl text-stone-700">
          A historical companion platform for tabletop wargamers built around map discovery,
          chronological exploration, and richly linked records.
        </p>
        <div className="flex gap-4 text-sm">
          <Link href="/map" className="underline">Explore the Map</Link>
          <Link href="/timeline" className="underline">Follow the Timeline</Link>
          <Link href="/browse" className="underline">Browse the Chronicle</Link>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2">
        {records.map((record) => (
          <RecordCard key={record.id} record={record} />
        ))}
      </section>
    </div>
  );
}
