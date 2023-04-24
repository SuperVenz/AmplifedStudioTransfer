export default {
  name: "artistDevelopment",
  title: "Artist development",
  type: "document",
  fields: [
    {
      name: "seo",
      title: "Page SEO",
      type: "seo",
    },
    {
      name: "mainContent",
      title: "Main Service Content",
      type: "portablePic",
      description: "Picture and Article settings",
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
  ],
};
