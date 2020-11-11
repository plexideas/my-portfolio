import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import { MobileMenuButton } from './styled';

export const MobileMenu = ({ isOpen }) => {
  const data = useStaticQuery(graphql`
    query {
      hamburger: file(relativePath: { eq: "images/hamburger.svg" }) {
        publicURL
      }
      close: file(relativePath: { eq: "images/close.svg" }) {
        publicURL
      }
    }
  `);
  const icon = isOpen ? data.close : data.hamburger;

  return (
    <MobileMenuButton>
      <img src={icon.publicURL} alt="X" />
    </MobileMenuButton>
  );
};

MobileMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
};

MobileMenu.defaulProps = {
  isOpen: false,
};
