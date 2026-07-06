import type { SchemaTypeDefinition } from "sanity";

import { caseStudy } from "./documents/caseStudy";
import { siteSettings } from "./documents/siteSettings";
import { ptImage } from "./blocks/ptImage";
import { ptGallery } from "./blocks/ptGallery";
import { ptPullQuote } from "./blocks/ptPullQuote";
import { ptStatCallout } from "./blocks/ptStatCallout";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [caseStudy, siteSettings, ptImage, ptGallery, ptPullQuote, ptStatCallout],
};
