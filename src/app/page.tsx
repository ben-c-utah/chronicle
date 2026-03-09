import Link from "next/link";
import { loadAllChronicleRecords } from "@/lib/content-loader";

export default function HomePage() {
  const records = loadAllChronicleRecords();

  return (
    <main style={{ padding: "2rem" }}>
      <h1>Chronicle</h1>
      <p>Loaded records: {records.length}</p>

      <div style={{ display: "grid", gap: "1rem", marginTop: "2rem" }}>
        {records.map((record) => (
          <article
            key={record.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
            }}
          >
            <div style={{ fontSize: "0.8rem", opacity: 0.7 }}>
              {record.recordType}
            </div>
            <h2>{record.title}</h2>
            <p>Slug: {record.slug}</p>
            <p>ID: {record.id}</p>
            <Link href={`/records/${record.directory}/${record.slug}`}>
              Open record
            </Link>
          </article>
        ))}
      </div>
    </main>
  );
}