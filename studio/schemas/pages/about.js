export default {
  name: "about",
  title: "About Page",
  type: "document",
  fieldsets: [
    {
      name: "team",
      title: "Team Members",
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
      name: "aboutContent",
      title: "About Us",
      description: "About the company section",
      type: "portablePic",
    },
    {
      name: "cardListTitle",
      title: "Carousel Title",
      type: "string",
      fieldset: "team",
      description: "Team, Meet our Members, etc",
    },
    {
      name: "aboutCards",
      title: "Team Member Cards",
      type: "array",
      fieldset: "team",
      description: "Add who you want to feature",
      of: [{ type: "aboutCard" }],
    },
    {
      name: "seo",
      title: "Page SEO",
      type: "seo",
    },
  ],
};
