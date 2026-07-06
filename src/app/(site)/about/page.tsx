import { PortableText } from "next-sanity";

import Nav from "@/components/Nav";
import { getSiteSettings, DEFAULT_LOGO_TEXT, DEFAULT_NAV_LINKS } from "@/sanity/lib/data";

export default async function About() {
  const settings = await getSiteSettings();

  return (
    <>
      <Nav
        logoText={settings?.logoText ?? DEFAULT_LOGO_TEXT}
        links={settings?.navLinks ?? DEFAULT_NAV_LINKS}
      />
      <main className="mx-auto max-w-3xl px-6 py-32">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-widest2 text-cloud/40">
          {settings?.aboutEyebrow ?? "About"}
        </p>
        <p className="font-display text-3xl font-medium leading-snug tracking-tightest sm:text-4xl">
          {settings?.aboutHeading ?? "I always ask why before opening Figma."}
        </p>
        <div className="mt-10 space-y-6 font-body text-lg leading-relaxed text-cloud/70">
          {settings?.aboutBody ? (
            <PortableText value={settings.aboutBody} />
          ) : (
            <p>
              Replace this with your real about copy — the Version B draft
              with the &quot;collectibles side hustle that&apos;s got well out
              of hand&quot; line is already sitting in an earlier session if
              you want to pull it back in.
            </p>
          )}
        </div>
      </main>
    </>
  );
}
