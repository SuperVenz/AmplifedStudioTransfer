export default {
  name: "videoLink",
  title: "Video Article ",
  type: "object",
  fields: [
    {
      name: "videoContent",
      title: "Video Card",
      type: "videoHeader",
    },
    {
      name: "buttontitle",
      title: "Button Title",
      type: "string",
    },
    {
      name: "postRef",
      title: "Article Reference",
      type: "reference",
      to: [{ type: "ampPosts" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
