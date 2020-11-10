import { graphql } from 'gatsby';
import React from 'react';
import {
  Container, ContentCard, Header, Navbar, Sidebar, Social,
} from '../components';

const allPosts = ({ pageContext, data }) => {
  console.log({ data });
  console.log({ pageContext });
  const posts = data.allMdx.edges;

  const postList = posts.map((post) => (
    <ContentCard
      key={post.node.frontmatter.slug}
      title={post.node.frontmatter.title}
      slug={post.node.frontmatter.slug}
      date={post.node.frontmatter.date}
      excerpt={post.node.frontmatter.excerpt}
    />
  ));

  return (
    <Container>
      <Header />
      <Sidebar>
        <Navbar />
        <Social />
      </Sidebar>
      { postList }
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
            title
            date
            excerpt
          }
          id
        }
      }
    }
  }
`;
