/** @format */

import { getLatestCaseStudies } from "@/lib/mdx";
import CaseStudyCard from "@/components/shared/CaseStudyCard";

/**
 * UNLINK-GLOBAL | Latest Case Studies Section
 * แสดงผลบันทึกปฏิบัติการจริงล่าสุดเพื่อสร้าง Social Proof
 */
export default async function LatestCaseStudies() {
  const latestCases = await getLatestCaseStudies(3);

  return (
    <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {latestCases.map((study, index) => (
        <CaseStudyCard key={study.slug} study={study} priority={index < 2} />
      ))}
    </div>
  );
}
