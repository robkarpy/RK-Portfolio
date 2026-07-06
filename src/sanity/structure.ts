import type { StructureResolver } from "sanity/structure";
import { CogIcon, CaseIcon } from "@sanity/icons";

const SINGLETONS = ["siteSettings"];

export const structure: StructureResolver = (S) =>
  S.list()
    .title("Content")
    .items([
      S.listItem()
        .title("Site settings")
        .icon(CogIcon)
        .child(
          S.document().schemaType("siteSettings").documentId("siteSettings").title("Site settings")
        ),

      S.divider(),

      S.listItem()
        .title("Case studies")
        .icon(CaseIcon)
        .child(
          S.documentTypeList("caseStudy").title("Case studies").defaultOrdering([
            { field: "order", direction: "asc" },
          ])
        ),

      S.divider(),

      ...S.documentTypeListItems().filter(
        (listItem) => !SINGLETONS.includes(listItem.getId() as string) && listItem.getId() !== "caseStudy"
      ),
    ]);
