export default {
  name: "buttonPageLink",
  title: "Page Link",
  type: "object",
  fields: [
    {
      name: "text",
      title: "Text",
      type: "string",
    },
    {
      name: "pageLink",
      title: "Page Path",
      description:
        " /rooms, /services, /about, /gear, /gallery, /portfolio, /contact ",

      type: "string",
      // to: [
      //   { type: "about" },
      //   { type: "ampPosts" },
      //   { type: "contact" },
      //   { type: "gallery" },
      //   { type: "generalAmp" },
      //   { type: "generalServices" },
      //   { type: "index" },
      //   { type: "profilePage" },
      //   { type: "rooms" },
      //   { type: "roomsPosts" },
      //   { type: "servicePage" },
      //   { type: "gearPage" },
      // ],
      // options: { disableNew: true },
    },
  ],
};
