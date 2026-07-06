import Nav from "@/components/Nav";
import WorkGrid from "@/components/WorkGrid";
import {
  getSiteSettings,
  getAllCaseStudies,
  DEFAULT_LOGO_TEXT,
  DEFAULT_NAV_LINKS,
} from "@/sanity/lib/data";

export default async function Work() {
  const [settings, caseStudies] = await Promise.all([
    getSiteSettings(),
    getAllCaseStudies(),
  ]);

  return (
    <>
      <Nav
        logoText={settings?.logoText ?? DEFAULT_LOGO_TEXT}
        links={settings?.navLinks ?? DEFAULT_NAV_LINKS}
      />
      <main className="pt-16">
        <WorkGrid
          caseStudies={caseStudies.map((study) => ({
            title: study.title,
            tag: study.tag,
            href: `/work/${study.slug}`,
          }))}
        />
      </main>
    </>
  );
}
