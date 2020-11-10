import React from 'react';
import {
  Container, Content, Header, Navbar, Sidebar, Social,
} from '../components';

const IndexPage = () => (
  <Container>
    <Header />
    <Sidebar>
      <Navbar />
      <Social />
    </Sidebar>
    <Content>
      <h1>Hello, World</h1>
    </Content>
  </Container>
);

export default IndexPage;
