export default {
  name: "headerFooter",
  title: "Header & Footer",
  type: "document",
  fieldsets: [
    {
      name: "header",
      title: "Header",
      options: { collapsible: true, collapsed: true },
    },
    {
      name: "footer",
      title: "Footer",
      options: { collapsible: true, collapsed: true },
    },
  ],
  fields: [
    {
      name: "navLinks",
      title: "Navbar Links",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            { type: "index" },
            { type: "generalServices" },
            { type: "about" },
            { type: "generalAmp" },
            { type: "gallery" },
            { type: "gearPage" },
            { type: "rooms" },
          ],
        },
      ],
    },
    {
      name: "footertitle",
      title: "Footer Title",
      type: "string",
    },
    {
      name: "gpsTitle",
      title: "GPS Map Title",
      type: "string",
    },
  ],
};
