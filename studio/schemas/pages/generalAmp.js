export default {
  name: "generalAmp",
  title: "Amplified Landing Page",
  type: "document",
  fieldsets: [
    {
      name: "first",
      title: "First Section - Soundcloud",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "second",
      title: "Second Section - Youtube",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "third",
      title: "Third Section - Itunes",
      options: { collapsible: true, collapsed: true },
    },
  ],
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
      name: "headerMain",
      title: "Header",
      type: "string",
      fieldset: "first",
    },
    {
      name: "mainCarousel",
      title: "List of Sound Cloud Links",
      type: "array",
      of: [{ type: "portableLinks" }],
      description: "A list of youtube videos that are linked to a blog post",
      fieldset: "first",
    },
    {
      name: "middleHeader",
      title: "Header Section",
      type: "string",
      fieldset: "second",
    },
    {
      name: "middleCarousel",
      title: "List Video",
      type: "array",
      of: [{ type: "videoLink" }],
      description: "A list of youtube videos that are linked to a blog post",
      fieldset: "second",
    },
    {
      name: "finalHeader",
      title: "Last Header Section",
      type: "string",
      fieldset: "third",
    },
    {
      name: "finalCarousel",
      title: "List of Itunes Links",
      type: "array",
      of: [{ type: "portableLinks" }],
      description: "A list of youtube videos that are linked to a blog post",
      fieldset: "third",
    },
    {
      name: "seo",
      title: "SEO",
      type: "seo",
    },
  ],
};
