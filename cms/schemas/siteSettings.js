import S from "@sanity/desk-tool/structure-builder";
import { CharacterCount } from "../components/inputs/CharacterCount";
import { JsonView } from "../components/views/JsonView";
import { SocialMediaView } from "../components/views/SocialMediaView";
import { CogIcon, DocumentIcon, EyeOpenIcon } from "@sanity/icons";

export default {
  name: "siteSettings",
  title: "Site settings",
  type: "document",
  icon: CogIcon,
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
  __experimental_actions: ["create", "update", /*'delete',*/ "publish"],
  views: [
    S.view.component(SocialMediaView).title("Preview").icon(EyeOpenIcon),
    S.view.component(JsonView).title("JSON").icon(DocumentIcon),
  ],
  fields: [
    {
      name: "title",
      description: "The title of the website",
      title: "Title",
      type: "string",
    },
    {
      name: "description",
      title: "SEO description",
      type: "text",
      description:
        "A short description used by search engines and when shared on social media.",
      inputComponent: CharacterCount,
      validation: (Rule) =>
        Rule.max(150).warning(
          "Shorter is usually better for SEO purposes. Try to keep it under 150 characters."
        ),
    },
    {
      name: "ogImage",
      description:
        "An image used in link previews on social media. Recommended size: 1200x630px.",
      title: "Open graph image",
      type: "image",
      options: { hotspot: true },
    },
    {
      name: "aboutUs",
      title: "About us",
      description: "A short text used in the about section.",
      type: "text",
    },
    {
      name: "aboutUsCta",
      description: "The CTA link in the about section.",
      title: "About us CTA",
      type: "link",
    },
    {
      name: "footerLinks",
      description: "A list of links displayed in the footer.",
      title: "Footer links",
      type: "array",
      of: [{ type: "link" }],
    },
  ],
};
