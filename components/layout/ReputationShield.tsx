/** @format */

import { siteConfig } from "@/constants/site-config";
import JsonLd from "@/components/shared/JsonLd";
import { WithContext, Thing } from "schema-dts";

export default function ReputationShield() {
  const { founder, developer, url, name, fullName, description, ogImage } =
    siteConfig;

  // ป้องกัน undefined สำหรับ developer
  const devUrl = developer?.url || "https://www.aemdevweb.com";
  const devName = developer?.name || "AemDevWeb";

  const reputationSchema: WithContext<Thing>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": "https://me.aemdevweb.com/#person",
      name: founder.nameTh,
      alternateName: [founder.name, founder.nickname],
      jobTitle: founder.role,
      url: founder.url,
      image: `${url}${ogImage}`,
      description: `Founder of UNLINK-GLOBAL and AemDevWeb. Expert in Data Architecture and Digital Reputation.`,
      sameAs: [...(founder.sameAs || []), devUrl, url],
      worksFor: {
        "@type": "Organization",
        name: "AemDevWeb",
      },
    } as WithContext<Thing>,
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${url}/#organization`,
      name,
      alternateName: fullName,
      url,
      logo: {
        "@type": "ImageObject",
        url: `${url}${ogImage}`,
      },
      description,
      founder: { "@id": "https://me.aemdevweb.com/#person" },
      knowsAbout: [
        "Digital Reputation Management",
        "Cyber Security",
        "Data Privacy",
        "SEO Engineering",
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.contact.phone,
        contactType: "customer service",
        areaServed: "TH",
        availableLanguage: ["Thai", "English"],
      },
    } as WithContext<Thing>,
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${url}/#website`,
      url,
      name,
      publisher: { "@id": `${url}/#organization` },
      creator: { "@id": "https://me.aemdevweb.com/#person" },
      maintainer: {
        "@type": "Organization",
        "@id": `${devUrl}/#organization`,
        name: devName,
        url: devUrl,
      },
    } as WithContext<Thing>,
  ];

  return <JsonLd data={reputationSchema} />;
}
