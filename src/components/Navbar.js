import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useDispatch, useSelector } from 'react-redux';
import { NavbarWrapper } from './styled';
import { Button } from './Button';
import { actionCommonSetIsMobileMenuVisible } from '../store/actions/commonAction';

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

  const dispatch = useDispatch();
  const isMobileMenuVisible = useSelector((state) => (
    state.common.isMobileMenuVisible
  ));

  const onClickHandler = () => {
    if (isMobileMenuVisible) {
      dispatch(actionCommonSetIsMobileMenuVisible(false));
    }
  };

  const { menuLinks } = data.site.siteMetadata;
  const menu = menuLinks.map((menuLink) => (
    <Button
      onClick={onClickHandler}
      to={menuLink.link}
      key={menuLink.name}
    >
      { menuLink.name }
    </Button>
  ));

  return (
    <NavbarWrapper>
      { menu }
    </NavbarWrapper>
  );
};
