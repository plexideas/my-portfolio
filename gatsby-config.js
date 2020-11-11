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
        link: 'https://github.com/plexideas',
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/plexideas/',
      },
      {
        name: 'instagram',
        link: 'https://www.instagram.com/8bitago/',
      },
      {
        name: 'discord',
        link: 'https://discordapp.com/users/616631617829732372',
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
          'Roboto:100,300,400,400i,700,700i',
          'Roboto Mono:300,400,400i,700,700i',
        ],
        display: 'swap',
      },
    },
  ],
};
