import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;

    ::selection {
      background-color: #f78ae0;
      color: white;
    }
  }
  body, html {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 14px;
    color: ${(props) => props.theme.fonts.dark};
    overflow: hidden;
    -webkit-font-smoothing: antialiased;
  }
  a {
    font-family: ${(props) => props.theme.fonts.main};
    font-size: 14px;
    color: ${(props) => props.theme.colors.dark};
  }
  b {
    /* font-weight: 400; */
  }
  h1, h2, h3, h4, h5, h6 {
    color: ${(props) => props.theme.colors.dark};
  }
`;
