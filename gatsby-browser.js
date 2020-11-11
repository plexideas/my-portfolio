import React from 'react';
import { Provider } from 'react-redux';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import { Table, Code } from './src/components';
import theme from './src/themes/theme';
import store from './src/store';

import './language-tabs.css';

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
    overflow: hidden;
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

const components = {
  table: Table,
  pre: (preProps) => {
    const props = preToCodeBlock(preProps);
    if (props) {
      return <Code {...props} />;
    }
    return <pre {...preProps} />;
  },
  // eslint-disable-next-line react/prop-types
  wrapper: ({ children }) => <>{children}</>,
};

export const wrapRootElement = ({ element }) => (
  <Provider store={store}>
    <MDXProvider components={components}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {element}
      </ThemeProvider>
    </MDXProvider>
  </Provider>
);
