import React from 'react';
import PropTypes from 'prop-types';
import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/github';

export const Code = ({ codeString, language }) => (
  <Highlight
    {...defaultProps}
    code={codeString}
    language={language}
    theme={theme}
  >
    {({
      className, style, tokens, getLineProps, getTokenProps,
    }) => (
      <div className="gatsby-highlight" data-language={language}>
        <pre className={className} style={style}>
          {tokens.map((line, i) => (
            <div {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      </div>
    )}
  </Highlight>
);

Code.propTypes = {
  codeString: PropTypes.string.isRequired,
  language: PropTypes.string.isRequired,
};
