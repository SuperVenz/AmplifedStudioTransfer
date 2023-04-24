import React from "react";
export default {
  name: "videoHeader",
  title: "Video With Header",
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
      title: "Youtube Embeded Link",
      description: "Note: Upload video on youtube private and share link here",
      type: "url",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "textContent",
      title: "Main Editor",
      type: "mainPortable",
    },
  ],
};
