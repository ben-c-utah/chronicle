import { getAllRecords } from "@/lib/content";
import { RecordCard } from "@/components/record-card";

export default function BrowsePage() {
  const records = getAllRecords();

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-4 text-3xl font-bold text-stone-900">Browse</h1>
      <div className="grid gap-4 md:grid-cols-2">
        {records.map((record) => (
          <RecordCard key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
}
