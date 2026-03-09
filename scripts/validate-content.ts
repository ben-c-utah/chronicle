import { getAllRecords } from "../src/lib/content";

try {
  const records = getAllRecords();
  console.log(`Validated ${records.length} Chronicle records.`);
} catch (error) {
  console.error("Content validation failed.");
  console.error(error);
  process.exit(1);
}
