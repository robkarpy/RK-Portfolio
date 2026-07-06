import type { PortableTextComponents } from "next-sanity";

import SanityImage from "@/components/SanityImage";
import CaseStudyReveal from "@/components/CaseStudyReveal";
import type { SanityImageAsset } from "@/sanity/lib/data";

type PtImageValue = { image: SanityImageAsset; alt: string; caption?: string };
type PtGalleryValue = { layout?: "side-by-side" | "stacked"; images: SanityImageAsset[] };
type PtPullQuoteValue = { quote: string; attribution?: string };
type PtStatCalloutValue = { stats: { _key: string; value: string; label: string }[] };

export const caseStudyComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="mt-16 mb-6 font-display text-3xl font-medium tracking-tightest">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="mt-12 mb-4 font-display text-2xl font-medium tracking-tightest">
        {children}
      </h3>
    ),
    normal: ({ children }) => (
      <p className="mb-6 font-body text-lg leading-relaxed text-cloud/70">{children}</p>
    ),
  },
  types: {
    ptImage: ({ value }: { value: PtImageValue }) => (
      <CaseStudyReveal className="my-12">
        <figure>
          <SanityImage value={{ ...value.image, alt: value.alt }} width={1200} />
          {value.caption && (
            <figcaption className="mt-3 font-mono text-[11px] uppercase tracking-widest2 text-cloud/40">
              {value.caption}
            </figcaption>
          )}
        </figure>
      </CaseStudyReveal>
    ),
    ptGallery: ({ value }: { value: PtGalleryValue }) => (
      <CaseStudyReveal className="my-12">
        <div
          className={`grid gap-px bg-grid-line ${
            value.layout === "stacked" ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"
          }`}
        >
          {value.images.map((image, i) => (
            <div key={i} className="bg-dark-lift">
              <SanityImage value={image} width={800} />
            </div>
          ))}
        </div>
      </CaseStudyReveal>
    ),
    ptPullQuote: ({ value }: { value: PtPullQuoteValue }) => (
      <CaseStudyReveal className="my-16 border-l-2 border-reflex pl-8">
        <p className="font-display text-2xl font-medium leading-snug tracking-tightest text-periwinkle sm:text-3xl">
          &ldquo;{value.quote}&rdquo;
        </p>
        {value.attribution && (
          <p className="mt-4 font-mono text-[11px] uppercase tracking-widest2 text-cloud/40">
            {value.attribution}
          </p>
        )}
      </CaseStudyReveal>
    ),
    ptStatCallout: ({ value }: { value: PtStatCalloutValue }) => (
      <CaseStudyReveal className="my-16 grid grid-cols-2 gap-px bg-grid-line sm:grid-cols-4">
        {value.stats.map((stat) => (
          <div key={stat._key} className="bg-dark-lift p-6">
            <p className="font-display text-3xl font-semibold tracking-tightest text-cloud">
              {stat.value}
            </p>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-widest2 text-cloud/40">
              {stat.label}
            </p>
          </div>
        ))}
      </CaseStudyReveal>
    ),
  },
};
