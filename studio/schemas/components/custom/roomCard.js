export default {
  name: "roomCard",
  title: "Room Card",
  type: "object",
  fields: [
    {
      name: "content",
      title: "Main Content",
      description: "Pic and Text Settings",
      type: "portablePic",
    },
    {
      name: "buttonTitle",
      title: "Button Title",
      type: "string",
    },
    {
      title: "Room Reference",
      description: "Note: Create a new room document to add another room.",
      name: "rooms",
      type: "reference",
      to: [{ type: "roomsPosts" }],
      validation: (Rule) => Rule.required(),
    },
  ],
};
