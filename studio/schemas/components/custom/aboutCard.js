export default {
  name: "aboutCard",
  title: "About Card",
  type: "object",
  fields: [
    {
      name: "content",
      title: "Profile Card",
      type: "picArticle",
    },
    {
      name: "profileReference",
      title: "Team Member",
      type: "reference",
      to: [{ type: "profilePage" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
