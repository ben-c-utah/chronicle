import { notFound } from "next/navigation";
import { getAllRecords, getRecordBySlug } from "@/lib/content";
import { RecordDetail } from "@/components/record-detail";
import type { RecordType } from "@/schema";

type Params = {
  recordType: RecordType;
  slug: string;
};

export function generateStaticParams() {
  return getAllRecords().map((record) => ({
    recordType: record.recordType,
    slug: record.slug
  }));
}

export default async function RecordPage({
  params
}: {
  params: Promise<Params>;
}) {
  const { recordType, slug } = await params;
  const record = getRecordBySlug(recordType, slug);

  if (!record) notFound();

  return (
    <div className="mx-auto max-w-4xl px-6 py-10">
      <RecordDetail record={record} allRecords={getAllRecords()} />
    </div>
  );
}
