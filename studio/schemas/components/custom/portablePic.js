export default {
  name: "portablePic",
  title: "Pic & Article",
  type: "object",
  fields: [
    {
      name: "pic",
      title: "Pic",
      type: "pic",
    },
    {
      name: "portableText",
      title: "Article",
      type: "mainPortable",
      validation: (Rule) => Rule.required(),
    },
  ],
};
