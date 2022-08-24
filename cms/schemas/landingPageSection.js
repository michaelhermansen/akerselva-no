import S from "@sanity/desk-tool/structure-builder";
import { DocumentIcon } from "@sanity/icons";
import { kebabCase } from "lodash";
import { FiLayout } from "react-icons/fi";
import { JsonView } from "../components/views/JsonView";
import conditionallyRequired from "../utils/conditionallyRequired";
import { isUniqueAcrossAllDocuments } from "../utils/isUniqueAcrossAllDocuments";

export default {
  name: "landingPageSection",
  type: "document",
  title: "Page section",
  icon: FiLayout,
  views: [S.view.component(JsonView).title("JSON").icon(DocumentIcon)],
  fieldsets: [
    {
      name: "navigationSet",
      title: "Navigation",
      description: `Add a navigation link to this section.`,
    },
  ],
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "string",
    },
    {
      title: "Add to navigation",
      name: "addToNavigation",
      type: "boolean",
      fieldset: "navigationSet",
    },
    {
      title: "Navigation title",
      name: "navigationTitle",
      type: "string",
      fieldset: "navigationSet",
      validation: (Rule) => conditionallyRequired(Rule, "addToNavigation"),
      readOnly: ({ document }) => !document.addToNavigation,
    },
    {
      title: "Section ID",
      name: "sectionId",
      type: "slug",
      fieldset: "navigationSet",
      validation: (Rule) => conditionallyRequired(Rule, "addToNavigation"),
      readOnly: ({ document }) => !document.addToNavigation,
      options: {
        source: "navigationTitle",
        isUnique: isUniqueAcrossAllDocuments,
        slugify: kebabCase,
      },
    },
    {
      name: "image",
      title: "Image",
      description:
        "A thumbnail image for the section. Recommended size: 1200x630 px.",
      type: "image",
      options: { hotspot: true },
    },
    {
      title: "Image text",
      description: "Text that will be displayed on top of the image",
      name: "imageText",
      type: "string",
    },
    {
      title: "Description",
      name: "description",
      type: "text",
      rows: 5,
    },
    {
      name: "ctaLink",
      title: "CTA link",
      type: "link",
    },
  ],
  initialValue: {
    addToNavigation: false,
  },
};
