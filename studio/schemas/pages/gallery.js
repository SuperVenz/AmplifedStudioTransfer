export default {
  name: "gallery",
  title: "Gallery Page",
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
      name: "title",
      title: "Main Title",
      type: "string",
    },

    {
      name: "mainCarousel",
      title: "Main Carousel",
      type: "array",
      description: "First Carousel of pics",
      of: [{ type: "pic" }],
    },
    {
      name: "altCarousel",
      title: "Second  Carousel",
      type: "array",
      description: "Second Carousel of pics",

      of: [{ type: "pic" }],
    },
    {
      name: "videoList",
      title: "Music Videos",
      type: "array",
      of: [{ type: "videoHeader" }],
    },
    {
      name: "seo",
      title: "Seo",
      type: "seo",
    },
  ],
};
