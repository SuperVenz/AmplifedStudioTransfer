export default {
  name: "serviceCard",
  title: "sevice Cards",
  type: "object",
  fields: [
    {
      name: "cardTitle",
      title: "Card Title",
      type: "string",
    },
    {
      name: "description",
      title: "Dropdown Content",
      type: "article",
    },
    {
      name: "button",
      title: "Button Text",
      description: "Note: This is button inside the dropdown box",
      type: "string",
    },
    {
      name: "serviceRef",
      title: "Service Reference",
      type: "reference",
      to: [{ type: "servicePage" }],
      description: "What service is this card related too?",
      validation: (Rule) => Rule.required(),
    },
  ],
};
