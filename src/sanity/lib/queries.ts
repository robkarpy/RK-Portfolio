import { defineQuery } from "next-sanity";

const CASE_STUDY_CARD_PROJECTION = /* groq */ `
  _id,
  title,
  tag,
  "slug": slug.current
`;

export const SITE_SETTINGS_QUERY = defineQuery(`
  *[_id == "siteSettings"][0]
`);

export const FEATURED_CASE_STUDIES_QUERY = defineQuery(`
  *[_type == "caseStudy" && featured == true] | order(order asc) {
    ${CASE_STUDY_CARD_PROJECTION}
  }
`);

export const ALL_CASE_STUDIES_QUERY = defineQuery(`
  *[_type == "caseStudy"] | order(order asc) {
    ${CASE_STUDY_CARD_PROJECTION}
  }
`);

export const CASE_STUDY_SLUGS_QUERY = defineQuery(`
  *[_type == "caseStudy" && defined(slug.current)].slug.current
`);

export const CASE_STUDY_BY_SLUG_QUERY = defineQuery(`
  *[_type == "caseStudy" && slug.current == $slug][0]{
    _id,
    title,
    tag,
    role,
    year,
    tools,
    liveUrl,
    coverImage{
      asset->{ url, metadata { lqip, dimensions } },
      alt,
      hotspot,
      crop
    },
    gallery[]{
      asset->{ url, metadata { lqip, dimensions } },
      alt,
      hotspot,
      crop
    },
    body[]{
      ...,
      _type == "ptImage" => {
        ...,
        image{
          asset->{ url, metadata { lqip, dimensions } },
          hotspot,
          crop
        }
      },
      _type == "ptGallery" => {
        ...,
        images[]{
          asset->{ url, metadata { lqip, dimensions } },
          alt,
          hotspot,
          crop
        }
      }
    }
  }
`);
