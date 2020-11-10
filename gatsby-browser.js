import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import theme from './src/themes/theme';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body, html {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 14px;
    color: ${(props) => props.theme.fonts.dark};
  }
  a {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 14px;
    color: ${(props) => props.theme.colors.dark};
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.dark};
  }
`;

export const wrapRootElement = ({ element }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    {element}
  </ThemeProvider>
);
