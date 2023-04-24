export default {
  name: "seo",
  title: "SEO",
  type: "object",
  fields: [
    {
      name: "keywords",
      type: "array",
      title: "Keywords",
      description: "Add keywords that describes your event.",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
        validation: (Rule) => Rule.required(),
      },
    },
    {
      name: "pageTitle",
      title: "Page Title",
      description: "Title for tab and url",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "seo.pageTitle",
        slugify: (input) =>
          input.toLowerCase().replace(/\s+/g, "-").slice(0, 200),
      },
    },
    {
      title: "SEO Description",
      name: "description",
      type: "text",
      description: "page description for search engines",
      validation: (Rule) => Rule.required(),
    },
  ],
};
