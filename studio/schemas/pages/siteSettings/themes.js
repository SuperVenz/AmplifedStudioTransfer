export default {
  name: "themes",
  title: "Themes",
  type: "document",
  fieldsets: [
    {
      name: "font",
      title: "Font Themes",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "general",
      title: "General Theme",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "fontMainColor",
      title: "Main Font Color",
      type: "color",
      fieldset: "font",
    },
    {
      name: "fontAltColor",
      title: "Alternative Font Color",
      type: "color",
      fieldset: "font",
    },
    {
      name: "fontHeaderColor",
      title: "Headers & Title Color",
      type: "color",
      fieldset: "font",
    },
    {
      name: "navBarColor",
      title: "Navbar Background Color",
      type: "color",
      fieldset: "general",
    },
    {
      name: "buttonMainColor",
      title: "Main Button Background Color",
      type: "color",
      fieldset: "general",
    },

    {
      name: "borderMainColor",
      title: "Color for all the borders",
      type: "color",
      fieldset: "general",
    },
    {
      name: "backgroundMainColor",
      title: "Webpage Main Background Color",
      type: "color",
      fieldset: "general",
    },
  ],
};
