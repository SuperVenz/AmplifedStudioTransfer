export default {
  name: "gearPage",
  title: "Gear Page",
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
      name: "heroPic",
      title: "Hero Pic",
      type: "pic",
    },
    {
      name: "gearCatagories",
      title: "List of Gear",
      type: "array",
      description: "Each entry is a pic and list of gear",
      of: [{ type: "portablePic" }],
    },
    {
      name: "seo",
      title: "Page SEO",
      type: "seo",
    },
  ],
};
