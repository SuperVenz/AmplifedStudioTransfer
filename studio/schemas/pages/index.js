export default {
  name: "index",
  title: "Home Page",
  type: "document",
  fieldsets: [
    {
      name: "educate",
      title: "Education Section",
      description: "Pic & Article, Studio Statistics & Gear Carousel",

      options: { collapsible: true, collapsed: true },
    },
    {
      name: "experience",
      title: "Experience Section",
      description: "Video portion of the landing page",

      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "hero",
      title: "Hero Section",
      description: "Hero Image, Text Content and Button Settings",
      type: "hero",
    },
    {
      name: "educate",
      title: "Content,Statistics,Gear",
      type: "educate",
      fieldset: "educate",
    },
    {
      name: "videoContent",
      title: "Video Settings",
      description:
        "Note: Upload the video on youtube private and share the link here",
      fieldset: "experience",
      type: "videoHeader",
    },
    {
      name: "serviceNav",
      title: "Services",
      description: "Note: Uses the same services for the general service page",
      type: "reference",
      to: [{ type: "generalServices" }],
    },
    {
      name: "instagram",
      title: "Instagram embed",
      description: "Shows a snapshot of your instagram profile",
      type: "url",
    },
    {
      name: "seo",
      title: "Page SEO",
      type: "seo",
    },
  ],
};
