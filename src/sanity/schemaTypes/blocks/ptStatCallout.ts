import { defineType, defineField, defineArrayMember } from "sanity";
import { BarChartIcon } from "@sanity/icons";

export const ptStatCallout = defineType({
  name: "ptStatCallout",
  title: "Stat callout",
  type: "object",
  icon: BarChartIcon,
  fields: [
    defineField({
      name: "stats",
      title: "Stats",
      type: "array",
      of: [
        defineArrayMember({
          type: "object",
          name: "stat",
          fields: [
            defineField({
              name: "value",
              title: "Value",
              type: "string",
              description: "e.g. 40% or 2.3x",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "label",
              title: "Label",
              type: "string",
              description: "e.g. faster checkout",
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: { title: "value", subtitle: "label" },
          },
        }),
      ],
      validation: (rule) => rule.min(1).max(4),
    }),
  ],
  preview: {
    select: { stats: "stats" },
    prepare({ stats }) {
      const count = Array.isArray(stats) ? stats.length : 0;
      return { title: `Stat callout (${count} stat${count === 1 ? "" : "s"})` };
    },
  },
});
