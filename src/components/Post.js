import React from 'react';
import PropTypes from 'prop-types';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { PostTitleWrapper, PostWrapper } from './styled';

export const Post = ({ children, title }) => (
  <PostWrapper>
    { title && <PostTitleWrapper dangerouslySetInnerHTML={{ __html: title }} /> }
    <MDXRenderer>
      { children }
    </MDXRenderer>
  </PostWrapper>
);

Post.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  title: PropTypes.string.isRequired,
};
