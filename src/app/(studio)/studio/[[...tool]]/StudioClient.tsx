"use client";

import dynamic from "next/dynamic";

import config from "../../../../../sanity.config";

// The Sanity Studio is a client-only app; server-rendering it in the production
// build crashes (React Compiler `useMemoCache` null). Load it browser-side only.
const NextStudio = dynamic(
  () => import("next-sanity/studio").then((m) => m.NextStudio),
  { ssr: false }
);

export default function StudioClient() {
  return <NextStudio config={config} />;
}
