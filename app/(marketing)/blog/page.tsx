/** @format */

import { BookOpen } from "lucide-react";
import JsonLd from "@/components/shared/JsonLd";
import { getBreadcrumbSchema } from "@/lib/seo-schemas";
import SectionHeader from "@/components/shared/SectionHeader";

export const metadata = {
  title: "Insights & Protocols | UNLINK-GLOBAL",
  description:
    "ทำความเข้าใจกลไกของโลกดิจิทัล เพื่อป้องกันและแก้ไขปัญหาชื่อเสียงอย่างยั่งยืน",
};

export default async function BlogPage() {
  const breadcrumbs = [
    { name: "Home", item: "/" },
    { name: "Blog", item: "/blog" },
  ];

  return (
    <div className="pb-24">
      <JsonLd data={getBreadcrumbSchema(breadcrumbs)} />

      <header className="bg-muted/10 border-border/50 border-b py-24">
        <div className="container">
          <SectionHeader
            badge={
              <>
                <BookOpen className="h-4 w-4" />
                <span>Reputation Intelligence Insights</span>
              </>
            }
            title="Knowledge"
            titleHighlight="& Authority"
            description="ทำความเข้าใจกลไกของโลกดิจิทัล เพื่อป้องกันและแก้ไขปัญหาชื่อเสียงอย่างยั่งยืน"
            className="mb-0"
          />
        </div>
      </header>
    </div>
  );
}
