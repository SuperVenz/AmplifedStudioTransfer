export default {
  name: "servicePage",
  title: "Service Post",
  type: "document",
  fields: [
    {
      name: "pageName",
      title: "Page Name",
      description: "Has no affect on website",
      type: "string",
    },
    {
      name: "mainContent",
      title: "Main Service Content",
      type: "portablePic",
      description: "Picture and Article settings",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
};
