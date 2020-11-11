import { graphql, Link, useStaticQuery } from 'gatsby';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { actionCommonSetIsMobileMenuVisible } from '../store/actions/commonAction';
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
  const dispatch = useDispatch();
  const isMobileMenuVisible = useSelector((state) => (
    state.common.isMobileMenuVisible
  ));

  const onClickHandler = () => {
    if (isMobileMenuVisible) {
      dispatch(actionCommonSetIsMobileMenuVisible(false));
    }
  };

  const { socialLinks } = data.site.siteMetadata;
  const icons = data.allFile.edges;

  const socialIcons = socialLinks.map((socialLink) => {
    const { node } = icons.find((icon) => icon.node.name === socialLink.name);
    return (
      <Link
        to={socialLink.link}
        key={socialLink.name}
        onClick={onClickHandler}
      >
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
