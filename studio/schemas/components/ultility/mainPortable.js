export default {
  name: "mainPortable",
  title: "Text Editor",
  type: "object",
  fields: [
    {
      name: "portableText",
      title: "Text Editor",
      validation: (Rule) => Rule.required(),
      type: "array",
      of: [
        {
          type: "block",
        },
        {
          type: "buttonPageLink",
          title: "Button",
        },
        {
          type: "imageCollage",
          title: "Image Collage",
        },
        {
          type: "youtubeHeader",
          title: "Youtube Video",
        },
        {
          type: "soundCloud",
          title: "Soundcloud Link",
        },
      ],
    },
  ],
};
