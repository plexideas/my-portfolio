import { graphql } from 'gatsby';
import React from 'react';

const allPosts = ({ pageContext, data }) => {
  console.log({ data });
  console.log({ pageContext });

  return <div>All Posts</div>;
};

export default allPosts;

export const pageQuery = graphql`
  query {
    allMdx(filter: { frontmatter: { slug: { regex: "/^(?!page-).*/" } } }) {
      edges {
        node {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  }
`;
