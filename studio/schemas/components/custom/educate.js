export default {
  name: "educate",
  title: "Educate Your Customers",
  type: "object",
  fieldsets: [
    {
      name: "carousel",
      title: "Carousel Settings",
      description: "List all the gear you want to highlight",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "mainContent",
      title: "Content",
      description: "Main, Text Content, Contains Article and Picture Settings",
      type: "picArticle",
    },
    {
      name: "statisticList",
      title: "Statistics",
      description: "note: The Highlighted text is for a number",
      type: "array",
      of: [{ type: "highlightText" }],
    },
    {
      name: "carouselTitle",
      title: "Carousel Title",
      fieldset: "carousel",
      type: "string",
    },
    {
      name: "gearCarousel",
      title: "Gear Carousel",
      fieldset: "carousel",
      type: "array",
      of: [{ type: "gearCard" }],
    },
  ],
};
