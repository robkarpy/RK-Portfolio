import { defineType, defineField, defineArrayMember } from "sanity";
import { CogIcon } from "@sanity/icons";

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  icon: CogIcon,
  groups: [
    { name: "nav", title: "Nav", default: true },
    { name: "hero", title: "Hero" },
    { name: "about", title: "About" },
    { name: "contact", title: "Contact" },
  ],
  fields: [
    defineField({
      name: "logoText",
      title: "Logo text",
      type: "string",
      group: "nav",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "navLinks",
      title: "Nav links",
      type: "array",
      group: "nav",
      of: [
        defineArrayMember({
          type: "object",
          name: "navLink",
          fields: [
            defineField({ name: "label", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "href", type: "string", validation: (rule) => rule.required() }),
          ],
          preview: {
            select: { title: "label", subtitle: "href" },
          },
        }),
      ],
    }),
    defineField({
      name: "heroNameLine1",
      title: "Hero name — line 1",
      type: "string",
      group: "hero",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroNameLine2",
      title: "Hero name — line 2",
      type: "string",
      group: "hero",
    }),
    defineField({
      name: "heroTagline",
      title: "Hero tagline",
      type: "text",
      rows: 3,
      group: "hero",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heroScrollHint",
      title: "Hero scroll hint",
      type: "string",
      group: "hero",
      initialValue: "Scroll to explore",
    }),
    defineField({
      name: "aboutEyebrow",
      title: "About eyebrow label",
      type: "string",
      group: "about",
      initialValue: "About",
    }),
    defineField({
      name: "aboutHeading",
      title: "About heading",
      type: "string",
      group: "about",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "aboutBody",
      title: "About body",
      type: "array",
      group: "about",
      of: [defineArrayMember({ type: "block", styles: [{ title: "Normal", value: "normal" }] })],
    }),
    defineField({
      name: "contactEyebrow",
      title: "Contact eyebrow label",
      type: "string",
      group: "contact",
      initialValue: "Contact",
    }),
    defineField({
      name: "contactHeading",
      title: "Contact heading",
      type: "string",
      group: "contact",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "contactEmail",
      title: "Contact email",
      type: "string",
      group: "contact",
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: "contactCtaLabel",
      title: "Contact CTA label",
      type: "string",
      group: "contact",
      initialValue: "Get in touch",
    }),
    defineField({
      name: "socials",
      title: "Social links",
      type: "array",
      group: "contact",
      of: [
        defineArrayMember({
          type: "object",
          name: "social",
          fields: [
            defineField({ name: "platform", type: "string", validation: (rule) => rule.required() }),
            defineField({ name: "url", type: "url", validation: (rule) => rule.required() }),
          ],
          preview: {
            select: { title: "platform", subtitle: "url" },
          },
        }),
      ],
    }),
  ],
  preview: {
    prepare() {
      return { title: "Site settings" };
    },
  },
});
