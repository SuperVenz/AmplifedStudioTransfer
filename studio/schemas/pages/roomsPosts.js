export default {
  name: "roomsPosts",
  title: "Room Posts",
  type: "document",
  fields: [
    {
      name: "pageName",
      title: "Page Name",
      description: "Has no affect on website",
      type: "string",
    },
    {
      name: "content",
      title: "Room Info",
      description: "Hero Pic & Article",
      type: "portablePic",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
};
