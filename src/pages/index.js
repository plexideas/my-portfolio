import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {
  Container, Content, Header, Navbar, Post, Sidebar, Social,
} from '../components';

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: {slug: {eq: "page-about"}}) {
        body
        frontmatter {
          slug
          title
          excerpt
        }
      }
    }
  `);

  return ((
    <Container>
      <Header />
      <Sidebar>
        <Navbar />
        <Social />
      </Sidebar>
      <Content>
        <Post title={data.mdx.frontmatter.title}>
          { data.mdx.body }
        </Post>
      </Content>
    </Container>
  ));
};

export default IndexPage;
