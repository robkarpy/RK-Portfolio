import { sanityFetch } from "./fetch";
import {
  SITE_SETTINGS_QUERY,
  FEATURED_CASE_STUDIES_QUERY,
  ALL_CASE_STUDIES_QUERY,
  CASE_STUDY_BY_SLUG_QUERY,
  CASE_STUDY_SLUGS_QUERY,
} from "./queries";

// Sanity project isn't connected yet (or the document hasn't been authored),
// so every reader falls back to `null`/`[]` instead of throwing and taking
// the whole page down with it.

export const DEFAULT_LOGO_TEXT = "KARPY";
export const DEFAULT_NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export async function getSiteSettings() {
  try {
    return await sanityFetch<SiteSettings | null>({
      query: SITE_SETTINGS_QUERY,
      tags: ["siteSettings"],
    });
  } catch {
    return null;
  }
}

export async function getFeaturedCaseStudies() {
  try {
    return await sanityFetch<CaseStudyCard[]>({
      query: FEATURED_CASE_STUDIES_QUERY,
      tags: ["caseStudy"],
    });
  } catch {
    return [];
  }
}

export async function getAllCaseStudies() {
  try {
    return await sanityFetch<CaseStudyCard[]>({
      query: ALL_CASE_STUDIES_QUERY,
      tags: ["caseStudy"],
    });
  } catch {
    return [];
  }
}

export async function getCaseStudyBySlug(slug: string) {
  try {
    return await sanityFetch<CaseStudyDetail | null>({
      query: CASE_STUDY_BY_SLUG_QUERY,
      params: { slug },
      tags: [`caseStudy:${slug}`, "caseStudy"],
    });
  } catch {
    return null;
  }
}

export async function getCaseStudySlugs() {
  try {
    return await sanityFetch<string[]>({ query: CASE_STUDY_SLUGS_QUERY, tags: ["caseStudy"] });
  } catch {
    return [];
  }
}

export type CaseStudyCard = {
  _id: string;
  title: string;
  tag: string;
  slug: string;
};

export type SanityImageAsset = {
  asset: {
    url: string;
    metadata: { lqip: string; dimensions: { width: number; height: number } };
  };
  alt: string;
  hotspot?: unknown;
  crop?: unknown;
};

export type CaseStudyDetail = {
  _id: string;
  title: string;
  tag: string;
  role?: string;
  year?: string;
  tools?: string[];
  liveUrl?: string;
  coverImage: SanityImageAsset;
  body: PortableTextBlockWithMedia[];
};

// Loosely typed until `npm run typegen` runs against a real project.
export type PortableTextBlockWithMedia = Record<string, unknown> & { _type: string; _key: string };

export type SiteSettings = {
  logoText: string;
  navLinks: { label: string; href: string }[];
  heroNameLine1: string;
  heroNameLine2?: string;
  heroTagline: string;
  heroScrollHint: string;
  aboutEyebrow?: string;
  aboutHeading: string;
  aboutBody?: PortableTextBlockWithMedia[];
  contactEyebrow?: string;
  contactHeading: string;
  contactEmail: string;
  contactCtaLabel: string;
  socials?: { platform: string; url: string }[];
};
