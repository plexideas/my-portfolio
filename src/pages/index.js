import React from 'react';
import {
  Container, Header, Navbar, Sidebar, Social,
} from '../components';

const IndexPage = () => (
  <Container>
    <Header />
    <Sidebar>
      <Navbar />
      <Social />
    </Sidebar>
    <h1>Hello, World</h1>
  </Container>
);

export default IndexPage;
