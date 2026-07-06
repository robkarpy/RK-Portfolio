import { notFound } from "next/navigation";
import { PortableText } from "next-sanity";

import Nav from "@/components/Nav";
import SanityImage from "@/components/SanityImage";
import CaseStudyReveal from "@/components/CaseStudyReveal";
import { caseStudyComponents } from "@/components/PortableTextComponents";
import {
  getCaseStudyBySlug,
  getCaseStudySlugs,
  getSiteSettings,
  DEFAULT_LOGO_TEXT,
  DEFAULT_NAV_LINKS,
} from "@/sanity/lib/data";

export async function generateStaticParams() {
  const slugs = await getCaseStudySlugs();
  return slugs.map((slug) => ({ slug }));
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [caseStudy, settings] = await Promise.all([
    getCaseStudyBySlug(slug),
    getSiteSettings(),
  ]);

  if (!caseStudy) notFound();

  const meta = [caseStudy.role, caseStudy.year, ...(caseStudy.tools ?? [])].filter(Boolean);

  return (
    <>
      <Nav
        logoText={settings?.logoText ?? DEFAULT_LOGO_TEXT}
        links={settings?.navLinks ?? DEFAULT_NAV_LINKS}
      />
      <main className="mx-auto max-w-3xl px-6 py-24">
        <CaseStudyReveal>
          <p className="mb-6 font-mono text-[11px] uppercase tracking-widest2 text-cloud/40">
            {caseStudy.tag}
          </p>
          <h1 className="font-display text-4xl font-semibold tracking-tightest sm:text-5xl">
            {caseStudy.title}
          </h1>
          {meta.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-widest2 text-cloud/50">
              {meta.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          )}
          {caseStudy.liveUrl && (
            <a
              href={caseStudy.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-8 inline-flex w-fit items-center gap-3 border border-reflex bg-reflex px-6 py-3 font-mono text-[11px] uppercase tracking-widest2 text-cloud transition-all duration-fast ease-standard hover:bg-reflex-mid hover:-translate-y-px"
            >
              View live site
            </a>
          )}
        </CaseStudyReveal>

        <CaseStudyReveal className="mt-16">
          <SanityImage value={caseStudy.coverImage} width={1200} priority />
        </CaseStudyReveal>

        <div className="mt-16">
          <PortableText value={caseStudy.body} components={caseStudyComponents} />
        </div>
      </main>
    </>
  );
}
