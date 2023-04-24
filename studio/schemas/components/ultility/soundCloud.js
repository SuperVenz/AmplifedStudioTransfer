export default {
  name: "soundCloud",
  title: "Youtube Video",
  type: "object",
  fields: [
    {
      name: "title",
      title: "Title",
      description: "Video Header",
      type: "string",
    },
    {
      name: "video",
      title: "Soundcloud Embeded Link",
      description: "Note: Upload video on youtube private and share link here",
      type: "url",
    },
  ],
};
