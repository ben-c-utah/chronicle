import type { FeatureCollection, Point } from "geojson";
import type { ChronicleRecord } from "@/types/records";

export function getMapFeatureCollection(records: ChronicleRecord[]): FeatureCollection<Point> {
  return {
    type: "FeatureCollection",
    features: records
      .filter((record) =>
        ("latitude" in record && typeof record.latitude === "number") &&
        ("longitude" in record && typeof record.longitude === "number")
      )
      .map((record) => ({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [record.longitude as number, record.latitude as number]
        },
        properties: {
          id: record.id,
          title: record.title,
          slug: record.slug,
          recordType: record.recordType
        }
      }))
  };
}
