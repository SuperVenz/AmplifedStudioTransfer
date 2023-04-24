export default {
  name: "gearCard",
  title: "Gear Card",
  type: "object",
  fields: [
    {
      name: "bgPicture",
      title: "Background Picture",
      type: "pic",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "callToAction",
      title: "Call too Action",
      type: "buttonPageLink",
    },
  ],
};
