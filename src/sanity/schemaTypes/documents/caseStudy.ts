import { defineType, defineField, defineArrayMember } from "sanity";
import { CaseIcon } from "@sanity/icons";

export const caseStudy = defineType({
  name: "caseStudy",
  title: "Case study",
  type: "document",
  icon: CaseIcon,
  groups: [
    { name: "content", title: "Content", default: true },
    { name: "meta", title: "Meta" },
  ],
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      group: "content",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "content",
      options: { source: "title", maxLength: 96 },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "tag",
      title: "Tag",
      type: "string",
      group: "meta",
      description: "Short descriptor shown on the work grid, e.g. \"Product design · Web app\"",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
      group: "meta",
      description: "e.g. Lead product designer",
    }),
    defineField({
      name: "year",
      title: "Year",
      type: "string",
      group: "meta",
      description: "e.g. 2024 or 2023–2024",
    }),
    defineField({
      name: "tools",
      title: "Tools",
      type: "array",
      group: "meta",
      of: [defineArrayMember({ type: "string" })],
      options: { layout: "tags" },
    }),
    defineField({
      name: "liveUrl",
      title: "Live URL",
      type: "url",
      group: "meta",
      validation: (rule) => rule.uri({ scheme: ["http", "https"] }),
    }),
    defineField({
      name: "featured",
      title: "Featured on homepage",
      type: "boolean",
      group: "meta",
      initialValue: false,
    }),
    defineField({
      name: "order",
      title: "Order",
      type: "number",
      group: "meta",
      description: "Lower numbers appear first",
      validation: (rule) => rule.required().integer(),
    }),
    defineField({
      name: "coverImage",
      title: "Cover image",
      type: "image",
      group: "content",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alternative text",
          type: "string",
          validation: (rule) => rule.required(),
        }),
      ],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      group: "content",
      description:
        "Build the case study top to bottom. Use the Image button in the toolbar to drop a picture inline with its own caption, right where it belongs in the story.",
      of: [
        defineArrayMember({
          type: "block",
          styles: [
            { title: "Normal", value: "normal" },
            { title: "H2", value: "h2" },
            { title: "H3", value: "h3" },
          ],
          lists: [{ title: "Bullet", value: "bullet" }],
        }),
        defineArrayMember({ type: "ptImage" }),
        defineArrayMember({ type: "ptGallery" }),
        defineArrayMember({ type: "ptPullQuote" }),
        defineArrayMember({ type: "ptStatCallout" }),
      ],
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "tag", media: "coverImage" },
  },
});
