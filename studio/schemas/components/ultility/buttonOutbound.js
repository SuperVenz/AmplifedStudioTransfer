export default {
  name: "buttonOutbound",
  title: "Out Bound Button",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "link",
      title: "Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
  ],
};
