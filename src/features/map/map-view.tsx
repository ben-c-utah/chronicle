"use client";

import { useMemo } from "react";
import type { ChronicleRecord } from "@/types/records";

export function MapView({ records }: { records: ChronicleRecord[] }) {
  const items = useMemo(
    () =>
      records.filter(
        (record) =>
          ("latitude" in record && typeof record.latitude === "number") &&
          ("longitude" in record && typeof record.longitude === "number")
      ),
    [records]
  );

  return (
    <div className="rounded-2xl border border-dashed border-stone-400 bg-stone-100 p-6">
      <h2 className="mb-3 text-xl font-semibold text-stone-900">Map Placeholder</h2>
      <p className="mb-4 text-sm text-stone-700">
        This is where the Mapbox GL JS map should be mounted. The loader and record pipeline are already in place.
      </p>
      <div className="space-y-2 text-sm text-stone-800">
        {items.map((record) => (
          <div key={record.id} className="rounded-lg bg-white p-3 shadow-sm">
            <div className="font-medium">{record.title}</div>
            <div className="text-stone-600">
              {record.recordType} · {String(record.latitude)}, {String(record.longitude)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
