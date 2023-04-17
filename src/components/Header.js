import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { MobileMenu } from './MobileMenu';
import { HeaderContentWrapper, HeaderWrapper } from './styled';

export const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "images/logo.svg" }) {
        publicURL
      }
    }
  `);

  return (
    <HeaderWrapper>
      <HeaderContentWrapper>
        <Link to="/">
          <img
            src={data.logo.publicURL}
            style={{ height: '48px', width: '48px' }}
            alt="PLEXIDEAS"
          />
        </Link>
        <MobileMenu isOpen={false} />
      </HeaderContentWrapper>
    </HeaderWrapper>
  );
};
