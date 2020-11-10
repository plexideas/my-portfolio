module.exports = {
  siteMetadata: {
    title: 'PLEXIDEAS by Sakharovskii Sergey',
    menuLinks: [
      {
        name: 'about',
        link: '/',
      },
      {
        name: 'portfolio',
        link: '/portfolio',
      },
      {
        name: 'blog',
        link: '/blog',
      },
      {
        name: 'contact',
        link: '/contact',
      },
    ],
    socialLinks: [
      {
        name: 'github',
        link: '/',
      },
      {
        name: 'linkedin',
        link: '/portfolio',
      },
      {
        name: 'instagram',
        link: '/blog',
      },
      {
        name: 'discord',
        link: '/contact',
      },
    ],
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/content/images`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'mdx',
        path: `${__dirname}/src/content/mdx`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: `${__dirname}/src/content/mdx/posts`,
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.md', '.mdx'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Roboto:300,400,400i,700,700i',
          'Roboto Mono:300,400,400i,700,700i',
        ],
        display: 'swap',
      },
    },
  ],
};
