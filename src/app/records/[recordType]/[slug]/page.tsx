import Link from "next/link";
import { notFound } from "next/navigation";
import { getResolvedRecordBySlug } from "@/lib/relationships";

interface RecordPageProps {
  params: {
    recordType: string;
    slug: string;
  };
}

export default function RecordPage({ params }: RecordPageProps) {
  const record = getResolvedRecordBySlug(params.recordType, params.slug);

  if (!record) {
    notFound();
  }

  return (
    <main style={{ padding: "2rem", maxWidth: "900px", margin: "0 auto" }}>
      <Link href="/">← Back to Chronicle</Link>

      <div style={{ marginTop: "1.5rem" }}>
        <div style={{ fontSize: "0.85rem", opacity: 0.7 }}>
          {record.recordType}
        </div>
        <h1>{record.title}</h1>

        <div style={{ margin: "1rem 0" }}>
          <p>
            <strong>ID:</strong> {record.id}
          </p>
          <p>
            <strong>Slug:</strong> {record.slug}
          </p>
          <p>
            <strong>Directory:</strong> {record.directory}
          </p>
          {record.year !== undefined && (
            <p>
              <strong>Year:</strong> {record.year}
            </p>
          )}
          {record.latitude !== undefined && record.longitude !== undefined && (
            <p>
              <strong>Coordinates:</strong> {record.latitude}, {record.longitude}
            </p>
          )}
        </div>

        <article style={{ marginTop: "2rem", lineHeight: 1.7 }}>
          {record.content.split("\n").map((paragraph, index) =>
            paragraph.trim() ? <p key={index}>{paragraph}</p> : null,
          )}
        </article>

<section style={{ marginTop: "2rem" }}>
  <h2>Relationships</h2>

  <p>
    <strong>Related Cultures:</strong>{" "}
    {record.relatedCultureRecords.length > 0
      ? record.relatedCultureRecords.map((related, index) => (
          <span key={related.id}>
            {index > 0 ? ", " : ""}
            <Link href={`/records/${related.directory}/${related.slug}`}>
              {related.title}
            </Link>
          </span>
        ))
      : "None"}
  </p>

  <p>
    <strong>Related Places:</strong>{" "}
    {record.relatedPlaceRecords.length > 0
      ? record.relatedPlaceRecords.map((related, index) => (
          <span key={related.id}>
            {index > 0 ? ", " : ""}
            <Link href={`/records/${related.directory}/${related.slug}`}>
              {related.title}
            </Link>
          </span>
        ))
      : "None"}
  </p>

  <p>
    <strong>Related People:</strong>{" "}
    {record.relatedPeopleRecords.length > 0
      ? record.relatedPeopleRecords.map((related, index) => (
          <span key={related.id}>
            {index > 0 ? ", " : ""}
            <Link href={`/records/${related.directory}/${related.slug}`}>
              {related.title}
            </Link>
          </span>
        ))
      : "None"}
  </p>

  <p>
    <strong>Related Events:</strong>{" "}
    {record.relatedEventRecords.length > 0
      ? record.relatedEventRecords.map((related, index) => (
          <span key={related.id}>
            {index > 0 ? ", " : ""}
            <Link href={`/records/${related.directory}/${related.slug}`}>
              {related.title}
            </Link>
          </span>
        ))
      : "None"}
  </p>

  <p>
    <strong>Related Campaigns:</strong>{" "}
    {record.relatedCampaignRecords.length > 0
      ? record.relatedCampaignRecords.map((related, index) => (
          <span key={related.id}>
            {index > 0 ? ", " : ""}
            <Link href={`/records/${related.directory}/${related.slug}`}>
              {related.title}
            </Link>
          </span>
        ))
      : "None"}
  </p>

  <p>
    <strong>Related Technologies:</strong>{" "}
    {record.relatedTechnologyRecords.length > 0
      ? record.relatedTechnologyRecords.map((related, index) => (
          <span key={related.id}>
            {index > 0 ? ", " : ""}
            <Link href={`/records/${related.directory}/${related.slug}`}>
              {related.title}
            </Link>
          </span>
        ))
      : "None"}
  </p>
</section>
      </div>
    </main>
  );
}