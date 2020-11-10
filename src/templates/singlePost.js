import { graphql } from 'gatsby';
import React from 'react';
import {
  Container, Header, Navbar, Sidebar, Social, Content, Post,
} from '../components';

const singlePost = ({ data }) => {
  const { body } = data.mdx;
  const { title } = data.mdx.frontmatter;

  return (
    <Container>
      <Header />
      <Sidebar>
        <Navbar />
        <Social />
      </Sidebar>
      <Content>
        <Post title={title}>
          { body }
        </Post>
      </Content>
    </Container>
  );
};

export default singlePost;

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        excerpt
        slug
        title
      }
    }
  }
`;
