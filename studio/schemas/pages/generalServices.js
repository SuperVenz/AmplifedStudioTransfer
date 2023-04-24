export default {
  name: "generalServices",
  title: "General Service Page",
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
      name: "serviceTitle",
      title: "Service Title",
      type: "string",
      description: "Main Title Above Lists of Services",
    },
    {
      name: "services",
      title: "Services Listed",
      description: "Add necessary info and connect to a service page",
      type: "array",
      of: [
        {
          name: "serviceCard",
          title: "Service Card",
          type: "serviceCard",
        },
      ],
    },
    {
      name: "seo",
      title: "Page SEO",
      type: "seo",
    },
  ],
};
