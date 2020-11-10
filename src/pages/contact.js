import React from 'react';
import {
  Container, Header, Navbar, Sidebar, Social,
} from '../components';

const ContactPage = () => (
  <Container>
    <Header />
    <Sidebar>
      <Navbar />
      <Social />
    </Sidebar>
    <h1>Contact Page</h1>
  </Container>
);

export default ContactPage;
