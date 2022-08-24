import S from "@sanity/desk-tool/structure-builder";
import { DocumentIcon, EyeOpenIcon } from "@sanity/icons";
import { CharacterCount } from "../components/inputs/CharacterCount";
import { JsonView } from "../components/views/JsonView";
import { SocialMediaView } from "../components/views/SocialMediaView";

export default {
  name: "exhibitionPage",
  title: "Exhibition Page",
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
  views: [
    S.view.component(SocialMediaView).title("Preview").icon(EyeOpenIcon),
    S.view.component(JsonView).title("JSON").icon(DocumentIcon),
  ],
  fieldsets: [
    {
      name: "seoSet",
      title: "SEO",
    },
  ],
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      fieldset: "seoSet",
    },
    {
      name: "description",
      title: "Description",
      description:
        "A short description used by search engines and when shared on social media.",
      type: "text",
      inputComponent: CharacterCount,
      validation: (Rule) => {
        return Rule.max(150).warning(
          "Shorter is usually better for SEO purposes. Try to keep it under 150 characters."
        );
      },
      fieldset: "seoSet",
    },
    {
      name: "ogImage",
      title: "Open graph image",
      description:
        "An image used in link previews on social media. Recommended size: 1200x630 px.",
      type: "image",
      options: { hotspot: true },
      fieldset: "seoSet",
    },
  ],
};
