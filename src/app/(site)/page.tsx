import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import WorkGrid from "@/components/WorkGrid";
import {
  getSiteSettings,
  getFeaturedCaseStudies,
  DEFAULT_LOGO_TEXT,
  DEFAULT_NAV_LINKS,
} from "@/sanity/lib/data";

export default async function Home() {
  const [settings, featured] = await Promise.all([
    getSiteSettings(),
    getFeaturedCaseStudies(),
  ]);

  return (
    <>
      <Nav
        logoText={settings?.logoText ?? DEFAULT_LOGO_TEXT}
        links={settings?.navLinks ?? DEFAULT_NAV_LINKS}
      />
      <main>
        <Hero
          nameLine1={settings?.heroNameLine1 ?? "ROB"}
          nameLine2={settings?.heroNameLine2 ?? "KARPAVICIUS"}
          tagline={
            settings?.heroTagline ??
            "Senior product designer building considered, well-crafted digital products — from first principles to shipped detail."
          }
          scrollHint={settings?.heroScrollHint ?? "Scroll to explore"}
        />
        <WorkGrid
          caseStudies={featured.map((study) => ({
            title: study.title,
            tag: study.tag,
            href: `/work/${study.slug}`,
          }))}
        />
      </main>
    </>
  );
}
