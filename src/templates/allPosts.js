import { graphql } from 'gatsby';
import React from 'react';
import {
  Container, Header, Navbar, Sidebar, Social,
} from '../components';

const allPosts = ({ pageContext, data }) => {
  console.log({ data });
  console.log({ pageContext });

  return (
    <Container>
      <Header />
      <Sidebar>
        <Navbar />
        <Social />
      </Sidebar>
      <h1>All posts</h1>
    </Container>
  );
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
