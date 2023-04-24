export default {
  name: "rooms",
  title: "Room Page",
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
      name: "header",
      title: "Header",
      type: "string",
      description: "Page Header",
    },
    {
      title: "Rooms",
      description: "note: Create a new room document to add another room.",
      name: "rooms",
      type: "array",
      of: [
        {
          type: "roomCard",
        },
      ],
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
};
