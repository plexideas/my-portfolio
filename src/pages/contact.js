import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import {
  Container, Content, Header, Navbar, Post, Seo, Sidebar, Social,
} from '../components';

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: {slug: {eq: "page-contact"}}) {
        body
        frontmatter {
          title
        }
      }
    }
  `);

  const { body } = data.mdx;
  const { title } = data.mdx.frontmatter;

  return (
    <Container>
      <Seo />
      <Header />
      <Sidebar>
        <Navbar />
        <Social />
      </Sidebar>
      <Content>
        <Post title={title || ''}>
          { body }
        </Post>
      </Content>
    </Container>
  );
};

export default ContactPage;
