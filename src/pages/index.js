import React from 'react';
import {
  Container, Header, Navbar, Sidebar,
} from '../components';

const IndexPage = () => (
  <Container>
    <Header />
    <Sidebar>
      <Navbar />
    </Sidebar>
    <h1>Hello, World</h1>
  </Container>
);

export default IndexPage;
