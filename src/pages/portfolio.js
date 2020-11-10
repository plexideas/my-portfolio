import React from 'react';
import {
  Container, Content, Header, Navbar, Sidebar, Social,
} from '../components';

const PortfolioPage = () => (
  <Container>
    <Header />
    <Sidebar>
      <Navbar />
      <Social />
    </Sidebar>
    <Content>
      <h1>Portfolio Page</h1>
    </Content>
  </Container>
);

export default PortfolioPage;
