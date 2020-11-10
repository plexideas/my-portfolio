import React from 'react';
import PropTypes from 'prop-types';
import { ButtonWrapper } from './styled';

export const Button = ({ children, to }) => (
  <ButtonWrapper to={to}>
    { children }
  </ButtonWrapper>
);

Button.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  to: PropTypes.string.isRequired,
};
