import S from "@sanity/desk-tool/structure-builder";
import { DocumentIcon } from "@sanity/icons";
import { JsonView } from "../components/views/JsonView";

export default {
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  preview: {
    select: {
      title: "title",
    },
    prepare(selection) {
      const { title } = selection;
      return {
        title: title,
      };
    },
  },
  __experimental_actions: [/*"create"*/ "update", /*'delete',*/ "publish"],
  views: [S.view.component(JsonView).title("JSON").icon(DocumentIcon)],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "footerLinks",
      title: "Footer links",
      description: "A list of links displayed in the footer.",
      type: "array",
      of: [{ type: "link" }],
    },
  ],
};
