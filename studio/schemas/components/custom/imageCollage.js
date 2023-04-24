export default {
  name: "imageCollage",
  title: "image Collage",
  type: "object",
  fields: [
    {
      name: "picCollage",
      title: "Picture Collage",
      type: "array",
      of: [{ type: "pic" }],
      description: "Note: add in pairs of 2",
    },
    {
      name: "text",
      description: "optional text under the image collage",
      title: "Description",
      type: "text",
    },
  ],
};
