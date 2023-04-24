const path = require(`path`);

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
      allSanityRoomsPosts {
        edges {
          node {
            seo {
              slug {
                current
              }
            }
          }
        }
      }
      allSanityProfilePage {
        edges {
          node {
            seo {
              slug {
                current
              }
            }
          }
        }
      }
      allSanityAmpPosts {
        edges {
          node {
            seo {
              slug {
                current
              }
            }
          }
        }
      }
      allSanityServicePage {
        edges {
          node {
            seo {
              slug {
                current
              }
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your service posts`,
      result.errors
    );
    return;
  }
  const rooms = path.resolve("./src//templates/rooms.js");
  const ampPosts = path.resolve(`./src/templates/ampPosts.js`);
  const services = path.resolve(`./src/templates/services.js`);
  const profiles = path.resolve(`./src/templates/profiles.js`);

  result.data.allSanityRoomsPosts.edges.forEach((edge) => {
    createPage({
      path: `rooms/${edge.node.seo.slug.current}`,
      component: rooms,
      context: {
        current: edge.node.seo.slug.current,
      },
    });
  });
  result.data.allSanityServicePage.edges.forEach((edge) => {
    createPage({
      path: `services/${edge.node.seo.slug.current}`,
      component: services,
      context: {
        current: edge.node.seo.slug.current,
      },
    });
  });
  result.data.allSanityAmpPosts.edges.forEach((edge) => {
    createPage({
      path: `portfolio/${edge.node.seo.slug.current}`,
      component: ampPosts,
      context: {
        current: edge.node.seo.slug.current,
      },
    });
  });
  result.data.allSanityProfilePage.edges.forEach((edge) => {
    createPage({
      path: `team/${edge.node.seo.slug.current}`,
      component: profiles,
      context: {
        current: edge.node.seo.slug.current,
      },
    });
  });
};
