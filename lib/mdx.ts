import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {
  Service,
  CaseStudy,
  BlogPost,
  BlogPostFrontmatter,
} from "@unlink/shared/types";
import { SERVICES } from "@/constants/services-registry";

/**
 * @REBRANDED: UNLINK-GLOBAL Intelligence Engine
 * 🛡️ PRODUCTION ADAPTATION: ปรับปรุงการหาโฟลเดอร์ Content ให้เสถียรใน Vercel
 */

const getProjectRoot = (): string => {
  const cwd = process.cwd();
  if (fs.existsSync(path.join(cwd, "content"))) return cwd;
  const standalonePath = path.join(cwd, ".next", "standalone");
  if (fs.existsSync(path.join(standalonePath, "content")))
    return standalonePath;
  const currentDir = path.resolve(__dirname);
  const rootFromDir = currentDir.split(".next")[0];
  if (rootFromDir && fs.existsSync(path.join(rootFromDir, "content")))
    return rootFromDir;
  return cwd;
};

function getContentPath(): string {
  const root = getProjectRoot();
  const contentPath = path.join(root, "content");
  return contentPath;
}

export type ContentCategory = "blog" | "case-studies" | "services";

function resolveImagePath(img: string | undefined, category: string): string {
  if (!img) {
    return category === "services"
      ? "/images/services/default.webp"
      : "/images/blog/digital-ghost.webp";
  }
  if (img.startsWith("/") || img.startsWith("http")) return img;
  const cleanPath = img.replace(/^images\//, "");
  if (category === "case-studies") {
    if (cleanPath.startsWith("cases/")) return `/images/${cleanPath}`;
    return `/images/cases/${cleanPath}`;
  }
  if (cleanPath.startsWith(`${category}/`)) return `/images/${cleanPath}`;
  return `/images/${category}/${cleanPath}`;
}

function getFilesRecursive(dir: string): string[] {
  if (!fs.existsSync(dir)) return [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const files = entries.flatMap((entry) => {
    const res = path.join(dir, entry.name);
    return entry.isDirectory() ? getFilesRecursive(res) : [res];
  });
  return files.filter((f: string) => f.endsWith(".mdx"));
}

export function getAllServices(): Promise<Service[]> {
  return Promise.resolve(SERVICES);
}

export function getServiceBySlug(slug: string): Promise<Service | null> {
  try {
    const service = SERVICES.find((s) => s.slug === slug);
    if (!service) return Promise.resolve(null);
    if (service.type === "interactive") return Promise.resolve(service);
    const CONTENT_PATH = getContentPath();
    const servicesDir = path.join(CONTENT_PATH, "services");
    const files = getFilesRecursive(servicesDir);
    const filePath = files.find((f) => path.basename(f, ".mdx") === slug);
    if (filePath) {
      const { content } = matter(fs.readFileSync(filePath, "utf8"));
      return Promise.resolve({ ...service, description: content });
    }
    return Promise.resolve(service);
  } catch (err) {
    console.error(`[MDX] Failed to load service by slug: ${slug}`, err);
    return Promise.resolve(null);
  }
}

function safeString(value: unknown, fallback: string): string {
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean")
    return String(value);
  return fallback;
}

export function getAllCaseStudies(): Promise<CaseStudy[]> {
  try {
    const CONTENT_PATH = getContentPath();
    const dir = path.join(CONTENT_PATH, "case-studies");
    const files = getFilesRecursive(dir);
    const studies = files.map((filePath) => {
      try {
        const source = fs.readFileSync(filePath, "utf8");
        const { data } = matter(source);
        const slug = path.basename(filePath, ".mdx");
        const fm = data as Record<string, unknown>;
        const priceInfo = (fm.priceInfo ?? {}) as Record<string, unknown>;
        const metadata = (fm.metadata ?? {}) as Record<string, unknown>;
        return {
          id: safeString(fm.id, slug),
          slug,
          title: safeString(fm.title, "Classified Operation"),
          category: safeString(fm.category, "Field Record"),
          shortDescription: safeString(
            fm.shortDescription ?? fm.excerpt ?? fm.description,
            "",
          ),
          excerpt: safeString(fm.excerpt ?? fm.description, ""),
          image: resolveImagePath(
            fm.image as string | undefined,
            "case-studies",
          ),
          date: safeString(fm.date, "2026-03-14"),
          priority: fm.priority ? 1 : 0,
          client: safeString(fm.client, "VIP"),
          outcome: safeString(fm.outcome, "CLEANSED"),
          iconName: safeString(fm.iconName, "Shield"),
          features: Array.isArray(fm.features) ? (fm.features as string[]) : [],
          priceInfo: {
            startingAt: safeString(priceInfo.startingAt, "0"),
            unit: safeString(priceInfo.unit, "Project"),
            model: safeString(priceInfo.model, "Success-Based"),
          },
          metadata: {
            defaultTitle: safeString(metadata.defaultTitle ?? fm.title, ""),
            defaultDescription: safeString(
              metadata.defaultDescription ?? fm.description,
              "",
            ),
            keywords: Array.isArray(metadata.keywords)
              ? (metadata.keywords as string[])
              : [],
          },
        } as CaseStudy;
      } catch {
        return null;
      }
    });
    const result = studies
      .filter((s): s is CaseStudy => s !== null)
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    return Promise.resolve(result);
  } catch {
    return Promise.resolve([]);
  }
}

export function getAllBlogPosts(): Promise<BlogPostFrontmatter[]> {
  try {
    const CONTENT_PATH = getContentPath();
    const dir = path.join(CONTENT_PATH, "blog");
    const files = getFilesRecursive(dir);
    const posts = files.map((filePath) => {
      try {
        const source = fs.readFileSync(filePath, "utf8");
        const { data } = matter(source);
        const slug = path.basename(filePath, ".mdx");
        const fm = data as Record<string, unknown>;
        const priceInfo = (fm.priceInfo ?? {}) as Record<string, unknown>;
        const metadata = (fm.metadata ?? {}) as Record<string, unknown>;
        return {
          id: safeString(fm.id, slug),
          slug,
          title: safeString(fm.title, "Strategic Intelligence"),
          category: safeString(fm.category, "Protocol"),
          shortDescription: safeString(
            fm.shortDescription ?? fm.description,
            "",
          ),
          description: safeString(fm.description, ""),
          image: resolveImagePath(fm.image as string | undefined, "blog"),
          date: safeString(fm.date, "2026-03-14"),
          author: safeString(fm.author, "UNLINK-TH"),
          author_id: fm.author_id ? safeString(fm.author_id, "") : undefined,
          iconName: safeString(fm.iconName, "BookOpen"),
          features: Array.isArray(fm.features) ? (fm.features as string[]) : [],
          priceInfo: {
            startingAt: safeString(priceInfo.startingAt, "0"),
            unit: safeString(priceInfo.unit, "Insight"),
            model: safeString(priceInfo.model, "Standard"),
          },
          metadata: {
            defaultTitle: safeString(metadata.defaultTitle ?? fm.title, ""),
            defaultDescription: safeString(
              metadata.defaultDescription ?? fm.description,
              "",
            ),
            keywords: Array.isArray(metadata.keywords)
              ? (metadata.keywords as string[])
              : [],
          },
        } as BlogPostFrontmatter;
      } catch {
        return null;
      }
    });
    return Promise.resolve(
      posts
        .filter((p): p is BlogPostFrontmatter => p !== null)
        .sort(
          (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
        ),
    );
  } catch {
    return Promise.resolve([]);
  }
}

export function getBlogPostBySlug(slug: string): Promise<BlogPost | null> {
  const CONTENT_PATH = getContentPath();
  const dir = path.join(CONTENT_PATH, "blog");
  const files = getFilesRecursive(dir);
  const filePath = files.find((f) => path.basename(f, ".mdx") === slug);
  if (!filePath) return Promise.resolve(null);
  const { data: rawData, content } = matter(fs.readFileSync(filePath, "utf8"));
  const data = rawData as Record<string, unknown>;
  return Promise.resolve({
    ...(data as unknown as BlogPostFrontmatter),
    content,
    slug,
    image: resolveImagePath(
      (data.image ?? data.thumbnail) as string | undefined,
      "blog",
    ),
  } as BlogPost);
}

export function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  const CONTENT_PATH = getContentPath();
  const dir = path.join(CONTENT_PATH, "case-studies");
  const files = getFilesRecursive(dir);
  const filePath = files.find((f) => path.basename(f, ".mdx") === slug);
  if (!filePath) return Promise.resolve(null);
  const { data: rawData, content } = matter(fs.readFileSync(filePath, "utf8"));
  const data = rawData as Record<string, unknown>;
  return Promise.resolve({
    ...(data as unknown as CaseStudy),
    slug,
    content,
    image: resolveImagePath(
      (data.image ?? data.thumbnail) as string | undefined,
      "case-studies",
    ),
  } as CaseStudy);
}

export async function getAllPosts<T>(category: ContentCategory): Promise<T[]> {
  if (category === "blog") return (await getAllBlogPosts()) as unknown as T[];
  if (category === "services")
    return (await getAllServices()) as unknown as T[];
  if (category === "case-studies")
    return (await getAllCaseStudies()) as unknown as T[];
  return [];
}

export const getLatestCaseStudies = async (
  limit: number,
): Promise<CaseStudy[]> => {
  const all = await getAllCaseStudies();
  return all.slice(0, limit);
};
