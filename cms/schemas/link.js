export default {
  title: "Link",
  name: "link",
  type: "object",
  fields: [
    {
      title: "Link text",
      name: "linkText",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Href value",
      description: "An URL or another valid href value.",
      name: "href",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "linkText",
      subtitle: "linkUrl",
    },
  },
};
