export default {
  name: "contact",
  title: "Contact Page",
  type: "document",
  fields: [
    {
      name: "pageName",
      title: "Page Name",
      readOnly: true,
      hidden: true,
      description: "Has no affect on website",
      type: "string",
    },
    {
      name: "contactContent",
      title: "Contact Content",
      type: "portablePic",
    },
    {
      name: "seo",
      title: "Page SEO",
      type: "seo",
    },
  ],
};
