import { graphql } from 'gatsby';
import React from 'react';
import {
  Container, Card, Header, Navbar, Sidebar, Social, Content, Seo,
} from '../components';

// comment

// comment
// comment 2
// comment 3
// comment 4

const allPosts = ({ pageContext, data }) => {
  console.log({ pageContext });
  const posts = data.allMdx.edges;
  const postList = posts.map((post) => (
    <Card
      key={post.node.frontmatter.slug}
      title={post.node.frontmatter.title}
      slug={post.node.frontmatter.slug}
      date={post.node.frontmatter.date}
      excerpt={post.node.frontmatter.excerpt}
    />
  ));

  return (
    <Container>
      <Seo />
      <Header />
      <Sidebar>
        <Navbar />
        <Social />
      </Sidebar>
      <Content>
        { postList }
      </Content>
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
