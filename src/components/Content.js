import React from 'react';
import PropTypes from 'prop-types';
import { ContentWrapper } from './styled/ContentElements';

export const Content = ({ children }) => (
  <ContentWrapper>{ children }</ContentWrapper>
);

Content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
