import React from 'react';
import {
  Container, Content, Header, Navbar, Sidebar, Social,
} from '../components';

const ContactPage = () => (
  <Container>
    <Header />
    <Sidebar>
      <Navbar />
      <Social />
    </Sidebar>
    <Content>
      <h1>Contact Page</h1>
    </Content>
  </Container>
);

export default ContactPage;
