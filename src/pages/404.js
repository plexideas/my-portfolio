import React from 'react';
import {
  Container, Content, Header, Navbar, Sidebar, Social,
} from '../components';

const NotFound = () => (
  <Container>
    <Header />
    <Sidebar>
      <Navbar />
      <Social />
    </Sidebar>
    <Content>
      <h1>Page not found :(</h1>
    </Content>
  </Container>
);

export default NotFound;
