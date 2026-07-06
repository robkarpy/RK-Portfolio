import Nav from "@/components/Nav";
import { getSiteSettings, DEFAULT_LOGO_TEXT, DEFAULT_NAV_LINKS } from "@/sanity/lib/data";

export default async function Contact() {
  const settings = await getSiteSettings();
  const email = settings?.contactEmail ?? "hello@karpy.co";

  return (
    <>
      <Nav
        logoText={settings?.logoText ?? DEFAULT_LOGO_TEXT}
        links={settings?.navLinks ?? DEFAULT_NAV_LINKS}
      />
      <main className="mx-auto flex min-h-[70vh] max-w-3xl flex-col justify-center px-6 py-32">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-widest2 text-cloud/40">
          {settings?.contactEyebrow ?? "Contact"}
        </p>
        <h1 className="font-display text-4xl font-medium tracking-tightest sm:text-5xl">
          {settings?.contactHeading ?? "Let's talk about your project."}
        </h1>
        <a
          href={`mailto:${email}`}
          className="mt-10 inline-flex w-fit items-center gap-3 border border-reflex bg-reflex px-6 py-3 font-mono text-[11px] uppercase tracking-widest2 text-cloud transition-all duration-fast ease-standard hover:bg-reflex-mid hover:-translate-y-px"
        >
          {settings?.contactCtaLabel ?? "Get in touch"}
        </a>
      </main>
    </>
  );
}
