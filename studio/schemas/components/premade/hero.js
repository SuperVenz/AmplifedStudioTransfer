export default {
  name: "hero",
  title: "Hero",
  type: "object",
  fieldsets: [
    {
      name: "image",
      title: "Hero Section",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "content",
      title: "Settings",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "pic",
      title: "Hero Background Image",
      description: "Pic & Alt",
      fieldset: "content",
      type: "pic",
    },
    {
      name: "content",
      title: "Header and text",
      description: "Hero Title and Text",
      fieldset: "content",
      type: "article",
    },
    {
      name: "button",
      description: "Title & Link",
      title: "Call too Action",
      fieldset: "content",
      type: "buttonPageLink",
    },
  ],
};
