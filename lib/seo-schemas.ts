/** @format */

import { siteConfig } from "@/constants/site-config";
import {
  WithContext,
  Person,
  Organization,
  WebSite,
  BlogPosting,
  BreadcrumbList,
  Service as ServiceSchema,
  FAQPage,
  LocalBusiness,
} from "schema-dts";
import { Service, CaseStudy } from "@unlink/shared/types";

/**
 * 👤 Enhanced Person Identity Schema (E-E-A-T Optimized)
 */
export const getPersonSchema = (): WithContext<Person> => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteConfig.url}/#founder`,
    name: siteConfig.founder.name,
    alternateName: [
      siteConfig.founder.nameTh,
      siteConfig.founder.alias,
      "9mza",
      "นายเอ็มซ่ามากส์",
      "Alongkorn Yomkerd",
    ],
    description: siteConfig.founder.description,
    image: `${siteConfig.url}/branding/founder-avatar.webp`,
    jobTitle: siteConfig.founder.role,
    url: siteConfig.founder.url,
    sameAs: siteConfig.founder.sameAs,
    worksFor: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
  } as const;
};

/**
 * 🏢 Enhanced Organization Schema (Institutional Authority)
 */
export const getOrganizationSchema = (): WithContext<Organization> => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: "AEMDEVWEB Strategic Intelligence Unit",
    url: siteConfig.url,
    logo: `${siteConfig.url}/branding/logo.png`,
    description: siteConfig.description,
    slogan: siteConfig.company.slogan,
    founder: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#founder`,
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: siteConfig.contact.lineUrl,
      email: siteConfig.contact.email,
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "TH",
    },
    areaServed: "TH",
    sameAs: [
      "https://www.aemdevweb.com",
      siteConfig.links.facebook,
      siteConfig.links.twitter,
    ],
  } as const;
};

/**
 * 💻 WebSite Schema
 */
export const getWebSiteSchema = (): WithContext<WebSite> => {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    url: siteConfig.url,
    name: siteConfig.name,
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
    copyrightHolder: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
  } as const;
};

/**
 * 📝 Enhanced BlogPosting Schema
 */
export const getBlogPostSchema = (data: {
  title: string;
  description: string;
  image: string;
  datePublished: string;
  authorName?: string;
  url: string;
}): WithContext<BlogPosting> => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: data.title,
    description: data.description,
    image: data.image,
    datePublished: data.datePublished,
    author: {
      "@type": "Person",
      "@id": `${siteConfig.url}/#founder`,
      name: data.authorName || siteConfig.founder.name,
    },
    publisher: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": data.url,
    },
  } as const;
};

/**
 * 🧬 Breadcrumb Schema
 */
export const getBreadcrumbSchema = (
  items: { name: string; item: string }[],
): WithContext<BreadcrumbList> => {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.item}`,
    })),
  } as const;
};

/**
 * 🛡️ Service Schema
 */
export const getServiceSchema = (
  service: Service,
): WithContext<ServiceSchema> => {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.title,
    description: service.description || service.shortDescription,
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: "Worldwide",
  } as const;
};

/**
 * 📋 FAQ Schema
 */
export const getFaqSchema = (
  faqs: { question: string; answer: string }[],
): WithContext<FAQPage> => {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  } as const;
};

/**
 * 🎯 Case Study Schema (as BlogPosting)
 */
export const getCaseStudySchema = (
  study: CaseStudy,
): WithContext<BlogPosting> => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: study.title,
    description: study.excerpt || study.description,
    datePublished: study.date,
    author: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
    },
  } as const;
};

/**
 * 📍 Local Business Schema
 */
export const getLocalBusinessSchema = (): WithContext<LocalBusiness> => {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    image: `${siteConfig.url}${siteConfig.ogImage}`,
    address: {
      "@type": "PostalAddress",
      addressCountry: "TH",
    },
  } as const;
};

/**
 * 🆔 Identity Specific Schemas
 */
export const getIdentityPersonSchema = (data: {
  name: string;
  jobTitle?: string;
  description?: string;
  url: string;
  image?: string;
  externalUrls?: string[];
}): WithContext<Person> => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: data.name,
    jobTitle: data.jobTitle || "Verified Specialist",
    description: data.description,
    url: data.url,
    image: data.image || `${siteConfig.url}/branding/icon.png`,
    sameAs: data.externalUrls || [],
  } as const;
};

export const getIdentityOrganizationSchema = (data: {
  name: string;
  description?: string;
  url: string;
  externalUrl?: string[];
}): WithContext<Organization> => {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    description: data.description,
    url: data.url,
    sameAs: data.externalUrl || [],
  } as const;
};
