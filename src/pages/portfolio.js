import React from 'react';
import {
  Container, Header, Navbar, Sidebar, Social,
} from '../components';

const PortfolioPage = () => (
  <Container>
    <Header />
    <Sidebar>
      <Navbar />
      <Social />
    </Sidebar>
    <h1>Portfolio Page</h1>
  </Container>
);

export default PortfolioPage;
