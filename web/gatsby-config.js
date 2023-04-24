module.exports = {
  siteMetadata: {
    title: `Amplified Studios`,
    siteUrl: `https://www.amplifiedstudios.com`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-plugin-netlify`,
    "gatsby-plugin-remove-serviceworker",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Amplified Studios`,
        short_name: `Amp Studios`,
        start_url: `/`,
        background_color: `#0C519A`,
        theme_color: `#0C519A`,
        display: `standalone`,
        icon: `src/style/images/icon.png`, // This path is relative to the root of the site.
        cache_busting_mode: "none",
        crossOrigin: `use-credentials`, // `use-credentials` or `anonymous`
      },
    },

    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: "99znwbju",
        dataset: "production",
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: "GTM-5MD3W6Z",
        // Include GTM in development.
        includeInDevelopment: false,
        enableWebVitalsTracking: true,
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/style/images/",
      },
      __key: "images",
    },
    {
      /* Include plugin */
      resolve: "gatsby-omni-font-loader",

      /* Plugin options */
      options: {
        /* Font loading mode */
        mode: "async",
        enableListener: true,
        /* Self-hosted fonts config. Add font files and font CSS files to "static" folder */
        custom: [
          {
            /* Exact name of the font as defied in @font-face CSS rule */
            name: ["Typewriter Serial"],
            /* Path to the font CSS file inside the "static" folder with @font-face definition */
            file: "./fonts/globalstyles.css",
          },
        ],
      },
    },
  ],
};
