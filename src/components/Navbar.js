import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { NavbarWrapper } from './styled';
import { Button } from './Button';

export const Navbar = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    }
  `);

  const { menuLinks } = data.site.siteMetadata;
  const menu = menuLinks.map((menuLink) => (
    <Button to={menuLink.link} key={menuLink.name}>
      { menuLink.name }
    </Button>
  ));

  return (
    <NavbarWrapper>
      { menu }
    </NavbarWrapper>
  );
};
