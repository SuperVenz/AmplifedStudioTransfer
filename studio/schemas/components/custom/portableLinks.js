export default {
  name: "portableLinks",
  title: "Video Card",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Artist name",
      type: "string",
    },
    {
      name: "uri",
      title: "Url",
      type: "string",
    },
    {
      name: "portableText",
      title: "Article",
      type: "mainPortable",
      validation: (Rule) => Rule.required(),
    },
  ],
};
