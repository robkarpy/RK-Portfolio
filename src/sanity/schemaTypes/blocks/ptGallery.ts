import { defineType, defineField, defineArrayMember } from "sanity";
import { ImagesIcon } from "@sanity/icons";

export const ptGallery = defineType({
  name: "ptGallery",
  title: "Gallery",
  type: "object",
  icon: ImagesIcon,
  fields: [
    defineField({
      name: "layout",
      title: "Layout",
      type: "string",
      options: {
        list: [
          { title: "Side by side", value: "side-by-side" },
          { title: "Stacked", value: "stacked" },
        ],
        layout: "radio",
      },
      initialValue: "side-by-side",
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      of: [
        defineArrayMember({
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({
              name: "alt",
              title: "Alternative text",
              type: "string",
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: "caption",
              title: "Caption",
              type: "string",
            }),
          ],
        }),
      ],
      validation: (rule) => rule.min(2).error("A gallery needs at least 2 images"),
    }),
  ],
  preview: {
    select: { media: "images.0", count: "images" },
    prepare({ media, count }) {
      return {
        title: `Gallery (${Array.isArray(count) ? count.length : 0} images)`,
        media,
      };
    },
  },
});
