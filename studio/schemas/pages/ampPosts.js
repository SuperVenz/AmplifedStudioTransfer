export default {
  name: "ampPosts",
  title: "title",
  type: "document",
  fieldsets: [
    {
      name: "profile",
      title: "Team Member Section",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "sanityPageName",
      title: "Page Name",
      description: "Has no affect on website",
      type: "string",
    },
    {
      name: "content",
      title: "Main Post",
      description: "Title,Article,Youtube",
      type: "videoHeader",
    },
    {
      name: "profileTitle",
      title: "Title",
      description: "People in this project, etc",
      fieldset: "profile",
      type: "string",
    },
    {
      name: "profileRefs",
      title: "People in this Project",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "profilePage" }],
        },
      ],
      fieldset: "profile",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
};
