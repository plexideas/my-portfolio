import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        author
        url
      }
    }
  }
`;

export const Seo = ({
  description, keywords, title, url, author,
}) => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => {
      const metaDescription = description || data.site.siteMetadata.description;
      const metaTitle = title || data.site.siteMetadata.title;
      const metaAuthor = author || data.site.siteMetadata.author;
      const metaUrl = url || data.site.siteMetadata.url;
      const metaKeywords = keywords;
      return (
        <Helmet
          title={metaTitle}
          meta={[
            {
              name: 'description',
              content: metaDescription,
            },
            {
              property: 'og:title',
              content: metaTitle,
            },
            {
              property: 'og:description',
              content: metaDescription,
            },
            {
              property: 'og:type',
              content: 'website',
            },
            {
              property: 'og:url',
              content: metaUrl,
            },
            {
              property: 'twitter:card',
              content: 'summary_large_image',
            },
            {
              property: 'twitter:creator',
              content: metaAuthor,
            },
            {
              property: 'twitter:title',
              content: metaTitle,
            },
            {
              property: 'twitter:description',
              content: metaDescription,
            },
          ].concat(
            metaKeywords && metaKeywords.length > 0 ? {
              name: 'keywords',
              content: metaKeywords.join(', '),
            } : [],
          )}
        >
          <html lang="en" />
          {/* favicon */}
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
        </Helmet>
      );
    }}
  />
);

Seo.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  author: PropTypes.string,
  url: PropTypes.string,
};

Seo.defaultProps = {
  description: '',
  title: '',
  keywords: ['sakharovskii sergei', 'plexideas', '8bitago'],
  author: '',
  url: '',
};
