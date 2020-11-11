import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { SocialIcon, SocialWrapper } from './styled';

export const Social = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          socialLinks {
            name
            link
          }
        }
      }
      allFile(filter: {relativeDirectory: {eq: "images/social"}}) {
        edges {
          node {
            name
            publicURL
          }
        }
      }
    }
  `);

  const { socialLinks } = data.site.siteMetadata;
  const icons = data.allFile.edges;

  const socialIcons = socialLinks.map((socialLink) => {
    const { node } = icons.find((icon) => icon.node.name === socialLink.name);
    return (
      <Link to={socialLink.link} key={socialLink.name}>
        <SocialIcon
          src={node.publicURL}
          alt={socialLink.name}
        />
      </Link>
    );
  });

  return (
    <SocialWrapper>
      <h4>SOCIAL</h4>
      <div>
        { socialIcons }
      </div>
    </SocialWrapper>
  );
};
