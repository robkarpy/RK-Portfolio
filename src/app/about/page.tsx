import Nav from "@/components/Nav";

export default function About() {
  return (
    <>
      <Nav />
      <main className="mx-auto max-w-3xl px-6 py-32">
        <p className="mb-8 font-mono text-[11px] uppercase tracking-widest2 text-cloud/40">
          About
        </p>
        <p className="font-display text-3xl font-medium leading-snug tracking-tightest sm:text-4xl">
          I always ask why before opening Figma.
        </p>
        <div className="mt-10 space-y-6 font-body text-lg leading-relaxed text-cloud/70">
          <p>
            Replace this with your real about copy — the Version B draft
            with the "collectibles side hustle that's got well out of
            hand" line is already sitting in an earlier session if you want
            to pull it back in.
          </p>
        </div>
      </main>
    </>
  );
}
