import { getAllRecords } from "@/lib/content";
import { MapView } from "@/features/map/map-view";

export default function MapPage() {
  const records = getAllRecords();

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-4 text-3xl font-bold text-stone-900">Map</h1>
      <MapView records={records} />
    </div>
  );
}
