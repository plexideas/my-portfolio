import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { MDXProvider } from '@mdx-js/react';
import { preToCodeBlock } from 'mdx-utils';
import { Table, Code } from './src/components';
import { GlobalStyles } from './src/styles/global';
import theme from './src/styles/theme';
import store from './src/store';

import './language-tabs.css';

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
