exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      allMdx(
        filter: { frontmatter: { slug: { regex: "/^(?!page-).*/" } } }
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
            id
          }
        }
      }
    }
  `);

  const postPerPage = 3;
  const numPages = Math.ceil(data.allMdx.edges.length / postPerPage);

  Array.from({ length: numPages }).forEach((_, i) => {
    actions.createPage({
      path: i === 0 ? '/blog' : `/blog/${i + 1}`,
      component: require.resolve('./src/templates/allPosts.js'),
      context: {
        limit: postPerPage,
        skip: i * postPerPage,
        numPages,
        currentPage: i + 1,
      },
    });
  });

  data.allMdx.edges.forEach((edge) => {
    const { slug } = edge.node.frontmatter;
    const { id } = edge.node;

    actions.createPage({
      path: `/blog/${slug}`,
      component: require.resolve('./src/templates/singlePost.js'),
      context: { id },
    });
  });
};
