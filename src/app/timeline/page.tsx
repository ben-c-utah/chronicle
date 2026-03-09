import { getAllRecords } from "@/lib/content";
import { TimelineList } from "@/features/timeline/timeline-list";

export default function TimelinePage() {
  const records = getAllRecords();

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <h1 className="mb-4 text-3xl font-bold text-stone-900">Timeline</h1>
      <TimelineList records={records} />
    </div>
  );
}
