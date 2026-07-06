import { defineType, defineField } from "sanity";
import { BlockquoteIcon } from "@sanity/icons";

export const ptPullQuote = defineType({
  name: "ptPullQuote",
  title: "Pull quote",
  type: "object",
  icon: BlockquoteIcon,
  fields: [
    defineField({
      name: "quote",
      title: "Quote",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "attribution",
      title: "Attribution",
      type: "string",
      description: "e.g. a stakeholder name and role",
    }),
  ],
  preview: {
    select: { title: "quote", subtitle: "attribution" },
  },
});
