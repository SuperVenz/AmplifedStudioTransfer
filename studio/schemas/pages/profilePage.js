export default {
  name: "profilePage",
  title: "Profile Post",
  type: "document",
  fields: [
    {
      name: "pageName",
      title: "Page Name",
      description: "Has no affect on website",
      type: "string",
    },
    {
      name: "profileContent",
      title: "Profile Content",
      type: "portablePic",
    },
    {
      name: "socialTitle",
      title: "Social Media Title",
      type: "string",
      desciption: "Follow Bob on Social Media!, etc",
    },
    {
      name: "socialHandles",
      title: "Social Media Info",
      type: "array",
      of: [{ type: "socialHandle" }],
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
};
